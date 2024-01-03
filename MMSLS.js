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

let MMSLS = [
	"https://www.maimemo.com/share/page?uid=29726779&pid=6d73cee2eb013e9182d0ad925fff7e2c&tid=373b360a103ace81cd008923650624f5",
	"https://www.maimemo.com/share/page?uid=32329480&pid=6d73cee2eb013e9182d0ad925fff7e2c&tid=5ac54fa98e0f73de5ce96036cdcb2ddc",
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
