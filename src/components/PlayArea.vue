<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <a href="https://us-central1-linebot-f2c38.cloudfunctions.net/kkUser" class="btn btn-lg btn-primary rounded-pill position-absolute" style="z-index: 1000; right: 10px; top:10px;" :class="{'disabled': userToken != ''}">{{ userToken != ''? '已登入': '登入 KKBOX'}}</a>
    <div class="position-relative playArea" style="overflow: hidden;">
      <div class="position-absolute" style="top:0;bottom:0;left:0;right:0;filter: blur(10px); min-height: 550px; background: no-repeat center center; background-size: cover;box-shadow:0 0 0 0 rgba(0,150,200,1),inset 0 0 0 1px rgba(0,150,200,1);"
      :style="{'background-image': 'url(' + messageInfo.songInfo.songPic + ')'}"></div>
      <div class="position-absolute" style="background: rgba(40, 48, 89, 0.7); left: 0; right: 0;top: 0;bottom: 0;"></div>
      <div class="container position-absolute" style="top: 50%; left:50%; transform: translate(-50%, -50%);">
        <div class="row justify-content-center">
          <div class="col-md-4">
            <div class="p-3" style="background: white;">
              <img :src="messageInfo.songInfo.songPic" alt="" class="img-fluid">
              <div class="timer mt-3">
                <div id="bar" class="bar"></div>
              </div>
              <div class="d-md-none d-block">
                <div v-if="now == 'play'">
                  <p class="mb-0 mt-2"> 我是 {{messageInfo.name}}，我想對 {{messageInfo.toName}} 說：</p>
                  <p class="mb-0">{{messageInfo.message}}</p>
                </div>
                <div v-else>
                  <p class="mb-0 mt-2">暫無點播歌曲，趕快來點播吧！</p>
                  <a href="#" @click.prevent="slideBottom" class="text-dark">我想點播</a>
                </div>
              </div>
              <p class="mb-0 mt-2"># {{ messageInfo.songInfo.songName }}</p>
              <p class="mb-0"># {{ messageInfo.songInfo.singer }}</p>
            </div>
          </div>
          <div class="col-md-6 d-md-block d-none">
            <div class="container h-100" v-if="now == 'play'">
              <div class="bubble you animated fadeInUp">
                我是 {{messageInfo.name}}，我想對 {{messageInfo.toName}} 說：
              </div>
              <br>
              <div class="bubble you delay-1 animated fadeInUp">
                {{messageInfo.message}}
              </div>
              <br>
              <div class="bubble you delay-2 animated fadeInUp">
                點播這首『{{messageInfo.songInfo.singer}} - {{messageInfo.songInfo.songName}}』
              </div>
            </div>
            <div class="container h-100" v-else>
              <div class="h-100 text-white p-2 text-center d-flex flex-column align-items-center justify-content-center"
                style="background: rgba(0,0,0,0.7);">
                <h4>暫時沒有新的點播</h4>
                <a href="#" @click.prevent="slideBottom" class="btn btn-primary rounded-pill">我想點播</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="play-area" class="position-absolute w-100" style="bottom: -10px;">
        <iframe src="" id="videoplayer" class="w-100 border-0" allow="autoplay" meted="meted" style="z-index: -1; position: relative;"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: 'PlayArea',
  props: ['data', 'load'],
  data() {
    return {
      now: '',
      isLoading: true,
      loadFinish: this.load,
      tracks: [],
      messageInfo: {
        name: '',
        toName: '',
        message: '',
        songInfo: {
          songID: '',
          singer: '',
          songName: '',
          songPic: '',
        },
      },
      userToken: '',
    };
  },
  methods: {
    getHotMusic() {
      const vm = this;
      return new Promise((resolve, reject) => {
        vm.axios.get('https://api.kkbox.com/v1.1/charts/PYQbSKw4piAuZAS8z8?territory=TW').then((response) => {
          vm.tracks = response.data.tracks.data;
          resolve('get');
        });
      });
    },
    playNextMusic() {
      const vm = this;
      vm.now = 'play';
      if (vm.musicList.length > 0) {
        const trackID = vm.musicList[0].songInfo.songID;
        vm.messageInfo = vm.musicList[0];
        window.frames[0].location = `https://widget.kkbox.com/v1/?id=${trackID}&type=song&terr=TW&lang=TC&autoplay=true`;
      }
    },
    playRandomMusic() {
      const vm = this;
      vm.now = 'random';
      const num = Math.floor(Math.random() * vm.tracks.length);
      const trackID = vm.tracks[num].id;
      vm.messageInfo.id = '';
      vm.messageInfo.songInfo.songPic = vm.tracks[num].album.images[1].url;
      vm.messageInfo.songInfo.songName = vm.tracks[num].name;
      vm.messageInfo.songInfo.singer = vm.tracks[num].album.artist.name;
      window.frames[0].location = `https://widget.kkbox.com/v1/?id=${trackID}&type=song&terr=TW&lang=TC&autoplay=true`;
    },
    nowMusicOver() {
      const vm = this;
      if (vm.musicList.length > 0) {
        const nowSongID = '';
        db.ref(`requestSongs/${vm.messageInfo.id}`).set({
          ...vm.musicList[0],
          id: vm.messageInfo.id,
          isPlay: true,
        });
        // vm.musicList.shift();
      }
    },
    countDown() {
      const bar = document.querySelector('#bar');
      const timeLimit = '30s';
      bar.style.animationDuration = timeLimit;
    },
    slideBottom() {
      const vm = this;
      vm.$bus.$emit('slideToCreate', true);
    },
  },
  computed: {
    musicList() {
      return this.data;
    },
  },
  watch: {
    load(value) {
      if (value) {
        const vm = this;
        vm.getHotMusic().then((res) => {
          if (res == 'get') {
            vm.isLoading = false;
            if (vm.musicList.length == 0) {
              vm.playRandomMusic();
            } else {
              vm.playNextMusic();
            }
            vm.countDown();
            setInterval(() => {
              if (vm.now == 'play') {
                vm.nowMusicOver();
              }
              if (vm.musicList.length == 0) {
                vm.playRandomMusic();
              } else {
                vm.playNextMusic();
              }
            }, 30000);
          }
        });
      }
    },
  },
  mounted() {
    const vm = this;
    document.getElementById('videoplayer').meted = false;
    if (vm.$route.query.token) {
      vm.userToken = this.$route.query.token;
    }
  },
};
</script>

<style lang="scss" scoped>


</style>
