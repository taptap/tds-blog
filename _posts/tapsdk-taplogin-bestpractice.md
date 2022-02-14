---
title: "TapSDK 登录最佳实践"
excerpt: "一篇文章了解 TapSDK 登录的整个流程"
date: "2022-02-11"
author: "shouwang"
---

关于 TapTap 登录，首先你需要知道的是 TDS 提供两种方式供选择，分别是[「单纯 TapTap 用户认证」](https://developer.taptap.com/docs/sdk/taptap-login/guide/tap-login/)和「基于[内建账户系统](https://developer.taptap.com/docs/sdk/authentication/features/)接入 TapTap 登录」。推荐使用后者，这里简要说明下二者的区别。

* **单纯 TapTap 用户认证：**
    这种方式完全免费，采用这种方式进行 TapTap 登录是无法使用 TDS 其他的云服务的，比如无法在此基础上使用好友、数据存储、成就等云服务。就只是使用 TapTap 进行授权登录。

* **基于内建账户系统接入 TapTap 登录：**
    TDS 内建账户服务致力于帮助开发者快速低成本地构建一个安全可靠的玩家登录系统。支持玩家采用包括游客账号、第三方账号（TapTap、微信、QQ、Apple 等）在内的多种账号来登录你的游戏。你无需关心云端的搭建与实现，只需在工程中调用相关能力提供的 API，通过 TDS User 对象来快速实现它们。

    没有开发过账户系统的开发者，希望能轻松快速的完成游戏内账户系统搭建的使用该方式登录再适合不过了，而针对已经自行构建了账户系统，也可以通过访问 TDS 内建账户，更加方便的使用 TDS 其他服务（比如数据存储、好友、成就、云存档等）。建议使用该方式进行授权登录，以便于往后要使用到 TDS 相关的云服务时可以平滑无缝对接。   

## 接入 TapTap 登录需要完成以下四步：

- 开启 TapTap 登录服务
- 配置应用信息
- 添加测试账号
- 集成 SDK 测试登录

就上述四步骤这里做个详细描述，无论采用上述两种方式的任意一种都需要进行如下四步操作：

### 第一：开启服务

* 首先是在开发者中心后台创建应用，依次进入 **TapTap 开发者中心 > 你的游戏 > 游戏服务 > 应用配置**。最后点击「立即开启」按钮表示应用开启 TDS 相关服务，成功开启后将获得 TDS 提供的应用密钥（Client ID、Client Token 和 Client Secret），应用密钥作为应用使用 TDS 服务的调用凭证，SDK 初始化时会使用到。
![](/post-images/tap_login_00.jpg)

* 应用开启 TDS 相关服务后，继续选择开通 TapTap 登录服务。点击 TapTap 登录模块下的「立即开通」按钮，至此应用才可以配置 TapTap 登录服务。


### 第二：配置应用信息

无论采用哪种方式授权，都需要在开发者中心后台配置应用的包名、签名 MD5 信息（Android）、BundleID（iOS），详细配置如下图所示。
![](/post-images/tap_login_01.jpg)

安卓的签名 MD5 值不要配置错了，没有配置 MD5 或者配置错了 MD5 都会提示 **signature not match**。有的开发者可能没有调试出异常信息，可以通过这种方式进行验证：如果将 TapTap 客户端卸载，进行登录功能时会弹出 Web 页形式进行授权，如果可以授权成功，而安装了 TapTap 客户端则无法正常授权，这种情况基本上就是因为签名配置问题导致的，可以优先进行相关排查。

为了正确填写签名 MD5 值，可以使用如下的工具进行获取：[GenSignatureMD5](/tools/get-signature-md5.apk)。使用方式：游戏打包一定要使用正式的签名证书进行签名打包，然后将出的包安装到手机上，与此同时，将这个工具也安装到同一部手机上，然后打开该工具输入游戏包名就可以得到签名 MD5 值。

如果选择的是「基于内建账户系统接入 TapTap 登录」，上述操作结束后，还需要额外进入「数据存储」服务中进行域名绑定。本质就是将已经备过案的子域名绑定到开发者中心后台中，具体的可以参考[「绑定 API 域名」](https://developer.taptap.com/docs/sdk/start/get-ready/#%E5%9F%9F%E5%90%8D%E7%BB%91%E5%AE%9A)。主要作用就是和其他厂商的应用隔离入口，避免其他应用受到 DDoS 攻击时相互牵连。

### 第三：添加测试账号
测试用户管理功能是用于 TapTap 登录、正版验证等相关服务的测试用户名单管理。为什么要添加测试账号？是为了安全，如果游戏正式上线之前流出包体，没有添加测试账号的还是无法登录，也方便内部测试管理。所以，游戏正式上线之前需要点击「上线应用」按钮，将应用的状态由「调试中」变更成「已上线」。需要注意的是：这个过程是不可逆的，状态为「已上线」的应用相当于全量开放登录功能。
![](/post-images/tap_login_02.jpg)

选择「测试用户管理」，进入页面，点击「添加用户」按钮。填写用户 ID 也就是 TapTap 客户端或昵称搜索用户，选择用户并提交，成功将用户添加进名单。
![](/post-images/tap_login_03.jpg)

如果所有过程都完成了，游戏状态还处于「调试中」，唯独忘记了添加测试账号，那你在测试登录功能时会看到如下图所示「抱歉，该游戏/应用暂未开放」。
![](/post-images/tap_login_04.jpg)


### 第四：集成 SDK 测试登录
上述配置无误后，那么，可以正式集成 TapSDK 了，其实，集成 TapSDK 很简单，分为两个步骤：导包 和 添加代码。导包就不做赘述了，很简单而且官方文档写的很详细了。需要注意的是[「单纯 TapTap 用户认证」](https://developer.taptap.com/docs/sdk/taptap-login/guide/tap-login/)和「基于[内建账户系统](https://developer.taptap.com/docs/sdk/authentication/features/)接入 TapTap 登录」这两种方式的初始化和功能代码不一样。具体的参考两种方式的文档。

**有以下几点需要注意：**

TapSDK 的初始化代码和登录功能代码建议保留一定的间隔时间，确保 TapSDK 初始化完毕。建议在页面加载时进行初始化，然后提供个登录按钮，该按钮点击事件就是 TapSDK 登录功能代码，官方也是建议需要提供一个登录按钮的，而且还提供了登录按钮设计资源供下载，具体的规则可以参考[「TapTap 登录入口设计规则」](https://developer.taptap.com/docs/design/)。
关于[静默登录](https://developer.taptap.com/docs/sdk/taptap-login/features/#%E5%AE%9E%E7%8E%B0%E9%9D%99%E9%BB%98%E7%99%BB%E5%BD%95)，主要是用于用户下一次启动游戏时，仍然具有上一次登录后的状态而不需要再次触发 TapTap 登录功能，这样可以简化登录流程。

```java
// 伪代码
// 先初始化 SDK 后判断登录状态
if (null == 登录状态){
    // 展示 TapTap 登录按钮、或者展示登录界面等
    // 执行 TapTap 登录功能
} else {
    // 登录状态有效，可以隐藏 TapTap 登录按钮、或者隐藏登录界面
    // 直接进入游戏主界面
}
```

针对 Android 应用而言，TapSDK 的初始化代码以及登录相关代码，需要确保在主线程中执行。

```java
// 打印线程名称  主线程名称: main
Thread.currentThread().getName()
```

## Checklist​
向玩家提供登录功能前，开发者需要测试登录流程是否正常完成，检查以下事项：

* 游戏是否达到 [SDK 环境要求](https://developer.taptap.com/docs/sdk/start/quickstart/#%E7%8E%AF%E5%A2%83%E8%A6%81%E6%B1%82)。
* 开发者是否了解 TapSDK 中两种 TapTap 登录方式，并选择了适合游戏的一种。参考[接入 TapTap 登录](https://developer.taptap.com/docs/sdk/taptap-login/guide/start/)。
* 是否在 TapTap 开发者后台填写了 Android 平台或 iOS 平台相关配置。参考[配置签名证书](https://developer.taptap.com/docs/sdk/start/quickstart/#%E9%85%8D%E7%BD%AE%E7%AD%BE%E5%90%8D%E8%AF%81%E4%B9%A6)。
* 测试用户是否具备相关权限。参考[测试用户管理](https://developer.taptap.com/docs/sdk/start/test-accounts/)。
* 在未安装 TapTap 客户端的设备上打开游戏，是否能以 Webview 方式完成登录流程，是否能获取玩家授权的基本信息。
* 在安装了最新版 TapTap 客户端的设备上打开游戏，是否能拉起 TapTap 客户端完成登录流程，是否能获取玩家授权的基本信息。
* 登录授权完成后，退出游戏再次进入，是否可以[静默登录](https://developer.taptap.com/docs/sdk/taptap-login/features/#%E5%AE%9E%E7%8E%B0%E9%9D%99%E9%BB%98%E7%99%BB%E5%BD%95)。
* 登录授权未完成就退出游戏，或者点了取消，再次进入游戏，是否能重新开始登录流程。

## 服务支持
对此有任何问题，非常欢迎通过开发者中心后台提工单咨询。

