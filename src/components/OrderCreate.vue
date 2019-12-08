<template>
  <div class="bg-light">
    <div class="container py-5">
      <h2 class="text-center text-dark">我要點播</h2>
      <form class="mb-4" id="create">
        <div class="row no-gutters align-items-center">
          <div class="col-md-6 bg-light p-3 h-100">
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label text-nowrap">我是</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputPassword" placeholder="我是誰？" v-model="request.name">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label text-nowrap">我想對</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputPassword" placeholder="想點給誰呢？" v-model="request.toName">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label text-nowrap">說</label>
              <div class="col-sm-10">
                <textarea class="form-control" id="inputPassword" placeholder="想對他/她說些什麼呢？" v-model="request.message"></textarea>
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
            <div class="row justify-content-between align-items-center">
              <div class="col-md-5">
                <h4>華語單曲日榜</h4>
              </div>
              <div class="col-md-5">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="輸入內容" v-model="search" @keyup.enter="searchTrack">
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="searchTrack">搜尋</button>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="searchResult.length > 0">
              <p>搜尋結果: {{searchResultCount}} 筆</p>
              <div class="list-group" style="max-height: 350px; overflow-y: scroll;">
                <a href="#" class="list-group-item list-group-item-action" v-for="track in searchResult" :key="track.id">
                  <div class="media d-flex align-items-center">
                    <img :src="track.album.images[1].url" class="mr-3 img-fluid" alt="" width="80">
                    <div class="media-body d-flex justify-content-between align-items-center">
                      <div>
                        <p class="mt-0 mb-0">{{ track.name }}</p>
                        <p class="mb-0"><small>{{ track.album.artist.name }}</small></p>
                      </div>
                      <div class="clearfix mr-3">
                        <button type="button" class="float-right btn btn-outline-primary rounded-pill px-4 text-nowrap" @click.prevent="orderSong(track)">點播</button>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div v-else class="list-group mt-3" style="max-height: 350px; overflow-y: scroll;">
              <a href="#" class="list-group-item list-group-item-action" v-for="track in tracks" :key="track.id">
                <div class="media d-flex align-items-center">
                  <img :src="track.album.images[1].url" class="mr-3 img-fluid" alt="" width="60">
                  <div class="media-body d-flex justify-content-between align-items-center">
                    <div>
                      <p class="mt-0 mb-0">{{ track.name }}</p>
                      <p class="mb-0"><small>{{ track.album.artist.name }}</small></p>
                    </div>
                    <div class="clearfix mr-3">
                      <button type="button" class="float-right btn btn-primary rounded-pill px-4 text-nowrap" @click.prevent="orderSong(track)">點播</button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <button class="btn btn-primary float-right my-3" :class="{'disabled': request.songInfo.songID == '' || request.message == ''}" @click.prevent="submitRequestSong">送出點播</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderCreate',
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
    }
  },
  methods: {
    getHotMusic() {
      const vm = this;
      vm.axios.get(`https://api.kkbox.com/v1.1/charts/PYQbSKw4piAuZAS8z8?territory=TW`).then((response) => {
        vm.tracks = response.data.tracks.data;
      })
    },
    orderSong(track) {
      const vm = this;
      vm.request.songInfo.songID = track.id
      vm.request.songInfo.songName = track.name
      vm.request.songInfo.songPic = track.album.images[1].url
      vm.request.songInfo.singer = track.album.artist.name
    },
    searchTrack() {
      const vm = this;
      vm.axios.get(`https://api.kkbox.com/v1.1/search?q=${vm.search}&type=artist,track&territory=TW`).then((response) => {
        vm.searchResult = response.data.tracks.data;
        vm.searchResultCount = response.data.summary.total;

      })
    },
    submitRequestSong() {
      const vm = this;
      db.ref('requestSongs').push().set(vm.request);
    },
  },
  watch: {
    search(val) {
      const vm = this;
      if (val == '') {
        vm.searchResult = [];
      }
    }
  },
  mounted() {
    this.getHotMusic();
  }
};
</script>