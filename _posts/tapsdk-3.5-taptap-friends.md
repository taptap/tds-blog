---
title: "TapSDK 3.5 版本更新，TapTap 好友功能上线"
excerpt: "TapSDK 3.5 正式发布，好友模块新增 TapTap 好友功能。"
date: "2021-11-30"
author: weikailing
---

亲爱的开发者们，TapSDK 发布 3.5 版本啦！
这次主要更新了 TapTap 好友功能，终于可以和 TapTap 好友愉快的开黑了~

## TapTap 好友

现在你可以在游戏内直接获取到 TapTap 好友了，可以帮助游戏在初期就拿到 TapTap 用户的好友关系，上线就能开黑。
本次开放了两个功能给开发者：获取 TapTap 互关好友关系、关注 TapTap 好友。

### 获取 TapTap 互关好友关系

我们拿 Tarara 来举例子，满足以下条件，Tarara 的 TapTap 好友 Pururu 就能出现在游戏内的好友列表里了。

1. 游戏申请开通并接入了获取 TapTap 互关好友列表的接口；
2. Tarara 和 Pururu 是 TapTap 互相关注的好友；
3. Tarara 和 Pururu 都使用了 TapTap 账号登录了游戏 Tarara 和 Pururu 进入了此游戏，并都对此游戏进行了好友关系的授权；
   这样 Tarara 一上线游戏，就能看到 Pururu 并直接开黑了。

### 关注 TapTap 好友

我们还是拿 Tarara 来举例子，Tarara 在游戏内和 Pururu 打了几把匹配，觉得他的水平很不错。想在 TapTap 上和他成为好友，关注他的动态。
只要满足以下条件：

1. 游戏申请开通并接入了 TapTap 好友的关注接口；
2. Tarara 和 Pururu 都使用了 TapTap 账号登录了游戏；
3. Tarara 和 Pururu 进入了此游戏，并都对此游戏进行了好友关系的授权；
   这样 Tarara 就可以在游戏内关注 Pururu 的 TapTap 账号了。

### 申请方法

请通过工单联系我们，申请开通此功能。
接入文档可参考：https://developer.taptap.com/docs/sdk/friends/guide/ 。

## 其他更新

1. 「新增」iOS 和 Android 支持实时语音
2. 「新增」好友系统支持根据好友码查找好友、添加好友
3. 「优化」TapTap 登录（WebView）支持异形屏
4. 「优化」成就系统修复读取本地数据时“已达成“字段读取错误的问题

有任何接入上的问题或者咨询，欢迎通过工单联系我们。
