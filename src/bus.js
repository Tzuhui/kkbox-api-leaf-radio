import Vue from 'vue';

Vue.prototype.$bus = new Vue();

// 傳遞 Alert
// this.$bus.$emit('message', '點歌成功', name);
// vm.$bus.$on('message', (message, name) => {
//   vm.updateMessage(message, name);
// });

// 傳遞 滑動
// this.$bus.$emit('message', '點歌成功', name);
