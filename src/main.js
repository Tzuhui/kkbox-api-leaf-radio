import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import firebase from 'firebase/app';
import 'firebase/database';
import { firestorePlugin } from 'vuefire';
import App from './App.vue';
import router from './router';
import 'bootstrap';

// Get a Firestore instance
window.db = firebase
  .initializeApp({
    apiKey: process.env.VUE_APP_FIREBASE_APIKEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTODOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_DATABASEURL,
    projectId: process.env.VUE_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.VUE_APP_FIREBASE_APPID,
  })
  .database();

Vue.use(firestorePlugin);
Vue.use(VueAxios, axios);
axios.defaults.headers.common.Authorization = `Bearer ${process.env.VUE_APP_KKBOX_Authorization}`;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
