<template>
  <div class="bg-light">
    <p>點播動態</p>
    <ul class="list-group" style="max-height: 300px; overflow-y: scroll">
      <li class="list-group-item" v-for="(post, index) in AllSongList" :key="post.id + index">
        <div class="media">
          <img :src="post.songInfo.songPic" class="mr-3" alt="" width="70px">
          <div class="media-body">
            <p v-if="post.name !== ''" class="mb-0"><small>我是 {{ post.name }}，我想對 {{ post.toName }} 說：</small></p>
            <p class="mb-0">{{ post.message }}</p>
            <p class="mb-0"><i class="fas fa-music"></i> {{ post.songInfo.songName }}</p>
            <!-- <div class="clearfix" v-if="post.id !== ''">
              <div id="fb-root"></div>
              <div class="fb-share-button float-right"
                :data-href="path + post.id"
                data-layout="button_count">
              </div>
            </div> -->
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AllList',
  data() {
    return {
      AllSongList: [],
      path: 'https://tzuhui.github.io/kkbox-api-leaf-radio/#/songRequest/',
    };
  },
  methods: {
    sliceMessage(str) {
      if (str.length > 12) {
        return `${str.slice(0, 12) }...`;
      }
      return str;
    },
    getSongsData() {
      const vm = this;
      const readData = db.ref('requestSongs').limitToLast(100);
      readData.orderByChild('isPlay').equalTo(true).once('value', (snapshot) => {
        Object.keys(snapshot.val()).forEach((ele) => {
          vm.AllSongList.push(snapshot.val()[ele]);
        });
        vm.AllSongList = vm.AllSongList.reverse();
        // vm.shareBtnInit();
      });
    },
    // shareBtnInit() {
    //   (function(d, s, id) {
    //     var js, fjs = d.getElementsByTagName(s)[0];
    //     if (d.getElementById(id)) return;
    //     js = d.createElement(s); js.id = id;
    //     js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    //     fjs.parentNode.insertBefore(js, fjs);
    //   }(document, 'script', 'facebook-jssdk'));
    // }
  },
  mounted() {
    const vm = this;
    this.getSongsData();
  },
};
</script>
