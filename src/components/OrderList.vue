<template>
  <div class="bg-light">
    <div class="container py-5">
      <h2 class="text-center text-dark">點播列表</h2>
      <p class="text-center">趕快點播歌曲給你想的那個人吧！</p>
      <div class="row">
        <div class="col-md-8">
          <swiper :options="swiperOption" class="mt-3" v-if="requestSongsList.length > 0">
            <swiper-slide v-for="data in requestSongsList" :key="data.songInfo.songID">
              <div class="rounded shadow my-3 mt-5">
                <div class="p-3 position-relative" style="overflow: hidden;">
                  <div class="position-absolute" style="top:0;bottom:0;left:0;right:0;filter: blur(10px);background: no-repeat center center; background-size: cover;box-shadow:0 0 0 0 rgba(0,150,200,1),inset 0 0 0 1px rgba(0,150,200,1);"
                  :style="{'background-image': 'url(' + data.songInfo.songPic + ')'}"></div>
                  <div class="position-absolute" style="background: rgba(0,0,0,0.5); left: 0; right: 0;top: 0;bottom: 0;"></div>
                  <div class="bubble you">
                    <small>我是 {{ data.name }}，我想對 {{data.toName}} 說：</small>
                  </div>
                  <br>
                  <div class="bubble you">
                    <small> {{ sliceMessage( data.message )}}</small>
                  </div>
                  <br>
                </div>
                <div class="bg-light p-3">
                  <p class="text-dark mb-1 font-weight-bold">點播歌曲</p>
                  <p class="mb-0">{{ sliceMessage(data.songInfo.songName) }}</p>
                  <p class="mb-0"><small>{{ data.songInfo.singer }}</small></p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="h-100 d-flex align-items-center justify-content-center" style="background-color: rgba(40, 48, 89, 0.1);" v-else>
          <p style="font-size: 24px;" class="mb-0">還沒有點播歌曲呢！ <i class="far fa-smile-wink"></i></p>
          </div>
        </div>
        <div class="col-md-4">
          <AllList></AllList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import AllList from './AllList';

export default {
  name: 'OrderList',
  components: {
    swiper,
    swiperSlide,
    AllList,
  },
  props: ['data'],
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      }
    }
  },
  computed: {
    requestSongsList() {
      return this.data;
    }
  },
  methods: {
    sliceMessage(str) {
      if (str.length > 12) {
        return str.slice(0, 12) + '...'
      }
      return str
    }
    // getSongsData() {
    //   const vm = this;
    //   const readData = db.ref('requestSongs');
    //   readData.on('value', function(snapshot) {
    //     Object.keys(snapshot.val()).forEach(ele => {
    //       vm.requestSongsList.push(snapshot.val()[ele])
    //     })
    //   });
    // }
  },
  mounted() {
    // this.getSongsData();
  }
};
</script>

