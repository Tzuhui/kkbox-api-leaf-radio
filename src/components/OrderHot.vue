<template>
  <div class="container my-5">
    <h2 class="text-center text-dark">熱門點播歌曲</h2>
    <p class="text-center">私心排行，絕對作假</p>
    <div class="row mt-3">
      <div class="col-md-3">
        <div class="bg-light p-2 text-dark text-center">
          <p class="mb-0"><small>No.1</small></p>
        </div>
        <img src="https://i.kfs.io/album/global/45771662,1v1/fit/500x500.jpg" alt="" class="img-fluid">
        <div class="bg-dark p-2 text-white text-center">
          <p class="mb-0">怎麼了 (What's Wrong)</p>
        </div>
      </div>
      <div class="col-md-3">
        <div class="bg-light p-2 text-dark text-center">
          <p class="mb-0"><small>No.2</small></p>
        </div>
        <img src="https://i.kfs.io/album/global/51496821,0v1/fit/500x500.jpg" alt="" class="img-fluid">
        <p class="mb-0 bg-dark p-2 text-white text-center">Without You</p>
      </div>
      <div class="col-md-3">
        <div class="bg-light p-2 text-dark text-center">
          <p class="mb-0"><small>No.3</small></p>
        </div>
        <img src="https://i.kfs.io/album/global/17250268,1v1/fit/500x500.jpg" alt="" class="img-fluid">
        <p class="mb-0 bg-dark p-2 text-white text-center">你，好不好？</p>
        <p class="mb-0"></p>
      </div>
      <div class="col-md-3">
        <div class="bg-light p-2 text-dark text-center">
          <p class="mb-0"><small>No.4</small></p>
        </div>
        <img src="https://i.kfs.io/album/tw/5239767,4v1/fit/500x500.jpg" alt="" class="img-fluid">
        <p class="mb-0 bg-dark p-2 text-white text-center">以後別做朋友</p>
        <p class="mb-0"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
