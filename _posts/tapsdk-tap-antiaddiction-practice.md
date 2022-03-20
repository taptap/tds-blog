---
title: "实名认证和防沉迷功能接入"
excerpt: "TDS 推出「实名认证和防沉迷」功能，助力游戏厂商发展"
date: "2022-02-15"
author: "shouwang"
---

按照国家新闻出版署[《关于进一步严格管理切实防止未成年人沉迷网络游戏的通知》](https://www.nppa.gov.cn/nppa/contents/279/98792.shtml)，各游戏出版运营企业均须在游戏内落实游戏实名认证和防沉迷新策略。依此 TDS 推出「防沉迷」功能，助力游戏厂商发展。

在使用 TDS 实名认证和防沉迷服务之前，游戏厂商需要完成一些前期准备工作。详情请参考[「注册中宣部实名认证系统」](https://developer.taptap.com/docs/sdk/anti-addiction/features/#%E6%B3%A8%E5%86%8C%E4%B8%AD%E5%AE%A3%E9%83%A8%E5%AE%9E%E5%90%8D%E8%AE%A4%E8%AF%81%E7%B3%BB%E7%BB%9F)。**注意：没有版号的游戏想要使用 TDS 的防沉迷功能，需要在 TapTap 开发者中心后台提交工单进行申请，工单分类选择「游戏服务支持 > 防沉迷新政相关」。无版号游戏没有开通实名认证防沉迷服务是无法使用 TDS 的实名认证防沉迷功能的。**

接下来将介绍该如何接入 TDS 推出的「实名认证和防沉迷」功能：

## 游戏实名认证

初始化 SDK：

```csharp
string gameIdentifier = "游戏的 Client ID";
// 是否启用时长限制功能
bool useTimeLimit = true;
// 是否启用消费限制功能
bool usePaymentLimit = true;
// 是否显示切换账号按钮
bool showSwitchAccount = false;
 
AntiAddictionUIKit.Init(gameIdentifier, useTimeLimit, usePaymentLimit, showSwitchAccount,
    (antiAddictionCallbackData) => {
        int code = antiAddictionCallbackData.code;
        MsgExtraParams extras = antiAddictionCallbackData.extras;
        // 根据 code 不同提示玩家不同信息，详见下面的说明
        if (code == 500)
        {
            // 该玩家可以正常进入游戏；如果需要上报时长，调用如下接口开始计时
            AntiAddictionUIKit.EnterGame();
             
        }
        if (code == 1030)
        {
            // 该回调状态不需要游戏做额外的处理
            // 说明玩家是未成年，而该未成年玩家此时是不被允许进行游戏的，逻辑上不要进行游戏主界面的跳转，
            // 这种状态，SDK 内部封装的弹窗会被触发，玩家只能选择「切换账号」（前提是显示切换账号按钮 bool showSwitchAccount = true）或者「退出游戏」
        }
        if (code == 1095)
        {
            // 该回调状态不需要游戏做额外的处理
            // 说明玩家是未成年，该未成年玩家此时是可以允许进行游戏的，需要额外说明，这种状态开发者不需要关注，也不要做什么逻辑上的处理。
            // 该玩家如果持续游戏时间达到当天上限，SDK 内部会做处理，给出弹窗，玩家只能选择退出游戏
        }
        if (code == 1000)
        {
            // 退出账号，当调用 AntiAddictionUIKit.Logout() 接口时触发
            // 玩家在游戏内退出账号时调用该接口，重置防沉迷状态。
        }
        if (code == 9002)
        {
            // 实名认证过程中玩家点击了关闭实名窗，说明玩家并没有完成实名认证，是不可以进入游戏的。
            // 逻辑上需要继续触发实名认证，正确引导玩家完成实名认证
        }
        if (code == 1001)
        {
            // 点击切换账号按钮（v1.0.2 新增）
            // 说明玩家在实名认证过程中，点击了「切换账号」按钮，点击切换账号按钮会触发该回调，同时实名认证的弹窗会被销毁，
            // 逻辑上需要游戏重新触发实名认证，正确引导玩家完成实名认证
        }
    },
    (exception) => {
        // 处理异常
    },
);
```

逻辑上是先进行 SDK 初始化，然后调用实名认证接口触发 TDS 的实名认证功能。

TDS 的实名认证有两种方式：

* TapTap 快速认证

TapTap 快速认证服务顾名思义，是通过玩家在 Tap 社区客户端已经拥有的账号登录，而且该账号是已经通过 TapTap 客户端实名过的。**这种方式的前提是游戏需要接入 [TapTap 登录](https://developer.taptap.com/docs/sdk/taptap-login/features/)功能**，游戏可以选择通过基于[内建账户系统](https://developer.taptap.com/docs/sdk/authentication/features/)接入 TapTap 登录，或者以[单纯 TapTap 用户认证](https://developer.taptap.com/docs/sdk/taptap-login/guide/tap-login/)的方式接入 TapTap 登录。登录成功后需要将 TapSDK 返回的玩家属性用户唯一标识作为参数传递给防沉迷的接口，从而才可以开始 TapTap 快速认证。具体的代码示范如下：

```csharp
bool isUseTapLogin = true;
string userIdentifier = "玩家的唯一标识";
// 玩家唯一标识 userIdentifier，如果接入 TDS 内建账户系统，建议使用 SDK 返回的 objectId 字段；
// 如果使用单纯 TapTap 用户认证则可以用 openid 或 unionid
AntiAddictionUIKit.Startup(useTapLogin, isUserIdentifier);
```
快速认证基于 TapTap 的 access token，SDK 会自动获取 access token。 如果自动获取失败，那么会显示手动输入实名信息的用户界面。

正确调用上述接口移动端打包后可以看到如下的弹窗：

![](/post-images/tap_antidiction_00.png)

该弹窗有对应两个按钮「不使用」和「使用」，这个时候玩家点击「使用」按钮，就会触发 TapTap 快速认证的真正核心功能。如果玩家点击「不使用」按钮，则会触发 TDS 防沉迷提供的第二种方式来进行实名认证（手动输入实名信息），具体的弹窗如下图所示的「游戏实名认证」窗口。
![](/post-images/tap_antidiction_01.png)

* 手动输入实名信息

如果不使用 TapTap 快速认证，可以通过下面的接口开始防沉迷授权。需要传入的玩家唯一标识 userIdentifier，由游戏自己定义。具体的代码示范如下：

```csharp
bool isUseTapLogin = false; // 不使用 TapTap 快速认证
string userIdentifier = "玩家的唯一标识";
AntiAddictionUIKit.Startup(isUseTapLogin, userIdentifier); 
```

手动输入实名信息会触发上述的「游戏实名认证」弹窗，玩家输入姓名、身份证号后如果认证失败，会提示「认证未通过，请提交真实信息」，如果乱填写身份证号，则会提示「身份证号码非法」。这些也不需要开发者关心，认证失败时，「游戏实名认证」窗口是不会关闭的，除非玩家点击右上角的 x 按钮主动关闭。这些都是 SDK 内部封装好的，开发者重点需要关心的是文档中给出的回调类型，这个很重要。比如实名认证过程中，玩家点击了右上角的 x 按钮，则会触发 code 为 9002 的回调，该回调告知开发者玩家的动作，表示玩家并没有完成实名认证，开发者对此应该做相应的逻辑处理。

无论采用哪种方式进行实名认证，调用的接口中有个参数需要额外注意下，**userIdentifier：玩家的唯一标识**。如果第一次认证后，紧接着进行第二次认证，userIdentifier 值没有改变的话，TapTap 服务端会根据该 userIdentifier 上次的认证结果结合当前时间段直接返回认证结果，省去姓名和身份证号的输入。所以，不同的玩家，这里的唯一标识应该要保持不同。

有的开发者可能会将该参数赋值为获取到的设备唯一标识，但是真的不太建议这样操作，因为安卓碎片化较为严重，玩家不同意获取设备信息权限等因素可能导致获取到的设备唯一标识为空，从而导致 userIdentifier 为空。如果代码不够健壮，非空判定比较少，结果就会是无法正常使用实名认证功能。当 userIdentifier 为空时调用实名认证接口会弹出 "**userIdentifier is empty**" 的提示窗。

无版号游戏没有开通实名认证防沉迷服务是无法使用 TDS 的实名认证防沉迷功能的。没有开通服务的游戏接入实名认证防沉迷，当调用实名认证接口时会给出相对应的提示：“**未查询到实名认证配置**”。
![](/post-images/tap_antidiction_02.png)

获取玩家年龄段：

实名认证后，可以统一调用如下接口获取当前玩家的年龄段：

```csharp
int ageRange = AntiAddictionUIKit.CurrentUserAgeLimit();
// ageRange 是一个整数，表示玩家所处年龄段的下限（最低年龄）。 特别地，-1 表示「未实名」。
```

具体年龄段返回数值及其对应年龄段如下表所示：

| 类型数值 | 含义 |
| - | - |
| -1 | 未实名 |
| 0 | 0 到 7 岁 |
| 8 | 8 到 15 岁 |
| 16 | 16 到 17 岁 |
| 18 | 成年玩家 |

上报游戏时长：

如果启用时长限制功能，需要上报游戏时长。已登录的玩家，开始游戏时调用此接口，之后 SDK 会自动轮询上报游戏时长。

```csharp
AntiAddictionUIKit.EnterGame();
```

相应地，已登录的玩家，停止游戏时调用此接口，之后 SDK 停止轮询上报时长。

```csharp
AntiAddictionUIKit.LeaveGame();
```

## 防沉迷策略

仅允许未成年人在周五、周六、周日和法定节假日的 20:00 至 21:00 进行游戏。非允许游戏时间段内，SDK 封装的相应逻辑会被触发，弹出提示框提醒未成年无法继续游戏。此时的未成年玩家最多有两种选择：「退出游戏」或者「切换账号」。
![](/post-images/tap_antidiction_04.png)

如果初始化 SDK 时设置的一个参数 showSwitchAccount 为 false（表示不显示「切换账号」按钮），那此时的未成年玩家只能选择「退出游戏」了。
```csharp
// 是否显示切换账号按钮
bool showSwitchAccount = false;
```

## 服务支持
对此有任何问题，非常欢迎通过开发者中心后台提工单咨询。
