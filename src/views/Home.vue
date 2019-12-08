<template>
  <div class="home">
    <PlayArea msg="Welcome to Your Vue.js App" :data="requestSongsList" :load="dataLoad" />
    <OrderList :data="requestSongsList" />
    <OrderHot/>
    <OrderCreate />
    <footer class="bg-dark p-3">
      <div class="container clearfix">
        <p class="text-white mb-0 float-left">@Leaf Radio</p>
        <a class="float-right" href="https://docs-zhtw.kkbox.codes/docs/overview">使用 KKBOX API</a>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import PlayArea from '@/components/PlayArea.vue';
import OrderHot from '@/components/OrderHot.vue';
import OrderList from '@/components/OrderList.vue';
import OrderCreate from '@/components/OrderCreate.vue';

export default {
  name: 'home',
  components: {
    PlayArea,
    OrderHot,
    OrderList,
    OrderCreate,
  },
  data() {
    return {
      requestSongsList: [],
      dataLoad: false,
    }
  },
  methods: {
    getSongsData() {
      const vm = this;
      const readData = db.ref('requestSongs');
      readData.orderByChild('isPlay').equalTo(false).on('value', function(snapshot) {
        vm.requestSongsList = [];
        if (snapshot.val()) {
          Object.keys(snapshot.val()).forEach(ele => {
            vm.requestSongsList.push({
              id: ele,
              ...snapshot.val()[ele]
            })
          })
        }
        vm.dataLoad = true;
      });
    }
  },
  mounted() {
    this.getSongsData();
  }
};
</script>
