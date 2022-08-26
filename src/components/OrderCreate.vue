<template>
  <div class="bg-light" id="create">
    <div class="container py-5">
      <h2 class="text-center text-dark">我要點播</h2>
      <div class="row no-gutters justify-content-end">
        <div class="col-md-6 bg-light p-3 h-100">
          <div class="row justify-content-between align-items-center">
            <div class="col-md-5">
              <h4 v-if="userToken == ''">華語單曲日榜</h4>
              <div class="form-group" v-else>
                <label for="exampleFormControlSelect1">我的歌單</label>
                <select class="form-control" id="exampleFormControlSelect1" v-model="playListId">
                  <option v-for="(d, index) in playListDropdown" :key="index" :value="d.id">{{ d.title }}</option>
                </select>
               </div>
            </div>
            <div class="col-md-5">
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="輸入內容" v-model="search" @keyup.enter="searchTrack">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2"
                    @click.prevent="searchTrack">搜尋</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-md-6 bg-light px-3 h-100">
          <div class="form-group row">
            <label for="whoAmI" class="col-sm-2 col-form-label text-nowrap">我是</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="whoAmI" placeholder="我是誰？" v-model="request.name">
            </div>
          </div>
          <div class="form-group row">
            <label for="toName" class="col-sm-2 col-form-label text-nowrap">我想對</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="toName" placeholder="想點給誰呢？" v-model="request.toName">
            </div>
          </div>
          <div class="form-group row">
            <label for="message" class="col-sm-2 col-form-label text-nowrap">說</label>
            <div class="col-sm-10">
              <textarea class="form-control" id="message" placeholder="想對他/她說些什麼呢？"
                v-model="request.message"></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-2 text-nowrap">點播歌曲</div>
            <div class="col-sm-10">
              <p v-if="request.songInfo.singer">{{ request.songInfo.singer }} - {{ request.songInfo.songName }}</p>
              <p v-else>請從右方歌曲列表選擇欲點播歌曲</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <p v-if="search !== ''">搜尋結果: {{searchResultCount}} 筆</p>
          <p class="text-center" v-if="tracks.length === 0">此歌單沒有歌曲</p>
          <SongList :tracks="tracks" @orderSong="orderSongData"></SongList>
        </div>
      </div>
      <div class="clearfix">
        <button class="btn btn-primary float-right my-3"
          :class="{'disabled': request.songInfo.songID == '' || request.message.trim() == ''}" :disabled="request.songInfo.songID == '' || request.message.trim() == ''"
          @click.prevent="submitRequestSong">送出點播</button>
      </div>
    </div>
  </div>
</template>

<script>
import SongList from './SongList.vue';

export default {
  name: 'OrderCreate',
  props: ['userToken'],
  components: {
    SongList,
  },
  data() {
    return {
      tracks: [],
      request: {
        name: '',
        toName: '',
        message: '',
        songInfo: {
          songID: '',
          songName: '',
          songPic: '',
          singer: '',
        },
        isPlay: false,
      },
      search: '',
      searchResult: [],
      searchResultCount: 0,
      userPlayListName: '',
      playListDropdown: [],
      playListId: '',
    };
  },
  methods: {
    getHotMusic() {
      const vm = this;
      vm.axios.get('https://api.kkbox.com/v1.1/charts/PYQbSKw4piAuZAS8z8?territory=TW').then((response) => {
        vm.tracks = response.data.tracks.data;
      });
    },
    getMyMusic() {
      const vm = this;
      vm.axios.get('https://api.kkbox.com/v1.1/me/playlists', { headers: { Authorization: `Bearer ${vm.userToken}` } }).then((response) => {
        vm.playListDropdown = response.data.data;
        vm.playListId = response.data.data[0].id;
      });
    },
    getMyPlayList(id) {
      const vm = this;
      vm.axios.get(`https://api.kkbox.com/v1.1/me/playlists/${id}`, { headers: { Authorization: `Bearer ${vm.userToken}` } }).then((response) => {
        vm.tracks = response.data.tracks.data;
        vm.userPlayListName = response.data.title;
      });
    },
    orderSongData(value) {
      const vm = this;
      vm.request.songInfo = value;
    },
    searchTrack() {
      const vm = this;
      vm.axios.get(`https://api.kkbox.com/v1.1/search?q=${vm.search}&type=artist,track&territory=TW`).then((response) => {
        vm.tracks = response.data.tracks.data;
        vm.searchResultCount = response.data.summary.total;
      });
    },
    submitRequestSong() {
      const vm = this;
      vm.$bus.$emit('message', '點播成功', `${vm.request.name}，你的點播送出了！`);
      db.ref('requestSongs').push().set(vm.request);
      vm.request = {
        name: '',
        toName: '',
        message: '',
        songInfo: {
          songID: '',
          songName: '',
          songPic: '',
          singer: '',
        },
        isPlay: false,
      };
      window.scrollTo(0, 0);
    },
    slideToBottom(status) {
      if (status) {
        const createEleH = document.getElementById('create').offsetTop;
        window.scrollTo({ left: 0, top: createEleH, behavior: 'smooth' });
      }
    },
  },
  watch: {
    playListId(val) {
      const vm = this;
      vm.getMyPlayList(val);
    },
    search(val) {
      const vm = this;
      if (val == '') {
        vm.searchResult = [];
      }
    },
  },
  mounted() {
    const vm = this;
    vm.$bus.$on('slideToCreate', (status) => {
      vm.slideToBottom(status);
    });
    console.log('vm.userToken', vm.userToken);
    if (vm.userToken && vm.userToken !== '') {
      vm.getMyMusic();
    } else {
      vm.getHotMusic();
    }
  },
};
</script>
