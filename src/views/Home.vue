<template>
  <div class="home position-relative">
    <Alert/>
    <PlayArea msg="Welcome to Your Vue.js App" :data="requestSongsList" :load="dataLoad" />
    <OrderList :data="requestSongsList" />
    <OrderHot :data="recordList"/>
    <OrderCreate/>
    <footer class="bg-dark p-3">
      <div class="container clearfix">
        <p class="text-white mb-0 float-left">@Leaf Radio</p>
        <a href="https://github.com/Tzuhui/kkbox-api-leaf-radio"><img src="https://firebasestorage.googleapis.com/v0/b/tzuhui-10c1e.appspot.com/o/others%2F201912%2F1577116524140-GitHub-Mark-Light-32px.png?alt=media&token=e2bee4f0-1def-4d48-a1e2-f81cf3cbed8b" alt="" width="20" class="mx-2"></a>
        <a class="float-right" href="https://docs-zhtw.kkbox.codes/docs/overview">使用 KKBOX API</a>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Alert from '@/components/Alert.vue';
import PlayArea from '@/components/PlayArea.vue';
import OrderHot from '@/components/OrderHot.vue';
import OrderList from '@/components/OrderList.vue';
import OrderCreate from '@/components/OrderCreate.vue';

export default {
  name: 'home',
  components: {
    Alert,
    PlayArea,
    OrderHot,
    OrderList,
    OrderCreate,
  },
  data() {
    return {
      requestSongsList: [],
      recordList: [],
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
    },
    getSongsRecord() {
      const vm = this;
      const readData = db.ref('record');
      readData.orderByChild('times').on('value', function(snapshot) {
        if (snapshot.val()) {
          Object.keys(snapshot.val()).forEach(ele => {
            vm.recordList.push(snapshot.val()[ele]);
          })
        }
      });
    }
  },
  mounted() {
    this.getSongsData();
    this.getSongsRecord();
  }
};
</script>
