# 部署方式

## firebase 設置
定價方案須為 **Blaze** 或 **Flame**

## 設置環境變數
```
firebase functions:config:set kkbox.app_id=YOUR_APP_ID
firebase functions:config:set kkbox.secret=YOUR_APP_SECRET
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
