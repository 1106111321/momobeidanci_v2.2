/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=32454734&pid=ff6a8b3a651ee2874e97b338d9ef1358&tid=e9417164027beb4e9ae0bf3d49b79ffb",
    "https://www.maimemo.com/share/page?uid=32454734&pid=51406dd9e063b581acceb3363d60e3c3&tid=e22a83446318a25969f7f24f913fa60c",
    "https://www.maimemo.com/share/page?uid=32454734&pid=ff6a8b3a651ee2874e97b338d9ef1358&tid=e9417164027beb4e9ae0bf3d49b79ffb",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */

// https://www.52pojie.cn/forum.php?mod=viewthread&tid=1865413&highlight=%C4%AB%C4%AB%B1%B3%B5%A5%B4%CA

/*
 使用方法：
 1. 打开 https://github.com/Space-FuCheng/momoshare/ 。右边有watch，fork，star按钮。点击fork，新页面点create fork
 2. 点settings，再点action，最上面 Actions permissions 这项点击第一个然后按下面的save应该就行，不行再调下别的
 3. 点code，点MMSLS.js，把你的分享链接放进去，你要是只有一个号，你每天换那一个就行。
 4. 点action，点I understand的啥的，绿色的框。左面的click分享link，点右边的 enable workflow，然后点run workflow就会运行了，差不多20多分钟左右一次。每天都需要换链接。
 */

let MMSLS = [
	"https://www.maimemo.com/share/page?uid=32329480&pid=305d53379f930e92ad9b41e2e3814310&tid=ed4315cdc51208b74a6b7e154fd40467",
];
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
