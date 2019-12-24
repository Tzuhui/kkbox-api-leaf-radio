<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="position-relative playArea" style="overflow: hidden; height: 100vh;">
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
              <div class="">
                <div>
                  <p class="mb-0 mt-2"> 我是 {{messageInfo.name}}，我想對 {{messageInfo.toName}} 說：</p>
                  <p class="mb-0">{{messageInfo.message}}</p>
                </div>
              </div>
              <p class="mb-0 mt-2"># {{ messageInfo.songInfo.songName }}</p>
              <p class="mb-0"># {{ messageInfo.songInfo.singer }}</p>
              <div class="clearfix">
                <div id="fb-root"></div>
                <div class="fb-share-button float-right" 
                  :data-href="path" 
                  data-layout="button_count">
                </div>              
              </div>
            </div>
          </div>
          <!-- <div class="col-md-6 d-md-block d-none">
            <div class="container h-100">
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
          </div> -->
        </div>
      </div>
      <div id="play-area" class="position-absolute w-100" style="bottom: -10px;">
        <iframe src="" id="videoplayer" class="w-100 border-0" allow="autoplay" meted="meted" style="z-index: -1; position: relative;"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'songRequest',
  data() {
    return {
      isLoading: true,
      messageInfo: {
        name: '',
        toName: '',
        message: '',
        songInfo: {
          songID: '',
          singer: '',
          songName: '',
          songPic: '',
        }
      },
      path: 'https://google.com/'
    }
  },
  methods: {
    getData(id) {
      const vm = this;
      const readData = db.ref(`requestSongs/${id}`);
      readData.on('value', function(snapshot) {
        if (snapshot.val()) {
          vm.messageInfo = snapshot.val();
        }
        vm.isLoading = false;
      });
    }
  },
  mounted() {
    const vm = this;
    vm.getData(vm.$route.params.id);
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    vm.path = location.href;
  }
};
</script>

<style scoped lang="scss">

</style>
