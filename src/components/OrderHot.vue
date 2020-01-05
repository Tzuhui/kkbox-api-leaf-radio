<template>
  <div class="container my-5">
    <h2 class="text-center text-dark">熱門點播歌曲</h2>
    <p class="text-center">哪一首最能表達你的心情呢？</p>
    <div class="row mt-3">
      <div class="col-md-3" v-for="(song, index) in songData.slice(0, 4)">
        <div class="bg-light p-2 text-dark text-center">
          <p class="mb-0"><small>No.{{index+1}}</small></p>
        </div>
        <img :src="song.songPic" alt="" class="img-fluid">
        <div class="bg-dark p-2 text-white text-center">
          <p class="mb-0">{{song.songName}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderHot',
  props: ['data'],
  data() {
    return {
    }
  },
  methods: {
    getHotMusic() {
      const vm = this;
      return new Promise((resolve,reject) => {
        vm.axios.get(`https://api.kkbox.com/v1.1/charts/PYQbSKw4piAuZAS8z8?territory=TW`).then((response) => {
          vm.tracks = response.data.tracks.data;
          resolve('get')
        })
      })
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
      const num = Math.floor(Math.random()*vm.tracks.length);
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
        db.ref('requestSongs/' + vm.messageInfo.id).set({
          ...vm.musicList[0],
          id: vm.messageInfo.id,
          isPlay: true,
        });
        // vm.musicList.shift();
      }
    },
    countDown() {
      const bar = document.querySelector('#bar');
      let timeLimit = "30s";
      bar.style.animationDuration = timeLimit;
    },
    slideBottom() {
      const vm = this;
      vm.$bus.$emit('slideToCreate', true);
    }
  },
  computed: {
    songData() {
      return this.data.sort(function (a, b) {
        return b.times - a.times;
      });
    }
  },
  watch: {
    load(value) {
      if (value) {
        const vm = this;
        vm.getHotMusic().then(res => {
          if (res == 'get') {
            vm.isLoading = false;
            if (vm.musicList.length == 0) {
              vm.playRandomMusic();
            } else {
              vm.playNextMusic();
            }
            vm.countDown();
            setInterval(function() {
              if (vm.now == 'play') {
                vm.nowMusicOver();
              }
              if (vm.musicList.length == 0) {
                vm.playRandomMusic();
              } else {
                vm.playNextMusic();
              }
            }, 30000)
          }
        });
      }
    }
  },
  mounted() {
    const vm = this;
    document.getElementById('videoplayer').meted = false;
  }
};
</script>

<style lang="scss" scoped>


</style>

