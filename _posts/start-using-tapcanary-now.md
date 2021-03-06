---
title: "TapCanary 正式上线，可以用起来了兄弟萌！"
excerpt: "让开发者能可靠进行小规模游戏内测的工具 TapCanary 正式上线并投入使用了。"
date: "2021-11-15"
author: yuanzhipeng
---

Hi 各位开发者小伙伴们，

之前有很多开发者问过我，「我的游戏完成度还很低呀，但是又想测一测，放出去评分怕不是凉凉呀」、「我怎么能在游戏玩法设计的阶段验证设计的好不好，大家喜不喜欢呀？」、「我测试的时候不想我的游戏 APK 外流，只想在特定人群中进行测试和收集反馈，怎么办呀？」等等。

经过我们和产品小伙伴的「友好」沟通，我们面向开发者小规模游戏测试的工具系统 TapCanary 正式上线并投入使用，主要就是为了解决以下场景大家的不便：

1. 开发者可以将游戏的 alpha、beta 等版本放出给指定用户进行测试，目前可以指定的最大用户规模为 1000 人，基本满足大家小规模且短时间的定向测试的需要；
2. 可以同时创建多条测试计划，可以对多套玩法进行同时测试，如果你愿意的话， A/B/C/D/E/F/G 测一起干都行（手动狗头）；
3. 本期测试能力的实现采用云玩或者沙盒启动模式进行，没有 APK 外流，适合部分开发者测试游戏的同时不想让包体流出的要求，同时也可以同步测试游戏在云玩和沙盒中的表现；
4. 如果你愿意的话，公司内部的测试下发也能用 TapCanary 来实现 🤔

目前可以通过 TapCanary 控制台 配置测试计划，详细的功能说明可以参考 TapCanary 功能介绍 ，
额外需要说明的是，

1. 在 TapCanary 开设测试计划的游戏没有必须要上架、必须要接入什么 SDK 的要求，唯一需要的是，在开发者中心创建一个游戏页面（不用提审也可以），并在此游戏的「游戏服务」功能中获取 clientID 用于测试计划的创建；
2. 奉劝某些不好好做游戏、一心只想割韭菜的开发者，不要想用 TapCanary 做些什么违规的奇怪事情，不然小心我送你去喝茶；

当然，这套系统依然有很多不足的地方，后续迭代的计划还在进行中，包括游戏崩溃日志上报、玩家建议反馈汇总等等，大家有什么诉求或者问题，可以直接移步 TapCanary 论坛 进行讨论。
