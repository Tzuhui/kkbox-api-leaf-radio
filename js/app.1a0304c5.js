(function(t){function s(s){for(var a,i,r=s[0],l=s[1],c=s[2],d=0,m=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(s);while(m.length)m.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,s=0;s<n.length;s++){for(var e=n[s],a=!0,r=1;r<e.length;r++){var l=e[r];0!==o[l]&&(a=!1)}a&&(n.splice(s--,1),t=i(i.s=e[0]))}return t}var a={},o={app:0},n=[];function i(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=a,i.d=function(t,s,e){i.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,s){if(1&s&&(t=i(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)i.d(e,a,function(s){return t[s]}.bind(null,a));return e},i.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(s,"a",s),s},i.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},i.p="/kkbox-api-leaf-radio/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=s,r=r.slice();for(var c=0;c<r.length;c++)s(r[c]);var u=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"56d7":function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),o=e("bc3a"),n=e.n(o),i=e("a7fe"),r=e.n(i),l=e("59ca"),c=e.n(l),u=(e("66ce"),e("0ff2")),d=e("9062"),m=e.n(d),g=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},f=[],p=(e("e2cd"),e("2877")),v={},h=Object(p["a"])(v,g,f,!1,null,null,null),b=h.exports,y=e("8c4f"),C=function(){var t=this,s=t._self._c;return s("div",{staticClass:"home position-relative"},[s("Alert"),s("PlayArea",{attrs:{msg:"Welcome to Your Vue.js App",data:t.requestSongsList,load:t.dataLoad}}),s("OrderList",{attrs:{data:t.requestSongsList}}),s("OrderHot",{attrs:{data:t.recordList}}),s("OrderCreate",{attrs:{"user-token":t.userToken}}),t._m(0)],1)},w=[function(){var t=this,s=t._self._c;return s("footer",{staticClass:"bg-dark p-3"},[s("div",{staticClass:"container clearfix"},[s("p",{staticClass:"text-white mb-0 float-left"},[t._v("@Leaf Radio")]),s("a",{attrs:{href:"https://github.com/Tzuhui/kkbox-api-leaf-radio"}},[s("img",{staticClass:"mx-2",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/tzuhui-10c1e.appspot.com/o/others%2F201912%2F1577116524140-GitHub-Mark-Light-32px.png?alt=media&token=e2bee4f0-1def-4d48-a1e2-f81cf3cbed8b",alt:"",width:"20"}})]),s("a",{staticClass:"float-right",attrs:{href:"https://docs-zhtw.kkbox.codes/docs/overview"}},[t._v("使用 KKBOX API")])])])}],k=e("5530"),_=(e("d3b7"),e("159b"),e("b64b"),e("b0c0"),function(){var t=this,s=t._self._c;return t.show?s("div",{staticClass:"toast fade show",staticStyle:{position:"fixed",right:"10px",opacity:"1","z-index":"1024"},attrs:{role:"alert","aria-live":"assertive","aria-atomic":"true"}},[s("div",{staticClass:"toast-header"},[s("img",{staticClass:"rounded mr-2",attrs:{src:"",alt:""}}),s("strong",{staticClass:"mr-auto"},[t._v(t._s(t.message))]),s("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}}),s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),s("div",{staticClass:"toast-body"},[t._v(" Hello,"+t._s(t.name)+"！你的點播送出了！ ")])]):t._e()}),x=[],I={data:function(){return{message:"點播成功",name:"",show:!1}},methods:{updateMessage:function(t,s){var e=this;e.message=t,e.name=s,e.show=!0,setTimeout((function(){e.message="",e.name="",e.show=!1}),5e3)}},mounted:function(){var t=this;t.$bus.$on("message",(function(s,e){t.updateMessage(s,e)}))}},S=I,L=(e("eed3"),Object(p["a"])(S,_,x,!1,null,null,null)),q=L.exports,P=function(){var t=this,s=t._self._c;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),s("a",{staticClass:"btn btn-lg btn-primary rounded-pill position-absolute",class:{disabled:""!=t.userToken},staticStyle:{"z-index":"1000",right:"10px",top:"10px"},attrs:{href:"https://us-central1-linebot-f2c38.cloudfunctions.net/kkUser"}},[t._v(t._s(""!=t.userToken?"已登入":"登入 KKBOX"))]),s("div",{staticClass:"position-relative playArea",staticStyle:{overflow:"hidden"}},[s("div",{staticClass:"position-absolute",staticStyle:{top:"0",bottom:"0",left:"0",right:"0",filter:"blur(10px)","min-height":"550px",background:"no-repeat center center","background-size":"cover","box-shadow":"0 0 0 0 rgba(0,150,200,1),inset 0 0 0 1px rgba(0,150,200,1)"},style:{"background-image":"url("+t.messageInfo.songInfo.songPic+")"}}),s("div",{staticClass:"position-absolute",staticStyle:{background:"rgba(40, 48, 89, 0.7)",left:"0",right:"0",top:"0",bottom:"0"}}),s("div",{staticClass:"container position-absolute",staticStyle:{top:"50%",left:"50%",transform:"translate(-50%, -50%)","z-index":"3"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.start,expression:"start == false"}]},[s("div",{staticClass:"bg-dark py-3 col-md-5 mx-auto"},[s("h4",{staticClass:"text-white"},[t._v("請先點擊 iframe 播放鍵並確認完成")]),t._m(0),s("button",{staticClass:"btn btn-primary mt-3",on:{click:function(s){t.start=!0}}},[t._v("完成")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.start,expression:"start"}],staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"p-3",staticStyle:{background:"white"}},[s("img",{staticClass:"img-fluid",attrs:{src:t.messageInfo.songInfo.songPic,alt:""}}),t._m(1),s("div",{staticClass:"d-md-none d-block"},["play"==t.now?s("div",[s("p",{staticClass:"mb-0 mt-2"},[t._v(" 我是 "+t._s(t.messageInfo.name)+"，我想對 "+t._s(t.messageInfo.toName)+" 說：")]),s("p",{staticClass:"mb-0"},[t._v(t._s(t.messageInfo.message))])]):s("div",[s("p",{staticClass:"mb-0 mt-2"},[t._v("暫無點播歌曲，趕快來點播吧！")]),s("a",{staticClass:"text-dark",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.slideBottom.apply(null,arguments)}}},[t._v("我想點播")])])]),s("p",{staticClass:"mb-0 mt-2"},[t._v("# "+t._s(t.messageInfo.songInfo.songName))]),s("p",{staticClass:"mb-0"},[t._v("# "+t._s(t.messageInfo.songInfo.singer))])])]),s("div",{staticClass:"col-md-6 d-md-block d-none"},["play"==t.now?s("div",{staticClass:"container h-100"},[s("div",{staticClass:"bubble you animated fadeInUp"},[t._v(" 我是 "+t._s(t.messageInfo.name)+"，我想對 "+t._s(t.messageInfo.toName)+" 說： ")]),s("br"),s("div",{staticClass:"bubble you delay-1 animated fadeInUp"},[t._v(" "+t._s(t.messageInfo.message)+" ")]),s("br"),s("div",{staticClass:"bubble you delay-2 animated fadeInUp"},[t._v(" 點播這首『"+t._s(t.messageInfo.songInfo.singer)+" - "+t._s(t.messageInfo.songInfo.songName)+"』 ")])]):s("div",{staticClass:"container h-100"},[s("div",{staticClass:"h-100 text-white p-2 text-center d-flex flex-column align-items-center justify-content-center",staticStyle:{background:"rgba(0,0,0,0.7)"}},[s("h4",[t._v("暫時沒有新的點播")]),s("a",{staticClass:"btn btn-primary rounded-pill",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.slideBottom.apply(null,arguments)}}},[t._v("我想點播")])])])])])])])],1)},O=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"w-100",staticStyle:{bottom:"-10px",height:"100px",overflow:"hidden"},attrs:{id:"play-area"}},[s("iframe",{staticClass:"w-100 border-0",attrs:{src:"",id:"videoplayer",allow:"autoplay",meted:"meted"}})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"timer mt-3"},[s("div",{staticClass:"bar",attrs:{id:"bar"}})])}],T=(e("e40d"),{name:"PlayArea",props:["data","load"],data:function(){return{now:"",start:!1,isLoading:!0,loadFinish:this.load,tracks:[],messageInfo:{name:"",toName:"",message:"",songInfo:{songID:"",singer:"",songName:"",songPic:""}},userToken:""}},methods:{openSound:function(){console.log(document.querySelector("#play-area iframe")),document.querySelector("#play-area iframe").play()},getHotMusic:function(){var t=this;return new Promise((function(s,e){t.axios.get("https://api.kkbox.com/v1.1/charts/PYQbSKw4piAuZAS8z8?territory=TW").then((function(e){t.tracks=e.data.tracks.data,s("get")}))}))},playNextMusic:function(){var t=this;if(t.now="play",t.musicList.length>0){var s=t.musicList[0].songInfo.songID;t.messageInfo=t.musicList[0],window.frames[0].location="https://widget.kkbox.com/v1/?id=".concat(s,"&type=song&terr=TW&lang=TC&autoplay=true")}},playRandomMusic:function(){var t=this;t.now="random";var s=Math.floor(Math.random()*t.tracks.length),e=t.tracks[s].id;t.messageInfo.id="",t.messageInfo.songInfo.songPic=t.tracks[s].album.images[1].url,t.messageInfo.songInfo.songName=t.tracks[s].name,t.messageInfo.songInfo.singer=t.tracks[s].album.artist.name,window.frames[0].location="https://widget.kkbox.com/v1/?id=".concat(e,"&type=song&terr=TW&lang=TC&autoplay=1")},nowMusicOver:function(){var t=this;if(t.musicList.length>0){db.ref("requestSongs/".concat(t.messageInfo.id)).set(Object(k["a"])(Object(k["a"])({},t.musicList[0]),{},{id:t.messageInfo.id,isPlay:!0}))}},countDown:function(){var t=document.querySelector("#bar"),s="30s";t.style.animationDuration=s},slideBottom:function(){var t=this;t.$bus.$emit("slideToCreate",!0)}},computed:{musicList:function(){return this.data}},watch:{load:function(t){if(t){var s=this;s.getHotMusic().then((function(t){"get"==t&&(s.isLoading=!1,0==s.musicList.length?s.playRandomMusic():s.playNextMusic(),s.countDown(),setInterval((function(){s.countDown(),"play"==s.now&&s.nowMusicOver(),0==s.musicList.length?s.playRandomMusic():s.playNextMusic()}),3e4))}))}}},mounted:function(){var t=this;document.getElementById("videoplayer").meted=!1,t.$route.query.token&&(t.userToken=this.$route.query.token)}}),N=T,M=Object(p["a"])(N,P,O,!1,null,"23d78709",null),D=M.exports,j=(e("fb6a"),function(){var t=this,s=t._self._c;return s("div",{staticClass:"container my-5"},[s("h2",{staticClass:"text-center text-dark"},[t._v("熱門點播歌曲")]),s("p",{staticClass:"text-center"},[t._v("哪一首最能表達你的心情呢？")]),s("div",{staticClass:"row mt-3"},t._l(t.songData.slice(0,4),(function(e,a){return s("div",{staticClass:"col-md-3"},[s("div",{staticClass:"bg-light p-2 text-dark text-center"},[s("p",{staticClass:"mb-0"},[s("small",[t._v("No."+t._s(a+1))])])]),s("img",{staticClass:"img-fluid",attrs:{src:e.songPic,alt:""}}),s("div",{staticClass:"bg-dark p-2 text-white text-center"},[s("p",{staticClass:"mb-0"},[t._v(t._s(e.songName))])])])})),0)])}),A=[],B=(e("4e82"),{name:"OrderHot",props:["data"],data:function(){return{}},methods:{getHotMusic:function(){var t=this;return new Promise((function(s,e){t.axios.get("https://api.kkbox.com/v1.1/charts/PYQbSKw4piAuZAS8z8?territory=TW").then((function(e){t.tracks=e.data.tracks.data,s("get")}))}))},playNextMusic:function(){var t=this;if(t.now="play",t.musicList.length>0){var s=t.musicList[0].songInfo.songID;t.messageInfo=t.musicList[0],window.frames[0].location="https://widget.kkbox.com/v1/?id=".concat(s,"&type=song&terr=TW&lang=TC&autoplay=true")}},playRandomMusic:function(){var t=this;t.now="random";var s=Math.floor(Math.random()*t.tracks.length),e=t.tracks[s].id;t.messageInfo.id="",t.messageInfo.songInfo.songPic=t.tracks[s].album.images[1].url,t.messageInfo.songInfo.songName=t.tracks[s].name,t.messageInfo.songInfo.singer=t.tracks[s].album.artist.name,window.frames[0].location="https://widget.kkbox.com/v1/?id=".concat(e,"&type=song&terr=TW&lang=TC&autoplay=true")},nowMusicOver:function(){var t=this;if(t.musicList.length>0){db.ref("requestSongs/"+t.messageInfo.id).set(Object(k["a"])(Object(k["a"])({},t.musicList[0]),{},{id:t.messageInfo.id,isPlay:!0}))}},countDown:function(){var t=document.querySelector("#bar"),s="30s";t.style.animationDuration=s},slideBottom:function(){var t=this;t.$bus.$emit("slideToCreate",!0)}},computed:{songData:function(){return this.data.sort((function(t,s){return s.times-t.times}))}},watch:{load:function(t){if(t){var s=this;s.getHotMusic().then((function(t){"get"==t&&(s.isLoading=!1,0==s.musicList.length?s.playRandomMusic():s.playNextMusic(),s.countDown(),setInterval((function(){"play"==s.now&&s.nowMusicOver(),0==s.musicList.length?s.playRandomMusic():s.playNextMusic()}),3e4))}))}}},mounted:function(){document.getElementById("videoplayer").meted=!1}}),$=B,z=Object(p["a"])($,j,A,!1,null,"77cd672b",null),R=z.exports,E=function(){var t=this,s=t._self._c;return s("div",{staticClass:"bg-light"},[s("div",{staticClass:"container py-5"},[s("h2",{staticClass:"text-center text-dark"},[t._v("點播列表")]),s("p",{staticClass:"text-center"},[t._v("趕快點播歌曲給你想的那個人吧！")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8"},[t.requestSongsList.length>0?s("swiper",{staticClass:"mt-3",attrs:{options:t.swiperOption}},t._l(t.requestSongsList,(function(e){return s("swiper-slide",{key:e.songInfo.songID},[s("div",{staticClass:"rounded shadow my-3 mt-5"},[s("div",{staticClass:"p-3 position-relative",staticStyle:{overflow:"hidden"}},[s("div",{staticClass:"position-absolute",staticStyle:{top:"0",bottom:"0",left:"0",right:"0",filter:"blur(10px)",background:"no-repeat center center","background-size":"cover","box-shadow":"0 0 0 0 rgba(0,150,200,1),inset 0 0 0 1px rgba(0,150,200,1)"},style:{"background-image":"url("+e.songInfo.songPic+")"}}),s("div",{staticClass:"position-absolute",staticStyle:{background:"rgba(0,0,0,0.5)",left:"0",right:"0",top:"0",bottom:"0"}}),s("div",{staticClass:"bubble you"},[s("small",[t._v("我是 "+t._s(e.name)+"，我想對 "+t._s(e.toName)+" 說：")])]),s("br"),s("div",{staticClass:"bubble you"},[s("small",[t._v(" "+t._s(t.sliceMessage(e.message)))])]),s("br")]),s("div",{staticClass:"bg-light p-3"},[s("p",{staticClass:"text-dark mb-1 font-weight-bold"},[t._v("點播歌曲")]),s("p",{staticClass:"mb-0"},[t._v(t._s(t.sliceMessage(e.songInfo.songName)))]),s("p",{staticClass:"mb-0"},[s("small",[t._v(t._s(e.songInfo.singer))])])])])])})),1):s("div",{staticClass:"h-100 d-flex align-items-center justify-content-center",staticStyle:{"background-color":"rgba(40, 48, 89, 0.1)"}},[s("p",{staticClass:"mb-0",staticStyle:{"font-size":"24px"}},[t._v("還沒有點播歌曲呢！ "),s("i",{staticClass:"far fa-smile-wink"})])])],1),s("div",{staticClass:"col-md-4"},[s("AllList")],1)])])])},H=[],W=(e("dfa4"),e("7212")),K=function(){var t=this,s=t._self._c;return s("div",{staticClass:"bg-light"},[s("p",[t._v("點播動態")]),s("ul",{staticClass:"list-group",staticStyle:{"max-height":"300px","overflow-y":"scroll"}},t._l(t.AllSongList,(function(e,a){return s("li",{key:e.id+a,staticClass:"list-group-item"},[s("div",{staticClass:"media"},[s("img",{staticClass:"mr-3",attrs:{src:e.songInfo.songPic,alt:"",width:"70px"}}),s("div",{staticClass:"media-body"},[""!==e.name?s("p",{staticClass:"mb-0"},[s("small",[t._v("我是 "+t._s(e.name)+"，我想對 "+t._s(e.toName)+" 說：")])]):t._e(),s("p",{staticClass:"mb-0"},[t._v(t._s(e.message))]),s("p",{staticClass:"mb-0"},[s("i",{staticClass:"fas fa-music"}),t._v(" "+t._s(e.songInfo.songName))])])])])})),0)])},U=[],F={name:"AllList",data:function(){return{AllSongList:[],path:"https://tzuhui.github.io/kkbox-api-leaf-radio/#/songRequest/"}},methods:{sliceMessage:function(t){return t.length>12?"".concat(t.slice(0,12),"..."):t},getSongsData:function(){var t=this,s=db.ref("requestSongs").limitToLast(100);s.orderByChild("isPlay").equalTo(!0).once("value",(function(s){Object.keys(s.val()).forEach((function(e){t.AllSongList.push(s.val()[e])})),t.AllSongList=t.AllSongList.reverse()}))}},mounted:function(){this.getSongsData()}},Q=F,V=Object(p["a"])(Q,K,U,!1,null,null,null),X=V.exports,Y={name:"OrderList",components:{swiper:W["swiper"],swiperSlide:W["swiperSlide"],AllList:X},props:["data"],data:function(){return{swiperOption:{slidesPerView:3,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{576:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3,spaceBetween:30},1024:{slidesPerView:3,spaceBetween:30}}}}},computed:{requestSongsList:function(){return this.data}},methods:{sliceMessage:function(t){return t.length>12?t.slice(0,12)+"...":t}},mounted:function(){}},Z=Y,G=Object(p["a"])(Z,E,H,!1,null,null,null),J=G.exports,tt=(e("d81d"),e("4de4"),e("ac1f"),e("841c"),e("498a"),function(){var t=this,s=t._self._c;return s("div",{staticClass:"bg-light",attrs:{id:"create"}},[s("div",{staticClass:"container py-5"},[s("h2",{staticClass:"text-center text-dark"},[t._v("我要點播")]),s("div",{staticClass:"row no-gutters justify-content-end"},[s("div",{staticClass:"col-md-6 bg-light p-3 h-100"},[s("div",{staticClass:"row justify-content-between align-items-center"},[s("div",{staticClass:"col-md-5"},[""==t.userToken?s("h4",[t._v("華語單曲日榜")]):s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleFormControlSelect1"}},[t._v("我的歌單")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.playListId,expression:"playListId"}],staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"},on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.playListId=s.target.multiple?e:e[0]}}},t._l(t.playListDropdown,(function(e,a){return s("option",{key:a,domProps:{value:e.id}},[t._v(t._s(e.title))])})),0)])]),s("div",{staticClass:"col-md-5"},[s("div",{staticClass:"input-group mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"輸入內容"},domProps:{value:t.search},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.searchTrack.apply(null,arguments)},input:function(s){s.target.composing||(t.search=s.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button",id:"button-addon2"},on:{click:function(s){return s.preventDefault(),t.searchTrack.apply(null,arguments)}}},[t._v("搜尋")])])])])])])]),s("div",{staticClass:"row no-gutters"},[s("div",{staticClass:"col-md-6 bg-light px-3 h-100"},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label text-nowrap",attrs:{for:"whoAmI"}},[t._v("我是")]),s("div",{staticClass:"col-sm-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.request.name,expression:"request.name"}],staticClass:"form-control",attrs:{type:"text",id:"whoAmI",placeholder:"我是誰？"},domProps:{value:t.request.name},on:{input:function(s){s.target.composing||t.$set(t.request,"name",s.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label text-nowrap",attrs:{for:"toName"}},[t._v("我想對")]),s("div",{staticClass:"col-sm-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.request.toName,expression:"request.toName"}],staticClass:"form-control",attrs:{type:"text",id:"toName",placeholder:"想點給誰呢？"},domProps:{value:t.request.toName},on:{input:function(s){s.target.composing||t.$set(t.request,"toName",s.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label text-nowrap",attrs:{for:"message"}},[t._v("說")]),s("div",{staticClass:"col-sm-10"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.request.message,expression:"request.message"}],staticClass:"form-control",attrs:{id:"message",placeholder:"想對他/她說些什麼呢？"},domProps:{value:t.request.message},on:{input:function(s){s.target.composing||t.$set(t.request,"message",s.target.value)}}})])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-2 text-nowrap"},[t._v("點播歌曲")]),s("div",{staticClass:"col-sm-10"},[t.request.songInfo.singer?s("p",[t._v(t._s(t.request.songInfo.singer)+" - "+t._s(t.request.songInfo.songName))]):s("p",[t._v("請從右方歌曲列表選擇欲點播歌曲")])])])]),s("div",{staticClass:"col-md-6"},[""!==t.search?s("p",[t._v("搜尋結果: "+t._s(t.searchResultCount)+" 筆")]):t._e(),0===t.tracks.length?s("p",{staticClass:"text-center"},[t._v("此歌單沒有歌曲")]):t._e(),s("SongList",{attrs:{tracks:t.tracks},on:{orderSong:t.orderSongData}})],1)]),s("div",{staticClass:"clearfix"},[s("button",{staticClass:"btn btn-primary float-right my-3",class:{disabled:""==t.request.songInfo.songID||""==t.request.message.trim()},attrs:{disabled:""==t.request.songInfo.songID||""==t.request.message.trim()},on:{click:function(s){return s.preventDefault(),t.submitRequestSong.apply(null,arguments)}}},[t._v("送出點播")])])])])}),st=[],et=function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"list-group",staticStyle:{"max-height":"350px","overflow-y":"scroll"}},t._l(t.tracks,(function(e){return s("div",{key:e.id,staticClass:"list-group-item list-group-item-action"},[s("div",{staticClass:"media d-flex align-items-center"},[s("img",{staticClass:"mr-3 img-fluid",attrs:{src:e.album.images[1].url,alt:"",width:"60"}}),s("div",{staticClass:"media-body d-flex justify-content-between align-items-center"},[s("div",[s("p",{staticClass:"mt-0 mb-0"},[t._v(t._s(e.name))]),s("p",{staticClass:"mb-0"},[s("small",[t._v(t._s(e.album.artist.name))])])]),s("div",{staticClass:"clearfix mr-3"},[s("button",{staticClass:"float-right btn btn-primary rounded-pill px-4 text-nowrap",attrs:{type:"button"},on:{click:function(s){return s.preventDefault(),t.orderSong(e)}}},[t._v("點播")])])])])])})),0)])},at=[],ot={name:"HelloWorld",props:{tracks:Array},data:function(){return{songInfo:{songID:"",songName:"",songPic:"",singer:""}}},methods:{orderSong:function(t){var s=this;s.songInfo.songID=t.id,s.songInfo.songName=t.name,s.songInfo.songPic=t.album.images[1].url,s.songInfo.singer=t.album.artist.name,s.$emit("orderSong",s.songInfo)}}},nt=ot,it=Object(p["a"])(nt,et,at,!1,null,null,null),rt=it.exports,lt={name:"OrderCreate",props:["userToken"],components:{SongList:rt},data:function(){return{tracks:[],request:{name:"",toName:"",message:"",songInfo:{songID:"",songName:"",songPic:"",singer:""},isPlay:!1},search:"",searchResult:[],searchResultCount:0,userPlayListName:"",playListDropdown:[],playListId:""}},methods:{getHotMusic:function(){var t=this;t.axios.get("https://api.kkbox.com/v1.1/charts/PYQbSKw4piAuZAS8z8?territory=TW").then((function(s){t.tracks=s.data.tracks.data}))},getMyMusic:function(){var t=this;t.axios.get("https://api.kkbox.com/v1.1/me/playlists",{headers:{Authorization:"Bearer ".concat(t.userToken)}}).then((function(s){t.playListDropdown=s.data.data,t.playListId=s.data.data[0].id}))},getMyPlayList:function(t){var s=this;s.axios.get("https://api.kkbox.com/v1.1/me/playlists/".concat(t),{headers:{Authorization:"Bearer ".concat(s.userToken)}}).then((function(t){s.tracks=t.data.tracks.data,s.userPlayListName=t.data.title}))},orderSongData:function(t){var s=this;s.request.songInfo=t},searchTrack:function(){var t=this;t.axios.get("https://api.kkbox.com/v1.1/search?q=".concat(t.search,"&type=artist,track&territory=TW")).then((function(s){t.tracks=s.data.tracks.data,t.searchResultCount=s.data.summary.total}))},submitRequestSong:function(){var t=this;t.$bus.$emit("message","點播成功","".concat(t.request.name,"，你的點播送出了！")),db.ref("requestSongs").push().set(t.request),t.request={name:"",toName:"",message:"",songInfo:{songID:"",songName:"",songPic:"",singer:""},isPlay:!1},window.scrollTo(0,0)},slideToBottom:function(t){if(t){var s=document.getElementById("create").offsetTop;window.scrollTo({left:0,top:s,behavior:"smooth"})}}},watch:{playListId:function(t){var s=this;s.getMyPlayList(t)},search:function(t){var s=this;""==t&&(s.searchResult=[])}},mounted:function(){var t=this;t.$bus.$on("slideToCreate",(function(s){t.slideToBottom(s)})),console.log("vm.userToken",t.userToken),t.userToken&&""!==t.userToken?t.getMyMusic():t.getHotMusic()}},ct=lt,ut=Object(p["a"])(ct,tt,st,!1,null,null,null),dt=ut.exports,mt={name:"home",components:{Alert:q,PlayArea:D,OrderHot:R,OrderList:J,OrderCreate:dt},data:function(){return{requestSongsList:[],recordList:[],dataLoad:!1,userToken:""}},methods:{getSongsData:function(){var t=this,s=db.ref("requestSongs");s.orderByChild("isPlay").equalTo(!1).on("value",(function(s){t.requestSongsList=[],s.val()&&Object.keys(s.val()).forEach((function(e){t.requestSongsList.push(Object(k["a"])({id:e},s.val()[e]))})),t.dataLoad=!0}))},getSongsRecord:function(){var t=this,s=db.ref("record");s.orderByChild("times").on("value",(function(s){s.val()&&Object.keys(s.val()).forEach((function(e){t.recordList.push(s.val()[e])}))}))}},mounted:function(){this.getSongsData(),this.getSongsRecord()},created:function(){var t=this;t.$route.query.token&&(t.userToken=this.$route.query.token,setTimeout((function(){t.$bus.$emit("message","登入成功，可以點播自己的歌單囉～","KKBOX 用戶登入成功，可以點播自己的歌單囉～")}),2e3))}},gt=mt,ft=Object(p["a"])(gt,C,w,!1,null,null,null),pt=ft.exports,vt=function(){var t=this,s=t._self._c;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),s("div",{staticClass:"position-relative playArea",staticStyle:{overflow:"hidden",height:"100vh"}},[s("div",{staticClass:"position-absolute",staticStyle:{top:"0",bottom:"0",left:"0",right:"0",filter:"blur(10px)","min-height":"550px",background:"no-repeat center center","background-size":"cover","box-shadow":"0 0 0 0 rgba(0,150,200,1),inset 0 0 0 1px rgba(0,150,200,1)"},style:{"background-image":"url("+t.messageInfo.songInfo.songPic+")"}}),s("div",{staticClass:"position-absolute",staticStyle:{background:"rgba(40, 48, 89, 0.7)",left:"0",right:"0",top:"0",bottom:"0"}}),s("div",{staticClass:"container position-absolute",staticStyle:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"p-3",staticStyle:{background:"white"}},[s("img",{staticClass:"img-fluid",attrs:{src:t.messageInfo.songInfo.songPic,alt:""}}),t._m(0),s("div",{},[s("div",[s("p",{staticClass:"mb-0 mt-2"},[t._v(" 我是 "+t._s(t.messageInfo.name)+"，我想對 "+t._s(t.messageInfo.toName)+" 說：")]),s("p",{staticClass:"mb-0"},[t._v(t._s(t.messageInfo.message))])])]),s("p",{staticClass:"mb-0 mt-2"},[t._v("# "+t._s(t.messageInfo.songInfo.songName))]),s("p",{staticClass:"mb-0"},[t._v("# "+t._s(t.messageInfo.songInfo.singer))]),s("div",{staticClass:"clearfix"},[s("div",{attrs:{id:"fb-root"}}),s("div",{staticClass:"fb-share-button float-right",attrs:{"data-href":t.path,"data-layout":"button_count"}})])])])])]),s("div",{staticClass:"position-absolute w-100",staticStyle:{bottom:"-10px"},attrs:{id:"play-area"}},[s("iframe",{staticClass:"w-100 border-0",staticStyle:{"z-index":"-1",position:"relative"},attrs:{src:"https://widget.kkbox.com/v1/?id="+t.messageInfo.songInfo.songID+"&type=song&terr=TW&lang=TC&autoplay=true",id:"videoplayer",allow:"autoplay",meted:"meted"}})])])],1)},ht=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"timer mt-3"},[s("div",{staticClass:"bar",attrs:{id:"bar"}})])}],bt={name:"songRequest",data:function(){return{isLoading:!0,messageInfo:{name:"",toName:"",message:"",songInfo:{songID:"",singer:"",songName:"",songPic:""}},path:"https://google.com/"}},methods:{getData:function(t){var s=this,e=db.ref("requestSongs/".concat(t));e.on("value",(function(t){t.val()&&(s.messageInfo=t.val()),s.isLoading=!1}))}},mounted:function(){var t=this;t.getData(t.$route.params.id),function(t,s,e){var a,o=t.getElementsByTagName(s)[0];t.getElementById(e)||(a=t.createElement(s),a.id=e,a.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0",o.parentNode.insertBefore(a,o))}(document,"script","facebook-jssdk"),t.path=location.href}},yt=bt,Ct=Object(p["a"])(yt,vt,ht,!1,null,"336e7d6e",null),wt=Ct.exports;a["a"].use(y["a"]);var kt=[{path:"/",name:"home",component:pt},{path:"/login",name:"login",component:pt},{path:"/songRequest/:id",name:"songRequest",component:wt}],_t=new y["a"]({routes:kt}),xt=_t;e("4989");a["a"].prototype.$bus=new a["a"],window.db=c.a.initializeApp({apiKey:"AIzaSyDxExCQDZUeBX3gGUFDaj3khEBwyknAazQ",authDomain:"linebot-f2c38.firebaseapp.com",databaseURL:"https://linebot-f2c38.firebaseio.com",projectId:"linebot-f2c38",storageBucket:"linebot-f2c38.appspot.com",messagingSenderId:"292733925864",appId:"1:292733925864:web:59748bd6f8ce3878eecc5d"}).database(),a["a"].use(u["a"]),a["a"].use(r.a,n.a),a["a"].component("Loading",m.a),n.a.get("".concat("https://us-central1-linebot-f2c38.cloudfunctions.net","/kkOauth")).then((function(t){n.a.defaults.headers.common.Authorization="Bearer ".concat(t.data.access_token),new a["a"]({router:xt,render:function(t){return t(b)}}).$mount("#app")}))},6106:function(t,s,e){},a6a8:function(t,s,e){},e2cd:function(t,s,e){"use strict";e("a6a8")},eed3:function(t,s,e){"use strict";e("6106")}});
//# sourceMappingURL=app.1a0304c5.js.map