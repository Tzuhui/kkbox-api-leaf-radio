const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
exports.stats = functions.database.ref('/requestSongs/{pushId}/songInfo')
  .onCreate((snapshot) => {
    const songInfo = snapshot.val();
    const songRecord = snapshot.ref.root.child(`record/${songInfo.songID}/times`)
      .once('value').then((snap) => {
        return typeof (snap.val()) === typeof null ? 0 : snap.val();
      });
    songRecord.then((res) => {
      return snapshot.ref.root.child(`record/${ songInfo.songID }`).set({ times: parseInt(res) + 1 });
    }).catch((err)=> {
      console.log(err);
      return false;
    })
    return songRecord;
  })