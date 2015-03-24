---
layout: page
title: 陈列柜
categories: []
tags: []
published: true
comments: true
---

# [VVDocumenter - Xcode缺失已久的文档插件](https://github.com/onevcat/VVDocumenter-Xcode)

`2013年7月21日`

{% img right http://img.onevcat.com/2013/VVDocumenter.png %}

<a href="http://flattr.com/thing/1710755/onevcatVVDocumenter-Xcode-on-GitHub" target="_blank"><img src="http://api.flattr.com/button/flattr-badge-large.png" alt="Flattr this" title="Flattr this" border="0" /></a>

一直以来虽然ObjC代码因为其可读性极强，而不太需要时常查阅文档，但是其实对于大多数人（包括我自己）来说，可能为方法或变量取一个好名字并不是那么简单的事情。这时候可能就需要文档或者注释来帮助之后的开发者（包括大家自己）尽快熟悉和方便修改。但是用Xcode写文档是一件让人很头疼的事情，Xcode对写文档的支持几乎为0，没有像VS之类的成熟IDE的方便的方法，一直以来都是依靠像Snippet这样的东西，然后自己辛苦填写大量已有的内容。

之前看到一个用[Ruby+系统服务来生成注释的方案](http://blog.chukong-inc.com/index.php/2012/05/16/xcode4_fast_doxygen/)，但是每次要自己去选还要按快捷键，总觉得是很麻烦的事情。借鉴其他平台IDE一般都是采用三个斜杠（`///`）来生成文档注释的方法，所以也为Xcode写了一个类似的。用法很简单，在要写文档的代码上面连打三个斜杠，就能自动提取参数等生成规范的Javadoc格式文档注释。**VVDocumenter**整个项目MIT开源，并且扔在github上了，有兴趣的童鞋可以从下面的链接找到，欢迎大家加星fork以及给我发pull request来改善这个插件。

Writing document is so important for developing, but it is really painful with Xcode. Think about how much time you are wasting in pressing '*' or '/', and typing the parameters again and again. Now, you can find the method (or any code) you want to document to, and type in ///, the document will be generated for you and all params and return will be extracted into a beatiful Javadoc style. You can just fill the inline placeholders to finish your document。

## Github页面

* [https://github.com/onevcat/VVDocumenter-Xcode](https://github.com/onevcat/VVDocumenter-Xcode)

***

# [UniRate - 更好的即开即用Unity评价提醒插件](http://unirate.onevcat.com/)

`2013年7月18日`

{% img right http://img.onevcat.com/2013/unirate-icon.png %}

UniRate是一个帮助Unity移动游戏开发者简单集成AppStore/Google Play Market评分提示功能的插件。当用户打开应用指定次数和天数时，将弹出窗口提示用户评价应用。用户如果选择评价，UniRate将自动引导用户前往对应的页面进行评价。用户也可以选择稍后评价或不评价。采用这样的策略可以得到尽可能多的5星评论，对于推广应用很有好处。

UniRate的集成和使用非常简单，在拖拽一次就完美工作的同时，也提供了各种详细的设定，可以使UniRate按照设定工作。对于UniRate，我会提供完整的支持和更新，详细可以参见下面的链接。

UniRate is a Unity package to help you promote you mobile games by prompting users to rate the app after using it for a few days or times. Integrating UniRate to your project is deadly simple as a drag & drop. It will count the using of the times and days automatically and if the conditions you set are met, a native prompt will pop up and user can decide whether rate it or not. 

This approach is one of the best ways to get positive app reviews by targeting only regular users (who presumably like the game or they wouldn't keep playing it). 

Although UniRate is very easy to use, it can be very powerful and you can tweak it performs exactly as you want. For more detailed description, please have a look at the online manual. All code is well documented and you can find online manual and forum support in links below. Hope you use it happily! 

## Unity Asset Store页面

* [https://www.assetstore.unity3d.com/#/content/10116](https://www.assetstore.unity3d.com/#/content/10116)

## 用户手册

* [https://github.com/onevcat/UniRate/wiki/UniRate-Manual](https://github.com/onevcat/UniRate/wiki/UniRate-Manual)

## 代码文档

* [http://unirate.onevcat.com/reference/class_uni_rate.html](http://unirate.onevcat.com/reference/class_uni_rate.html)

***

# [Volume Recorder - 音量录音机](https://itunes.apple.com/cn/app/volume-recorder/id646243166)

`2013年6月29日`

{% img right http://img.onevcat.com/2013/VR_icon.png %}

音量录音机（Volume Recorder）是一款帮助您解决梦话、会议或者嘈杂情景下录音需求的app。它可以根据监测到的音量来自动进行录音，您能够在获得所有录音信息的同时节省您的设备空间和电量。这是一个免费应用，也不会包含任何广告或者录音限制等，唯一的限制是您只有通过内购完全版才能将录音导出，同时可以获得同步至Dropbox等更多功能。

对于录音的处理，由于在预想的使用情景中可能面临时间长，碎片多等问题，实现时采用了比较低层级的手段，可以说是被迫读了一些C和C++的代码。因为其实之前在绝大多数情况下我都在和高层级的API和界面交互打交道，所以对于纯C的代码还是比较怵的，不过幸好坚持下来并且完成了。回头想一想，收获是很大的，希望这会成为一个转机吧。

## AppStore页面

  * [https://itunes.apple.com/cn/app/volume-recorder/id646243166](https://itunes.apple.com/cn/app/volume-recorder/id646243166)

***

# [XUPorter - Unity3D编译XCode工程的依赖管理](http://onevcat.com/2012/12/xuporter/)

`2013年5月11日`

{% img right http://img.onevcat.com/2013/unity-xuporter-logo.jpg %}

XUPorter是一个能够在Unity3D生成Xcode工程文件后，根据配置文件自动添加依赖库和引用文件的工具。它使用[PostProcessBuild](http://docs.unity3d.com/Documentation/ScriptReference/PostProcessBuildAttribute.html)标签，在编译后寻找配置文件并修改XCode工程文件，完全运行于Unity3D编辑器中，而不需要涉及PostprocessBuildPlayer的脚本编写和调试，十分方便。

这个项目起源于darktable的[Mod PBXProj](https://bitbucket.org/darktable/mod-pbxproj/overview)，适用版本为Unity3.5及以上，以及Xcode 4.x。

## 详细介绍

* [http://onevcat.com/2012/12/xuporter/](http://onevcat.com/2012/12/xuporter/)

## Github页面

* [https://github.com/onevcat/XUPorter](https://github.com/onevcat/XUPorter)

***


# [Our Money - 云端协同记账](http://onevcat.com/2013/04/our-money-app/)

`2013年3月21日`

{% img right http://img.onevcat.com/2013/OurMoneyIcon.png %}

Our Money是我在[Kayac](http://www.kayac.com)工作期间，用业余时间开发的一款云端多人协同记账的iOS应用。该app最大的特点是可以很简单地实现多人共享一个账本进行记账，从而免去了汇总和统计的麻烦（想像一下老公每天要记住自己的开销，然后晚上回家向老婆汇报的场景）。简单高效的UI以及完全无感的自动后端同步，可以帮助养成记账的良好习惯，进而追踪自己的日常开销。这是完全由自己独立完成的第二款应用，在之前[Pomodoro Do](http://www.onevcat.com/showcase/pomodoro_do/)的开发中积累的一些经验得到了很好的运用。

## 详细介绍

  * [http://onevcat.com/2013/04/our-money-app/][11]

   [11]: http://onevcat.com/2013/04/our-money-app/

## AppStore页面

  * [https://itunes.apple.com/cn/app/our-money/id562520527?ls=1&mt=8][12]

   [12]: https://itunes.apple.com/cn/app/our-money/id562520527?ls=1&mt=8

## 官方网站

  * [http://ourmoney.onevcat.com/](http://ourmoney.onevcat.com/)


***


# [QuizKingdom][1]

   [1]:  http://www.onevcat.com/showcase/quizkingdom/

### 冒険クイズキングダム

`2013年1月30日`

{% img right http://www.onevcat.com/wp-content/uploads/2011/12/mzl.eyzgzwwu.png %}

QuizKingdom（冒険クイズキングダム）是我加入Kayac后参与开发的第一款作品。该游戏是iOS及Android平台的基于问答的含有RPG元素的益智类游戏。QuizKingdom是由Unity3D开发的，游戏内容十分丰富，日本区下载量超过了***100万次***。

## 详细介绍

  * [http://www.onevcat.com/showcase/quizkingdom/][4]

   [4]: http://www.onevcat.com/showcase/quizkingdom/

## AppStore页面

  * [https://itunes.apple.com/jp/app/mao-xiankuizukingudamu/id560442729?l=ja&ls=1&mt=8][5]

   [5]: https://itunes.apple.com/jp/app/mao-xiankuizukingudamu/id560442729?l=ja&ls=1&mt=8

## Google Play页面

  * [https://play.google.com/store/apps/details?id=com.kayac.quizkingdom][6]

   [6]: https://play.google.com/store/apps/details?id=com.kayac.quizkingdom

## 官方网站

  * [http://quiz-kingdom.kayac.com/][7]

   [7]: http://quiz-kingdom.kayac.com/

* * *

# [Pomodoro Do][8]

   [8]: http://onevcat.com/showcase/pomodoro_do/

`2012年7月25日`

{% img right http://pomo.onevcat.com/img/Icon-50.png %}

Pomodoro Do是我利用硕士毕业后，日语培训前的短暂时间完成的iOS上的番茄工作法计时辅助工具，配合番茄工作法，可以更加专注，减少不必要的时间浪费，从而提高效率。这款应用的创意、设计、编码、推广均有我自己独立完成，收获颇丰。这款应用在没有任何推广费用投入的条件下多次进入中国区效率榜前5名，也帮助了很多用户节约时间，提高效率。自己开发的应用能够真的有用，能够帮助别人，这对我来说莫过于最开心的事情了。

## 详细介绍

  * [http://www.onevcat.com/showcase/pomodoro_do/][11]

   [11]: http://www.onevcat.com/showcase/pomodoro_do/

## AppStore页面

  * [http://itunes.apple.com/cn/app/pomodoro-do/id533469911?ls=1&mt=8][12]

   [12]: http://itunes.apple.com/cn/app/pomodoro-do/id533469911?ls=1&mt=8

## 官方网站

  * [http://pomo.onevcat.com/][13]

   [13]: http://pomo.onevcat.com/

* * *


# [扑克王中王][14]

   [14]: http://www.onevcat.com/showcase/texaspokerking/

`2012年6月25日`

{% img right http://www.onevcat.com/wp-content/uploads/2012/06/Icon@2x.png %}

扑克王中王是我在攻读硕士期间在北京锐德无限兼职时开发的iOS平台德州扑克游戏。不论您水平如何，都可以迅速上手，并在游戏中有机会与来自全球的德州玩家同台竞技。

## 详细介绍

  * [http://www.onevcat.com/showcase/texaspokerking/][17]

   [17]: http://www.onevcat.com/showcase/texaspokerking/

## AppStore页面

  * [http://itunes.apple.com/app/pu-ke-wang-zhong-wang/id524930436?mt=8][18]

   [18]: http://itunes.apple.com/app/pu-ke-wang-zhong-wang/id524930436?mt=8

## 官方网站

  * [http://www.texaspokerking.net/zh/][19]

   [19]: http://www.texaspokerking.net/zh/

* * *

# [VVBorderTimer][20]

   [20]: http://www.onevcat.com/showcase/vvbordertimer/

`2011年12月24日`

{% img right http://www.onevcat.com/wp-content/uploads/2011/12/borderlogo-150x150.png %}


VVBorderTimer是一个可配置的使用边框作为计时条的UIView.

该视图是在德州扑克项目中我所开发的通用计时视图，现作为BSD开源

## 详细介绍

  * [http://www.onevcat.com/showcase/vvbordertimer/][23]

   [23]: http://www.onevcat.com/showcase/vvbordertimer/

## GitHub页面

  * [https://github.com/onevcat/VVBorderTimer][24]

   [24]: https://github.com/onevcat/VVBorderTimer

* * *

# [小熊推金币（小熊战争-在线竞技）][25]

   [25]: http://www.onevcat.com/showcase/coinpush/

`2011年11月12日`

{% img right http://www.onevcat.com/wp-content/uploads/2011/12/5121-e1324784475826.png %}


小熊推金币是我在攻读硕士期间在北京锐德无限兼职时开发的iOS/Android平台的休闲类游戏，模拟并扩展了了街机厅推币机的游戏方式，并加入了诸如联机对战，服饰系统，好友系统等许多有趣的SNS游戏元素。该游戏在AppStore上曾在多个国家取得娱乐榜第一，总排行榜前三的好成绩，全球范围内下载量达到500万左右。

## 详细介绍

  * [http://www.onevcat.com/showcase/coinpush/][27]

   [27]: http://www.onevcat.com/showcase/coinpush/

## AppStore页面

  * iPhone/iPod Touch原版 [http://itunes.apple.com/app//id429881074?mt=8][28]
  * iPhone/iPod Touch对战版 [http://itunes.apple.com/app/id435378516?mt=8][29]
  * iPad原版 [http://itunes.apple.com/us/app/bear-coin-hd-cooco-bear/id478660705?mt=8][30]

   [28]: http://itunes.apple.com/app//id429881074?mt=8
   [29]: http://itunes.apple.com/app/id435378516?mt=8
   [30]: http://itunes.apple.com/us/app/bear-coin-hd-cooco-bear/id478660705?mt=8

## Google Play页面

  * [https://play.google.com/store/apps/details?id=com.loverita.allen&feature=search_result#?t=W251bGwsMSwxLDEsImNvbS5sb3Zlcml0YS5hbGxlbiJd][31]
  * [http://as.baidu.com/a/item?docid=74538&f=web_alad_1][32]

   [31]: https://play.google.com/store/apps/details?id=com.loverita.allen&feature=search_result#?t=W251bGwsMSwxLDEsImNvbS5sb3Zlcml0YS5hbGxlbiJd
   [32]: http://as.baidu.com/a/item?docid=74538&f=web_alad_1
