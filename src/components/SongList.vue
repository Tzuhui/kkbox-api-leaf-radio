<template>
  <div>
    <div class="list-group" style="max-height: 350px; overflow-y: scroll;">
      <div class="list-group-item list-group-item-action" v-for="track in tracks" :key="track.id">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    tracks: Array,
  },
  data() {
    return {
      songInfo: {
        songID: '',
        songName: '',
        songPic: '',
        singer: '',
      },
    }
  },
  methods: {
    orderSong(track) {
      const vm = this;
      vm.songInfo.songID = track.id;
      vm.songInfo.songName = track.name;
      vm.songInfo.songPic = track.album.images[1].url;
      vm.songInfo.singer = track.album.artist.name;
      vm.$emit("orderSong", vm.songInfo);
    },
  }
};
</script>