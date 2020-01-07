const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios');
const qs = require('qs');
const cors = require('cors')({ origin: true });

admin.initializeApp();
exports.stats = functions.database.ref('/requestSongs/{pushId}/songInfo')
  .onCreate((snapshot) => {
    const songInfo = snapshot.val();
    const songRecord = snapshot.ref.root.child(`record/${songInfo.songID}/times`)
      .once('value').then((snap) => {
        return typeof (snap.val()) === typeof null ? 0 : snap.val();
      });
    songRecord.then((res) => {
      return snapshot.ref.root.child(`record/${ songInfo.songID }`).set({ 
        times: parseInt(res) + 1,
        songName: songInfo.songName,
        songPic: songInfo.songPic,
        singer: songInfo.singer,
      });
    }).catch((err)=> {
      console.log(err);
      return false;
    })
    return songRecord;
  })

exports.kkOauth = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET');
  res.set('Access-Control-Allow-Headers', 'Content-Type')
  const getToken = await axios({
    method: 'post',
    url: 'https://account.kkbox.com/oauth2/token',
    data: qs.stringify({
      grant_type: 'client_credentials',
      client_id: functions.config().kkbox.app_id,
      client_secret: functions.config().kkbox.secret,
    })
  }).then(async (response) => {
    return res.send(response.data);
  }).catch(err => {
    res.send('error: ' + err);
  })
})

exports.kkUser = functions.https.onRequest(async (req, res) => {
  const baseUrl = 'https://account.kkbox.com/oauth2/authorize';
  const query = qs.stringify({
    redirect_uri: functions.config().kkbox.redirect_uri,
    client_id: functions.config().kkbox.app_id,
    response_type: 'code',
    state: '123',
  })
  res.redirect(baseUrl + '?' + query);
})

exports.login = functions.https.onRequest(async (req, res) => {
  const getToken = await axios({
    method: 'post',
    url: 'https://account.kkbox.com/oauth2/token',
    data: qs.stringify({
      grant_type: 'authorization_code',
      code: req.query.code,
      client_id: functions.config().kkbox.app_id,
      client_secret: functions.config().kkbox.secret,
      create_new_token: true
    })
  }).then(async (response) => {
    return res.redirect(functions.config().kkbox.app_home + '/login?token=' + response.data.access_token);
  }).catch(err => {
    res.send('error: ' + err);
  })
})
