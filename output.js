//Wed Nov 12 2025 14:13:13 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let mo = null;
let spid;
const zhucemf7day = localStorage.getItem("zhuce-mf-7day");
let fudailisturl;
let fafudaiurl;
let userid;
let isnew;
let qudenglu;
let paixuurl;
let chaxun = false;
let yao;
let cjrq;
let dd = "巨量百应";
let fafudaisum = 0;
let fafudaisbsum = 0;
let quanxcishu = 0;
let lastUrl = location.href;
let buffer = "";
let lastKeyTime = 0;
let cg = "https://files.zohopublic.com.cn/public/workdrive-public/download/w86hs24b37c160d0c468980d3526c291da573?x-cli-msg=%7B%22linkId%22%3A%221rINvdZgCEF-330F6%22%2C%22isFileOwner%22%3Afalse%2C%22version%22%3A%221.0%22%2C%22isWDSupport%22%3Afalse%7D";
let sb = "https://files.zohopublic.com.cn/public/workdrive-public/download/w86hs18f89b3624b449c9860b01b03f2aa44c?x-cli-msg=%7B%22linkId%22%3A%221rINvdZgCEG-330F6%22%2C%22isFileOwner%22%3Afalse%2C%22version%22%3A%221.0%22%2C%22isWDSupport%22%3Afalse%7D";
let tpsrc;
let timerId = null;
let zzjz = true;
let jiangjieanniu = "自动弹讲解";
const API_BASE = "http://zikx.back1.idcfengye.com/";
let yanz = "http://zikx.xyz:11092/login.php";
yanz = "http://zikx.back1.idcfengye.com/login.php";
let yaoyanz = "http://zikx.back1.idcfengye.com/yao.php";
let fafudaibody;
let fudaiqqt;
let autoLoginTimer = null;
const modalKjxg = document.createElement("div");
modalKjxg.style.display = "none";
modalKjxg.style.position = "fixed";
modalKjxg.style.zIndex = "10001";
modalKjxg.style.left = "0";
modalKjxg.style.top = "0";
modalKjxg.style.width = "100%";
modalKjxg.style.height = "100%";
modalKjxg.style.backgroundColor = "rgba(0,0,0,0.4)";
const modalContentKjxg = document.createElement("div");
modalContentKjxg.style.backgroundColor = "#fefefe";
modalContentKjxg.style.margin = "15% auto";
modalContentKjxg.style.padding = "20px";
modalContentKjxg.style.border = "1px solid #888";
modalContentKjxg.style.width = "400px";
modalContentKjxg.style.borderRadius = "8px";
modalContentKjxg.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
const titleKjxg = document.createElement("h2");
titleKjxg.textContent = "库存价格快捷修改";
titleKjxg.style.marginTop = "0";
titleKjxg.style.color = "#333";
modalContentKjxg.appendChild(titleKjxg);
const inputContainerKjxg = document.createElement("div");
inputContainerKjxg.style.display = "flex";
inputContainerKjxg.style.flexWrap = "wrap";
inputContainerKjxg.style.gap = "10px";
inputContainerKjxg.style.marginBottom = "20px";
const indexDivKjxg = document.createElement("div");
indexDivKjxg.style.flex = "1";
indexDivKjxg.style.minWidth = "120px";
const indexLabelKjxg = document.createElement("label");
indexLabelKjxg.textContent = "请输入第几个sku:";
indexLabelKjxg.style.display = "block";
indexLabelKjxg.style.marginBottom = "5px";
indexLabelKjxg.style.fontWeight = "bold";
const indexInputKjxg = document.createElement("input");
indexInputKjxg.type = "number";
indexInputKjxg.min = "1";
indexInputKjxg.placeholder = "例如: 1";
indexInputKjxg.style.width = "100%";
indexInputKjxg.style.padding = "8px";
indexInputKjxg.style.border = "1px solid #ddd";
indexInputKjxg.style.borderRadius = "4px";
indexInputKjxg.style.boxSizing = "border-box";
indexDivKjxg.appendChild(indexLabelKjxg);
indexDivKjxg.appendChild(indexInputKjxg);
const stockDivKjxg = document.createElement("div");
stockDivKjxg.style.flex = "1";
stockDivKjxg.style.minWidth = "120px";
const stockLabelKjxg = document.createElement("label");
stockLabelKjxg.textContent = "请输入库存（留空不改）:";
stockLabelKjxg.style.display = "block";
stockLabelKjxg.style.marginBottom = "5px";
stockLabelKjxg.style.fontWeight = "bold";
const stockInputKjxg = document.createElement("input");
stockInputKjxg.type = "number";
stockInputKjxg.min = "0";
stockInputKjxg.placeholder = "例如: 100";
stockInputKjxg.style.width = "100%";
stockInputKjxg.style.padding = "8px";
stockInputKjxg.style.border = "1px solid #ddd";
stockInputKjxg.style.borderRadius = "4px";
stockInputKjxg.style.boxSizing = "border-box";
stockDivKjxg.appendChild(stockLabelKjxg);
stockDivKjxg.appendChild(stockInputKjxg);
const priceDivKjxg = document.createElement("div");
priceDivKjxg.style.flex = "1";
priceDivKjxg.style.minWidth = "120px";
const priceLabelKjxg = document.createElement("label");
priceLabelKjxg.textContent = "请输入价格（留空不改）:";
priceLabelKjxg.style.display = "block";
priceLabelKjxg.style.marginBottom = "5px";
priceLabelKjxg.style.fontWeight = "bold";
const priceInputKjxg = document.createElement("input");
priceInputKjxg.type = "number";
priceInputKjxg.min = "0";
priceInputKjxg.step = "0.01";
priceInputKjxg.placeholder = "例如: 19.99";
priceInputKjxg.style.width = "100%";
priceInputKjxg.style.padding = "8px";
priceInputKjxg.style.border = "1px solid #ddd";
priceInputKjxg.style.borderRadius = "4px";
priceInputKjxg.style.boxSizing = "border-box";
priceDivKjxg.appendChild(priceLabelKjxg);
priceDivKjxg.appendChild(priceInputKjxg);
inputContainerKjxg.appendChild(indexDivKjxg);
inputContainerKjxg.appendChild(stockDivKjxg);
inputContainerKjxg.appendChild(priceDivKjxg);
modalContentKjxg.appendChild(inputContainerKjxg);
const buttonContainerKjxg = document.createElement("div");
buttonContainerKjxg.style.display = "flex";
buttonContainerKjxg.style.justifyContent = "flex-end";
buttonContainerKjxg.style.gap = "10px";
const confirmBtnKjxg = document.createElement("button");
confirmBtnKjxg.textContent = "确定";
confirmBtnKjxg.style.padding = "10px 20px";
confirmBtnKjxg.style.backgroundColor = "#4CAF50";
confirmBtnKjxg.style.color = "white";
confirmBtnKjxg.style.border = "none";
confirmBtnKjxg.style.borderRadius = "4px";
confirmBtnKjxg.style.cursor = "pointer";
confirmBtnKjxg.style.fontSize = "14px";
const cancelBtnKjxg = document.createElement("button");
cancelBtnKjxg.textContent = "取消";
cancelBtnKjxg.style.padding = "10px 20px";
cancelBtnKjxg.style.backgroundColor = "#f44336";
cancelBtnKjxg.style.color = "white";
cancelBtnKjxg.style.border = "none";
cancelBtnKjxg.style.borderRadius = "4px";
cancelBtnKjxg.style.cursor = "pointer";
cancelBtnKjxg.style.fontSize = "14px";
buttonContainerKjxg.appendChild(cancelBtnKjxg);
buttonContainerKjxg.appendChild(confirmBtnKjxg);
modalContentKjxg.appendChild(buttonContainerKjxg);
modalKjxg.appendChild(modalContentKjxg);
document.body.appendChild(modalKjxg);
confirmBtnKjxg.addEventListener("click", async function () {
  const _0x53b118 = indexInputKjxg.value;
  const _0x1fa127 = stockInputKjxg.value;
  const _0x58c8b4 = priceInputKjxg.value;
  (!_0x53b118 || !_0x1fa127 && !_0x58c8b4) && createxhcZtCard(sb, "操作失败", "请填写\"第几个\"sku，并且至少填写\"库存\"或\"价格\"中的一个字段！", "#fc0606ff");
  console.log("id是" + window.kjxgid + "-第" + _0x53b118 + "个商品 - 库存: " + _0x1fa127 + ", 价格: " + _0x58c8b4);
  indexInputKjxg.value = "";
  stockInputKjxg.value = "";
  priceInputKjxg.value = "";
  modalKjxg.style.display = "none";
  createxhcZtCard(cg, "操作成功", "修改完成会在此处提醒", "#0cff03ff");
  if (_0x1fa127) {
    let _0x4bb364 = await kjxgkc(window.kjxgid, _0x1fa127, _0x53b118);
    _0x58c8b4 && _0x4bb364 && kjxgjg(window.kjxgid, _0x58c8b4, _0x53b118);
  } else {
    if (_0x58c8b4) {
      let _0xdd5b61 = await kjxgjg(window.kjxgid, _0x58c8b4, _0x53b118);
      _0x1fa127 && _0xdd5b61 && kjxgkc(window.kjxgid, _0x1fa127, _0x53b118);
    }
  }
});
cancelBtnKjxg.addEventListener("click", function () {
  indexInputKjxg.value = "";
  stockInputKjxg.value = "";
  priceInputKjxg.value = "";
  modalKjxg.style.display = "none";
});
window.addEventListener("click", function (_0x5cb693) {
  _0x5cb693.target === modalKjxg && (modalKjxg.style.display = "none");
});
function startAutoLogin(_0x3c0569 = 2) {
  stopAutoLogin();
  const _0x181752 = _0x3c0569 * 60 * 1000;
  autoLoginTimer = setInterval(() => {
    autoLogin();
  }, _0x181752);
  console.log("已启动自动登录，每 " + _0x3c0569 + " 分钟执行一次");
}
function stopAutoLogin() {
  autoLoginTimer && (clearInterval(autoLoginTimer), autoLoginTimer = null, console.log("已停止自动登录"));
}
function isAutoLoginRunning() {
  return autoLoginTimer !== null;
}
function restartAutoLogin(_0x52623b = 2) {
  stopAutoLogin();
  startAutoLogin(_0x52623b);
}
const NewFeatureHintnew = {
  STORAGE_PREFIXnew: "new_feature_hint_",
  initnew: function () {
    this.addStylesnew();
    console.log("新功能提示工具已加载");
  },
  addnew: function (_0x24e98e, _0x277145 = {}) {
    const _0xcd23c7 = document.getElementById(_0x24e98e);
    if (!_0xcd23c7) {
      console.error("元素未找到: " + _0x24e98e);
      return false;
    }
    const _0x17027a = {
      featureNamenew: "新功能",
      positionnew: "top-right",
      stylenew: "pulse",
      showLabelnew: true,
      autoRemovenew: false,
      ..._0x277145
    };
    const _0x559294 = _0x17027a;
    const _0x2797d8 = this.STORAGE_PREFIXnew + _0x24e98e;
    const _0x1382e4 = localStorage.getItem(_0x2797d8) === "true";
    if (_0x1382e4 && _0x559294.autoRemovenew) {
      return false;
    }
    getComputedStyle(_0xcd23c7).position === "static" && (_0xcd23c7.style.position = "relative");
    let _0x3aa333 = _0xcd23c7.querySelector(".new-feature-hint-containernew");
    !_0x3aa333 && (_0x3aa333 = document.createElement("div"), _0x3aa333.className = "new-feature-hint-containernew", _0x3aa333.style.position = "absolute", _0x3aa333.style.zIndex = "1000", _0xcd23c7.appendChild(_0x3aa333));
    this.setPositionnew(_0x3aa333, _0x559294.positionnew);
    const _0x209f4f = document.createElement("div");
    _0x209f4f.className = "new-feature-dotnew " + _0x559294.stylenew;
    _0x209f4f.innerHTML = _0x559294.showLabelnew ? "<span class=\"new-feature-labelnew\">NEW</span>" : "";
    _0x209f4f.title = _0x559294.featureNamenew + " - 新功能";
    _0x209f4f.addEventListener("click", function (_0x4cdaf5) {
      _0x4cdaf5.stopPropagation();
      NewFeatureHintnew.markAsSeennew(_0x24e98e);
    });
    _0x3aa333.innerHTML = "";
    _0x3aa333.appendChild(_0x209f4f);
    return true;
  },
  setPositionnew: function (_0x5d89f5, _0x456acb) {
    _0x5d89f5.style.top = _0x456acb.includes("top") ? "0" : "auto";
    _0x5d89f5.style.bottom = _0x456acb.includes("bottom") ? "0" : "auto";
    _0x5d89f5.style.left = _0x456acb.includes("left") ? "0" : "auto";
    _0x5d89f5.style.right = _0x456acb.includes("right") ? "0" : "auto";
    _0x5d89f5.style.transform = "translate(50%, 50%)";
    if (_0x456acb === "top-left") {
      _0x5d89f5.style.transform = "translate(-50%, -50%)";
    } else {
      if (_0x456acb === "bottom-left") {
        _0x5d89f5.style.transform = "translate(-50%, 50%)";
      } else {
        _0x456acb === "bottom-right" && (_0x5d89f5.style.transform = "translate(50%, 50%)");
      }
    }
  },
  markAsSeennew: function (_0xf6c732) {
    const _0x69ed4c = this.STORAGE_PREFIXnew + _0xf6c732;
    localStorage.setItem(_0x69ed4c, "true");
    const _0x43d3a6 = document.getElementById(_0xf6c732);
    if (_0x43d3a6) {
      const _0x479e9f = _0x43d3a6.querySelector(".new-feature-hint-containernew");
      _0x479e9f && _0x479e9f.remove();
    }
    return true;
  },
  removenew: function (_0x2678d7) {
    const _0x12d32f = document.getElementById(_0x2678d7);
    if (_0x12d32f) {
      const _0x410baf = _0x12d32f.querySelector(".new-feature-hint-containernew");
      if (_0x410baf) {
        _0x410baf.remove();
        return true;
      }
    }
    return false;
  },
  hasnew: function (_0x2ec431) {
    const _0x29f5db = document.getElementById(_0x2ec431);
    if (_0x29f5db) {
      return _0x29f5db.querySelector(".new-feature-hint-containernew") !== null;
    }
    return false;
  },
  addStylesnew: function () {
    if (document.getElementById("new-feature-hint-stylesnew")) {
      return;
    }
    const _0x1aafea = document.createElement("style");
    _0x1aafea.id = "new-feature-hint-stylesnew";
    _0x1aafea.textContent = "\n                .new-feature-dotnew {\n                    position: relative;\n                    width: 8px;\n                    height: 8px;\n                    background: linear-gradient(135deg, #ff4757 0%, #ff3838 100%);\n                    border-radius: 50%;\n                    cursor: pointer;\n                    box-shadow: 0 0 10px rgba(255, 71, 87, 0.5);\n                }\n                \n                .new-feature-dotnew.pulse {\n                    animation: pulse-dotnew 2s infinite;\n                }\n                \n                .new-feature-dotnew.bounce {\n                    animation: bounce-dotnew 1s infinite;\n                }\n                \n                .new-feature-dotnew::before {\n                    content: '';\n                    position: absolute;\n                    top: -2px;\n                    left: -2px;\n                    right: -2px;\n                    bottom: -2px;\n                    background: linear-gradient(135deg, #ff4757 0%, #ff3838 100%);\n                    border-radius: 50%;\n                    z-index: -1;\n                    opacity: 0.5;\n                    animation: pulse-ringnew 2s infinite;\n                }\n                \n                .new-feature-labelnew {\n                    position: absolute;\n                    top: -20px;\n                    left: 50%;\n                    transform: translateX(-50%);\n                    background: linear-gradient(135deg, #ff4757 0%, #ff3838 100%);\n                    color: white;\n                    font-size: 9px;\n                    padding: 2px 6px;\n                    border-radius: 10px;\n                    white-space: nowrap;\n                    animation: bounce-labelnew 2s infinite;\n                }\n                \n                @keyframes pulse-dotnew {\n                    0% {\n                        transform: scale(1);\n                        box-shadow: 0 0 0 0 rgba(255, 71, 87, 0.7);\n                    }\n                    50% {\n                        transform: scale(1.1);\n                        box-shadow: 0 0 0 5px rgba(255, 71, 87, 0);\n                    }\n                    100% {\n                        transform: scale(1);\n                        box-shadow: 0 0 0 0 rgba(255, 71, 87, 0);\n                    }\n                }\n                \n                @keyframes bounce-dotnew {\n                    0%, 100% {\n                        transform: translateY(0);\n                    }\n                    50% {\n                        transform: translateY(-5px);\n                    }\n                }\n                \n                @keyframes pulse-ringnew {\n                    0% {\n                        transform: scale(0.8);\n                        opacity: 1;\n                    }\n                    100% {\n                        transform: scale(2);\n                        opacity: 0;\n                    }\n                }\n                \n                @keyframes bounce-labelnew {\n                    0%, 100% {\n                        transform: translateX(-50%) translateY(0);\n                    }\n                    50% {\n                        transform: translateX(-50%) translateY(-3px);\n                    }\n                }\n            ";
    document.head.appendChild(_0x1aafea);
  }
};
window.addNewFeatureHintnew = function (_0x2c8adc, _0x9ddfc8) {
  return NewFeatureHintnew.addnew(_0x2c8adc, _0x9ddfc8);
};
window.removeNewFeatureHintnew = function (_0x44ffc5) {
  return NewFeatureHintnew.removenew(_0x44ffc5);
};
window.hasNewFeatureHintnew = function (_0x3d0c2f) {
  return NewFeatureHintnew.hasnew(_0x3d0c2f);
};
window.markFeatureAsSeennew = function (_0x587551) {
  return NewFeatureHintnew.markAsSeennew(_0x587551);
};
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", function () {
  NewFeatureHintnew.initnew();
}) : NewFeatureHintnew.initnew();
const _0x2e39e6 = {
  promotion_id: "99999999999999999",
  product_id: "99999999999999999999"
};
window.shaixuansp = [_0x2e39e6];
const savedData1 = localStorage.getItem("xiajiazhiidngsp");
if (savedData1) {
  try {
    window.zhidingsp = JSON.parse(savedData1);
    console.log(window.shaixuansp);
  } catch (_0x23f93c) {
    console.error("读取保存的数据失败:", _0x23f93c);
    selectedProductsbiaoqian = [];
  }
}
const savedData = localStorage.getItem("selectedProductsbiaoqian");
if (savedData) {
  try {
    window.shaixuansp = JSON.parse(savedData);
    console.log(window.zhidingsp);
  } catch (_0x2eccd1) {
    console.error("读取保存的数据失败:", _0x2eccd1);
    selectedProductsbiaoqian = [];
  }
}
let historyRoi = JSON.parse(localStorage.getItem("roiCalculatorHistory")) || [];
function initRoiCalculator() {
  loadHistoryRoi();
  document.getElementById("calculate-break-even-roi").addEventListener("click", calculateBreakEvenROIroi);
  document.getElementById("calculate-actual-roi").addEventListener("click", calculateActualROIAndProfitLossroi);
  document.getElementById("reset-break-even-roi").addEventListener("click", resetBreakEvenForm);
  document.getElementById("reset-actual-roi").addEventListener("click", resetActualForm);
  document.getElementById("clear-history-roi").addEventListener("click", clearHistory);
}
function calculateBreakEvenROIroi() {
  const _0xe3be48 = parseFloat(document.getElementById("price-roi").value);
  const _0xf39dcf = parseFloat(document.getElementById("cost-roi").value);
  const _0x23b90b = parseFloat(document.getElementById("shipping-roi").value);
  const _0x41fa99 = parseFloat(document.getElementById("refundRate-roi").value) / 100;
  const _0x47d96f = parseFloat(document.getElementById("platformFee-roi").value) / 100;
  const _0x1ab660 = parseFloat(document.getElementById("otherCosts-roi").value);
  if (isNaN(_0xe3be48) || isNaN(_0xf39dcf) || isNaN(_0x23b90b) || isNaN(_0x41fa99) || isNaN(_0x47d96f) || isNaN(_0x1ab660)) {
    createZtCard(sb, "失败", "请填写所有必填字段！", "rgba(250, 78, 78, 1)");
    return;
  }
  const _0x59c99a = (_0xe3be48 - _0xf39dcf - _0x23b90b - _0x1ab660 - _0xe3be48 * _0x47d96f) * (1 - _0x41fa99);
  document.getElementById("profitPerOrder-roi").textContent = _0x59c99a.toFixed(2) + " 元";
  if (_0x59c99a <= 0) {
    document.getElementById("breakEvenROI-roi").textContent = "无法计算（单笔订单利润为非正数）";
    document.getElementById("breakEvenROI-roi").className = "result-value-roi negative-roi";
  } else {
    const _0x1e4395 = _0xe3be48 / _0x59c99a;
    document.getElementById("breakEvenROI-roi").textContent = _0x1e4395.toFixed(2);
    document.getElementById("breakEvenROI-roi").className = "result-value-roi positive-roi";
  }
  document.getElementById("break-even-result-roi").style.display = "block";
  return {
    priceRoi: _0xe3be48,
    costRoi: _0xf39dcf,
    shippingRoi: _0x23b90b,
    refundRateRoi: _0x41fa99,
    platformFeeRoi: _0x47d96f,
    otherCostsRoi: _0x1ab660,
    profitPerOrderRoi: _0x59c99a,
    breakEvenROIroi: _0x59c99a > 0 ? breakEvenROIroi : null
  };
}
function calculateActualROIAndProfitLossroi() {
  const _0x59c8ed = parseFloat(document.getElementById("actualSpend-roi").value);
  const _0x356bae = parseFloat(document.getElementById("actualSales-roi").value);
  if (isNaN(_0x59c8ed) || isNaN(_0x356bae)) {
    createZtCard(sb, "失败", "请填写所有必填字段！", "rgba(250, 78, 78, 1)");
    return;
  }
  const _0x48d357 = document.getElementById("breakEvenROI-roi").textContent;
  let _0x13b60e = 0;
  if (_0x48d357 !== "?" && !_0x48d357.includes("无法计算")) {
    _0x13b60e = parseFloat(_0x48d357);
  } else {
    createZtCard(sb, "失败", "请先计算保本投产比！", "rgba(250, 78, 78, 1)");
    return;
  }
  const _0x2115a2 = _0x356bae / _0x59c8ed;
  document.getElementById("actualROI-roi").textContent = _0x2115a2.toFixed(2);
  const _0x3ca8e8 = _0x59c8ed * (_0x2115a2 - _0x13b60e);
  document.getElementById("profitLoss-roi").textContent = _0x3ca8e8.toFixed(2) + " 元";
  _0x3ca8e8 >= 0 ? document.getElementById("profitLoss-roi").className = "result-value-roi positive-roi" : document.getElementById("profitLoss-roi").className = "result-value-roi negative-roi";
  document.getElementById("actual-result-roi").style.display = "block";
  saveToHistoryRoi({
    actualSpendRoi: _0x59c8ed,
    actualSalesRoi: _0x356bae,
    actualROIroi: _0x2115a2,
    profitLossRoi: _0x3ca8e8,
    breakEvenROIroi: _0x13b60e,
    timestampRoi: new Date().toLocaleString()
  });
  const _0x12a1f2 = {
    actualSpendRoi: _0x59c8ed,
    actualSalesRoi: _0x356bae,
    actualROIroi: _0x2115a2,
    profitLossRoi: _0x3ca8e8,
    breakEvenROIroi: _0x13b60e
  };
  return _0x12a1f2;
}
function saveToHistoryRoi(_0x4f030a) {
  historyRoi.unshift(_0x4f030a);
  historyRoi.length > 10 && (historyRoi = historyRoi.slice(0, 10));
  try {
    localStorage.setItem("roiCalculatorHistory", JSON.stringify(historyRoi));
  } catch (_0x3a57e6) {
    console.error("保存历史记录失败:", _0x3a57e6);
  }
  loadHistoryRoi();
}
function loadHistoryRoi() {
  const _0xd74b0d = document.getElementById("history-list-roi");
  if (!_0xd74b0d) {
    return;
  }
  _0xd74b0d.innerHTML = "";
  if (historyRoi.length === 0) {
    _0xd74b0d.innerHTML = "<div class=\"history-item-roi\" style=\"padding:5px;text-align:center;color:#666;font-size:11px;\">暂无历史记录</div>";
    return;
  }
  historyRoi.forEach(_0x769df5 => {
    const _0x2eed9e = document.createElement("div");
    _0x2eed9e.className = "history-item-roi";
    _0x2eed9e.style.cssText = "padding:5px;border-bottom:1px solid #f0f0f0;font-size:11px;cursor:pointer;";
    _0x2eed9e.innerHTML = "\n            <div>花费: " + _0x769df5.actualSpendRoi + "元 | 销售额: " + _0x769df5.actualSalesRoi + "元</div>\n            <div>ROI: " + _0x769df5.actualROIroi.toFixed(2) + " | 盈亏: " + _0x769df5.profitLossRoi.toFixed(2) + "元</div>\n            <div style=\"color: #888; font-size: 10px;\">" + _0x769df5.timestampRoi + "</div>\n        ";
    _0x2eed9e.addEventListener("click", () => {
      document.getElementById("actualSpend-roi").value = _0x769df5.actualSpendRoi;
      document.getElementById("actualSales-roi").value = _0x769df5.actualSalesRoi;
    });
    _0xd74b0d.appendChild(_0x2eed9e);
  });
}
function clearHistory() {
  if (confirm("确定要清空所有历史记录吗？")) {
    historyRoi = [];
    try {
      localStorage.setItem("roiCalculatorHistory", JSON.stringify(historyRoi));
    } catch (_0x41703b) {
      console.error("清空历史记录失败:", _0x41703b);
    }
    loadHistoryRoi();
  }
}
function resetBreakEvenForm() {
  document.getElementById("price-roi").value = "";
  document.getElementById("cost-roi").value = "";
  document.getElementById("shipping-roi").value = "";
  document.getElementById("refundRate-roi").value = "5";
  document.getElementById("platformFee-roi").value = "5";
  document.getElementById("otherCosts-roi").value = "";
  document.getElementById("break-even-result-roi").style.display = "none";
}
function resetActualForm() {
  document.getElementById("actualSpend-roi").value = "";
  document.getElementById("actualSales-roi").value = "";
  document.getElementById("actual-result-roi").style.display = "none";
}
const roiStyle = document.createElement("style");
roiStyle.textContent = "\n    .section-title-roi {\n        font-size: 14px;\n        margin: 15px 0 10px 0;\n        color: #444;\n        border-left: 3px solid #4CAF50;\n        padding-left: 8px;\n        font-weight: bold;\n    }\n    \n    .compact-row-roi {\n        display: flex;\n        gap: 10px;\n        margin-bottom: 8px;\n    }\n    \n    .form-group-roi {\n        flex: 1;\n    }\n    \n    .form-group-roi label {\n        display: block;\n        margin-bottom: 3px;\n        font-size: 12px;\n        color: #555;\n    }\n    \n    .result-value-roi {\n        font-weight: bold;\n        color: #4CAF50;\n    }\n    \n    .negative-roi {\n        color: #e74c3c !important;\n    }\n    \n    .positive-roi {\n        color: #27ae60 !important;\n    }\n    \n    .history-item-roi:hover {\n        background-color: #f5f5f5;\n    }\n    \n    .history-item-roi:last-child {\n        border-bottom: none;\n    }\n";
document.head.appendChild(roiStyle);
setTimeout(() => {
  initRoiCalculator();
  const _0x217910 = document.getElementById("zhuclose-panel");
  if (_0x217910) {
    _0x217910.addEventListener("click", function () {
      const _0x2a4d3d = panel.style.right === "0px";
      panel.style.right = _0x2a4d3d ? "-30%" : "0";
      toggleBtn.innerHTML = _0x2a4d3d ? "插件设置" : "关闭设置";
    });
  }
  const _0x2091ff = document.getElementById("qiehuanlogin");
  if (_0x2091ff) {
    _0x2091ff.addEventListener("click", createAuthInterface);
  }
}, 500);
let activityGroups8 = [];
let planList8 = [];
let distributionState8 = {
  isRunning8: false,
  mode8: null,
  currentTimer8: null,
  currentPlanIndex8: 0
};
let selectedActivities8 = new Set();
let dragItem8 = null;
let dragStartIndex8 = -1;
function initFudaiControls() {
  document.querySelectorAll("input[name=\"mode8\"]").forEach(_0x4ce1a1 => {
    _0x4ce1a1.addEventListener("change", function () {
      const _0x28d885 = document.getElementById("single-mode8");
      const _0x352e97 = document.getElementById("multiple-mode8");
      const _0x4b4560 = document.getElementById("plan-area8");
      this.value === "single" ? (_0x28d885.style.display = "block", _0x352e97.style.display = "none", _0x4b4560.style.display = "none") : (_0x28d885.style.display = "none", _0x352e97.style.display = "block", _0x4b4560.style.display = "block");
      distributionState8.isRunning8 && stopDistribution8();
    });
  });
  document.getElementById("start-single-btn8").addEventListener("click", async function () {
    distributionState8.isRunning8 && distributionState8.mode8 === "single" ? stopDistribution8() : await startSingleDistribution8();
  });
  document.getElementById("batch-copy-btn8").addEventListener("click", showBatchCopy8);
  document.getElementById("clean-empty-btn8").addEventListener("click", fudailist);
  document.getElementById("exit-batch-btn8").addEventListener("click", exitBatchCopy8);
  document.getElementById("select-all-btn8").addEventListener("click", toggleSelectAll8);
  document.getElementById("start-copy-btn8").addEventListener("click", startBatchCopy8);
  document.getElementById("clear-plan-btn8").addEventListener("click", clearPlan8);
  document.getElementById("start-multiple-btn8").addEventListener("click", async function () {
    distributionState8.isRunning8 && distributionState8.mode8 === "multiple" ? stopDistribution8() : await startMultipleDistribution8();
  });
}
function updateDistributionStatus8() {
  const _0x36ac6d = document.getElementById("status-indicator8");
  const _0x5f2081 = document.getElementById("status-text8");
  const _0x14976b = document.getElementById("start-single-btn8");
  const _0x2533a6 = document.getElementById("start-multiple-btn8");
  if (distributionState8.isRunning8) {
    _0x36ac6d.className = "status-indicator status-running";
    _0x5f2081.textContent = "运行中 - " + (distributionState8.mode8 === "single" ? "单福袋循环" : "多福袋循环");
    _0x36ac6d.style.background = "#52c41a";
    _0x36ac6d.style.animation = "pulse 1.5s infinite";
    if (distributionState8.mode8 === "single") {
      _0x14976b.textContent = "停止发放";
      _0x14976b.style.background = "#ff4d4f";
      _0x2533a6.disabled = true;
    } else {
      distributionState8.mode8 === "multiple" && (_0x2533a6.textContent = "停止发放", _0x2533a6.style.background = "#ff4d4f", _0x14976b.disabled = true);
    }
  } else {
    _0x36ac6d.className = "status-indicator status-stopped";
    _0x5f2081.textContent = "已停止";
    _0x36ac6d.style.background = "#ccc";
    _0x36ac6d.style.animation = "none";
    _0x14976b.textContent = "开始发放";
    _0x14976b.style.background = "#1890ff";
    _0x2533a6.textContent = "开始发放";
    _0x2533a6.style.background = "#1890ff";
    _0x14976b.disabled = false;
    _0x2533a6.disabled = false;
  }
}
function stopDistribution8() {
  distributionState8.isRunning8 = false;
  distributionState8.currentTimer8 && (clearTimeout(distributionState8.currentTimer8), distributionState8.currentTimer8 = null);
  updateDistributionStatus8();
  console.log("发放已停止");
}
function loadActivityListFromResponse8(_0x44e4d0) {
  activityGroups8 = groupActivities8(_0x44e4d0.data.draws);
  renderActivityList8();
}
function groupActivities8(_0x518c85) {
  const _0x52b4cc = new Map();
  _0x518c85.forEach(_0x204a21 => {
    if (_0x204a21.act_status !== 1) {
      return;
    }
    const _0x4f99a6 = _0x204a21.shop_name + "_" + _0x204a21.condition + "_" + _0x204a21.prize_info.rel_product_id + "_" + _0x204a21.prize_info.copied_product_id + "_" + _0x204a21.prize_info.prize_num + "_" + _0x204a21.open_time_info.open_time_duration;
    !_0x52b4cc.has(_0x4f99a6) && _0x52b4cc.set(_0x4f99a6, {
      key8: _0x4f99a6,
      shop_name8: _0x204a21.shop_name,
      rel_product_id8: _0x204a21.prize_info.rel_product_id,
      copied_product_id8: _0x204a21.prize_info.copied_product_id,
      activity_ids8: [],
      count8: 0,
      representative8: _0x204a21
    });
    const _0x73cc3d = _0x52b4cc.get(_0x4f99a6);
    _0x73cc3d.activity_ids8.push(_0x204a21.activity_id);
    _0x73cc3d.count8++;
  });
  return Array.from(_0x52b4cc.values());
}
function renderActivityList8() {
  const _0x3ac48e = document.getElementById("activity-list8");
  if (!_0x3ac48e) {
    console.log("activity-list8 元素未找到");
    return;
  }
  const _0x482233 = document.getElementById("batch-copy-controls8").style.display !== "none";
  const _0x379883 = {};
  planList8.forEach(_0xf0cc4 => {
    _0x379883[_0xf0cc4.index8] = (_0x379883[_0xf0cc4.index8] || 0) + 1;
  });
  _0x3ac48e.innerHTML = activityGroups8.map((_0x3939c7, _0x32a654) => {
    const _0x4db75f = _0x3939c7.representative8;
    const _0x17c702 = _0x379883[_0x32a654] || 0;
    return "\n                <div class=\"activity-item\" style=\"display:flex;align-items:center;padding:8px;border-bottom:1px solid #f0f0f0;gap:10px;" + (_0x17c702 > 0 ? "background-color:#e6f7ff;border:1px solid #91d5ff;" : "") + "\" data-group-key8=\"" + _0x3939c7.key8 + "\" data-index8=\"" + _0x32a654 + "\">\n                    " + (_0x482233 ? "<input type=\"checkbox\" class=\"activity-checkbox8\" data-index8=\"" + _0x32a654 + "\" style=\"margin-right:5px;\">" : "") + "\n                    <span>" + (_0x32a654 + 1) + "</span>\n                    <img src=\"" + _0x4db75f.prize_info.img_url + "\" class=\"activity-img\" style=\"width:40px;height:40px;object-fit:cover;border-radius:3px;\" onerror=\"this.style.display='none'\">\n                    <div class=\"activity-info\" style=\"flex:1;min-width:0;\">\n                        <div class=\"activity-name\" style=\"font-weight:bold;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:2px;\">" + _0x4db75f.prize_info.prize_name + "</div>\n                        <div class=\"activity-condition\" style=\"color:#666;font-size:11px;margin-bottom:2px;\">" + _0x4db75f.condition + "</div>\n                        <div class=\"activity-time\" style=\"color:#999;font-size:11px;\">开奖时间：活动开始" + _0x4db75f.open_time_info.open_time_duration / 60 + "分后</div>\n                    </div>\n                    <div class=\"activity-price\" style=\"color:#ff4d4f;font-weight:bold;margin-bottom:2px;\">￥" + (_0x4db75f.prize_info.price / 100).toFixed(2) + "</div>\n                    <div>奖品数：" + _0x4db75f.prize_info.prize_num + "</div>\n                    <div class=\"activity-stats\" style=\"text-align:right;min-width:100px;\">\n                        <div>待发放：" + _0x3939c7.count8 + "</div>\n                        " + (_0x17c702 > 0 ? "<div style=\"display: none;\">计划中：" + _0x17c702 + "</div>" : "") + "\n                    </div>\n                </div>\n            ";
  }).join("");
  _0x3ac48e.querySelectorAll(".activity-item").forEach(_0x45915d => {
    _0x45915d.addEventListener("click", function (_0x4155a2) {
      if (_0x482233 && _0x4155a2.target.type === "checkbox") {
        return;
      }
      const _0x56848c = document.querySelector("input[name=\"mode8\"]:checked").value;
      if (_0x56848c === "multiple") {
        addToPlan8(this.dataset.groupKey8, this.dataset.index8);
      } else {
        if (_0x56848c === "single" && _0x482233) {
          const _0x1596ba = this.querySelector(".activity-checkbox8");
          _0x1596ba && (_0x1596ba.checked = !_0x1596ba.checked, updateSelectedCount8());
        }
      }
    });
  });
  _0x482233 && _0x3ac48e.querySelectorAll(".activity-checkbox8").forEach(_0x1e1d7a => {
    _0x1e1d7a.addEventListener("change", updateSelectedCount8);
  });
}
function addToPlan8(_0x39410d, _0x37aa4a) {
  const _0x4c25eb = planList8.length;
  planList8.push({
    groupKey8: _0x39410d,
    index8: parseInt(_0x37aa4a),
    planIndex8: _0x4c25eb
  });
  renderPlanList8();
  renderActivityList8();
}
function renderPlanList8() {
  const _0x502694 = document.getElementById("plan-list8");
  const _0x447d6a = document.getElementById("plan-sequence8");
  if (!_0x502694) {
    return;
  }
  _0x502694.innerHTML = planList8.map((_0x22ea6c, _0x3a9513) => {
    return "<span class=\"plan-item\" style=\"background:#f0f0f0;padding:4px 8px;border-radius:3px;cursor:move;border:1px solid #ddd;position:relative;user-select:none;\" data-plan-index8=\"" + _0x3a9513 + "\">" + (_0x22ea6c.index8 + 1) + "<span class=\"plan-item-index\" style=\"position:absolute;top:-5px;right:-5px;background:#1890ff;color:white;border-radius:50%;width:16px;height:16px;font-size:10px;display:flex;align-items:center;justify-content:center;\">" + (_0x3a9513 + 1) + "</span></span>";
  }).join("");
  const _0x88821d = planList8.map(_0x47bded => _0x47bded.index8 + 1).join(" → ");
  _0x447d6a && (_0x447d6a.textContent = "当前计划序列：" + (_0x88821d || "空"));
  _0x502694.querySelectorAll(".plan-item").forEach(_0x21e084 => {
    _0x21e084.addEventListener("click", function () {
      const _0x50f72a = parseInt(this.dataset.planIndex8);
      planList8.splice(_0x50f72a, 1);
      planList8.forEach((_0x4891b6, _0x3ef021) => {
        _0x4891b6.planIndex8 = _0x3ef021;
      });
      renderPlanList8();
      renderActivityList8();
    });
  });
  setupDragSort8();
}
function setupDragSort8() {
  const _0x32c436 = document.querySelectorAll(".plan-item");
  if (!_0x32c436.length) {
    return;
  }
  _0x32c436.forEach(_0x1434d3 => {
    _0x1434d3.addEventListener("dragstart", handleDragStart8);
    _0x1434d3.addEventListener("dragover", handleDragOver8);
    _0x1434d3.addEventListener("dragenter", handleDragEnter8);
    _0x1434d3.addEventListener("dragleave", handleDragLeave8);
    _0x1434d3.addEventListener("dragend", handleDragEnd8);
    _0x1434d3.addEventListener("drop", handleDrop8);
    _0x1434d3.setAttribute("draggable", "true");
  });
}
function handleDragStart8(_0x40fc2a) {
  dragItem8 = this;
  dragStartIndex8 = parseInt(this.dataset.planIndex8);
  this.classList.add("dragging");
  _0x40fc2a.dataTransfer.effectAllowed = "move";
  _0x40fc2a.dataTransfer.setData("text/plain", dragStartIndex8);
  setTimeout(() => this.classList.add("dragging"), 0);
}
function handleDragOver8(_0x2792b6) {
  _0x2792b6.preventDefault();
  _0x2792b6.dataTransfer.dropEffect = "move";
  return false;
}
function handleDragEnter8(_0x433d70) {
  this.classList.add("drop-zone");
}
function handleDragLeave8(_0x2fd0b8) {
  this.classList.remove("drop-zone");
}
function handleDragEnd8(_0x17975d) {
  document.querySelectorAll(".plan-item").forEach(_0x25eeb7 => {
    _0x25eeb7.classList.remove("dragging");
    _0x25eeb7.classList.remove("drop-zone");
  });
  dragItem8 = null;
  dragStartIndex8 = -1;
}
function handleDrop8(_0x11301a) {
  _0x11301a.preventDefault();
  _0x11301a.stopPropagation();
  if (dragItem8 !== this) {
    const _0x859a5c = parseInt(this.dataset.planIndex8);
    const _0x1ee35e = planList8[dragStartIndex8];
    planList8[dragStartIndex8] = planList8[_0x859a5c];
    planList8[_0x859a5c] = _0x1ee35e;
    planList8.forEach((_0x3d267d, _0x6235cd) => {
      _0x3d267d.planIndex8 = _0x6235cd;
    });
    renderPlanList8();
    renderActivityList8();
  }
  this.classList.remove("drop-zone");
  return false;
}
function clearPlan8() {
  planList8 = [];
  renderPlanList8();
  renderActivityList8();
}
function showBatchCopy8() {
  window.markFeatureAsSeennew("batch-copy-btn8");
  const _0x5c9816 = document.getElementById("batch-copy-controls8");
  _0x5c9816 && (_0x5c9816.style.display = "block", selectedActivities8.clear(), updateSelectedCount8(), renderActivityList8());
}
function exitBatchCopy8() {
  const _0x34647c = document.getElementById("batch-copy-controls8");
  _0x34647c && (_0x34647c.style.display = "none", selectedActivities8.clear(), renderActivityList8());
}
function toggleSelectAll8() {
  const _0x1e0a7b = document.querySelectorAll(".activity-checkbox8");
  const _0x455dab = _0x1e0a7b.length === selectedActivities8.size;
  _0x1e0a7b.forEach(_0x473ce7 => {
    _0x473ce7.checked = !_0x455dab;
    !_0x455dab ? selectedActivities8.add(parseInt(_0x473ce7.dataset.index8)) : selectedActivities8.delete(parseInt(_0x473ce7.dataset.index8));
  });
  updateSelectedCount8();
}
function updateSelectedCount8() {
  const _0x124a45 = document.getElementById("selected-count8");
  if (_0x124a45) {
    const _0x47f64 = document.querySelectorAll(".activity-checkbox8:checked").length;
    _0x124a45.textContent = "已选择 " + _0x47f64 + " 项";
    selectedActivities8.clear();
    document.querySelectorAll(".activity-checkbox8:checked").forEach(_0x407153 => {
      selectedActivities8.add(parseInt(_0x407153.dataset.index8));
    });
  }
}
async function startBatchCopy8() {
  window.markFeatureAsSeennew("start-copy-btn8");
  if (selectedActivities8.size === 0) {
    createZtCard(sb, "失败", "请先选择要复制的活动", "rgba(250, 78, 78, 1)");
    return;
  }
  const _0x1ff2c8 = document.getElementById("copy-count8");
  const _0x2f5efc = parseInt(_0x1ff2c8.value);
  if (isNaN(_0x2f5efc) || _0x2f5efc < 1) {
    createZtCard(sb, "失败", "请输入有效的复制次数", "rgba(250, 78, 78, 1)");
    return;
  }
  const _0x44889f = await jiangpinlist();
  console.log(_0x44889f);
  processActivitiesSequentially(_0x44889f, _0x2f5efc);
  console.log("批量复制完成，共复制 " + _0x2f5efc + " 次");
}
async function processActivitiesSequentially(_0x123b3d, _0x5d64b9) {
  const _0x2b260f = Array.from(selectedActivities8);
  for (let _0x39116b = 0; _0x39116b < _0x2b260f.length; _0x39116b++) {
    const _0x5c4fd4 = _0x2b260f[_0x39116b];
    const _0x1fcafa = activityGroups8[_0x5c4fd4];
    if (_0x1fcafa && _0x1fcafa.activity_ids8.length > 0) {
      try {
        createZtCard(cg, "开始处理第 " + (_0x39116b + 1) + "/" + _0x2b260f.length + " 个福袋", "结束后会提示任务结果", "rgba(76, 175, 80, 1)");
        const _0x216050 = await fudaixx(_0x1fcafa.activity_ids8[0]);
        console.log(_0x1fcafa.activity_ids8[0]);
        const _0x3003c3 = jiangpinif(_0x216050.data.prize_info.rel_product_id, _0x123b3d, _0x5d64b9);
        console.log(_0x3003c3);
        if (_0x3003c3.success) {
          const _0x711f54 = smartTransformData(_0x216050);
          console.log(_0x711f54);
          let _0x972bfa = 0;
          let _0x1775ad = 0;
          for (let _0x1a33bf = 0; _0x1a33bf < _0x5d64b9; _0x1a33bf++) {
            try {
              const _0x1d2679 = await fzfudai(_0x711f54);
              _0x1d2679.code == 0 ? (_0x972bfa++, await new Promise(_0x5df57e => setTimeout(_0x5df57e, 100))) : _0x1775ad++;
            } catch (_0x54dc9e) {
              _0x1775ad++;
            }
          }
          createZtCard(cg, "第 " + (_0x39116b + 1) + " 个福袋复制完成", _0x3003c3.prizename + " 复制结束<br>复制成功 " + _0x972bfa + " 次，复制失败 " + _0x1775ad + " 次", "rgba(144, 250, 78, 1)");
        } else {
          createZtCard(sb, "第 " + (_0x39116b + 1) + " 个福袋处理失败", _0x3003c3.prizename + " 的奖品数量只有 " + _0x3003c3.num + "，需要 " + _0x5d64b9 + "，请补足后刷新重试", "rgba(250, 78, 78, 1)");
        }
        _0x39116b < _0x2b260f.length - 1 && (await new Promise(_0x141cbb => setTimeout(_0x141cbb, 500)));
      } catch (_0x5ee0c3) {
        createZtCard(sb, "处理第 " + (_0x39116b + 1) + " 个福袋时发生错误", _0x5ee0c3.message, "rgba(250, 78, 78, 1)");
      }
    }
  }
  await fudailist();
  createZtCard(cg, "所有福袋处理完成", "共处理了 " + _0x2b260f.length + " 个福袋", "rgba(76, 175, 80, 1)");
}
async function startSingleDistribution8() {
  if (distributionState8.isRunning8) {
    return;
  }
  const _0x3b47f3 = document.getElementById("interval-input8");
  const _0x15461b = parseInt(_0x3b47f3.value);
  const _0x51d7cb = document.getElementById("interval-unit8").value;
  const _0x3e8435 = document.getElementById("activity-index8");
  const _0x51e85b = parseInt(_0x3e8435.value) - 1;
  if (isNaN(_0x51e85b) || _0x51e85b < 0 || _0x51e85b >= activityGroups8.length) {
    createZtCard(sb, "失败", "请输入有效的活动序号，如果列表不显示就是没有可用的福袋活动，请到官方界面创建", "rgba(250, 78, 78, 1)");
    return;
  }
  const _0x464b87 = activityGroups8[_0x51e85b];
  if (!_0x464b87 || _0x464b87.activity_ids8.length === 0) {
    createZtCard(sb, "失败", "该活动没有可发放的福袋", "rgba(250, 78, 78, 1)");
    return;
  }
  distributionState8.isRunning8 = true;
  distributionState8.mode8 = "single";
  distributionState8.currentPlanIndex8 = _0x51e85b;
  updateDistributionStatus8();
  await distributeSingle8(_0x464b87, _0x15461b, _0x51d7cb);
}
async function distributeSingle8(_0x5c81e4, _0x5d05e7, _0x429b8e) {
  if (!distributionState8.isRunning8 || distributionState8.mode8 !== "single") {
    return;
  }
  if (_0x5c81e4.activity_ids8.length === 0) {
    createZtCard(cg, "完成", "该活动的福袋已全部发放完毕", "rgba(76, 175, 80, 1)");
    stopDistribution8();
    return;
  }
  const _0x49a5ff = _0x5c81e4.activity_ids8[0];
  console.log("准备发放activity_id:", _0x49a5ff);
  const _0x72e198 = _0x5c81e4.representative8.open_time_info.open_time_duration * 1000 + 5000;
  let _0x532674 = _0x5d05e7 * 1000;
  if (_0x429b8e === "minutes") {
    _0x532674 = _0x5d05e7 * 60 * 1000;
  }
  const _0x55a83e = _0x72e198 + _0x532674;
  try {
    const _0x304c7f = await chafudai();
    if (_0x304c7f === true) {
      console.log("没有福袋在发，立即发放");
      fafudai(_0x49a5ff, _0x55a83e / 1000 / 60);
      console.log("下次发放将在 " + _0x55a83e / 1000 + " 秒后执行");
      distributionState8.currentTimer8 = setTimeout(async () => {
        const _0x577085 = distributionState8.currentPlanIndex8;
        if (_0x577085 >= activityGroups8.length) {
          console.log("活动序号超出范围，停止发放");
          stopDistribution8();
          return;
        }
        const _0x3b9aeb = activityGroups8[_0x577085];
        if (!_0x3b9aeb || _0x3b9aeb.activity_ids8.length === 0) {
          console.log("该活动没有可发放的福袋，停止发放");
          stopDistribution8();
          return;
        }
        await distributeSingle8(_0x3b9aeb, _0x5d05e7, _0x429b8e);
      }, _0x55a83e);
    } else {
      const _0x27696f = parseInt(_0x304c7f);
      console.log("有福袋在发，等待 " + _0x27696f + " 毫秒后重试");
      createZtCard(cg, "自动发超级福袋开启成功", "当前有一个福袋没开，等待开奖后发送", "#76fa4eff");
      distributionState8.currentTimer8 = setTimeout(async () => {
        await distributeSingle8(_0x5c81e4, _0x5d05e7, _0x429b8e);
      }, _0x27696f + 2000);
    }
  } catch (_0x2f9baf) {
    console.error("检查福袋状态时出错:", _0x2f9baf);
    distributionState8.currentTimer8 = setTimeout(async () => {
      await distributeSingle8(_0x5c81e4, _0x5d05e7, _0x429b8e);
    }, 5000);
  }
}
async function startMultipleDistribution8() {
  if (distributionState8.isRunning8) {
    return;
  }
  if (planList8.length === 0) {
    createZtCard(sb, "失败", "请先添加计划", "rgba(250, 78, 78, 1)");
    return;
  }
  const _0x2b5499 = document.getElementById("interval-input8");
  const _0x188319 = parseInt(_0x2b5499.value);
  const _0x56e8e0 = document.getElementById("interval-unit8").value;
  distributionState8.isRunning8 = true;
  distributionState8.mode8 = "multiple";
  distributionState8.currentPlanIndex8 = 0;
  updateDistributionStatus8();
  await distributeMultiple8(0, _0x188319, _0x56e8e0);
}
async function distributeMultiple8(_0x3a606e, _0x56b0b6, _0x446814) {
  if (!distributionState8.isRunning8 || distributionState8.mode8 !== "multiple") {
    return;
  }
  _0x3a606e >= planList8.length && (console.log("多福袋计划一轮执行完毕，重新开始循环"), _0x3a606e = 0);
  const _0x49c4c0 = planList8[_0x3a606e];
  let _0x1d26bd = activityGroups8[_0x49c4c0.index8];
  if (!_0x1d26bd || _0x1d26bd.activity_ids8.length === 0) {
    await distributeMultiple8(_0x3a606e + 1, _0x56b0b6, _0x446814);
    return;
  }
  const _0x32c429 = _0x1d26bd.activity_ids8[0];
  console.log("计划第" + (_0x3a606e + 1) + "项 - 准备发放activity_id:", _0x32c429);
  const _0x46cbaa = _0x1d26bd.representative8.open_time_info.open_time_duration * 1000 + 5000;
  let _0x575d3f = _0x56b0b6 * 1000;
  if (_0x446814 === "minutes") {
    _0x575d3f = _0x56b0b6 * 60 * 1000;
  }
  const _0x43af24 = _0x46cbaa + _0x575d3f;
  try {
    const _0x3eec78 = await chafudai();
    if (_0x3eec78 === true) {
      console.log("计划第" + (_0x3a606e + 1) + "项 - 没有福袋在发，立即发放");
      fafudai(_0x32c429, _0x43af24 / 1000 / 60);
      console.log("下次发放将在 " + _0x43af24 / 1000 + " 秒后执行");
      distributionState8.currentTimer8 = setTimeout(async () => {
        await distributeMultiple8(_0x3a606e + 1, _0x56b0b6, _0x446814);
      }, _0x43af24);
    } else {
      const _0x21f805 = parseInt(_0x3eec78);
      console.log("有福袋在发，等待 " + _0x21f805 + " 毫秒后重试计划第" + (_0x3a606e + 1) + "项");
      createZtCard(cg, "自动发超级福袋开启成功", "当前有一个福袋没开，等待开奖后发送计划第" + (_0x3a606e + 1) + "项", "#76fa4eff");
      distributionState8.currentTimer8 = setTimeout(async () => {
        await distributeMultiple8(_0x3a606e, _0x56b0b6, _0x446814);
      }, _0x21f805 + 2000);
    }
  } catch (_0x57b27c) {
    console.error("检查福袋状态时出错:", _0x57b27c);
    distributionState8.currentTimer8 = setTimeout(async () => {
      await distributeMultiple8(_0x3a606e, _0x56b0b6, _0x446814);
    }, 5000);
  }
}
setTimeout(() => {
  initFudaiControls();
  renderPlanList8();
  fudailist();
}, 500);
window.fudai = false;
const modalHTML7 = "\n        <div id=\"congratModal7\" style=\"\n            position:fixed;\n            inset:0;\n            background:rgba(0,0,0,.5);\n            display:flex;\n            align-items:center;\n            justify-content:center;\n            z-index:999999;\n        \">\n            <div style=\"\n                background:#fff;\n                padding:32px 24px;\n                border-radius:8px;\n                text-align:center;\n                width:320px;\n                box-shadow:0 4px 12px rgba(0,0,0,.3);\n            \">\n                <div style=\"font-size:18px;font-weight:600;margin-bottom:12px;\">🎉 恭喜您！</div>\n                <div style=\"font-size:14px;color:#666;margin-bottom:20px;\">\n                    您已获得 <span style=\"color:#ff5722;font-weight:600;\">15 天 VIP</span> 奖励！\n                </div>\n                <button id=\"closeBtn7\" style=\"\n                    padding:6px 16px;\n                    border:none;\n                    background:#ff5722;\n                    color:#fff;\n                    border-radius:4px;\n                    cursor:pointer;\n                \">知道了</button>\n            </div>\n        </div>\n    ";
let modalNode7;
let closeBtn7;
function showCongrats7() {
  if (document.getElementById("congratModal7")) {
    return;
  }
  document.body.insertAdjacentHTML("beforeend", modalHTML7);
  modalNode7 = document.getElementById("congratModal7");
  closeBtn7 = document.getElementById("closeBtn7");
  closeBtn7.addEventListener("click", () => {
    modalNode7.style.display = "none";
    modalNode7.remove();
  });
}
const modal6 = document.createElement("div");
modal6.id = "inviteModal6";
modal6.innerHTML = "\n        <div style=\"\n            position:fixed;\n            inset:0;\n            background:rgba(0,0,0,.4);\n            display:flex;\n            align-items:center;\n            justify-content:center;\n            z-index:999999;\n        \">\n            <div style=\"\n                background:#fff;\n                padding:24px;\n                border-radius:6px;\n                width:320px;\n                box-shadow:0 2px 10px rgba(0,0,0,.3);\n            \">\n                <div style=\"margin-bottom:12px;font-size:14px;\">\n                    请输入邀请码（可不填，仅限今天注册的用户填写），双方都可以获得15日会员，无限叠加！\n                </div>\n                <input id=\"inviteInput6\" type=\"text\" placeholder=\"邀请码\" style=\"\n                    width:100%;\n                    padding:6px 8px;\n                    margin-bottom:16px;\n                    box-sizing:border-box;\n                \">\n                <div style=\"text-align:right;\">\n\t\t\t\t\n                     <button id=\"inviteOk6\"  style=\"margin-right:8px;padding:6px 12px;\">确认</button><br><br>\n\t\t\t\t\t <button id=\"inviteCancel6\" style=\"padding:6px 12px;\">取消</button><br><br>\n\t\t\t\t\t <button id=\"yaoqing6\"  style=\"margin-right:8px;padding:6px 12px;\">我要拉新获得免费时长</button><br><br>\n                   \n                </div>\n            </div>\n        </div>\n    ";
modal6.style.display = "none";
document.body.appendChild(modal6);
const inviteInput6 = document.getElementById("inviteInput6");
const inviteOk6 = document.getElementById("inviteOk6");
const inviteCancel6 = document.getElementById("inviteCancel6");
inviteOk6.addEventListener("click", () => {
  const _0x50402d = inviteInput6.value.trim();
  yaoqing(_0x50402d);
  modal6.style.display = "none";
});
yaoqing6.addEventListener("click", () => {
  modal5.style.display = "flex";
  loadData5();
});
inviteCancel6.addEventListener("click", () => {
  modal6.style.display = "none";
});
const CSS = "\n        <style>\n        #laXinBtn5{position:fixed;bottom:20px;right:20px;z-index:99999;padding:8px 14px;background:#ff5722;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:14px;box-shadow:0 2px 6px rgba(0,0,0,.2);}\n        #laXinModal5{position:fixed;inset:0;background:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;z-index:999999;}\n        .laXinBox5{background:#fff;padding:24px;border-radius:8px;width:860px;max-height:100vh;display:flex;flex-direction:column;}\n        .laXinHead5{text-align:center;font-size:16px;font-weight:600;margin-bottom:12px;}\n        .laXinSlogan5{font-size:13px;color:#666;margin-bottom:16px;text-align:center;}\n        .laXinCode5{display:flex;align-items:center;background:#f5f5f5;padding:8px;border-radius:4px;margin-bottom:12px;}\n        .laXinCode5 input{flex:1;border:none;background:transparent;outline:none;font-size:14px;}\n        .laXinCopy5{margin-left:8px;padding:4px 10px;background:#ff5722;color:#fff;border:none;border-radius:3px;cursor:pointer;}\n        .laXinCount5{font-size:13px;margin-bottom:10px;}\n        .laXinList5{flex:1;overflow:auto;font-size:13px;}\n        .laXinList5 li{display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #f0f0f0;}\n        .laXinClose5{margin-top:12px;text-align:right;}\n        .laXinClose5 button{padding:6px 12px;border:none;background:#ccc;border-radius:3px;cursor:pointer;}\n\t\t.laXinCode5 textarea {\n  width: 100%;\n  resize: vertical;          /* 允许上下拖动 */\n  font-size: 14px;\n  width:560px;\n  line-height: 1.4;\n  padding: 6px 8px;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  background: #f5f5f5;\n  outline: none;\n  font-family: inherit;\n}\n        </style>\n    ";
const modalHTML = "\n        " + CSS + "\n        <div id=\"laXinModal5\" style=\"display:none;\">\n          <div class=\"laXinBox5\">\n            <div class=\"laXinHead5\">🎉 邀请好友得大奖</div>\n            <div class=\"laXinSlogan5\">每成功邀请 1 人，双方各得 15 天 VIP！</div>\n\n           <div class=\"laXinCode5\">\n  <textarea id=\"inviteCode5\" readonly rows=\"5\"></textarea>\n  <button class=\"laXinCopy5\" id=\"copyBtn5\">复制教程和邀请码</button>\n</div>\n\n            <div class=\"laXinCount5\">已拉新 <span id=\"count5\">0</span> 人</div>\n            <ul class=\"laXinList5\" id=\"list5\"></ul>\n\n            <div class=\"laXinClose5\">\n              <button id=\"closeBtn5\">关闭</button>\n            </div>\n          </div>\n        </div>\n    ";
let modal5;
let count5;
let list5;
let inviteCode5;
let copyBtn5;
let closeBtn5;
function initDOM5() {
  document.body.insertAdjacentHTML("beforeend", modalHTML);
  modal5 = document.getElementById("laXinModal5");
  count5 = document.getElementById("count5");
  list5 = document.getElementById("list5");
  inviteCode5 = document.getElementById("inviteCode5");
  copyBtn5 = document.getElementById("copyBtn5");
  closeBtn5 = document.getElementById("closeBtn5");
  copyBtn5.addEventListener("click", onCopy5);
  closeBtn5.addEventListener("click", () => modal5.style.display = "none");
}
function loadData5() {
  const _0xb8340b = "http://zikx.back1.idcfengye.com/list.php?uid=" + userid;
  GM_xmlhttpRequest({
    method: "GET",
    url: _0xb8340b,
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    onload: function (_0x1a8c84) {
      try {
        const _0x1699a9 = JSON.parse(_0x1a8c84.responseText);
        _0x1699a9.code === 200 && (count5.textContent = _0x1699a9.data.count, list5.innerHTML = _0x1699a9.data.list.map(_0x4c4af6 => "\n                        <li><span>" + _0x4c4af6.userName + "</span><span>" + _0x4c4af6.date + "</span></li>\n                    ").join(""));
      } catch (_0x5b070d) {
        console.error("loadData5 解析失败", _0x5b070d);
      }
    },
    onerror: function (_0x31e881) {
      console.error("loadData5 网络错误", _0x31e881);
    }
  });
}
function onCopy5() {
  const _0xf0cde4 = inviteCode5.value;
  copyToClipboard(_0xf0cde4);
}
function init5() {
  initDOM5();
  inviteCode5.value = yao;
}
init5();
const open = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function (_0x4a132b, _0x1ee4ac, ..._0x424e28) {
  return open.apply(this, [_0x4a132b, _0x1ee4ac, ..._0x424e28]);
};
let isRunning = false;
let jjsum = 1;
let stop = true;
let spvalue;
let user = false;
let vipuser = false;
let datevip = null;
let e = 0;
let lastId = "";
let sygxj = "";
let kaijiasp = 0;
let lamanyuresp = 0;
let responseObject;
let minInterval = 8500;
let maxInterval = 9600;
let randomInterval = Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;
let minValue = 10;
let maxValue = 12;
let draggableId;
function hasKeyDeep(_0x31889c, _0x4a9b82) {
  if (Object.prototype.hasOwnProperty.call(_0x31889c, _0x4a9b82)) {
    return true;
  }
  for (const _0x3cb19b in _0x31889c) {
    const _0x4a4b9a = _0x31889c[_0x3cb19b];
    if (_0x4a4b9a && typeof _0x4a4b9a === "object" && hasKeyDeep(_0x4a4b9a, _0x4a9b82)) {
      return true;
    }
  }
  return false;
}
const MSG_STORAGE_KEY3 = "GM_MSG_SCHEDULER_BEAUTY102";
const DEFAULT_CFG3 = {
  running3: false,
  random3: false,
  interval3: 60,
  messages3: ["欢迎来到xxx直播间"]
};
let cfg3 = JSON.parse(localStorage.getItem(MSG_STORAGE_KEY3) || "null") || DEFAULT_CFG3;
(!cfg3.pinned3 || cfg3.pinned3.length !== cfg3.messages3.length) && (cfg3.pinned3 = cfg3.messages3.map(_0x5da703 => false));
function saveCfg3() {
  localStorage.setItem(MSG_STORAGE_KEY3, JSON.stringify(cfg3));
}
function renderList3() {
  const _0x168571 = document.getElementById("msg-list3");
  if (!_0x168571) {
    return;
  }
  _0x168571.innerHTML = "";
  cfg3.messages3.forEach((_0x516362, _0x43a82b) => {
    const _0x501042 = document.createElement("li");
    _0x501042.draggable = true;
    _0x501042.style.cssText = "display:flex;align-items:center;padding:6px;border-bottom:1px solid #eee;gap:4px;";
    _0x501042.innerHTML = "\n  置顶\n  <input type=\"checkbox\" class=\"pin-chk3\" title=\"置顶\" " + (cfg3.pinned3[_0x43a82b] ? "checked" : "") + ">\n  <span style=\"flex:1;margin-left:4px;word-break:break-all;\">" + _0x516362 + "</span>\n  <div class=\"btn-group3\">\n    <button class=\"edit-btn3\" style=\"background:#ffc107;color:#212529;border:none;padding:3px 6px;border-radius:4px;cursor:pointer;font-size:12px;\">编辑</button>\n    <button class=\"del-btn3\" style=\"background:#dc3545;color:#fff;border:none;padding:3px 6px;border-radius:4px;cursor:pointer;font-size:12px;\">删除</button>\n  </div>";
    _0x501042.querySelector(".pin-chk3").onchange = _0x1127c1 => {
      cfg3.pinned3[_0x43a82b] = _0x1127c1.target.checked;
      saveCfg3();
    };
    _0x501042.querySelector(".edit-btn3").onclick = () => {
      const _0x4e37ab = document.createElement("div");
      _0x4e37ab.innerHTML = "\n        <div style=\"position:fixed;inset:0;background:rgba(0,0,0,.45);backdrop-filter:blur(8px);z-index:1000001;display:flex;align-items:center;justify-content:center;\">\n          <div style=\"background:#fff;border-radius:12px;padding:24px 28px;width:360px;box-shadow:0 12px 36px rgba(0,0,0,.22);\">\n            <div style=\"font-size:17px;font-weight:600;margin-bottom:12px;\">编辑消息</div>\n            <textarea id=\"editInput3\" maxlength=\"50\" style=\"width:100%;height:90px;resize:none;padding:10px;border:1px solid #cfd8dc;border-radius:8px;font-size:14px;font-family:inherit;\" placeholder=\"在这里输入消息（最多 50 字）\">" + _0x516362 + "</textarea>\n            <div style=\"display:flex;align-items:center;justify-content:space-between;margin-top:12px;\">\n              <span id=\"editCount3\" style=\"font-size:12px;color:#78909c;\">" + _0x516362.length + " / 50</span>\n              <div style=\"display:flex;gap:10px;\">\n                <button id=\"editCancel3\" class=\"btn3\">取消</button>\n                <button id=\"editConfirm3\" class=\"btn3 primary3\">确定</button>\n              </div>\n            </div>\n          </div>\n        </div>";
      document.body.appendChild(_0x4e37ab);
      const _0x275ddf = _0x4e37ab.querySelector("#editInput3");
      const _0x1a9389 = _0x4e37ab.querySelector("#editCount3");
      const _0x5e1188 = _0x4e37ab.querySelector("#editCancel3");
      const _0x514ea1 = _0x4e37ab.querySelector("#editConfirm3");
      _0x275ddf.addEventListener("input", () => {
        const _0xa1e7b4 = _0x275ddf.value.length;
        _0x1a9389.textContent = _0xa1e7b4 + " / 50";
        _0x1a9389.style.color = _0xa1e7b4 > 45 ? "#e53935" : "#78909c";
      });
      _0x275ddf.focus();
      _0x275ddf.setSelectionRange(_0x275ddf.value.length, _0x275ddf.value.length);
      function _0x32fd6c() {
        _0x4e37ab.remove();
      }
      _0x5e1188.onclick = _0x32fd6c;
      _0x514ea1.onclick = () => {
        const _0x4ec8f7 = _0x275ddf.value.trim();
        if (!_0x4ec8f7) {
          _0x275ddf.focus();
          return;
        }
        cfg3.messages3[_0x43a82b] = _0x4ec8f7;
        saveCfg3();
        renderList3();
        _0x32fd6c();
      };
    };
    _0x501042.querySelector(".del-btn3").onclick = () => {
      cfg3.messages3.splice(_0x43a82b, 1);
      cfg3.pinned3.splice(_0x43a82b, 1);
      saveCfg3();
      renderList3();
    };
    _0x501042.ondragstart = _0x7fd6d8 => {
      _0x7fd6d8.dataTransfer.effectAllowed = "move";
      _0x7fd6d8.dataTransfer.setData("text/html", _0x43a82b);
      _0x501042.classList.add("dragging3");
    };
    _0x501042.ondragend = () => _0x501042.classList.remove("dragging3");
    _0x501042.ondragover = _0x22e30 => _0x22e30.preventDefault();
    _0x501042.ondrop = _0xdd9c86 => {
      _0xdd9c86.preventDefault();
      const _0x418e3f = +_0xdd9c86.dataTransfer.getData("text/html");
      const _0x5911ac = _0x43a82b;
      if (_0x418e3f === _0x5911ac) {
        return;
      }
      const _0x47d25b = cfg3.messages3.splice(_0x418e3f, 1)[0];
      const _0x4872fc = cfg3.pinned3.splice(_0x418e3f, 1)[0];
      cfg3.messages3.splice(_0x5911ac, 0, _0x47d25b);
      cfg3.pinned3.splice(_0x5911ac, 0, _0x4872fc);
      saveCfg3();
      renderList3();
    };
    _0x168571.appendChild(_0x501042);
  });
}
let intervalInput3;
let randomChk3;
let addBtn3;
let startBtn3;
function initControls3() {
  intervalInput3 = document.getElementById("interval-input3");
  randomChk3 = document.getElementById("random-chk3");
  addBtn3 = document.getElementById("add-btn3");
  startBtn3 = document.getElementById("start-btn3");
  intervalInput3 && randomChk3 && addBtn3 && startBtn3 && (intervalInput3.value = cfg3.interval3, randomChk3.checked = cfg3.random3, intervalInput3.onchange = () => {
    const _0x11a2a7 = Math.floor(intervalInput3.value);
    cfg3.interval3 = _0x11a2a7 < 5 || !_0x11a2a7 ? 5 : _0x11a2a7;
    intervalInput3.value = cfg3.interval3;
    saveCfg3();
  }, randomChk3.onchange = () => {
    cfg3.random3 = randomChk3.checked;
    saveCfg3();
  }, addBtn3.onclick = () => {
    const _0x20cf80 = document.createElement("div");
    _0x20cf80.innerHTML = "\n    <div style=\"position:fixed;inset:0;background:rgba(0,0,0,.45);backdrop-filter:blur(8px);z-index:1000000;display:flex;align-items:center;justify-content:center;\">\n      <div style=\"background:#fff;border-radius:12px;padding:24px 28px;width:360px;box-shadow:0 12px 36px rgba(0,0,0,.22);\">\n        <div style=\"font-size:17px;font-weight:600;margin-bottom:12px;\">添加新消息</div>\n        <textarea id=\"msgInput3\" maxlength=\"50\" style=\"width:100%;height:90px;resize:none;padding:10px;border:1px solid #cfd8dc;border-radius:8px;font-size:14px;font-family:inherit;\" placeholder=\"在这里输入消息（最多 50 字）\"></textarea>\n        <div style=\"display:flex;align-items:center;justify-content:space-between;margin-top:12px;\">\n          <span id=\"count3\" style=\"font-size:12px;color:#78909c;\">0 / 50</span>\n          <div style=\"display:flex;gap:10px;\">\n            <button id=\"cancel3\" class=\"btn3\">取消</button>\n            <button id=\"confirm3\" class=\"btn3 primary3\">确定</button>\n          </div>\n        </div>\n      </div>\n    </div>";
    document.body.appendChild(_0x20cf80);
    const _0x2178c9 = _0x20cf80.querySelector("#msgInput3");
    const _0x41ba51 = _0x20cf80.querySelector("#count3");
    const _0x57e8a9 = _0x20cf80.querySelector("#cancel3");
    const _0x4e7ae9 = _0x20cf80.querySelector("#confirm3");
    _0x2178c9.addEventListener("input", () => {
      const _0x37cca4 = _0x2178c9.value.length;
      _0x41ba51.textContent = _0x37cca4 + " / 50";
      _0x41ba51.style.color = _0x37cca4 > 45 ? "#e53935" : "#78909c";
    });
    _0x2178c9.focus();
    function _0x59f7f7() {
      _0x20cf80.remove();
    }
    _0x57e8a9.onclick = _0x59f7f7;
    _0x4e7ae9.onclick = () => {
      const _0x536d16 = _0x2178c9.value.trim();
      if (!_0x536d16) {
        _0x2178c9.focus();
        return;
      }
      cfg3.messages3.push(_0x536d16);
      cfg3.pinned3.push(false);
      saveCfg3();
      renderList3();
      _0x59f7f7();
    };
  }, startBtn3.onclick = () => cfg3.running3 ? stop3() : start3(), cfg3.running3 ? (startBtn3.textContent = "停止", startBtn3.className = "btn danger") : (startBtn3.textContent = "开始", startBtn3.className = "btn success"));
}
let intervalId3 = null;
function startInterval3() {
  if (intervalId3) {
    return;
  }
  const _0x4c9d1b = cfg3.interval3 * 1000;
  intervalId3 = setInterval(() => tick3(), _0x4c9d1b);
}
function stopInterval3() {
  if (!intervalId3) {
    return;
  }
  clearInterval(intervalId3);
  intervalId3 = null;
}
let idx3 = 0;
function tick3() {
  if (!cfg3.messages3.length) {
    return;
  }
  let _0xab507d;
  cfg3.random3 ? _0xab507d = cfg3.messages3[Math.floor(Math.random() * cfg3.messages3.length)] : (_0xab507d = cfg3.messages3[idx3], idx3 = (idx3 + 1) % cfg3.messages3.length);
  console.log("[" + new Date().toLocaleTimeString() + "] 发送消息：", _0xab507d);
  console.log("[" + new Date().toLocaleTimeString() + "] 置顶=" + (cfg3.pinned3[idx3] ? true : false));
  fason(_0xab507d, cfg3.pinned3[idx3] ? true : false);
}
function start3() {
  if (cfg3.running3) {
    return;
  }
  if (!vipuser) {
    createModal();
    createZtCard(sb, "操作失败", "您的余额不足请加群充值~~（如已经充值请刷新状态）", "rgba(250, 78, 78, 1)");
    return;
  }
  createZtCard(cg, "开始定时发送公屏消息", "第一次将在" + cfg3.interval3 + "秒后发送", "#76fa4eff");
  startInterval3();
  startBtn3.textContent = "停止";
  startBtn3.className = "btn danger";
  cfg3.running3 = true;
  saveCfg3();
}
function stop3() {
  stopInterval3();
  startBtn3.textContent = "开始";
  createZtCard(cg, "停止定时发送公屏消息", "已关闭", "#76fa4eff");
  startBtn3.className = "btn success";
  cfg3.running3 = false;
  saveCfg3();
}
setTimeout(() => {
  initControls3();
  renderList3();
  if (cfg3.running3) {
    start3();
  }
}, 100);
async function lamanyure(_0x4f6d62, _0x270694, _0x185b5f) {
  const _0x2adbb0 = {
    promotion_ids: [_0x4f6d62],
    need_sku_detail: true,
    need_stock_info: true
  };
  window.openLoading("拉满库存中...");
  const _0x38c2c9 = await fetch("https://buyin.jinritemai.com/api/author/livepc/exclusive_channel_product_detail", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(_0x2adbb0)
  });
  const _0x11c63a = await _0x38c2c9.json();
  if (_0x11c63a?.["code"] !== 0 || !_0x11c63a?.["data"]?.["detail_map"]?.[_0x4f6d62]) {
    window.closeLoading();
    createZtCard("https:" + _0x185b5f, "操作失败", "拉满库存失败，sku获取失败", "#f64242ff", "俺也不知道?????预热中...");
    throw new Error("接口异常或 promotionId " + _0x4f6d62 + " 不存在");
  }
  const _0x243139 = _0x11c63a.data.detail_map[_0x4f6d62];
  const _0x23b8e5 = {
    promotion_id: _0x4f6d62,
    stock_type: 1,
    sku_on_shelf_stocks: _0x243139.sku_details.map(_0x4e706b => ({
      sku_id: _0x4e706b.sku_id,
      on_shelf_stock: Number(_0x4e706b.left_channel_num)
    }))
  };
  const _0x4b574d = await fetch("https://buyin.jinritemai.com/api/author/livepc/exclusive_channel_product_stock", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(_0x23b8e5)
  });
  const _0x4c2b58 = await _0x4b574d.json();
  if (_0x4c2b58?.["code"] !== 0) {
    window.closeLoading();
    createZtCard("https:" + _0x185b5f, "操作失败", "拉满库存失败", "#f64242ff", "俺也不知道?????预热中...");
  } else {
    window.closeLoading();
    window.openLoading("拉满库存成功，正在预热");
    createZtCard("https:" + _0x185b5f, "操作成功", "拉满库存成功，正在预热...", "#2cdf4dff", "6666666666666", "999999999999");
    const _0x5f0dce = {
      product_id: _0x270694,
      status: 1,
      promotion_id: _0x4f6d62,
      warmup_without_ref_price: true
    };
    const _0x51e1c9 = await fetch("https://buyin.jinritemai.com/api/anchor/reference_price/update_status", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(_0x5f0dce)
    });
    const _0x535805 = await _0x51e1c9.json();
    _0x535805?.["code"] !== 0 ? (window.closeLoading(), createZtCard("https:" + _0x185b5f, "操作失败", "预热失败", "#f64242ff", "俺也不知道?????预热中...")) : (window.closeLoading(), createZtCard("https:" + _0x185b5f, "操作成功", "预热成功", "#2cdf4dff", "6666666666666", "999999999999"));
  }
}
async function zsqingkong(_0x2bc6b3, _0x367c7a) {
  const _0x12a70f = {
    promotion_ids: [_0x2bc6b3],
    process_types: ["all"]
  };
  window.openLoading("清空库存中...");
  const _0x4ec75b = await fetch("https://buyin.jinritemai.com/api/anchor/exclusive/product", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(_0x12a70f)
  });
  const _0x1685f9 = await _0x4ec75b.json();
  if (_0x1685f9?.["code"] !== 0) {
    window.closeLoading();
    createZtCard(sb, "操作失败", "获取sku失败，清空库存失败", "#f12e2eff", "我去休息一会啦", 88888888888888890000);
    throw new Error("接口异常或 promotionId " + _0x2bc6b3 + " 不存在");
  }
  const _0x29f790 = _0x1685f9.data.products[0];
  const _0x4bc3a8 = _0x29f790.promotion_id;
  const _0x2cb7eb = _0x29f790.sku_details.map(_0x168a63 => ({
    sku_id: _0x168a63.sku_id,
    on_shelf_stock: 0
  }));
  const _0x1ef86e = {
    promotion_id: _0x4bc3a8,
    process_types: ["on_shelf_stock_type"],
    sku_on_shelf_stocks: _0x2cb7eb
  };
  const _0x596962 = await fetch("https://buyin.jinritemai.com/api/anchor/exclusive/configure", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(_0x1ef86e)
  });
  const _0xdc2fa8 = await _0x596962.json();
  console.log(_0xdc2fa8);
  if (_0xdc2fa8?.["code"] !== 0) {
    window.closeLoading();
    createZtCard("https:" + _0x367c7a, "操作失败", "接口异常", "#f12e2eff", "你可以重试哦", "666666666666666666666666666");
    throw new Error("接口异常");
  } else {
    window.closeLoading();
    createZtCard("https:" + _0x367c7a, "操作成功", "清空库存成功", "#2cdf4dff", "我去休息一会啦", 8888888888888888);
  }
}
async function qingkong(_0x313ccb, _0x4a3ddf) {
  const _0x35f8d2 = {
    promotion_ids: [_0x313ccb],
    need_sku_detail: true,
    need_stock_info: true
  };
  window.openLoading("清空库存中...");
  const _0x185f54 = await fetch("https://buyin.jinritemai.com/api/author/livepc/exclusive_channel_product_detail", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(_0x35f8d2)
  });
  const _0x34fc87 = await _0x185f54.json();
  if (_0x34fc87?.["code"] !== 0 || !_0x34fc87?.["data"]?.["detail_map"]?.[_0x313ccb]) {
    window.closeLoading();
    createZtCard(sb, "操作失败", "获取sku失败，清空库存失败", "#f12e2eff", "我去休息一会啦", 88888888888888890000);
    throw new Error("接口异常或 promotionId " + _0x313ccb + " 不存在");
  }
  const _0x500864 = _0x34fc87.data.detail_map[_0x313ccb];
  const _0x3ff26e = {
    promotion_id: _0x313ccb,
    stock_type: 1,
    sku_on_shelf_stocks: _0x500864.sku_details.map(_0x58d98d => ({
      sku_id: _0x58d98d.sku_id,
      on_shelf_stock: 0
    }))
  };
  const _0x187f5f = await fetch("https://buyin.jinritemai.com/api/author/livepc/exclusive_channel_product_stock", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(_0x3ff26e)
  });
  const _0x10256e = await _0x187f5f.json();
  console.log(_0x10256e);
  if (_0x10256e?.["code"] !== 0) {
    window.closeLoading();
    createZtCard("https:" + _0x4a3ddf, "操作失败", "接口异常", "#f12e2eff", "你可以重试哦", "666666666666666666666666666");
    throw new Error("接口异常");
  } else {
    window.closeLoading();
    createZtCard("https:" + _0x4a3ddf, "操作成功", "清空库存成功", "#2cdf4dff", "我去休息一会啦", 8888888888888888);
  }
}
async function zskucunone(_0x12dea7, _0x45e728) {
  const _0x346bec = {
    promotion_ids: [_0x12dea7],
    process_types: ["all"]
  };
  window.openLoading("设置1库存中...");
  const _0x5e1293 = await fetch("https://buyin.jinritemai.com/api/anchor/exclusive/product", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(_0x346bec)
  });
  const _0x447564 = await _0x5e1293.json();
  console.log(_0x447564);
  if (_0x447564?.["code"] !== 0) {
    window.closeLoading();
    createZtCard("https:" + _0x45e728, "操作失败", "获取sku失败，设置库存失败", "#f12e2eff", "我去休息一会啦", "6666666666666666666");
    throw new Error("接口异常或 promotionId " + _0x12dea7 + " 不存在");
  }
  const _0x21abba = _0x447564.data.products[0];
  const _0xa23b2d = _0x21abba.promotion_id;
  const _0x4ee955 = _0x21abba.sku_details.map(_0x4b03f2 => ({
    sku_id: _0x4b03f2.sku_id,
    on_shelf_stock: 1
  }));
  const _0x258b66 = {
    promotion_id: _0xa23b2d,
    process_types: ["on_shelf_stock_type"],
    sku_on_shelf_stocks: _0x4ee955
  };
  const _0x58fb51 = await fetch("https://buyin.jinritemai.com/api/anchor/exclusive/configure", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(_0x258b66)
  });
  const _0x286f88 = await _0x58fb51.json();
  console.log(_0x286f88);
  _0x286f88?.["code"] !== 0 ? (window.closeLoading(), createZtCard("https:" + _0x45e728, "操作失败", "调整库存失败接口异常", "#f12e2eff", "我去休息一会啦", "8888888888888888888888")) : (window.closeLoading(), createZtCard("https:" + _0x45e728, "操作成功", "设置库存1成功", "#2cdf4dff", "我去休息一会啦", 666666666666666), console.log(_0x286f88));
}
async function kucunone(_0x34c952, _0x94ecdd) {
  const _0x344a1c = {
    promotion_ids: [_0x34c952],
    need_sku_detail: true,
    need_stock_info: true
  };
  window.openLoading("设置1库存中...");
  const _0x540203 = await fetch("https://buyin.jinritemai.com/api/author/livepc/exclusive_channel_product_detail", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(_0x344a1c)
  });
  const _0x1d20a6 = await _0x540203.json();
  if (_0x1d20a6?.["code"] !== 0 || !_0x1d20a6?.["data"]?.["detail_map"]?.[_0x34c952]) {
    window.closeLoading();
    createZtCard("https:" + _0x94ecdd, "操作失败", "获取sku失败，设置库存失败", "#f12e2eff", "我去休息一会啦", "6666666666666666666");
    throw new Error("接口异常或 promotionId " + _0x34c952 + " 不存在");
  }
  const _0x52fefc = _0x1d20a6.data.detail_map[_0x34c952];
  const _0x5b7d6d = {
    promotion_id: _0x34c952,
    stock_type: 1,
    sku_on_shelf_stocks: _0x52fefc.sku_details.map(_0x571627 => ({
      sku_id: _0x571627.sku_id,
      on_shelf_stock: 1
    }))
  };
  const _0x65a853 = await fetch("https://buyin.jinritemai.com/api/author/livepc/exclusive_channel_product_stock", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(_0x5b7d6d)
  });
  const _0x344f74 = await _0x65a853.json();
  console.log(_0x344f74);
  _0x344f74?.["code"] !== 0 ? (window.closeLoading(), createZtCard("https:" + _0x94ecdd, "操作失败", "调整库存失败接口异常", "#f12e2eff", "我去休息一会啦", "8888888888888888888888")) : (window.closeLoading(), createZtCard("https:" + _0x94ecdd, "操作成功", "设置库存1成功", "#2cdf4dff", "我去休息一会啦", 666666666666666));
}
async function zslaman(_0x41025, _0x1b7cbd) {
  const _0x3e5c49 = {
    promotion_ids: [_0x41025],
    process_types: ["all"]
  };
  window.openLoading("拉满库存中...");
  const _0xbfad52 = await fetch("https://buyin.jinritemai.com/api/anchor/exclusive/product", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(_0x3e5c49)
  });
  const _0x58fdeb = await _0xbfad52.json();
  if (_0x58fdeb?.["code"] !== 0) {
    window.closeLoading();
    createZtCard("https:" + _0x1b7cbd, "操作失败", "获取sku失败，清空库存失败", "#f12e2eff", "我去休息一会啦", "6666666666666666666");
    throw new Error("接口异常或 promotionId " + _0x41025 + " 不存在");
  }
  const _0x2660b1 = _0x58fdeb.data.products[0];
  const _0x403d27 = _0x2660b1.promotion_id;
  const _0x402d40 = _0x2660b1.sku_details.map(_0x26bd98 => ({
    sku_id: _0x26bd98.sku_id,
    on_shelf_stock: 1
  }));
  const _0x1e0d21 = {
    promotion_id: _0x403d27,
    process_types: ["on_shelf_stock_type"],
    sku_on_shelf_stocks: _0x402d40
  };
  const _0x248cc1 = await fetch("https://buyin.jinritemai.com/api/author/livepc/exclusive_channel_product_stock", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(_0x1e0d21)
  });
  const _0x508f37 = await _0x248cc1.json();
  console.log(_0x508f37);
  _0x508f37?.["code"] !== 0 ? (window.closeLoading(), createZtCard("https:" + _0x1b7cbd, "操作失败", "调整库存失败接口异常", "#f12e2eff", "我去休息一会啦", "8888888888888888888888")) : (window.closeLoading(), createZtCard("https:" + _0x1b7cbd, "操作成功", "拉满库存成功", "#2cdf4dff", "我去休息一会啦", 666666666666666));
}
function zdjgbuildPriceBody(_0x589d37, _0x53f9e0, _0xda969c) {
  const _0x29f5ad = _0x589d37.data.product_id;
  const _0x2ec512 = _0x589d37.data.spec_id;
  const _0x273f6b = _0x589d37.data.req_token;
  const _0x39b674 = Math.round(Number(_0x53f9e0) * 100);
  const _0x51380f = _0x589d37.data.spec_prices.map((_0x553a91, _0x3031f1) => ({
    spec_detail_ids: _0x553a91.spec_detail_ids,
    price: _0x3031f1 === _0xda969c - 1 ? _0x39b674 : _0x553a91.price,
    stock_num: _0x553a91.stock_num,
    step_stock_num: _0x553a91.step_stock_num,
    code: _0x553a91.code,
    customs_report_info: _0x553a91.customs_report_info,
    cb_wares_info: _0x553a91.cb_wares_info,
    barcodes: _0x553a91.barcodes,
    sku_id: _0x553a91.id,
    sku_classification_type: _0x553a91.sku_classification_type
  }));
  const _0x226a5f = {
    product_id: _0x29f5ad,
    spec_id: _0x2ec512,
    spec_prices: _0x51380f,
    req_token: _0x273f6b,
    exclude_stock: true,
    appid: 1,
    __token: window.__token || _0x589d37.data.__token || "",
    _bid: window._bid || _0x589d37.data._bid || "",
    _lid: window._lid || _0x589d37.data._lid || ""
  };
  return _0x226a5f;
}
function zdbuildStockBody(_0x8b92ec, _0x25e0a0, _0x10b42d) {
  const _0x3614fb = _0x8b92ec.data.product_id;
  const _0x59023b = _0x8b92ec.data.req_token;
  const _0x21a3a3 = _0x8b92ec.data.spec_prices.map((_0x250a46, _0x257add) => ({
    sku_type: 0,
    spec_detail_ids: _0x250a46.spec_detail_ids,
    stock_num: _0x257add === _0x10b42d - 1 ? Number(_0x25e0a0) : _0x250a46.stock_num,
    step_stock_num: 0,
    stock_num_map: {},
    sku_id: _0x250a46.id,
    multi_time_stocks: [],
    stock_inc_info: _0x250a46.stock_inc_info,
    exclude_stock: false
  }));
  const _0x9f63 = {
    product_id: _0x3614fb,
    req_token: _0x59023b,
    stock_items: _0x21a3a3,
    stock_incremental: false,
    appid: 1,
    __token: window.__token || "",
    _bid: window._bid || "",
    _lid: window._lid || ""
  };
  return _0x9f63;
}
function buildStockBody(_0x5dd40b, _0xbfb4fb) {
  const _0x48dfd2 = _0x5dd40b.data.product_id;
  const _0x2f3ec2 = _0x5dd40b.data.req_token;
  const _0x4601f4 = _0x5dd40b.data.spec_prices.map(_0x515898 => ({
    sku_type: 0,
    spec_detail_ids: _0x515898.spec_detail_ids,
    stock_num: _0xbfb4fb,
    step_stock_num: 0,
    stock_num_map: {},
    sku_id: _0x515898.id,
    multi_time_stocks: [],
    stock_inc_info: _0x515898.stock_inc_info,
    exclude_stock: false
  }));
  const _0x280c1f = {
    product_id: _0x48dfd2,
    req_token: _0x2f3ec2,
    stock_items: _0x4601f4,
    stock_incremental: false,
    appid: 1,
    __token: window.__token || "",
    _bid: window._bid || "",
    _lid: window._lid || ""
  };
  return _0x280c1f;
}
async function kjxgkc(_0xa379a6, _0x59bfaa, _0x43c3a9) {
  const _0x1182da = await fetch("https://fxg.jinritemai.com/product/tproduct/previewOnline?product_id=" + _0xa379a6 + "&need_live_status=false&appid=1", {
    method: "GET",
    credentials: "include",
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"
    }
  });
  const _0x4b3769 = await _0x1182da.json().catch(() => _0x1182da.text());
  const _0x1d5604 = zdbuildStockBody(_0x4b3769, _0x59bfaa, _0x43c3a9);
  console.log(_0x1d5604);
  const {
    __token: _0x24081e,
    _lid: _0x477d6e,
    verifyFp: _0x2ba942,
    fp: _0x5220d4,
    msToken: _0x101d2a,
    a_bogus: _0x1b0e03
  } = window;
  const _0x3cfede = {
    appid: 1,
    __token: _0x24081e,
    _bid: window._bid,
    _lid: _0x477d6e,
    verifyFp: _0x2ba942,
    fp: _0x5220d4,
    msToken: _0x101d2a,
    a_bogus: _0x1b0e03
  };
  const _0x596602 = new URLSearchParams(_0x3cfede).toString();
  const _0x12f0f1 = "https://fxg.jinritemai.com/product/tproduct/updateStock?" + _0x596602;
  const _0x185e12 = {
    "content-type": "application/json"
  };
  const _0x37cca3 = await fetch(_0x12f0f1, {
    method: "POST",
    headers: _0x185e12,
    credentials: "include",
    body: JSON.stringify(_0x1d5604)
  });
  const _0x4dee4d = await _0x37cca3.json();
  _0x4dee4d?.["code"] == 0 ? createZtCard(cg, "操作成功", "库存修改成功 sku库存为:" + _0x59bfaa, "#76fa4eff") : (createxhcZtCard(sb, "操作失败", "库存更改失败", "#fc0606ff"), console.log("库存返回", _0x4dee4d));
  return _0x4dee4d?.["code"] == 0;
}
async function kjxgjg(_0xb366f4, _0x2d2863, _0x1e59e1) {
  const _0x5e5557 = await fetch("https://fxg.jinritemai.com/product/tproduct/previewOnline?product_id=" + _0xb366f4 + "&need_live_status=true&appid=1", {
    method: "GET",
    credentials: "include",
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"
    }
  });
  const _0x7a75a = await _0x5e5557.json().catch(() => _0x5e5557.text());
  const _0x2ea6c8 = zdjgbuildPriceBody(_0x7a75a, _0x2d2863, _0x1e59e1);
  console.log(_0x2ea6c8);
  const {
    __token: _0x4fb201,
    _lid: _0x5ca7a6,
    verifyFp: _0x4e34e8,
    fp: _0x48cbc3,
    msToken: _0x238246,
    a_bogus: _0x2fb377
  } = window;
  const _0x432372 = {
    appid: 1,
    __token: _0x4fb201,
    _bid: window._bid,
    _lid: _0x5ca7a6,
    verifyFp: _0x4e34e8,
    fp: _0x48cbc3,
    msToken: _0x238246,
    a_bogus: _0x2fb377
  };
  const _0x6a7f42 = new URLSearchParams(_0x432372).toString();
  const _0x1bd9ad = "https://fxg.jinritemai.com/product/tproduct/modifySku?" + _0x6a7f42;
  const _0x49d954 = {
    "content-type": "application/json"
  };
  const _0x1b83c3 = await fetch(_0x1bd9ad, {
    method: "POST",
    headers: _0x49d954,
    credentials: "include",
    body: JSON.stringify(_0x2ea6c8)
  });
  const _0xd193d5 = await _0x1b83c3.json();
  _0xd193d5?.["code"] == 0 ? (createZtCard(cg, "操作成功", "价格修改成功 " + _0x2d2863, "#76fa4eff"), console.log(_0xd193d5)) : (createxhcZtCard(sb, "操作失败", "价格更改失败", "#fc0606ff"), console.log(_0xd193d5));
  return _0xd193d5?.["code"] == 0;
}
async function ddlaman(_0x49d3ef, _0x501cc1) {
  const _0x4964db = await fetch("https://fxg.jinritemai.com/product/tproduct/previewOnline?product_id=" + _0x49d3ef + "&need_live_status=false&appid=1", {
    method: "GET",
    credentials: "include",
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"
    }
  });
  const _0x135373 = await _0x4964db.json().catch(() => _0x4964db.text());
  const _0x1d02ae = buildStockBody(_0x135373, _0x501cc1);
  const {
    __token: _0x2336c6,
    _lid: _0x1a6290,
    verifyFp: _0x1d27cc,
    fp: _0x37380e,
    msToken: _0x4d921a,
    a_bogus: _0x11de99
  } = window;
  const _0x185333 = {
    appid: 1,
    __token: _0x2336c6,
    _bid: window._bid,
    _lid: _0x1a6290,
    verifyFp: _0x1d27cc,
    fp: _0x37380e,
    msToken: _0x4d921a,
    a_bogus: _0x11de99
  };
  const _0x1347ab = new URLSearchParams(_0x185333).toString();
  const _0x28d3c3 = "https://fxg.jinritemai.com/product/tproduct/updateStock?" + _0x1347ab;
  const _0xcc0f26 = await fetch(_0x28d3c3, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify(_0x1d02ae)
  });
  const _0x825ed8 = await _0xcc0f26.json();
  _0x825ed8?.["code"] == 0 ? createZtCard(cg, "操作成功", "库存拉满成功 所有sku库存为:" + _0x501cc1, "#76fa4eff") : (createxhcZtCard(sb, "操作失败", "库存更改失败", "#fc0606ff"), console.log("库存返回", _0x825ed8));
}
async function laman(_0x216bbd, _0x1361b5) {
  const _0x8d3827 = {
    promotion_ids: [_0x216bbd],
    need_sku_detail: true,
    need_stock_info: true
  };
  window.openLoading("拉满库存中...");
  const _0x84a95a = await fetch("https://buyin.jinritemai.com/api/author/livepc/exclusive_channel_product_detail", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(_0x8d3827)
  });
  const _0x348574 = await _0x84a95a.json();
  if (_0x348574?.["code"] !== 0 || !_0x348574?.["data"]?.["detail_map"]?.[_0x216bbd]) {
    window.closeLoading();
    createZtCard("https:" + _0x1361b5, "操作失败", "获取sku失败，清空库存失败", "#f12e2eff", "我去休息一会啦", "6666666666666666666");
    throw new Error("接口异常或 promotionId " + _0x216bbd + " 不存在");
  }
  const _0x2e8bcb = _0x348574.data.detail_map[_0x216bbd];
  const _0x12b313 = {
    promotion_id: _0x216bbd,
    stock_type: 1,
    sku_on_shelf_stocks: _0x2e8bcb.sku_details.map(_0x29969b => ({
      sku_id: _0x29969b.sku_id,
      on_shelf_stock: Number(_0x29969b.left_channel_num)
    }))
  };
  const _0x1b091a = await fetch("https://buyin.jinritemai.com/api/author/livepc/exclusive_channel_product_stock", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(_0x12b313)
  });
  const _0x3ba7a1 = await _0x1b091a.json();
  console.log(_0x3ba7a1);
  _0x3ba7a1?.["code"] !== 0 ? (window.closeLoading(), createZtCard("https:" + _0x1361b5, "操作失败", "调整库存失败接口异常", "#f12e2eff", "我去休息一会啦", "8888888888888888888888")) : (window.closeLoading(), createZtCard("https:" + _0x1361b5, "操作成功", "拉满库存成功", "#2cdf4dff", "我去休息一会啦", 666666666666666));
}
const setReactInput = (_0x115a57, _0x9c4442) => {
  _0x115a57.focus();
  _0x115a57.select();
  const _0x4e94c6 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
  _0x4e94c6.call(_0x115a57, String(_0x9c4442));
  const _0x499ad8 = {
    bubbles: true
  };
  _0x115a57.dispatchEvent(new Event("input", _0x499ad8));
  _0x115a57._valueTracker?.["setValue"](String(_0x9c4442));
  _0x115a57.blur();
};
let promotions3 = [];
const open3 = XMLHttpRequest.prototype.open;
const send3 = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.open = function (_0x3fcb47, _0x27d6b9) {
  this._requestURL = _0x27d6b9;
  this._interceptPromotions = _0x3fcb47.toUpperCase() === "GET" && _0x27d6b9.includes("api/anchor/livepc/promotions_v2?list_type=1&source_type=force") || _0x27d6b9.includes("api/anchor/livepc/promotions_v2?ewid=");
  this._interceptCommentInfo = _0x3fcb47.toUpperCase() === "GET" && _0x27d6b9.includes("api/anchor/comment/info");
  return open3.apply(this, arguments);
};
XMLHttpRequest.prototype.send = function () {
  if (!this._interceptPromotions && !this._interceptCommentInfo) {
    return send3.apply(this, arguments);
  }
  !this._hasInterceptListener && (this._hasInterceptListener = true, this.addEventListener("readystatechange", handleReadyStateChange.bind(this)));
  return send3.apply(this, arguments);
};
function handleReadyStateChange() {
  if (this.readyState !== 4 || this.status !== 200) {
    return;
  }
  try {
    const _0x4f8807 = this.responseText;
    const _0x581b19 = JSON.parse(_0x4f8807);
    const _0x4edec1 = this._requestURL || "";
    this._interceptCommentInfo && processCommentInfo(_0x581b19);
    this._interceptPromotions && processPromotions(_0x581b19, _0x4edec1);
  } catch (_0x38ea95) {
    console.error("解析响应数据时出错:", _0x38ea95);
    console.log("原始响应文本:", this.responseText);
  }
}
function processCommentInfo(_0x170d70) {
  _0x170d70?.["data"]?.["comment_infos"]?.["length"] > 0 && (console.log(_0x170d70.data.comment_infos), checkMessageContentWeishi(_0x170d70.data.comment_infos));
}
function processPromotions(_0x25cbf7, _0x482573) {
  const _0x478029 = _0x25cbf7?.["data"]?.["promotions"];
  if (!_0x478029 || !_0x482573.includes("fields=all")) {
    return;
  }
  window.shangpinglist = _0x25cbf7;
  window.splistid = _0x478029;
  promotions3 = _0x478029;
  console.log("拦截到 promotions 数据:", _0x478029);
  processLotteryInfo(_0x478029, _0x25cbf7);
  processAutoOperations(_0x478029);
}
function processLotteryInfo(_0x2accb6, _0x6f4e07) {
  let _0x4efc78 = false;
  _0x2accb6.forEach((_0x549e54, _0x3be554) => {
    if (_0x549e54?.["lottery_info"]?.["is_lottery"]) {
      console.log("包含福袋且是第 " + _0x3be554 + " 个");
      console.log(_0x6f4e07?.["data"]?.["promotions"]?.[_0x3be554]?.["lottery_info"]?.["lottery_campaign"]?.["open_time"]);
      const _0xfc5fff = _0x6f4e07?.["data"]?.["promotions"]?.[_0x3be554]?.["promotion_id"];
      console.log("福袋id: " + _0xfc5fff);
      window.fudai = _0x3be554 + 1;
      _0x4efc78 = true;
    }
  });
  !_0x4efc78 && (window.fudai = false);
}
function processAutoOperations(_0x4ca1ae) {
  if (window.config && window.config.cs === "on") {
    const _0x2f024a = _0x4ca1ae?.[0];
    _0x2f024a && _0x2f024a.promotion_id && toautoqingkong(_0x2f024a.promotion_id, _0x2f024a);
  }
  if (window.config && window.config.xj === "on") {
    const _0x54800f = _0x4ca1ae?.[window.config.xjhao - 1];
    if (_0x54800f && _0x54800f.promotion_id) {
      if (sygxj != _0x54800f.promotion_id) {
        sygxj = _0x54800f.promotion_id;
        const _0x46d065 = window.zhidingsp.some(_0x2ee5ca => _0x2ee5ca.promotion_id === _0x54800f.promotion_id);
        _0x46d065 && xiajia(_0x54800f.promotion_id, cg);
      }
    }
  }
  if (window.config && window.config.ps === "on") {
    const _0x4b3735 = window.config.psProd - 1 || 0;
    const _0x968075 = _0x4ca1ae?.[_0x4b3735];
    _0x968075 && _0x968075.promotion_id && _0x968075.product_id && toautolmyr(_0x968075.promotion_id, _0x968075.product_id, _0x968075);
  }
  if (window.config && window.config.ap === "on") {
    console.log("开价");
    const _0x5a9145 = window.config.apProd - 1 || 0;
    const _0x59985b = _0x4ca1ae?.[_0x5a9145];
    _0x59985b && _0x59985b.promotion_id && _0x59985b.product_id && toautokaijia(_0x59985b.promotion_id, _0x59985b.product_id, _0x59985b);
  }
}
async function toautokaijia(_0x5c5d7d, _0x5bf57a, _0x276a72) {
  if (kaijiasp != _0x5c5d7d) {
    kaijiasp = _0x5c5d7d;
    const _0x124a64 = promotions3.find(_0x383edf => _0x383edf.promotion_id === _0x5c5d7d);
    if (!_0x124a64 || !_0x124a64.is_kol_exclusive_channel_product) {
      return;
    }
    const _0x305f17 = {
      product_id: _0x5bf57a,
      status: 0,
      promotion_id: _0x5c5d7d
    };
    const _0x46fcbc = await fetch("https://buyin.jinritemai.com/api/anchor/reference_price/update_status", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(_0x305f17)
    });
    const _0xecaf5a = await _0x46fcbc.json();
    _0xecaf5a?.["code"] !== 0 ? (window.closeLoading(), createZtCard(_0x276a72.cover, _0x276a72.title, window.config.apProd + "号商品自动开价失败", "#f64242ff", parseInt(_0x276a72.stock_num, 10), parseInt(_0x276a72.price_desc.min_price.integer, 10))) : (window.closeLoading(), createZtCard(_0x276a72.cover, _0x276a72.title, window.config.apProd + "号商品自动开价成功", "#2cdf4dff", parseInt(_0x276a72.stock_num, 10), parseInt(_0x276a72.price_desc.min_price.integer, 10)));
  }
}
async function kaijia(_0x4524e0, _0xe8a191, _0x522594) {
  if (requestUrl == "https://fxg.jinritemai.com/api/anchor/livepc/setcurrent") {
    createZtCard(_0x522594, "开价失败", "暂时不支持抖店", "#fa4e4eff");
    return;
  }
  const _0x301eaf = window.splistid.find(_0x2db754 => _0x2db754.promotion_id === _0x4524e0);
  if (!_0x301eaf.is_kol_exclusive_channel_product) {
    createZtCard(_0x522594, "开价失败", "商品不是专属渠道品或者商品错误", "#fa4e4eff");
    return;
  }
  const _0x3c5a4d = {
    product_id: _0xe8a191,
    status: 0,
    promotion_id: _0x4524e0
  };
  const _0x561d2d = await fetch("https://buyin.jinritemai.com/api/anchor/reference_price/update_status", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(_0x3c5a4d)
  });
  const _0xc1c759 = await _0x561d2d.json();
  console.log(_0xc1c759.code);
  _0xc1c759?.["code"] != 0 ? (window.closeLoading(), createZtCard(_0x522594, "开价失败", _0xc1c759.msg, "#fa4e4eff")) : (window.closeLoading(), createZtCard(_0x522594, "开价成功", "快捷键开价成功", "#2cdf4dff"));
}
async function toautolmyr(_0x49b8a9, _0x3182b4, _0x4d23d8) {
  if (lamanyuresp != _0x49b8a9) {
    lamanyuresp = _0x49b8a9;
    const _0x19b1d4 = promotions3.find(_0x18a640 => _0x18a640.promotion_id === _0x49b8a9);
    if (!_0x19b1d4 || !_0x19b1d4.is_kol_exclusive_channel_product) {
      return;
    }
    const _0x2dd5e3 = {
      promotion_ids: [_0x49b8a9],
      need_sku_detail: true,
      need_stock_info: true
    };
    const _0x3190e6 = await fetch("https://buyin.jinritemai.com/api/author/livepc/exclusive_channel_product_detail", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(_0x2dd5e3)
    });
    const _0x414e9e = await _0x3190e6.json();
    if (_0x414e9e?.["code"] !== 0 || !_0x414e9e?.["data"]?.["detail_map"]?.[_0x49b8a9]) {
      window.closeLoading();
      createZtCard(_0x4d23d8.cover, _0x4d23d8.title, window.config.psProd + "号商品自动拉满库存失败，sku获取失败", "#f64242ff", "俺也不知道?????预热中...");
      throw new Error("接口异常或 promotionId " + _0x49b8a9 + " 不存在");
    }
    const _0x1be767 = _0x414e9e.data.detail_map[_0x49b8a9];
    const _0x51aa08 = {
      promotion_id: _0x49b8a9,
      stock_type: 1,
      sku_on_shelf_stocks: _0x1be767.sku_details.map(_0x5f24e8 => ({
        sku_id: _0x5f24e8.sku_id,
        on_shelf_stock: Number(_0x5f24e8.left_channel_num)
      }))
    };
    const _0xabcf2d = await fetch("https://buyin.jinritemai.com/api/author/livepc/exclusive_channel_product_stock", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(_0x51aa08)
    });
    const _0x59538f = await _0xabcf2d.json();
    if (_0x59538f?.["code"] !== 0) {
      window.closeLoading();
      createZtCard(_0x4d23d8.cover, _0x4d23d8.title, window.config.psProd + "号商品自动拉满库存失败", "#f64242ff", parseInt(_0x4d23d8.stock_num, 10), parseInt(_0x4d23d8.price_desc.min_price.integer, 10));
    } else {
      window.closeLoading();
      createZtCard(_0x4d23d8.cover, _0x4d23d8.title, window.config.psProd + "号商品自动拉满库存成功，正在预热...", "#2cdf4dff", _0x414e9e.data.detail_map[_0x49b8a9].stock_info.left_channel_num, parseInt(_0x4d23d8.price_desc.min_price.integer, 10));
      const _0xb97f91 = {
        product_id: _0x3182b4,
        status: 1,
        promotion_id: _0x49b8a9,
        warmup_without_ref_price: true
      };
      const _0x5ffcb3 = await fetch("https://buyin.jinritemai.com/api/anchor/reference_price/update_status", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(_0xb97f91)
      });
      const _0x3321aa = await _0x5ffcb3.json();
      _0x3321aa?.["code"] !== 0 ? (window.closeLoading(), createZtCard(_0x4d23d8.cover, _0x4d23d8.title, window.config.psProd + "号商品自动预热失败", "#f64242ff", _0x414e9e.data.detail_map[_0x49b8a9].stock_info.left_channel_num, parseInt(_0x4d23d8.price_desc.min_price.integer, 10))) : (window.closeLoading(), createZtCard(_0x4d23d8.cover, _0x4d23d8.title, window.config.psProd + "号商品自动拉满库存并预热成功", "#2cdf4dff", _0x414e9e.data.detail_map[_0x49b8a9].stock_info.left_channel_num, parseInt(_0x4d23d8.price_desc.min_price.integer, 10)));
    }
  }
}
async function autoqingkong(_0x2692ea, _0x440c49) {
  const _0x557bd1 = {
    promotion_ids: [_0x2692ea],
    need_sku_detail: true,
    need_stock_info: true
  };
  window.openLoading("自动清空库存中...");
  const _0x820215 = await fetch("https://buyin.jinritemai.com/api/author/livepc/exclusive_channel_product_detail", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(_0x557bd1)
  });
  const _0x41c631 = await _0x820215.json();
  if (_0x41c631?.["code"] !== 0 || !_0x41c631?.["data"]?.["detail_map"]?.[_0x2692ea]) {
    window.closeLoading();
    createZtCard(_0x440c49.cover, _0x440c49.title, "1号商品自动清除库存失败，sku获取失败", "#f64242ff", parseInt(_0x440c49.stock_num, 10), parseInt(_0x440c49.price_desc.min_price.integer, 10));
    throw new Error("接口异常或 promotionId " + _0x2692ea + " 不存在");
  }
  const _0x5c3549 = _0x41c631.data.detail_map[_0x2692ea];
  const _0x267fed = {
    promotion_id: _0x2692ea,
    stock_type: 1,
    sku_on_shelf_stocks: _0x5c3549.sku_details.map(_0x3a5aab => ({
      sku_id: _0x3a5aab.sku_id,
      on_shelf_stock: 0
    }))
  };
  const _0x3fed07 = await fetch("https://buyin.jinritemai.com/api/author/livepc/exclusive_channel_product_stock", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(_0x267fed)
  });
  const _0x96a4b6 = await _0x3fed07.json();
  console.log(_0x96a4b6);
  if (_0x96a4b6?.["code"] !== 0) {
    window.closeLoading();
    createZtCard(_0x440c49.cover, _0x440c49.title, "1号商品自动清除库存失败", "#f64242ff", parseInt(_0x440c49.stock_num, 10), parseInt(_0x440c49.price_desc.min_price.integer, 10));
    throw new Error("接口异常");
  } else {
    window.closeLoading();
    createZtCard(_0x440c49.cover, _0x440c49.title, "1号商品自动清除库存成功", "#2cdf4dff", parseInt(_0x440c49.stock_num, 10), parseInt(_0x440c49.price_desc.min_price.integer, 10));
  }
}
function toautoqingkong(_0x4e787d, _0x33abbd) {
  if (_0x33abbd.title) {
    if (lastId != _0x4e787d) {
      lastId = _0x4e787d;
      const _0x4575c8 = window.shaixuansp.some(_0x26c024 => _0x26c024.promotion_id === _0x4e787d);
      if (_0x4575c8) {
        console.log("选择的商品中包含promotion_id:", _0x4e787d);
        createZtCard(_0x33abbd.cover, _0x33abbd.title, "1号商品在排除名单已跳过", "#2cdf4dff");
        return;
      } else {
        console.log("选择的商品中不包含promotion_id:", _0x4e787d);
        lastId = _0x4e787d;
        const _0x3099a7 = promotions3.find(_0x1adf6c => _0x1adf6c.promotion_id === _0x4e787d);
        if (!_0x3099a7 || !_0x3099a7.is_kol_exclusive_channel_product) {
          return;
        }
        console.log("清理" + _0x4e787d);
        setTimeout(() => autoqingkong(_0x4e787d, _0x33abbd), window.config.csDelay);
      }
    }
  }
}
const fmtPrice = _0x272eac => (_0x272eac / 100).toFixed(2);
document.addEventListener("keydown", _0x1c97ec => {
  const _0xb0dabc = performance.now();
  if (_0xb0dabc - lastKeyTime > 500) {
    buffer = "";
  }
  lastKeyTime = _0xb0dabc;
  if (_0x1c97ec.key === "Enter" || _0x1c97ec.key === "Tab") {
    buffer.trim().length >= 5 && (vipuser ? window.queryProduct(buffer) : showToast("<span style=\"color:red;\">您的会员已过期，请加群12345678991充值</span>"));
    buffer = "";
    _0x1c97ec.preventDefault();
    return;
  }
  if (_0x1c97ec.key.length > 1) {
    return;
  }
  buffer += _0x1c97ec.key;
});
function createCard(_0x8fb280) {
  if (_0x8fb280.filter_status_msg.includes("失")) {
    createZtCard(window.item.new_cover, window.item.title, "添加小黄车失败" + _0x8fb280.filter_status_msg, "#fc0606ff");
    return;
  }
  const _0x487a1b = document.createElement("div");
  _0x487a1b.style.cssText = "border:1px solid #eee;border-radius:6px;margin-bottom:8px;padding:8px;position:relative";
  _0x487a1b.innerHTML = "\n      <button class=\"close\" style=\"position:absolute;right:4px;top:2px;border:none;background:none;font-size:16px;cursor:pointer;\">×</button>\n      <img src=\"" + _0x8fb280.new_cover + "\" style=\"width:60px;height:60px;float:left;margin-right:8px;border-radius:4px\">\n      <div style=\"margin-left:68px;\">\n        <div style=\"font-weight:bold\">" + _0x8fb280.title + "</div>\n        <div style=\"color:#e62828\">到手价 ￥" + fmtPrice(_0x8fb280.price) + "</div>\n        <div style=\"color:#666\">佣金 " + (_0x8fb280.cos_ratio || 0) + "% · 库存 " + _0x8fb280.stock_num_sum + "</div>\n        <div style=\"color:#52c41a\">" + _0x8fb280.filter_status_msg + "</div>\n      </div>\n      <div style=\"clear:both\"></div>\n    ";
  _0x487a1b.querySelector(".close").onclick = () => {
    _0x487a1b.remove();
    toggleBox();
  };
  box.appendChild(_0x487a1b);
  _0x487a1b.classList.add("slide-in");
  _0x487a1b.addEventListener("animationend", () => _0x487a1b.classList.remove("slide-in"));
  setTimeout(() => {
    _0x487a1b.remove();
    toggleBox();
  }, 3000);
  toggleBox();
}
const _0x2e51fb = {
  price: 590,
  cos_ratio: 0,
  stock_num_sum: 0
};
window.item = _0x2e51fb;
function createxhcZtCard(_0x4ad992, _0xe40a8b, _0x3d81ee, _0x1b0b97) {
  const _0x40cfb4 = document.createElement("div");
  _0x40cfb4.style.cssText = "border:1px solid #eee;border-radius:6px;margin-bottom:8px;padding:8px;position:relative";
  _0x40cfb4.innerHTML = "\n      <button class=\"close\" style=\"position:absolute;right:4px;top:2px;border:none;background:none;font-size:16px;cursor:pointer;\">×</button>\n      <img src=\"" + _0x4ad992 + "\" style=\"width:60px;height:60px;float:left;margin-right:8px;border-radius:4px\">\n      <div style=\"margin-left:68px;\">\n        <div style=\"font-weight:bold\">" + _0xe40a8b + "</div>\n        <div style=\"color:#e62828\">到手价 ￥" + fmtPrice(window.item.price) + "</div>\n        <div style=\"color:#666\">佣金 " + (window.item.cos_ratio || 0) + "% · 库存 " + window.item.stock_num_sum + "</div>\n        <div style=\"color:" + _0x1b0b97 + "\">" + _0x3d81ee + "</div>\n      </div>\n      <div style=\"clear:both\"></div>\n    ";
  _0x40cfb4.querySelector(".close").onclick = () => {
    _0x40cfb4.remove();
    toggleBox();
  };
  box.appendChild(_0x40cfb4);
  _0x40cfb4.classList.add("slide-in");
  _0x40cfb4.addEventListener("animationend", () => _0x40cfb4.classList.remove("slide-in"));
  setTimeout(() => {
    _0x40cfb4.remove();
    toggleBox();
  }, 3000);
  toggleBox();
}
window.queryProduct = async function (_0x4b3f52) {
  try {
    const _0x3f43e7 = await fetch("https://buyin.jinritemai.com/pc/selection_tool/batch_link?ewid=3836609752043385&seraph_did=3836609752043385&urls=" + encodeURIComponent("https://haohuo.jinritemai.com/ecommerce/trade/detail/index.html?id=" + _0x4b3f52 + "&origin_type=604"), {
      method: "GET",
      headers: {
        priority: "u=1, i",
        referer: "https://buyin.jinritemai.com/dashboard/live/control",
        "sec-ch-ua": "\"Not;A=Brand\";v=\"99\", \"Microsoft Edge\";v=\"139\", \"Chromium\";v=\"139\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        accept: "application/json, text/plain, */*",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"
      }
    });
    const _0x22c365 = await _0x3f43e7.json();
    if (_0x22c365.code === 0) {
      if ((_0x22c365.data.batch_shop_manage_promotions?.[0]?.["filter_status_msg"] ?? "").includes("失败")) {
        createxhcZtCard(sb, "操作失败", _0x22c365.data.batch_shop_manage_promotions?.[0]?.["filter_status_msg"] ?? "", "#fc0606ff");
        return;
      }
      const _0x3efcf4 = _0x22c365.data.batch_shop_manage_promotions[0];
      window.item = _0x3efcf4;
      if (!_0x3efcf4 || !("live_add_enum" in _0x3efcf4)) {
        const _0x49f10d = "https://buyin.jinritemai.com/pc/live/bind";
        const _0x3fdcc2 = {
          promotion_id: _0x3efcf4.promotion_id,
          bind_source: "0",
          product_id: _0x3efcf4.product_id,
          item_type: _0x3efcf4.item_type
        };
        const _0x5727ba = {
          promotions: [_0x3fdcc2],
          auction_campaign_id: ""
        };
        const _0x5a09f4 = {
          priority: "u=1, i",
          referer: "https://buyin.jinritemai.com/dashboard/live/control",
          "sec-ch-ua": "\"Not;A=Brand\";v=\"99\", \"Microsoft Edge\";v=\"139\", \"Chromium\";v=\"139\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          accept: "application/json, text/plain, */*",
          "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
          "content-type": "application/json",
          origin: "https://buyin.jinritemai.com",
          "x-secsdk-csrf-token": window.csrfToken
        };
        try {
          const _0xe3b216 = await fetch(_0x49f10d, {
            method: "POST",
            headers: _0x5a09f4,
            body: JSON.stringify(_0x5727ba)
          });
          const _0x3d3714 = await _0xe3b216.json();
          if (_0x3d3714.data && _0x3d3714.data.success_count > 0) {
            createxhcZtCard(window.item.new_cover, window.item.title, "添加小黄车成功", "#52c41a");
            window.config.autoPop ? (!pdjj && (jiangxhcjie(), window.workerCtrl.start()), jiangxhcjie()) : (pdjj = false, window.workerCtrl.stop());
            const _0x3886b1 = "https://buyin.jinritemai.com/api/anchor/livepc/basic_list?ewid=3836609752043385&seraph_did=3836609752043385";
            if (window.config.autoDel) {
              if (window.config.autoDelRule == "rule2") {
                try {
                  let _0x2201ed = {
                    promotions: [{
                      promotion_id: window.splistid[Number(window.config.delN2) - 1].promotion_id
                    }]
                  };
                  let _0x370dd4 = Number(window.config.maxP2);
                  if (window.fudai != false) {
                    _0x370dd4 = Number(window.config.maxP2) + 1;
                    if (!(window.fudai > window.config.delN2)) {
                      createxhcZtCard(cg, "检测成功", "检查测到范围内有福袋，已不算福袋为商品数", "#52c41a");
                      _0x2201ed = {
                        promotions: [{
                          promotion_id: window.splistid[Number(window.config.delN2)].promotion_id
                        }]
                      };
                    }
                  }
                  if (window.splistid.length >= _0x370dd4) {
                    try {
                      const _0x2ac631 = await fetch("https://buyin.jinritemai.com/pc/live/unbind", {
                        method: "POST",
                        headers: _0x5a09f4,
                        body: JSON.stringify(_0x2201ed)
                      });
                      const _0x334781 = await _0x2ac631.json();
                      if (_0x334781.code === 0) {
                        _0x370dd4 = Number(window.config.maxP2);
                        _0x2201ed = {
                          promotions: [{
                            promotion_id: window.splistid[Number(window.config.delN2) - 1].promotion_id
                          }]
                        };
                        if (window.splistid.length >= _0x370dd4) {
                          const _0x1c4b29 = await fetch("https://buyin.jinritemai.com/pc/live/unbind", {
                            method: "POST",
                            headers: _0x5a09f4,
                            body: JSON.stringify(_0x2201ed)
                          });
                        }
                        createxhcZtCard(cg, "操作成功", "下架商品成功", "#52c41a");
                      } else {
                        console.log(_0x334781);
                        createxhcZtCard(sb, "操作失败", "下架商品失败", "#fc0606ff");
                      }
                    } catch (_0x12b2d7) {
                      console.log(_0x12b2d7);
                      createxhcZtCard(sb, "操作失败", "下架商品失败", "#fc0606ff");
                    }
                  } else {
                    console.log("当前商品：", window.splistid.length, "未超过 " + Number(window.config.maxP2) + "个");
                    createxhcZtCard(cg, "无需操作", "当前商品条数：" + window.splistid.length + "未超过" + Number(window.config.maxP2), "#52c41a");
                  }
                } catch (_0x409830) {
                  console.log(_0x409830);
                  createxhcZtCard(sb, "操作失败", _0x409830, "#fc0606ff");
                }
              } else {
                try {
                  const _0x3ccfae = await fetch(_0x3886b1, {
                    method: "GET",
                    headers: {
                      accept: "application/json, text/plain, */*",
                      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"
                    }
                  });
                  const _0x420a49 = await _0x3ccfae.json();
                  const _0x208043 = _0x420a49.data?.["basic_list"] || [];
                  if (_0x208043.length > Number(window.config.maxP)) {
                    const _0x1dd9f6 = _0x208043.slice(-Number(window.config.delN));
                    const _0x321281 = {
                      promotions: _0x1dd9f6.map(_0x5a0435 => ({
                        promotion_id: _0x5a0435.promotion_id
                      }))
                    };
                    try {
                      console.log(_0x321281);
                      const _0x358f4f = await fetch("https://buyin.jinritemai.com/pc/live/unbind", {
                        method: "POST",
                        headers: _0x5a09f4,
                        body: JSON.stringify(_0x321281)
                      });
                      const _0x53c55c = await _0x358f4f.json();
                      _0x53c55c.code === 0 ? createxhcZtCard(cg, "操作成功", "下架商品成功", "#52c41a") : createxhcZtCard(sb, "操作失败", "下架商品失败", "#fc0606ff");
                    } catch (_0x4f6a7a) {
                      createxhcZtCard(sb, "操作失败", "下架商品失败", "#fc0606ff");
                    }
                  } else {
                    console.log("当前商品：", _0x208043.length, "未超过 " + Number(window.config.maxP) + "个");
                    createxhcZtCard(cg, "无需操作", "当前商品条数：" + _0x208043.length + "未超过" + Number(window.config.maxP), "#52c41a");
                  }
                } catch (_0x86a5d) {
                  createxhcZtCard(sb, "操作失败", "下架最后一个商品失败", "#fc0606ff");
                }
              }
            }
          } else {
            if (_0x3d3714.msg === "") {
              createxhcZtCard(window.item.new_cover, window.item.title, _0x3d3714.data?.["failure_list"]?.[0]?.["bind_reason"], "#fc0606ff");
              return;
            }
            createxhcZtCard(window.item.new_cover, window.item.title, _0x3d3714.msg, "#fc0606ff");
          }
        } catch (_0x2f6205) {
          console.log(_0x2f6205);
          createxhcZtCard(window.item.new_cover, window.item.title, "添加小黄车失败1", "#fc0606ff");
        }
      } else {
        createxhcZtCard(window.item.new_cover, window.item.title, "添加小黄车失败" + window.item.live_add_enum, "#fc0606ff");
      }
    } else {
      createxhcZtCard(window.item.new_cover, window.item.title, "添加小黄车失败2", "#fc0606ff");
    }
  } catch (_0x4ef17) {
    console.log(_0x4ef17);
    createxhcZtCard(sb, "识别二维码失败", _0x4ef17, "#fc0606ff");
  }
};
let pdjj = false;
async function jiangxhcjie() {
  if (window.config.autoPop) {
    console.log("讲解。。。。。。。。");
    try {
      const _0x3428b9 = await fetch("https://buyin.jinritemai.com/api/anchor/livepc/setcurrent", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          origin: "https://buyin.jinritemai.com",
          priority: "u=1, i",
          referer: "https://buyin.jinritemai.com/dashboard/live/control",
          "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Microsoft Edge\";v=\"134\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "x-secsdk-csrf-token": window.csrfToken,
          accept: "application/json, text/plain, */*",
          "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"
        },
        body: JSON.stringify(createPostData(window.item.promotion_id, "false"))
      });
      const _0x2590de = await _0x3428b9.json();
      _0x2590de.code === 0 ? (pdjj = true, createxhcZtCard(window.item.new_cover, "操作成功", "讲解商品成功", "#52c41a")) : createxhcZtCard(window.item.new_cover, "操作失败", "讲解商品失败" + _0x2590de.msg, "#fc0606ff");
    } catch (_0x10e2ae) {
      createxhcZtCard(window.item.new_cover, "操作失败", "讲解商品失败", "#fc0606ff");
    }
  } else {
    pdjj = false;
    window.workerCtrl.stop();
  }
}
window.runjiangxhcjieWorker = function () {
  const _0x3a99da = "\n      let timer = null;\n\n      const randDelay = () => 8000 + Math.floor(Math.random() * 2000);\n\n      function schedule() {\n        const delay = randDelay();\n        timer = setTimeout(() => {\n          self.postMessage({ type: 'run' });\n          schedule();                // 递归继续\n        }, delay);\n      }\n\n      self.onmessage = (e) => {\n        switch (e.data.cmd) {\n          case 'start':\n            if (!timer) schedule();\n            break;\n          case 'stop':\n            if (timer) {\n              clearTimeout(timer);\n              timer = null;\n            }\n            break;\n        }\n      };\n    ";
  const _0x592636 = {
    type: "application/javascript"
  };
  const _0x541deb = new Blob([_0x3a99da], _0x592636);
  const _0x5e8a67 = new Worker(URL.createObjectURL(_0x541deb));
  _0x5e8a67.onmessage = _0x19094a => {
    _0x19094a.data.type === "run" && (typeof jiangxhcjie === "function" ? jiangxhcjie() : console.warn("[Worker] 页面里找不到 jiangxhcjie()"));
  };
  const _0x19101d = {
    cmd: "start"
  };
  const _0xda7a28 = {
    cmd: "stop"
  };
  return {
    start: () => _0x5e8a67.postMessage(_0x19101d),
    stop: () => _0x5e8a67.postMessage(_0xda7a28)
  };
};
window.workerCtrl = window.runjiangxhcjieWorker();
const szstyle = document.createElement("style");
szstyle.textContent = "\n    :root{\n      --primary:rgb(255,214,214);\n      --primary-dark:#ffffffff;\n      --bg-panel:#ffffffff;\n      --bg-nav:#ffd6d5;\n      --text:#000000ff;\n    }\n    #live-assistant-panel{\n      position:fixed;top:0;right:-30%;width:30%;height:100vh;\n      background:var(--bg-panel);border-left:4px solid var(--primary);\n      box-shadow:-2px 0 12px rgba(0,0,0,.25);\n      transition:right .35s ease;z-index:10000;font-family:'Segoe UI',Arial;\n      display:flex;flex-direction:column;color:var(--text);\n      border-top-left-radius:24px;\n      border-bottom-left-radius:24px;\n      overflow:hidden;\n    }\n    #live-assistant-toggle{\n      position:fixed;top:50%;right:0;transform:translateY(-50%);\n      padding:12px 8px;font-size:13px;font-weight:bold;\n      background:var(--primary);color:#fff;border:none;border-radius:8px 0 0 8px;\n      cursor:pointer;z-index:10001;\n      writing-mode:vertical-rl;\n      letter-spacing:2px;\n      text-orientation:upright;\n      line-height:1.2;\n    }\n    #live-nav{\n      display:flex;justify-content:space-around;align-items:center;\n      background:var(--bg-nav);border-bottom:2px solid var(--primary);\n      padding:10px 0;user-select:none;\n    }\n    .nav-item{\n      flex:1;text-align:center;font-weight:bold;cursor:pointer;\n      padding:8px 0;color:var(--text);position:relative;\n      transition:color .25s;\n    }\n    .nav-item.active{color:var(--primary-dark);}\n    .nav-item.active::after{\n      content:'';position:absolute;left:25%;bottom:-2px;width:50%;height:3px;\n      background:var(--primary);border-radius:2px;\n    }\n    #live-slides{\n      flex:1;position:relative;\n    }\n    .slide{\n      position:absolute;top:0;left:0;width:100%;height:100%;\n      padding:20px;box-sizing:border-box;overflow-y:auto;\n      word-break:break-all;\n      transform:translateX(100%);transition:transform .35s ease;\n      background:var(--bg-panel);\n    }\n    .slide.active{transform:translateX(0);}\n    .slide input[type=number]{width:60px;text-align:center;\n      border:1px solid var(--primary);border-radius:4px;padding:2px 4px;}\n    .slide input[type=radio],.slide input[type=checkbox]{\n      accent-color:var(--primary);margin-right:4px;}\n    .hidden{display:none;}\n\n\t /* 用户信息栏样式 */\n    #user-info-bar {\n        background: linear-gradient(135deg, #ffd6d5 0%, #e52c2cd5  100%);\n        color: white;\n        padding: 12px 16px;\n        border-bottom: 1px solid rgba(255,255,255,0.2);\n    }\n     .zhuclose-btn {\n        position: absolute;\n        top: 0px;\n        right: 0px;\n        width: 30px;\n        height: 30px;\n        background: #e74c3c;\n        border: none;\n        border-radius: 50%;\n        color: white;\n        font-size: 18px;\n        font-weight: bold;\n        cursor: pointer;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        box-shadow: 0 2px 5px rgba(0,0,0,0.2);\n        transition: all 0.3s ease;\n        z-index: 10;\n    }\n    \n    .zhuclose-btn:hover {\n        background: #c0392b;\n        transform: scale(1.1);\n    }\n    .user-info-content {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        flex-wrap: wrap;\n        gap: 12px;\n    }\n    \n    .user-status {\n        display: flex;\n        flex-direction: column;\n        gap: 4px;\n        font-size: 12px;\n    }\n    \n    .vip-status {\n        font-weight: bold;\n        font-size: 13px;\n    }\n    \n    .expire-date {\n        opacity: 0.9;\n        font-size: 11px;\n    }\n    \n    .user-actions {\n        display: flex;\n        gap: 8px;\n        flex-wrap: wrap;\n    }\n    \n    .action-btn {\n        padding: 6px 12px;\n        border: none;\n        border-radius: 4px;\n        font-size: 11px;\n        cursor: pointer;\n        transition: all 0.3s ease;\n        font-weight: 500;\n    }\n    \n    .recharge-btn {\n        background: #ff6b6b;\n        color: white;\n    }\n    \n    .recharge-btn:hover {\n        background: #ff5252;\n        transform: translateY(-1px);\n        box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);\n    }\n    \n    .refresh-btn {\n        background: rgba(255, 255, 255, 0.2);\n        color: white;\n        border: 1px solid rgba(255, 255, 255, 0.3);\n    }\n    \n    .refresh-btn:hover {\n        background: rgba(255, 255, 255, 0.3);\n        transform: translateY(-1px);\n    }\n    \n    .invite-btn {\n        background: #51cf66;\n        color: white;\n    }\n    \n    .invite-btn:hover {\n        background: #40c057;\n        transform: translateY(-1px);\n        box-shadow: 0 2px 8px rgba(81, 207, 102, 0.3);\n    }\n    \n    /* 主面板样式 */\n    #live-assistant-panel {\n        position: fixed;\n        top: 0;\n        right: -30%;\n        width: 30%;\n        height: 100vh;\n        background: var(--bg-panel);\n        border-left: 4px solid var(--primary);\n        box-shadow: -2px 0 12px rgba(0,0,0,.25);\n        transition: right .35s ease;\n        z-index: 10000;\n        font-family: 'Segoe UI', Arial;\n        display: flex;\n        flex-direction: column;\n        color: var(--text);\n        border-top-left-radius: 24px;\n        border-bottom-left-radius: 24px;\n        overflow: hidden;\n    }\n    \n    #live-assistant-toggle {\n        position: fixed;\n        top: 50%;\n        right: 0;\n        transform: translateY(-50%);\n        padding: 12px 8px;\n        font-size: 13px;\n        font-weight: bold;\n        background: var(--primary);\n        color: #fff;\n        border: none;\n        border-radius: 8px 0 0 8px;\n        cursor: pointer;\n        z-index: 10001;\n        writing-mode: vertical-rl;\n        letter-spacing: 2px;\n        text-orientation: upright;\n        line-height: 1.2;\n    }\n    \n    #live-nav {\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n        background: var(--bg-nav);\n        border-bottom: 2px solid var(--primary);\n        padding: 10px 0;\n        user-select: none;\n        flex-shrink: 0;\n    }\n    \n    .nav-item {\n        flex: 1;\n        text-align: center;\n        font-weight: bold;\n        cursor: pointer;\n        padding: 8px 0;\n        color: var(--text);\n        position: relative;\n        transition: color .25s;\n        font-size: 12px;\n    }\n    \n    .nav-item.active {\n        color: var(--primary-dark);\n    }\n    \n    .nav-item.active::after {\n        content: '';\n        position: absolute;\n        left: 25%;\n        bottom: -2px;\n        width: 50%;\n        height: 3px;\n        background: var(--primary);\n        border-radius: 2px;\n    }\n    \n    #live-slides {\n        flex: 1;\n        position: relative;\n        overflow: hidden;\n    }\n    \n    .slide {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        padding: 20px;\n        box-sizing: border-box;\n        overflow-y: auto;\n        word-break: break-all;\n        transform: translateX(100%);\n        transition: transform .35s ease;\n        background: var(--bg-panel);\n    }\n    \n    .slide.active {\n        transform: translateX(0);\n    }\n    \n    .slide input[type=\"number\"] {\n        width: 60px;\n        text-align: center;\n        border: 1px solid var(--primary);\n        border-radius: 4px;\n        padding: 2px 4px;\n    }\n    \n    .slide input[type=\"radio\"],\n    .slide input[type=\"checkbox\"] {\n        accent-color: var(--primary);\n        margin-right: 4px;\n    }\n    \n    .hidden {\n        display: none;\n    }\n    \n    /* 响应式设计 */\n    @media (max-width: 768px) {\n        #live-assistant-panel {\n            width: 90%;\n            right: -90%;\n        }\n        \n        .user-info-content {\n            flex-direction: column;\n            align-items: stretch;\n            text-align: center;\n        }\n        \n        .user-actions {\n            justify-content: center;\n        }\n        \n        .nav-item {\n            font-size: 11px;\n            padding: 6px 2px;\n        }\n    }\n\t\t .desc-weishi {\n            color: #666;\n            font-size: 12px;\n            margin: -8px 0 12px 0;\n            line-height: 1.4;\n        }\n        \n        .control-row-weishi {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            margin-bottom: 15px;\n            padding: 12px;\n            background: #f8f9fa;\n            border-radius: 6px;\n        }\n        \n        .switch-label-weishi {\n            display: flex;\n            align-items: center;\n            cursor: pointer;\n        }\n        \n        .switch-label-weishi input[type=\"checkbox\"] {\n            display: none;\n        }\n        \n        .slider-weishi {\n            width: 40px;\n            height: 20px;\n            background-color: #ccc;\n            border-radius: 20px;\n            position: relative;\n            transition: background-color 0.3s;\n            margin-right: 8px;\n        }\n        \n        .slider-weishi:before {\n            content: \"\";\n            position: absolute;\n            width: 16px;\n            height: 16px;\n            border-radius: 50%;\n            background-color: white;\n            top: 2px;\n            left: 2px;\n            transition: transform 0.3s;\n        }\n        \n        .switch-label-weishi input:checked + .slider-weishi {\n            background-color: #4CAF50;\n        }\n        \n        .switch-label-weishi input:checked + .slider-weishi:before {\n            transform: translateX(20px);\n        }\n        \n        .switch-text-weishi {\n            font-weight: 500;\n            color: #333;\n        }\n        \n        .add-btn-weishi {\n            background: #007bff;\n            color: white;\n            border: none;\n            border-radius: 4px;\n            padding: 8px 16px;\n            cursor: pointer;\n            font-size: 13px;\n        }\n        \n        .add-btn-weishi:hover {\n            background: #0056b3;\n        }\n        \n        .rules-list-weishi {\n            border: 1px solid #e9ecef;\n            border-radius: 6px;\n            min-height: 200px;\n            max-height: 300px;\n            overflow-y: auto;\n            margin-bottom: 15px;\n        }\n        \n        .empty-state-weishi {\n            text-align: center;\n            color: #6c757d;\n            padding: 40px 20px;\n        }\n        \n        .rule-item-weishi {\n            padding: 12px;\n            border-bottom: 1px solid #f0f0f0;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n        \n        .rule-item-weishi:last-child {\n            border-bottom: none;\n        }\n        \n        .rule-info-weishi {\n            flex: 1;\n        }\n        \n        .rule-word-weishi {\n            font-weight: bold;\n            color: #dc3545;\n            background: #fff5f5;\n            padding: 2px 6px;\n            border-radius: 3px;\n            display: inline-block;\n            margin-bottom: 5px;\n        }\n        \n        .rule-settings-weishi {\n            font-size: 12px;\n            color: #6c757d;\n        }\n        \n        .rule-actions-weishi {\n            display: flex;\n            gap: 5px;\n        }\n        \n        .edit-btn-weishi, .delete-btn-weishi {\n            padding: 4px 8px;\n            border: none;\n            border-radius: 3px;\n            cursor: pointer;\n            font-size: 11px;\n        }\n        \n        .edit-btn-weishi {\n            background: #ffc107;\n            color: #212529;\n        }\n        \n        .delete-btn-weishi {\n            background: #dc3545;\n            color: white;\n        }\n             .logs-section-weishi {\n            margin-top: 20px;\n            border: 1px solid #e9ecef;\n            border-radius: 8px;\n            overflow: hidden;\n        }\n        \n        .logs-header-weishi {\n            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\n            padding: 12px 15px;\n            border-bottom: 1px solid #dee2e6;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n        \n        .logs-header-weishi h4 {\n            margin: 0;\n            font-size: 14px;\n            font-weight: 600;\n            color: #495057;\n        }\n        \n        .logs-controls-weishi {\n            display: flex;\n            align-items: center;\n            gap: 10px;\n        }\n        \n        .logs-info-weishi {\n            font-size: 11px;\n            color: #6c757d;\n        }\n        \n        .clear-logs-btn-weishi {\n            background: #6c757d;\n            color: white;\n            border: none;\n            border-radius: 4px;\n            padding: 4px 8px;\n            font-size: 11px;\n            cursor: pointer;\n        }\n        \n        .clear-logs-btn-weishi:hover {\n            background: #5a6268;\n        }\n        \n        .logs-list-weishi {\n            max-height: 200px;\n            overflow-y: auto;\n            background: #fafafa;\n        }\n        \n        .empty-logs-weishi {\n            text-align: center;\n            color: #6c757d;\n            padding: 30px 20px;\n            font-size: 13px;\n        }\n        \n        .log-item-weishi {\n            padding: 10px 15px;\n            border-bottom: 1px solid #f0f0f0;\n            display: flex;\n            align-items: center;\n            gap: 10px;\n            transition: background 0.2s;\n        }\n        \n        .log-item-weishi:hover {\n            background: #f8f9fa;\n        }\n        \n        .log-item-weishi:last-child {\n            border-bottom: none;\n        }\n        \n        .log-icon-weishi {\n            width: 24px;\n            height: 24px;\n            border-radius: 50%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            font-size: 12px;\n            flex-shrink: 0;\n        }\n        \n        .log-icon-mute-weishi {\n            background: #ffe6e6;\n            color: #dc3545;\n        }\n        \n        .log-icon-flood-weishi {\n            background: #e6f3ff;\n            color: #007bff;\n        }\n        \n        .log-content-weishi {\n            flex: 1;\n        }\n        \n        .log-action-weishi {\n            font-weight: 600;\n            font-size: 13px;\n            margin-bottom: 2px;\n        }\n        \n        .log-mute-weishi {\n            color: #dc3545;\n        }\n        \n        .log-flood-weishi {\n            color: #007bff;\n        }\n        \n        .log-details-weishi {\n            font-size: 11px;\n            color: #6c757d;\n            line-height: 1.3;\n        }\n        \n        .log-time-weishi {\n            font-size: 10px;\n            color: #adb5bd;\n            white-space: nowrap;\n        }\n        \n        .log-highlight-weishi {\n            background: #fff3cd;\n            border-left: 3px solid #ffc107;\n        }\n  ";
document.head.appendChild(szstyle);
const panel = document.createElement("div");
panel.id = "live-assistant-panel";
document.body.appendChild(panel);
const toggleBtn = document.createElement("button");
toggleBtn.id = "live-assistant-toggle";
toggleBtn.innerHTML = "插件设置";
document.body.appendChild(toggleBtn);
const userInfoBar = document.createElement("div");
userInfoBar.id = "user-info-bar";
userInfoBar.innerHTML = "\n    <div class=\"user-info-content\">\n    <button class=\"zhuclose-btn\" id=\"zhuclose-panel\">&times;</button>\n        <div class=\"user-status\">\n            <span class=\"vip-status\" id=\"vip-status\">请先登录中控台后才能继续操作</span>\n            <span class=\"expire-date\" id=\"expire-date\">如果已经登录请打开中控台网址后刷新网页重试</span>\n        </div>\n        <div class=\"user-actions\">\n            <button class=\"action-btn recharge-btn\" id=\"recharge-btn\">充值</button><br>\n            <button class=\"action-btn refresh-btn\" id=\"refresh-btn\">刷新会员状态</button><br>\n            <button class=\"action-btn refresh-btn\" id=\"qiehuanlogin\">登录灵活账号</button><br>\n            <button class=\"action-btn invite-btn\"\" id=\"zhuanhuan\" style=\"display: none;\">余额转入当前账号</button>\n            <button class=\"action-btn invite-btn\" id=\"invite-btn\" style=\"display: none;\">拉新免费得会员</button>\n        </div>\n    </div>\n";
panel.appendChild(userInfoBar);
const nav = document.createElement("div");
nav.id = "live-nav";
const _0x2fdfd8 = {
  text: "扫码添加小黄车",
  icon: "📱"
};
const _0x47db4e = {
  text: "自动中控",
  icon: "⚙️"
};
const _0x274e3f = {
  text: "定时回复公屏",
  icon: "⏰"
};
const _0x180c2c = {
  text: "自动发福袋",
  icon: "🎁"
};
const _0x590106 = {
  text: "商品计划任务",
  icon: "📦"
};
const _0x4169f7 = {
  text: "ROI计算器",
  icon: "📊"
};
const _0x32a10e = {
  text: "直播间卫士",
  icon: "🛡️"
};
const navItems = [_0x2fdfd8, _0x47db4e, _0x274e3f, _0x180c2c, _0x590106, _0x4169f7, _0x32a10e];
navItems.forEach((_0x18f5e7, _0xb74feb) => {
  const _0x3e73a1 = document.createElement("span");
  _0x3e73a1.className = "nav-item";
  _0x3e73a1.dataset.idx = _0xb74feb;
  _0xb74feb === 3 && (_0x3e73a1.id = "fudai-nav");
  const _0x4b08e3 = document.createElement("span");
  _0x4b08e3.className = "nav-icon";
  _0x4b08e3.textContent = _0x18f5e7.icon;
  const _0x8e5fb = document.createElement("span");
  _0x8e5fb.className = "nav-text";
  _0x8e5fb.textContent = _0x18f5e7.text;
  _0x3e73a1.appendChild(_0x4b08e3);
  _0x3e73a1.appendChild(_0x8e5fb);
  nav.appendChild(_0x3e73a1);
});
panel.appendChild(nav);
const slidesContainer = document.createElement("div");
slidesContainer.id = "live-slides";
const slides = [];
for (let i = 0; i < 7; i++) {
  const slide = document.createElement("div");
  slide.className = "slide";
  slidesContainer.appendChild(slide);
  slides.push(slide);
}
panel.appendChild(slidesContainer);
const navStyle = document.createElement("style");
navStyle.textContent = "\n    #live-nav {\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n        background: #f8f9fa;\n        border-bottom: 2px solid #e9ecef;\n        padding: 10px 0;\n        user-select: none;\n    }\n    \n    .nav-item {\n        flex: 1;\n        text-align: center;\n        font-weight: bold;\n        cursor: pointer;\n        padding: 8px 0;\n        color: #495057;\n        position: relative;\n        transition: color 0.25s;\n        font-size: 12px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 4px;\n    }\n    \n    .nav-item.active {\n        color: #6a11cb;\n    }\n    \n    .nav-item.active::after {\n        content: '';\n        position: absolute;\n        left: 25%;\n        bottom: -2px;\n        width: 50%;\n        height: 3px;\n        background: #6a11cb;\n        border-radius: 2px;\n    }\n    \n    .nav-icon {\n        font-size: 16px;\n    }\n    \n    .nav-text {\n        font-size: 11px;\n        line-height: 1.2;\n    }\n    \n    #live-slides {\n        flex: 1;\n        position: relative;\n        overflow: hidden;\n        height: 400px; /* 设置固定高度 */\n    }\n    \n    .slide {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        padding: 20px;\n        box-sizing: border-box;\n        overflow-y: auto;\n        word-break: break-all;\n        display: none; /* 默认隐藏所有幻灯片 */\n    }\n    \n    .slide.active {\n        display: block; /* 激活的幻灯片显示 */\n    }\n    \n    /* 新功能提示样式 */\n    .new-feature-hint-containernew {\n        position: absolute;\n        z-index: 1000;\n    }\n    \n    .new-feature-dotnew {\n        position: relative;\n        width: 8px;\n        height: 8px;\n        background: linear-gradient(135deg, #ff4757 0%, #ff3838 100%);\n        border-radius: 50%;\n        cursor: pointer;\n        box-shadow: 0 0 10px rgba(255, 71, 87, 0.5);\n    }\n    \n    .new-feature-dotnew.pulse {\n        animation: pulse-dotnew 2s infinite;\n    }\n    \n    .new-feature-labelnew {\n        position: absolute;\n        top: -20px;\n        left: 50%;\n        transform: translateX(-50%);\n        background: linear-gradient(135deg, #ff4757 0%, #ff3838 100%);\n        color: white;\n        font-size: 9px;\n        padding: 2px 6px;\n        border-radius: 10px;\n        white-space: nowrap;\n        animation: bounce-labelnew 2s infinite;\n    }\n    \n    @keyframes pulse-dotnew {\n        0% {\n            transform: scale(1);\n            box-shadow: 0 0 0 0 rgba(255, 71, 87, 0.7);\n        }\n        50% {\n            transform: scale(1.1);\n            box-shadow: 0 0 0 5px rgba(255, 71, 87, 0);\n        }\n        100% {\n            transform: scale(1);\n            box-shadow: 0 0 0 0 rgba(255, 71, 87, 0);\n        }\n    }\n    \n    @keyframes bounce-labelnew {\n        0%, 100% {\n            transform: translateX(-50%) translateY(0);\n        }\n        50% {\n            transform: translateX(-50%) translateY(-3px);\n        }\n    }\n";
document.head.appendChild(navStyle);
slides[0].innerHTML = "\n    <h3>扫码添加小黄车</h3>\n\t<hr>\n\t\n\t<hr>\n\t<p>需要有扫码枪和生成的二维码 </p>\n    <label><input type=\"checkbox\" class=\"toggle-cb\" id=\"autoPop\"> 上车后自动商品弹窗</label><br>\n    <label><input type=\"checkbox\" class=\"toggle-cb\" id=\"autoDel\"> 开启自动删除商品功能</label>\n <div class=\"hidden toggle-target\" data-toggle=\"autoDel-true\">\n  <br>\n  <label>\n    <input type=\"radio\" name=\"autoDelRule\" value=\"rule1\" checked> 规则一：\n  </label>\n  当商品数量超过 <input type=\"number\" id=\"maxP\" value=\"20\" min=\"1\"> 个时，\n  自动删除最后 <input type=\"number\" id=\"delN\" value=\"1\" min=\"1\"> 个\n\n  <br><br>\n\n  <label>\n    <input type=\"radio\" name=\"autoDelRule\" value=\"rule2\"> 规则二：\n  </label>\n  当商品上架后数量超过 <input type=\"number\" id=\"maxP2\" value=\"20\" min=\"1\"> 个时，\n  自动删除上架后的第 <input type=\"number\" id=\"delN2\" value=\"1\" min=\"1\"> 个商品\n</div>\n  ";
slides[1].innerHTML = "\n    <h3>自动中控</h3>\n\n    <!-- 商品弹窗 -->\n    <h4 style=\"margin:12px 0 4px;\">商品弹窗延迟设置</h4>\n    <label>\n      <input type=\"radio\" name=\"ci\" value=\"on\" class=\"toggle-cb\"> 开启\n      <input type=\"radio\" name=\"ci\" value=\"off\" class=\"toggle-cb\" checked> 关闭\n    </label>\n    <div class=\"hidden toggle-target\" data-toggle=\"ci-on\">\n      <br>默认模式在 <input type=\"number\" id=\"minI\" value=\"8.5\" step=\"0.1\" min=\"5\"> ~\n      <input type=\"number\" id=\"maxI\" value=\"9.6\" step=\"0.1\" min=\"5\"> 范围随机间隔\n    </div> \n     <h4 style=\"margin:12px 0 4px;\">商品弹窗模式</h4>\n    <label>\n      <input type=\"radio\" name=\"tan\" value=\"off\" class=\"toggle-cb\"> 一直弹（苹果用户的弹窗不会掉 默认）<br>\n      <input type=\"radio\" name=\"tan\" value=\"on\" class=\"toggle-cb\" checked> 不要一直弹（取消讲解一下后继续）\n    </label>\n\t<hr>\n\t<p>以下功能只有专属的带货渠道品才能有效</p>\n\t\n    <!-- 自动清库存 -->\n    <h4 style=\"margin:18px 0 4px;\">列表更新后自动清空1号商品库存</h4>\n    <input type=\"radio\" name=\"cs\" value=\"on\" class=\"toggle-cb\"> 开启\n    <input type=\"radio\" name=\"cs\" value=\"off\" class=\"toggle-cb\" checked> 关闭\n    <div class=\"hidden toggle-target\" data-toggle=\"cs-on\">\n      <br>延迟 <input type=\"number\" id=\"csDelay\" value=\"800\"> 毫秒执行<br>\n    </div>\n    <br><button id=\"paichuanniuid\" style=\"background-color: #007bff; color: white;\">添加排除商品</button>\n\n    <!-- 自动预热和加库存 -->\n    <h4 style=\"margin:18px 0 4px;\">列表更新后自动预热和加库存</h4>\n    <input type=\"radio\" name=\"ps\" value=\"on\" class=\"toggle-cb\"> 开启\n    <input type=\"radio\" name=\"ps\" value=\"off\" class=\"toggle-cb\" checked> 关闭\n    <div class=\"hidden toggle-target\" data-toggle=\"ps-on\">\n      <br><input type=\"number\" id=\"psProd\" value=\"20\" min=\"1\"> 号商品自动预热加库存\n    </div>\n\n    <!-- 自动开价 -->\n    <h4 style=\"margin:18px 0 4px;\">列表更新后商品自动开价</h4>\n    <input type=\"radio\" name=\"ap\" value=\"on\" class=\"toggle-cb\"> 开启\n    <input type=\"radio\" name=\"ap\" value=\"off\" class=\"toggle-cb\" checked> 关闭\n    <div class=\"hidden toggle-target\" data-toggle=\"ap-on\">\n      <br><input type=\"number\" id=\"apProd\" value=\"70\" min=\"1\"> 号商品自动开价\n    </div>\n\n    <!-- 自动下架 -->\n    <h4 style=\"margin:18px 0 4px;\">列表更新后商品自动下架</h4>\n    <input type=\"radio\" name=\"xj\" value=\"on\" class=\"toggle-cb\"> 开启\n    <input type=\"radio\" name=\"xj\" value=\"off\" class=\"toggle-cb\" checked> 关闭\n    <div class=\"hidden toggle-target\" data-toggle=\"xj-on\">\n      <br>指定商品到达<input type=\"number\" id=\"xjhao\" value=\"50\" min=\"1\"> 号小黄车后自动下架\n    </div>\n    <br><button id=\"zhidinganniuid\" style=\"background-color: #007bff; color: white;\">添加指定商品</button>\n    <br><br><button id=\"yijianxiajia\" style=\"background-color: #007bff; color: white;\">一键下架所有指定商品</button>\n  ";
slides[2].innerHTML = "\n  <h3>定时回复公屏</h3>\n  <p style=\"color:#666;font-size:12px;margin-top:-8px;margin-bottom:12px;\">服务器每天凌晨4:16-4:28会维护重启，需要使用的用户请避开该时段</p>\n  \n  <div class=\"ctrl-row\">\n    <label class=\"lbl\">间隔（秒）\n      <input id=\"interval-input3\" class=\"input\" type=\"number\" min=\"5\" max=\"999\">\n    </label>\n    <label class=\"lbl\">\n      <input id=\"random-chk3\" type=\"checkbox\"> 随机发送\n    </label>\n  </div>\n  \n  <div class=\"ctrl-row\" style=\"margin:10px 0;\">\n    <button id=\"add-btn3\" class=\"btn primary\" style=\"padding:6px 12px;background:#1890ff;color:white;border:none;border-radius:4px;cursor:pointer;\">添加消息</button>\n    <button id=\"start-btn3\" class=\"btn success\" style=\"padding:6px 12px;background:#1890ff;color:white;border:none;border-radius:4px;cursor:pointer;\">开始</button>\n  </div>\n  \n  <ul id=\"msg-list3\" style=\"max-height:200px;overflow:auto;border:1px solid #eee;border-radius:6px;padding:8px;\"></ul>\n";
slides[3].innerHTML = "\n  <h3 id=\"fudaibt\">自动发超级福袋</h3>\n  <p style=\"color:#666;font-size:12px;margin-top:-8px;margin-bottom:12px;\">超级福袋有效 测试中 有疑问或者bug加群1067390852反馈 本人没有条件测试 希望大家多提供反馈 抖店用户已支持</p>\n  \n  <!-- 配置行 -->\n  <div class=\"config-row\">\n    <span>发放频率：开奖后间隔</span>\n    <input type=\"number\" id=\"interval-input8\" value=\"5\" min=\"3\" style=\"width:60px;\">\n    <select id=\"interval-unit8\" style=\"padding:4px;\">\n      <option value=\"seconds\">秒</option>\n      <option value=\"minutes\">分</option>\n    </select>\n    <span style=\"margin-left: auto;\">添加位置</span>\n    <label><input type=\"radio\" name=\"position8\" value=\"top\" checked>顶部</label>\n    <label><input type=\"radio\" name=\"position8\" value=\"bottom\">底部</label>\n  </div>\n\n  <!-- 发放模式 -->\n  <div class=\"config-row\">\n    <span>发放模式：</span>\n    <label><input type=\"radio\" name=\"mode8\" value=\"single\" checked>单福袋循环</label>\n    <label><input type=\"radio\" name=\"mode8\" value=\"multiple\">多福袋循环</label>\n  </div>\n\n\n  <!-- 单福袋循环区域 -->\n  <div id=\"single-mode8\">\n    <div class=\"config-row\">\n      <button id=\"start-single-btn8\" style=\"padding:6px 12px;background:#1890ff;color:white;border:none;border-radius:4px;cursor:pointer;\">开始发放</button>\n      下方列表第\n      <input type=\"text\" id=\"activity-index8\" placeholder=\"填下面的福袋活动序号\" style=\"width: 100px;\" value=\"1\">\n      个活动\n      <button id=\"batch-copy-btn8\" style=\"padding:6px 12px;background:#1890ff;color:white;border:none;border-radius:4px;cursor:pointer;\">批量复制</button>\n      <button id=\"clean-empty-btn8\" style=\"padding:6px 12px;background:#1890ff;color:white;border:none;border-radius:4px;cursor:pointer;\">刷新福袋列表</button>\n    </div>\n  </div>\n  <br>\n  <!-- 批量复制控制区域 -->\n  <div class=\"batch-copy-controls\" id=\"batch-copy-controls8\" style=\"display:none;margin-bottom:10px;\">\n    <div class=\"copy-count-input\" style=\"display:flex;align-items:center;gap:5px;\">\n      <span>复制次数：</span>\n      <input type=\"number\" id=\"copy-count8\" value=\"1\" min=\"1\" style=\"width:50px;\">\n      <button id=\"select-all-btn8\" style=\"padding:6px 12px;background:#1890ff;color:white;border:none;border-radius:4px;cursor:pointer;\">全选</button>\n      <button id=\"start-copy-btn8\" style=\"padding:6px 12px;background:#1890ff;color:white;border:none;border-radius:4px;cursor:pointer;\">开始复制</button>\n    <button id=\"exit-batch-btn8\" style=\"padding:6px 12px;background:#1890ff;color:white;border:none;border-radius:4px;cursor:pointer;\">退出</button>\n    </div>\n    <span class=\"selected-count\" id=\"selected-count8\" style=\"margin-left:10px;color:#666;\">已选择 0 项</span>\n  </div>\n  <!-- 多福袋循环区域 -->\n  <div id=\"multiple-mode8\" style=\"display: none;\">\n    <div id=\"plan-area8\" style=\"border:1px solid #eee;border-radius:4px;padding:8px;margin-bottom:10px;\">\n      <div class=\"config-row\">\n        <span>计划顺序：</span>\n        <div class=\"plan-container\" style=\"display:flex;gap:10px;\">\n          <div class=\"plan-list\" id=\"plan-list8\" style=\"flex:1;display:flex;flex-wrap:wrap;gap:5px;min-height:32px;border:1px dashed #ddd;padding:5px;border-radius:4px;\"></div>\n          <button id=\"clear-plan-btn8\" style=\"padding:4px 8px;background:#1890ff;color:white;border:none;border-radius:4px;cursor:pointer;\">清空</button>\n        </div>\n      </div>\n      <div class=\"plan-sequence\" id=\"plan-sequence8\" style=\"margin-top:5px;font-size:11px;color:#666;\">当前计划序列：</div>\n      <div class=\"config-row\">\n        <button id=\"start-multiple-btn8\" style=\"padding:6px 12px;background:#1890ff;color:white;border:none;border-radius:4px;cursor:pointer;\">开始发放</button>\n      </div>\n      <br>\n      点击下方列表添加计划，计划点击删除，长按拖拽可调整顺序\n    </div>\n  </div>\n\n  <!-- 活动列表 -->\n  <div class=\"activity-list\" id=\"activity-list8\" style=\"max-height:300px;overflow-y:auto;border:1px solid #eee;border-radius:4px;margin-top:10px;\"></div>\n  \n  <!-- 状态指示器 -->\n  <div style=\"margin-top:10px;display:flex;align-items:center;gap:8px;\">\n    <span class=\"status-indicator status-stopped\" id=\"status-indicator8\" style=\"display:inline-block;width:8px;height:8px;border-radius:50%;\"></span>\n    <span id=\"status-text8\">已停止</span>\n  </div>\n ";
slides[4].innerHTML = "\n  <h3>设置商品弹窗任务</h3>\n  <p style=\"color:#666;font-size:12px;margin-top:-8px;margin-bottom:12px;\">可以根据设定的计划 切换不同的商品</p>\n  \n  <div id=\"task-list4\" style=\"max-height:250px;overflow-y:auto;border:1px solid #eee;padding:8px;margin-bottom:8px;\"></div>\n  \n  <div id=\"controls4\" style=\"margin:8px 0;display:flex;gap:8px;align-items:center;\">\n    弹 <input type=\"number\" id=\"event-num4\" min=\"1\" value=\"1\" style=\"width:60px;padding:4px;\">\n    <button id=\"add-event4\" style=\"padding:5px 10px;background:#4CAF50;color:white;border:none;border-radius:3px;cursor:pointer;\">添加</button>\n  </div>\n  \n  <div id=\"interval-controls4\" style=\"margin:8px 0;display:flex;gap:8px;align-items:center;\">\n    持续 <input type=\"number\" id=\"interval-min4\" min=\"0\" value=\"1\" style=\"width:60px;padding:4px;\"> 分钟\n    <button id=\"add-interval-min4\" style=\"padding:5px 10px;background:#4CAF50;color:white;border:none;border-radius:3px;cursor:pointer;\">添加分钟</button>\n  </div>\n  \n  <div id=\"interval-seconds-controls4\" style=\"margin:8px 0;display:flex;gap:8px;align-items:center;\">\n    持续 <input type=\"number\" id=\"interval-sec4\" min=\"0\" value=\"10\" style=\"width:60px;padding:4px;\"> 秒\n    <button id=\"add-interval-sec4\" style=\"padding:5px 10px;background:#4CAF50;color:white;border:none;border-radius:3px;cursor:pointer;\">添加秒</button>\n  </div>\n  \n  <div id=\"loop-control4\" style=\"margin:10px 0;\">\n    <label><input type=\"checkbox\" id=\"loop-check4\"> 循环运行</label>\n  </div>\n  \n  <div id=\"action-controls4\" style=\"margin:8px 0;display:flex;gap:8px;align-items:center;\">\n    <button id=\"run-tasks4\" style=\"padding:5px 10px;background:#2196F3;color:white;border:none;border-radius:3px;cursor:pointer;\">运行</button>\n    <button id=\"clear-tasks4\" style=\"padding:5px 10px;background:#f44336;color:white;border:none;border-radius:3px;cursor:pointer;\">清空</button>\n  </div>\n  \n  <!-- 状态指示器 -->\n  <div style=\"margin-top:10px;display:flex;align-items:center;gap:8px;\">\n    <span class=\"status-indicator4 status-stopped4\" id=\"status-indicator4\" style=\"display:inline-block;width:8px;height:8px;border-radius:50%;background:#ccc;\"></span>\n    <span id=\"status-text4\">已停止</span>\n  </div>\n ";
slides[5].innerHTML = "\n  <h3>ROI计算器</h3>\n  <p style=\"color:#666;font-size:12px;margin-top:-8px;margin-bottom:12px;\">计算保本投产比和实际盈亏</p>\n  \n  <!-- 保本投产比计算 -->\n  <div class=\"section-title-roi\">保本投产比计算</div>\n  \n  <div class=\"compact-row-roi\">\n    <div class=\"form-group-roi\">\n      <label for=\"price-roi\">售价 (元)</label>\n      <input type=\"number\" id=\"price-roi\" step=\"0.01\" placeholder=\"售价\" style=\"width:100%;padding:4px;\">\n    </div>\n    <div class=\"form-group-roi\">\n      <label for=\"cost-roi\">成本 (元)</label>\n      <input type=\"number\" id=\"cost-roi\" step=\"0.01\" placeholder=\"成本\" style=\"width:100%;padding:4px;\">\n    </div>\n  </div>\n  \n  <div class=\"compact-row-roi\">\n    <div class=\"form-group-roi\">\n      <label for=\"shipping-roi\">运费 (元)</label>\n      <input type=\"number\" id=\"shipping-roi\" step=\"0.01\" placeholder=\"运费\" style=\"width:100%;padding:4px;\">\n    </div>\n    <div class=\"form-group-roi\">\n      <label for=\"otherCosts-roi\">其他成本 (元)</label>\n      <input type=\"number\" id=\"otherCosts-roi\" step=\"0.01\" placeholder=\"其他成本\" style=\"width:100%;padding:4px;\">\n    </div>\n  </div>\n  \n  <div class=\"compact-row-roi\">\n    <div class=\"form-group-roi\">\n      <label for=\"refundRate-roi\">退款率 (%)</label>\n      <input type=\"number\" id=\"refundRate-roi\" step=\"0.01\" placeholder=\"退款率\" value=\"5\" style=\"width:100%;padding:4px;\">\n    </div>\n    <div class=\"form-group-roi\">\n      <label for=\"platformFee-roi\">平台扣点 (%)</label>\n      <input type=\"number\" id=\"platformFee-roi\" step=\"0.01\" placeholder=\"平台扣点\" value=\"5\" style=\"width:100%;padding:4px;\">\n    </div>\n  </div>\n  \n  <div style=\"display:flex;gap:8px;margin:10px 0;\">\n    <button id=\"calculate-break-even-roi\" style=\"padding:6px 12px;background:#4CAF50;color:white;border:none;border-radius:4px;cursor:pointer;flex:1;\">计算保本投产比</button>\n    <button id=\"reset-break-even-roi\" style=\"padding:6px 12px;background:#6c757d;color:white;border:none;border-radius:4px;cursor:pointer;\">重置</button>\n  </div>\n  \n  <div class=\"result-roi\" id=\"break-even-result-roi\" style=\"display:none;padding:8px;background:#f9f9f9;border-radius:4px;margin:10px 0;\">\n    <div class=\"result-item-roi\" style=\"display:flex;justify-content:space-between;margin:4px 0;font-size:12px;\">\n      <span>保本投产比 ROI:</span>\n      <span class=\"result-value-roi\" id=\"breakEvenROI-roi\">?</span>\n    </div>\n    <div class=\"result-item-roi\" style=\"display:flex;justify-content:space-between;margin:4px 0;font-size:12px;\">\n      <span>单笔订单利润:</span>\n      <span class=\"result-value-roi\" id=\"profitPerOrder-roi\">?</span>\n    </div>\n  </div>\n  \n  <!-- 实际投产比计算 -->\n  <div class=\"section-title-roi\">实际投产比计算</div>\n  \n  <div class=\"compact-row-roi\">\n    <div class=\"form-group-roi\">\n      <label for=\"actualSpend-roi\">实际花费 (元)</label>\n      <input type=\"number\" id=\"actualSpend-roi\" step=\"0.01\" placeholder=\"实际广告花费\" style=\"width:100%;padding:4px;\">\n    </div>\n    <div class=\"form-group-roi\">\n      <label for=\"actualSales-roi\">实际销售额 (元)</label>\n      <input type=\"number\" id=\"actualSales-roi\" step=\"0.01\" placeholder=\"实际销售额\" style=\"width:100%;padding:4px;\">\n    </div>\n  </div>\n  \n  <div style=\"display:flex;gap:8px;margin:10px 0;\">\n    <button id=\"calculate-actual-roi\" style=\"padding:6px 12px;background:#2196F3;color:white;border:none;border-radius:4px;cursor:pointer;flex:1;\">计算实际投产比和盈亏</button>\n    <button id=\"reset-actual-roi\" style=\"padding:6px 12px;background:#6c757d;color:white;border:none;border-radius:4px;cursor:pointer;\">重置</button>\n  </div>\n  \n  <div class=\"result-roi\" id=\"actual-result-roi\" style=\"display:none;padding:8px;background:#f9f9f9;border-radius:4px;margin:10px 0;\">\n    <div class=\"result-item-roi\" style=\"display:flex;justify-content:space-between;margin:4px 0;font-size:12px;\">\n      <span>实际投产比 ROI:</span>\n      <span class=\"result-value-roi\" id=\"actualROI-roi\">?</span>\n    </div>\n    <div class=\"result-item-roi\" style=\"display:flex;justify-content:space-between;margin:4px 0;font-size:12px;\">\n      <span>推广盈亏:</span>\n      <span class=\"result-value-roi\" id=\"profitLoss-roi\">?</span>\n    </div>\n  </div>\n  \n  <!-- 历史记录 -->\n  <div class=\"section-title-roi\">历史记录</div>\n  <div class=\"history-header-roi\" style=\"display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px;\">\n    <span>最近计算记录 (最多10条)</span>\n    <span class=\"clear-history-roi\" id=\"clear-history-roi\" style=\"color:#e74c3c;cursor:pointer;font-size:11px;\">清空记录</span>\n  </div>\n  <div class=\"history-list-roi\" id=\"history-list-roi\" style=\"max-height:150px;overflow-y:auto;border:1px solid #eee;border-radius:4px;padding:5px;\">\n    <!-- 历史记录将动态添加到这里 -->\n  </div>\n ";
slides[6].innerHTML = "\n<h3>直播间卫士</h3>\n    <p class=\"desc-weishi\">1.当检测到直播间有人的发言内容包含设定内容时自动禁言且发送指定消息刷屏<br>2.不选择禁言的话可以当关键词自动回复功能使用哦</p>\n    \n    <div class=\"control-row-weishi\">\n        <label class=\"switch-label-weishi\">\n            <input type=\"checkbox\" id=\"guardian-switch-weishi\">\n            <span class=\"slider-weishi\"></span>\n            <span class=\"switch-text-weishi\">启用直播间卫士</span>\n        </label>\n        <button id=\"add-forbidden-btn-weishi\" class=\"add-btn-weishi\">+ 添加禁言内容</button>\n    </div>\n    \n    <div id=\"rules-list-weishi\" class=\"rules-list-weishi\">\n        <div class=\"empty-state-weishi\">暂无禁言规则，点击上方按钮添加</div>\n    </div>\n     <!-- 日志记录区域 -->\n    <div class=\"logs-section-weishi\">\n        <div class=\"logs-header-weishi\">\n            <h4>执行记录</h4>\n            <div class=\"logs-controls-weishi\">\n                <span class=\"logs-info-weishi\">保存24小时内的记录</span>\n                <button id=\"clear-logs-btn-weishi\" class=\"clear-logs-btn-weishi\">清空记录</button>\n            </div>\n        </div>\n        <div id=\"logs-list-weishi\" class=\"logs-list-weishi\">\n            <div class=\"empty-logs-weishi\">暂无执行记录</div>\n        </div>\n    </div>\n    \n";
document.addEventListener("click", _0x46f351 => {
  if (_0x46f351.target.id === "toggleReply3") {
    const _0x2b12c3 = _0x46f351.target;
    _0x2b12c3.textContent === "开启" ? (_0x2b12c3.textContent = "关闭", _0x2b12c3.classList.remove("primary3"), _0x2b12c3.classList.add("danger3"), console.log("开启")) : (_0x2b12c3.textContent = "开启", _0x2b12c3.classList.remove("danger3"), _0x2b12c3.classList.add("primary3"), console.log("关闭"));
  }
});
function syncToggle() {
  document.querySelectorAll(".toggle-cb").forEach(_0x5cbb9e => {
    let _0x13ea9f;
    let _0x39e606;
    if (_0x5cbb9e.type === "radio") {
      const _0x33b36a = _0x5cbb9e.name;
      _0x39e606 = _0x33b36a + "-" + _0x5cbb9e.value;
      _0x13ea9f = document.querySelector(".toggle-target[data-toggle=\"" + _0x39e606 + "\"]");
      if (_0x13ea9f) {
        _0x13ea9f.classList.toggle("hidden", !_0x5cbb9e.checked);
      }
      document.querySelectorAll("input[name=\"" + _0x33b36a + "\"]").forEach(_0x1d4e45 => {
        const _0x588fe5 = document.querySelector(".toggle-target[data-toggle=\"" + _0x33b36a + "-" + _0x1d4e45.value + "\"]");
        if (_0x588fe5) {
          _0x588fe5.classList.toggle("hidden", !_0x1d4e45.checked);
        }
      });
    } else {
      _0x39e606 = _0x5cbb9e.id + "-true";
      _0x13ea9f = document.querySelector(".toggle-target[data-toggle=\"" + _0x39e606 + "\"]");
      if (_0x13ea9f) {
        _0x13ea9f.classList.toggle("hidden", !_0x5cbb9e.checked);
      }
    }
  });
  autoSave();
}
document.addEventListener("change", syncToggle);
const slideStyles = document.createElement("style");
slideStyles.textContent = "\n    #live-slides {\n        flex: 1;\n        position: relative;\n        overflow: hidden;\n        height: 400px;\n    }\n    \n    .slide {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        padding: 20px;\n        box-sizing: border-box;\n        overflow-y: auto;\n        word-break: break-all;\n        background: white;\n        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n        transition: all 0.8s cubic-bezier(0.77, 0, 0.175, 1);\n        z-index: 1;\n    }\n    \n    .slide.active {\n        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n        z-index: 10;\n    }\n    \n    .slide.next {\n        clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);\n    }\n    \n    .slide.prev {\n        clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);\n    }\n    \n    // 添加渐变背景\n    .slide:nth-child(1) { background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%); }\n    .slide:nth-child(2) { background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%); }\n    .slide:nth-child(3) { background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%); }\n    .slide:nth-child(4) { background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%); }\n    .slide:nth-child(5) { background: linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%); }\n    .slide:nth-child(6) { background: linear-gradient(135deg, #a6c0fe 0%, #f68084 100%); }\n    .slide:nth-child(7) { background: linear-gradient(135deg, #fccb90 0%, #d57eeb 100%); }\n";
document.head.appendChild(slideStyles);
let currentSlide = 0;
slides[0].classList.add("active");
[...nav.children][0].classList.add("active");
function goToSlide(_0x134f3f) {
  if (_0x134f3f === currentSlide) {
    return;
  }
  const _0x429fff = slides[currentSlide];
  const _0xa79610 = slides[_0x134f3f];
  _0x429fff.classList.remove("active");
  [...nav.children][currentSlide].classList.remove("active");
  _0x134f3f > currentSlide ? (_0x429fff.classList.add("prev"), _0xa79610.classList.add("next")) : (_0x429fff.classList.add("next"), _0xa79610.classList.add("prev"));
  setTimeout(() => {
    _0xa79610.classList.add("active");
    [...nav.children][_0x134f3f].classList.add("active");
    setTimeout(() => {
      _0x429fff.classList.remove("next", "prev");
      _0xa79610.classList.remove("next", "prev");
    }, 10);
  }, 10);
  currentSlide = _0x134f3f;
}
nav.addEventListener("click", _0x3390b6 => {
  const _0x42b459 = _0x3390b6.target.closest(".nav-item");
  if (!_0x42b459) {
    return;
  }
  const _0x5cb31d = +_0x42b459.dataset.idx;
  !isNaN(_0x5cb31d) && (goToSlide(_0x5cb31d), _0x5cb31d === 3 && window.markFeatureAsSeennew("fudai-nav"));
});
function autoSave() {
  const _0x41b6b6 = {
    ci: document.querySelector("input[name=\"ci\"]:checked").value,
    tan: document.querySelector("input[name=\"tan\"]:checked").value,
    minI: document.getElementById("minI").value,
    maxI: document.getElementById("maxI").value,
    autoPop: document.getElementById("autoPop").checked,
    autoDel: document.getElementById("autoDel").checked,
    maxP: document.getElementById("maxP").value,
    delN: document.getElementById("delN").value,
    cs: document.querySelector("input[name=\"cs\"]:checked").value,
    csDelay: document.getElementById("csDelay").value,
    xj: document.querySelector("input[name=\"xj\"]:checked").value,
    xjhao: document.getElementById("xjhao").value,
    ps: document.querySelector("input[name=\"ps\"]:checked").value,
    psProd: document.getElementById("psProd").value,
    ap: document.querySelector("input[name=\"ap\"]:checked").value,
    apProd: document.getElementById("apProd").value,
    autoDelRule: document.querySelector("input[name=\"autoDelRule\"]:checked").value,
    maxP2: document.getElementById("maxP2").value,
    delN2: document.getElementById("delN2").value
  };
  window.config = _0x41b6b6;
  console.log(window.config);
  minInterval = document.getElementById("minI").value * 1000;
  maxInterval = document.getElementById("maxI").value * 1000;
  saveData(_0x41b6b6);
}
let outClickHandler;
toggleBtn.onclick = () => {
  const _0xc0b017 = panel.style.right === "0px";
  panel.style.right = _0xc0b017 ? "-30%" : "0";
  toggleBtn.innerHTML = _0xc0b017 ? "插件设置" : "关闭设置";
  if (!_0xc0b017) {
    loadSettings();
    fudailist();
    daishangjialist();
    exitBatchCopy8();
    outClickHandler = _0x186663 => {
      !panel.contains(_0x186663.target) && _0x186663.target !== toggleBtn && (panel.style.right = "-30%", toggleBtn.innerHTML = "插件设置", document.removeEventListener("click", outClickHandler, true));
    };
    document.addEventListener("click", outClickHandler, true);
  } else {
    document.removeEventListener("click", outClickHandler, true);
  }
};
const STORAGE_KEY = "liveAssistantConfig";
function saveData(_0x39933b) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(_0x39933b));
}
function loadData() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
}
function loadSettings() {
  const _0x440dc4 = JSON.parse(localStorage.getItem("liveAssistantConfig") || JSON.stringify({
    ci: "off",
    tan: "on",
    minI: "8.5",
    maxI: "9.6",
    autoPop: false,
    autoDel: false,
    autoDelRule: "rule1",
    maxP2: "20",
    delN2: "1",
    maxP: "20",
    delN: "1",
    cs: "off",
    csDelay: "800",
    ps: "off",
    psProd: "20",
    ap: "off",
    apProd: "70",
    xj: "off",
    xjhao: "50"
  }));
  window.config = _0x440dc4;
  if (_0x440dc4.ci) {
    document.querySelector("input[name=\"ci\"][value=\"" + _0x440dc4.ci + "\"]").checked = true;
  }
  if (_0x440dc4.xj) {
    document.querySelector("input[name=\"xj\"][value=\"" + _0x440dc4.xj + "\"]").checked = true;
  }
  if (_0x440dc4.xjhao) {
    document.getElementById("xjhao").value = _0x440dc4.xjhao;
  }
  if (_0x440dc4.tan) {
    document.querySelector("input[name=\"tan\"][value=\"" + _0x440dc4.tan + "\"]").checked = true;
  }
  if (_0x440dc4.minI) {
    document.getElementById("minI").value = _0x440dc4.minI;
  }
  if (_0x440dc4.maxI) {
    document.getElementById("maxI").value = _0x440dc4.maxI;
  }
  if (_0x440dc4.autoPop) {
    document.getElementById("autoPop").checked = _0x440dc4.autoPop;
  }
  if (_0x440dc4.autoDel) {
    document.getElementById("autoDel").checked = _0x440dc4.autoDel;
  }
  if (_0x440dc4.maxP) {
    document.getElementById("maxP").value = _0x440dc4.maxP;
  }
  if (_0x440dc4.delN) {
    document.getElementById("delN").value = _0x440dc4.delN;
  }
  if (_0x440dc4.autoDelRule) {
    document.querySelectorAll("input[name=\"autoDelRule\"]").forEach(_0x3a4731 => _0x3a4731.checked = false);
    const _0x1e073b = document.querySelector("input[name=\"autoDelRule\"][value=\"" + _0x440dc4.autoDelRule + "\"]");
    if (_0x1e073b) {
      _0x1e073b.checked = true;
    }
  }
  if (_0x440dc4.maxP2) {
    document.getElementById("maxP2").value = _0x440dc4.maxP2;
  }
  if (_0x440dc4.delN2) {
    document.getElementById("delN2").value = _0x440dc4.delN2;
  }
  if (_0x440dc4.cs) {
    document.querySelector("input[name=\"cs\"][value=\"" + _0x440dc4.cs + "\"]").checked = true;
  }
  if (_0x440dc4.csDelay) {
    document.getElementById("csDelay").value = _0x440dc4.csDelay;
  }
  if (_0x440dc4.ps) {
    document.querySelector("input[name=\"ps\"][value=\"" + _0x440dc4.ps + "\"]").checked = true;
  }
  if (_0x440dc4.psProd) {
    document.getElementById("psProd").value = _0x440dc4.psProd;
  }
  if (_0x440dc4.ap) {
    document.querySelector("input[name=\"ap\"][value=\"" + _0x440dc4.ap + "\"]").checked = true;
  }
  if (_0x440dc4.apProd) {
    document.getElementById("apProd").value = _0x440dc4.apProd;
  }
  minInterval = window.config.minI * 1000;
  maxInterval = window.config.maxI * 1000;
  syncToggle();
}
goToSlide(0);
const style22 = document.createElement("style");
style22.innerHTML = "\n  @keyframes slideInFromRight {\n    from { transform: translateX(100%); opacity: 0; }\n    to   { transform: translateX(0);   opacity: 1; }\n  }\n  .slide-in {\n    animation: slideInFromRight 0.35s ease-out forwards;\n  }\n";
document.head.appendChild(style22);
function createZtCard(_0x31deab, _0x482869, _0x535892, _0x4c765f = "#333") {
  const _0xdebbbb = document.createElement("div");
  _0xdebbbb.style.cssText = "border:1px solid #eee;border-radius:6px;margin-bottom:8px;padding:8px;position:relative;z-index: 999999;";
  _0xdebbbb.innerHTML = "\n    <button class=\"close\"\n            style=\"position:absolute;right:4px;top:2px;border:none;background:none;font-size:16px;cursor:pointer;\">×</button>\n    <img src=\"" + _0x31deab + "\" style=\"width:60px;height:60px;float:left;margin-right:8px;border-radius:4px\">\n    <div style=\"margin-left:68px;\">\n      <div style=\"font-weight:bold;font-size:13px\">" + _0x482869 + "</div>\n      <div style=\"color:" + _0x4c765f + ";font-size:16px\">" + _0x535892 + "</div>\n    </div>\n    <div style=\"clear:both\"></div>\n  ";
  _0xdebbbb.querySelector(".close").onclick = () => {
    _0xdebbbb.remove();
    toggleBox();
  };
  box.appendChild(_0xdebbbb);
  _0xdebbbb.classList.add("slide-in");
  _0xdebbbb.addEventListener("animationend", () => _0xdebbbb.classList.remove("slide-in"));
  setTimeout(() => {
    _0xdebbbb.remove();
    toggleBox();
  }, 3000);
  toggleBox();
}
function toggleBox() {
  requestAnimationFrame(() => {
    box.hidden = !box.hasChildNodes();
  });
}
const box = document.createElement("div");
box.id = "notifyBox";
const _0x115876 = {
  position: "fixed",
  top: "35px",
  right: "30px",
  width: "300px",
  maxHeight: "40vh",
  overflowY: "auto",
  zIndex: 9999999,
  background: "rgba(253, 253, 253, 0.95)",
  borderRadius: "8px",
  boxShadow: "0 2px 12px rgba(0,0,0,.15)",
  padding: "2px",
  fontSize: "12px",
  fontFamily: "Arial, sans-serif"
};
Object.assign(box.style, _0x115876);
document.body.appendChild(box);
box.hidden = true;
function startObserver() {
  if (!document.querySelector(cfg.contentSel)) {
    return;
  }
  const _0x516e90 = $(cfg.listWrapperSel);
  if (!_0x516e90) {
    return;
  }
  _0x516e90.querySelectorAll(cfg.commentItemSel).forEach(handleItem);
  mo = new MutationObserver(_0x7c7e60 => {
    _0x7c7e60.forEach(_0xe049d9 => _0xe049d9.addedNodes.forEach(_0x4e37eb => {
      if (_0x4e37eb.nodeType !== 1) {
        return;
      }
      const _0x5d5370 = _0x4e37eb.matches?.(cfg.commentItemSel) ? [_0x4e37eb] : $$(cfg.commentItemSel, _0x4e37eb);
      _0x5d5370.forEach(handleItem);
    }));
  });
  const _0x11f592 = {
    childList: true,
    subtree: true
  };
  mo.observe(_0x516e90, _0x11f592);
}
function stopObserver() {
  mo && (mo.disconnect(), mo = null);
}
const STORAGE_KEY2 = "snQuickReplies";
let hasInserted2 = false;
function insertExtBtn2() {
  if (hasInserted2) {
    return;
  }
  const _0x1b2706 = document.querySelector(".newComment-sOpt3V");
  if (!_0x1b2706) {
    return;
  }
  const _0x1ae49d = document.createElement("span");
  _0x1ae49d.id = "sn-ext-quick-btn";
  _0x1ae49d.style.marginLeft = "12px";
  _0x1ae49d.style.cursor = "pointer";
  _0x1ae49d.style.color = "#1890ff";
  _0x1ae49d.textContent = "[插件]添加快捷回复（无数量限制）";
  _0x1b2706.parentNode.appendChild(_0x1ae49d);
  hasInserted2 = true;
  _0x1ae49d.addEventListener("click", openAddDialog2);
  window.renderList2();
}
window.renderList2 = function () {
  const _0x452934 = document.querySelector(".container-xl2t0b");
  if (!_0x452934) {
    return;
  }
  let _0x4baaaa = document.getElementById("sn-ext-reply-wrap");
  if (!_0x4baaaa) {
    _0x4baaaa = document.createElement("div");
    _0x4baaaa.id = "sn-ext-reply-wrap";
    _0x4baaaa.style.display = "flex";
    _0x4baaaa.style.alignItems = "flex-start";
    _0x4baaaa.style.gap = "4px";
    _0x4baaaa.style.padding = "10px 0";
    _0x452934.parentNode.insertBefore(_0x4baaaa, _0x452934);
    _0x4baaaa.appendChild(_0x452934);
  }
  let _0x29e415 = document.getElementById("sn-ext-reply-container");
  if (!_0x29e415) {
    _0x29e415 = document.createElement("div");
    _0x29e415.id = "sn-ext-reply-container";
    _0x29e415.style.flex = "1";
    _0x29e415.style.minWidth = "220px";
    _0x29e415.style.maxHeight = "470px";
    _0x29e415.style.overflowY = "auto";
    _0x29e415.style.maxWidth = "290px";
    _0x29e415.style.fontSize = "12px";
    _0x4baaaa.appendChild(_0x29e415);
  }
  const _0x47a0b5 = JSON.parse(localStorage.getItem(STORAGE_KEY2) || "[]");
  _0x29e415.innerHTML = "";
  const _0x434b30 = document.createElement("div");
  _0x434b30.textContent = "插件扩展的快捷消息";
  _0x434b30.style.textAlign = "center";
  _0x434b30.style.fontSize = "12px";
  _0x434b30.style.color = "#666";
  _0x434b30.style.marginBottom = "6px";
  _0x434b30.style.borderBottom = "1px solid #ddd";
  _0x434b30.style.paddingBottom = "4px";
  _0x29e415.appendChild(_0x434b30);
  _0x47a0b5.forEach((_0x5a101b, _0x35960c) => {
    const _0x88fa1f = document.createElement("div");
    _0x88fa1f.style.display = "flex";
    _0x88fa1f.style.justifyContent = "space-between";
    _0x88fa1f.style.alignItems = "center";
    _0x88fa1f.style.marginBottom = "8px";
    _0x88fa1f.style.whiteSpace = "nowrap";
    _0x88fa1f.style.transition = "background .15s";
    _0x88fa1f.onmouseenter = () => _0x88fa1f.style.background = "rgba(255,0,0,0.08)";
    _0x88fa1f.onmouseleave = () => _0x88fa1f.style.background = "";
    const _0x29f8dc = document.createElement("span");
    _0x29f8dc.textContent = " 置顶";
    _0x29f8dc.style.marginRight = "4px";
    _0x29f8dc.style.fontSize = "12px";
    _0x29f8dc.style.color = "#666";
    _0x29f8dc.style.cursor = "default";
    const _0x4db61f = document.createElement("input");
    _0x4db61f.type = "checkbox";
    _0x4db61f.title = "置顶";
    _0x4db61f.style.marginRight = "4px";
    _0x4db61f.style.cursor = "pointer";
    _0x4db61f.addEventListener("click", _0x500282 => _0x500282.stopPropagation());
    const _0x41a153 = document.createElement("span");
    _0x41a153.textContent = _0x5a101b;
    _0x41a153.style.cursor = "pointer";
    _0x41a153.style.flex = "1";
    _0x41a153.style.overflow = "hidden";
    _0x41a153.style.textOverflow = "ellipsis";
    _0x41a153.title = _0x5a101b;
    _0x41a153.addEventListener("click", () => {
      fason(_0x5a101b, _0x4db61f.checked);
      const _0x44c7bc = {
        bubbles: true
      };
      document.body.dispatchEvent(new MouseEvent("click", _0x44c7bc));
    });
    const _0x10a4f5 = document.createElement("span");
    _0x10a4f5.textContent = "编辑";
    _0x10a4f5.style.margin = "0 6px";
    _0x10a4f5.style.cursor = "pointer";
    _0x10a4f5.style.color = "#1890ff";
    _0x10a4f5.addEventListener("click", () => openEditDialog2(_0x35960c, _0x5a101b));
    const _0xae77ce = document.createElement("span");
    _0xae77ce.textContent = "删除";
    _0xae77ce.style.cursor = "pointer";
    _0xae77ce.style.color = "#ff4d4f";
    _0xae77ce.addEventListener("click", () => {
      const _0x190b2e = JSON.parse(localStorage.getItem(STORAGE_KEY2) || "[]");
      _0x190b2e.splice(_0x35960c, 1);
      localStorage.setItem(STORAGE_KEY2, JSON.stringify(_0x190b2e));
      window.renderList2();
      createZtCard(cg, "操作成功", "删除成功", "#76fa4eff");
    });
    _0x88fa1f.append(_0x41a153, _0x29f8dc, _0x4db61f, _0x10a4f5, _0xae77ce);
    _0x29e415.appendChild(_0x88fa1f);
  });
};
function createModal2({
  title: _0xe9555f,
  defaultValue: _0x2642eb = ""
} = {}) {
  return new Promise(_0x22c294 => {
    const _0x11ef9c = document.createElement("div");
    const _0x31e6b3 = {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,.45)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999
    };
    Object.assign(_0x11ef9c.style, _0x31e6b3);
    const _0x3ac66e = document.createElement("div");
    const _0x5a1523 = {
      width: "420px",
      background: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,.15)",
      fontFamily: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,sans-serif"
    };
    Object.assign(_0x3ac66e.style, _0x5a1523);
    const _0x8a51e1 = document.createElement("div");
    _0x8a51e1.textContent = _0xe9555f;
    const _0x196af8 = {
      padding: "16px 24px",
      fontSize: "20px",
      fontWeight: 600,
      borderBottom: "1px solid #f0f0f0"
    };
    Object.assign(_0x8a51e1.style, _0x196af8);
    const _0x5dcec2 = document.createElement("textarea");
    _0x5dcec2.value = _0x2642eb;
    const _0x8c1c5d = {
      width: "100%",
      boxSizing: "border-box",
      minHeight: "90px",
      padding: "12px 16px",
      border: "none",
      outline: "none",
      resize: "vertical",
      fontSize: "18px",
      lineHeight: 1.5
    };
    Object.assign(_0x5dcec2.style, _0x8c1c5d);
    const _0x2f587a = document.createElement("div");
    const _0x324700 = {
      padding: "10px 16px",
      textAlign: "right",
      borderTop: "1px solid #f0f0f0"
    };
    Object.assign(_0x2f587a.style, _0x324700);
    function _0x36517b(_0x2e97d7, _0x49ea02 = false) {
      const _0x1ac557 = document.createElement("button");
      _0x1ac557.textContent = _0x2e97d7;
      const _0x301c82 = {
        marginLeft: "8px",
        padding: "6px 16px",
        fontSize: "15px",
        borderRadius: "4px",
        cursor: "pointer",
        outline: "none"
      };
      Object.assign(_0x1ac557.style, _0x301c82);
      if (_0x49ea02) {
        const _0x4a7ebf = {
          background: "#1890ff",
          color: "#fff",
          border: "none"
        };
        Object.assign(_0x1ac557.style, _0x4a7ebf);
        _0x1ac557.addEventListener("mouseenter", () => _0x1ac557.style.background = "#40a9ff");
        _0x1ac557.addEventListener("mouseleave", () => _0x1ac557.style.background = "#1890ff");
      } else {
        const _0x5340cb = {
          background: "#fff",
          color: "#333",
          border: "1px solid #d9d9d9"
        };
        Object.assign(_0x1ac557.style, _0x5340cb);
        _0x1ac557.addEventListener("mouseenter", () => _0x1ac557.style.borderColor = "#40a9ff");
        _0x1ac557.addEventListener("mouseleave", () => _0x1ac557.style.borderColor = "#d9d9d9");
      }
      return _0x1ac557;
    }
    const _0x8efd0b = _0x36517b("确定", true);
    const _0x48b90e = _0x36517b("取消");
    _0x2f587a.append(_0x48b90e, _0x8efd0b);
    _0x3ac66e.append(_0x8a51e1, _0x5dcec2, _0x2f587a);
    _0x11ef9c.appendChild(_0x3ac66e);
    document.body.appendChild(_0x11ef9c);
    _0x5dcec2.focus();
    _0x5dcec2.setSelectionRange(0, _0x5dcec2.value.length);
    _0x8efd0b.addEventListener("click", () => {
      const _0x5d8951 = _0x5dcec2.value.trim();
      if (_0x5d8951.length === 0 || _0x5d8951.length > 50) {
        createZtCard(sb, "失败", "内容不能为空且不能超过 50 字！", "rgba(250, 78, 78, 1)");
        return;
      }
      createZtCard(cg, "操作成功", "成功", "#76fa4eff");
      _0x22c294(_0x5dcec2.value.trim());
      _0x470b3c();
    });
    _0x48b90e.addEventListener("click", () => {
      _0x22c294(null);
      _0x470b3c();
    });
    _0x11ef9c.addEventListener("click", _0x34b77e => {
      _0x34b77e.target === _0x11ef9c && (_0x22c294(null), _0x470b3c());
    });
    function _0x470b3c() {
      document.body.removeChild(_0x11ef9c);
    }
  });
}
async function openAddDialog2() {
  const _0x56b050 = await createModal2({
    title: "添加自定义快捷回复"
  });
  if (!_0x56b050) {
    return;
  }
  const _0xea0a6e = JSON.parse(localStorage.getItem(STORAGE_KEY2) || "[]");
  _0xea0a6e.push(_0x56b050);
  localStorage.setItem(STORAGE_KEY2, JSON.stringify(_0xea0a6e));
  window.renderList2();
}
async function openEditDialog2(_0xcfef91, _0x15d96d) {
  const _0x2caf64 = {
    title: "编辑快捷回复",
    defaultValue: _0x15d96d
  };
  const _0x57d595 = await createModal2(_0x2caf64);
  if (_0x57d595 === null || _0x57d595 === _0x15d96d) {
    return;
  }
  const _0x447e15 = JSON.parse(localStorage.getItem(STORAGE_KEY2) || "[]");
  _0x447e15[_0xcfef91] = _0x57d595;
  localStorage.setItem(STORAGE_KEY2, JSON.stringify(_0x447e15));
  window.renderList2();
}
let maskNode = null;
window.openLoading = function (_0x5c3e61 = "加载中...") {
  if (maskNode && document.body.contains(maskNode)) {
    return;
  }
  maskNode && !document.body.contains(maskNode) && (maskNode = null);
  maskNode = document.createElement("div");
  maskNode.className = "fs-loading-mask";
  maskNode.setAttribute("data-loading", "true");
  const _0x28608b = document.createElement("style");
  _0x28608b.textContent = "\n        .fs-loading-mask{\n            position:fixed;inset:0;background:rgba(0,0,0,.45);\n            display:flex;align-items:center;justify-content:center;z-index:2147483647;\n            font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto;\n        }\n        .fs-loading-box{\n            background:#fff;padding:22px 30px;border-radius:8px;\n            display:flex;align-items:center;gap:12px;font-size:15px;color:#333;\n            box-shadow:0 4px 20px rgba(0,0,0,.15);\n        }\n        .fs-loading-spinner{\n            width:32px;height:32px;border:3px solid #e5e5e5;\n            border-top-color:#1890ff;border-radius:50%;\n            animation:fs-spin .6s linear infinite;\n        }\n        @keyframes fs-spin{to{transform:rotate(360deg)}}\n    ";
  const _0x2df37c = document.createElement("div");
  _0x2df37c.className = "fs-loading-box";
  _0x2df37c.innerHTML = "\n        <div class=\"fs-loading-spinner\"></div>\n        <span>" + _0x5c3e61 + "</span>\n    ";
  maskNode.appendChild(_0x28608b);
  maskNode.appendChild(_0x2df37c);
  const _0x1f0644 = () => {
    !document.body.contains(maskNode) && document.body.appendChild(maskNode);
  };
  requestAnimationFrame(() => {
    _0x1f0644();
    setTimeout(() => {
      maskNode && !document.body.contains(maskNode) && _0x1f0644();
    }, 100);
  });
};
window.closeLoading = function () {
  if (maskNode) {
    const _0x1044f0 = document.body.contains(maskNode);
    _0x1044f0 ? (maskNode.style.opacity = "0", maskNode.style.transition = "opacity 0.3s ease", setTimeout(() => {
      maskNode && maskNode.parentNode && maskNode.parentNode.removeChild(maskNode);
      maskNode = null;
    }, 300)) : maskNode = null;
  }
};
const win = unsafeWindow;
function hoverThenLeave() {
  const _0x233af1 = document.querySelector(".btn-item-role-exchange-name__title");
  if (!_0x233af1) {
    setTimeout(hoverThenLeave, 300);
    return;
  }
  _0x233af1.dispatchEvent(new win.MouseEvent("mouseover", {
    bubbles: true,
    view: win
  }));
  _0x233af1.dispatchEvent(new win.MouseEvent("mouseenter", {
    bubbles: false,
    view: win
  }));
  setTimeout(() => {
    _0x233af1.dispatchEvent(new win.MouseEvent("mouseout", {
      bubbles: true,
      view: win
    }));
    _0x233af1.dispatchEvent(new win.MouseEvent("mouseleave", {
      bubbles: false,
      view: win
    }));
  }, 500);
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", hoverThenLeave) : hoverThenLeave();
function stopExecution() {
  timerId !== null && (clearTimeout(timerId), timerId = null);
}
console.log("脚本加载成功");
function getRandomColor() {
  const _0x5b97de = "0123456789ABCDEF";
  let _0x190c28 = "#";
  for (let _0x478292 = 0; _0x478292 < 6; _0x478292++) {
    _0x190c28 += _0x5b97de[Math.floor(Math.random() * 16)];
  }
  return _0x190c28;
}
const toastContainer = document.createElement("div");
toastContainer.style.position = "fixed";
toastContainer.style.top = "10px";
toastContainer.style.right = "10px";
toastContainer.style.padding = "10px";
toastContainer.style.background = "white";
toastContainer.style.border = "1px solid #ccc";
toastContainer.style.borderRadius = "5px";
toastContainer.style.zIndex = "9999";
function waitForElement(_0xec3667, _0x2c55d2) {
  !window.elementAdded && (document.querySelector(_0xec3667) ? (_0x2c55d2(), window.elementAdded = true, vipuser == true ? window.vText.innerHTML = "<span style=\"color: green;\">会员有效期截至到" + datevip + "</span>" : window.vText.innerHTML = "<span style=\"color: red;\">会员" + datevip + "请充值</span>") : setTimeout(() => waitForElement(_0xec3667, _0x2c55d2), 1000));
}
function createControls() {
  const _0x209a15 = document.querySelector("#live-control-goods-list-container");
  if (!_0x209a15) {
    return;
  }
  const _0x319248 = document.createElement("div");
  _0x319248.style.display = "flex";
  _0x319248.style.marginBottom = "8px";
  _0x319248.style.padding = "4px";
  _0x319248.style.justifyContent = "flex-end";
  _0x319248.style.backgroundColor = "#f5f5f5";
  _0x319248.style.borderRadius = "4px";
  const _0x131471 = document.createElement("div");
  window.vText = _0x131471;
  _0x131471.className = "v-text";
  _0x131471.style.cssText = "\n\t\t\t/* 背景颜色：白色，透明度 80%（0.8 表示 80% 不透明）*/\nbackground-color: rgba(255, 255, 255, 0.8);\n\n/* 字体大小：13 像素 */\nfont-size: 13px;\n\n/* 文字颜色：纯黑色 */\ncolor: #000;\n\n/* 圆角：四个角的圆角半径都是 5 像素 */\nborder-radius: 5px;\n\n/* 右外边距：距离右侧相邻元素 160 像素 */\nmargin-right: 10px;\n\n/* 禁止自动换行：文字全部在同一行显示，直到遇到 <br> 或手动换行 */\nwhite-space: nowrap;\ndisplay: flex;            /* 启用 Flexbox */\njustify-content: center;  /* 水平居中 */\nalign-items: center;      /* 垂直居中 */\n/* 字体加粗 */\nfont-weight: bold;\n            ";
  const _0x1559c4 = document.createElement("button");
  _0x1559c4.type = "button";
  _0x1559c4.textContent = "充值会员";
  _0x1559c4.id = "intervalButton";
  _0x1559c4.style.padding = "3px 16px";
  _0x1559c4.style.border = "1px solid #1890ff";
  _0x1559c4.style.borderRadius = "4px";
  _0x1559c4.style.backgroundColor = "#fff";
  _0x1559c4.style.color = "#000000";
  _0x1559c4.style.cursor = "pointer";
  _0x1559c4.style.marginRight = "1px";
  const _0x3ca844 = document.createElement("button");
  _0x3ca844.type = "button";
  _0x3ca844.textContent = "拉新免费得会员";
  const _0x26e93d = new Date();
  const _0x50c105 = new Date(_0x26e93d);
  _0x50c105.setDate(_0x26e93d.getDate());
  const _0x5112e0 = _0x50c105.toISOString().slice(0, 10);
  if (cjrq === _0x5112e0) {
    if (isnew == 0) {
      _0x3ca844.textContent = "填写邀请码";
    }
  }
  window.yqann = _0x3ca844;
  _0x3ca844.id = "intervalButton";
  _0x3ca844.style.padding = "3px 16px";
  _0x3ca844.style.border = "1px solid #ff1818ff";
  _0x3ca844.style.borderRadius = "4px";
  _0x3ca844.style.backgroundColor = "#fff";
  _0x3ca844.style.color = "#000000";
  _0x3ca844.style.cursor = "pointer";
  _0x3ca844.style.marginRight = "1px";
  _0x3ca844.addEventListener("click", function () {
    _0x3ca844.textContent == "拉新免费得会员" ? (modal5.style.display = "flex", loadData5()) : (inviteInput6.value = "", modal6.style.display = "flex");
  });
  const _0x15c9c9 = document.createElement("button");
  _0x15c9c9.type = "button";
  _0x15c9c9.textContent = "刷新会员状态";
  _0x15c9c9.id = "intervalButton";
  _0x15c9c9.style.padding = "3px 16px";
  _0x15c9c9.style.border = "1px solid #1890ff";
  _0x15c9c9.style.borderRadius = "4px";
  _0x15c9c9.style.backgroundColor = "#fff";
  _0x15c9c9.style.color = "#000000";
  _0x15c9c9.style.cursor = "pointer";
  _0x15c9c9.addEventListener("click", function () {
    queryRechargeStatus();
  });
  _0x1559c4.addEventListener("click", async function () {
    if (user == false) {
      createZtCard(cg, "操作成功", "正在登陆请稍后...再试", "#76fa4eff");
      return;
    }
    createModal();
  });
  _0x319248.appendChild(_0x131471);
  _0x319248.appendChild(_0x15c9c9);
  _0x319248.appendChild(_0x3ca844);
  _0x319248.appendChild(_0x1559c4);
  _0x209a15.parentNode.insertBefore(_0x319248, _0x209a15);
}
const toastQueue = [];
function showToast(_0x52d86d) {
  const _0x28e7d5 = document.createElement("div");
  _0x28e7d5.className = "custom-toast";
  _0x28e7d5.style.position = "fixed";
  _0x28e7d5.style.fontWeight = "bold";
  _0x28e7d5.style.left = "70%";
  _0x28e7d5.style.transform = "translateX(-50%)";
  _0x28e7d5.style.top = "100%";
  _0x28e7d5.style.padding = "15px 25px";
  _0x28e7d5.style.background = "rgba(255, 255, 255, 0.9)";
  _0x28e7d5.style.color = "#000000";
  _0x28e7d5.style.borderRadius = "10px";
  _0x28e7d5.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  _0x28e7d5.style.opacity = "0";
  _0x28e7d5.style.background = "#FFFFFF";
  _0x28e7d5.style.transition = "opacity 0.5s, transform 0.5s";
  _0x28e7d5.style.zIndex = "2147483647";
  _0x28e7d5.style.backgroundSize = "cover";
  window.toastDiv = _0x28e7d5;
  const _0x54b0bf = document.createElement("div");
  _0x54b0bf.innerHTML = _0x52d86d;
  _0x54b0bf.style.fontSize = "16px";
  window.toastText = _0x54b0bf;
  _0x28e7d5.appendChild(_0x54b0bf);
  toastQueue.push(_0x28e7d5);
  displayToast(_0x28e7d5);
  setTimeout(() => {
    hideToast(_0x28e7d5);
  }, 5000);
}
function displayToast(_0x41b997) {
  const _0x28384f = toastQueue.indexOf(_0x41b997);
  _0x41b997.style.top = 40 + _0x28384f * 70 + "px";
  document.body.appendChild(_0x41b997);
  setTimeout(() => {
    _0x41b997.style.opacity = "1";
    _0x41b997.style.transform = "translateX(-30%) translateY(-10px)";
  }, 100);
}
function hideToast(_0x5c3402) {
  _0x5c3402.style.opacity = "0";
  _0x5c3402.style.transform = "translateX(-30%) translateY(15px)";
  setTimeout(() => {
    document.body.removeChild(_0x5c3402);
    toastQueue.splice(toastQueue.indexOf(_0x5c3402), 1);
    adjustToastsPosition();
  }, 500);
}
function adjustToastsPosition() {
  toastQueue.forEach((_0x426484, _0x210943) => {
    _0x426484.style.top = 40 + _0x210943 * 80 + "px";
  });
}
function executeWithRandomInterval() {
  if (!stop) {
    return;
  }
  console.log(window.config.tan);
  window.config.tan == "on" ? (setTimeout(() => {
    jiangjie(draggableId);
    console.log("讲解");
  }, 800), jiangjie(draggableId, "true"), console.log("取消")) : (jiangjie(draggableId), console.log("一致讲解"));
  timerId = setTimeout(() => {
    executeWithRandomInterval();
  }, randomInterval);
  const _0x167cc5 = document.getElementById("qiehuanlogin");
  _0x167cc5.textContent == "退出登录" && !isAutoLoginRunning() && startAutoLogin();
  randomInterval = Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;
}
function addExplainButtons() {
  const _0x7c3ed = document.querySelectorAll(".goodsItem-KBGOY5");
  _0x7c3ed.forEach(_0x1c89f1 => {
    if (!_0x1c89f1.querySelector(".explain-btn") && !_0x1c89f1.querySelector(".status-text")) {
      const _0x519ffb = document.createElement("div");
      _0x519ffb.style.cssText = "\n                position: absolute;\n                top: 60px;\n                right: 12px;\n                display: flex;\n                align-items: center; /* 垂直居中对齐 */\n                z-index: 98;\n            ";
      const _0x1cfc1e = document.createElement("div");
      _0x1cfc1e.className = "status-text";
      _0x1cfc1e.statusText = "";
      _0x1cfc1e.style.cssText = "\n    position: absolute;\n    top: 90px;\n    left: 12px;\n    padding: 6px 12px;\n    font-size: 13px;\n    font-weight: 600;\n    color: #222;\n    background-color: rgba(255, 255, 255, 0.88);\n    border-radius: 6px;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);\n    z-index: 98;\n    white-space: nowrap;\n    user-select: none;\n";
      _0x1cfc1e.addEventListener("click", () => {
        let _0x27e85e = "我正在使用巨量百应自动弹讲解工具超级好用，增加商品曝光，嘎嘎顺手，简洁版教程快速上手\n1.edge浏览器打开https://scriptcat.org/zh-CN/安装\n2.浏览器再次打开https://scriptcat.org/zh-CN/script-show-page/3753点击安装脚本即可\n3.安装完成后登录直播中控台刷新网页即可\n不会用加群12345678991咨询";
        copyToClipboard(_0x27e85e);
        createZtCard(cg, "操作成功", "内容已复制到剪贴板<br>" + _0x27e85e, "#76fa4eff");
      });
      const _0x31eeb2 = document.createElement("button");
      _0x31eeb2.innerHTML = jiangjieanniu;
      _0x31eeb2.className = "explain-btn";
      _0x31eeb2.style.cssText = "\n                padding: 3px 8px;\n                      font-size: 13px;\n                       font-weight: bold;\n                       color: #000000; /* 字体颜色改为白色 */\n                       background-color:#fff; /* 背景颜色改为浅蓝色 */\n                       border-radius: 5px;\n                       cursor: pointer;\n                       transition: background-color 0.3s, color 0.3s;\n                       box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n                       outline: none;\n                       border: none;\n\t\t\t\t\t//   display: none;\n            ";
      _0x31eeb2.addEventListener("click", function () {
        draggableId = _0x1c89f1.getAttribute("data-rbd-drag-handle-draggable-id");
        const _0x31c5d4 = _0x1c89f1.querySelector(".auxo-input");
        spvalue = _0x31c5d4 ? _0x31c5d4.value : "未找到商品编号";
        tpsrc = _0x1c89f1.querySelector("img")?.["getAttribute"]("src");
        const _0x443573 = _0x1c89f1.querySelector(".title-h8R0c6").textContent.trim();
        if (window.csrfToken) {
          if (!vipuser) {
            if (user === false) {
              createZtCard(sb, "操作失败", "插件自动登录失败请刷新网页重试", "rgba(250, 78, 78, 1)");
              window.statu.innerHTML = "<span style=\"color:red;\">插件自动登录失败请刷新网页重试</span>";
              return;
            }
            if (checkAutoLogin()) {
              autoLogin();
            } else {
              if (!window.location.href.includes("live/control")) {
                return;
              }
              createTriggerButtonLogin();
              showModalTan("当前是临时登录模式", "<span style=\"color:red\";>问：什么是临时登录模式？</span><br>\n                        <span style=\"color:red\";>答：就是不需要账号密码，绑定直播间模式，换直播间后需要重新充值</span><br>\n                        是否登录自己注册的账号，可以切换直播间哦，当前如果还有会员余额可以点击右边中间的插件设置把余额转入自己注册的账号，免费！", function () {
                console.log("确定按钮被点击了！");
                createAuthInterface();
                qudenglu = true;
              }, {
                confirmTextTan: "登录自己注册的账号（可换设备使用）",
                cancelTextTan: "旧版绑定直播间账号（单个直播间使用）",
                onCancelTan: function () {
                  quanx();
                  console.log("用户取消了操作");
                }
              });
            }
            return;
          }
          if (_0x31eeb2.innerHTML === jiangjieanniu) {
            _0x7c3ed.forEach(_0x5f2592 => {
              if (_0x5f2592 !== _0x1c89f1) {
                const _0x35273c = _0x5f2592.querySelector(".explain-btn");
                const _0x191cba = _0x5f2592.querySelector(".status-text");
                if (_0x35273c && _0x191cba) {
                  _0x35273c.innerHTML = jiangjieanniu;
                  _0x191cba.textContent = "";
                  _0x5f2592.style.border = "rgba(54, 123, 250, 0.2)";
                  _0x5f2592.style.backgroundImage = "none";
                  _0x5f2592.style.backgroundColor = "#fff";
                }
              }
            });
            _0x31eeb2.innerHTML = "讲解中<svg class=\"voice-wave\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\">\n    <rect x=\"1\" y=\"50%\" width=\"2\" height=\"0\" rx=\"1\">\n      <animate attributeName=\"height\" values=\"0;14;0\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0s\"/>\n      <animate attributeName=\"y\" values=\"50%;0;50%\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0s\"/>\n    </rect>\n    <rect x=\"6\" y=\"50%\" width=\"2\" height=\"0\" rx=\"1\">\n      <animate attributeName=\"height\" values=\"0;14;0\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.2s\"/>\n      <animate attributeName=\"y\" values=\"50%;0;50%\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.2s\"/>\n    </rect>\n    <rect x=\"11\" y=\"50%\" width=\"2\" height=\"0\" rx=\"1\">\n      <animate attributeName=\"height\" values=\"0;14;0\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.4s\"/>\n      <animate attributeName=\"y\" values=\"50%;0;50%\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.4s\"/>\n    </rect>\n  </svg>";
            _0x1c89f1.style.border = "1px solid " + getRandomColor();
            _0x1c89f1.style.backgroundImage = "url(\"https://files.zohopublic.com.cn/public/workdrive-public/download/dqd1mf1300112c5d24f458d5d45586964046a?x-cli-msg=%7B%22linkId%22%3A%221rINvdZfoXu-330F6%22%2C%22isFileOwner%22%3Afalse%2C%22version%22%3A%221.0%22%2C%22isWDSupport%22%3Afalse%7D\")";
            _0x1c89f1.style.backgroundSize = "100% 100%";
            _0x1c89f1.style.backgroundPosition = "center";
            if (isRunning) {
              jjsum = 0;
              jiangjie(draggableId);
              createZtCard(tpsrc, _0x443573, "开始自动弹讲解<br>" + spvalue + "号商品", "#76fa4eff");
              randomInterval = Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;
              return;
            }
            stop = true;
            isRunning = true;
            createZtCard(tpsrc, _0x443573, "开始自动弹讲解" + spvalue + "号商品", "#76fa4eff");
            randomInterval = Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;
            executeWithRandomInterval();
          } else {
            _0x31eeb2.innerHTML = jiangjieanniu;
            _0x1cfc1e.textContent = "已停止";
            _0x1c89f1.style.border = "none";
            stop = false;
            isRunning = false;
            createZtCard(tpsrc, _0x443573, "已停止自动讲解" + spvalue + "号商品", "#fa4e4eff");
            stopExecution();
            _0x1c89f1.style.backgroundImage = "none";
            _0x1c89f1.style.backgroundColor = "#fff";
          }
        } else {
          createZtCard(sb, "操作失败", "未获取到必要的请求头信息，请刷新页面重试", "rgba(250, 78, 78, 1)");
        }
      });
      if (requestUrl == "https://fxg.jinritemai.com/api/anchor/livepc/setcurrent") {
        const _0x51e0b5 = document.createElement("button");
        _0x51e0b5.textContent = "快捷修改价格库存";
        _0x51e0b5.className = "btn-top auxo-btn";
        _0x51e0b5.style.cssText = "\n               padding: 3px 8px;\n                      font-size: 13px;\n                       font-weight: bold;\n                       color: #000000; /* 字体颜色改为白色 */\n                       background-color:#fff; /* 背景颜色改为浅蓝色 */\n                       border-radius: 5px;\n                       cursor: pointer;\n                       transition: background-color 0.3s, color 0.3s;\n                       box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n                       outline: none;\n                       border: none;\n                 position: absolute; top: 90px; left: 390px; z-index: 99;\n                width: auto; height: 25px; display: flex; align-items: center; justify-content: center;\n              ";
        _0x51e0b5.onclick = async () => {
          modalKjxg.style.display = "block";
          indexInputKjxg.focus();
          window.kjxgid = _0x1c89f1.getAttribute("data-rbd-drag-handle-draggable-id");
        };
        _0x1c89f1.appendChild(_0x51e0b5);
      }
      _0x519ffb.appendChild(_0x31eeb2);
      _0x1c89f1.appendChild(_0x519ffb);
      _0x1c89f1.appendChild(_0x1cfc1e);
    }
    const _0x1ce5f7 = _0x1c89f1.querySelector(".goodsAction-JcGBoH");
    if (!_0x1ce5f7) {
      return;
    }
    if (!_0x1c89f1.querySelector(".btn-top")) {
      const _0x2ec722 = document.createElement("button");
      _0x2ec722.textContent = "置顶并讲解";
      _0x2ec722.className = "btn-top auxo-btn";
      _0x2ec722.style.cssText = "\n               padding: 3px 8px;\n                      font-size: 13px;\n                       font-weight: bold;\n                       color: #000000; /* 字体颜色改为白色 */\n                       background-color:#fff; /* 背景颜色改为浅蓝色 */\n                       border-radius: 5px;\n                       cursor: pointer;\n                       transition: background-color 0.3s, color 0.3s;\n                       box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n                       outline: none;\n                       border: none;\n                 position: absolute; top: 60px; right: 90px; z-index: 99;\n                width: auto; height: 25px; display: flex; align-items: center; justify-content: center;\n              ";
      _0x2ec722.onclick = async () => {
        draggableId = _0x1c89f1.getAttribute("data-rbd-drag-handle-draggable-id");
        tpsrc = _0x1c89f1.querySelector("img")?.["getAttribute"]("src");
        createZtCard(tpsrc, "", "操作成功", "#76fa4eff");
        if (!window.splistid) {
          clickRefreshButtoncs(draggableId, tpsrc);
          return;
        }
        const _0x1ee79b = {
          promotion_id: draggableId
        };
        const _0x37bdbe = {
          promotions: [_0x1ee79b, ...window.splistid.filter(_0x28997b => _0x28997b.promotion_id !== draggableId).map(_0xb29ccf => ({
            promotion_id: _0xb29ccf.promotion_id
          }))]
        };
        console.log(_0x37bdbe);
        zhidingbingjiangjie(_0x37bdbe, draggableId, tpsrc);
      };
      _0x1ce5f7.appendChild(_0x2ec722);
    }
    const _0x513880 = [..._0x1ce5f7.querySelectorAll("button")].find(_0xe1a5eb => _0xe1a5eb.textContent.trim() === "预热" && _0xe1a5eb.classList.contains("lvc2-grey-btn") && _0xe1a5eb.classList.contains("greyBtnStyle-cIAS0v"));
    const _0x188f77 = [..._0x1ce5f7.querySelectorAll("button")].find(_0x35ee85 => _0x35ee85.textContent.trim() === "库存管理" || _0x35ee85.textContent.trim() === "专属价设置");
    const _0x170496 = [..._0x1ce5f7.querySelectorAll("button")].find(_0x4ce879 => _0x4ce879.textContent.trim() === "专属价设置");
    if (!_0x1c89f1.querySelector(".btn-fill-all") && (_0x188f77 || dd === "抖店工作台")) {
      const _0x2ae0a9 = document.createElement("button");
      _0x2ae0a9.textContent = "清空库存";
      _0x2ae0a9.className = "btn-clear auxo-btn";
      _0x2ae0a9.style.cssText = "\n            padding: 3px 8px;\n                      font-size: 13px;\n                       font-weight: bold;\n                       color: #000000; /* 字体颜色改为白色 */\n                       background-color:#fff; /* 背景颜色改为浅蓝色 */\n                       border-radius: 5px;\n                       cursor: pointer;\n                       transition: background-color 0.3s, color 0.3s;\n                       box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n                       outline: none;\n                       border: none;\n                position: absolute; top: 60px; right: 165px; z-index: 99;\n                width: auto; height: 25px; display: flex; align-items: center; justify-content: center;\n              ";
      _0x2ae0a9.onclick = () => {
        if (!vipuser) {
          createModal();
          createZtCard(sb, "操作失败", "您的余额不足请加群充值~~（如已经充值请刷新状态）", "rgba(250, 78, 78, 1)");
          return;
        }
        spid = _0x1c89f1.getAttribute("data-rbd-drag-handle-draggable-id");
        dd == "抖店工作台" ? (console.log("清空"), ddlaman(spid, 0)) : (tpsrc = _0x1c89f1.querySelector("img")?.["getAttribute"]("src"), _0x170496 ? zsqingkong(spid, tpsrc) : qingkong(spid, tpsrc));
      };
      _0x1ce5f7.appendChild(_0x2ae0a9);
      if (_0x513880 && !_0x1c89f1.querySelector(".btn-one-click-warmup")) {
        const _0x19ec6e = document.createElement("button");
        _0x19ec6e.textContent = "满库存并预热";
        _0x19ec6e.className = "btn-one-click-warmup auxo-btn";
        _0x19ec6e.style.cssText = "\n                        padding: 3px 8px;\n                      font-size: 13px;\n                       font-weight: bold;\n                       color: #000000; /* 字体颜色改为白色 */\n                       background-color:#fff; /* 背景颜色改为浅蓝色 */\n                       border-radius: 5px;\n                       cursor: pointer;\n                       transition: background-color 0.3s, color 0.3s;\n                       box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n                       outline: none;\n                       border: none;\n                        position: absolute; top: 60px; right: 315px; z-index: 99;\n                         width: auto; height: 25px; display: flex; align-items: center; justify-content: center;\n                     ";
        _0x19ec6e.onclick = async () => {
          if (!vipuser) {
            createModal();
            createZtCard(sb, "操作失败", "您的余额不足请加群充值~~（如已经充值请刷新状态）", "rgba(250, 78, 78, 1)");
            return;
          }
          const _0x404112 = promotions3.find(_0x24c98e => _0x24c98e.promotion_id === _0x1c89f1.getAttribute("data-rbd-drag-handle-draggable-id"));
          tpsrc = _0x1c89f1.querySelector("img")?.["getAttribute"]("src");
          lamanyure(_0x404112.promotion_id, _0x404112.product_id, tpsrc);
        };
        _0x1ce5f7.insertBefore(_0x19ec6e, _0x2ae0a9);
      }
      const _0x237072 = document.createElement("button");
      _0x237072.textContent = "拉满库存";
      _0x237072.className = "btn-fill-all auxo-btn";
      _0x237072.style.cssText = "\n            padding: 3px 8px;\n                      font-size: 13px;\n                       font-weight: bold;\n                       color: #000000; /* 字体颜色改为白色 */\n                       background-color:#fff; /* 背景颜色改为浅蓝色 */\n                       border-radius: 5px;\n                       cursor: pointer;\n                       transition: background-color 0.3s, color 0.3s;\n                       box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n                       outline: none;\n                       border: none;\n        position: absolute; top: 60px; right: 240px; z-index: 99;\n                width: auto; height: 25px; display: flex; align-items: center; justify-content: center;\n          ";
      _0x237072.onclick = () => {
        if (!vipuser) {
          createModal();
          createZtCard(sb, "操作失败", "您的余额不足请加群充值~~（如已经充值请刷新状态）", "rgba(250, 78, 78, 1)");
          return;
        }
        spid = _0x1c89f1.getAttribute("data-rbd-drag-handle-draggable-id");
        dd == "抖店工作台" ? (console.log("拉满"), ddlaman(spid, 10000000)) : (tpsrc = _0x1c89f1.querySelector("img")?.["getAttribute"]("src"), _0x170496 ? zslaman(spid, tpsrc) : laman(spid, tpsrc));
      };
      _0x1ce5f7.appendChild(_0x237072);
      const _0xae4cb5 = document.createElement("button");
      _0xae4cb5.textContent = "改库存为1";
      _0xae4cb5.className = "btn-fill-all auxo-btn1";
      _0xae4cb5.style.cssText = "\n\t\t\t     padding: 3px 8px;\n                      font-size: 13px;\n                       font-weight: bold;\n                       color: #000000; /* 字体颜色改为白色 */\n                       background-color:#fff; /* 背景颜色改为浅蓝色 */\n                       border-radius: 5px;\n                       cursor: pointer;\n                       transition: background-color 0.3s, color 0.3s;\n                       box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n                       outline: none;\n                       border: none;\n        position: absolute; top: 60px; right: 410px; z-index: 99;\n                width: auto; height: 25px; display: flex; align-items: center; justify-content: center;\n          ";
      _0xae4cb5.onclick = () => {
        if (!vipuser) {
          createModal();
          createZtCard(sb, "操作失败", "您的余额不足请加群充值~~（如已经充值请刷新状态）", "rgba(250, 78, 78, 1)");
          return;
        }
        spid = _0x1c89f1.getAttribute("data-rbd-drag-handle-draggable-id");
        tpsrc = _0x1c89f1.querySelector("img")?.["getAttribute"]("src");
        dd == "抖店工作台" ? (console.log("改1"), ddlaman(spid, 1)) : _0x170496 ? zskucunone(spid, tpsrc) : kucunone(spid, tpsrc);
      };
      _0x1ce5f7.appendChild(_0xae4cb5);
    }
  });
}
function createPostData(_0x1d4af1, _0x1b0e25) {
  const _0x1ea39a = {
    promotion_id: _0x1d4af1,
    cancel: _0x1b0e25
  };
  return _0x1ea39a;
}
let zairu = "<span style=\"color: green;\">脚本更新后可以自动登录不需要手动，正在自动登录...</span>";
let headers = {
  "Content-Type": "application/json",
  origin: "https://fxg.jinritemai.com",
  pragma: "no-cache",
  referer: "https://fxg.jinritemai.com/ffa/buyin/dashboard/live/control",
  "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Microsoft Edge\";v=\"134\"",
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": "\"Windows\"",
  "x-ecom-platform-source": "fxg|live",
  "x-secsdk-csrf-token": window.csrfToken,
  accept: "application/json, text/plain, */*",
  "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
  "cache-control": "no-cache"
};
let requestUrl = "https://fxg.jinritemai.com/api/anchor/livepc/setcurrent";
if (window.location.href.includes("buyin.jinrit")) {
  zairu = "<span style=\"color: green;\">脚本更新后可以自动登录不需要手动，正在自动登录...</span>";
  const _0x130d05 = {
    "content-type": "application/json",
    origin: "https://buyin.jinritemai.com",
    priority: "u=1, i",
    referer: "https://buyin.jinritemai.com/dashboard/live/control",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Microsoft Edge\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "x-secsdk-csrf-token": window.csrfToken,
    accept: "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"
  };
  headers = _0x130d05;
  requestUrl = "https://buyin.jinritemai.com/api/anchor/livepc/setcurrent";
}
let esun = 0;
function createRequestConfig(_0x2f1ca8) {
  return {
    method: "POST",
    url: requestUrl,
    data: JSON.stringify(_0x2f1ca8),
    headers: headers,
    onload: function (_0x1834a7) {
      responseObject = JSON.parse(_0x1834a7.responseText);
      if (responseObject.code === 0) {
        randomInterval = Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;
      } else {
        console.log("操作失败1", _0x1834a7.responseText);
        e++;
        esun++;
        if (esun > 3) {
          stop = false;
          isRunning = false;
          createZtCard(sb, "操作失败", "操作失败，" + responseObject.msg + "<br>重试三次失败已自动停止，请刷新或者看错误码重试", "rgba(250, 78, 78, 1)");
          const _0x29980c = document.querySelector(".goodsItem-KBGOY5[data-rbd-drag-handle-draggable-id=\"" + _0x2f1ca8.promotion_id + "\"]");
          if (_0x29980c) {
            const _0x1728c6 = _0x29980c.querySelector(".status-text");
            const _0x2e5d35 = _0x29980c.querySelector(".explain-btn");
            _0x1728c6 && (_0x2e5d35.innerHTML = jiangjieanniu, _0x1728c6.innerHTML = "<span style=\"color: red;\">操作失败，" + responseObject.msg + "     重试三次失败已自动停止，请刷新或者看错误码重试</span>");
          }
          showModalTan("讲解失败", "<p>操作失败，" + responseObject.msg + "<br>重试三次失败已自动停止，请刷新或者看错误码重试</p>", function () {
            console.log("确定按钮被点击了！");
          }, {
            confirmTextTan: "确认",
            cancelTextTan: "关闭",
            onCancelTan: function () {
              console.log("用户取消了操作");
            }
          });
          esun = 0;
          return;
        } else {
          createZtCard(sb, "操作失败", "操作失败，" + responseObject.msg + "<br>正在重试第" + e + "次", "rgba(250, 78, 78, 1)");
          randomInterval = Math.floor(Math.random() * 311) + 800;
        }
      }
    },
    onerror: function (_0x54f572) {
      console.error("操作失败", _0x54f572);
      createZtCard(sb, "操作失败", "操作失败，请检查网络或重试", "rgba(250, 78, 78, 1)");
      location.reload();
    }
  };
}
function jiangjie(_0x24fe7b, _0x2503fb = "false") {
  if (!stop) {
    return;
  }
  if (datevip != null) {
    const _0x209ef4 = document.querySelector(".goodsItem-KBGOY5[data-rbd-drag-handle-draggable-id=\"" + _0x24fe7b + "\"]");
    if (_0x209ef4) {
      const _0x2a78e5 = _0x209ef4.querySelector(".status-text");
      const _0x2190bb = _0x209ef4.querySelector(".explain-btn");
      if (_0x2a78e5) {
        _0x209ef4.style.border = "1px solid " + getRandomColor();
        _0x209ef4.style.backgroundImage = "url(\"https://files.zohopublic.com.cn/public/workdrive-public/download/dqd1mf1300112c5d24f458d5d45586964046a?x-cli-msg=%7B%22linkId%22%3A%221rINvdZfoXu-330F6%22%2C%22isFileOwner%22%3Afalse%2C%22version%22%3A%221.0%22%2C%22isWDSupport%22%3Afalse%7D\")";
        _0x209ef4.style.backgroundSize = "100% 100%";
        _0x209ef4.style.backgroundPosition = "center";
        _0x2190bb.innerHTML = "讲解中<svg class=\"voice-wave\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\">\n    <rect x=\"1\" y=\"50%\" width=\"2\" height=\"0\" rx=\"1\">\n      <animate attributeName=\"height\" values=\"0;14;0\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0s\"/>\n      <animate attributeName=\"y\" values=\"50%;0;50%\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0s\"/>\n    </rect>\n    <rect x=\"6\" y=\"50%\" width=\"2\" height=\"0\" rx=\"1\">\n      <animate attributeName=\"height\" values=\"0;14;0\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.2s\"/>\n      <animate attributeName=\"y\" values=\"50%;0;50%\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.2s\"/>\n    </rect>\n    <rect x=\"11\" y=\"50%\" width=\"2\" height=\"0\" rx=\"1\">\n      <animate attributeName=\"height\" values=\"0;14;0\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.4s\"/>\n      <animate attributeName=\"y\" values=\"50%;0;50%\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.4s\"/>\n    </rect>\n  </svg>";
        _0x2a78e5.innerHTML = "正在自动讲解<span style=\"color: red;font-weight: bold; font-size: 1.3em;\">" + spvalue + "</span>号商品||错误<span style=\"color: red; font-weight: bold; font-size: 1.3em;\">" + e + "</span>次||累计<span style=\"color: red; font-weight: bold; font-size: 1.3em;\">" + jjsum + "</span>次";
      }
    }
  } else {
    const _0x17cdf4 = document.querySelector(".goodsItem-KBGOY5[data-rbd-drag-handle-draggable-id=\"" + _0x24fe7b + "\"]");
    if (_0x17cdf4) {
      const _0xbf2e7f = _0x17cdf4.querySelector(".status-text");
      const _0x2df590 = _0x17cdf4.querySelector(".explain-btn");
      if (_0xbf2e7f) {
        _0x2df590.innerHTML = "讲解中<svg class=\"voice-wave\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\">\n    <rect x=\"1\" y=\"50%\" width=\"2\" height=\"0\" rx=\"1\">\n      <animate attributeName=\"height\" values=\"0;14;0\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0s\"/>\n      <animate attributeName=\"y\" values=\"50%;0;50%\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0s\"/>\n    </rect>\n    <rect x=\"6\" y=\"50%\" width=\"2\" height=\"0\" rx=\"1\">\n      <animate attributeName=\"height\" values=\"0;14;0\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.2s\"/>\n      <animate attributeName=\"y\" values=\"50%;0;50%\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.2s\"/>\n    </rect>\n    <rect x=\"11\" y=\"50%\" width=\"2\" height=\"0\" rx=\"1\">\n      <animate attributeName=\"height\" values=\"0;14;0\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.4s\"/>\n      <animate attributeName=\"y\" values=\"50%;0;50%\" dur=\"1.2s\" repeatCount=\"indefinite\" begin=\"0.4s\"/>\n    </rect>\n  </svg>";
        _0x17cdf4.style.border = "1px solid " + getRandomColor();
        _0x17cdf4.style.backgroundImage = "url(\"https://files.zohopublic.com.cn/public/workdrive-public/download/dqd1mf1300112c5d24f458d5d45586964046a?x-cli-msg=%7B%22linkId%22%3A%221rINvdZfoXu-330F6%22%2C%22isFileOwner%22%3Afalse%2C%22version%22%3A%221.0%22%2C%22isWDSupport%22%3Afalse%7D\")";
        _0x17cdf4.style.backgroundSize = "100% 100%";
        _0x17cdf4.style.backgroundPosition = "center";
        _0xbf2e7f.innerHTML = "自动讲解<span style=\"color: red; font-weight: bold; font-size: 1.3em;\">" + spvalue + "</span>号商品||错误<span style=\"color: red; font-weight: bold; font-size: 1.3em;\">" + e + "</span>次||累计<span style=\"color: red; font-weight: bold; font-size: 1.3em;\">" + jjsum + "</span>次||间隔<span style=\"color: red; font-weight: bold; font-size: 1.3em;\">" + minValue + "</span>秒-<span style=\"color: red; font-weight: bold; font-size: 1.3em;\">" + maxValue + "</span>秒";
      }
    }
  }
  GM_xmlhttpRequest(createRequestConfig(createPostData(_0x24fe7b, _0x2503fb)));
  jjsum++;
  if (!stop) {
    return;
  }
}
function decodeMessage(_0x1f0cfd) {
  return decodeURIComponent(atob(_0x1f0cfd).split("").map(function (_0x37d6e6) {
    return "%" + ("00" + _0x37d6e6.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
}
function startchajian() {
  let _0x3ecb1f = document.documentElement.outerHTML;
  var _0x4cc8bc = /"shop_name":"(.*?)"/;
  var _0x24ba12 = _0x3ecb1f.match(_0x4cc8bc);
  var _0x2b2646 = /"toutiao_id":"(\d+)"/;
  var _0x1e07aa = _0x3ecb1f.match(_0x2b2646);
  if (_0x24ba12 && _0x24ba12[1]) {
    user = _0x24ba12[1];
    userid = _0x1e07aa[1];
    dd = "抖店工作台";
    initLogin();
  } else {
    let _0xc88ca7 = setInterval(function () {
      let _0x3e43d8 = document.querySelectorAll(".header-role-menu__item-number");
      let _0x391b9f = document.querySelectorAll(".btn-item-role-exchange-name__title");
      for (let _0x588725 = 0; _0x588725 < _0x3e43d8.length; _0x588725++) {
        let _0xa6174c = _0x3e43d8[_0x588725];
        userid = _0xa6174c.innerText.trim();
        if (/^\d{8,25}$/.test(userid)) {
          clearInterval(_0xc88ca7);
          let _0x34de70 = _0x391b9f[0];
          user = _0x34de70.innerText.trim();
          initLogin();
          return;
        }
      }
    }, 1000);
    user = false;
  }
}
function yaoqing(_0x3dbf81) {
  const _0x4cbfd0 = {
    username: user,
    userid: userid,
    yao: _0x3dbf81
  };
  console.log(_0x4cbfd0);
  const _0x34648d = {
    "Content-Type": "application/json; charset=utf-8"
  };
  GM_xmlhttpRequest({
    method: "POST",
    url: yaoyanz,
    headers: _0x34648d,
    data: JSON.stringify(_0x4cbfd0),
    onload: function (_0x5d408c) {
      let _0x5e7f12 = _0x5d408c.responseText;
      if (!_0x5e7f12.includes("code")) {
        yaoyanz = "http://jiangjie.hppro1.hpnu.cn/yao.php";
        return;
      }
      let _0x276d66 = JSON.parse(_0x5e7f12);
      console.log(_0x276d66.code);
      console.log(_0x276d66.msg);
      if (_0x276d66.code == 200) {
        showCongrats7();
        const _0x1b69a8 = document.getElementById("invite-btn");
        _0x1b69a8.textContent = "拉新免费得会员";
        queryRechargeStatus();
      } else {
        createZtCard(sb, "操作失败", decodeUnicode(_0x276d66.msg), "rgba(250, 78, 78, 1)");
      }
    },
    onerror: function () {}
  });
}
function showRechargeDialog() {
  const _0x1dbb62 = document.getElementById("qiehuanlogin");
  _0x1dbb62.textContent == "登录灵活账号" ? createModal() : createModall();
  if (user == false) {
    createZtCard(cg, "操作成功", "正在登陆请稍后...再试", "#76fa4eff");
    return;
  }
}
function showInviteDialog() {
  const _0x70546f = document.getElementById("invite-btn");
  _0x70546f.textContent == "拉新免费得会员" ? (modal5.style.display = "flex", loadData5()) : (inviteInput6.value = "", modal6.style.display = "flex");
}
function decodeUnicode(_0x499ed2) {
  return _0x499ed2.replace(/\\u[\da-f]{4}/gi, _0x45a39a => String.fromCharCode(parseInt(_0x45a39a.slice(2), 16)));
}
function calculateDaysRemaining(_0x47200c) {
  try {
    let _0x19c477;
    _0x47200c.includes(" ") ? _0x19c477 = new Date(_0x47200c.replace(" ", "T") + "Z") : _0x19c477 = new Date(_0x47200c + "T00:00:00Z");
    const _0x10b974 = new Date();
    const _0xd8f060 = _0x19c477 - _0x10b974;
    const _0x5b72bf = Math.ceil(_0xd8f060 / 86400000);
    return _0x5b72bf;
  } catch (_0x7ea4c4) {
    console.error("日期计算错误:", _0x7ea4c4);
    return null;
  }
}
function getVipStatus(_0x28204d) {
  if (_0x28204d > 30) {
    return "VIP剩余 " + _0x28204d + " 天";
  } else {
    if (_0x28204d > 7) {
      return "VIP剩余 " + _0x28204d + " 天";
    } else {
      if (_0x28204d > 0) {
        return "VIP即将到期，剩余 " + _0x28204d + " 天";
      } else {
        return _0x28204d === 0 ? "VIP今天到期" : "VIP已过期 " + Math.abs(_0x28204d) + " 天";
      }
    }
  }
}
function quanx() {
  !window.splistid && (console.log("空的"), clickRefreshButton());
  let _0x1062fd = document.getElementById("vip-status");
  let _0x42e3fd = document.getElementById("expire-date");
  const _0x42ac38 = document.getElementById("refresh-btn");
  let _0x355b49 = document.getElementById("invite-btn");
  if (quanxcishu > 3) {
    window.closeLoading();
    return;
  }
  quanxcishu++;
  chaxun = false;
  window.openLoading("登陆中...长时间未关闭此弹窗说明服务器错误请稍后重试 <br>影响使用浏览器右上角碎片可关闭，关闭后刷新<br>长时间未修复请加群1067390852提醒修复");
  _0x42ac38.textContent = "刷新会员状态";
  let _0x21fc9c = {
    username: user,
    userid: userid,
    isdoudian: dd,
    ce: false
  };
  if (!zhucemf7day) {
    const _0x12ebcd = {
      username: user,
      userid: userid,
      isdoudian: dd,
      ce: true
    };
    _0x21fc9c = _0x12ebcd;
  }
  GM_xmlhttpRequest({
    method: "POST",
    url: yanz,
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    data: JSON.stringify(_0x21fc9c),
    onload: function (_0x46ca11) {
      let _0x5c9090 = _0x46ca11.responseText;
      console.log(_0x5c9090);
      if (!_0x5c9090.includes("date")) {
        yanz = "http://jiangjie.hppro1.hpnu.cn/login.php";
        quanx();
        return;
      }
      let _0x8c2f98 = JSON.parse(_0x5c9090);
      console.log(_0x8c2f98);
      zzjz = false;
      if (user == false) {
        window.closeLoading();
        createZtCard(sb, "操作失败", "获取用户信息失败请刷新页面重试", "rgba(250, 78, 78, 1)");
        return;
      }
      datevip = _0x8c2f98.date;
      cjrq = _0x8c2f98.Createdate.slice(0, 10);
      yao = _0x8c2f98.yao;
      inviteCode5.value = "我正在使用巨量百应自动弹讲解工具超级好用，商品自动弹窗、增加商品曝光、自动回复公屏、自动中控、扫码加小黄车、快速修改库存等功能嘎嘎顺手，\n我的邀请码是" + yao + "\n简洁版教程快速上手\nhttps://workdrive.zohopublic.com.cn/writer/open/tfj1o811909a48671411a86e105d718c76676\n不会用加群1067390852咨询";
      isnew = _0x8c2f98.isnew;
      isnew == 1;
      if (_0x8c2f98.ifvip == "mmmm") {
        window.closeLoading();
        vipuser = true;
        datevip = null;
        addExplainButtons();
      } else {
        if (_0x8c2f98.vip == true) {
          const _0x52882d = calculateDaysRemaining(datevip);
          const _0x249b53 = datevip.slice(0, 10);
          const _0x163f48 = new Date();
          const _0x3bcf77 = new Date(_0x163f48);
          _0x3bcf77.setDate(_0x163f48.getDate() + 7);
          const _0x509d24 = _0x3bcf77.toISOString().slice(0, 10);
          const _0x3acc36 = new Date(_0x163f48);
          _0x3acc36.setDate(_0x163f48.getDate() + 1);
          console.log(isnew);
          window.closeLoading();
          vipuser = true;
          isnew == 0 && cjrq == _0x3acc36.toISOString().slice(0, 10) && (_0x355b49.textContent = "填写邀请码", inviteInput6.value = "", modal6.style.display = "flex", localStorage.setItem("zhuce-mf-7day", true));
          _0x249b53 === _0x509d24;
          createZtCard(cg, "操作成功", decodeMessage("PHNwYW4gc3R5bGU9ImNvbG9yOiBncmVlbjsiPuWwiui0teeahOS8muWRmOeUqOaIt+aCqOWlvTwvc3Bhbj4="), "#76fa4eff");
          addExplainButtons();
          _0x42e3fd.textContent = "会员有效期截至到" + datevip;
          _0x1062fd.textContent = "VIP状态（临时账号）：有效  " + getVipStatus(_0x52882d);
          _0x1062fd.style.color = "#51cf66";
          _0x42e3fd.style.color = _0x52882d <= 7 ? "#ff6b6b" : "#fff";
        } else {
          const _0x4a15af = calculateDaysRemaining(datevip);
          window.closeLoading();
          createModal();
          createZtCard(sb, "会员已过期", decodeMessage("PHNwYW4gc3R5bGU9ImNvbG9yOiByZWQ7Ij7mgqjlpb0s5oKo5b2T5YmN5Lya5ZGY5bey6L+H5pyf77yM6K+35Y+K5pe25YWF5YC8PC9zcGFuPg=="), "rgba(250, 78, 78, 1)");
          addExplainButtons();
          _0x1062fd.textContent = "VIP状态（临时账号）：未激活  " + getVipStatus(_0x4a15af);
          _0x1062fd.style.color = "#ff6b6b";
          _0x42e3fd.textContent = "到期时间：" + datevip + getVipStatus(_0x4a15af);
        }
      }
    },
    onerror: function () {
      yanz = "http://jiangjie.hppro1.hpnu.cn/login.php";
      quanx();
    }
  });
}
const video = document.createElement("video");
video.style.display = "none";
video.muted = true;
video.autoplay = true;
const canvas = document.createElement("canvas");
canvas.width = 1;
canvas.height = 1;
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, 1, 1);
video.srcObject = canvas.captureStream();
document.body.appendChild(video);
function copyToClipboard(_0x44b055) {
  navigator.clipboard.writeText(_0x44b055).then(() => {
    createZtCard(cg, "操作成功", "内容已复制到剪贴板<br>" + _0x44b055, "#76fa4eff");
  }).catch(_0x5502d5 => {
    createZtCard(cg, "操作成功", "复制失败:", _0x5502d5, "#76fa4eff");
    fallbackCopyText(_0x44b055);
  });
}
const styletan = document.createElement("style");
styletan.textContent = "\n        .custom-modal-tan {\n            display: none;\n            position: fixed;\n            z-index: 10000;\n            left: 0;\n            top: 0;\n            width: 100%;\n            height: 100%;\n            background-color: rgba(0,0,0,0.5);\n        }\n        \n        .modal-content-tan {\n            background-color: #fefefe;\n            margin: 15% auto;\n            padding: 0;\n            border-radius: 8px;\n            width: 400px;\n            max-width: 90%;\n            box-shadow: 0 4px 20px rgba(0,0,0,0.2);\n            animation: modalFadeInTan 0.3s;\n        }\n        \n        @keyframes modalFadeInTan {\n            from {opacity: 0; transform: translateY(-50px);}\n            to {opacity: 1; transform: translateY(0);}\n        }\n        \n        .modal-header-tan {\n            padding: 16px 20px;\n            background: #4a6ee0;\n            color: white;\n            border-radius: 8px 8px 0 0;\n        }\n        \n        .modal-header-tan h2 {\n            margin: 0;\n            font-size: 18px;\n        }\n        \n        .modal-body-tan {\n            padding: 20px;\n            line-height: 1.5;\n            color: #333;\n        }\n        \n        .modal-footer-tan {\n            padding: 12px 20px;\n            text-align: right;\n            border-top: 1px solid #eee;\n        }\n        \n        .modal-btn-tan {\n            padding: 8px 16px;\n            margin-left: 10px;\n            border: none;\n            border-radius: 4px;\n            cursor: pointer;\n            font-size: 14px;\n            transition: background-color 0.2s;\n        }\n        \n        .confirm-btn-tan {\n            background-color: #4a6ee0;\n            color: white;\n        }\n        \n        .confirm-btn-tan:hover {\n            background-color: #3a5ec0;\n        }\n        \n        .cancel-btn-tan {\n            background-color: #f0f0f0;\n            color: #333;\n        }\n        \n        .cancel-btn-tan:hover {\n            background-color: #e0e0e0;\n        }\n    ";
document.head.appendChild(styletan);
function showModalTan(_0x16a30a, _0x33229e, _0x2fa05d, _0x4b2c10 = {}) {
  const _0xda0fc4 = {
    confirmTextTan: "确定",
    cancelTextTan: "取消",
    showCancelTan: true,
    onCancelTan: null
  };
  const _0x6760b5 = {
    ..._0xda0fc4,
    ..._0x4b2c10
  };
  const _0x39ba22 = _0x6760b5;
  const _0x1a27a7 = document.getElementById("customModalTan");
  _0x1a27a7 && _0x1a27a7.remove();
  const _0x2f236f = "\n        <div id=\"customModalTan\" class=\"custom-modal-tan\">\n            <div class=\"modal-content-tan\">\n                <div class=\"modal-header-tan\">\n                    <h2>" + _0x16a30a + "</h2>\n                </div>\n                <div class=\"modal-body-tan\">\n                    " + _0x33229e + "\n                </div>\n                <div class=\"modal-footer-tan\">\n                    " + (_0x39ba22.showCancelTan ? "<button id=\"modalCancelTan\" class=\"modal-btn-tan cancel-btn-tan\">" + _0x39ba22.cancelTextTan + "</button>" : "") + "\n                    <button id=\"modalConfirmTan\" class=\"modal-btn-tan confirm-btn-tan\">" + _0x39ba22.confirmTextTan + "</button>\n                </div>\n            </div>\n        </div>";
  document.body.insertAdjacentHTML("beforeend", _0x2f236f);
  const _0x268d98 = document.getElementById("customModalTan");
  const _0x8cfb19 = document.getElementById("modalConfirmTan");
  const _0x3104b3 = document.getElementById("modalCancelTan");
  _0x268d98.style.display = "block";
  _0x8cfb19.addEventListener("click", function () {
    typeof _0x2fa05d === "function" && _0x2fa05d();
    _0x268d98.remove();
  });
  _0x3104b3 && _0x3104b3.addEventListener("click", function () {
    typeof _0x39ba22.onCancelTan === "function" && _0x39ba22.onCancelTan();
    _0x268d98.remove();
  });
  const _0x2d8f9b = function (_0x7be762) {
    _0x7be762.key === "Escape" && (_0x268d98.remove(), document.removeEventListener("keydown", _0x2d8f9b));
  };
  document.addEventListener("keydown", _0x2d8f9b);
  return function _0x3ca78a() {
    _0x268d98.remove();
    document.removeEventListener("keydown", _0x2d8f9b);
  };
}
let diyi = true;
const observer = new MutationObserver(() => {
  const _0x2c4bbb = location.href;
  lastUrl.includes("/live/control?") && diyi && (startchajian(), diyi = false);
  if (_0x2c4bbb !== lastUrl && _0x2c4bbb.includes("/live/control?")) {
    console.log("🔍 检测到URL变化:", lastUrl, "→", _0x2c4bbb);
    checkAutoLogin() && autoLogin();
    lastUrl = _0x2c4bbb;
    isAutoLoginRunning() && !_0x2c4bbb.includes("/live/control?btm_ppre=") && (console.log("在自动登录"), stopAutoLogin());
    if (document.getElementById("gm-scroll-banner")) {
      return;
    }
    startchajian();
  }
  document.querySelector(".newComment-sOpt3V") && !hasInserted2 && insertExtBtn2();
  if (requestUrl == "https://fxg.jinritemai.com/api/anchor/livepc/setcurrent") {
    const _0x3006d7 = Array.from(document.querySelectorAll(".auxo-btn")).find(_0xe327ee => _0xe327ee.textContent.includes("下架"));
    if (!_0x3006d7) {
      return;
    }
    const _0x2a5c60 = document.createElement("style");
    _0x2a5c60.textContent = "\n        [data-theme=doudian] .liveData-LTDG0d {\n            background-color: #fff !important;\n\t\t\tstyle.color: #000000;  !important\n        }\n     ";
    document.head.appendChild(_0x2a5c60);
    document.querySelectorAll(".auxo-radio-button-wrapper-checked").forEach(_0x1e349f => {
      _0x1e349f.style.borderColor = "#fff";
      _0x1e349f.style.color = "#000000";
    });
    document.querySelectorAll(".commentTag-a4qpmn").forEach(_0xb85ff7 => _0xb85ff7.style.color = "#000000");
  } else {
    const _0x10a174 = Array.from(document.querySelectorAll(".lvc2-grey-btn")).find(_0xdc796b => _0xdc796b.textContent.includes("下架"));
    if (!_0x10a174) {
      return;
    }
    const _0x4482b4 = document.querySelector(".logo img");
    _0x4482b4 && (_0x4482b4.src = "https://files.zohopublic.com.cn/public/workdrive-public/download/kpgnr710fd0cc28644d21ab09cfa4e8e9ee13?x-cli-msg=%7B%22linkId%22%3A%221rINvdZfPea-330F6%22%2C%22isFileOwner%22%3Afalse%2C%22version%22%3A%221.0%22%2C%22isWDSupport%22%3Afalse%7D", _0x4482b4.srcset = "");
    document.querySelectorAll(".commentTag-a4qpmn").forEach(_0x134521 => _0x134521.style.color = "#000000");
  }
  const _0x3d9825 = Array.from(document.querySelectorAll(".actionItem-Mrn7Di")).find(_0x402101 => _0x402101.textContent.includes("刷新列表"));
  if (!_0x3d9825) {
    return;
  }
  addExplainButtons();
  if (document.getElementById("gm-scroll-banner")) {
    return;
  }
  const _0x3035c1 = document.createElement("div");
  _0x3035c1.id = "gm-scroll-banner";
  _0x3035c1.style.cssText = "\n            overflow: hidden;\n            white-space: nowrap;\n            width: 280px;\n            font-size: 14px;\n            line-height: 30px;\n            color: #F40002;\n            margin-right: 12px;\n            display: inline-block;\n            vertical-align: middle;\n        ";
  const _0x16a919 = document.createElement("span");
  _0x16a919.textContent = "";
  _0x16a919.style.cssText = "\n\t\tbackground-color: rgba(255, 255, 255, 0.8);\n            display: inline-block;\n            padding-left: 100%;\n            animation: gmScroll 25s linear infinite;\n        ";
  const _0x378a4b = document.createElement("style");
  _0x378a4b.textContent = "\n            @keyframes gmScroll {\n                0%   { transform: translateX(0%); }\n                100% { transform: translateX(-100%); }\n            }\n\t\t\t\t.liveData-LTDG0d .container-smnnms .header-t7A8aW .buttons-uvL74W .dashStyle-kq85LG\n\t\t\t\t{\n\t\t\t\tborder: 1px solid #F40002 !important;\n\t\t\t\tcolor: #F40002 !important;\n\t\t\t\t}\n\t\t\t\t.newCommentNotice-x7cCT4 .refreshIcon-opjwlz\n\t\t\t\t{\n\t\t\t\tbackground: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PHBhdGggc3Ryb2tlPSJyZ2JhKDI1MSwgOTMsIDE1MSwgMC43MikiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTQuNDY1IDQgOCA3LjUzNiAxMS41MzYgNE00LjQ2NSA4LjUgOCAxMi4wMzYgMTEuNTM2IDguNSIvPjwvc3ZnPg==) no-repeat 50% !important;\n\t\t\t\t}\n\t\t\t\tbody .auxo-layout .auxo-menu-item.auxo-menu-item-selected\n\t\t\t\t{\n        color: #F40002 !important;\n      }\n\t\t\t\tbody .auxo-layout .auxo-menu-submenu-selected .auxo-menu-submenu-title, body .auxo-layout .auxo-menu-submenu-title:hover\n\t\t\t\t{\n        color: #F40002 !important;\n      }\n\t\t\t\tbody .auxo-layout .auxo-menu-submenu .auxo-menu-sub .auxo-menu-item.auxo-menu-item-selected \n\t\t\t\t {\n        color: #F40002 !important;\n      }\n\t\t\t\tbody .auxo-layout .auxo-menu-submenu .auxo-menu-sub .auxo-menu-item:hover {\n        color: #F40002 !important;\n      }\n\n\t  div.tagItem-ltoj5s {\n        color: #F40002 !important;\n      }\n        ";
  _0x3035c1.appendChild(_0x16a919);
  _0x3d9825.parentNode.insertBefore(_0x3035c1, _0x3d9825);
});
const _0x3efcf6 = {
  childList: true,
  subtree: true
};
observer.observe(document.body, _0x3efcf6);
const style = document.createElement("style");
style.textContent = "\n        .recharge-modal {\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background-color: rgba(0, 0, 0, 0.5);\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            z-index: 77777;\n            animation: fadeIn 0.3s ease;\n        }\n\n        .recharge-content {\n            background: #fff;\n            border-radius: 16px;\n            padding: 30px;\n            max-width:800px;\n            width: 90           border-radius: 16px;\n            padding: 30px;\n            max-width:800px;\n            width: 90%;\n            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n            animation: slideIn 0.3s ease;\n        }\n\n        .recharge-header {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            margin-bottom: 20px;\n        }\n\n        .recharge-title {\n            font-size: 24px;\n            font-weight: 600;\n            color: #333;\n            margin: 0;\n        }\n\n        .close-btn {\n            background: none;\n            border: none;\n            font-size: 28px;\n            cursor: pointer;\n            color: #999;\n            transition: color 0.3s;\n        }\n\n        .close-btn:hover {\n            color: #333;\n        }\n\n        .recharge-description {\n            color: #666;\n            line-height: 1.6;\n            margin-bottom: 20px;\n            text-align: left;\n\t\t\tfont-size: 18px;\n        }\n\n        .qr-code-container {\n            text-align: center;\n            margin-bottom: 15px;\n        }\n\n        .qr-code {\n            max-width: 350px;\n            height: auto;\n            border: 1px solid #eee;\n            border-radius: 8px;\n            padding: 10px;\n        }\n\n        .action-buttons {\n            display: flex;\n            gap: 12px;\n            justify-content: center;\n        }\n\n        .btn {\n            padding: 12px 24px;\n            border: none;\n            border-radius: 8px;\n            font-size: 16px;\n            cursor: pointer;\n            transition: all 0.3s;\n            font-weight: 500;\n        }\n\n        .btn-primary {\n            background-color: #007bff;\n            color: white;\n        }\n\n        .btn-primary:hover {\n            backgroun #0056b3;\n            transform: translateY(-1px);\n            box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);\n        }\n\n        .btn-secondary {\n            background-color: #6c757d;\n            color: white;\n        }\n\n        .btn-secondary:hover {\n            background-color: #545b62;\n            transform: translateY(-1px);\n            box-shadow: 0 4px 12px rgba(108, 117, 125, 0.3);\n        }\n\n        .status-message {\n            margin-top: 15px;\n            padding: 10px;\n            border-radius: 6px;\n            text-align: center;\n            font-size: 14px;\n            display: none;\n        }\n\n        .status-success {\n            background-color: #d4edda;\n            color: #155724;\n            border: 1px solid #c3e6cb;\n        }\n\n        .status-error {\n            background-color: #f8d7da;\n            color: #721c24;\n            border: 1px solid #f5c6cb;\n        }\n\n        .status-loading {\n            background-color: #d1ecf1;\n            color: #0c5460;\n            border: 1px solid #bee5eb;\n        }\n\n        @keyframes fadeIn {\n            from { opacity: 0; }\n            to { opacity: 1; }\n        }\n\n        @keyframes slideIn {\n            from {\n                transform: translateY(-20px);\n                opacity: 0;\n            }\n            to {\n                transform: translateY(0);\n                opacity: 1;\n            }\n        }\n    ";
document.head.appendChild(style);
function createModall() {
  const _0x59e6e4 = document.createElement("div");
  _0x59e6e4.className = "recharge-modal";
  _0x59e6e4.innerHTML = "\n       <div class=\"recharge-content\">\n    <div class=\"recharge-header\">\n      <h2 class=\"recharge-title\">充值中心</h2>\n      <button class=\"close-btn\">&times;</button>\n    </div>\n\n    <!-- 左右布局 -->\n    <div style=\"display:flex; gap:20px; align-items:flex-start; flex-wrap:wrap;\">\n      <!-- 左侧文字 -->\n      <div class=\"recharge-description\" style=\"flex:1 1 280px; margin:0;\">\n\t<span style=\"color: #f3fc46ff;\">如果您是咸鱼购买请加群或者咸鱼联系作者解决 </span><br>\n    <span style=\"color: red;\">如果您是新注册的并且还有余额 请打开插件设置个人中心点击转换按钮转换数据 </span>\n   <br>\n        <span style=\"font-size:1.1em;color: red;\">❗充值教程❗：<br>\n        1. 请使用微信扫描右侧二维码<br>\n        2. 选择要的套餐价格<br>\n        3. 在留言选项留言你的用户名<br></span>\n        \n          <span style=\"font-size:1.5em;color:#ff3b7f;\">👆非常重要请看我！👇</span><br>\n        <strong style=\"font-size:3.5em;color:#ff3b7f;\">\n          " + window.userdata.user.username + "</strong>\n        <br>\n\t\t<span style=\"color:green;\">临时账号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;灵活账号（当前登录）<br>\n\t\t  &nbsp;1.9￥/周&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.9￥/周（两个设备同时使用）<br>\n          &nbsp;7.6￥/月&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.6￥/月（两个设备同时使用）<br>\n          &nbsp;21.8￥/季度&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;33.9￥/季度（两个设备同时使用）<br>\n          &nbsp;88.8￥/年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;128.8￥/年（两个设备同时使用）<br>\n          临时账号跟直播间绑定 灵活账号不绑定直播间 可以两个设备同时登陆 需要更多设备请加群\n        </span><br>\n        充值完成后等待到账，由于是手动充值忙的时候可能会比较慢，请耐心等待... 可以点击下方按钮刷新状态<br>\n        在忙看不到等长时间未到账请加群催促 售后QQ群1067390852<br>\n\t   </div>\n\n      <!-- 右侧二维码 -->\n      <div style=\"flex:0 0 200px; text-align:center;\">\n        <img class=\"qr-code\"\n             style=\"width:100%; max-width:280px;\"\n             src=\"https://files.zohopublic.com.cn/public/workdrive-public/download/w86hs08c43bcc9b27446782cbd65be5c868bb?x-cli-msg=%7B%22linkId%22%3A%221rINvdZgTz3-330F6%22%2C%22isFileOwner%22%3Afalse%2C%22version%22%3A%221.0%22%2C%22isWDSupport%22%3Afalse%7D\"\n             alt=\"充值二维码\">\n      </div>\n    </div>\n\n    <!-- 状态消息 -->\n    <div id=\"statusMessage\" class=\"status-message\" style=\"margin-bottom:20px;\"></div>\n\n    <!-- 按钮区：增大间距、居中对齐 -->\n    <div class=\"action-buttons\" style=\"display:flex; justify-content:center; gap:30px; margin-top:25px;\">\n\t<button class=\"btn btn-primary\" id=\"fenxBtn\" style=\"display: none;\">免费得会员</button>\n      <button class=\"btn btn-primary\" id=\"queryBtn2\">查询状态</button>\n      <button class=\"btn btn-secondary\" id=\"closeBtn\">关闭</button>\n    </div>\n  </div>\n        ";
  document.body.appendChild(_0x59e6e4);
  _0x59e6e4.querySelector(".close-btn").addEventListener("click", closeRechargeModal);
  _0x59e6e4.querySelector("#closeBtn").addEventListener("click", closeRechargeModal);
  _0x59e6e4.querySelector("#queryBtn2").addEventListener("click", queryRechargeStatus2);
  _0x59e6e4.querySelector("#fenxBtn").addEventListener("click", fenx);
  _0x59e6e4.addEventListener("click", _0x45fe58 => {
    if (_0x45fe58.target === _0x59e6e4) {
      closeRechargeModal();
    }
  });
}
function createModal() {
  const _0x4c26d8 = document.getElementById("qiehuanlogin");
  _0x4c26d8.textContent == "退出登录" && (chaxun = true);
  const _0x5ba817 = document.createElement("div");
  _0x5ba817.className = "recharge-modal";
  _0x5ba817.innerHTML = "\n       <div class=\"recharge-content\">\n    <div class=\"recharge-header\">\n      <h2 class=\"recharge-title\">充值中心</h2>\n      <button class=\"close-btn\">&times;</button>\n    </div>\n\n    <!-- 左右布局 -->\n    <div style=\"display:flex; gap:20px; align-items:flex-start; flex-wrap:wrap;\">\n      <!-- 左侧文字 -->\n      <div class=\"recharge-description\" style=\"flex:1 1 280px; margin:0;\">\n\t<span style=\"color: #f3fc46ff;\">如果您是咸鱼购买请加群或者咸鱼联系作者解决 </span><br>\n    <span style=\"color: red;\">如果您是新注册的并且还有余额 请打开插件设置个人中心点击转换按钮转换数据 </span>\n   <br>\n        <span style=\"font-size:1.1em;color: red;\">❗充值教程❗：<br>\n        1. 请使用微信扫描右侧二维码<br>\n        2. 点击下方蓝色字体的其他金额<br>\n        3. 临时账号在留言选项留言数字<br></span>\n        \n          <span style=\"font-size:1.5em;color:#ff3b7f;\">👆非常重要请看我！👇</span><br>\n        <strong style=\"font-size:3.5em;color:#ff3b7f;\">\n          " + String(userid).slice(-6) + "</strong>\n        <br>\n\t\t<span style=\"color:green;\">临时账号（当前登录）&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;灵活账号（你可能还没有注册登录无法充值）<br>\n\t\t  &nbsp;1.9￥/周&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.9￥/周（两个设备同时使用）<br>\n          &nbsp;7.6￥/月&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11.6￥/月（两个设备同时使用）<br>\n          &nbsp;21.8￥/季度&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;33.9￥/季度（两个设备同时使用）<br>\n          &nbsp;88.8￥/年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;128.8￥/年（两个设备同时使用）<br>\n          临时账号跟直播间绑定 灵活账号不绑定直播间 可以两个设备同时登陆 需要更多设备请加群\n        </span><br>\n        充值完成后等待到账，由于是手动充值忙的时候可能会比较慢，请耐心等待... 可以点击下方按钮刷新状态<br>\n        在忙看不到等长时间未到账请加群催促 售后QQ群1067390852<br>\n\t   </div>\n\n      <!-- 右侧二维码 -->\n      <div style=\"flex:0 0 200px; text-align:center;\">\n        <img class=\"qr-code\"\n             style=\"width:100%; max-width:280px;\"\n             src=\"https://files.zohopublic.com.cn/public/workdrive-public/download/w86hs08c43bcc9b27446782cbd65be5c868bb?x-cli-msg=%7B%22linkId%22%3A%221rINvdZgTz3-330F6%22%2C%22isFileOwner%22%3Afalse%2C%22version%22%3A%221.0%22%2C%22isWDSupport%22%3Afalse%7D\"\n             alt=\"充值二维码\">\n      </div>\n    </div>\n\n    <!-- 状态消息 -->\n    <div id=\"statusMessage\" class=\"status-message\" style=\"margin-bottom:20px;\"></div>\n\n    <!-- 按钮区：增大间距、居中对齐 -->\n    <div class=\"action-buttons\" style=\"display:flex; justify-content:center; gap:30px; margin-top:25px;\">\n\t<button class=\"btn btn-primary\" id=\"fenxBtn\" style=\"display: none;\">免费得会员</button>\n      <button class=\"btn btn-primary\" id=\"queryBtn\">查询状态</button>\n      <button class=\"btn btn-secondary\" id=\"closeBtn\">关闭</button>\n    </div>\n  </div>\n        ";
  document.body.appendChild(_0x5ba817);
  _0x5ba817.querySelector(".close-btn").addEventListener("click", closeRechargeModal);
  _0x5ba817.querySelector("#closeBtn").addEventListener("click", closeRechargeModal);
  _0x5ba817.querySelector("#queryBtn").addEventListener("click", queryRechargeStatus);
  _0x5ba817.querySelector("#fenxBtn").addEventListener("click", fenx);
  _0x5ba817.addEventListener("click", _0x54bd60 => {
    if (_0x54bd60.target === _0x5ba817) {
      closeRechargeModal();
    }
  });
}
function closeRechargeModal() {
  chaxun = false;
  const _0x49dc24 = document.querySelector(".recharge-modal");
  _0x49dc24 && _0x49dc24.remove();
}
function fenx() {
  modal5.style.display = "flex";
  loadData5();
}
function queryRechargeStatus2() {
  chaxun = true;
  autoLogin();
}
function queryRechargeStatus() {
  const _0x27dc23 = document.getElementById("refresh-btn");
  const _0x1a6a98 = document.getElementById("qiehuanlogin");
  const _0x24cb3c = document.getElementById("zhuanhuan");
  _0x24cb3c.style.display = "none";
  _0x1a6a98.textContent = "登录灵活账号";
  window.openLoading("查询中...长时间未关闭此弹窗说明服务器错误请稍后重试");
  const _0x3186a8 = document.querySelector(".recharge-modal") !== null;
  if (_0x3186a8) {
    const _0x59032e = document.getElementById("statusMessage");
    _0x59032e.style.display = "block";
    _0x59032e.className = "status-message status-loading";
    _0x59032e.textContent = "正在查询充值状态...";
  }
  let _0x3c66a8 = document.getElementById("vip-status");
  let _0xcce860 = document.getElementById("expire-date");
  const _0x229b6c = {
    username: user,
    userid: userid,
    isdoudian: dd
  };
  console.log(_0x229b6c);
  GM_xmlhttpRequest({
    method: "POST",
    url: yanz,
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    data: JSON.stringify(_0x229b6c),
    onload: function (_0x35a15c) {
      _0x27dc23.textContent = "刷新会员状态";
      let _0x48a564 = _0x35a15c.responseText;
      console.log(_0x48a564);
      if (!_0x48a564.includes("date")) {
        yanz = "http://zikx.back1.idcfengye.com/login.php";
        queryRechargeStatus();
        return;
      }
      let _0x4dbbbc = JSON.parse(_0x48a564);
      zzjz = false;
      if (user == false) {
        window.closeLoading();
        _0x3186a8 && (statusMessage.className = "status-message status-error", statusMessage.textContent = "获取用户信息失败请刷新页面重试");
        createZtCard(sb, "操作失败", "获取用户信息失败请刷新页面重试", "rgba(250, 78, 78, 1)");
        return;
      }
      stopAutoLogin();
      datevip = _0x4dbbbc.date;
      if (_0x4dbbbc.vip == true) {
        window.closeLoading();
        vipuser = true;
        const _0x46a945 = calculateDaysRemaining(datevip);
        createZtCard(cg, "操作成功", decodeMessage("PHNwYW4gc3R5bGU9ImNvbG9yOiBncmVlbjsiPuWwiui0teeahOS8muWRmOeUqOaIt+aCqOWlvTwvc3Bhbj4="), "#76fa4eff");
        addExplainButtons();
        _0xcce860.textContent = "会员有效期截至到" + datevip;
        _0x3c66a8.textContent = "VIP状态（临时账号）：有效  " + getVipStatus(_0x46a945);
        _0x3c66a8.style.color = "#51cf66";
        _0xcce860.style.color = _0x46a945 <= 7 ? "#ff6b6b" : "#fff";
        _0x3186a8 && (statusMessage.className = "status-message status-success", statusMessage.textContent = "查询成功会员有效期截至到" + datevip + getVipStatus(_0x46a945));
      } else {
        window.closeLoading();
        const _0x356fc7 = calculateDaysRemaining(datevip);
        vipuser = false;
        createZtCard(sb, "您的会员已过期", decodeMessage("PHNwYW4gc3R5bGU9ImNvbG9yOiByZWQ7Ij7mgqjlpb0s5oKo5b2T5YmN5Lya5ZGY5bey6L+H5pyf77yM6K+35Y+K5pe25YWF5YC8PC9zcGFuPg=="), "rgba(250, 78, 78, 1)");
        addExplainButtons();
        _0x3186a8 && (statusMessage.className = "status-message status-error", statusMessage.textContent = "会员" + datevip + "请充值");
        _0x3c66a8.textContent = "VIP状态（临时账号）：未激活  " + getVipStatus(_0x356fc7);
        _0x3c66a8.style.color = "#ff6b6b";
        _0xcce860.textContent = "到期时间：" + datevip + getVipStatus(_0x356fc7);
      }
    },
    onerror: function () {
      window.closeLoading();
      yanz = "http://jiangjie.hppro1.hpnu.cn/login.php";
      queryRechargeStatus();
      _0x3186a8 && (statusMessage.className = "status-message status-error", statusMessage.textContent = "查询失败");
      createZtCard(sb, "操作失败", "后台响应不正常，请重试", "rgba(250, 78, 78, 1)");
    }
  });
}
async function fason(_0x556b53, _0x49a7c0) {
  let _0x27142b = "https://buyin.jinritemai.com/api/anchor/comment/operate_v2";
  requestUrl == "https://fxg.jinritemai.com/api/anchor/livepc/setcurrent" && (_0x27142b = "https://fxg.jinritemai.com/api/anchor/comment/operate_v2");
  const _0x27a00d = {
    operate_type: _0x49a7c0 ? 3 : 2,
    content: _0x556b53
  };
  const _0x24bbaa = await fetch(_0x27142b, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(_0x27a00d)
  });
  const _0x119061 = await _0x24bbaa.json();
  _0x119061?.["code"] == 0 ? createZtCard(cg, "发送成功：", _0x556b53, "#76fa4eff") : createZtCard(sb, "发送失败：", _0x556b53, "#f12e2eff");
}
loadSettings();
const _0x22b452 = {
  el: "#minI",
  min: 5
};
const _0x10e09d = {
  el: "#maxI",
  min: 5
};
const _0x384506 = {
  el: "#maxP",
  min: 1
};
const _0x30ee4b = {
  el: "#delN",
  min: 1
};
const _0x253117 = {
  el: "#psProd",
  min: 1
};
const _0x2247fd = {
  el: "#apProd",
  min: 1
};
[_0x22b452, _0x10e09d, _0x384506, _0x30ee4b, _0x253117, _0x2247fd].forEach(({
  el: _0x40b190,
  min: _0x464d66
}) => {
  const _0x432fab = document.querySelector(_0x40b190);
  const _0x592b36 = () => {
    const _0x1ecf66 = parseFloat(_0x432fab.value);
    if (isNaN(_0x1ecf66) || _0x1ecf66 < _0x464d66) {
      _0x432fab.value = _0x464d66;
    }
  };
  _0x432fab.addEventListener("input", _0x592b36);
  _0x432fab.addEventListener("blur", _0x592b36);
});
let tasks4 = [];
let isRunning4 = false;
let stopFlag4 = false;
const KEY_TASKS4 = "tan_tasks4";
const KEY_LOOP4 = "tan_loop4";
function initTaskControls() {
  loadCfg4();
  document.getElementById("add-event4").addEventListener("click", () => {
    if (!vipuser) {
      createModal();
      createZtCard(sb, "操作失败", "您的余额不足请加群充值~~（如已经充值请刷新状态）", "rgba(250, 78, 78, 1)");
      return;
    }
    tasks4.push({
      type: "event",
      num: parseInt(document.getElementById("event-num4").value)
    });
    saveCfg4();
    render4();
  });
  document.getElementById("add-interval-min4").addEventListener("click", () => {
    tasks4.push({
      type: "interval",
      unit: "min",
      val: parseInt(document.getElementById("interval-min4").value)
    });
    saveCfg4();
    render4();
  });
  document.getElementById("add-interval-sec4").addEventListener("click", () => {
    tasks4.push({
      type: "interval",
      unit: "sec",
      val: parseInt(document.getElementById("interval-sec4").value)
    });
    saveCfg4();
    render4();
  });
  document.getElementById("clear-tasks4").addEventListener("click", () => {
    tasks4 = [];
    saveCfg4();
    render4();
  });
  document.getElementById("run-tasks4").addEventListener("click", async function () {
    if (!vipuser) {
      createModal();
      createZtCard(sb, "操作失败", "您的余额不足请加群充值~~（如已经充值请刷新状态）", "rgba(250, 78, 78, 1)");
      return;
    }
    if (tasks4.length === 1 && tasks4[0].type === "event" && document.getElementById("loop-check4").checked) {
      const _0x285fdf = confirm("⚠️ 当前任务只有一个弹窗任务且无间隔时间，并开启了循环运行，这可能导致页面卡死！\n\n是否自动添加一个 99999 分钟的间隔任务来避免卡死？");
      if (_0x285fdf) {
        const _0x526d2c = {
          type: "interval",
          unit: "min",
          val: 99999
        };
        tasks4.push(_0x526d2c);
        saveCfg4();
        render4();
      } else {
        createZtCard(sb, "自动任务", "已取消运行，请手动添加间隔任务后再运行。", "rgba(250, 78, 78, 1)");
        return;
      }
    }
    const _0x5ee8b5 = this;
    if (isRunning4) {
      stopFlag4 = true;
      _0x5ee8b5.textContent = "运行";
      _0x5ee8b5.style.background = "#2196F3";
      updateStatus4("已停止", "#ccc");
      return;
    }
    if (tasks4.length === 0) {
      createZtCard(sb, "失败", "请先添加任务", "rgba(250, 78, 78, 1)");
      return;
    }
    isRunning4 = true;
    stopFlag4 = false;
    _0x5ee8b5.textContent = "停止";
    _0x5ee8b5.style.background = "#f44336";
    updateStatus4("运行中", "#52c41a");
    const _0x1cce92 = document.getElementById("loop-check4").checked;
    _0x1fbab2: do {
      for (const _0x5df9c1 of tasks4) {
        if (stopFlag4) {
          break _0x1fbab2;
        }
        if (_0x5df9c1.type === "event") {
          if (!window.splistid || !window.splistid[_0x5df9c1.num - 1]) {
            console.error("商品列表不存在或索引超出范围");
            continue;
          }
          draggableId = window.splistid[_0x5df9c1.num - 1].promotion_id;
          jiangjie(draggableId);
          createZtCard(cg, "自动任务", "开始自动弹讲解<br>" + _0x5df9c1.num + "号商品", "#76fa4eff");
          const _0x2e6200 = document.querySelectorAll(".goodsItem-KBGOY5");
          _0x2e6200.forEach(_0x4769f1 => {
            _0x2e6200.forEach(_0x34e735 => {
              if (_0x34e735 !== _0x4769f1) {
                const _0x1954f5 = _0x34e735.querySelector(".explain-btn");
                const _0x13fc20 = _0x34e735.querySelector(".status-text");
                _0x1954f5 && _0x13fc20 && (_0x1954f5.innerHTML = jiangjieanniu, _0x13fc20.textContent = "", _0x34e735.style.border = "rgba(54, 123, 250, 0.2)", _0x34e735.style.backgroundImage = "none", _0x34e735.style.backgroundColor = "#fff");
              }
            });
          });
        } else {
          const _0x2e8b55 = _0x5df9c1.unit === "min" ? _0x5df9c1.val * 60 * 1000 : _0x5df9c1.val * 1000;
          const _0x31b512 = await sleepCancellable(_0x2e8b55);
          if (_0x31b512 === "stopped") {
            break _0x1fbab2;
          }
        }
      }
      if (stopFlag4) {
        break _0x1fbab2;
      }
    } while (_0x1cce92);
    isRunning4 = false;
    stopFlag4 = false;
    _0x5ee8b5.textContent = "运行";
    _0x5ee8b5.style.background = "#2196F3";
    updateStatus4("已停止", "#ccc");
    const _0x114796 = document.querySelector(".goodsItem-KBGOY5[data-rbd-drag-handle-draggable-id=\"" + draggableId + "\"]");
    if (_0x114796) {
      const _0x5a8d9c = _0x114796.querySelector(".status-text");
      const _0x5e4597 = _0x114796.querySelector(".explain-btn");
      _0x5a8d9c && (_0x5e4597.innerHTML = jiangjieanniu, _0x114796.style.border = "none", _0x114796.style.backgroundImage = "none", _0x114796.style.backgroundColor = "#fff", _0x5a8d9c.textContent = "已停止");
    }
    createZtCard(cg, "自动任务", "已停止自动讲解商品", "#fa4e4eff");
    stopExecution();
    document.querySelectorAll(".goodsItem-KBGOY5").forEach(_0x3b1c85 => {
      document.querySelectorAll(".goodsItem-KBGOY5").forEach(_0x5bef58 => {
        if (_0x5bef58 !== _0x3b1c85) {
          const _0x513413 = _0x5bef58.querySelector(".explain-btn");
          const _0x29c46f = _0x5bef58.querySelector(".status-text");
          if (_0x513413 && _0x29c46f) {
            _0x513413.innerHTML = jiangjieanniu;
            _0x29c46f.textContent = "";
            _0x5bef58.style.border = "rgba(54, 123, 250, 0.2)";
            _0x5bef58.style.backgroundImage = "none";
            _0x5bef58.style.backgroundColor = "#fff";
          }
        }
      });
    });
  });
}
function saveCfg4() {
  localStorage.setItem(KEY_TASKS4, JSON.stringify(tasks4));
  localStorage.setItem(KEY_LOOP4, document.getElementById("loop-check4").checked);
}
function loadCfg4() {
  try {
    tasks4 = JSON.parse(localStorage.getItem(KEY_TASKS4) || "[]");
    const _0x40d25a = document.getElementById("loop-check4");
    _0x40d25a && (_0x40d25a.checked = localStorage.getItem(KEY_LOOP4) === "true");
  } catch (_0x70e69a) {
    tasks4 = [];
  }
  render4();
}
function updateStatus4(_0x348925, _0x560737) {
  const _0x4f52d0 = document.getElementById("status-indicator4");
  const _0x27b429 = document.getElementById("status-text4");
  _0x4f52d0 && _0x27b429 && (_0x4f52d0.style.background = _0x560737, _0x27b429.textContent = _0x348925, _0x560737 === "#52c41a" ? _0x4f52d0.style.animation = "pulse4 1.5s infinite" : _0x4f52d0.style.animation = "none");
}
function sleepCancellable(_0x2c4e86) {
  return new Promise(_0x306460 => {
    const _0x41a0c8 = Date.now();
    const _0x16b86d = () => {
      if (stopFlag4) {
        return _0x306460("stopped");
      }
      if (Date.now() - _0x41a0c8 >= _0x2c4e86) {
        return _0x306460("finished");
      }
      requestAnimationFrame(_0x16b86d);
    };
    _0x16b86d();
  });
}
function render4() {
  const _0x2bf66e = document.getElementById("task-list4");
  if (!_0x2bf66e) {
    return;
  }
  _0x2bf66e.innerHTML = "";
  if (tasks4.length === 0) {
    _0x2bf66e.innerHTML = "<div style=\"text-align:center;color:#666;padding:20px;\">暂无任务，点击上方按钮添加任务</div>";
    return;
  }
  tasks4.forEach((_0x326d86, _0xd6bc19) => {
    const _0x381143 = document.createElement("div");
    _0x381143.className = "task-item4 " + _0x326d86.type + "4";
    _0x381143.dataset.idx = _0xd6bc19;
    _0x381143.style.cssText = "display:flex;justify-content:space-between;align-items:center;padding:4px 6px;margin:4px 0;border-radius:3px;cursor:grab;";
    _0x326d86.type === "event" ? _0x381143.style.background = "#e3f2fd" : _0x381143.style.background = "#fff3e0";
    const _0x4b1926 = document.createElement("span");
    _0x4b1926.textContent = _0x326d86.type === "event" ? "弹" + _0x326d86.num + "号" : "持续 " + _0x326d86.val + (_0x326d86.unit === "min" ? "分钟" : "秒");
    const _0x154446 = document.createElement("button");
    _0x154446.className = "del-btn4";
    _0x154446.textContent = "删";
    _0x154446.style.cssText = "background:#f44336;color:white;border:none;padding:2px 6px;border-radius:3px;cursor:pointer;font-size:12px;";
    _0x154446.addEventListener("click", _0x6814f7 => {
      _0x6814f7.stopPropagation();
      tasks4.splice(_0xd6bc19, 1);
      saveCfg4();
      render4();
    });
    _0x381143.append(_0x4b1926, _0x154446);
    attachDragEvents4(_0x381143);
    _0x2bf66e.appendChild(_0x381143);
  });
}
let draggedEl4 = null;
function attachDragEvents4(_0x400fe8) {
  _0x400fe8.draggable = true;
  _0x400fe8.addEventListener("dragstart", () => {
    draggedEl4 = _0x400fe8;
    _0x400fe8.classList.add("dragging4");
    _0x400fe8.style.opacity = "0.5";
  });
  _0x400fe8.addEventListener("dragend", () => {
    _0x400fe8.classList.remove("dragging4");
    _0x400fe8.style.opacity = "1";
    const _0x54179f = [...document.getElementById("task-list4").children];
    tasks4 = _0x54179f.map(_0x47ea2c => tasks4[_0x47ea2c.dataset.idx]);
    saveCfg4();
  });
  _0x400fe8.addEventListener("dragover", _0x26040d => {
    _0x26040d.preventDefault();
    const _0x25ef7e = getDragAfterEl4(document.getElementById("task-list4"), _0x26040d.clientY);
    const _0x5040b2 = document.getElementById("task-list4");
    _0x25ef7e == null ? _0x5040b2.appendChild(draggedEl4) : _0x5040b2.insertBefore(draggedEl4, _0x25ef7e);
  });
}
function getDragAfterEl4(_0x4c17de, _0x1aa668) {
  const _0x20d7c9 = [..._0x4c17de.querySelectorAll(".task-item4:not(.dragging4)")];
  const _0x505831 = {
    offset4: Number.NEGATIVE_INFINITY
  };
  return _0x20d7c9.reduce((_0x3a4475, _0x591085) => {
    const _0xf6d0b4 = _0x1aa668 - _0x591085.getBoundingClientRect().top - _0x591085.offsetHeight / 2;
    return _0xf6d0b4 < 0 && _0xf6d0b4 > _0x3a4475.offset4 ? {
      offset4: _0xf6d0b4,
      el4: _0x591085
    } : _0x3a4475;
  }, _0x505831).el4;
}
const taskStyle4 = document.createElement("style");
taskStyle4.textContent = "\n    @keyframes pulse4 {\n        0% { opacity: 1; }\n        50% { opacity: 0.5; }\n        100% { opacity: 1; }\n    }\n    .dragging4 {\n        opacity: 0.5;\n        cursor: grabbing !important;\n    }\n";
document.head.appendChild(taskStyle4);
setTimeout(() => {
  initTaskControls();
}, 500);
async function fzfudai(_0x5ce31a) {
  let _0xbdd18e = {
    "content-type": "application/json"
  };
  let _0x123ac7 = "https://buyin.jinritemai.com/api/";
  let _0x10d3d5 = "buyin/marketing/draw/create";
  if (requestUrl == "https://fxg.jinritemai.com/api/anchor/livepc/setcurrent") {
    _0x123ac7 = "https://fxg.jinritemai.com/api/";
    const _0x1b4e5c = {
      accept: "application/json, text/plain, */*",
      "accept-encoding": "gzip, deflate, br, zstd",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
      "content-length": "543",
      "content-type": "application/json;charset=UTF-8",
      origin: "https://fxg.jinritemai.com",
      priority: "u=1, i",
      referer: "https://fxg.jinritemai.com/ffa/content-tool/live/control",
      "x-secsdk-csrf-token": window.csrfToken,
      "sec-ch-ua": "\"Microsoft Edge\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0",
      "x-tt-from-end": "PC",
      "x-ecom-platform-source": "fxg|live"
    };
    _0xbdd18e = _0x1b4e5c;
  }
  const _0x561cff = await fetch(_0x123ac7 + _0x10d3d5, {
    method: "POST",
    headers: _0xbdd18e,
    credentials: "include",
    body: JSON.stringify(_0x5ce31a)
  });
  const _0x45805e = await _0x561cff.json();
  return _0x45805e;
}
async function fafudai(_0x52e3c4, _0x1edac5) {
  const _0x380f94 = document.getElementById("fudaibt");
  const _0x472847 = {
    accept: "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"
  };
  fudaiqqt = _0x472847;
  fudailisturl = "https://buyin.jinritemai.com/api/buyin/marketing/draw/search?_bid=mcenter_buyin&page=1&size=99&activity_id=&act_status=1&act_type=0";
  if (requestUrl == "https://fxg.jinritemai.com/api/anchor/livepc/setcurrent") {
    fudailisturl = "https://fxg.jinritemai.com/api/buyin/marketing/draw/search?&page=1&size=99&activity_id=&act_status=1&act_type=0";
    const _0xd56174 = {
      accept: "application/json, text/plain, */*",
      "accept-encoding": "gzip, deflate, br, zstd",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
      "content-length": "543",
      "content-type": "application/json;charset=UTF-8",
      origin: "https://fxg.jinritemai.com",
      priority: "u=1, i",
      referer: "https://fxg.jinritemai.com/ffa/content-tool/live/control",
      "x-secsdk-csrf-token": window.csrfToken,
      "sec-ch-ua": "\"Microsoft Edge\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0",
      "x-tt-from-end": "PC",
      "x-ecom-platform-source": "fxg|live"
    };
    fudaiqqt = _0xd56174;
  }
  const _0x1cf9c1 = await fetch(fudailisturl, {
    method: "GET",
    credentials: "include",
    headers: fudaiqqt
  });
  response8 = await _0x1cf9c1.json().catch(() => _0x1cf9c1.text());
  loadActivityListFromResponse8(response8);
  if (response8.code === 0) {
    const _0xf2521a = {
      "content-type": "application/json"
    };
    fudaiqqt = _0xf2521a;
    const _0x4d008a = {
      activity_id: _0x52e3c4,
      from_page: "pc"
    };
    fafudaibody = _0x4d008a;
    fafudaiurl = "https://buyin.jinritemai.com/api/buyin/marketing/draw/launch";
    if (requestUrl == "https://fxg.jinritemai.com/api/anchor/livepc/setcurrent") {
      fafudaiurl = "https://fxg.jinritemai.com/api/buyin/marketing/draw/launch";
      const _0x17d971 = {
        activity_id: _0x52e3c4
      };
      fafudaibody = _0x17d971;
      const _0x5d6b03 = {
        accept: "application/json, text/plain, */*",
        "accept-encoding": "gzip, deflate, br, zstd",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "content-length": "543",
        "content-type": "application/json;charset=UTF-8",
        origin: "https://fxg.jinritemai.com",
        priority: "u=1, i",
        referer: "https://fxg.jinritemai.com/ffa/content-tool/live/control",
        "x-secsdk-csrf-token": window.csrfToken,
        "sec-ch-ua": "\"Microsoft Edge\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0",
        "x-tt-from-end": "PC",
        "x-ecom-platform-source": "fxg|live"
      };
      fudaiqqt = _0x5d6b03;
    }
    const _0x58dbd9 = await fetch(fafudaiurl, {
      method: "POST",
      headers: fudaiqqt,
      credentials: "include",
      body: JSON.stringify(fafudaibody)
    });
    const _0x45e9f4 = await _0x58dbd9.json();
    console.log(_0x45e9f4);
    if (_0x45e9f4.code === 200 || _0x45e9f4.code === 0) {
      fafudaisum++;
      _0x380f94.textContent = "自动发超级福袋  成功:" + fafudaisum + " 失败:" + fafudaisbsum;
      createZtCard(cg, "操作成功", "超级福袋自动发送成功，下次将在" + _0x1edac5 + "分后发送", "#76fa4eff");
      fudailist();
    } else {
      fafudaisbsum++;
      _0x380f94.textContent = "自动发超级福袋  成功:" + fafudaisum + " 失败:" + fafudaisbsum;
      fudailist();
      stopDistribution8();
      createZtCard(sb, "操作失败，已停止", _0x45e9f4.msg, "rgba(250, 78, 78, 1)");
    }
  } else {
    fafudaisbsum++;
    _0x380f94.textContent = "自动发超级福袋  成功:" + fafudaisum + " 失败:" + fafudaisbsum;
    fudailist();
    stopDistribution8();
    createZtCard(sb, "操作失败，已停止", response8.msg, "rgba(250, 78, 78, 1)");
  }
}
async function huodonshuju(_0x10745d) {
  const _0x54b713 = await fetch("https://buyin.jinritemai.com/api/buyin/marketing/draw/get?_bid=mcenter_buyin&activity_id=" + _0x10745d, {
    method: "GET",
    credentials: "include",
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"
    }
  });
  response8 = await _0x54b713.json().catch(() => _0x54b713.text());
}
async function fudailist() {
  const _0xb9f72a = {
    accept: "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"
  };
  fudaiqqt = _0xb9f72a;
  fudailisturl = "https://buyin.jinritemai.com/api/buyin/marketing/draw/search?_bid=mcenter_buyin&page=1&size=99&activity_id=&act_status=1&act_type=0";
  if (requestUrl == "https://fxg.jinritemai.com/api/anchor/livepc/setcurrent") {
    fudailisturl = "https://fxg.jinritemai.com/api/buyin/marketing/draw/search?&page=1&size=99&activity_id=&act_status=1&act_type=0";
    const _0x42d351 = {
      accept: "application/json, text/plain, */*",
      "accept-encoding": "gzip, deflate, br, zstd",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
      "content-length": "543",
      "content-type": "application/json;charset=UTF-8",
      origin: "https://fxg.jinritemai.com",
      priority: "u=1, i",
      referer: "https://fxg.jinritemai.com/ffa/content-tool/live/control",
      "x-secsdk-csrf-token": window.csrfToken,
      "sec-ch-ua": "\"Microsoft Edge\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0",
      "x-tt-from-end": "PC",
      "x-ecom-platform-source": "fxg|live"
    };
    fudaiqqt = _0x42d351;
  }
  const _0x5c7a39 = await fetch(fudailisturl, {
    method: "GET",
    credentials: "include",
    headers: fudaiqqt
  });
  response8 = await _0x5c7a39.json().catch(() => _0x5c7a39.text());
  console.log(response8);
  loadActivityListFromResponse8(response8);
}
async function chafudai() {
  const _0x404056 = {
    accept: "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"
  };
  fudaiqqt = _0x404056;
  fudailisturl = "https://buyin.jinritemai.com/api/buyin/marketing/draw/search?_bid=mcenter_buyin&page=1&size=99&activity_id=&act_status=2&act_type=0";
  if (requestUrl == "https://fxg.jinritemai.com/api/anchor/livepc/setcurrent") {
    fudailisturl = "https://fxg.jinritemai.com/api/buyin/marketing/draw/search?&page=1&size=99&activity_id=&act_status=2&act_type=0";
    const _0x301dec = {
      accept: "application/json, text/plain, */*",
      "accept-encoding": "gzip, deflate, br, zstd",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
      "content-length": "543",
      "content-type": "application/json;charset=UTF-8",
      origin: "https://fxg.jinritemai.com",
      priority: "u=1, i",
      referer: "https://fxg.jinritemai.com/ffa/content-tool/live/control",
      "x-secsdk-csrf-token": window.csrfToken,
      "sec-ch-ua": "\"Microsoft Edge\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0",
      "x-tt-from-end": "PC",
      "x-ecom-platform-source": "fxg|live"
    };
    fudaiqqt = _0x301dec;
  }
  const _0x214488 = await fetch(fudailisturl, {
    method: "GET",
    credentials: "include",
    headers: fudaiqqt
  });
  response8 = await _0x214488.json().catch(() => _0x214488.text());
  console.log("查询进行中福袋列表");
  if (response8.code === 0) {
    return !hasKeyDeep(response8, "activity_id") ? true : getTimeDifference(response8?.["data"]?.["draws"]?.[0]?.["open_time_info"]?.["open_time"]);
  }
  return true;
}
function getTimeDifference(_0x1d0fdd) {
  let _0x3eb971;
  if (typeof _0x1d0fdd === "number") {
    _0x1d0fdd < 10000000000 ? _0x3eb971 = _0x1d0fdd * 1000 : _0x3eb971 = _0x1d0fdd;
  } else {
    if (_0x1d0fdd instanceof Date) {
      _0x3eb971 = _0x1d0fdd.getTime();
    } else {
      const _0x310f11 = new Date(_0x1d0fdd);
      if (isNaN(_0x310f11.getTime())) {
        throw new Error("无效的时间戳或日期格式");
      }
      _0x3eb971 = _0x310f11.getTime();
    }
  }
  const _0x1d8bb9 = Date.now();
  return _0x3eb971 - _0x1d8bb9;
}
const stylebiaoqian = document.createElement("style");
stylebiaoqian.textContent = "\n    .modal-overlaybiaoqian {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.5);\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        z-index: 999999;\n    }\n    \n    .modal-contentbiaoqian {\n        background-color: white;\n        width: 80%;\n        max-width: 900px;\n        height: 80%;\n        border-radius: 8px;\n        display: flex;\n        flex-direction: column;\n        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n    }\n    \n    .modal-headerbiaoqian {\n        padding: 15px 20px;\n        border-bottom: 1px solid #eee;\n        font-size: 18px;\n        font-weight: bold;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n    }\n    \n    .modal-bodybiaoqian {\n        display: flex;\n        flex: 1;\n        overflow: hidden;\n    }\n    \n    .columnbiaoqian {\n        flex: 1;\n        padding: 15px;\n        overflow-y: auto;\n        border-right: 1px solid #eee;\n    }\n    \n    .columnbiaoqian:last-child {\n        border-right: none;\n    }\n    \n    .column-titlebiaoqian {\n        font-size: 16px;\n        font-weight: bold;\n        margin-bottom: 10px;\n        padding-bottom: 5px;\n        border-bottom: 1px solid #eee;\n    }\n    \n    .product-listbiaoqian {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n    }\n    \n    .product-itembiaoqian {\n        display: flex;\n        align-items: center;\n        padding: 10px;\n        border: 1px solid #eee;\n        margin-bottom: 10px;\n        border-radius: 4px;\n        cursor: pointer;\n        transition: background-color 0.2s;\n    }\n    \n    .product-itembiaoqian:hover {\n        background-color: #f5f5f5;\n    }\n    \n    .product-itembiaoqian.selectedbiaoqian {\n        background-color: #e6f7ff;\n        border-color: #91d5ff;\n    }\n    \n    .product-indexbiaoqian {\n        width: 25px;\n        text-align: center;\n        font-weight: bold;\n        margin-right: 10px;\n        color: #666;\n    }\n    \n    .product-imagebiaoqian {\n        width: 60px;\n        height: 60px;\n        object-fit: cover;\n        border-radius: 4px;\n        margin-right: 10px;\n    }\n    \n    .product-infobiaoqian {\n        flex: 1;\n    }\n    \n    .product-titlebiaoqian {\n        font-size: 14px;\n        margin-bottom: 5px;\n        display: -webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n        overflow: hidden;\n    }\n    \n    .product-detailsbiaoqian {\n        display: flex;\n        justify-content: space-between;\n        font-size: 12px;\n        color: #666;\n    }\n    \n    .modal-footerbiaoqian {\n        padding: 15px 20px;\n        border-top: 1px solid #eee;\n        display: flex;\n        justify-content: flex-end;\n        gap: 10px;\n    }\n    \n    .modal-btnbiaoqian {\n        padding: 8px 16px;\n        border: none;\n        border-radius: 4px;\n        cursor: pointer;\n        font-size: 14px;\n    }\n    \n    .modal-closebiaoqian {\n        background-color: #f5f5f5;\n    }\n    \n    .modal-confirmbiaoqian {\n        background-color: #1890ff;\n        color: white;\n    }\n    \n    .modal-btnbiaoqian:hover {\n        opacity: 0.8;\n    }\n    \n    .trigger-btnbiaoqian {\n        position: fixed;\n        top: 20px;\n        right: 20px;\n        padding: 10px 15px;\n        background-color: #1890ff;\n        color: white;\n        border: none;\n        border-radius: 4px;\n        cursor: pointer;\n        z-index: 10000;\n        font-size: 14px;\n    }\n    \n    .trigger-btnbiaoqian:hover {\n        background-color: #40a9ff;\n    }\n";
document.head.appendChild(stylebiaoqian);
let selectedProductsbiaoqian = [];
async function daishangjialist() {
  const _0x3009a6 = {
    accept: "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"
  };
  fudaiqqt = _0x3009a6;
  const _0x44481d = await fetch("https://buyin.jinritemai.com/api/anchor/livepc/get_pending_use_products?ewid=3836609752043385&seraph_did=3836609752043385", {
    method: "GET",
    credentials: "include",
    headers: fudaiqqt
  });
  window.daishangjialist = await _0x44481d.json().catch(() => _0x44481d.text());
}
function showProductModalbiaoqian(_0x3d6114) {
  window.shangpinglist = mergeAndFilterPromotions(window.daishangjialist, window.shangpinglist);
  if (_0x3d6114) {
    const _0x400ab2 = localStorage.getItem("xiajiazhiidngsp");
    if (_0x400ab2) {
      try {
        selectedProductsbiaoqian = JSON.parse(_0x400ab2);
        window.shaixuansp = selectedProductsbiaoqian;
      } catch (_0x43e9be) {
        console.error("读取保存的数据失败:", _0x43e9be);
        selectedProductsbiaoqian = [];
      }
    }
  } else {
    const _0x3dcde8 = localStorage.getItem("selectedProductsbiaoqian");
    if (_0x3dcde8) {
      try {
        selectedProductsbiaoqian = JSON.parse(_0x3dcde8);
        window.shaixuansp = selectedProductsbiaoqian;
      } catch (_0x3e93fb) {
        console.error("读取保存的数据失败:", _0x3e93fb);
        selectedProductsbiaoqian = [];
      }
    }
  }
  const _0x402e84 = document.createElement("div");
  _0x402e84.className = "modal-overlaybiaoqian";
  const _0x389203 = document.createElement("div");
  _0x389203.className = "modal-contentbiaoqian";
  const _0x3f00f4 = document.createElement("div");
  _0x3f00f4.className = "modal-headerbiaoqian";
  _0x3f00f4.innerHTML = "<span>商品选择</span>";
  const _0x3a75c9 = document.createElement("div");
  _0x3a75c9.className = "modal-bodybiaoqian";
  const _0x4f1406 = document.createElement("div");
  _0x4f1406.className = "columnbiaoqian";
  _0x4f1406.innerHTML = "<div class=\"column-titlebiaoqian\">商品列表  点击商品添加👇</div>";
  const _0x55d931 = document.createElement("ul");
  _0x55d931.className = "product-listbiaoqian";
  const _0x48ced4 = document.createElement("div");
  _0x48ced4.className = "columnbiaoqian";
  _0x48ced4.innerHTML = "<div class=\"column-titlebiaoqian\">已选商品  点击商品删除👇</div>";
  const _0x81416e = document.createElement("ul");
  _0x81416e.className = "product-listbiaoqian";
  _0x48ced4.appendChild(_0x81416e);
  _0x3a75c9.appendChild(_0x4f1406);
  _0x3a75c9.appendChild(_0x48ced4);
  const _0x31c954 = document.createElement("div");
  _0x31c954.className = "modal-footerbiaoqian";
  const _0x55f92d = document.createElement("button");
  _0x55f92d.className = "modal-btnbiaoqian modal-closebiaoqian";
  _0x55f92d.textContent = "清空已选";
  _0x55f92d.addEventListener("click", () => {
    if (confirm("确定要清空所有已选商品吗？")) {
      selectedProductsbiaoqian = [];
      localStorage.removeItem("xiajiazhiidngsp");
      _0x2dcca7();
      console.log("已清空所有已选商品");
      createZtCard(cg, "清空成功", "", "#76fa4eff");
    }
  });
  const _0x3d1c94 = document.createElement("button");
  _0x3d1c94.className = "modal-btnbiaoqian modal-addallbiaoqian";
  _0x3d1c94.textContent = "一键添加待上架商品";
  _0x3d1c94.addEventListener("click", () => {
    if (!window.daishangjialist || !window.daishangjialist.data || !window.daishangjialist.data.products) {
      createZtCard(cg, "待上架商品列表为空", "", "#ff6b6bff");
      return;
    }
    const _0x1f2efd = window.daishangjialist.data.products;
    let _0x15ed73 = 0;
    _0x1f2efd.forEach(_0x3d16b8 => {
      if (!selectedProductsbiaoqian.some(_0x107e14 => _0x107e14.promotion_id === _0x3d16b8.promotion_id)) {
        const _0x3a9a5e = {
          promotion_id: _0x3d16b8.promotion_id,
          product_id: _0x3d16b8.product_id
        };
        selectedProductsbiaoqian.unshift(_0x3a9a5e);
        _0x15ed73++;
      }
    });
    _0x15ed73 > 0 ? (_0x2dcca7(), createZtCard(cg, "成功添加" + _0x15ed73 + "个待上架商品", "", "#76fa4eff"), console.log("一键添加了" + _0x15ed73 + "个待上架商品")) : createZtCard(cg, "没有可添加的新商品", "所有待上架商品已存在", "#ffa726ff");
  });
  const _0x4eb892 = document.createElement("button");
  _0x4eb892.className = "modal-btnbiaoqian modal-closebiaoqian";
  _0x4eb892.textContent = "关闭";
  _0x4eb892.addEventListener("click", () => {
    document.body.removeChild(_0x402e84);
  });
  const _0x5d6e7c = document.createElement("button");
  _0x5d6e7c.className = "modal-btnbiaoqian modal-confirmbiaoqian";
  _0x5d6e7c.textContent = "确定";
  _0x5d6e7c.addEventListener("click", () => {
    if (_0x3d6114) {
      window.zhidingsp = selectedProductsbiaoqian.map(_0x492a33 => ({
        promotion_id: _0x492a33.promotion_id,
        product_id: _0x492a33.product_id
      }));
      try {
        localStorage.setItem("xiajiazhiidngsp", JSON.stringify(selectedProductsbiaoqian));
        console.log("数据已保存到本地存储");
      } catch (_0xa2f735) {
        console.error("保存数据到本地存储失败:", _0xa2f735);
      }
      console.log("选中的商品ID:", JSON.stringify(window.zhidingsp, null, 2));
      document.body.removeChild(_0x402e84);
      return;
    }
    window.shaixuansp = selectedProductsbiaoqian.map(_0x4cf829 => ({
      promotion_id: _0x4cf829.promotion_id,
      product_id: _0x4cf829.product_id
    }));
    try {
      localStorage.setItem("selectedProductsbiaoqian", JSON.stringify(selectedProductsbiaoqian));
      console.log("数据已保存到本地存储");
    } catch (_0xa23a7a) {
      console.error("保存数据到本地存储失败:", _0xa23a7a);
    }
    console.log("选中的商品ID:", JSON.stringify(window.shaixuansp, null, 2));
    document.body.removeChild(_0x402e84);
  });
  _0x31c954.appendChild(_0x55f92d);
  _0x31c954.appendChild(_0x3d1c94);
  _0x31c954.appendChild(_0x4eb892);
  _0x31c954.appendChild(_0x5d6e7c);
  _0x389203.appendChild(_0x3f00f4);
  _0x389203.appendChild(_0x3a75c9);
  _0x389203.appendChild(_0x31c954);
  _0x402e84.appendChild(_0x389203);
  document.body.appendChild(_0x402e84);
  function _0x2dcca7() {
    _0x81416e.innerHTML = "";
    selectedProductsbiaoqian.forEach((_0x4092d0, _0x23b7fe) => {
      const _0x7bd115 = window.shangpinglist.data.promotions.find(_0x2f97ac => _0x2f97ac.promotion_id === _0x4092d0.promotion_id);
      if (!_0x7bd115) {
        return;
      }
      const _0x1b8ecf = document.createElement("li");
      _0x1b8ecf.className = "product-itembiaoqian selectedbiaoqian";
      const _0x2edb2a = (_0x7bd115.price_desc.min_price.origin / 100).toFixed(2);
      _0x1b8ecf.innerHTML = "\n                <div class=\"product-indexbiaoqian\">" + (_0x23b7fe + 1) + "</div>\n                <img src=\"" + _0x7bd115.cover + "\" alt=\"" + _0x7bd115.title + "\" class=\"product-imagebiaoqian\" onerror=\"this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0zMCAzNkMzMy4zMTM3IDM2IDM2IDMzLjMxMzcgMzYgMzBDMzYgMjYuNjg2MyAzMy4zMTM3IDI0IDMwIDI0QzI2LjY4NjMgMjQgMjQgMjYuNjg2MyAyNCAzMEMyNCAzMy4zMTM3IDI2LjY4NjMgMzYgMzAgMzZaIiBmaWxsPSIjQ0VDRUNFIi8+CjxwYXRoIGQ9Ik0zMCA0MEMzNS41MjI4IDQwIDQwIDM1LjUyMjggNDAgMzBDNDAgMjQuNDc3MiAzNS41MjI4IDIwIDMwIDIwQzI0LjQ3NzIgMjAgMjAgMjQuNDc3MiAyMCAzMEMyMCAzNS41MjI4IDI0LjQ3NzIgNDAgMzAgNDBaIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0yOS45OTk5IDM0QzI3Ljc5MDcgMzQgMjUuOTk5OSAzMi4yMDkyIDI1Ljk5OTkgMzBDMjUuOTk5OSAyNy43OTA4IDI3Ljc5MDcgMjYgMjkuOTk5OSAyNkMzMi4yMDkxIDI2IDMzLjk5OTkgMjcuNzkwOCAzMy45OTk5IDMwQzMzLjk5OTkgMzIuMjA5MiAzMi4yMDkxIDM0IDI5Ljk5OTkgMzRaIiBmaWxsPSIjQ0VDRUNFIi8+Cjwvc3ZnPgo='\">\n                <div class=\"product-infobiaoqian\">\n                    <div class=\"product-titlebiaoqian\">" + _0x7bd115.title + "</div>\n                    <div class=\"product-detailsbiaoqian\">\n                        <span>价格: ¥" + _0x2edb2a + "</span>\n                        <span>库存: " + _0x7bd115.stock_num + "</span>\n                    </div>\n                </div>\n            ";
      _0x1b8ecf.addEventListener("click", () => {
        const _0x2a8436 = selectedProductsbiaoqian.findIndex(_0x5bb3b5 => _0x5bb3b5.promotion_id === _0x4092d0.promotion_id);
        _0x2a8436 !== -1 && (selectedProductsbiaoqian.splice(_0x2a8436, 1), _0x2dcca7());
      });
      _0x81416e.appendChild(_0x1b8ecf);
    });
  }
  window.shangpinglist && window.shangpinglist.data && window.shangpinglist.data.promotions ? window.shangpinglist.data.promotions.forEach((_0x136fd6, _0x2d73e6) => {
    const _0x1fb131 = document.createElement("li");
    _0x1fb131.className = "product-itembiaoqian";
    _0x1fb131.dataset.promotionId = _0x136fd6.promotion_id;
    _0x1fb131.dataset.productId = _0x136fd6.product_id;
    const _0x146632 = (_0x136fd6.price_desc.min_price.origin / 100).toFixed(2);
    _0x1fb131.innerHTML = "\n                <div class=\"product-indexbiaoqian\">" + (_0x2d73e6 + 1) + "</div>\n                <img src=\"" + _0x136fd6.cover + "\" alt=\"" + _0x136fd6.title + "\" class=\"product-imagebiaoqian\" onerror=\"this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0zMCAzNkMzMy4zMTM3IDM2IDM2IDMzLjMxMzcgMzYgMzBDMzYgMjYuNjg2MyAzMy4zMTM3IDI0IDMwIDI0QzI2LjY4NjMgMjQgMjQgMjYuNjg2MyAyNCAzMEMyNCAzMy4zMTM3IDI2LjY4NjMgMzYgMzAgMzZaIiBmaWxsPSIjQ0VDRUNFIi8+CjxwYXRoIGQ9Ik0zMCA0MEMzNS41MjI4IDQwIDQwIDM1LjUyMjggNDAgMzBDNDAgMjQuNDc3MiAzNS41MjI4IDIwIDMwIDIwQzI0LjQ3NzIgMjAgMjAgMjQuNDc3MiAyMCAzMEMyMCAzNS41MjI4IDI0LjQ3NzIgNDAgMzAgNDBaIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0yOS45OTk5IDM0QzI3Ljc5MDcgMzQgMjUuOTk5OSAzMi4yMDkyIDI1Ljk5OTkgMzBDMjUuOTk5OSAyNy43OTA4IDI3Ljc5MDcgMjYgMjkuOTk5OSAyNkMzMi4yMDkxIDI2IDMzLjk5OTkgMjcuNzkwOCAzMyLjk5OTkgMzBDMzMuOTk5kgMzIuMjA5MiAzMi4yMDkxIDM0IDI5Ljk5OTkgMzRaIiBmaWxsPSIjQ0VDRUNFIi8+Cjwvc3ZnPgo='\">\n                <div class=\"product-infobiaoqian\">\n                    <div class=\"product-titlebiaoqian\">" + _0x136fd6.title + "</div>\n                    <div class=\"product-detailsbiaoqian\">\n                        <span>价格: ¥" + _0x146632 + "</span>\n                        <span>库存: " + _0x136fd6.stock_num + "</span>\n                    </div>\n                </div>\n            ";
    _0x1fb131.addEventListener("click", () => {
      if (!selectedProductsbiaoqian.some(_0xdbd95d => _0xdbd95d.promotion_id === _0x136fd6.promotion_id)) {
        const _0x30ebaa = {
          promotion_id: _0x136fd6.promotion_id,
          product_id: _0x136fd6.product_id
        };
        selectedProductsbiaoqian.unshift(_0x30ebaa);
        console.log("添加的商品信息:");
        console.log("标题:", _0x136fd6.title);
        console.log("图片:", _0x136fd6.cover);
        console.log("价格:", (_0x136fd6.price_desc.min_price.origin / 100).toFixed(2) + "元");
        console.log("库存:", _0x136fd6.stock_num);
        createZtCard(_0x136fd6.cover, "添加成功", _0x136fd6.title, "#76fa4eff");
        _0x2dcca7();
      }
    });
    _0x55d931.appendChild(_0x1fb131);
  }) : _0x55d931.innerHTML = "<li style=\"padding: 20px; text-align: center;\">暂无商品数据</li>";
  _0x4f1406.appendChild(_0x55d931);
  _0x2dcca7();
}
function mergeAndFilterPromotions(_0x420de9, _0x4a3cd9) {
  const _0x1813f8 = (_0x420de9?.["data"]?.["products"] || []).map(_0x4922be => {
    return {
      cover: _0x4922be.cover || "",
      title: _0x4922be.title || "",
      price_desc: {
        min_price: {
          origin: _0x4922be.price?.["origin"] || _0x4922be.alliance_price?.["price_num"]?.["origin"] || 0
        }
      },
      stock_num: parseInt(_0x4922be.stock_num) || 0,
      promotion_id: _0x4922be.promotion_id || ""
    };
  });
  const _0x14354a = (_0x4a3cd9?.["data"]?.["promotions"] || []).map(_0x5e0a5c => {
    const _0x50b251 = {
      cover: _0x5e0a5c.cover || "",
      title: _0x5e0a5c.title || "",
      price_desc: {},
      stock_num: _0x5e0a5c.stock_num || 0,
      promotion_id: _0x5e0a5c.promotion_id || ""
    };
    _0x50b251.price_desc.min_price = {};
    _0x50b251.price_desc.min_price.origin = _0x5e0a5c.price_desc?.["min_price"]?.["origin"] || 0;
    return _0x50b251;
  });
  const _0x26727c = [..._0x1813f8, ..._0x14354a];
  const _0x1d8bc7 = {
    promotions: _0x26727c
  };
  const _0x857cf0 = {
    data: _0x1d8bc7
  };
  return _0x857cf0;
}
const paichuanniu = document.getElementById("paichuanniuid");
paichuanniu.addEventListener("click", function () {
  showProductModalbiaoqian(false);
});
const zhidinguanniu = document.getElementById("zhidinganniuid");
zhidinguanniu.addEventListener("click", function () {
  showProductModalbiaoqian(true);
});
const yijianxiajia = document.getElementById("yijianxiajia");
yijianxiajia.addEventListener("click", function () {
  xiajia(111, cg, true);
});
const panelkuaijie = document.createElement("div");
panelkuaijie.id = "shortcut-panel";
panelkuaijie.innerHTML = "\n    <div class=\"panel-header\">\n        <div class=\"panel-title\">自定义快捷键操作\n            <a href=\"https://sharechain.qq.com/3c758dedb897daa2004cd53776284bae\"\n               target=\"_blank\"\n               rel=\"noopener noreferrer\"\n               title=\"查看使用教程\">\n                如何使用？\n            </a>\n        </div>\n        <div class=\"panel-controls\">\n            <button id=\"minimize-btn\">缩小设置</button>\n            <button id=\"close-btn\" style=\"display: none;\">×</button>\n        </div>\n    </div>\n    <div class=\"panel-content\">\n        <!-- 正常状态下的内容kuaijie -->\n        <div class=\"normal-view\">\n        <div class=\"mode-toggle-section\">\n                <div class=\"mode-toggle-title\">第一步 选择模式（推荐悬停选择）:</div>\n                <div class=\"mode-buttons\">\n                    <button id=\"hover-mode-btn\" class=\"mode-btn active\">悬停选择</button>\n                    <button id=\"click-mode-btn\" class=\"mode-btn\">点击选择</button>\n                </div>\n            </div>\n            \n            <div class=\"selected-item\">\n                <div class=\"selected-item-title\">当前选中商品</div>\n                <div class=\"selected-item-info\" id=\"selected-info\">\n                    <div class=\"no-selection\">无选中商品 请把鼠标放在商品上</div>\n                </div>\n            </div>\n            <div class=\"custom-shortcuts-list\">\n                <div class=\"mode-toggle-title\">已添加的自定义快捷键</div>\n                <div id=\"custom-shortcuts-container\"></div>\n            </div>\n            \n            \n            <div class=\"custom-shortcut\">\n                <h3>第二步 点击下面录制快捷键</h3>\n                <div class=\"key-recording\">\n                    <button id=\"record-key-btn\">点击这里，然后按下按键</button>\n                    <div id=\"key-recording-status\">等待录入...</div>\n                </div>\n                <div class=\"action-selection\">\n                    <label for=\"custom-action\">第三步 选择操作:</label>\n                    <select id=\"custom-action\">\n\n                        <option value=\"下架指定商品\">下架指定商品(需要在插件设置自动中控设置商品，鼠标放在商品卡触发快捷键)</option>\n                        <option value=\"下架商品\">下架商品(需要鼠标放在商品卡触发快捷键)</option>\n                        <option value=\"改库存为1\">改库存为1(需要鼠标放在商品卡触发快捷键)</option>\n                        <option value=\"满库存并预热\">满库存并预热(需要鼠标放在商品卡触发快捷键)</option>\n                        <option value=\"拉满库存\">拉满库存(需要鼠标放在商品卡触发快捷键)</option>\n                        <option value=\"清空库存\">清空库存(需要鼠标放在商品卡触发快捷键)</option>\n                        <option value=\"置顶并讲解\">置顶并讲解(需要鼠标放在商品卡触发快捷键)</option>\n                        <option value=\"自动讲解\">自动讲解(需要鼠标放在商品卡触发快捷键)</option>\n                        <option value=\"开价\">开价(需要鼠标放在商品卡触发快捷键)</option>\n                        <option value=\"发快捷消息\">发快捷消息(不需要鼠标放在商品卡触发快捷键)</option>\n                        <option value=\"发1个超级福袋\">发1个超级福袋(需要鼠标放在任意商品卡触发快捷键)</option>\n                    </select>\n                </div>\n                <button id=\"add-shortcut\">第四步 点我完成</button>\n            </div>\n        </div>\n        \n        <!-- 缩小状态下的内容kuaijie - 确保在正常视图外面 -->\n        <div class=\"minimized-view\" style=\"display: none;\" id=\"minimized-ding\">\n            <div class=\"minimized-content\">\n                <div class=\"minimized-selected-item\">\n                    <div class=\"minimized-title\">选中商品</div>\n                    <div class=\"minimized-info\" id=\"minimized-selected-info\">\n                        <div class=\"no-selection\">无选中商品 请把鼠标放在商品上</div>\n                    </div>\n                </div>\n                <div class=\"minimized-shortcuts\">\n                    <div class=\"minimized-title\">快捷键列表 按下键盘</div>\n                    <div class=\"minimized-shortcuts-list\" id=\"minimized-shortcuts-container\"></div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"log-container\" style=\"display: none;\">\n            <h3>操作日志 <span class=\"log-count\">(0)</span></h3>\n            <div id=\"log-entries\"></div>\n            <button id=\"clear-log\" style=\"display: none;\">清空日志</button>\n        </div>\n    </div>\n";
const quickMessageModalkuaijie = document.createElement("div");
quickMessageModalkuaijie.className = "quick-message-modal hidden";
quickMessageModalkuaijie.innerHTML = "\n    <div class=\"quick-message-content\">\n        <div class=\"quick-message-title\">设置快捷消息</div>\n        <div class=\"quick-message-form\">\n            <div class=\"form-group\">\n                <label for=\"message-content\">消息内容 (50字以内):</label>\n                <textarea id=\"message-content\" class=\"quick-message-textarea\" placeholder=\"请输入要发送的消息内容...\" maxlength=\"50\"></textarea>\n                <div class=\"char-count\" id=\"char-count\">0/50</div>\n            </div>\n            <div class=\"checkbox-group\">\n                <input type=\"checkbox\" id=\"pin-message\">\n                <label for=\"pin-message\">置顶此消息</label>\n            </div>\n            <div class=\"form-buttons\">\n                <button type=\"button\" class=\"form-button cancel\" id=\"cancel-message\">取消</button>\n                <button type=\"button\" class=\"form-button confirm\" id=\"confirm-message\">确定</button>\n            </div>\n        </div>\n    </div>\n";
const checkboxFixStylekuaijie = document.createElement("style");
checkboxFixStylekuaijie.textContent = "\n\n\n    /* 修复复选框样式kuaijie - 确保在所有浏览器中显示 */\n    .checkbox-group {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        margin: 10px 0;\n    }\n    \n    .checkbox-group input[type=\"checkbox\"] {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        width: 18px;\n        height: 18px;\n        border: 2px solid #3498db;\n        border-radius: 3px;\n        background-color: white;\n        cursor: pointer;\n        position: relative;\n        transition: all 0.2s ease;\n        display: inline-block;\n        vertical-align: middle;\n    }\n    \n    .checkbox-group input[type=\"checkbox\"]:checked {\n        background-color: #3498db;\n        border-color: #3498db;\n    }\n    \n    .checkbox-group input[type=\"checkbox\"]:checked::after {\n        content: \"✓\";\n        position: absolute;\n        color: white;\n        font-size: 14px;\n        font-weight: bold;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n    }\n    \n    .checkbox-group input[type=\"checkbox\"]:hover {\n        border-color: #2980b9;\n    }\n    \n    .checkbox-group input[type=\"checkbox\"]:focus {\n        outline: none;\n        box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.3);\n    }\n    \n    .checkbox-group label {\n        cursor: pointer;\n        user-select: none;\n        font-size: 0.9rem;\n        margin: 0;\n        display: flex;\n        align-items: center;\n    }\n    \n    /* 备用方案kuaijie - 使用自定义图标 */\n    .checkbox-group.custom-checkbox {\n        position: relative;\n    }\n    \n    .checkbox-group .check-icon {\n        display: none;\n        position: absolute;\n        left: 3px;\n        top: 50%;\n        transform: translateY(-50%);\n        color: white;\n        font-size: 12px;\n        font-weight: bold;\n        pointer-events: none;\n    }\n    \n    .checkbox-group input[type=\"checkbox\"]:checked + .check-icon {\n        display: block;\n    }\n";
document.head.appendChild(checkboxFixStylekuaijie);
document.body.appendChild(quickMessageModalkuaijie);
document.body.appendChild(panelkuaijie);
const stylekuaijie = document.createElement("style");
stylekuaijie.textContent = "\n\n /* 优化缩小状态下的快捷消息样式kuaijie */\n    .minimized-shortcut-message {\n        font-style: italic;\n        color: #9b59b6;\n        font-size: 0.7rem;\n    }\n    \n    .minimized-shortcut-message::before {\n        content: \"发送消息: \";\n        font-weight: bold;\n        color: #8e44ad;\n    }\n    \n    /* 普通操作的样式kuaijie */\n    .minimized-shortcut-action:not(.minimized-shortcut-message) {\n        color: #2c3e50;\n    }\n    \n    /* 确保缩小视图中的内容不会溢出kuaijie */\n    .minimized-shortcut-item {\n        max-width: 100%;\n        overflow: hidden;\n    }\n    \n    .minimized-shortcut-action {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 200px;\n    }\n\n  /* 缩小状态下的样式kuaijie */\n    #shortcut-panel.minimized {\n        width: 250px;\n        height: auto;\n        max-height: 300px;\n        overflow-y: auto;\n    }\n    \n    #shortcut-panel.minimized .normal-view {\n        display: none;\n    }\n    \n    #shortcut-panel.minimized .minimized-view {\n        display: block;\n        padding: 10px;\n    }\n    \n    /* 缩小状态下的选中商品样式kuaijie */\n    .minimized-selected-item {\n        margin-bottom: 10px;\n        padding: 8px;\n        background-color: #f0f8ff;\n        border-radius: 4px;\n        border-left: 3px solid #3498db;\n    }\n    \n    .minimized-title {\n        font-size: 0.8rem;\n        font-weight: bold;\n        margin-bottom: 5px;\n        color: #2c3e50;\n    }\n    \n    .minimized-info {\n        font-size: 0.75rem;\n        line-height: 1.2;\n    }\n    \n    .minimized-info .goods-name {\n        font-weight: bold;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 200px;\n    }\n    \n    .minimized-info .goods-id {\n        font-family: monospace;\n        color: #7f8c8d;\n        font-size: 0.7rem;\n    }\n    \n    /* 缩小状态下的快捷键列表样式kuaijie */\n    .minimized-shortcuts {\n        margin-top: 10px;\n    }\n    \n    .minimized-shortcut-item {\n        display: flex;\n        align-items: center;\n        padding: 5px;\n        margin-bottom: 3px;\n        background-color: #f8f9fa;\n        border-radius: 3px;\n        font-size: 0.75rem;\n    }\n    \n    .minimized-shortcut-key {\n        background-color: #2ecc71;\n        color: white;\n        padding: 1px 5px;\n        border-radius: 3px;\n        font-family: monospace;\n        font-weight: bold;\n        margin-right: 5px;\n        min-width: 20px;\n        text-align: center;\n    }\n    \n    .minimized-shortcut-action {\n        flex: 1;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n    \n    .minimized-shortcut-message {\n        font-style: italic;\n        color: #9b59b6;\n    }\n    \n    .minimized-no-shortcuts {\n        font-size: 0.7rem;\n        color: #7f8c8d;\n        font-style: italic;\n        text-align: center;\n        padding: 5px;\n    }\n\n\t/* 修复面板缩小状态样式kuaijie */\n     #shortcut-panel.minimized {\n        width: 300px !important;\n        height: auto !important;\n        min-height: 150px;\n        max-height: 400px;\n        overflow-y: auto;\n    }\n   \n    \n    #shortcut-panel.minimized .panel-header {\n        height: 40px;\n        min-height: 40px;\n        padding: 8px 15px;\n    }\n    \n    #shortcut-panel.minimized .panel-content {\n        padding: 0;\n        max-height: none;\n    }\n    \n    #shortcut-panel.minimized .normal-view {\n        display: none !important;\n    }\n    \n    #shortcut-panel.minimized .minimized-view {\n        display: block !important;\n        padding: 10px;\n            max-height: 300px; /* 设置最大高度为200px，您可以根据需要调整这个值 */\n    overflow-y: auto; /* 如果内容超过最大高度，添加垂直滚动条 */\n    }\n    \n    #shortcut-panel.minimized .log-container {\n        display: none !important;\n    }\n    \n    /* 缩小状态下的内容区域kuaijie */\n    .minimized-content {\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n    }\n    \n    /* 缩小状态下的选中商品样式kuaijie */\n    .minimized-selected-item {\n        padding: 8px;\n        background-color: #f0f8ff;\n        border-radius: 4px;\n        border-left: 3px solid #3498db;\n    }\n    \n    .minimized-title {\n        font-size: 0.8rem;\n        font-weight: bold;\n        margin-bottom: 5px;\n        color: #2c3e50;\n    }\n    \n    .minimized-info {\n        font-size: 0.75rem;\n        line-height: 1.2;\n    }\n    \n    .minimized-info .goods-name {\n        font-weight: bold;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 250px;\n    }\n    \n    .minimized-info .goods-id {\n        font-family: monospace;\n        color: #7f8c8d;\n        font-size: 0.7rem;\n    }\n    \n    /* 缩小状态下的快捷键列表样式kuaijie */\n    .minimized-shortcuts {\n        margin-top: 0;\n    }\n    \n    .minimized-shortcut-item {\n        display: flex;\n        align-items: center;\n        padding: 5px;\n        margin-bottom: 3px;\n        background-color: #f8f9fa;\n        border-radius: 3px;\n        font-size: 0.75rem;\n    }\n    \n    .minimized-shortcut-key {\n        background-color: #2ecc71;\n        color: white;\n        padding: 2px 6px;\n        border-radius: 3px;\n        font-family: monospace;\n        font-weight: bold;\n        margin-right: 8px;\n        min-width: 20px;\n        text-align: center;\n        font-size: 0.7rem;\n    }\n    \n    .minimized-shortcut-action {\n        flex: 1;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n    \n    .minimized-shortcut-message {\n        font-style: italic;\n        color: #9b59b6;\n    }\n    \n    .minimized-no-shortcuts {\n        font-size: 0.7rem;\n        color: #7f8c8d;\n        font-style: italic;\n        text-align: center;\n        padding: 10px;\n    }\n    \n    /* 确保标题不折叠kuaijie */\n    .panel-title {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        white-space: nowrap;\n        overflow: hidden;\n    }\n    \n    .panel-title a {\n        font-size: 0.7rem;\n        font-size: 12px;\n        color: rgba(255, 255, 255, 0.8);\n        text-decoration: none;\n        border: 1px solid rgba(255, 255, 255, 0.5);\n        padding: 2px 8px;\n        border-radius: 3px;\n        transition: all 0.2s;\n    }\n    \n    .panel-title a:hover {\n        background-color: rgba(255, 255, 255, 0.1);\n        color: white;\n    }\n    \n    /* 修复控制按钮样式kuaijie */\n     .panel-controls {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        gap: 8px;\n        height: 100%;\n    }\n         .control-btn {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        min-width: 80px;\n        height: 28px;\n        padding: 0 12px;\n        background-color: rgba(255, 255, 255, 0.2);\n        color: white;\n        border: 1px solid rgba(255, 255, 255, 0.3);\n        border-radius: 4px;\n        cursor: pointer;\n        font-size: 12px;\n        font-weight: 500;\n        transition: all 0.2s ease;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n    \n    .control-btn:hover {\n        background-color: rgba(255, 255, 255, 0.3);\n        border-color: rgba(255, 255, 255, 0.5);\n        transform: translateY(-1px);\n    }\n    \n    .control-btn:active {\n        background-color: rgba(255, 255, 255, 0.1);\n        transform: translateY(0);\n    }\n    #minimize-btn, #close-btn {\n        background: none;\n        border: none;\n        color: white;\n        cursor: pointer;\n        width: 24px;\n        height: 24px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 3px;\n        transition: background-color 0.2s;\n        font-size: 14px;\n    }\n     /* 专门针对缩小按钮的样式kuaijie */\n    #minimize-btn {\n        min-width: 90px;\n        font-size: 13px;\n        letter-spacing: 0.5px;\n    }\n    \n    /* 关闭按钮样式kuaijie */\n    #close-btn {\n        min-width: 28px;\n        width: 28px;\n        padding: 0;\n        font-size: 16px;\n        font-weight: bold;\n    }\n    #minimize-btn:hover, #close-btn:hover {\n        background-color: rgba(255, 255, 255, 0.2);\n    }\n\n    /* 模式切换样式kuaijie */\n    .mode-toggle-section {\n        margin-bottom: 15px;\n        padding: 10px;\n        background-color: #f8f9fa;\n        border-radius: 4px;\n        border: 1px solid #e9ecef;\n    }\n    \n    .mode-toggle-title {\n        font-weight: bold;\n        margin-bottom: 8px;\n        font-size: 0.9rem;\n        color: #495057;\n    }\n    \n    .mode-buttons {\n        display: flex;\n        gap: 5px;\n    }\n    \n    .mode-btn {\n        flex: 1;\n        padding: 6px 10px;\n        border: 1px solid #ced4da;\n        background-color: white;\n        border-radius: 4px;\n        cursor: pointer;\n        font-size: 0.8rem;\n        transition: all 0.2s;\n        text-align: center;\n    }\n    \n    .mode-btn.active {\n        background-color: #3498db;\n        color: white;\n        border-color: #3498db;\n    }\n    \n    .mode-btn:hover {\n        background-color: #e9ecef;\n    }\n    \n    .mode-btn.active:hover {\n        background-color: #2980b9;\n    }\n    \n    #shortcut-panel {\n        position: fixed;\n        top: 1px;\n        right: 500px;\n        width: 300px;\n        background-color: white;\n        border-radius: 8px;\n        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n        z-index: 8888;\n        transition: all 0.3s;\n        font-family: 'Segoe UI', Arial, sans-serif;\n        font-size: 14px;\n    }\n    \n    #shortcut-panel.minimized {\n        height: 40px;\n        overflow: hidden;\n    }\n    \n    .panel-header {\n    height: 50px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 10px 15px;\n        background-color: #ffd6d5;\n        color: white;\n        border-radius: 8px 8px 0 0;\n        cursor: move;\n        user-select: none;\n        min-height: 50px;\n    }\n    \n    .panel-title {\n         display: flex;\n        align-items: center;\n        gap: 10px;\n        flex: 1;\n        font-size: 14px;\n        font-weight: bold;\n    }\n    \n    .panel-controls {\n        display: flex;\n        gap: 5px;\n    }\n    \n    .panel-controls button {\n        background: none;\n        border: none;\n        color: white;\n        cursor: pointer;\n        width: 24px;\n        height: 24px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 3px;\n        transition: background-color 0.2s;\n    }\n    \n    .panel-controls button:hover {\n        background-color: rgba(255, 255, 255, 0.2);\n    }\n    \n    .panel-content {\n        padding: 15px;\n        max-height: 70vh;\n        overflow-y: auto;\n    }\n    \n    .selected-item {\n        margin-bottom: 15px;\n        padding: 10px;\n        background-color: #f8f9fa;\n        border-radius: 4px;\n    }\n    \n    .selected-item-title {\n        font-weight: bold;\n        margin-bottom: 5px;\n    }\n    \n    .selected-item-info {\n        display: flex;\n        align-items: center;\n    }\n    \n    .selected-item-image {\n        width: 50px;\n        height: 50px;\n        object-fit: cover;\n        border-radius: 4px;\n        margin-right: 10px;\n    }\n    \n    .selected-item-details {\n        flex: 1;\n    }\n    \n    .selected-item-name {\n        font-weight: bold;\n        margin-bottom: 5px;\n        font-size: 0.9rem;\n        line-height: 1.2;\n    }\n    \n    .selected-item-id {\n        font-family: monospace;\n        color: #7f8c8d;\n        font-size: 0.8rem;\n    }\n    \n    .no-selection {\n        color: #7f8c8d;\n        font-style: italic;\n    }\n    \n    .custom-shortcut {\n        margin-top: 15px;\n        padding-top: 15px;\n        border-top: 1px solid #eee;\n    }\n    \n    .custom-shortcut h3 {\n        margin-bottom: 10px;\n        font-size: 1rem;\n    }\n    \n    .key-recording {\n        margin-bottom: 10px;\n    }\n    \n    #record-key-btn {\n        width: 100%;\n        padding: 8px;\n        background-color: #9b59b6;\n        color: white;\n        border: none;\n        border-radius: 4px;\n        cursor: pointer;\n        margin-bottom: 5px;\n    }\n    \n    #record-key-btn:hover {\n        background-color: #8e44ad;\n    }\n    \n    #record-key-btn.recording {\n        background-color: #e74c3c;\n    }\n    \n    #key-recording-status {\n        font-size: 12px;\n        color: #7f8c8d;\n        text-align: center;\n    }\n    \n    .action-selection {\n        margin-bottom: 10px;\n    }\n    \n    .action-selection label {\n        display: block;\n        margin-bottom: 5px;\n    }\n    \n    #custom-action {\n        width: 100%;\n        padding: 8px;\n        border: 1px solid #ddd;\n        border-radius: 4px;\n        margin-bottom: 10px;\n    }\n    \n    #add-shortcut {\n        width: 100%;\n        padding: 8px;\n        background-color: #3498db;\n        color: white;\n        border: none;\n        border-radius: 4px;\n        cursor: pointer;\n        transition: background-color 0.2s;\n    }\n    \n    #add-shortcut:hover {\n        background-color: #2980b9;\n    }\n    \n    .custom-shortcuts-list {\n        margin-top: 15px;\n        padding-top: 15px;\n        border-top: 1px solid #eee;\n    }\n    \n    .custom-shortcuts-list h3 {\n        margin-bottom: 10px;\n        font-size: 1rem;\n    }\n    \n    .custom-shortcut-item {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 8px;\n        background-color: #f8f9fa;\n        border-radius: 4px;\n        margin-bottom: 5px;\n    }\n    \n    .custom-shortcut-key {\n        background-color: #2ecc71;\n        color: white;\n        padding: 2px 8px;\n        border-radius: 4px;\n        font-family: monospace;\n        font-weight: bold;\n    }\n    \n    .custom-shortcut-action {\n        flex: 1;\n        margin: 0 10px;\n    }\n    \n    .delete-custom-shortcut {\n        background-color: #e74c3c;\n        color: white;\n        border: none;\n        border-radius: 3px;\n        padding: 3px 8px;\n        cursor: pointer;\n        font-size: 12px;\n    }\n    \n    .log-container {\n        margin-top: 15px;\n        max-height: 200px;\n        overflow-y: auto;\n        border: 1px solid #eee;\n        border-radius: 4px;\n        padding: 10px;\n        background-color: #f8f9fa;\n    }\n    \n    .log-container h3 {\n        margin-bottom: 10px;\n        font-size: 1rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n    }\n    \n    .log-count {\n        font-size: 0.8rem;\n        font-weight: normal;\n        color: #7f8c8d;\n    }\n    \n    #log-entries {\n        max-height: 120px;\n        overflow-y: auto;\n        margin-bottom: 10px;\n    }\n    \n    .log-entry {\n        font-family: monospace;\n        font-size: 0.8rem;\n        margin-bottom: 5px;\n        padding: 5px;\n        border-radius: 3px;\n        background-color: white;\n        border-left: 3px solid #3498db;\n    }\n    \n    .log-entry:first-child {\n        border-left-color: #e74c3c;\n    }\n    \n    #clear-log {\n        width: 100%;\n        padding: 5px;\n        background-color: #95a5a6;\n        color: white;\n        border: none;\n        border-radius: 3px;\n        cursor: pointer;\n        font-size: 0.8rem;\n    }\n    \n    #clear-log:hover {\n        background-color: #7f8c8d;\n    }\n    \n    .no-shortcuts {\n        text-align: center;\n        color: #7f8c8d;\n        font-style: italic;\n        padding: 10px;\n    }\n    \n    /* 商品选中样式 */\n    .goods-item.selected {\n        border: 2px solid #3498db !important;\n        background-color: #f0f8ff !important;\n    }\n    \n    /* 快捷消息模态窗口样式kuaijie */\n    .quick-message-modal {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.5);\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        z-index: 10001;\n        visibility: visible;\n        opacity: 1;\n        transition: opacity 0.3s ease;\n    }\n    \n    .quick-message-modal.hidden {\n        display: none !important;\n        visibility: hidden;\n        opacity: 0;\n    }\n    \n    .quick-message-content {\n        background-color: white;\n        width: 400px;\n        max-width: 90%;\n        border-radius: 8px;\n        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n        padding: 20px;\n        z-index: 10002;\n        position: relative;\n    }\n    \n    .quick-message-title {\n        font-size: 1.2rem;\n        font-weight: bold;\n        margin-bottom: 15px;\n        color: #2c3e50;\n    }\n    \n    .quick-message-form {\n        display: flex;\n        flex-direction: column;\n        gap: 15px;\n    }\n    \n    .form-group {\n        display: flex;\n        flex-direction: column;\n        gap: 5px;\n    }\n    \n    .form-group label {\n        font-weight: bold;\n        font-size: 0.9rem;\n    }\n    \n    .quick-message-textarea {\n        width: 100%;\n        height: 100px;\n        padding: 10px;\n        border: 1px solid #ddd;\n        border-radius: 4px;\n        resize: vertical;\n        font-family: inherit;\n        font-size: 0.9rem;\n    }\n    \n    .quick-message-textarea:focus {\n        outline: none;\n        border-color: #3498db;\n    }\n    \n    .char-count {\n        text-align: right;\n        font-size: 0.8rem;\n        color: #7f8c8d;\n    }\n    \n    .char-count.warning {\n        color: #e74c3c;\n    }\n    \n    .checkbox-group {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n    }\n    \n    .checkbox-group input[type=\"checkbox\"] {\n        width: 16px;\n        height: 16px;\n    }\n    \n    .checkbox-group label {\n        font-weight: normal;\n        margin: 0;\n    }\n    \n    .form-buttons {\n        display: flex;\n        gap: 10px;\n        justify-content: flex-end;\n        margin-top: 10px;\n    }\n    \n    .form-button {\n        padding: 8px 15px;\n        border: none;\n        border-radius: 4px;\n        cursor: pointer;\n        font-size: 0.9rem;\n        transition: background-color 0.2s;\n    }\n    \n    .form-button.confirm {\n        background-color: #3498db;\n        color: white;\n    }\n    \n    .form-button.confirm:hover {\n        background-color: #2980b9;\n    }\n    \n    .form-button.cancel {\n        background-color: #95a5a6;\n        color: white;\n    }\n    \n    .form-button.cancel:hover {\n        background-color: #7f8c8d;\n    }\n        /* 响应式调整kuaijie - 在小屏幕上优化按钮显示 */\n    @media (max-width: 400px) {\n        .panel-header {\n            padding: 8px 12px;\n            height: 45px;\n            min-height: 45px;\n        }\n        \n        .control-btn {\n            min-width: 70px;\n            height: 26px;\n            padding: 0 10px;\n            font-size: 11px;\n        }\n        \n        #minimize-btn {\n            min-width: 80px;\n            font-size: 12px;\n        }\n        \n        #close-btn {\n            min-width: 26px;\n            width: 26px;\n            font-size: 14px;\n        }\n        \n        .panel-title {\n            font-size: 13px;\n        }\n        \n        .panel-title a {\n            font-size: 11px;\n            padding: 1px 6px;\n        }\n    }\n    \n    /* 确保按钮文本不会换行kuaijie */\n    .control-btn span {\n        display: inline-block;\n        max-width: 100%;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n    }\n";
document.head.appendChild(stylekuaijie);
let selectedGoodsIdkuaijie = null;
let selectedGoodsImagekuaijie = null;
let selectedGoodsTitlekuaijie = null;
let selectedGoodsElementkuaijie = null;
let selectedGoodsIndexkuaijie = null;
let customShortcutskuaijie = {};
let isRecordingKeykuaijie = false;
let recordedKeykuaijie = null;
let logCountkuaijie = 0;
let selectionModekuaijie = "hover";
let currentShortcutKeykuaijie = null;
let isSettingQuickMessagekuaijie = false;
function initkuaijie() {
  setupPanelDragSimplekuaijie();
  setupPanelControlskuaijie();
  setupCustomShortcutskuaijie();
  setupQuickMessagekuaijie();
  setupGoodsSelectionkuaijie();
  document.addEventListener("keydown", handleKeyDownkuaijie);
  loadCustomShortcutskuaijie();
  document.getElementById("clear-log").addEventListener("click", function () {
    document.getElementById("log-entries").innerHTML = "";
    logCountkuaijie = 0;
    updateLogCountkuaijie();
    addLogkuaijie("日志已清空");
  });
  setupModeTogglekuaijie();
}
function setupPanelDragSimplekuaijie() {
  const _0x8d159 = document.getElementById("shortcut-panel");
  const _0x458f53 = _0x8d159.querySelector(".panel-header");
  let _0x237564 = false;
  let _0x7da455;
  let _0x2b7cc5;
  let _0x322bde;
  let _0x168640;
  _0x458f53.addEventListener("mousedown", function (_0x390e7c) {
    _0x390e7c.preventDefault();
    _0x237564 = true;
    _0x7da455 = _0x390e7c.clientX;
    _0x2b7cc5 = _0x390e7c.clientY;
    _0x322bde = parseInt(_0x8d159.style.left) || _0x8d159.offsetLeft;
    _0x168640 = parseInt(_0x8d159.style.top) || _0x8d159.offsetTop;
    _0x8d159.style.cursor = "grabbing";
    _0x8d159.style.transition = "none";
    document.addEventListener("mousemove", _0x2d787d);
    document.addEventListener("mouseup", _0x46ffc6);
  });
  function _0x2d787d(_0x12d029) {
    if (!_0x237564) {
      return;
    }
    _0x12d029.preventDefault();
    const _0x102de6 = _0x322bde + (_0x12d029.clientX - _0x7da455);
    const _0x3b87e8 = _0x168640 + (_0x12d029.clientY - _0x2b7cc5);
    _0x8d159.style.left = _0x102de6 + "px";
    _0x8d159.style.top = _0x3b87e8 + "px";
  }
  function _0x46ffc6() {
    _0x237564 = false;
    _0x8d159.style.cursor = "";
    _0x8d159.style.transition = "";
    document.removeEventListener("mousemove", _0x2d787d);
    document.removeEventListener("mouseup", _0x46ffc6);
  }
  _0x458f53.addEventListener("touchstart", function (_0x11a5d1) {
    if (_0x11a5d1.touches.length !== 1) {
      return;
    }
    _0x11a5d1.preventDefault();
    _0x237564 = true;
    const _0x4cb9e5 = _0x11a5d1.touches[0];
    _0x7da455 = _0x4cb9e5.clientX;
    _0x2b7cc5 = _0x4cb9e5.clientY;
    _0x322bde = parseInt(_0x8d159.style.left) || _0x8d159.offsetLeft;
    _0x168640 = parseInt(_0x8d159.style.top) || _0x8d159.offsetTop;
    _0x8d159.style.cursor = "grabbing";
    _0x8d159.style.transition = "none";
    const _0x2efe38 = {
      passive: false
    };
    document.addEventListener("touchmove", _0x197598, _0x2efe38);
    document.addEventListener("touchend", _0x1b0aac);
  });
  function _0x197598(_0x349e95) {
    if (!_0x237564 || _0x349e95.touches.length !== 1) {
      return;
    }
    _0x349e95.preventDefault();
    const _0x122780 = _0x349e95.touches[0];
    const _0x531286 = _0x322bde + (_0x122780.clientX - _0x7da455);
    const _0x472cf1 = _0x168640 + (_0x122780.clientY - _0x2b7cc5);
    _0x8d159.style.left = _0x531286 + "px";
    _0x8d159.style.top = _0x472cf1 + "px";
  }
  function _0x1b0aac() {
    _0x237564 = false;
    _0x8d159.style.cursor = "";
    _0x8d159.style.transition = "";
    document.removeEventListener("touchmove", _0x197598);
    document.removeEventListener("touchend", _0x1b0aac);
  }
}
function setupPanelDragkuaijie() {
  const _0x45ba8a = document.getElementById("shortcut-panel");
  const _0x2c582b = _0x45ba8a.querySelector(".panel-header");
  let _0x55bd6a = false;
  let _0x1530cf = {
    x: 0,
    y: 0
  };
  _0x2c582b.addEventListener("mousedown", function (_0x157c4f) {
    _0x55bd6a = true;
    _0x1530cf.x = _0x157c4f.clientX - _0x45ba8a.offsetLeft;
    _0x1530cf.y = _0x157c4f.clientY - _0x45ba8a.offsetTop;
    _0x45ba8a.style.cursor = "grabbing";
  });
  document.addEventListener("mousemove", function (_0x5f3d0f) {
    _0x55bd6a && (_0x45ba8a.style.left = _0x5f3d0f.clientX - _0x1530cf.x + "px", _0x45ba8a.style.top = _0x5f3d0f.clientY - _0x1530cf.y + "px", _0x45ba8a.style.right = "auto");
  });
  document.addEventListener("mouseup", function () {
    _0x55bd6a = false;
    _0x45ba8a.style.cursor = "default";
  });
}
function setupPanelControlskuaijie() {
  const _0x55644a = document.getElementById("shortcut-panel");
  const _0x3c45ac = document.getElementById("minimize-btn");
  const _0xe76a16 = document.getElementById("minimized-ding");
  const _0x113b35 = document.getElementById("close-btn");
  _0xe76a16.addEventListener("click", function () {
    createZtCard(sb, "当前面板仅支持快捷查看", "如果需要删除添加等操作请点击打开按钮展开操作", "#76fa4eff");
  });
  _0x3c45ac.addEventListener("click", function () {
    _0x55644a.classList.toggle("minimized");
    _0x55644a.classList.contains("minimized") ? (_0x3c45ac.textContent = "打开设置", updateMinimizedViewkuaijie()) : _0x3c45ac.textContent = "缩小设置";
  });
  _0x113b35.addEventListener("click", function () {
    _0x55644a.style.display = "none";
    addLogkuaijie("面板已关闭，刷新页面重新显示");
  });
}
function updateMinimizedViewkuaijie() {
  const _0x4e9661 = document.getElementById("shortcut-panel");
  if (!_0x4e9661.classList.contains("minimized")) {
    return;
  }
  updateMinimizedSelectedInfokuaijie();
  updateMinimizedShortcutskuaijie();
}
function updateMinimizedShortcutskuaijie() {
  const _0x415dda = document.getElementById("minimized-shortcuts-container");
  if (!_0x415dda) {
    console.error("未找到缩小状态下的快捷键列表容器kuaijie");
    return;
  }
  _0x415dda.innerHTML = "";
  if (Object.keys(customShortcutskuaijie).length === 0) {
    _0x415dda.innerHTML = "<div class=\"minimized-no-shortcuts\">暂无快捷键</div>";
    return;
  }
  const _0x11e942 = Object.keys(customShortcutskuaijie).sort();
  _0x11e942.forEach(_0x85a1ed => {
    const _0x29881d = customShortcutskuaijie[_0x85a1ed];
    const _0x451f8c = document.createElement("div");
    _0x451f8c.className = "minimized-shortcut-item";
    if (typeof _0x29881d === "object" && _0x29881d.type === "quick-message") {
      const _0x869fc8 = _0x29881d.message;
      const _0x19fc55 = _0x29881d.pinned;
      let _0x5a6af2 = "发送消息: " + _0x869fc8;
      _0x19fc55 && (_0x5a6af2 += " (置顶)");
      const _0x3642b1 = _0x5a6af2.substring(0, 20) + (_0x5a6af2.length > 20 ? "..." : "");
      _0x451f8c.innerHTML = "\n                <div class=\"minimized-shortcut-key\">" + _0x85a1ed + "</div>\n                <div class=\"minimized-shortcut-action minimized-shortcut-message\" title=\"" + _0x5a6af2 + "\">\n                    " + _0x3642b1 + "\n                </div>\n            ";
    } else {
      const _0x253076 = typeof _0x29881d === "string" ? _0x29881d : "未知操作";
      const _0x477514 = _0x253076.substring(0, 18) + (_0x253076.length > 18 ? "..." : "");
      _0x451f8c.innerHTML = "\n                <div class=\"minimized-shortcut-key\">" + _0x85a1ed + "</div>\n                <div class=\"minimized-shortcut-action\" title=\"" + _0x253076 + "\">\n                    " + _0x477514 + "\n                </div>\n            ";
    }
    _0x451f8c.title = "快捷键: " + _0x85a1ed + " - 点击商品后按此键执行";
    _0x415dda.appendChild(_0x451f8c);
  });
}
function setupGoodsSelectionkuaijie() {
  document.addEventListener("click", function (_0x3d00f7) {
    let _0x10019a = _0x3d00f7.target;
    let _0x4a1519 = false;
    while (_0x10019a) {
      if (_0x10019a.getAttribute("data-rbd-draggable-id")) {
        _0x4a1519 = true;
        break;
      }
      _0x10019a = _0x10019a.parentElement;
      if (!_0x10019a || _0x10019a === document.body) {
        _0x10019a = null;
        break;
      }
    }
    if (_0x4a1519 && _0x10019a) {
      document.querySelectorAll(".goods-item.selected").forEach(_0x51b0eb => {
        _0x51b0eb.classList.remove("selected");
      });
      _0x10019a.classList.add("selected");
      selectedGoodsIdkuaijie = _0x10019a.getAttribute("data-rbd-draggable-id");
      selectedGoodsElementkuaijie = _0x10019a;
      extractGoodsInfokuaijie(_0x10019a);
      updateSelectedGoodsInfokuaijie();
      addLogkuaijie("[点击]选中商品: " + selectedGoodsIdkuaijie);
    } else {
      selectionModekuaijie === "click" && (document.querySelectorAll(".goods-item.selected").forEach(_0x27b6a1 => {
        _0x27b6a1.classList.remove("selected");
      }), selectedGoodsIdkuaijie = null, selectedGoodsImagekuaijie = null, selectedGoodsTitlekuaijie = null, selectedGoodsElementkuaijie = null, updateSelectedGoodsInfokuaijie(), addLogkuaijie("已取消选中商品"));
    }
  });
  const _0x1e6621 = debouncekuaijie(function (_0x5cc99e) {
    if (selectionModekuaijie === "click") {
      return;
    }
    let _0x4616f8 = _0x5cc99e.target;
    let _0x36243e = false;
    while (_0x4616f8) {
      if (_0x4616f8.getAttribute("data-rbd-draggable-id")) {
        _0x36243e = true;
        break;
      }
      _0x4616f8 = _0x4616f8.parentElement;
      if (!_0x4616f8 || _0x4616f8 === document.body) {
        _0x4616f8 = null;
        break;
      }
    }
    if (_0x36243e && _0x4616f8) {
      if (selectedGoodsElementkuaijie === _0x4616f8) {
        return;
      }
      document.querySelectorAll(".goods-item.selected").forEach(_0x3628fd => {
        _0x3628fd.classList.remove("selected");
      });
      _0x4616f8.classList.add("selected");
      selectedGoodsIdkuaijie = _0x4616f8.getAttribute("data-rbd-draggable-id");
      selectedGoodsElementkuaijie = _0x4616f8;
      extractGoodsInfokuaijie(_0x4616f8);
      updateSelectedGoodsInfokuaijie();
      addLogkuaijie("[悬停]选中商品: " + selectedGoodsIdkuaijie);
    }
  }, 150);
  document.addEventListener("mouseover", _0x1e6621);
  document.addEventListener("mouseout", function (_0xc02149) {
    if (selectionModekuaijie !== "hover") {
      return;
    }
    let _0xd3c22c = _0xc02149.target;
    let _0x42f12f = false;
    while (_0xd3c22c) {
      if (_0xd3c22c.getAttribute("data-rbd-draggable-id")) {
        _0x42f12f = true;
        break;
      }
      _0xd3c22c = _0xd3c22c.parentElement;
      if (!_0xd3c22c || _0xd3c22c === document.body) {
        _0xd3c22c = null;
        break;
      }
    }
    if (_0x42f12f && selectedGoodsElementkuaijie) {
      const _0x4655a1 = _0xc02149.relatedTarget;
      let _0x474147 = false;
      if (_0x4655a1) {
        let _0x3a2f88 = _0x4655a1;
        while (_0x3a2f88) {
          if (_0x3a2f88.getAttribute("data-rbd-draggable-id")) {
            _0x474147 = true;
            break;
          }
          _0x3a2f88 = _0x3a2f88.parentElement;
          if (!_0x3a2f88 || _0x3a2f88 === document.body) {
            _0x3a2f88 = null;
            break;
          }
        }
      }
      if (!_0x474147) {
        document.querySelectorAll(".goods-item.selected").forEach(_0x3f4e7d => {
          _0x3f4e7d.classList.remove("selected");
        });
        selectedGoodsIdkuaijie = null;
        selectedGoodsImagekuaijie = null;
        selectedGoodsTitlekuaijie = null;
        selectedGoodsElementkuaijie = null;
        updateSelectedGoodsInfokuaijie();
        addLogkuaijie("[悬停]已取消选中商品");
      }
    }
  });
}
function debouncekuaijie(_0x327f81, _0x58fd72) {
  let _0x3a3fdf;
  return function _0x1ac0a1(..._0x33cb60) {
    const _0x1531f3 = () => {
      clearTimeout(_0x3a3fdf);
      _0x327f81(..._0x33cb60);
    };
    clearTimeout(_0x3a3fdf);
    _0x3a3fdf = setTimeout(_0x1531f3, _0x58fd72);
  };
}
function extractGoodsInfokuaijie(_0x3e3537) {
  let _0x5ee89c = _0x3e3537.querySelector("img[decoding=\"async\"]");
  _0x5ee89c ? selectedGoodsImagekuaijie = _0x5ee89c.getAttribute("src") : (_0x5ee89c = _0x3e3537.querySelector("img"), _0x5ee89c ? selectedGoodsImagekuaijie = _0x5ee89c.getAttribute("src") : selectedGoodsImagekuaijie = null);
  let _0x26a05a = _0x3e3537.querySelector("[elementtiming=\"element-timing\"]");
  _0x26a05a && _0x26a05a.textContent && _0x26a05a.textContent.trim().length > 0 ? selectedGoodsTitlekuaijie = _0x26a05a.textContent.trim() : (_0x26a05a = _0x3e3537.querySelector("[class*=\"title\"]"), _0x26a05a && _0x26a05a.textContent && _0x26a05a.textContent.trim().length > 0 ? selectedGoodsTitlekuaijie = _0x26a05a.textContent.trim() : selectedGoodsTitlekuaijie = "未知商品");
  selectedGoodsTitlekuaijie.length > 50 && (selectedGoodsTitlekuaijie = selectedGoodsTitlekuaijie.substring(0, 47) + "...");
  const _0x50ad8d = _0x3e3537.querySelector(".auxo-input");
  if (_0x50ad8d) {
    selectedGoodsIndexkuaijie = _0x50ad8d.value;
  } else {
    const _0xc193cd = _0x3e3537.querySelector(".indexWrapper-ONX_y4");
    _0xc193cd && _0xc193cd.textContent ? selectedGoodsIndexkuaijie = _0xc193cd.textContent.trim() : selectedGoodsIndexkuaijie = "未知序号";
  }
}
function updateSelectedGoodsInfokuaijie() {
  const _0x16a83c = document.getElementById("selected-info");
  if (selectedGoodsIdkuaijie) {
    let _0x19a524 = "<div class=\"selected-item-details\">";
    _0x19a524 += "<div class=\"selected-item-name\">" + selectedGoodsTitlekuaijie + "</div>";
    _0x19a524 += "<div class=\"selected-item-id\" style=\"display: none;\">ID: " + selectedGoodsIdkuaijie + "</div>";
    _0x19a524 += "</div>";
    selectedGoodsImagekuaijie && (_0x19a524 = "<img class=\"selected-item-image\" src=\"" + selectedGoodsImagekuaijie + "\" alt=\"商品图片\">" + _0x19a524);
    _0x16a83c.innerHTML = _0x19a524;
  } else {
    _0x16a83c.innerHTML = "<div class=\"no-selection\">无选中商品 请把鼠标放在商品上</div>";
  }
  updateMinimizedSelectedInfokuaijie();
}
function updateMinimizedSelectedInfokuaijie() {
  const _0x5412bf = document.getElementById("minimized-selected-info");
  if (!_0x5412bf) {
    console.error("未找到缩小状态下的选中商品信息容器kuaijie");
    return;
  }
  selectedGoodsIdkuaijie ? _0x5412bf.innerHTML = "\n            <div class=\"goods-name\">" + (selectedGoodsTitlekuaijie || "未知商品") + "</div>\n            <div class=\"goods-id\" style=\"display: none;\">ID: " + selectedGoodsIdkuaijie + "</div>\n        " : _0x5412bf.innerHTML = "<div class=\"no-selection\">无选中商品 请把鼠标放在商品上</div>";
}
function updateMinimizedShortcutskuaijie() {
  const _0x4ea0a6 = document.getElementById("minimized-shortcuts-container");
  if (!_0x4ea0a6) {
    console.error("未找到缩小状态下的快捷键列表容器kuaijie");
    return;
  }
  _0x4ea0a6.innerHTML = "";
  if (Object.keys(customShortcutskuaijie).length === 0) {
    _0x4ea0a6.innerHTML = "<div class=\"minimized-no-shortcuts\">暂无快捷键</div>";
    return;
  }
  Object.keys(customShortcutskuaijie).forEach(_0x332e57 => {
    const _0x4ec385 = customShortcutskuaijie[_0x332e57];
    const _0x5b5427 = document.createElement("div");
    _0x5b5427.className = "minimized-shortcut-item";
    if (typeof _0x4ec385 === "object" && _0x4ec385.type === "quick-message") {
      _0x5b5427.innerHTML = "\n                <div class=\"minimized-shortcut-key\">" + _0x332e57 + "</div>\n                <div class=\"minimized-shortcut-action minimized-shortcut-message\" title=\"" + _0x4ec385.message + "\">\n                    " + _0x4ec385.message.substring(0, 15) + (_0x4ec385.message.length > 15 ? "..." : "") + "\n                </div>\n            ";
    } else {
      const _0x4d656a = typeof _0x4ec385 === "string" ? _0x4ec385 : "未知操作";
      _0x5b5427.innerHTML = "\n                <div class=\"minimized-shortcut-key\">" + _0x332e57 + "</div>\n                <div class=\"minimized-shortcut-action\" title=\"" + _0x4d656a + "\">\n                    " + _0x4d656a.substring(0, 15) + (_0x4d656a.length > 15 ? "..." : "") + "\n                </div>\n            ";
    }
    _0x4ea0a6.appendChild(_0x5b5427);
  });
}
function setupCustomShortcutskuaijie() {
  const _0x3931b6 = document.getElementById("record-key-btn");
  const _0x2a758e = document.getElementById("add-shortcut");
  const _0x20f837 = document.getElementById("custom-action");
  const _0x23bbc7 = document.getElementById("key-recording-status");
  _0x3931b6.addEventListener("click", function () {
    isRecordingKeykuaijie = true;
    recordedKeykuaijie = null;
    _0x3931b6.textContent = "请按下任意键...";
    _0x3931b6.classList.add("recording");
    _0x23bbc7.textContent = "正在录制按键...";
    const _0x57022f = function (_0x4f6be3) {
      if (isRecordingKeykuaijie) {
        _0x4f6be3.preventDefault();
        _0x4f6be3.stopPropagation();
        if (_0x4f6be3.key.length === 1 || ["Enter", "Space", "Escape", "Tab", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Backspace", "Delete"].includes(_0x4f6be3.key)) {
          recordedKeykuaijie = _0x4f6be3.key;
          _0x3931b6.textContent = "已录制: " + _0x4f6be3.key;
          _0x3931b6.classList.remove("recording");
          _0x23bbc7.textContent = "按键录制完成";
          isRecordingKeykuaijie = false;
        } else {
          _0x23bbc7.textContent = "不支持的功能键，请按字母、数字或常用符号键";
        }
        document.removeEventListener("keydown", _0x57022f);
      }
    };
    document.addEventListener("keydown", _0x57022f);
    setTimeout(() => {
      if (isRecordingKeykuaijie) {
        isRecordingKeykuaijie = false;
        _0x3931b6.textContent = "点击这里，然后按下按键";
        _0x3931b6.classList.remove("recording");
        _0x23bbc7.textContent = "录制超时，请重试";
        document.removeEventListener("keydown", _0x57022f);
      }
    }, 10000);
  });
  _0x2a758e.addEventListener("click", function () {
    if (!recordedKeykuaijie) {
      alert("请先录制一个按键");
      return;
    }
    const _0x48868a = _0x20f837.value;
    if (customShortcutskuaijie[recordedKeykuaijie]) {
      if (!confirm("快捷键 \"" + recordedKeykuaijie + "\" 已存在，是否覆盖？")) {
        return;
      }
    }
    if (_0x48868a === "发快捷消息") {
      showQuickMessageModalkuaijie(recordedKeykuaijie);
      return;
    }
    customShortcutskuaijie[recordedKeykuaijie] = _0x48868a;
    saveCustomShortcutskuaijie();
    renderCustomShortcutskuaijie();
    createZtCard(cg, "快捷键设置成功 使用方法：", "1.把鼠标放在需要操作的商品上2.按下键盘的" + recordedKeykuaijie + "就会" + _0x48868a, "#76fa4eff");
    _0x3931b6.textContent = "点击这里，然后按下按键";
    recordedKeykuaijie = null;
    _0x23bbc7.textContent = "等待录入...";
    addLogkuaijie("添加快捷键: " + recordedKeykuaijie + " -> " + _0x48868a);
  });
}
function setupQuickMessagekuaijie() {
  const _0x299c72 = document.getElementById("message-content");
  const _0x11d72f = document.getElementById("char-count");
  const _0x51ea53 = document.getElementById("cancel-message");
  const _0x2c121d = document.getElementById("confirm-message");
  const _0x506988 = document.querySelector(".quick-message-modal");
  _0x299c72.addEventListener("input", function () {
    const _0x4aea7d = this.value.length;
    _0x11d72f.textContent = _0x4aea7d + "/50";
    _0x4aea7d > 50 ? _0x11d72f.classList.add("warning") : _0x11d72f.classList.remove("warning");
  });
  _0x51ea53.addEventListener("click", function () {
    _0x506988.classList.add("hidden");
    _0x299c72.value = "";
    _0x11d72f.textContent = "0/50";
    _0x11d72f.classList.remove("warning");
    document.getElementById("pin-message").checked = false;
    isSettingQuickMessagekuaijie = false;
    currentShortcutKeykuaijie = null;
  });
  _0x2c121d.addEventListener("click", function () {
    const _0x46d448 = _0x299c72.value.trim();
    const _0x2a6cba = document.getElementById("pin-message").checked;
    if (!_0x46d448) {
      alert("请输入消息内容");
      return;
    }
    if (_0x46d448.length > 50) {
      alert("消息内容不能超过50字");
      return;
    }
    if (!currentShortcutKeykuaijie) {
      alert("未找到快捷键信息，请重新设置");
      return;
    }
    const _0x36e084 = {
      type: "quick-message",
      message: _0x46d448,
      pinned: _0x2a6cba
    };
    customShortcutskuaijie[currentShortcutKeykuaijie] = _0x36e084;
    saveCustomShortcutskuaijie();
    renderCustomShortcutskuaijie();
    _0x506988.classList.add("hidden");
    _0x299c72.value = "";
    _0x11d72f.textContent = "0/50";
    _0x11d72f.classList.remove("warning");
    document.getElementById("pin-message").checked = false;
    const _0x233f9c = document.getElementById("record-key-btn");
    createZtCard(cg, "添加成功", "添加快捷消息:" + _0x46d448 + "成功按下按键=>" + currentShortcutKeykuaijie + "即可发送", "#76fa4eff");
    isSettingQuickMessagekuaijie = false;
    currentShortcutKeykuaijie = null;
    _0x233f9c.textContent = "点击这里，然后按下按键";
    recordedKeykuaijie = null;
    recordingStatuskuaijie.textContent = "等待录入...";
    addLogkuaijie("添加快捷消息: " + _0x46d448 + " " + (_0x2a6cba ? "(置顶)" : "") + " 快捷键: " + currentShortcutKeykuaijie);
  });
}
function showQuickMessageModalkuaijie(_0xa23b45) {
  currentShortcutKeykuaijie = _0xa23b45;
  isSettingQuickMessagekuaijie = true;
  const _0x179f2a = document.querySelector(".quick-message-modal");
  _0x179f2a.classList.remove("hidden");
  setTimeout(() => {
    const _0x20cc7d = document.getElementById("message-content");
    _0x20cc7d && _0x20cc7d.focus();
  }, 100);
}
function handleKeyDownkuaijie(_0x2295af) {
  if (isRecordingKeykuaijie) {
    return;
  }
  if (customShortcutskuaijie[_0x2295af.key]) {
    const _0x49eaad = customShortcutskuaijie[_0x2295af.key];
    if (typeof _0x49eaad === "object" && _0x49eaad.type === "quick-message") {
      executeQuickMessagekuaijie(_0x49eaad);
    } else {
      if (!selectedGoodsIdkuaijie) {
        createZtCard(sb, "快捷键功能触发失败", "该功能需要把鼠标放在商品卡上才能触发快捷键<br>如果是发福袋放在任意商品卡可触发", "#fa4e4eff");
        return;
      }
      const _0x52ac7e = _0x49eaad;
      const _0x33fe3e = "快捷键 " + _0x2295af.key + ": " + _0x52ac7e + " | 商品ID: " + selectedGoodsIdkuaijie + " | 标题: " + selectedGoodsTitlekuaijie + " | 图片: " + (selectedGoodsImagekuaijie || "无图片");
      addLogkuaijie(_0x33fe3e);
      console.log("商品IDkuaijie: " + selectedGoodsIdkuaijie);
      console.log("商品标题kuaijie: " + selectedGoodsTitlekuaijie);
      console.log("商品图片kuaijie: " + selectedGoodsImagekuaijie);
      console.log("自定义快捷键 " + _0x2295af.key + ": " + _0x52ac7e);
      executeActionkuaijie(_0x52ac7e, selectedGoodsIdkuaijie, selectedGoodsTitlekuaijie, selectedGoodsImagekuaijie);
    }
  }
}
function executeQuickMessagekuaijie(_0x3eb699) {
  if (!_0x3eb699.message) {
    console.error("快捷消息数据不完整kuaijie:", _0x3eb699);
    return;
  }
  const _0x4974af = _0x3eb699.message;
  const _0x473e9d = _0x3eb699.pinned || false;
  console.log("快捷消息kuaijie:", _0x4974af);
  console.log("是否置顶kuaijie:", _0x473e9d);
  fason(_0x4974af, _0x473e9d);
  addLogkuaijie("快捷消息: \"" + _0x4974af + "\" " + (_0x473e9d ? "(置顶)" : ""));
}
function renderCustomShortcutskuaijie() {
  const _0x13333b = document.getElementById("custom-shortcuts-container");
  _0x13333b.innerHTML = "";
  Object.keys(customShortcutskuaijie).length === 0 ? _0x13333b.innerHTML = "<div class=\"no-shortcuts\">暂无自定义快捷键</div>" : (Object.keys(customShortcutskuaijie).forEach(_0x4f2840 => {
    const _0xcb2c9a = customShortcutskuaijie[_0x4f2840];
    const _0x431b8e = document.createElement("div");
    _0x431b8e.className = "custom-shortcut-item";
    typeof _0xcb2c9a === "object" && _0xcb2c9a.type === "quick-message" ? _0x431b8e.innerHTML = "\n                    <div class=\"custom-shortcut-key\">" + _0x4f2840 + "</div>\n                    <div class=\"custom-shortcut-action\">\n                        <div>消息: " + _0xcb2c9a.message + "</div>\n                        <div>" + (_0xcb2c9a.pinned ? "置顶" : "不置顶") + "</div>\n                    </div>\n                    <button class=\"delete-custom-shortcut\" data-key=\"" + _0x4f2840 + "\">删除</button>\n                " : _0x431b8e.innerHTML = "\n                    <div class=\"custom-shortcut-key\">" + _0x4f2840 + "</div>\n                    <div class=\"custom-shortcut-action\">" + _0xcb2c9a + "</div>\n                    <button class=\"delete-custom-shortcut\" data-key=\"" + _0x4f2840 + "\">删除</button>\n                ";
    _0x13333b.appendChild(_0x431b8e);
  }), document.querySelectorAll(".delete-custom-shortcut").forEach(_0x31b077 => {
    _0x31b077.addEventListener("click", function () {
      const _0x59fd8b = this.getAttribute("data-key");
      confirm("确定要删除快捷键 \"" + _0x59fd8b + "\" 吗？") && (delete customShortcutskuaijie[_0x59fd8b], saveCustomShortcutskuaijie(), renderCustomShortcutskuaijie(), addLogkuaijie("删除自定义快捷键: " + _0x59fd8b));
    });
  }));
  updateMinimizedShortcutskuaijie();
}
function saveCustomShortcutskuaijie() {
  try {
    localStorage.setItem("goods-shortcut-custom", JSON.stringify(customShortcutskuaijie));
  } catch (_0x6cf0de) {
    console.error("保存自定义快捷键失败kuaijie:", _0x6cf0de);
  }
}
function loadCustomShortcutskuaijie() {
  try {
    const _0xb74708 = localStorage.getItem("goods-shortcut-custom");
    _0xb74708 ? (customShortcutskuaijie = JSON.parse(_0xb74708), Object.keys(customShortcutskuaijie).length === 0 ? addDefaultShortcutkuaijie() : renderCustomShortcutskuaijie()) : addDefaultShortcutkuaijie();
  } catch (_0x1e2d57) {
    console.error("加载自定义快捷键失败kuaijie:", _0x1e2d57);
    addDefaultShortcutkuaijie();
  }
}
function addDefaultShortcutkuaijie() {
  if (Object.keys(customShortcutskuaijie).length === 0) {
    const _0xb81e80 = "`";
    const _0x46099c = "欢迎大家来到直播间";
    const _0x565197 = {
      type: "quick-message",
      message: _0x46099c,
      pinned: false
    };
    customShortcutskuaijie[_0xb81e80] = _0x565197;
    saveCustomShortcutskuaijie();
    renderCustomShortcutskuaijie();
    addLogkuaijie("已添加默认快捷键: " + _0xb81e80 + "（ 键盘上数字1左边的键） -> 发送消息: " + _0x46099c);
    console.log("已添加默认快捷键kuaijie: 按下`键发送欢迎消息");
  }
}
function setupModeTogglekuaijie() {
  const _0x3e5676 = document.getElementById("hover-mode-btn");
  const _0xa82796 = document.getElementById("click-mode-btn");
  _0x3e5676.addEventListener("click", function () {
    selectionModekuaijie = "hover";
    _0x3e5676.classList.add("active");
    _0xa82796.classList.remove("active");
    saveModeSettingkuaijie();
    addLogkuaijie("已切换到悬停选择模式");
  });
  _0xa82796.addEventListener("click", function () {
    selectionModekuaijie = "click";
    _0xa82796.classList.add("active");
    _0x3e5676.classList.remove("active");
    saveModeSettingkuaijie();
    addLogkuaijie("已切换到点击选择模式");
  });
  loadModeSettingkuaijie(_0x3e5676);
}
function saveModeSettingkuaijie() {
  try {
    localStorage.setItem("goods-shortcut-mode", selectionModekuaijie);
  } catch (_0x101dba) {
    console.error("保存模式设置失败kuaijie:", _0x101dba);
  }
}
function loadModeSettingkuaijie(_0x3968b4) {
  const _0x42b049 = document.getElementById("click-mode-btn");
  try {
    const _0x5145d0 = localStorage.getItem("goods-shortcut-mode");
    _0x5145d0 && (selectionModekuaijie = _0x5145d0, selectionModekuaijie === "hover" ? (_0x3968b4.classList.add("active"), _0x42b049.classList.remove("active")) : (_0x42b049.classList.add("active"), _0x3968b4.classList.remove("active")));
  } catch (_0x580369) {
    console.error("加载模式设置失败kuaijie:", _0x580369);
  }
}
function addLogkuaijie(_0x598abf) {
  const _0x458a64 = document.getElementById("log-entries");
  const _0x4900b0 = document.createElement("div");
  _0x4900b0.className = "log-entry";
  _0x4900b0.textContent = "[" + new Date().toLocaleTimeString() + "] " + _0x598abf;
  _0x458a64.firstChild ? _0x458a64.insertBefore(_0x4900b0, _0x458a64.firstChild) : _0x458a64.appendChild(_0x4900b0);
  logCountkuaijie++;
  updateLogCountkuaijie();
  _0x458a64.scrollTop = 0;
}
function updateLogCountkuaijie() {
  const _0x14dbd2 = document.querySelector(".log-count");
  _0x14dbd2.textContent = "(" + logCountkuaijie + ")";
}
function executeActionkuaijie(_0x379972, _0xecd37, _0x257446, _0x5963c0) {
  let _0x4742c2;
  let _0x15de45;
  let _0xd03307;
  if (selectedGoodsElementkuaijie) {
    const _0xfcfbb0 = selectedGoodsElementkuaijie.querySelector(".goodsAction-JcGBoH");
    if (_0xfcfbb0) {
      const _0x54eef6 = [..._0xfcfbb0.querySelectorAll("button")];
      _0x4742c2 = _0x54eef6.find(_0x2b11a3 => ["预热", "开价"].includes(_0x2b11a3.textContent.trim()) && _0x2b11a3.classList.contains("lvc2-grey-btn") && _0x2b11a3.classList.contains("greyBtnStyle-cIAS0v"));
      _0x15de45 = _0x54eef6.find(_0x2fa563 => _0x2fa563.textContent.trim() === "库存管理" || _0x2fa563.textContent.trim() === "专属价设置");
      _0xd03307 = _0x54eef6.find(_0x282010 => _0x282010.textContent.trim() === "专属价设置");
    }
  }
  console.log("执行操作: " + _0x379972 + " 商品ID: " + _0xecd37 + " 标题: " + _0x257446 + " 图片: " + _0x5963c0);
  switch (_0x379972) {
    case "改库存为1":
      if (_0x15de45 || requestUrl == "https://fxg.jinritemai.com/api/anchor/livepc/setcurrent") {
        if (!vipuser) {
          createModal();
          createZtCard(sb, "操作失败", "您的余额不足请加群充值~~（如已经充值请刷新状态）", "rgba(250, 78, 78, 1)");
          return;
        }
        dd == "抖店工作台" ? (console.log("改1"), ddlaman(_0xecd37, 1)) : _0xd03307 ? zskucunone(_0xecd37, _0x5963c0) : kucunone(_0xecd37, _0x5963c0);
      } else {
        createZtCard(sb, "操作失败", "当前商品不支持改库存", "rgba(250, 78, 78, 1)");
      }
      break;
    case "满库存并预热":
      if (_0x4742c2 || requestUrl == "https://fxg.jinritemai.com/api/anchor/livepc/setcurrent") {
        const _0x55ad2d = window.splistid.find(_0x3fc3ee => _0x3fc3ee.promotion_id === _0xecd37);
        lamanyure(_0x55ad2d.promotion_id, _0x55ad2d.product_id, _0x5963c0);
      } else {
        createZtCard(sb, "操作失败", "当前商品不支持预热", "rgba(250, 78, 78, 1)");
      }
      break;
    case "拉满库存":
      if (_0x15de45 || requestUrl == "https://fxg.jinritemai.com/api/anchor/livepc/setcurrent") {
        if (!vipuser) {
          createModal();
          createZtCard(sb, "操作失败", "您的余额不足请加群充值~~（如已经充值请刷新状态）", "rgba(250, 78, 78, 1)");
          return;
        }
        dd == "抖店工作台" ? (console.log("拉满"), ddlaman(_0xecd37, 10000000)) : _0xd03307 ? zslaman(_0xecd37, _0x5963c0) : laman(_0xecd37, _0x5963c0);
      } else {
        createZtCard(sb, "操作失败", "当前商品不支持改库存", "rgba(250, 78, 78, 1)");
      }
      break;
    case "清空库存":
      if (_0x15de45 || requestUrl == "https://fxg.jinritemai.com/api/anchor/livepc/setcurrent") {
        if (!vipuser) {
          createModal();
          createZtCard(sb, "操作失败", "您的余额不足请加群充值~~（如已经充值请刷新状态）", "rgba(250, 78, 78, 1)");
          return;
        }
        dd == "抖店工作台" ? (console.log("清空"), ddlaman(_0xecd37, 0)) : _0xd03307 ? zsqingkong(_0xecd37, _0x5963c0) : qingkong(_0xecd37, _0x5963c0);
      } else {
        createZtCard(sb, "操作失败", "当前商品不支持改库存", "rgba(250, 78, 78, 1)");
      }
      break;
    case "下架指定商品":
      xiajia(666, cg, true);
      break;
    case "置顶并讲解":
      if (!vipuser) {
        createModal();
        createZtCard(sb, "操作失败", "您的余额不足请加群充值~~（如已经充值请刷新状态）", "rgba(250, 78, 78, 1)");
        return;
      }
      const _0x2aac9d = {
        promotion_id: _0xecd37
      };
      const _0x3183b0 = {
        promotions: [_0x2aac9d, ...window.splistid.filter(_0x58beed => _0x58beed.promotion_id !== _0xecd37).map(_0x245ffd => ({
          promotion_id: _0x245ffd.promotion_id
        }))]
      };
      createZtCard(_0x5963c0, "", "快捷键置顶并讲解", "rgba(78, 250, 81, 1)");
      if (!window.splistid) {
        clickRefreshButtoncs(draggableId, _0x5963c0);
        return;
      }
      zhidingbingjiangjie(_0x3183b0, _0xecd37, _0x5963c0);
      break;
    case "自动讲解":
      if (!vipuser) {
        createModal();
        createZtCard(sb, "操作失败", "您的余额不足请加群充值~~（如已经充值请刷新状态）", "rgba(250, 78, 78, 1)");
        return;
      }
      jiangjie(_0xecd37);
      const _0x28bbd6 = document.querySelectorAll(".goodsItem-KBGOY5");
      _0x28bbd6.forEach(_0x1a954d => {
        _0x28bbd6.forEach(_0x39e40d => {
          if (_0x39e40d !== _0x1a954d) {
            const _0x57e7a6 = _0x39e40d.querySelector(".explain-btn");
            const _0x1f2809 = _0x39e40d.querySelector(".status-text");
            if (_0x57e7a6 && _0x1f2809) {
              _0x57e7a6.innerHTML = jiangjieanniu;
              _0x1f2809.textContent = "";
              _0x39e40d.style.border = "rgba(54, 123, 250, 0.2)";
              _0x39e40d.style.backgroundImage = "none";
              _0x39e40d.style.backgroundColor = "#fff";
            }
          }
        });
      });
      break;
    case "开价":
      if (!vipuser) {
        createModal();
        createZtCard(sb, "操作失败", "您的余额不足请加群充值~~（如已经充值请刷新状态）", "rgba(250, 78, 78, 1)");
        return;
      }
      if (_0x4742c2 || requestUrl == "https://fxg.jinritemai.com/api/anchor/livepc/setcurrent") {
        console.log("开价");
        const _0x545a49 = window.splistid.find(_0x552b5a => _0x552b5a.promotion_id === _0xecd37);
        console.log(_0x545a49.promotion_id);
        console.log(_0x545a49.product_id);
        kaijia(_0x545a49.promotion_id, _0x545a49.product_id, _0x5963c0);
      } else {
        createZtCard(sb, "操作失败", "当前商品不支持开价", "rgba(250, 78, 78, 1)");
      }
      break;
    case "下架商品":
      if (!vipuser) {
        createModal();
        createZtCard(sb, "操作失败", "您的余额不足请加群充值~~（如已经充值请刷新状态）", "rgba(250, 78, 78, 1)");
        return;
      }
      xiajia(_0xecd37, _0x5963c0);
      break;
    case "发1个超级福袋":
      fafudaikuaijie();
      break;
    default:
      console.log("未知操作: " + _0x379972);
  }
}
async function fafudaikuaijie() {
  const _0x35bdad = activityGroups8[0];
  if (!_0x35bdad || _0x35bdad.activity_ids8.length === 0) {
    createZtCard(sb, "失败", "没有可发放的福袋", "rgba(250, 78, 78, 1)");
    return;
  }
  const _0x274e68 = _0x35bdad.activity_ids8[0];
  const _0x37b74e = await chafudai();
  _0x37b74e === true ? fafudai(_0x274e68, "等你下次操作后") : createZtCard(sb, "快捷键发超级福袋失败", "当前有一个福袋没开，等待开奖后再操作", "#76fa4eff");
}
function findMatchingPromotions(_0xd68f2c, _0x176f52) {
  const _0x2ae295 = new Set(_0x176f52.map(_0x187b78 => _0x187b78.promotion_id));
  const _0x5cbfd0 = _0xd68f2c.filter(_0x57925d => _0x2ae295.has(_0x57925d.promotion_id));
  const _0x201ff2 = {
    promotions: _0x5cbfd0.map(_0x34fe1a => ({
      promotion_id: _0x34fe1a.promotion_id
    }))
  };
  return _0x201ff2;
}
async function xiajia(_0x47aa62, _0xcf42b2, _0x383895 = false) {
  const _0x5b90d6 = {
    promotion_id: _0x47aa62
  };
  let _0x3b59a5 = {
    promotions: [_0x5b90d6]
  };
  console.log(window.splistid);
  console.log(window.zhidingsp);
  if (_0x383895) {
    _0x3b59a5 = findMatchingPromotions(window.splistid, window.zhidingsp);
    if (_0x3b59a5.promotions.length === 0) {
      createZtCard(_0xcf42b2, "当前小黄车没有符合要求的商品", "如果要更改/添加指定商品请打开插件设置/自动中控/添加指定商品", "#fa4e4eff");
      return;
    }
  }
  console.log(_0x3b59a5);
  let _0x44556d = "https://buyin.jinritemai.com/pc/live/unbind";
  requestUrl == "https://fxg.jinritemai.com/api/anchor/livepc/setcurrent" && (_0x44556d = "https://fxg.jinritemai.com/pc/live/unbind");
  const _0x1be8ad = await fetch(_0x44556d, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(_0x3b59a5)
  });
  const _0x590166 = await _0x1be8ad.json();
  console.log(_0x590166.code);
  _0x590166.code == 0 ? _0x383895 ? createZtCard(_0xcf42b2, "下架所有指定商品成功", "如果需要更改指定商品请到插件设置/自动中控修改", "#76fa4eff") : createZtCard(_0xcf42b2, "下架商品成功", "需要更改请到插件设置/自动中控修改", "#76fa4eff") : _0x383895 ? createZtCard(_0xcf42b2, "下架所有指定商品商品失败", _0x590166.msg, "#fa4e4eff") : createZtCard(_0xcf42b2, "下架商品失败", _0x590166.msg, "#fa4e4eff");
}
async function zhidingbingjiangjie(_0x121a39, _0x13f75f, _0x5d945e) {
  paixuurl = "https://buyin.jinritemai.com/pc/live/rebind";
  requestUrl == "https://fxg.jinritemai.com/api/anchor/livepc/setcurrent" && (paixuurl = "https://fxg.jinritemai.com/pc/live/rebind");
  const _0x5ad1c9 = await fetch(paixuurl, {
    method: "POST",
    headers: headers,
    credentials: "include",
    body: JSON.stringify(_0x121a39)
  });
  const _0x1afd26 = await _0x5ad1c9.json().catch(() => _0x5ad1c9.text());
  console.log(_0x1afd26);
  console.log(_0x121a39);
  if (_0x1afd26.code === 0) {
    jiangjie(_0x13f75f);
    const _0x3d4420 = document.querySelectorAll(".goodsItem-KBGOY5");
    _0x3d4420.forEach(_0x492d98 => {
      _0x3d4420.forEach(_0x15683f => {
        if (_0x15683f !== _0x492d98) {
          const _0x29d84c = _0x15683f.querySelector(".explain-btn");
          const _0xdf2bb7 = _0x15683f.querySelector(".status-text");
          _0x29d84c && _0xdf2bb7 && (_0x29d84c.innerHTML = jiangjieanniu, _0xdf2bb7.textContent = "", _0x15683f.style.border = "rgba(54, 123, 250, 0.2)", _0x15683f.style.backgroundImage = "none", _0x15683f.style.backgroundColor = "#fff");
        }
      });
    });
  } else {
    createZtCard(_0x5d945e, "置顶操作失败正在重试", _0x1afd26.msg, "#fa4e4eff");
    !window.splistid && (console.log("空的"), clickRefreshButtoncs(_0x13f75f, _0x5d945e));
  }
}
initkuaijie();
const minimizeBtnkuaijie = document.getElementById("minimize-btn");
panelkuaijie.classList.toggle("minimized");
minimizeBtnkuaijie.textContent = panelkuaijie.classList.contains("minimized") ? "打开设置" : "缩小设置";
document.body.insertAdjacentHTML("beforeend", "\n<div id=\"modal-backdrop-weishi\" style=\"position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);display:none;align-items:center;justify-content:center;z-index:10000;\">\n    <div style=\"background:white;border-radius:8px;width:90%;max-width:500px;max-height:80vh;overflow-y:auto;\">\n        <div style=\"padding:15px 20px;border-bottom:1px solid #e9ecef;display:flex;justify-content:space-between;align-items:center;\">\n            <h3 style=\"margin:0;font-size:16px;color:#333;\" id=\"modal-title-weishi\">添加禁言规则</h3>\n            <span style=\"font-size:20px;cursor:pointer;color:#6c757d;\" class=\"close-modal-weishi\">&times;</span>\n        </div>\n        \n        <div style=\"padding:20px;\">\n            <div style=\"margin-bottom:15px;\">\n                <label style=\"display:block;margin-bottom:5px;font-weight:500;color:#495057;\">违禁词</label>\n                <input type=\"text\" id=\"forbidden-word-input-weishi\" style=\"width:100%;padding:8px 12px;border:1px solid #ced4da;border-radius:4px;box-sizing:border-box;\" placeholder=\"请输入要监控的违禁词\" maxlength=\"20\">\n            </div>\n            \n            <div style=\"display:flex;gap:15px;margin:15px 0;\">\n                <label style=\"display:flex;align-items:center;gap:5px;cursor:pointer;\">\n                    <input type=\"checkbox\" id=\"enable-mute-weishi\">\n                    <span style=\"font-size:14px;\">禁言</span>\n                </label>\n                <label style=\"display:flex;align-items:center;gap:5px;cursor:pointer;\">\n                    <input type=\"checkbox\" id=\"enable-flood-weishi\">\n                    <span style=\"font-size:14px;\">刷屏</span>\n                </label>\n            </div>\n            \n            <div id=\"mute-options-weishi\" style=\"margin:15px 0;padding:10px;background:#f8f9fa;border-radius:4px;display:none;\">\n                <div style=\"display:flex;flex-direction:column;gap:10px;\">\n                    <label style=\"display:flex;align-items:center;gap:5px;cursor:pointer;\">\n                        <input type=\"radio\" name=\"mute-type-weishi\" value=\"instant\">\n                        <span style=\"font-size:13px;\">立刻自动禁言</span>\n                    </label>\n                    <label style=\"display:flex;align-items:center;gap:5px;cursor:pointer;\">\n                        <input type=\"radio\" name=\"mute-type-weishi\" value=\"confirm\" checked>\n                        <span style=\"font-size:13px;\">提醒我是否禁言（无操作3秒自动禁言）</span>\n                    </label>\n                </div>\n            </div>\n            \n            <div id=\"flood-options-weishi\" style=\"margin:15px 0;padding:10px;background:#f8f9fa;border-radius:4px;display:none;\">\n                <div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;\">\n                    <button type=\"button\" id=\"add-message-btn-weishi\" style=\"background:#6c757d;color:white;border:none;border-radius:4px;padding:6px 10px;cursor:pointer;font-size:12px;\">\n                        + 添加刷屏消息\n                    </button>\n                    <span style=\"font-size:11px;color:#6c757d;\">最多5条，每条最多50字</span>\n                </div>\n                \n                <div id=\"message-list-weishi\">\n                    <!-- 消息输入框将动态添加在这里 -->\n                </div>\n            </div>\n        </div>\n        \n        <div style=\"padding:15px 20px;border-top:1px solid #e9ecef;display:flex;gap:10px;justify-content:flex-end;\">\n            <button id=\"cancel-btn-weishi\" style=\"padding:8px 16px;background:#6c757d;color:white;border:none;border-radius:4px;cursor:pointer;font-size:13px;\">取消</button>\n            <button id=\"confirm-btn-weishi\" style=\"padding:8px 16px;background:#007bff;color:white;border:none;border-radius:4px;cursor:pointer;font-size:13px;\">确认</button>\n        </div>\n    </div>\n</div>\n");
let guardianRulesWeishi = JSON.parse(localStorage.getItem("guardianRulesWeishi") || "[]");
let isGuardianEnabledWeishi = localStorage.getItem("isGuardianEnabledWeishi") === "true";
let isEditingWeishi = false;
let editIndexWeishi = -1;
function initGuardianWeishi() {
  loadGuardianStateWeishi();
  bindGuardianEventsWeishi();
  renderRulesListWeishi();
  renderLogsListWeishi();
  bindLogsEventsWeishi();
}
function bindLogsEventsWeishi() {
  const _0x2a5bc4 = document.getElementById("clear-logs-btn-weishi");
  _0x2a5bc4 && _0x2a5bc4.addEventListener("click", clearLogsWeishi);
}
function loadGuardianStateWeishi() {
  const _0x4fd8f4 = document.getElementById("guardian-switch-weishi");
  _0x4fd8f4 && (_0x4fd8f4.checked = isGuardianEnabledWeishi);
}
function bindGuardianEventsWeishi() {
  const _0x21582f = document.getElementById("guardian-switch-weishi");
  _0x21582f && _0x21582f.addEventListener("change", function () {
    isGuardianEnabledWeishi = this.checked;
    localStorage.setItem("isGuardianEnabledWeishi", isGuardianEnabledWeishi);
  });
  const _0x68e45a = document.getElementById("add-forbidden-btn-weishi");
  _0x68e45a && _0x68e45a.addEventListener("click", function () {
    openModalWeishi();
  });
  bindModalEventsWeishi();
}
const LOGS_STORAGE_KEY_WEISHI = "guardianLogsWeishi";
function bindModalEventsWeishi() {
  const _0x2d5a90 = document.getElementById("modal-backdrop-weishi");
  const _0x56edae = _0x2d5a90.querySelector(".close-modal-weishi");
  const _0x36a973 = document.getElementById("cancel-btn-weishi");
  const _0xa20c71 = document.getElementById("confirm-btn-weishi");
  const _0x21c194 = document.getElementById("enable-mute-weishi");
  const _0x194c10 = document.getElementById("enable-flood-weishi");
  const _0x3ad3be = document.getElementById("add-message-btn-weishi");
  _0x56edae.addEventListener("click", closeModalWeishi);
  _0x36a973.addEventListener("click", closeModalWeishi);
  _0xa20c71.addEventListener("click", saveRuleWeishi);
  _0x21c194.addEventListener("change", function () {
    const _0x45a46e = document.getElementById("mute-options-weishi");
    _0x45a46e.style.display = this.checked ? "block" : "none";
  });
  _0x194c10.addEventListener("change", function () {
    const _0x3c9e76 = document.getElementById("flood-options-weishi");
    _0x3c9e76.style.display = this.checked ? "block" : "none";
  });
  _0x3ad3be.addEventListener("click", function () {
    addMessageInputWeishi();
  });
  _0x2d5a90.addEventListener("click", function (_0x9b9348) {
    _0x9b9348.target === _0x2d5a90 && closeModalWeishi();
  });
}
function openModalWeishi(_0x45f7f2 = null) {
  isEditingWeishi = _0x45f7f2 !== null;
  editIndexWeishi = _0x45f7f2;
  const _0x3fb3cf = document.getElementById("modal-backdrop-weishi");
  const _0x8be008 = document.getElementById("modal-title-weishi");
  const _0x15de93 = document.getElementById("forbidden-word-input-weishi");
  const _0x560f62 = document.getElementById("enable-mute-weishi");
  const _0x52b80b = document.getElementById("enable-flood-weishi");
  const _0x5b4c98 = document.getElementById("mute-options-weishi");
  const _0x137454 = document.getElementById("flood-options-weishi");
  const _0x4370b1 = document.getElementById("message-list-weishi");
  _0x8be008.textContent = isEditingWeishi ? "编辑禁言规则" : "添加禁言规则";
  _0x15de93.value = "";
  _0x560f62.checked = false;
  _0x52b80b.checked = false;
  _0x5b4c98.style.display = "none";
  _0x137454.style.display = "none";
  _0x4370b1.innerHTML = "";
  if (isEditingWeishi && guardianRulesWeishi[editIndexWeishi]) {
    const _0x251bda = guardianRulesWeishi[editIndexWeishi];
    _0x15de93.value = _0x251bda.word;
    _0x560f62.checked = _0x251bda.muteEnabled;
    _0x52b80b.checked = _0x251bda.floodEnabled;
    if (_0x251bda.muteEnabled) {
      _0x5b4c98.style.display = "block";
      const _0x4add6d = document.querySelectorAll("input[name=\"mute-type-weishi\"]");
      _0x4add6d.forEach(_0x43c72a => {
        _0x43c72a.value === _0x251bda.muteType && (_0x43c72a.checked = true);
      });
    }
    _0x251bda.floodEnabled && _0x251bda.messages && (_0x137454.style.display = "block", _0x251bda.messages.forEach(_0x1739c1 => {
      addMessageInputWeishi(_0x1739c1);
    }));
  }
  _0x3fb3cf.style.display = "flex";
}
function closeModalWeishi() {
  const _0x3107bf = document.getElementById("modal-backdrop-weishi");
  _0x3107bf.style.display = "none";
  isEditingWeishi = false;
  editIndexWeishi = -1;
}
function addMessageInputWeishi(_0x16b1c4 = "") {
  const _0x478b35 = document.getElementById("message-list-weishi");
  const _0x29a41a = _0x478b35.children.length;
  if (_0x29a41a >= 5) {
    alert("最多只能添加5条消息");
    return;
  }
  const _0xdb874f = document.createElement("div");
  _0xdb874f.style.cssText = "display:flex;gap:8px;align-items:center;margin-bottom:8px;";
  _0xdb874f.innerHTML = "\n        <input type=\"text\" class=\"message-input-weishi\" value=\"" + _0x16b1c4 + "\" placeholder=\"请输入刷屏消息内容（最多50字）\" maxlength=\"50\" style=\"flex:1;padding:6px 10px;border:1px solid #ced4da;border-radius:4px;\">\n        <span class=\"message-count-weishi\" style=\"font-size:11px;color:#6c757d;min-width:40px;\">" + _0x16b1c4.length + "/50</span>\n        <button type=\"button\" class=\"remove-message-btn-weishi\" style=\"background:#dc3545;color:white;border:none;border-radius:3px;padding:4px 8px;cursor:pointer;font-size:11px;\">删除</button>\n    ";
  _0x478b35.appendChild(_0xdb874f);
  const _0x655a90 = _0xdb874f.querySelector(".message-input-weishi");
  _0x655a90.addEventListener("input", function () {
    const _0x13a343 = this.parentNode.querySelector(".message-count-weishi");
    const _0x1d4b06 = this.value.length;
    _0x13a343.textContent = _0x1d4b06 + "/50";
    _0x13a343.style.color = _0x1d4b06 > 45 ? "#dc3545" : "#6c757d";
  });
  const _0x50c312 = _0xdb874f.querySelector(".remove-message-btn-weishi");
  _0x50c312.addEventListener("click", function () {
    _0xdb874f.remove();
  });
}
function saveRuleWeishi() {
  const _0x25c79f = document.getElementById("forbidden-word-input-weishi");
  const _0x1252a1 = document.getElementById("enable-mute-weishi");
  const _0x385d04 = document.getElementById("enable-flood-weishi");
  const _0x280c30 = document.querySelector("input[name=\"mute-type-weishi\"]:checked");
  const _0x129dba = document.querySelectorAll(".message-input-weishi");
  const _0x9955cd = _0x25c79f.value.trim();
  if (!_0x9955cd) {
    alert("请输入违禁词");
    _0x25c79f.focus();
    return;
  }
  if (!_0x1252a1.checked && !_0x385d04.checked) {
    alert("请至少选择一种处理方式（禁言或刷屏）");
    return;
  }
  let _0x3ce8a7 = [];
  if (_0x385d04.checked) {
    _0x3ce8a7 = Array.from(_0x129dba).map(_0x51a897 => _0x51a897.value.trim()).filter(_0x48ae63 => _0x48ae63.length > 0);
    if (_0x3ce8a7.length === 0) {
      alert("请至少添加一条刷屏消息");
      return;
    }
    if (_0x3ce8a7.some(_0x20e29c => _0x20e29c.length > 50)) {
      alert("消息内容不能超过50字");
      return;
    }
  }
  const _0x560d9f = {
    word: _0x9955cd,
    muteEnabled: _0x1252a1.checked,
    floodEnabled: _0x385d04.checked,
    muteType: _0x280c30 ? _0x280c30.value : "confirm",
    messages: _0x3ce8a7
  };
  if (isEditingWeishi) {
    guardianRulesWeishi[editIndexWeishi] = _0x560d9f;
  } else {
    if (guardianRulesWeishi.some(_0x3e7798 => _0x3e7798.word === _0x9955cd)) {
      alert("该违禁词已存在");
      return;
    }
    guardianRulesWeishi.push(_0x560d9f);
  }
  localStorage.setItem("guardianRulesWeishi", JSON.stringify(guardianRulesWeishi));
  closeModalWeishi();
  renderRulesListWeishi();
}
function renderRulesListWeishi() {
  const _0x58ec63 = document.getElementById("rules-list-weishi");
  if (!_0x58ec63) {
    return;
  }
  if (guardianRulesWeishi.length === 0) {
    _0x58ec63.innerHTML = "<div class=\"empty-state-weishi\">暂无禁言规则，点击上方按钮添加</div>";
    return;
  }
  _0x58ec63.innerHTML = guardianRulesWeishi.map((_0x53fb48, _0x41c228) => "\n        <div class=\"rule-item-weishi\" style=\"padding:12px;border-bottom:1px solid #f0f0f0;display:flex;justify-content:space-between;align-items:center;\">\n            <div class=\"rule-info-weishi\" style=\"flex:1;\">\n                <div class=\"rule-word-weishi\" style=\"font-weight:bold;color:#dc3545;background:#fff5f5;padding:2px 6px;border-radius:3px;display:inline-block;margin-bottom:5px;\">" + _0x53fb48.word + "</div>\n                <div class=\"rule-settings-weishi\" style=\"font-size:12px;color:#6c757d;\">\n                    禁言：" + (_0x53fb48.muteEnabled ? "开启" : "关闭") + " | \n                    刷屏：" + (_0x53fb48.floodEnabled ? "开启" : "关闭") + " | \n                    方式：" + (_0x53fb48.muteType === "instant" ? "立刻禁言" : "3秒确认") + " | \n                    消息：" + (_0x53fb48.messages ? _0x53fb48.messages.length : 0) + "条\n                </div>\n            </div>\n            <div class=\"rule-actions-weishi\" style=\"display:flex;gap:5px;\">\n                <button class=\"edit-btn-weishi\" data-index=\"" + _0x41c228 + "\" style=\"padding:4px 8px;background:#ffc107;color:#212529;border:none;border-radius:3px;cursor:pointer;font-size:11px;\">编辑</button>\n                <button class=\"delete-btn-weishi\" data-index=\"" + _0x41c228 + "\" style=\"padding:4px 8px;background:#dc3545;color:white;border:none;border-radius:3px;cursor:pointer;font-size:11px;\">删除</button>\n            </div>\n        </div>\n    ").join("");
  bindRuleActionsWeishi();
}
function bindRuleActionsWeishi() {
  const _0xd24562 = document.getElementById("rules-list-weishi");
  _0xd24562.replaceWith(_0xd24562.cloneNode(true));
  const _0xfc5861 = document.getElementById("rules-list-weishi");
  _0xfc5861.addEventListener("click", function (_0x33f3f2) {
    if (_0x33f3f2.target.classList.contains("edit-btn-weishi")) {
      const _0x1d40ab = parseInt(_0x33f3f2.target.getAttribute("data-index"));
      editRuleWeishi(_0x1d40ab);
      _0x33f3f2.stopPropagation();
    }
  });
  _0xfc5861.addEventListener("click", function (_0x5bceb3) {
    if (_0x5bceb3.target.classList.contains("delete-btn-weishi")) {
      const _0x2bb461 = parseInt(_0x5bceb3.target.getAttribute("data-index"));
      deleteRuleWeishi(_0x2bb461);
      _0x5bceb3.stopPropagation();
      return false;
    }
  });
}
function editRuleWeishi(_0x1eaa99) {
  openModalWeishi(_0x1eaa99);
}
function deleteRuleWeishi(_0x38256e) {
  if (document.querySelector(".delete-confirm-dialog")) {
    return;
  }
  const _0x211544 = document.createElement("div");
  _0x211544.className = "delete-confirm-dialog";
  _0x211544.style.cssText = "\n        position: fixed;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        background: white;\n        padding: 20px;\n        border-radius: 8px;\n        box-shadow: 0 4px 12px rgba(0,0,0,0.2);\n        z-index: 10001;\n        text-align: center;\n        min-width: 250px;\n    ";
  _0x211544.innerHTML = "\n        <div style=\"margin-bottom: 15px; font-weight: bold;\">确定要删除这条禁言规则吗？</div>\n        <div style=\"display: flex; gap: 10px; justify-content: center;\">\n            <button id=\"confirm-delete-weishi\" style=\"padding: 8px 16px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;\">确定</button>\n            <button id=\"cancel-delete-weishi\" style=\"padding: 8px 16px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;\">取消</button>\n        </div>\n    ";
  const _0x4a1964 = document.createElement("div");
  _0x4a1964.style.cssText = "\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: rgba(0,0,0,0.5);\n        z-index: 10000;\n    ";
  document.body.appendChild(_0x4a1964);
  document.body.appendChild(_0x211544);
  document.getElementById("confirm-delete-weishi").addEventListener("click", function () {
    guardianRulesWeishi.splice(_0x38256e, 1);
    localStorage.setItem("guardianRulesWeishi", JSON.stringify(guardianRulesWeishi));
    renderRulesListWeishi();
    document.body.removeChild(_0x211544);
    document.body.removeChild(_0x4a1964);
  });
  document.getElementById("cancel-delete-weishi").addEventListener("click", function () {
    document.body.removeChild(_0x211544);
    document.body.removeChild(_0x4a1964);
  });
  _0x4a1964.addEventListener("click", function () {
    document.body.removeChild(_0x211544);
    document.body.removeChild(_0x4a1964);
  });
}
function checkMessageContentWeishi(_0x29fadd) {
  if (!isGuardianEnabledWeishi || guardianRulesWeishi.length === 0) {
    return;
  }
  _0x29fadd.forEach(_0x196bfa => {
    if (_0x196bfa.nick_name == user) {
      return;
    }
    const _0x178318 = _0x196bfa.content;
    let _0x41c94a = null;
    for (const _0x18b208 of guardianRulesWeishi) {
      if (_0x178318.includes(_0x18b208.word)) {
        _0x41c94a = _0x18b208;
        break;
      }
    }
    _0x41c94a && (_0x41c94a.muteEnabled && (_0x41c94a.muteType === "instant" ? muteUserInstantlyWeishi(_0x196bfa, _0x41c94a.word) : showMuteConfirmationWeishi(_0x196bfa, _0x41c94a)), _0x41c94a.floodEnabled && _0x41c94a.messages.length > 0 && executeFloodMessagesWeishi(_0x41c94a.messages, _0x41c94a.word));
  });
}
function muteUserInstantlyWeishi(_0x5f3e03) {
  const _0x248ad9 = {
    operate_type: 4,
    uid: _0x5f3e03.uid,
    content: _0x5f3e03.content,
    comment_id: _0x5f3e03.comment_id,
    nick_name: _0x5f3e03.nick_name
  };
  console.log("执行禁言操作: " + JSON.stringify(_0x248ad9));
  jinyan(_0x248ad9);
}
function getLogsWeishi() {
  try {
    const _0x486684 = localStorage.getItem(LOGS_STORAGE_KEY_WEISHI);
    return _0x486684 ? JSON.parse(_0x486684) : [];
  } catch (_0x40a203) {
    console.error("读取日志失败:", _0x40a203);
    return [];
  }
}
function saveLogsWeishi(_0x3dee29) {
  try {
    localStorage.setItem(LOGS_STORAGE_KEY_WEISHI, JSON.stringify(_0x3dee29));
  } catch (_0x4a39ad) {
    console.error("保存日志失败:", _0x4a39ad);
  }
}
function addLogWeishi(_0x2c190c) {
  const _0x3bad5d = getLogsWeishi();
  const _0x513efd = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    type: _0x2c190c.type,
    userId: _0x2c190c || "",
    content: _0x2c190c.content || "",
    ruleWord: _0x2c190c.ruleWord || "",
    action: _0x2c190c.action || "",
    ..._0x2c190c
  };
  _0x3bad5d.unshift(_0x513efd);
  const _0x5b1847 = Date.now() - 86400000;
  const _0x1e6654 = _0x3bad5d.filter(_0x535e65 => new Date(_0x535e65.timestamp).getTime() > _0x5b1847);
  const _0x1b8fcd = _0x1e6654.slice(0, 100);
  saveLogsWeishi(_0x1b8fcd);
  renderLogsListWeishi();
  return _0x513efd;
}
function renderLogsListWeishi() {
  const _0x1b2e4a = document.getElementById("logs-list-weishi");
  if (!_0x1b2e4a) {
    return;
  }
  const _0x3e27e1 = getLogsWeishi();
  if (_0x3e27e1.length === 0) {
    _0x1b2e4a.innerHTML = "<div class=\"empty-logs-weishi\">暂无执行记录</div>";
    return;
  }
  _0x1b2e4a.innerHTML = _0x3e27e1.map(_0x20bc32 => {
    const _0x5757ad = new Date(_0x20bc32.timestamp);
    const _0x42931f = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    };
    const _0x469db6 = _0x5757ad.toLocaleTimeString("zh-CN", _0x42931f);
    const _0x55e3a7 = _0x5757ad.toLocaleDateString("zh-CN");
    let _0x4b0919;
    let _0x56c82e;
    let _0x32f1e8;
    let _0x40e754;
    if (_0x20bc32.type === "mute") {
      _0x4b0919 = "🔇";
      _0x56c82e = "log-mute-weishi";
      _0x32f1e8 = "已禁言用户";
      _0x40e754 = "用户名: " + _0x20bc32.userId + " | 违规词: " + _0x20bc32.ruleWord;
    } else {
      _0x20bc32.type === "flood" ? (_0x4b0919 = "💬", _0x56c82e = "log-flood-weishi", _0x32f1e8 = "已发送刷屏消息", _0x40e754 = "消息: " + _0x20bc32.content) : (_0x4b0919 = "⚡", _0x56c82e = "", _0x32f1e8 = _0x20bc32.action || "执行操作", _0x40e754 = _0x20bc32.details || "");
    }
    const _0x298332 = Date.now() - new Date(_0x20bc32.timestamp).getTime() < 300000;
    const _0x338f6c = _0x298332 ? "log-highlight-weishi" : "";
    return "\n            <div class=\"log-item-weishi " + _0x338f6c + "\">\n                <div class=\"log-icon-weishi " + (_0x20bc32.type === "mute" ? "log-icon-mute-weishi" : "log-icon-flood-weishi") + "\">\n                    " + _0x4b0919 + "\n                </div>\n                <div class=\"log-content-weishi\">\n                    <div class=\"log-action-weishi " + _0x56c82e + "\">" + _0x32f1e8 + "</div>\n                    <div class=\"log-details-weishi\">" + _0x40e754 + "</div>\n                </div>\n                <div class=\"log-time-weishi\">\n                    <div>" + _0x469db6 + "</div>\n                    <div>" + _0x55e3a7 + "</div>\n                </div>\n            </div>\n        ";
  }).join("");
}
function clearLogsWeishi() {
  confirm("确定要清空所有执行记录吗？此操作不可撤销。") && (saveLogsWeishi([]), renderLogsListWeishi());
}
function showMuteConfirmationWeishi(_0xb229aa, _0x539f50) {
  if (document.getElementById("mute-confirm-modal-weishi")) {
    return;
  }
  const _0x39326e = "\n    <div id=\"mute-confirm-modal-weishi\" style=\"position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;z-index:10001;\">\n        <div style=\"background:linear-gradient(135deg, #fff 0%, #f8f9fa 100%);border-radius:12px;width:90%;max-width:400px;box-shadow:0 10px 30px rgba(0,0,0,0.2);overflow:hidden;\">\n            <div style=\"background:linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);padding:20px;text-align:center;\">\n                <div style=\"font-size:20px;color:white;font-weight:bold;margin-bottom:5px;\">⚠️ 违规发言检测</div>\n                <div style=\"font-size:14px;color:rgba(255,255,255,0.9);\">检测到违规内容，是否执行禁言？</div>\n            </div>\n            \n            <div style=\"padding:20px;\">\n                <div style=\"margin-bottom:15px;\">\n                    <div style=\"display:flex;align-items:center;margin-bottom:10px;\">\n                        <div style=\"width:40px;height:40px;background:#e3f2fd;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:10px;\">\n                            <span style=\"font-size:18px;\">👤</span>\n                        </div>\n                        <div>\n                            <div style=\"font-weight:bold;color:#333;\">用户 ID: " + _0xb229aa.nick_name + "</div>\n                            <div style=\"font-size:12px;color:#666;\">违规词: " + _0x539f50.word + "</div>\n                        </div>\n                    </div>\n                    \n                    <div style=\"background:#f8f9fa;padding:10px;border-radius:6px;margin:10px 0;\">\n                        <div style=\"font-size:12px;color:#666;margin-bottom:5px;\">发言内容:</div>\n                        <div style=\"color:#333;font-size:13px;line-height:1.4;\">" + _0xb229aa.content + "</div>\n                    </div>\n                </div>\n                \n                <div style=\"text-align:center;margin:20px 0;\">\n                    <div id=\"countdown-timer-weishi\" style=\"font-size:32px;font-weight:bold;color:#ff6b6b;margin-bottom:10px;\">3</div>\n                    <div style=\"font-size:12px;color:#666;\">秒后自动执行禁言</div>\n                </div>\n                \n                <div style=\"display:flex;gap:10px;\">\n                    <button id=\"cancel-mute-weishi\" style=\"flex:1;padding:12px;background:#6c757d;color:white;border:none;border-radius:6px;cursor:pointer;font-size:14px;font-weight:bold;transition:all 0.3s;\">\n                        取消禁言\n                    </button>\n                    <button id=\"confirm-mute-now-weishi\" style=\"flex:1;padding:12px;background:linear-gradient(135deg, #4CAF50 0%, #45a049 100%);color:white;border:none;border-radius:6px;cursor:pointer;font-size:14px;font-weight:bold;transition:all 0.3s;\">\n                        立即禁言\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n    ";
  document.body.insertAdjacentHTML("beforeend", _0x39326e);
  const _0x3ce033 = document.getElementById("mute-confirm-modal-weishi");
  const _0x57e3a7 = document.getElementById("countdown-timer-weishi");
  const _0x4b4ded = document.getElementById("cancel-mute-weishi");
  const _0x479cd6 = document.getElementById("confirm-mute-now-weishi");
  let _0x5365c5 = 3;
  let _0x2697d6;
  function _0x36433d() {
    _0x2697d6 = setInterval(() => {
      _0x5365c5--;
      _0x57e3a7.textContent = _0x5365c5;
      _0x57e3a7.style.transform = "scale(1.1)";
      setTimeout(() => {
        _0x57e3a7.style.transform = "scale(1)";
      }, 100);
      _0x5365c5 <= 0 && (clearInterval(_0x2697d6), _0x54b350());
    }, 1000);
  }
  function _0x54b350() {
    muteUserInstantlyWeishi(_0xb229aa, _0x539f50.word);
    _0x1dc6e9();
  }
  function _0x1dc6e9() {
    _0x2697d6 && clearInterval(_0x2697d6);
    _0x3ce033 && _0x3ce033.remove();
  }
  _0x4b4ded.addEventListener("click", function () {
    _0x1dc6e9();
    console.log("用户取消禁言操作");
  });
  _0x479cd6.addEventListener("click", function () {
    clearInterval(_0x2697d6);
    _0x54b350();
  });
  _0x4b4ded.addEventListener("mouseenter", function () {
    this.style.background = "#5a6268";
    this.style.transform = "translateY(-2px)";
  });
  _0x4b4ded.addEventListener("mouseleave", function () {
    this.style.background = "#6c757d";
    this.style.transform = "translateY(0)";
  });
  _0x479cd6.addEventListener("mouseenter", function () {
    this.style.background = "linear-gradient(135deg, #45a049 0%, #3d8b40 100%)";
    this.style.transform = "translateY(-2px)";
  });
  _0x479cd6.addEventListener("mouseleave", function () {
    this.style.background = "linear-gradient(135deg, #4CAF50 0%, #45a049 100%)";
    this.style.transform = "translateY(0)";
  });
  _0x3ce033.addEventListener("click", function (_0x173e34) {
    _0x173e34.target === _0x3ce033 && _0x1dc6e9();
  });
  _0x36433d();
}
function muteUserInstantlyWeishi(_0x32a40d, _0x43d5ec = "") {
  const _0x52700d = {
    type: "mute",
    userId: _0x32a40d.nick_name,
    ruleWord: _0x43d5ec,
    action: "用户禁言"
  };
  addLogWeishi(_0x52700d);
  const _0x31bd3c = {
    operate_type: 4,
    uid: _0x32a40d.uid,
    content: _0x32a40d.content,
    comment_id: _0x32a40d.comment_id,
    nick_name: _0x32a40d.nick_name
  };
  console.log("执行禁言操作: " + JSON.stringify(_0x31bd3c));
  jinyan(_0x31bd3c);
}
function showMuteSuccessNotificationWeishi(_0x20be61) {
  const _0x231895 = document.createElement("div");
  _0x231895.innerHTML = "\n        <div style=\"position:fixed;top:20px;right:20px;background:linear-gradient(135deg, #4CAF50 0%, #45a049 100%);color:white;padding:12px 20px;border-radius:6px;box-shadow:0 4px 12px rgba(0,0,0,0.15);z-index:10002;display:flex;align-items:center;\">\n            <span style=\"margin-right:10px;font-size:18px;\">✅</span>\n            <div>\n                <div style=\"font-weight:bold;\">禁言成功</div>\n                <div style=\"font-size:12px;opacity:0.9;\">用户 " + _0x20be61 + " 已被禁言</div>\n            </div>\n        </div>\n    ";
  document.body.appendChild(_0x231895);
  setTimeout(() => {
    _0x231895.style.opacity = "0";
    _0x231895.style.transform = "translateX(100%)";
    _0x231895.style.transition = "all 0.5s ease";
    setTimeout(() => {
      _0x231895.parentNode && _0x231895.parentNode.removeChild(_0x231895);
    }, 500);
  }, 3000);
}
function executeFloodMessagesWeishi(_0x4aabe7, _0x5c80bb = "") {
  _0x4aabe7.forEach((_0x5baac8, _0x2a17b2) => {
    setTimeout(() => {
      addLogWeishi({
        type: "flood",
        content: _0x5baac8,
        ruleWord: _0x5c80bb,
        action: "发送刷屏消息"
      });
      console.log("发送刷屏消息: " + _0x5baac8);
      fason(_0x5baac8, false);
    }, _0x2a17b2 * 800);
  });
}
setTimeout(() => {
  initGuardianWeishi();
  !window.hasNewFeatureHintnew("zhuanhuan") && window.addNewFeatureHintnew("zhuanhuan", {
    featureNamenew: "转换",
    positionnew: "top-left",
    stylenew: "pulse"
  });
  !window.hasNewFeatureHintnew("start-copy-btn8") && window.addNewFeatureHintnew("start-copy-btn8", {
    featureNamenew: "开始复制",
    positionnew: "top-right",
    stylenew: "pulse"
  });
  !window.hasNewFeatureHintnew("batch-copy-btn8") && window.addNewFeatureHintnew("batch-copy-btn8", {
    featureNamenew: "批量复制",
    positionnew: "top-right",
    stylenew: "pulse"
  });
  if (!window.hasNewFeatureHintnew("fudai-nav")) {
    const _0x87e6fc = {
      featureNamenew: "自动发福袋",
      positionnew: "top-right",
      stylenew: "pulse"
    };
    window.addNewFeatureHintnew("fudai-nav", _0x87e6fc);
  }
}, 1000);
async function jinyan(_0x3a8944) {
  let _0x191455 = "https://buyin.jinritemai.com/api/anchor/comment/operate_v2";
  requestUrl == "https://fxg.jinritemai.com/api/anchor/livepc/setcurrent" && (_0x191455 = "https://fxg.jinritemai.com/api/anchor/comment/operate_v2");
  const _0x4b19b8 = await fetch(_0x191455, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(_0x3a8944)
  });
  const _0x4f998d = await _0x4b19b8.json();
  console.log(_0x4f998d);
  _0x4f998d.code == 0 ? showMuteSuccessNotificationWeishi(_0x3a8944.nick_name) : createZtCard(sb, "禁言失败", _0x4f998d.msg, "rgba(250, 78, 78, 1)");
}
function clickRefreshButton() {
  const _0x1299b2 = document.querySelector(".actions-waJasF .actionItem-Mrn7Di");
  if (_0x1299b2) {
    const _0x1924f7 = {
      view: win,
      bubbles: true,
      cancelable: true
    };
    const _0x5ceddc = new MouseEvent("click", _0x1924f7);
    _0x1299b2.dispatchEvent(_0x5ceddc);
    console.log("成功模拟点击刷新按钮");
    return true;
  } else {
    console.log("未找到目标按钮");
    return false;
  }
}
function clickRefreshButtoncs(_0x549a56, _0x5ba9fb) {
  const _0x40a574 = document.querySelector(".actions-waJasF .actionItem-Mrn7Di");
  if (_0x40a574) {
    const _0x319276 = {
      view: win,
      bubbles: true,
      cancelable: true
    };
    const _0x297de9 = new MouseEvent("click", _0x319276);
    _0x40a574.dispatchEvent(_0x297de9);
    console.log("成功模拟点击刷新按钮");
    createZtCard(cg, "自动刷新成功", "已重新置顶", "#f12e2eff");
    setTimeout(() => {
      zhidingbjj(_0x549a56, _0x5ba9fb);
    }, 1000);
    return true;
  } else {
    console.log("未找到目标按钮");
    createZtCard(sb, "自动刷新失败", "请上拉点击刷新列表后再次重新点击要置顶的商品", "#f12e2eff");
    return false;
  }
}
function zhidingbjj(_0x5e341f, _0xe00ee2) {
  const _0x6dfe94 = {
    promotion_id: draggableId
  };
  const _0x368df6 = {
    promotions: [_0x6dfe94, ...window.splistid.filter(_0x1346c4 => _0x1346c4.promotion_id !== _0x5e341f).map(_0x47bab2 => ({
      promotion_id: _0x47bab2.promotion_id
    }))]
  };
  zhidingbingjiangjie(_0x368df6, _0x5e341f, _0xe00ee2);
}
function generateClientId() {
  let _0x4188d1 = localStorage.getItem("auth_client_id");
  if (!_0x4188d1) {
    const _0x491006 = navigator.userAgent + "|" + navigator.language + "|" + (navigator.hardwareConcurrency || "unknown") + "|" + screen.width + "x" + screen.height;
    _0x4188d1 = "tm_" + Date.now().toString(36) + "_" + simpleHash(_0x491006);
    localStorage.setItem("auth_client_id", _0x4188d1);
    console.log("生成新的Client ID:", _0x4188d1);
  }
  return _0x4188d1;
}
function simpleHash(_0x3c4895) {
  let _0x8ea53d = 0;
  for (let _0x4eada8 = 0; _0x4eada8 < _0x3c4895.length; _0x4eada8++) {
    const _0x2b56d8 = _0x3c4895.charCodeAt(_0x4eada8);
    _0x8ea53d = (_0x8ea53d << 5) - _0x8ea53d + _0x2b56d8;
    _0x8ea53d = _0x8ea53d & _0x8ea53d;
  }
  return Math.abs(_0x8ea53d).toString(36);
}
function checkAutoLogin() {
  const _0x1bec44 = localStorage.getItem("auth_token");
  const _0x34b4c4 = localStorage.getItem("user_info");
  if (_0x1bec44 && _0x34b4c4) {
    console.log("检测到已保存的登录信息，尝试自动登录");
    return true;
  }
  return false;
}
function autoLogin() {
  const _0xd5904 = localStorage.getItem("auth_token");
  const _0xb9a941 = localStorage.getItem("user_info");
  if (!_0xd5904 || !_0xb9a941) {
    console.log("没有找到登录信息，无法自动登录");
    createZtCard(sb, "没有找到登录信息，无法自动登录", "请重新登陆灵活账号", "red");
    createAuthInterface();
    return false;
  }
  const _0x3348d1 = isAutoLoginRunning();
  console.log("尝试自动登录，Token:", _0xd5904.substring(0, 10) + "...");
  !_0x3348d1 && window.openLoading("登陆中...长时间未关闭此弹窗说明服务器错误请稍后重试 <br>影响使用浏览器右上角碎片可关闭，关闭后刷新<br>长时间未修复请加群1067390852提醒修复");
  chaxun && window.openLoading("查询状态中...");
  const _0x24759c = {
    token: _0xd5904
  };
  GM_xmlhttpRequest({
    method: "POST",
    url: API_BASE + "/verify_token.php",
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(_0x24759c),
    onload: function (_0x2da86e) {
      console.log("自动登录响应:", _0x2da86e.responseText);
      window.closeLoading();
      try {
        const _0xccf863 = JSON.parse(_0x2da86e.responseText);
        if (_0xccf863.success) {
          qudenglu = false;
          chaxun && (_0xccf863.user.vip ? createZtCard(cg, "查询成功", "当前账号为灵活账号 到期时间：<br>" + _0xccf863.user.vipdate, "#76fa4eff") : createZtCard(sb, "查询成功", "当前账号为灵活账号 到期时间：<br>" + _0xccf863.user.vipdate, "red"));
          window.userdata = _0xccf863;
          updateVipStatusLogin(_0xccf863.user);
          const _0x59ea62 = document.getElementById("qiehuanlogin");
          const _0x9d238d = document.getElementById("zhuanhuan");
          const _0x396bc2 = document.getElementById("refresh-btn");
          _0x396bc2.textContent = "切换临时账号";
          _0x9d238d.style.display = "";
          _0x59ea62.textContent = "退出登录";
          !_0x3348d1 && (console.log("第一次"), window.location.href.includes("live/control") && (startAutoLogin(), _0xccf863.user.vip ? createZtCard(cg, "自动登录成功", "当前账号为灵活账号 到期时间：<br>" + _0xccf863.user.vipdate, "#76fa4eff") : (createZtCard(sb, "自动登录成功", "当前账号为灵活账号 已过期 到期时间：<br>" + _0xccf863.user.vipdate, "red"), showRechargeDialog(), chaxun = true)));
        } else {
          console.log("自动登录失败:", _0xccf863.message);
          chaxun = false;
          vipuser = false;
          createZtCard(sb, "当前登录状态已失效", _0xccf863.message + "用户已退出所有功能不可用，除非重新登陆，需要登陆临时账号请刷新网页", "red");
          localStorage.removeItem("auth_token");
          localStorage.removeItem("user_info");
          let _0x514989 = document.getElementById("vip-status");
          let _0x3d4b97 = document.getElementById("expire-date");
          _0x3d4b97.innerHTML = "未登录";
          _0x514989.innerHTML = "所有功能不可用";
          const _0xd84933 = document.getElementById("qiehuanlogin");
          _0xd84933.textContent = "登录灵活账号";
          createAuthInterface();
          qudenglu = true;
          stopAutoLogin();
        }
      } catch (_0x1162c9) {
        if (!_0x3348d1) {
          console.error("自动登录响应解析失败:", _0x1162c9);
          chaxun = false;
          const _0x5d86e3 = document.getElementById("qiehuanlogin");
          _0x5d86e3.textContent = "登录灵活账号";
          createAuthInterface();
          qudenglu = true;
        }
      }
    },
    onerror: function (_0x427fbf) {
      if (!_0x3348d1) {
        chaxun = false;
        console.error("自动登录请求失败:", _0x427fbf);
        const _0x364f7 = document.getElementById("qiehuanlogin");
        _0x364f7.textContent = "登录灵活账号";
        createAuthInterface();
        qudenglu = true;
      }
    }
  });
  return true;
}
function updateUIAfterLogin(_0x200f2d) {
  createUserStatusButton(_0x200f2d);
}
function createUserStatusButton(_0x3a26f4) {
  const _0x3144cb = document.querySelector(".user-status-login");
  _0x3144cb && _0x3144cb.remove();
  const _0x50bffd = document.createElement("div");
  _0x50bffd.className = "user-status-login";
  _0x50bffd.innerHTML = "\n            <div class=\"user-avatar-login\">" + _0x3a26f4.username.charAt(0).toUpperCase() + "</div>\n            <span class=\"user-name-login\">" + _0x3a26f4.username + "</span>\n            " + (_0x3a26f4.vip ? "<span class=\"vip-badge-login\">VIP</span>" : "") + "\n            <div class=\"user-menu-login\" id=\"user-menu-login\">\n                <div class=\"user-menu-item-login\" data-action=\"user-info\">用户信息</div>\n                <div class=\"user-menu-item-login\" data-action=\"logout\">退出登录</div>\n            </div>\n        ";
  const _0x4229fe = document.createElement("style");
  _0x4229fe.textContent = "\n            .user-status-login {\n                position: fixed;\n                top: 10px;\n                right: 10px;\n                z-index: 9999;\n                background: #28a745;\n                color: white;\n                padding: 10px 15px;\n                border-radius: 5px;\n                cursor: pointer;\n                font-size: 14px;\n                box-shadow: 0 2px 5px rgba(0,0,0,0.2);\n                display: flex;\n                align-items: center;\n                gap: 8px;\n            }\n            .user-status-login:hover {\n                background: #218838;\n            }\n            .user-avatar-login {\n                width: 24px;\n                height: 24px;\n                border-radius: 50%;\n                background: rgba(255,255,255,0.2);\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                font-weight: bold;\n            }\n            .user-menu-login {\n                display: none;\n                position: absolute;\n                top: 100%;\n                right: 0;\n                background: white;\n                border: 1px solid #ddd;\n                border-radius: 4px;\n                box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n                min-width: 150px;\n                z-index: 10000;\n                margin-top: 5px;\n            }\n            .user-menu-login.show {\n                display: block;\n            }\n            .user-menu-item-login {\n                padding: 10px 15px;\n                cursor: pointer;\n                color: #333;\n                border-bottom: 1px solid #f0f0f0;\n                font-size: 14px;\n            }\n            .user-menu-item-login:hover {\n                background: #f5f5f5;\n            }\n            .user-menu-item-login:last-child {\n                border-bottom: none;\n            }\n            .vip-badge-login {\n                background: #ffc107;\n                color: #856404;\n                padding: 2px 6px;\n                border-radius: 3px;\n                font-size: 10px;\n                margin-left: 5px;\n            }\n            .password-match-login {\n                font-size: 12px;\n                margin-top: 5px;\n                display: none;\n            }\n            .password-match-login.valid {\n                color: #28a745;\n                display: block;\n            }\n            .password-match-login.invalid {\n                color: #dc3545;\n                display: block;\n            }\n            .captcha-required-login {\n                color: #dc3545;\n                font-size: 12px;\n                margin-top: 5px;\n                display: none;\n            }\n            .captcha-required-login.show {\n                display: block;\n            }\n        ";
  document.head.appendChild(_0x4229fe);
  _0x50bffd.addEventListener("click", function (_0x88425e) {
    _0x88425e.stopPropagation();
    const _0x57145e = document.getElementById("user-menu-login");
    _0x57145e.classList.toggle("show");
  });
  document.addEventListener("click", function () {
    const _0x3b11ad = document.getElementById("user-menu-login");
    _0x3b11ad && _0x3b11ad.classList.remove("show");
  });
  _0x50bffd.addEventListener("click", function (_0x50838d) {
    if (_0x50838d.target.classList.contains("user-menu-item-login")) {
      const _0x573ed0 = _0x50838d.target.getAttribute("data-action");
      if (_0x573ed0 === "user-info") {
        showUserInfoLogin(_0x3a26f4);
      } else {
        _0x573ed0 === "logout" && logoutLogin(_0x3a26f4);
      }
      const _0xb6cf8e = document.getElementById("user-menu-login");
      _0xb6cf8e.classList.remove("show");
    }
  });
  document.body.appendChild(_0x50bffd);
}
function showUserInfoLogin(_0x47ab0e) {
  const _0x21059b = _0x47ab0e.vip ? "是 (到期: " + (_0x47ab0e.vipdate || "未知") + ")" : "否";
  alert("用户信息:\n\n用户名: " + _0x47ab0e.username + "\n邮箱: " + _0x47ab0e.email + "\nVIP状态: " + _0x21059b);
}
function logoutLogin(_0x150949) {
  if (confirm("确定要退出登录吗？\n当前用户: " + _0x150949.username)) {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_info");
    localStorage.removeItem("session_info");
    const _0x2d952c = localStorage.getItem("auth_token");
    if (_0x2d952c) {
      const _0xa7a028 = {
        token: _0x2d952c
      };
      GM_xmlhttpRequest({
        method: "POST",
        url: API_BASE + "/logout.php",
        headers: {
          "Content-Type": "application/json"
        },
        data: JSON.stringify(_0xa7a028),
        onload: function (_0x1fd6f6) {
          console.log("退出登录服务器响应:", _0x1fd6f6.responseText);
        },
        onerror: function (_0x5c38a8) {
          console.error("退出登录服务器请求失败:", _0x5c38a8);
        }
      });
    }
    const _0x233b65 = document.querySelector(".user-status-login");
    _0x233b65 && _0x233b65.remove();
    let _0xf5137a = document.getElementById("vip-status");
    let _0x385fb2 = document.getElementById("expire-date");
    _0x385fb2.innerHTML = "未登录";
    _0xf5137a.innerHTML = "所有功能不可用";
    vipuser = false;
    console.log("用户已退出登录");
    createZtCard(cg, "用户已退出登录", "所有功能不可用，除非重新登陆，需要登陆临时账号请刷新网页", "#76fa4eff");
    const _0x421f88 = document.getElementById("qiehuanlogin");
    _0x421f88.textContent = "登录灵活账号";
    const _0x4f9813 = document.getElementById("zhuanhuan");
    _0x4f9813.style.display = "none";
    createAuthInterface();
    qudenglu = true;
    stopAutoLogin();
  }
}
function createAuthInterface() {
  qudenglu = true;
  const _0x157195 = document.getElementById("qiehuanlogin");
  console.log(_0x157195.textContent);
  if (_0x157195.textContent == "退出登录") {
    console.log(_0x157195.textContent);
    logoutLogin(window.userdata.user);
    return;
  }
  const _0x429870 = document.querySelector(".auth-container-login");
  _0x429870 && _0x429870.remove();
  const _0x4f7799 = "\n     .register-code-container {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        margin-bottom: 15px;\n    }\n    \n    .register-code-input {\n        flex: 1;\n    }\n    \n    .send-code-btn {\n        width: auto !important;\n        min-width: 120px;\n    }\n    \n    .code-timer {\n        font-size: 12px;\n        color: #666;\n        margin-top: 5px;\n        display: none;\n    }\n    \n    .code-timer.show {\n        display: block;\n    }\n    \n    .email-verification-status {\n        font-size: 12px;\n        margin-top: 5px;\n        display: none;\n    }\n    \n    .email-verification-status.verified {\n        color: #28a745;\n        display: block;\n    }\n    \n    .email-verification-status.pending {\n        color: #ffc107;\n        display: block;\n    }\n    \n    .email-verification-status.error {\n        color: #dc3545;\n        display: block;\n    }\n            .auth-container-login {\n                position: fixed;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n                background: white;\n                border: 2px solid #007cba;\n                border-radius: 10px;\n                padding: 20px;\n                z-index: 10000;\n                box-shadow: 0 4px 20px rgba(0,0,0,0.3);\n                min-width: 550px;\n                font-family: Arial, sans-serif;\n                max-width: 90vw;\n                max-height: 90vh;\n                overflow: auto;\n            }\n            .auth-tabs-login {\n                display: flex;\n                margin-bottom: 15px;\n                border-bottom: 1px solid #ddd;\n            }\n            .auth-tab-login {\n                padding: 10px 20px;\n                cursor: pointer;\n                border: none;\n                background: none;\n                flex: 1;\n                font-size: 14px;\n                transition: all 0.3s;\n            }\n            .auth-tab-login.active {\n                border-bottom: 2px solid #007cba;\n                color: #007cba;\n                font-weight: bold;\n            }\n            .auth-form-login {\n                display: none;\n            }\n            .auth-form-login.active {\n                display: block;\n            }\n            .form-group-login {\n                margin-bottom: 15px;\n            }\n            .form-group-login label {\n                display: block;\n                margin-bottom: 5px;\n                font-weight: bold;\n                color: #333;\n            }\n            .form-group-login input {\n                width: 100%;\n                padding: 8px;\n                border: 1px solid #ddd;\n                border-radius: 4px;\n                box-sizing: border-box;\n                font-size: 14px;\n            }\n            .captcha-container-login {\n                display: flex;\n                align-items: center;\n                gap: 10px;\n                margin-top: 5px;\n            }\n            .captcha-image-login {\n                border: 1px solid #ddd;\n                cursor: pointer;\n                border-radius: 4px;\n                height: 40px;\n                min-width: 120px;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                background: #f9f9f9;\n            }\n            .auth-button-login {\n                width: 100%;\n                padding: 10px;\n                background: #007cba;\n                color: white;\n                border: none;\n                border-radius: 4px;\n                cursor: pointer;\n                font-size: 14px;\n                margin-top: 10px;\n            }\n            .auth-button-login:disabled {\n                background: #ccc;\n                cursor: not-allowed;\n            }\n            .close-btn-login {\n                position: absolute;\n                top: 10px;\n                right: 10px;\n                background: none;\n                border: none;\n                font-size: 18px;\n                cursor: pointer;\n            }\n            .remember-me-login {\n                display: flex;\n                align-items: center;\n                margin: 10px 0;\n                font-size: 14px;\n            }\n            .remember-me-login input {\n                width: auto;\n                margin-right: 8px;\n            }\n            .auto-login-login {\n                display: flex;\n                align-items: center;\n                margin: 5px 0 10px 0;\n                font-size: 14px;\n            }\n            .auto-login-login input {\n                width: auto;\n                margin-right: 8px;\n            }\n            .vip-status-login {\n                display: flex;\n                align-items: center;\n                margin: 10px 0;\n                padding: 8px;\n                border-radius: 4px;\n                font-size: 14px;\n            }\n            .vip-active-login {\n                background: #d4edda;\n                color: #155724;\n                border: 1px solid #c3e6cb;\n            }\n            .vip-inactive-login {\n                background: #f8d7da;\n                color: #721c24;\n                border: 1px solid #f5c6cb;\n            }\n            .vip-icon-login {\n                margin-right: 8px;\n                font-weight: bold;\n            }\n            .session-info-login {\n                background: #e7f3ff;\n                color: #004085;\n                border: 1px solid #b8daff;\n                padding: 8px;\n                border-radius: 4px;\n                margin: 10px 0;\n                font-size: 12px;\n            }\n            .forgot-password-link {\n                text-align: center;\n                margin-top: 10px;\n                font-size: 14px;\n            }\n            .forgot-password-link a {\n                color: #007cba;\n                text-decoration: none;\n                cursor: pointer;\n            }\n            .forgot-password-link a:hover {\n                text-decoration: underline;\n            }\n            .countdown-timer {\n                color: #666;\n                font-size: 12px;\n                margin-left: 10px;\n            }\n            .resend-link {\n                color: #007cba;\n                cursor: pointer;\n                text-decoration: underline;\n            }\n            .resend-link.disabled {\n                color: #999;\n                cursor: not-allowed;\n                text-decoration: none;\n            }\n            .password-match-login {\n                font-size: 12px;\n                margin-top: 5px;\n                display: none;\n            }\n            .password-match-login.valid {\n                color: #28a745;\n                display: block;\n            }\n            .password-match-login.invalid {\n                color: #dc3545;\n                display: block;\n            }\n            .captcha-required-login {\n                color: #dc3545;\n                font-size: 12px;\n                margin-top: 5px;\n                display: none;\n            }\n            .captcha-required-login.show {\n                display: block;\n            }\n        ";
  const _0x76a3d9 = document.createElement("style");
  _0x76a3d9.textContent = _0x4f7799;
  document.head.appendChild(_0x76a3d9);
  const _0x41253b = document.createElement("div");
  _0x41253b.className = "auth-container-login";
  _0x41253b.innerHTML = "\n            <button class=\"close-btn-login\" title=\"关闭\">×</button>\n            <h3 style=\"text-align: center; color: #007cba; margin-top: 0;\">插件登录 每日4:16-4:17重启维护</h3>\n\n            <div class=\"auth-tabs-login\">\n                <button class=\"auth-tab-login active\" data-tab=\"login\">登录</button>\n                <button class=\"auth-tab-login\" data-tab=\"register\">注册</button>\n                <button class=\"auth-tab-login\" data-tab=\"forgot\">忘记密码</button>\n            </div>\n\n            <div id=\"login-form-login\" class=\"auth-form-login active\">\n            <span stye=\"color:red\";>默认情况下一个账号只能登陆一台设备 随意充值一个套餐升级两个设备</span><br>\n            <div id=\"login-message-login\" style=\"margin-top: 10px; padding: 8px; border-radius: 4px; display: none;\"></div>\n                <div class=\"form-group-login\">\n                    <label>用户名:</label>\n                    <input type=\"text\" id=\"login-username-login\" placeholder=\"请输入用户名\">\n                </div>\n                <div class=\"form-group-login\">\n                    <label>密码:</label>\n                    <input type=\"password\" id=\"login-password-login\" placeholder=\"请输入密码\">\n                </div>\n                <div class=\"form-group-login\">\n                    <label>验证码:</label>\n                    <div class=\"captcha-container-login\">\n                        <div id=\"login-captcha-img-login\" class=\"captcha-image-login\" title=\"点击刷新验证码\">点击加载</div>\n                        <input type=\"text\" id=\"login-captcha-login\" placeholder=\"请输入验证码\" maxlength=\"6\">\n                    </div>\n                </div>\n                <div class=\"remember-me-login\">\n                    <input type=\"checkbox\" id=\"remember-password-login\">\n                    <label for=\"remember-password-login\">记住密码</label>\n                </div>\n                <div class=\"auto-login-login\">\n                    <input type=\"checkbox\" id=\"auto-login-login\" checked>\n                    <label for=\"auto-login-login\">自动登录</label>\n                </div>\n                <div class=\"forgot-password-link\">\n                    <a href=\"#\" id=\"forgot-password-link-login\">忘记密码？</a>\n                </div>\n                <div id=\"session-info-login\" class=\"session-info-login\" style=\"display: none;\">\n                    <div>当前设备: <span id=\"current-device-id-login\"></span></div>\n                    <div>会话限制: <span id=\"session-limit-login\"></span> 个设备</div>\n                    <div>活跃会话: <span id=\"active-sessions-login\"></span> 个</div>\n                </div>\n                <div id=\"vip-status-container-login\" class=\"vip-status-login\" style=\"display: none;\">\n                    <span class=\"vip-icon-login\">VIP</span>\n                    <span id=\"vip-status-text-login\">状态加载中...</span>\n                </div>\n                <button class=\"auth-button-login\" id=\"login-btn-login\">登录</button>\n                \n            </div>\n\n<div id=\"register-form-login\" class=\"auth-form-login\">\n<div id=\"register-message-login\" style=\"margin-top: 10px; padding: 8px; border-radius: 4px; display: none;\"></div>\n    <div class=\"form-group-login\">\n        <label>用户名:</label>\n        <input type=\"text\" id=\"register-username-login\" placeholder=\"请输入用户名\">\n    </div>\n    <div class=\"form-group-login\">\n        <label>邮箱:</label>\n        <input type=\"email\" id=\"register-email-login\" placeholder=\"请输入邮箱\">\n    </div>\n    <div class=\"form-group-login\">\n        <label>邮箱验证码:</label>\n        <div class=\"captcha-container-login\">\n            <button class=\"auth-button-login\" id=\"send-register-code-btn-login\" style=\"width: auto; margin-right: 10px;\">发送验证码</button>\n            <input type=\"text\" id=\"register-email-code-login\" placeholder=\"请输入6位验证码\" maxlength=\"6\" disabled>\n        </div>\n        <div id=\"register-code-timer-login\" style=\"font-size: 12px; color: #666; margin-top: 5px; display: none;\">\n            验证码已发送，<span id=\"register-countdown-login\">180</span>秒后可重新发送\n        </div>\n    </div>\n    <div class=\"form-group-login\">\n        <label>密码:</label>\n        <input type=\"password\" id=\"register-password-login\" placeholder=\"请输入密码（至少6位）\">\n    </div>\n    <div class=\"form-group-login\">\n        <label>确认密码:</label>\n        <input type=\"password\" id=\"register-confirm-password-login\" placeholder=\"请再次输入密码\">\n        <div id=\"register-password-match-login\" class=\"password-match-login\"></div>\n    </div>\n    <div class=\"form-group-login\">\n        <label>图片验证码:</label>\n        <div class=\"captcha-container-login\">\n            <div id=\"register-captcha-img-login\" class=\"captcha-image-login\" title=\"点击刷新验证码\">点击加载</div>\n            <input type=\"text\" id=\"register-captcha-login\" placeholder=\"请输入验证码\" maxlength=\"6\">\n        </div>\n    </div>\n    <button class=\"auth-button-login\" id=\"register-btn-login\">注册</button>\n    \n</div>\n\n            <div id=\"forgot-form-login\" class=\"auth-form-login\">\n            <div id=\"forgot-message-login\" style=\"margin-top: 10px; padding: 8px; border-radius: 4px; display: none;\"></div>\n                <div class=\"form-group-login\">\n                    <label>邮箱:</label>\n                    <input type=\"email\" id=\"forgot-email-login\" placeholder=\"请输入注册时使用的邮箱\">\n                </div>\n                <div class=\"form-group-login\">\n                    <label>图片验证码:</label>\n                    <div class=\"captcha-container-login\">\n                        <div id=\"forgot-captcha-img-login\" class=\"captcha-image-login\" title=\"点击刷新验证码\">点击加载</div>\n                        <input type=\"text\" id=\"forgot-captcha-login\" placeholder=\"请输入图片验证码\" maxlength=\"6\">\n                    </div>\n                    <div id=\"forgot-captcha-required-login\" class=\"captcha-required-login\">请先输入图片验证码</div>\n                </div>\n                <div class=\"form-group-login\">\n                    <label>邮箱验证码:</label>\n                    <div class=\"captcha-container-login\">\n                        <button class=\"auth-button-login\" id=\"send-code-btn-login\" style=\"width: auto; margin-right: 10px;\">发送验证码</button>\n                        <input type=\"text\" id=\"forgot-code-login\" placeholder=\"请输入6位验证码\" maxlength=\"6\" disabled>\n                    </div>\n                    <div id=\"code-timer-login\" style=\"font-size: 12px; color: #666; margin-top: 5px; display: none;\">\n                        验证码已发送，<span id=\"countdown-login\">60</span>秒后可重新发送\n                    </div>\n                </div>\n                <div class=\"form-group-login\">\n                    <label>新密码:</label>\n                    <input type=\"password\" id=\"forgot-password-login\" placeholder=\"请输入新密码（至少6位）\">\n                </div>\n                <div class=\"form-group-login\">\n                    <label>确认新密码:</label>\n                    <input type=\"password\" id=\"forgot-confirm-password-login\" placeholder=\"请再次输入新密码\">\n                    <div id=\"forgot-password-match-login\" class=\"password-match-login\"></div>\n                </div>\n                <button class=\"auth-button-login\" id=\"reset-password-btn-login\">重置密码</button>\n                \n            </div>\n\n            <div style=\"margin-top: 15px; text-align: center; font-size: 12px; color: #666;\">\n                Client ID: <span id=\"current-client-id-login\">加载中...</span>\n                <br>\n                <button onclick=\"resetClientIdLogin()\" style=\"background: none; border: none; color: #007cba; cursor: pointer; text-decoration: underline;display: none;\">重置Client ID</button>\n            </div>\n        ";
  document.body.appendChild(_0x41253b);
  window.resetClientIdLogin = function () {
    localStorage.removeItem("auth_client_id");
    const _0x374070 = generateClientId();
    document.getElementById("current-client-id-login").textContent = _0x374070;
    refreshCaptchaLogin("login");
    showMessageLogin("login", "Client ID 已重置", "success");
  };
  document.getElementById("current-client-id-login").textContent = generateClientId();
  setTimeout(() => {
    restoreSavedUserInfo();
  }, 100);
  bindEventsLogin(_0x41253b);
  refreshCaptchaLogin("login");
  return _0x41253b;
}
function restoreSavedUserInfo() {
  try {
    console.log("[初始化] 开始恢复保存的用户信息");
    const _0x3e8d85 = JSON.parse(localStorage.getItem("saved_users_login") || "[]");
    console.log("[初始化] 找到 " + _0x3e8d85.length + " 个保存的用户");
    if (_0x3e8d85.length > 0) {
      const _0xd6a7bb = _0x3e8d85.sort((_0x46af21, _0x129327) => new Date(_0x129327.savedAt) - new Date(_0x46af21.savedAt))[0];
      console.log("[初始化] 使用最新用户: " + _0xd6a7bb.username);
      const _0x43aa18 = document.getElementById("login-username-login");
      const _0x1d3bb8 = document.getElementById("login-password-login");
      const _0x45d8b4 = document.getElementById("remember-password-login");
      _0x43aa18 && (_0x43aa18.value = _0xd6a7bb.username, console.log("[初始化] 已填充用户名: " + _0xd6a7bb.username));
      _0x1d3bb8 && (_0x1d3bb8.value = _0xd6a7bb.password, console.log("[初始化] 已填充密码"));
      _0x45d8b4 && (_0x45d8b4.checked = true, console.log("[初始化] 已勾选记住密码"));
      console.log("[初始化] 用户信息恢复完成");
    } else {
      console.log("[初始化] 没有找到保存的用户信息");
    }
  } catch (_0x150c44) {
    console.error("[初始化] 恢复用户信息失败:", _0x150c44);
  }
}
function bindEventsLogin(_0x4268ed) {
  _0x4268ed.querySelector(".close-btn-login").addEventListener("click", function () {
    qudenglu && (quanx(), qudenglu = false);
    _0x4268ed.remove();
  });
  _0x4268ed.querySelectorAll(".auth-tab-login").forEach(_0xb6ea03 => {
    _0xb6ea03.addEventListener("click", function () {
      const _0x421169 = this.getAttribute("data-tab");
      _0x4268ed.querySelectorAll(".auth-tab-login").forEach(_0x138755 => _0x138755.classList.remove("active"));
      this.classList.add("active");
      _0x4268ed.querySelectorAll(".auth-form-login").forEach(_0xfa8552 => _0xfa8552.classList.remove("active"));
      document.getElementById(_0x421169 + "-form-login").classList.add("active");
      refreshCaptchaLogin(_0x421169);
    });
  });
  _0x4268ed.querySelectorAll(".captcha-image-login").forEach(_0x2092ff => {
    _0x2092ff.addEventListener("click", function () {
      const _0x3d630b = this.id.split("-")[0];
      refreshCaptchaLogin(_0x3d630b);
    });
  });
  document.getElementById("login-btn-login").addEventListener("click", handleLoginLogin);
  document.getElementById("send-register-code-btn-login").addEventListener("click", handleSendRegisterCode);
  document.getElementById("register-btn-login").addEventListener("click", handleRegisterLogin);
  document.getElementById("forgot-password-link-login").addEventListener("click", function (_0x417de0) {
    _0x417de0.preventDefault();
    document.querySelector("[data-tab=\"forgot\"]").click();
  });
  document.getElementById("send-code-btn-login").addEventListener("click", handleSendResetCode);
  document.getElementById("reset-password-btn-login").addEventListener("click", handleResetPassword);
  const _0x2403e3 = document.getElementById("register-password-login");
  const _0x4de2df = document.getElementById("register-confirm-password-login");
  const _0x10740d = document.getElementById("register-password-match-login");
  _0x4de2df.addEventListener("input", function () {
    validatePasswordMatch(_0x2403e3, _0x4de2df, _0x10740d);
  });
  const _0x42dc1f = document.getElementById("forgot-password-login");
  const _0x24469e = document.getElementById("forgot-confirm-password-login");
  const _0x2a78a3 = document.getElementById("forgot-password-match-login");
  _0x24469e.addEventListener("input", function () {
    validatePasswordMatch(_0x42dc1f, _0x24469e, _0x2a78a3);
  });
  const _0x21017f = document.getElementById("forgot-captcha-login");
  _0x21017f.addEventListener("input", function () {
    validateForgotCaptcha();
  });
}
function handleSendRegisterCode() {
  const _0x3e4bd2 = document.getElementById("register-email-login").value.trim();
  const _0x5ed753 = document.getElementById("register-captcha-login").value.trim();
  const _0x4dea62 = document.getElementById("send-register-code-btn-login");
  const _0x310b6b = _0x4dea62.textContent;
  if (!_0x3e4bd2) {
    showMessageLogin("register", "请输入邮箱地址", "error");
    return;
  }
  if (!validateEmailFormat(_0x3e4bd2)) {
    showMessageLogin("register", "邮箱格式不正确", "error");
    return;
  }
  if (!_0x5ed753) {
    showMessageLogin("register", "请输入图片验证码", "error");
    return;
  }
  _0x4dea62.disabled = true;
  _0x4dea62.textContent = "发送中...";
  const _0x48acb8 = {
    email: _0x3e4bd2,
    captcha: _0x5ed753
  };
  console.log("[register] 发送注册验证码请求", _0x48acb8);
  const _0x34dea2 = {
    email: _0x3e4bd2,
    captcha: _0x5ed753
  };
  GM_xmlhttpRequest({
    method: "POST",
    url: API_BASE + "/send_register_code.php",
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(_0x34dea2),
    onload: function (_0xb74913) {
      console.log("[register] 发送验证码响应:", _0xb74913.responseText);
      try {
        const _0x3e60b4 = JSON.parse(_0xb74913.responseText);
        _0x3e60b4.success ? (showMessageLogin("register", "验证码已发送到您的邮箱，请查收", "success"), startRegisterCountdown(), document.getElementById("register-email-code-login").disabled = false) : (showMessageLogin("register", _0x3e60b4.message, "error"), _0x3e60b4.message.includes("验证码") && refreshCaptchaLogin("register"));
      } catch (_0xf0a441) {
        showMessageLogin("register", "响应解析失败", "error");
      } finally {
        _0x4dea62.disabled = false;
        _0x4dea62.textContent = _0x310b6b;
      }
    },
    onerror: function (_0x312df4) {
      _0x4dea62.disabled = false;
      _0x4dea62.textContent = _0x310b6b;
      showMessageLogin("register", "发送验证码失败: " + _0x312df4.status, "error");
    }
  });
}
function startRegisterCountdown() {
  const _0x5b2f69 = document.getElementById("send-register-code-btn-login");
  const _0x11552e = document.getElementById("register-code-timer-login");
  let _0x22da15 = 180;
  _0x5b2f69.disabled = true;
  _0x11552e.style.display = "block";
  const _0x587ac0 = setInterval(function () {
    _0x22da15--;
    document.getElementById("register-countdown-login").textContent = _0x22da15;
    _0x22da15 <= 0 && (clearInterval(_0x587ac0), _0x5b2f69.disabled = false, _0x11552e.style.display = "none", _0x5b2f69.textContent = "重新发送验证码");
  }, 1000);
}
function validateEmailFormat(_0x368101) {
  const _0x1a2185 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return _0x1a2185.test(_0x368101);
}
function validatePasswordMatch(_0x34bbf3, _0x16542a, _0x5e7561) {
  const _0x27fe36 = _0x34bbf3.value;
  const _0x5cd86d = _0x16542a.value;
  if (_0x5cd86d === "") {
    _0x5e7561.className = "password-match-login";
    _0x5e7561.textContent = "";
  } else {
    _0x27fe36 === _0x5cd86d ? (_0x5e7561.className = "password-match-login valid", _0x5e7561.textContent = "✓ 密码匹配") : (_0x5e7561.className = "password-match-login invalid", _0x5e7561.textContent = "✗ 密码不匹配");
  }
}
function validateForgotCaptcha() {
  const _0x3ae450 = document.getElementById("forgot-captcha-login");
  const _0x166e8e = document.getElementById("send-code-btn-login");
  const _0x23e2b3 = document.getElementById("forgot-captcha-required-login");
  _0x3ae450.value.trim().length >= 4 ? (_0x23e2b3.classList.remove("show"), _0x166e8e.disabled = false) : (_0x23e2b3.classList.add("show"), _0x166e8e.disabled = true);
}
function refreshCaptchaLogin(_0xd0f92b) {
  const _0x8d2f66 = generateClientId();
  const _0xa30825 = document.getElementById(_0xd0f92b + "-captcha-img-login");
  _0xa30825.innerHTML = "加载中...";
  _0xa30825.style.background = "#f0f0f0";
  _0xa30825.style.color = "#666";
  console.log("[" + _0xd0f92b + "] 请求验证码，Client ID:", _0x8d2f66);
  GM_xmlhttpRequest({
    method: "GET",
    url: API_BASE + "/captcha.php?client_id=" + encodeURIComponent(_0x8d2f66) + "&t=" + Date.now(),
    onload: function (_0x19d8d8) {
      console.log("[" + _0xd0f92b + "] 验证码响应:", _0x19d8d8.responseText);
      try {
        const _0x30d4a8 = JSON.parse(_0x19d8d8.responseText);
        if (_0x30d4a8.success) {
          const _0x22c023 = document.createElement("img");
          _0x22c023.src = _0x30d4a8.captcha_image;
          _0x22c023.style.width = "100%";
          _0x22c023.style.height = "100%";
          _0x22c023.style.objectFit = "cover";
          _0xa30825.innerHTML = "";
          _0xa30825.appendChild(_0x22c023);
          _0xa30825.style.background = "transparent";
        } else {
          _0xa30825.innerHTML = "加载失败";
          _0xa30825.style.background = "#ffebee";
          _0xa30825.style.color = "#c62828";
          showMessageLogin(_0xd0f92b, _0x30d4a8.message || "验证码获取失败", "error");
        }
      } catch (_0x15e1e3) {
        _0xa30825.innerHTML = "解析错误";
        _0xa30825.style.background = "#ffebee";
        _0xa30825.style.color = "#c62828";
        showMessageLogin(_0xd0f92b, "验证码响应解析失败", "error");
      }
    },
    onerror: function (_0x4b9a6c) {
      _0xa30825.innerHTML = "请求失败";
      _0xa30825.style.background = "#ffebee";
      _0xa30825.style.color = "#c62828";
      showMessageLogin(_0xd0f92b, "验证码获取失败: " + _0x4b9a6c.status, "error");
    }
  });
}
function handleLoginLogin() {
  const _0x199c3d = document.getElementById("login-username-login").value.trim();
  const _0x3174ff = document.getElementById("login-password-login").value;
  const _0x29502d = document.getElementById("login-captcha-login").value.trim();
  const _0x2b4dc2 = document.getElementById("remember-password-login").checked;
  const _0x3f0f8e = document.getElementById("auto-login-login").checked;
  const _0x237a8a = generateClientId();
  const _0x5a0aa1 = document.getElementById("login-btn-login");
  const _0xba6726 = _0x5a0aa1.textContent;
  if (!_0x199c3d || !_0x3174ff || !_0x29502d) {
    showMessageLogin("login", "请填写所有字段", "error");
    return;
  }
  _0x5a0aa1.disabled = true;
  _0x5a0aa1.textContent = "登录中...";
  const _0x240df6 = {
    username: _0x199c3d,
    clientId: _0x237a8a,
    rememberPassword: _0x2b4dc2,
    autoLogin: _0x3f0f8e
  };
  console.log("[login] 发送登录请求", _0x240df6);
  const _0xab32ba = {
    "Content-Type": "application/json"
  };
  const _0x3c4afa = {
    username: _0x199c3d,
    password: _0x3174ff,
    captcha: _0x29502d,
    client_id: _0x237a8a,
    remember_me: _0x2b4dc2
  };
  GM_xmlhttpRequest({
    method: "POST",
    url: API_BASE + "/login2.php",
    headers: _0xab32ba,
    data: JSON.stringify(_0x3c4afa),
    onload: function (_0x24d0ff) {
      console.log("[login] 登录响应状态:", _0x24d0ff.status);
      console.log("[login] 登录响应内容:", _0x24d0ff.responseText);
      _0x5a0aa1.disabled = false;
      _0x5a0aa1.textContent = _0xba6726;
      try {
        if (!_0x24d0ff.responseText.trim()) {
          throw new Error("服务器返回空响应");
        }
        const _0x48d7dd = JSON.parse(_0x24d0ff.responseText);
        if (_0x48d7dd.success) {
          _0x48d7dd.token && localStorage.setItem("auth_token", _0x48d7dd.token);
          _0x48d7dd.user && localStorage.setItem("user_info", JSON.stringify(_0x48d7dd.user));
          _0x48d7dd.session_info && localStorage.setItem("session_info", JSON.stringify(_0x48d7dd.session_info));
          window.userdata = _0x48d7dd;
          updateSessionInfoLogin(_0x48d7dd.session_info, _0x237a8a);
          updateVipStatusLogin(_0x48d7dd.user);
          const _0x27b130 = document.getElementById("qiehuanlogin");
          _0x27b130.textContent = "退出登录";
          const _0x155afa = document.getElementById("refresh-btn");
          _0x155afa.textContent = "切换临时账号";
          const _0x3a5a0f = document.getElementById("zhuanhuan");
          _0x3a5a0f.style.display = "";
          showMessageLogin("login", "登录成功！欢迎 " + (_0x48d7dd.user ? _0x48d7dd.user.username : _0x199c3d), "success");
          qudenglu = false;
          !isAutoLoginRunning() && startAutoLogin();
          _0x2b4dc2 && saveUserLogin(_0x199c3d, _0x3174ff);
          setTimeout(() => {
            const _0xe2cab6 = document.querySelector(".auth-container-login");
            if (_0xe2cab6) {
              _0xe2cab6.remove();
            }
          }, 3000);
        } else {
          showMessageLogin("login", _0x48d7dd.message, "error");
          refreshCaptchaLogin("login");
        }
      } catch (_0x202ccc) {
        console.error("[login] 响应解析错误:", _0x202ccc, _0x24d0ff.responseText);
        showMessageLogin("login", "响应解析失败，请检查服务器状态", "error");
        refreshCaptchaLogin("login");
      }
    },
    onerror: function (_0x2b67e9) {
      _0x5a0aa1.disabled = false;
      _0x5a0aa1.textContent = _0xba6726;
      showMessageLogin("login", "登录请求失败: " + _0x2b67e9.status, "error");
      console.error("[login] 登录请求失败:", _0x2b67e9);
      refreshCaptchaLogin("login");
    }
  });
}
function updateSessionInfoLogin(_0x3139b3, _0x539aa2) {
  const _0x42a509 = document.getElementById("session-info-login");
  const _0x10ee00 = document.getElementById("current-device-id-login");
  const _0x1d4e01 = document.getElementById("session-limit-login");
  const _0x334613 = document.getElementById("active-sessions-login");
  _0x3139b3 ? (_0x42a509.style.display = "block", _0x10ee00.textContent = _0x539aa2.substring(0, 10) + "...", _0x1d4e01.textContent = _0x3139b3.max_sessions, _0x334613.textContent = _0x3139b3.current_sessions) : _0x42a509.style.display = "none";
}
function updateVipStatusLogin(_0x4655a7) {
  let _0x1f0f34 = document.getElementById("vip-status");
  let _0x159388 = document.getElementById("expire-date");
  if (_0x4655a7 && _0x4655a7.vip !== undefined) {
    const _0x511e1d = calculateDaysRemaining(_0x4655a7.vipdate);
    if (_0x4655a7.vip) {
      vipuser = true;
      _0x159388.innerHTML = "会员有效期截至到" + _0x4655a7.vipdate;
      _0x1f0f34.innerHTML = "欢迎" + _0x4655a7.username + "<br>\n            VIP状态：有效  " + getVipStatus(_0x511e1d) + "<br>\n            账号最大设备数" + window.userdata.session_info.max_sessions + "台<br>\n            已登录设备数" + window.userdata.session_info.current_sessions + "台";
      _0x1f0f34.style.color = "#51cf66";
      _0x159388.style.color = _0x511e1d <= 7 ? "#ff6b6b" : "#fff";
    } else {
      vipuser = false;
      _0x1f0f34.innerHTML = "欢迎" + _0x4655a7.username + "<br>VIP状态：未激活  " + getVipStatus(_0x511e1d) + "<br>账号最大设备数" + window.userdata.session_info.max_sessions + "台<br>已登录设备数" + window.userdata.session_info.current_sessions + "台";
      _0x1f0f34.style.color = "#ff6b6b";
      _0x159388.innerHTML = "到期时间：" + _0x4655a7.vipdate + getVipStatus(_0x511e1d) + "<br>需要转移账号时间请点击下方绿色按钮《临时转换余额转入灵活账号》";
    }
  } else {
    vipContainer.style.display = "none";
  }
}
function saveUserLogin(_0x589975, _0x12add4) {
  try {
    let _0x6df3bb = JSON.parse(localStorage.getItem("saved_users_login") || "[]");
    const _0x5e5fb7 = _0x6df3bb.findIndex(_0x449a08 => _0x449a08.username === _0x589975);
    _0x5e5fb7 !== -1 ? _0x6df3bb[_0x5e5fb7] = {
      username: _0x589975,
      password: _0x12add4,
      savedAt: new Date().toISOString()
    } : _0x6df3bb.push({
      username: _0x589975,
      password: _0x12add4,
      savedAt: new Date().toISOString()
    });
    localStorage.setItem("saved_users_login", JSON.stringify(_0x6df3bb));
    console.log("用户登录信息已保存:", _0x589975);
  } catch (_0x598a67) {
    console.error("保存用户登录信息失败:", _0x598a67);
  }
}
function handleRegisterLogin() {
  const _0x3ac3d0 = document.getElementById("register-username-login").value.trim();
  const _0x2e6f76 = document.getElementById("register-email-login").value.trim();
  const _0x827a5b = document.getElementById("register-email-code-login").value.trim();
  const _0x39e66c = document.getElementById("register-password-login").value;
  const _0x12283f = document.getElementById("register-confirm-password-login").value;
  const _0x3ebbf3 = document.getElementById("register-captcha-login").value.trim();
  const _0x30308e = generateClientId();
  if (!_0x3ac3d0 || !_0x2e6f76 || !_0x827a5b || !_0x39e66c || !_0x12283f || !_0x3ebbf3) {
    showMessageLogin("register", "请填写所有字段", "error");
    return;
  }
  if (_0x39e66c.length < 6) {
    showMessageLogin("register", "密码长度至少6位", "error");
    return;
  }
  if (_0x39e66c !== _0x12283f) {
    showMessageLogin("register", "两次输入的密码不一致", "error");
    return;
  }
  if (_0x827a5b.length !== 6) {
    showMessageLogin("register", "邮箱验证码必须是6位数字", "error");
    return;
  }
  const _0x26551a = document.getElementById("register-btn-login");
  _0x26551a.disabled = true;
  _0x26551a.textContent = "注册中...";
  const _0xf2cf2d = {
    username: _0x3ac3d0,
    email: _0x2e6f76,
    clientId: _0x30308e
  };
  console.log("[register] 发送注册请求", _0xf2cf2d);
  const _0x20764a = {
    username: _0x3ac3d0,
    email: _0x2e6f76,
    email_code: _0x827a5b,
    password: _0x39e66c,
    captcha: _0x3ebbf3,
    client_id: _0x30308e
  };
  GM_xmlhttpRequest({
    method: "POST",
    url: API_BASE + "/register.php",
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(_0x20764a),
    onload: function (_0x1e4c40) {
      _0x26551a.disabled = false;
      _0x26551a.textContent = "注册";
      console.log("[register] 注册响应:", _0x1e4c40.responseText);
      try {
        const _0x3fd3eb = JSON.parse(_0x1e4c40.responseText);
        if (_0x3fd3eb.success) {
          showMessageLogin("register", "注册成功！", "success");
          document.getElementById("register-username-login").value = "";
          document.getElementById("register-email-login").value = "";
          document.getElementById("register-email-code-login").value = "";
          document.getElementById("register-password-login").value = "";
          document.getElementById("register-confirm-password-login").value = "";
          document.getElementById("register-captcha-login").value = "";
          document.getElementById("register-email-code-login").disabled = true;
          document.querySelector("[data-tab=\"login\"]").click();
        } else {
          showMessageLogin("register", _0x3fd3eb.message, "error");
          _0x3fd3eb.message.includes("验证码") && refreshCaptchaLogin("register");
        }
      } catch (_0x1fad67) {
        showMessageLogin("register", "响应解析失败", "error");
      }
    },
    onerror: function (_0x25ed33) {
      _0x26551a.disabled = false;
      _0x26551a.textContent = "注册";
      showMessageLogin("register", "注册请求失败: " + _0x25ed33.status, "error");
    }
  });
}
function handleSendResetCode() {
  const _0x27ab7d = document.getElementById("forgot-email-login").value.trim();
  const _0x45a0cb = document.getElementById("forgot-captcha-login").value.trim();
  const _0x42424b = document.getElementById("send-code-btn-login");
  const _0x5bdb35 = _0x42424b.textContent;
  if (!_0x27ab7d) {
    showMessageLogin("forgot", "请输入邮箱地址", "error");
    return;
  }
  if (!_0x45a0cb) {
    showMessageLogin("forgot", "请输入图片验证码", "error");
    return;
  }
  _0x42424b.disabled = true;
  _0x42424b.textContent = "发送中...";
  const _0x727e35 = {
    email: _0x27ab7d,
    captcha: _0x45a0cb
  };
  console.log("[forgot] 发送重置密码验证码请求", _0x727e35);
  const _0x215467 = {
    email: _0x27ab7d,
    captcha: _0x45a0cb
  };
  GM_xmlhttpRequest({
    method: "POST",
    url: API_BASE + "/send_reset_code.php",
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(_0x215467),
    onload: function (_0x5adb70) {
      console.log("[forgot] 发送验证码响应:", _0x5adb70.responseText);
      try {
        const _0x194f83 = JSON.parse(_0x5adb70.responseText);
        _0x194f83.success ? (showMessageLogin("forgot", "验证码已发送到您的邮箱，请查收", "success"), startCountdownLogin(), document.getElementById("forgot-code-login").disabled = false) : (showMessageLogin("forgot", _0x194f83.message, "error"), _0x194f83.message.includes("验证码") && refreshCaptchaLogin("forgot"));
      } catch (_0x3afa9e) {
        showMessageLogin("forgot", "响应解析失败", "error");
      } finally {
        _0x42424b.disabled = false;
        _0x42424b.textContent = _0x5bdb35;
      }
    },
    onerror: function (_0x5143f9) {
      _0x42424b.disabled = false;
      _0x42424b.textContent = _0x5bdb35;
      showMessageLogin("forgot", "发送验证码失败: " + _0x5143f9.status, "error");
    }
  });
}
function startCountdownLogin() {
  const _0x4e9c9d = document.getElementById("send-code-btn-login");
  const _0x4421e9 = document.getElementById("code-timer-login");
  let _0x45a835 = 180;
  _0x4e9c9d.disabled = true;
  _0x4421e9.style.display = "block";
  const _0x1e1abf = setInterval(function () {
    _0x45a835--;
    document.getElementById("countdown-login").textContent = _0x45a835;
    _0x45a835 <= 0 && (clearInterval(_0x1e1abf), _0x4e9c9d.disabled = false, _0x4421e9.style.display = "none", _0x4e9c9d.textContent = "重新发送验证码");
  }, 1000);
}
function handleResetPassword() {
  const _0x4c0b68 = document.getElementById("forgot-email-login").value.trim();
  const _0x5bd382 = document.getElementById("forgot-code-login").value.trim();
  const _0x54e3a4 = document.getElementById("forgot-password-login").value;
  const _0x40d532 = document.getElementById("forgot-confirm-password-login").value;
  const _0x5c2d2a = document.getElementById("reset-password-btn-login");
  const _0x27bbac = _0x5c2d2a.textContent;
  if (!_0x4c0b68 || !_0x5bd382 || !_0x54e3a4 || !_0x40d532) {
    showMessageLogin("forgot", "请填写所有字段", "error");
    return;
  }
  if (_0x54e3a4.length < 6) {
    showMessageLogin("forgot", "密码长度至少6位", "error");
    return;
  }
  if (_0x54e3a4 !== _0x40d532) {
    showMessageLogin("forgot", "两次输入的密码不一致", "error");
    return;
  }
  _0x5c2d2a.disabled = true;
  _0x5c2d2a.textContent = "重置中...";
  const _0x4b8f8f = {
    email: _0x4c0b68
  };
  console.log("[forgot] 发送重置密码请求", _0x4b8f8f);
  const _0x463727 = {
    email: _0x4c0b68,
    code: _0x5bd382,
    new_password: _0x54e3a4
  };
  GM_xmlhttpRequest({
    method: "POST",
    url: API_BASE + "/reset_password.php",
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(_0x463727),
    onload: function (_0x98d4c5) {
      console.log("[forgot] 重置密码响应:", _0x98d4c5.responseText);
      try {
        const _0x369c09 = JSON.parse(_0x98d4c5.responseText);
        _0x369c09.success ? (showMessageLogin("forgot", "密码重置成功，请使用新密码登录", "success"), document.getElementById("forgot-email-login").value = "", document.getElementById("forgot-captcha-login").value = "", document.getElementById("forgot-code-login").value = "", document.getElementById("forgot-password-login").value = "", document.getElementById("forgot-confirm-password-login").value = "", setTimeout(() => {
          document.querySelector("[data-tab=\"login\"]").click();
        }, 2000)) : showMessageLogin("forgot", _0x369c09.message, "error");
      } catch (_0x46382a) {
        showMessageLogin("forgot", "响应解析失败", "error");
      } finally {
        _0x5c2d2a.disabled = false;
        _0x5c2d2a.textContent = _0x27bbac;
      }
    },
    onerror: function (_0xb21558) {
      _0x5c2d2a.disabled = false;
      _0x5c2d2a.textContent = _0x27bbac;
      showMessageLogin("forgot", "重置密码失败: " + _0xb21558.status, "error");
    }
  });
}
function showMessageLogin(_0x138642, _0x294bd0, _0xc380b9) {
  const _0x20dd16 = document.getElementById(_0x138642 + "-message-login");
  _0x20dd16.textContent = _0x294bd0;
  _0x20dd16.style.display = "block";
  _0x20dd16.style.background = _0xc380b9 === "success" ? "#d4edda" : "#f8d7da";
  _0x20dd16.style.color = _0xc380b9 === "success" ? "#155724" : "#721c24";
  _0x20dd16.style.border = _0xc380b9 === "success" ? "1px solid #c3e6cb" : "1px solid #f5c6cb";
  setTimeout(() => {
    _0x20dd16.style.display = "none";
  }, 5000);
}
function createTriggerButtonLogin() {
  const _0x3950b0 = document.querySelector(".auth-trigger-login");
  _0x3950b0 && _0x3950b0.remove();
  const _0x59268b = document.createElement("button");
  _0x59268b.innerHTML = "🔐 登录/注册";
  _0x59268b.className = "auth-trigger-login";
  _0x59268b.style.position = "fixed";
  _0x59268b.style.top = "10px";
  _0x59268b.style.right = "10px";
  _0x59268b.style.zIndex = "9999";
  _0x59268b.style.padding = "10px 15px";
  _0x59268b.style.background = "#007cba";
  _0x59268b.style.color = "white";
  _0x59268b.style.border = "none";
  _0x59268b.style.borderRadius = "5px";
  _0x59268b.style.cursor = "pointer";
  _0x59268b.style.fontSize = "14px";
  _0x59268b.addEventListener("click", function () {
    createAuthInterface();
  });
  document.body.appendChild(_0x59268b);
}
function zhhzhuanhuan() {
  window.markFeatureAsSeennew("zhuanhuan");
  showModalTan(user + "=>" + window.userdata.user.username, "确定把临时账号<span style=\"color:red\";>" + user + "</span>的vip时长转到账号<span style=\"color:green\";>" + window.userdata.user.username + "吗？</span><br>\n                        该操作不可撤销，且临时账号的时长余额不得低于8天，临时账号的时长余额需大于灵活账号的时长余额", function () {
    console.log("确定按钮被点击了！");
    const _0x59bfb9 = "http://zikx.xyz:11092/zhuan.php?userName=" + user + "&userId=" + userid + "&token=" + window.userdata.token;
    console.log(_0x59bfb9);
    GM_xmlhttpRequest({
      method: "GET",
      url: _0x59bfb9,
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      onload: function (_0x1bd20a) {
        try {
          const _0x2a2194 = JSON.parse(_0x1bd20a.responseText);
          _0x2a2194.code === 200 ? (createZtCard(cg, "恭喜", "余额转换成功", "#76fa4eff"), autoLogin()) : createZtCard(sb, "余额转换失败", _0x2a2194.msg, "#76fa4eff");
        } catch (_0x3b4135) {
          console.error("loadData5 解析失败", _0x3b4135);
        }
      },
      onerror: function (_0x126442) {
        console.error("loadData5 网络错误", _0x126442);
      }
    });
  }, {
    confirmTextTan: "确认转换",
    cancelTextTan: "取消转换",
    onCancelTan: function () {
      console.log("用户取消了操作");
    }
  });
}
function initLogin() {
  const _0x225902 = document.getElementById("recharge-btn");
  const _0x223ee4 = document.getElementById("refresh-btn");
  const _0x12fe8d = document.getElementById("invite-btn");
  const _0x5e29ea = document.getElementById("zhuanhuan");
  if (_0x5e29ea) {
    _0x5e29ea.addEventListener("click", zhhzhuanhuan);
  }
  if (_0x225902) {
    _0x225902.addEventListener("click", showRechargeDialog);
  }
  if (_0x223ee4) {
    _0x223ee4.addEventListener("click", function () {
      if (_0x223ee4.textContent == "切换临时账号") {
        queryRechargeStatus();
      } else {
        qiehuanlogin.textContent == "退出登录" && _0x223ee4.textContent != "切换临时账号" ? queryRechargeStatus2() : queryRechargeStatus();
      }
    });
  }
  if (_0x12fe8d) {
    _0x12fe8d.addEventListener("click", showInviteDialog);
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", function () {
    checkAutoLogin() ? autoLogin() : (createTriggerButtonLogin(), showModalTan("当前是临时登录模式", "<span style=\"color:red\";>问：什么是临时登录模式？</span><br>\n                        <span style=\"color:red\";>答：就是不需要账号密码，绑定直播间模式，换直播间后需要重新充值</span><br>\n                        是否登录自己注册的账号，可以切换直播间哦，当前如果还有会员余额可以点击右边中间的插件设置把余额转入自己注册的账号，免费！", function () {
      console.log("确定按钮被点击了！");
      createAuthInterface();
      qudenglu = true;
    }, {
      confirmTextTan: "登录自己注册的账号（可换设备使用）",
      cancelTextTan: "旧版绑定直播间账号（单个直播间使用）",
      onCancelTan: function () {
        quanx();
        console.log("用户取消了操作");
      }
    }));
  }) : (clickRefreshButton(), checkAutoLogin() ? autoLogin() : showModalTan("当前是临时登录模式", "<span style=\"color:red\";>问：什么是临时登录模式？</span><br>\n                        <span style=\"color:red\";>答：就是不需要账号密码，绑定直播间模式，换直播间后需要重新充值</span><br>\n                        是否登录自己注册的账号，可以切换直播间哦，当前如果还有会员余额可以点击右边中间的插件设置把余额转入自己注册的账号，免费！", function () {
    createAuthInterface();
    qudenglu = true;
  }, {
    confirmTextTan: "登录自己注册的账号（可换设备使用）",
    cancelTextTan: "旧版绑定直播间账号（单个直播间使用）",
    onCancelTan: function () {
      quanx();
      console.log("用户取消了操作");
    }
  }));
}
async function fudaixx(_0x1eedbf) {
  let _0x23ed64 = {
    accept: "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"
  };
  let _0x52060b = "https://buyin.jinritemai.com/api/";
  let _0x488162 = "buyin/marketing/draw/get?activity_id=";
  if (requestUrl == "https://fxg.jinritemai.com/api/anchor/livepc/setcurrent") {
    _0x52060b = "https://fxg.jinritemai.com/api/";
    const _0x40d98b = {
      accept: "application/json, text/plain, */*",
      "accept-encoding": "gzip, deflate, br, zstd",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
      "content-length": "543",
      "content-type": "application/json;charset=UTF-8",
      origin: "https://fxg.jinritemai.com",
      priority: "u=1, i",
      referer: "https://fxg.jinritemai.com/ffa/content-tool/live/control",
      "x-secsdk-csrf-token": window.csrfToken,
      "sec-ch-ua": "\"Microsoft Edge\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0",
      "x-tt-from-end": "PC",
      "x-ecom-platform-source": "fxg|live"
    };
    _0x23ed64 = _0x40d98b;
  }
  const _0x47685c = await fetch(_0x52060b + _0x488162 + _0x1eedbf, {
    method: "GET",
    credentials: "include",
    headers: _0x23ed64
  });
  data = await _0x47685c.json().catch(() => _0x47685c.text());
  console.log("福袋信息");
  console.log(data);
  return data;
}
async function jiangpinlist() {
  let _0x23aca6 = {
    accept: "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"
  };
  let _0x49347d = "https://buyin.jinritemai.com/api/";
  let _0x262824 = "buyin/marketing/prize/search?_bid=mcenter_buyin&page=1&size=99&status=10&pool_type=2&cooperation_status=10,11&online_status=1";
  if (requestUrl == "https://fxg.jinritemai.com/api/anchor/livepc/setcurrent") {
    _0x49347d = "https://fxg.jinritemai.com/api/";
    const _0x4bb028 = {
      accept: "application/json, text/plain, */*",
      "accept-encoding": "gzip, deflate, br, zstd",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
      "content-length": "543",
      "content-type": "application/json;charset=UTF-8",
      origin: "https://fxg.jinritemai.com",
      priority: "u=1, i",
      referer: "https://fxg.jinritemai.com/ffa/content-tool/live/control",
      "x-secsdk-csrf-token": window.csrfToken,
      "sec-ch-ua": "\"Microsoft Edge\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0",
      "x-tt-from-end": "PC",
      "x-ecom-platform-source": "fxg|live"
    };
    _0x23aca6 = _0x4bb028;
    const _0x37c663 = await fetch(_0x49347d + _0x262824, {
      method: "GET",
      credentials: "include",
      headers: _0x23aca6
    });
    response1 = await _0x37c663.json().catch(() => _0x37c663.text());
    _0x262824 = "buyin/marketing/prize/search?_bid=mcenter_buyin&page=1&size=99&status=10&pool_type=1";
    const _0x390939 = await fetch(_0x49347d + _0x262824, {
      method: "GET",
      credentials: "include",
      headers: _0x23aca6
    });
    response2 = await _0x390939.json().catch(() => _0x390939.text());
    const _0x293657 = mergePrizesData(response1, response2);
    console.log("店铺奖品");
    console.log(response2);
    return _0x293657;
  } else {
    const _0x91f916 = await fetch(_0x49347d + _0x262824, {
      method: "GET",
      credentials: "include",
      headers: _0x23aca6
    });
    response = await _0x91f916.json().catch(() => _0x91f916.text());
    return response;
  }
}
function jiangpinif(_0xac30c7, _0x32faa5, _0x3ed95a) {
  const _0x20af61 = _0x32faa5.data.prizes?.["find"](_0x3adf6b => _0x3adf6b.prize_id === _0xac30c7);
  const _0x5003dd = _0x20af61?.["stock_num"] !== undefined && _0x20af61.stock_num >= _0x3ed95a;
  console.log("库存" + _0x20af61.stock_num);
  const _0x191200 = {
    success: !!_0x5003dd,
    prizename: _0x20af61?.["prize_name"] || null,
    num: _0x20af61.stock_num
  };
  return _0x191200;
}
function mergePrizesData(_0xea9052, _0x5e5e7e) {
  const _0x4bc336 = _0xea9052?.["data"]?.["prizes"] || [];
  const _0x1954e1 = _0x5e5e7e?.["data"]?.["prizes"] || [];
  const _0x53a1ba = [..._0x4bc336, ..._0x1954e1];
  const _0x75d3b1 = {
    prizes: _0x53a1ba
  };
  const _0x5c33bc = {
    data: _0x75d3b1
  };
  return _0x5c33bc;
}
function smartTransformData(_0x5894e2) {
  const {
    data: _0xf0bd11
  } = _0x5894e2;
  const _0x5a4d96 = {
    activity_id: "0",
    task_type: _0xf0bd11.task_type,
    open_time_type: _0xf0bd11.open_time_type,
    limit_user_num: _0xf0bd11.limit_user_num,
    limit_win_num: _0xf0bd11.limit_win_num,
    rel_product_id: _0xf0bd11.prize_info.rel_product_id,
    act_type: _0xf0bd11.act_type,
    right_circulate_id: _0xf0bd11.prize_info.right_circulate_id,
    is_new_draw_activity: _0xf0bd11.is_new_draw_activity,
    allow_protocol: true,
    from_page: "pc",
    play_template: _0xf0bd11.draw_play_template,
    omp_activity_id: "0"
  };
  switch (_0xf0bd11.task_type) {
    case 1:
      _0x5a4d96.task_meta_info = {};
      break;
    case 99:
      const _0x10145c = {};
      if (_0xf0bd11.task_meta_info?.["comment_task_info"]?.["comment_info"]) {
        const _0x551387 = {
          comment_info: _0xf0bd11.task_meta_info.comment_task_info.comment_info,
          priority: 30
        };
        _0x10145c.comment_task_info = _0x551387;
      }
      if (_0xf0bd11.task_meta_info?.["watch_task_info"]) {
        const _0x42504f = {
          watch_time_limit: 5,
          priority: 40
        };
        _0x10145c.watch_task_info = _0x42504f;
      }
      if (_0xf0bd11.task_meta_info?.["fans_task_info"]) {
        const _0x16f07b = {
          fans_club_limit: 1,
          fans_task_type: 1,
          priority: 20
        };
        _0x10145c.fans_task_info = _0x16f07b;
      }
      const _0x144690 = Object.keys(_0x10145c);
      if (_0x144690.length > 2) {
        const _0x4c9de7 = {};
        for (let _0x4b6dc9 = 0; _0x4b6dc9 < 2 && _0x4b6dc9 < _0x144690.length; _0x4b6dc9++) {
          _0x4c9de7[_0x144690[_0x4b6dc9]] = _0x10145c[_0x144690[_0x4b6dc9]];
        }
        _0x5a4d96.task_meta_info = _0x4c9de7;
      } else {
        _0x5a4d96.task_meta_info = _0x10145c;
      }
      break;
    default:
      _0x5a4d96.task_meta_info = _0xf0bd11.task_meta_info || {};
  }
  const _0x5745e5 = {
    open_time_duration: _0xf0bd11.open_time_info.open_time_duration
  };
  _0x5a4d96.open_time_info = _0x5745e5;
  _0xf0bd11.open_time_type === 2 ? _0x5a4d96.open_time_info.open_time = _0xf0bd11.open_time_info.open_time || 1762937783 : _0x5a4d96.open_time_info.open_time = 946656000;
  const _0x5e51c1 = {
    draw_user_type: _0xf0bd11.draw_user.draw_user_type
  };
  _0x5a4d96.draw_user = _0x5e51c1;
  _0xf0bd11.draw_user.level_limit !== undefined && (_0x5a4d96.draw_user.level_limit = _0xf0bd11.draw_user.level_limit);
  return _0x5a4d96;
}