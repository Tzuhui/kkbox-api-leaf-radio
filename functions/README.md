# 部署方式

## firebase 設置
定價方案須為 **Blaze** 或 **Flame**

## 設置環境變數
```
functions:config:set kkbox.app_id=YOUR_APP_ID
functions:config:set kkbox.secret=YOUR_APP_SECRET
functions:config:set kkbox.redirect_uri=https://YOUR_REGION-YOUR_PROJECT_ID.cloudfunctions.net/login
functions:config:set kkbox.app_home=APP_HOME_URL
```

## 部署
```
firebase deploy --only functions
```
## 
### 取得 token 

#### method
- GET
#### endpoint
```
https://YOUR_REGION-YOUR_PROJECT_ID.cloudfunctions.net/kkOauth
```
#### response
```
{
    "access_token": "access token",
    "token_type": "Bearer",
    "expires_in": 2592000
}
```

## 登入跳轉使用
於 kkbox 專案設定 Redirect uri
```
https://YOUR_REGION-YOUR_PROJECT_ID.cloudfunctions.net/login
```
### 設置環境邊數

```
functions:config:set kkbox.redirect_uri=https://YOUR_REGION-YOUR_PROJECT_ID.cloudfunctions.net/login
functions:config:set kkbox.app_home=APP_HOME_URL //APP_HOME_URL 為服務首頁
```