<template>
  <div v-if="show" class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true"
    style="position: fixed; right: 10px; opacity: 1;    z-index: 1024;">
    <div class="toast-header">
      <img src="" class="rounded mr-2" alt="">
      <strong class="mr-auto">{{message}}</strong>
      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close"></button>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="toast-body">
      Hello,{{name}}！你的點播送出了！
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '點播成功',
      name: '',
      show: false,
    }
  },
  methods: {
    updateMessage(msg, name) {
      const vm = this;
      vm.message = msg;
      vm.name = name;
      vm.show = true;
      setTimeout(function () {
        vm.message = '';
        vm.name = '';
        vm.show = false;
      }, 5000)
    }
  },
  mounted() {
    const vm = this;
    vm.$bus.$on('message', (message, name) => {
      vm.updateMessage(message, name);
    });
  }
}
</script>

<style>
  .toast {
    bottom: 10px;
  }
@media (max-width: 768px) {
  .toast {
    top: 10px;
    bottom: auto;
  }
}
</style>