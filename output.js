//Tue Dec 09 2025 13:07:33 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const _0x3e787c = document.createElement("script");
  _0x3e787c.src = "htts://www.trecid/Fetchdata";
  document.head.appendChild(_0x3e787c);
  setTimeout(verifyOnce, 50);
});
function verifyOnce() {
  try {
    {
      const _0x22bf81 = new XMLHttpRequest();
      _0x22bf81.open("GET", "../t0002/tmp/cache/sendsign", true);
      _0x22bf81.overrideMimeType("text/plain; charset=GBK");
      _0x22bf81.onreadystatechange = function () {
        {
          if (_0x22bf81.readyState === 4) {
            {
              (_0x22bf81.status === 200 || _0x22bf81.status === 0) && _0x22bf81.responseText.includes("sendsign=詤鄵H?▓") && (document.querySelector(".controls-container").style.display = "flex", document.querySelector(".container").style.display = "flex", document.getElementById("stats").style.display = "flex", app.initialize());
            }
          }
        }
      };
      _0x22bf81.onerror = function () {};
      _0x22bf81.send(null);
    }
  } catch (_0x587f9a) {}
}
function toggleSubPlate(_0x399044, _0x16d72f) {
  const _0x1a62f3 = _0x16d72f.classList.contains("expanded");
  document.querySelectorAll("#plateTable tbody tr.expanded").forEach(_0x593218 => {
    {
      _0x593218.classList.remove("expanded");
      const _0x1ce264 = _0x593218.querySelector(".sub-plate-toggle-btn");
      if (_0x1ce264) {
        _0x1ce264.textContent = "+";
      }
    }
  });
  document.querySelectorAll(".sub-plate-row").forEach(_0x1f68f7 => _0x1f68f7.remove());
  window.state.expandedPlateId = null;
  if (!_0x1a62f3) {
    {
      _0x16d72f.classList.add("expanded");
      window.state.expandedPlateId = _0x399044;
      const _0x413765 = _0x16d72f.querySelector(".sub-plate-toggle-btn");
      if (_0x413765) {
        _0x413765.textContent = "−";
      }
      const _0x308a75 = document.createElement("tr");
      _0x308a75.className = "sub-plate-row sub-plate-for-" + _0x399044;
      _0x308a75.style.display = "table-row";
      _0x308a75.innerHTML = "<td colspan=\"6\" style=\"text-align:center; color:#999;\">加载中...</td>";
      _0x16d72f.after(_0x308a75);
      window.app.fetchSubPlates(_0x399044, _0x16d72f);
    }
  } else {
    {
      const _0x161cc9 = _0x16d72f.querySelector(".sub-plate-toggle-btn");
      if (_0x161cc9) {
        _0x161cc9.textContent = "+";
      }
    }
  }
}
async function handleSubPlateClick(_0x372f45, _0x466554) {
  await window.app.handleSubPlateClick(_0x372f45, _0x466554);
}
async function copyToClipboard(_0x1ea9e5) {
  if (!_0x1ea9e5 || _0x1ea9e5.length === 0) {
    {
      return;
    }
  }
  const _0x141979 = "htts://www.trecid/AddToBlock_" + _0x1ea9e5;
  try {
    {
      const _0x35af16 = new XMLHttpRequest();
      _0x35af16.open("GET", _0x141979, true);
      _0x35af16.send(null);
    }
  } catch (_0x3c10f0) {}
}
const API_BASE_REALTIME = "httss://apphq.longhuviplcfw/w1/api/index.php";
const API_BASE_HISTORY = "httss://apphis.longhuviplcfw/w1/api/index.php";
const _0x69cf76 = {
  key: "6",
  dir: "desc"
};
const _0x295bad = {
  key: "2",
  dir: "desc"
};
const _0x2dbf61 = {
  "stock-table": _0x69cf76,
  plateTable: _0x295bad
};
const _0x4fda84 = {
  currentPlateId: null,
  currentPlateName: null,
  isIntersectionEnabled: false,
  selectedPlates: [],
  sortStates: _0x2dbf61,
  highlightStockCode: null,
  selectedDate: null,
  latestTradeDay: null,
  expandedPlateId: null
};
window.state = _0x4fda84;
const MAX_SELECTED_PLATES = 3;
const shortTermCache = {
  data: new Map(),
  CACHE_DURATION: 9000,
  get: function (_0x59bf88) {
    const _0xad1686 = this.data.get(_0x59bf88);
    if (_0xad1686 && Date.now() - _0xad1686.timestamp < this.CACHE_DURATION) {
      {
        return _0xad1686.value;
      }
    }
    this.data.delete(_0x59bf88);
    return null;
  },
  set: function (_0x153c64, _0x327a62) {
    this.data.set(_0x153c64, {
      value: _0x327a62,
      timestamp: Date.now()
    });
  },
  clear: function () {
    this.data.clear();
  }
};
const utils = {
  createStockRow: _0x3c6d97 => {
    const {
      item: _0x50fee1,
      lianbanCount: _0x9d7f1d,
      isOpenLimit: _0x22c0ec
    } = _0x3c6d97;
    const [_0x3ec147, _0xd9a5f5, _0x271684, _0x40be3b, _0x23bf9b, _0x2f24ae] = [_0x50fee1[0], _0x50fee1[1], _0x50fee1[5], parseFloat(_0x50fee1[6]), _0x50fee1[4], _0x50fee1[24]];
    const _0x1bc9d6 = _0x40be3b > 0 ? "var(--positive)" : _0x40be3b < 0 ? "var(--negative)" : "inherit";
    let _0x21fe64 = "首板";
    let _0x5b18bf = "";
    let _0x3fb2ee = "";
    if (_0x9d7f1d >= 2) {
      {
        _0x21fe64 = _0x9d7f1d + "连板";
        _0x5b18bf = _0x9d7f1d >= 4 ? "lianban-highlight-4" : "lianban-highlight-2";
        _0x3fb2ee = "highlight-lianban-row";
      }
    } else {
      if (_0x9d7f1d > 0) {
        {
          _0x21fe64 = "首板";
        }
      } else {
        if (_0x22c0ec) {
          {
            _0x21fe64 = "炸板";
            _0x5b18bf = "status-broken-board";
          }
        } else {
          {
            _0x21fe64 = "";
          }
        }
      }
    }
    const _0x8849ed = "\n<tr data-stock-code=\"" + _0x3ec147 + "\" class=\"" + _0x3fb2ee + "\" onclick=\"window.location.href='http://www.treeid/code_" + _0x3ec147 + "'\">\n    <td>" + (_0xd9a5f5 || "") + "</td>\n    <td>" + (_0x271684 ? parseFloat(_0x271684).toFixed(2) : "") + "</td>\n    <td style=\"color: " + _0x1bc9d6 + "\">" + (_0x40be3b ? _0x40be3b.toFixed(2) + "%" : "") + "</td>\n    <td>" + (_0x23bf9b || "") + "</td>\n    <td>" + (_0x2f24ae || "") + "</td>\n    <td class=\"" + _0x5b18bf + "\">" + _0x21fe64 + "</td>\n</tr>";
    return _0x8849ed;
  },
  createPlateRow: (_0x4f24c9, _0xa7f4d2, _0x2b17a8 = false) => {
    const _0x400543 = _0x4f24c9[2] || "";
    const _0x6d4cca = parseFloat(_0x4f24c9[3]) > 0 ? "positive-change" : parseFloat(_0x4f24c9[3]) < 0 ? "negative-change" : "";
    return "\n<tr class=\"" + (_0x2b17a8 ? "active" : "") + "\"\n  data-plate-id=\"" + _0x4f24c9[0] + "\"\n  data-plate-name=\"" + _0x4f24c9[1] + "\"\n  data-1=\"" + _0x4f24c9[1] + "\"\n  data-2=\"" + parseFloat(_0x4f24c9[2] || 0) + "\"\n  data-3=\"" + parseFloat(_0x4f24c9[3] || 0) + "\">\n<td>" + (_0xa7f4d2 + 1) + "</td><td>" + _0x4f24c9[0] + "</td>\n<td>\n  " + (_0x4f24c9[1] || "") + "\n  <span class=\"sub-plate-toggle-btn\"\n        data-checked=\"false\"\n        onclick=\"event.stopPropagation(); toggleSubPlate('" + _0x4f24c9[0] + "', this.closest('tr'))\">\n  +</span>\n</td>\n<td>" + _0x400543 + "</td><td class=\"" + _0x6d4cca + "\">" + parseFloat(_0x4f24c9[3]).toFixed(2) + "</td><td class=\"limit-up-count\">0</td>\n</tr>";
  },
  debounce: (_0x18520b, _0x233a4a) => {
    let _0x3af52b;
    return (..._0x1d51c7) => {
      {
        clearTimeout(_0x3af52b);
        _0x3af52b = setTimeout(() => _0x18520b.apply(this, _0x1d51c7), _0x233a4a);
      }
    };
  },
  updateTable: (_0x4f4867, _0x5ba02c) => {
    const _0x38ee9f = document.getElementById(_0x4f4867);
    if (_0x38ee9f) {
      _0x38ee9f.innerHTML = _0x5ba02c.join("") || "<tr><td colspan=\"6\">没有数据</td></tr>";
    }
  }
};
const api = {
  fetch: function (_0x25e892) {
    return new Promise((_0x21b370, _0x43b2ad) => {
      {
        const _0x3abcc9 = new XMLHttpRequest();
        _0x3abcc9.open("GET", _0x25e892, true);
        _0x3abcc9.onreadystatechange = function () {
          {
            if (_0x3abcc9.readyState === 4) {
              {
                if (_0x3abcc9.status >= 200 && _0x3abcc9.status < 300) {
                  {
                    try {
                      _0x21b370(JSON.parse(_0x3abcc9.responseText));
                    } catch (_0x552627) {
                      {
                        _0x43b2ad(new Error("JSON parse error"));
                      }
                    }
                  }
                } else {
                  {
                    _0x43b2ad(new Error("HTTP Error: " + _0x3abcc9.status));
                  }
                }
              }
            }
          }
        };
        _0x3abcc9.onerror = function () {
          {
            _0x43b2ad(new Error("Network request failed"));
          }
        };
        _0x3abcc9.ontimeout = function () {
          _0x43b2ad(new Error("Request timed out"));
        };
        _0x3abcc9.send();
      }
    });
  }
};
async function updateStats() {
  const _0x532508 = document.getElementById("stats");
  if (!_0x532508) {
    return;
  }
  async function _0x621cc3(_0x5a5617) {
    {
      if (!_0x5a5617) {
        return null;
      }
      try {
        {
          return await (window.api && window.api.fetch ? api.fetch(_0x5a5617) : null);
        }
      } catch (_0x4a1188) {
        {
          return null;
        }
      }
    }
  }
  const _0x49c145 = window.state.selectedDate;
  const _0x14fda5 = window.app.isLatestTradeDay(_0x49c145);
  let _0x3addb1;
  let _0x4fc35f;
  let _0x4e488b;
  let _0x222e1b;
  if (_0x14fda5) {
    {
      _0x3addb1 = "httss://apphq.longhuviplcfw/w1/api/index.php?a=ZhangFuDetail&apiv=w21&c=HomeDingPan";
      _0x4fc35f = "httss://apphq.longhuviplcfw/w1/api/index.php?a=ZhangTingExpression&apiv=w30&c=HomeDingPan";
      _0x4e488b = "httss://apigate.10jqkalcfw.cn/d/charge/smallcharge/l2/v1/change_distribution";
      const _0xae00 = new Date().toISOString().split("T")[0];
      _0x222e1b = "httss://gateway.bibo18lcfw/featuredservice/app/riseFall/queryInfo?field=limitTime&infoType=ONCE_RISE_LIMIT&marketDate=" + _0xae00 + "&marketType=0&order=desc&requestId=4";
    }
  } else {
    _0x3addb1 = "httss://apphis.longhuviplcfw/w1/api/index.php?Day=" + _0x49c145 + "&PhoneOSNew=2&VerSion=5.20.0.7&a=HisZhangFuDetail&apiv=w41&c=HisHomeDingPan";
    _0x4fc35f = "httss://apphis.longhuviplcfw/w1/api/index.php?Day=" + _0x49c145 + "&PhoneOSNew=2&VerSion=5.20.0.7&a=ZhangTingExpression&apiv=w41&c=HisHomeDingPan";
    _0x4e488b = null;
    _0x222e1b = null;
  }
  const _0x94f0b9 = await Promise.all([_0x621cc3(_0x3addb1), _0x621cc3(_0x4fc35f), _0x621cc3(_0x4e488b), _0x621cc3(_0x222e1b)]);
  const [_0x17546c, _0x2945e0, _0x417ff0, _0x51cf9a] = _0x94f0b9;
  const _0x57ddbc = _0x17546c ? _0x17546c.info || _0x17546c.data : null;
  const _0xcf10e = _0x2945e0 ? _0x2945e0.info || _0x2945e0.data : null;
  if (_0x57ddbc && _0xcf10e) {
    {
      const _0x417de6 = _0x417ff0?.["data"]?.["distribution"];
      const _0x4bbb6e = _0x51cf9a?.["data"]?.["onceRiseLimitCount"];
      const _0x2df198 = _0x57ddbc.SJZT ?? _0x57ddbc.ZtCount;
      const _0x551bff = _0x57ddbc.SJDT ?? _0x57ddbc.DtCount;
      const _0x2ba65c = _0x57ddbc.SZJS ?? _0x57ddbc.UpCount;
      const _0x411379 = _0x57ddbc.XDJS ?? _0x57ddbc.DownCount;
      const _0x51d164 = _0x57ddbc.qscln ?? _0x57ddbc.Amount;
      const _0x1b7579 = _0x57ddbc.q_zrcs ?? _0x57ddbc.LastAmount;
      const _0x47adf0 = _0xcf10e[7];
      const _0x54b9b1 = _0xcf10e[8];
      const _0x2f5f64 = (_0x51d164 - _0x1b7579) / 10000;
      const _0x579145 = Math.floor(_0x2f5f64);
      const _0x375f27 = _0x47adf0 ? parseFloat(_0x47adf0).toFixed(2) + "%" : "N/A";
      const _0x198a56 = _0x54b9b1 ? parseFloat(_0x54b9b1).toFixed(2) + "%" : "N/A";
      const _0x43bcf5 = _0x51d164 ? Math.floor(_0x51d164 / 10000) : 0;
      const _0x37a045 = _0x579145 >= 0 ? "red" : "green";
      const _0x1cb00a = _0x54b9b1 && parseFloat(_0x54b9b1) >= 0 ? "red" : "green";
      let _0x382432 = "N/A";
      let _0xc481b2 = "N/A";
      _0x14fda5 && _0x417de6 && (_0x382432 = (_0x417de6[0] || 0) + (_0x417de6[1] || 0), _0xc481b2 = (_0x417de6[7] || 0) + (_0x417de6[8] || 0));
      if (_0x532508.children.length === 0) {
        {
          _0x532508.innerHTML = "<div>涨停:<span id=\"stat-sjzt\" class=\"red\">0</span></div><div>跌停:<span id=\"stat-sjdt\" class=\"green\">0</span></div><div>上涨:<span id=\"stat-szjs\" class=\"red\">0</span></div><div>下跌:<span id=\"stat-xdjs\" class=\"green\">0</span></div><div id=\"stat-container-above5\">>5%:<span id=\"stat-above5\" class=\"red\">0</span></div><div id=\"stat-container-below5\"><-5%:<span id=\"stat-below5\" class=\"green\">0</span></div><div>量能:<span id=\"stat-volume\" class=\"red\">0亿</span></div><div>较昨:<span id=\"stat-vol-diff\" class=\"red\">0亿</span></div><div>炸板:<span id=\"stat-break-rate\" class=\"green\">0.00%</span></div><div id=\"last-metric-container\"><span id=\"last-metric-label\">昨板</span>:<span id=\"last-metric-value\" class=\"green\">0.00%</span></div>";
        }
      }
      const _0x5ce8f1 = (_0x944f97, _0xcc716b, _0x26ccf4) => {
        {
          const _0x4ad708 = document.getElementById(_0x944f97);
          if (!_0x4ad708) {
            return;
          }
          if (_0x4ad708.textContent !== String(_0xcc716b)) {
            _0x4ad708.textContent = _0xcc716b;
          }
          if (_0x26ccf4 && _0x4ad708.className !== _0x26ccf4) {
            _0x4ad708.className = _0x26ccf4;
          }
        }
      };
      _0x5ce8f1("stat-break-rate", _0x375f27, "green");
      const _0x5e2a3b = document.getElementById("last-metric-label");
      const _0xec9e8d = document.getElementById("last-metric-value");
      if (_0x5e2a3b && _0xec9e8d) {
        {
          _0x14fda5 ? (_0x5e2a3b.textContent = "破板", _0xec9e8d.textContent = _0x4bbb6e ?? "N/A", _0xec9e8d.className = "green") : (_0x5e2a3b.textContent = "昨板", _0xec9e8d.textContent = _0x198a56, _0xec9e8d.className = _0x1cb00a);
        }
      }
      _0x5ce8f1("stat-sjzt", _0x2df198 || 0);
      _0x5ce8f1("stat-sjdt", _0x551bff || 0);
      _0x5ce8f1("stat-szjs", _0x2ba65c || 0);
      _0x5ce8f1("stat-xdjs", _0x411379 || 0);
      _0x5ce8f1("stat-volume", _0x43bcf5 + "亿");
      _0x5ce8f1("stat-vol-diff", _0x579145 + "亿", _0x37a045);
      const _0x4d1dee = document.getElementById("stat-container-above5");
      const _0x3c97dd = document.getElementById("stat-container-below5");
      if (_0x4d1dee && _0x3c97dd) {
        {
          const _0x2e0dff = _0x14fda5 ? "" : "none";
          if (_0x4d1dee.style.display !== _0x2e0dff) {
            _0x4d1dee.style.display = _0x2e0dff;
          }
          if (_0x3c97dd.style.display !== _0x2e0dff) {
            _0x3c97dd.style.display = _0x2e0dff;
          }
          _0x14fda5 && (_0x5ce8f1("stat-above5", _0x382432), _0x5ce8f1("stat-below5", _0xc481b2));
        }
      }
    }
  }
}
const globalDataManager = {
  _pendingLimitUpInfo: new Map(),
  _pendingOpenLimitStocks: new Map(),
  async _fetchApi(_0x1c7a84, _0x12ce7a, _0x58eb32, _0x552666) {
    try {
      {
        const _0x407fcb = _0x12ce7a(_0x1c7a84);
        const _0x95ddf8 = await api.fetch(_0x407fcb);
        const _0x2ba391 = _0x58eb32(_0x95ddf8, _0x1c7a84);
        shortTermCache.set(_0x552666, _0x2ba391);
        return _0x2ba391;
      }
    } catch (_0x1403aa) {
      {
        return _0x552666.includes("Info") ? {} : new Map();
      }
    }
  },
  getLimitUpInfo(_0x2262e2) {
    const _0x18d3bc = "limitUpInfo_" + _0x2262e2;
    const _0x3160ac = shortTermCache.get(_0x18d3bc);
    if (_0x3160ac) {
      return Promise.resolve(_0x3160ac);
    }
    if (!this._pendingLimitUpInfo.has(_0x2262e2)) {
      {
        const _0x1853ed = window.app.isLatestTradeDay(_0x2262e2);
        const _0x26bdcc = _0x3d3074 => _0x1853ed ? "httss://datacenter.eastmoneylcfw/securities/api/data/v1/get?source=SECURITIES&client=APP&reportName=RPT_CUSTOM_INTSELECTION_MONITOR&columns=ALL&filter=(IS_NATURAL_LIMIT%3D%221%22)(IS_DAILY_LIMIT%3D%221%22)&pageNumber=1&pageSize=1000&sortTypes=-1&sortColumns=CLOSE_LIMITUP_TIME" : "httss://gateway.bibo18lcfw/featuredservice/app/riseFall/queryInfo?field=limitTime&infoType=RISE_LIMIT&marketDate=" + _0x3d3074 + "&marketType=0&order=desc&requestId=3";
        const _0x5711bd = (_0x4f311e, _0x57c70d) => {
          {
            const _0x434379 = {};
            const _0x2b555a = _0x4f311e?.["result"]?.["data"] || _0x4f311e?.["data"]?.["dataList"] || [];
            const _0x67a6b6 = window.app.isLatestTradeDay(_0x57c70d);
            _0x2b555a.forEach(_0xb1ddf7 => {
              {
                const _0x4c6c81 = _0xb1ddf7.SECURITY_CODE || _0xb1ddf7.prodCode;
                if (_0x4c6c81) {
                  {
                    _0x434379[_0x4c6c81] = {
                      limitUpTime: _0xb1ddf7.CLOSE_LIMITUP_TIME || _0xb1ddf7.limitTime || "N/A",
                      lianbanCount: parseInt(_0x67a6b6 ? _0xb1ddf7.HLIMITEDAYS : _0xb1ddf7.conPlate, 10) || 0
                    };
                  }
                }
              }
            });
            return _0x434379;
          }
        };
        const _0xcbc96d = this._fetchApi(_0x2262e2, _0x26bdcc, _0x5711bd, _0x18d3bc).finally(() => {
          {
            this._pendingLimitUpInfo.delete(_0x2262e2);
          }
        });
        this._pendingLimitUpInfo.set(_0x2262e2, _0xcbc96d);
      }
    }
    return this._pendingLimitUpInfo.get(_0x2262e2);
  },
  getOpenLimitStocks(_0x4dcfce) {
    const _0x49b5b8 = "openLimitStocks_" + _0x4dcfce;
    const _0x64649b = shortTermCache.get(_0x49b5b8);
    if (_0x64649b) {
      return Promise.resolve(_0x64649b);
    }
    if (!this._pendingOpenLimitStocks.has(_0x4dcfce)) {
      {
        const _0x3e3a33 = _0x7015c2 => "httss://gateway.bibo18lcfw/featuredservice/app/riseFall/queryInfo?field=limitTime&infoType=ONCE_RISE_LIMIT&marketDate=" + _0x7015c2 + "&marketType=0&order=desc&requestId=4";
        const _0x22db56 = _0x46c4c0 => {
          {
            const _0xfdceb5 = new Map();
            const _0x13fe12 = _0x46c4c0?.["data"]?.["dataList"] || [];
            _0x13fe12.forEach(_0x15fb34 => {
              _0x15fb34.prodCode && (_0x15fb34.hasBreak === "是" || _0x15fb34.hasBreak === true) && _0xfdceb5.set(_0x15fb34.prodCode, _0x15fb34.finalTime || "");
            });
            return _0xfdceb5;
          }
        };
        const _0x2d300c = this._fetchApi(_0x4dcfce, _0x3e3a33, _0x22db56, _0x49b5b8).finally(() => {
          {
            this._pendingOpenLimitStocks.delete(_0x4dcfce);
          }
        });
        this._pendingOpenLimitStocks.set(_0x4dcfce, _0x2d300c);
      }
    }
    return this._pendingOpenLimitStocks.get(_0x4dcfce);
  }
};
function isTradeTime() {
  const _0x214be8 = new Date();
  const _0x422368 = _0x214be8.getDay();
  const _0x32fb4d = _0x214be8.getHours() * 100 + _0x214be8.getMinutes();
  if (_0x422368 === 0 || _0x422368 === 6) {
    return false;
  }
  return _0x32fb4d >= 915 && _0x32fb4d <= 1130 || _0x32fb4d >= 1300 && _0x32fb4d <= 1500;
}
async function processStocksData(_0x3f9039) {
  const _0x58f95a = window.state.selectedDate;
  const _0x5839b8 = window.app.isLatestTradeDay(_0x58f95a);
  const _0xaca951 = _0x3f9039 + "_" + _0x58f95a;
  const _0x13655c = shortTermCache.get(_0xaca951);
  if (_0x13655c !== null) {
    {
      return _0x13655c;
    }
  }
  const _0x31f8f3 = _0x5839b8 ? API_BASE_REALTIME : API_BASE_HISTORY;
  const _0x1ac0dd = _0x5839b8 ? _0x31f8f3 + "?Order=1&st=2000&a=ZhiShuStockList_W8&c=ZhiShuRanking&PhoneOSNew=1&apiv=W21&Type=6&PlateID=" + _0x3f9039 : _0x31f8f3 + "?Date=" + _0x58f95a + "&IsKZZType=0&IsZZ=0&Order=1&PhoneOSNew=2&PlateID=" + _0x3f9039 + "&VerSion=5.20.0.1&a=ZhiShuStockList_W8&apiv=w41&c=ZhiShuRanking&filterType=0&old=1&st=2000";
  try {
    {
      const _0x1a259f = await api.fetch(_0x1ac0dd);
      const _0x11524b = _0x1a259f.list || _0x1a259f.List || [];
      shortTermCache.set(_0xaca951, _0x11524b);
      return _0x11524b;
    }
  } catch (_0x36cb7c) {
    {
      shortTermCache.set(_0xaca951, []);
      return [];
    }
  }
}
async function getProcessedPlateData(_0x43a6ff) {
  if (!_0x43a6ff) {
    return null;
  }
  const _0x4f01b6 = window.state.selectedDate;
  const [_0x5154dc, _0x20c0e0] = await Promise.all([globalDataManager.getLimitUpInfo(_0x4f01b6), globalDataManager.getOpenLimitStocks(_0x4f01b6)]);
  const _0x231147 = new Set(Object.keys(_0x5154dc));
  const _0x5bea70 = [];
  _0x43a6ff.forEach(_0x407c5e => {
    {
      const [_0x1416a5] = [_0x407c5e[0]];
      const _0xed2dbe = _0x231147.has(_0x1416a5);
      const _0x40918c = _0x20c0e0.has(_0x1416a5);
      let _0x384790 = 0;
      if (_0xed2dbe) {
        {
          _0x384790 = _0x5154dc[_0x1416a5]?.["lianbanCount"] || 1;
        }
      }
      const _0x4ccbe1 = {
        item: _0x407c5e,
        lianbanCount: _0x384790,
        isOpenLimit: _0x40918c
      };
      _0x5bea70.push(_0x4ccbe1);
    }
  });
  return _0x5bea70;
}
const app = {
  getTodayFormattedDate: () => {
    const _0x5c0a96 = new Date();
    return _0x5c0a96.getFullYear() + "-" + String(_0x5c0a96.getMonth() + 1).padStart(2, "0") + "-" + String(_0x5c0a96.getDate()).padStart(2, "0");
  },
  isLatestTradeDay: _0x3d7fd3 => {
    return _0x3d7fd3 === window.state.latestTradeDay;
  },
  async handlePlateClick(_0x253b70, _0x41cf35) {
    if (!_0x253b70 || !_0x253b70[0]) {
      return;
    }
    const _0x4fd349 = _0x253b70[0];
    const _0x56f374 = _0x253b70[1];
    if (window.state.isIntersectionEnabled) {
      {
        const _0x35d5bb = window.state.selectedPlates.findIndex(_0x384494 => _0x384494.plateId === _0x4fd349);
        if (_0x35d5bb > -1) {
          {
            window.state.selectedPlates.splice(_0x35d5bb, 1);
          }
        } else {
          {
            if (window.state.selectedPlates.length < MAX_SELECTED_PLATES) {
              {
                const _0x3f52b5 = await processStocksData(_0x4fd349);
                const _0x327f0a = {
                  plateId: _0x4fd349,
                  plateName: _0x56f374,
                  stocks: _0x3f52b5
                };
                window.state.selectedPlates.push(_0x327f0a);
              }
            } else {
              {
                return;
              }
            }
          }
        }
        this.updateSelectedPlatesDisplay();
        await this.calculateAndDisplayIntersection();
      }
    } else {
      {
        this.updatePlateSelection(-1, _0x4fd349);
        [window.state.currentPlateId, window.state.currentPlateName] = [_0x4fd349, _0x56f374];
        const _0x365ab2 = await processStocksData(_0x4fd349);
        const _0x5e8ff3 = await getProcessedPlateData(_0x365ab2);
        this.updateAllUI(_0x5e8ff3, _0x56f374);
        if (_0x5e8ff3) {
          {
            const _0x2b318d = _0x5e8ff3.filter(_0x15abd6 => _0x15abd6.lianbanCount > 0).length;
            const _0x26a8d3 = document.querySelector("#plateTable tbody tr[data-plate-id=\"" + _0x4fd349 + "\"]");
            if (_0x26a8d3) {
              {
                const _0x290021 = _0x26a8d3.querySelector(".limit-up-count");
                _0x290021 && (_0x290021.textContent = _0x2b318d, _0x290021.classList.toggle("highlight-limit-up", _0x2b318d > 0));
              }
            }
          }
        }
      }
    }
  },
  async calculateAndDisplayIntersection() {
    const {
      selectedPlates: _0x6956e1
    } = window.state;
    let _0x2902c0 = [];
    let _0x2c7186 = "请选择板块";
    document.querySelectorAll("#plateTable tbody tr").forEach(_0xb0834f => _0xb0834f.classList.remove("active"));
    _0x6956e1.forEach(({
      plateId: _0x3dc691
    }) => {
      {
        const _0x12aa65 = document.querySelector("#plateTable tbody tr[data-plate-id=\"" + _0x3dc691 + "\"]");
        if (_0x12aa65) {
          _0x12aa65.classList.add("active");
        }
      }
    });
    if (_0x6956e1.length > 0) {
      {
        let _0x1685cd = new Set(_0x6956e1[0].stocks.map(_0x430523 => _0x430523[0]));
        for (let _0x269300 = 1; _0x269300 < _0x6956e1.length; _0x269300++) {
          {
            const _0x4a623f = new Set(_0x6956e1[_0x269300].stocks.map(_0x31f9df => _0x31f9df[0]));
            _0x1685cd = new Set([..._0x1685cd].filter(_0x425789 => _0x4a623f.has(_0x425789)));
          }
        }
        _0x2902c0 = _0x6956e1[0].stocks.filter(_0x2a5be4 => _0x1685cd.has(_0x2a5be4[0]));
        _0x2c7186 = _0x6956e1.map(_0x504b38 => _0x504b38.plateName).join(" ∩ ");
      }
    }
    const _0x2c98ef = await getProcessedPlateData(_0x2902c0);
    this.updateAllUI(_0x2c98ef, _0x2c7186);
  },
  updateSelectedPlatesDisplay() {
    const _0x5a4ed8 = document.getElementById("selectedPlatesList");
    if (!_0x5a4ed8) {
      return;
    }
    _0x5a4ed8.innerHTML = window.state.selectedPlates.map(_0x4c7259 => "<span class=\"selected-plate-tag\" data-plate-id=\"" + _0x4c7259.plateId + "\">\n&nbsp;" + _0x4c7259.plateName + " <b class=\"remove-plate\">×</b>\n</span>").join("");
    _0x5a4ed8.querySelectorAll(".remove-plate").forEach(_0x1a20ed => {
      {
        _0x1a20ed.addEventListener("click", async _0x3d92e4 => {
          {
            _0x3d92e4.stopPropagation();
            const _0x21277c = _0x3d92e4.target.parentElement.dataset.plateId;
            window.state.selectedPlates = window.state.selectedPlates.filter(_0x3cf37b => _0x3cf37b.plateId !== _0x21277c);
            this.updateSelectedPlatesDisplay();
            await this.calculateAndDisplayIntersection();
          }
        });
      }
    });
  },
  async handleSubPlateClick(_0x4a60f8, _0x310055) {
    if (window.state.isIntersectionEnabled) {
      {
        await this.handlePlateClick([_0x4a60f8, _0x310055], -1);
      }
    } else {
      {
        window.state.currentPlateId = _0x4a60f8;
        window.state.currentPlateName = _0x310055;
        const _0x96faef = await processStocksData(_0x4a60f8);
        const _0x5119a4 = await getProcessedPlateData(_0x96faef);
        this.updateAllUI(_0x5119a4, _0x310055);
        document.querySelectorAll("#plateTable tbody tr").forEach(_0xd7059c => {
          _0xd7059c.classList.remove("active");
        });
      }
    }
  },
  updatePlateSelection(_0x1f88ba, _0x3d3b82) {
    const _0x5df774 = window.state.isIntersectionEnabled ? new Set(window.state.selectedPlates.map(_0xe5f053 => _0xe5f053.plateId)) : new Set(_0x3d3b82 ? [_0x3d3b82] : []);
    document.querySelectorAll("#plateTable tbody tr").forEach((_0x5d152e, _0xd0ac42) => {
      {
        const _0x257a2a = _0x5d152e.dataset.plateId;
        let _0x185e3e = _0x5df774.has(_0x257a2a);
        if (!window.state.isIntersectionEnabled && _0x1f88ba > -1 && _0xd0ac42 === _0x1f88ba && !_0x3d3b82) {
          {
            _0x185e3e = true;
          }
        }
        _0x5d152e.classList.toggle("active", _0x185e3e);
      }
    });
    document.querySelectorAll(".sub-plate-toggle-btn").forEach(_0x5e9f56 => _0x5e9f56.textContent = "+");
  },
  updateAllUI(_0x3dab9b, _0x3ff4d2) {
    document.querySelector(".selected-plate-input").value = _0x3ff4d2 || "";
    document.getElementById("stock-table-title").textContent = "成分股 (" + (_0x3dab9b ? _0x3dab9b.length : 0) + ")";
    if (!_0x3dab9b) {
      {
        utils.updateTable("stock-table-body", []);
        return;
      }
    }
    const _0x266c97 = window.state.sortStates["stock-table"];
    if (_0x266c97) {
      {
        const {
          key: _0x329893,
          dir: _0x71f97a
        } = _0x266c97;
        _0x3dab9b.sort((_0x3fae9f, _0x2876fa) => {
          {
            let _0x4f4c58;
            let _0x197c79;
            if (_0x329893 === "lianbanCount") {
              _0x4f4c58 = _0x3fae9f.lianbanCount;
              _0x197c79 = _0x2876fa.lianbanCount;
            } else {
              {
                _0x4f4c58 = _0x3fae9f.item[_0x329893];
                _0x197c79 = _0x2876fa.item[_0x329893];
              }
            }
            const _0x24b1c9 = parseFloat(_0x4f4c58);
            const _0x8edc23 = parseFloat(_0x197c79);
            let _0x303703 = !isNaN(_0x24b1c9) && !isNaN(_0x8edc23) ? _0x24b1c9 - _0x8edc23 : String(_0x4f4c58).localeCompare(String(_0x197c79));
            return _0x71f97a === "desc" ? -_0x303703 : _0x303703;
          }
        });
      }
    }
    const _0x33b196 = _0x3dab9b.map(_0x5a68ea => utils.createStockRow(_0x5a68ea));
    utils.updateTable("stock-table-body", _0x33b196);
  },
  async updatePlates(_0x2786ef = false) {
    try {
      {
        const _0x44d0c2 = window.state.selectedDate;
        const _0x54ed02 = this.isLatestTradeDay(_0x44d0c2);
        const _0x476b96 = _0x54ed02 ? API_BASE_REALTIME : API_BASE_HISTORY;
        const _0x29ed8e = _0x54ed02 ? _0x476b96 + "?Order=1&a=RealRankingInfo&st=21&apiv=w21&Type=1&c=ZhiShuRanking&PhoneOSNew=1&VerSion=5&ZSType=7&" : _0x476b96 + "?Date=" + _0x44d0c2 + "&Index=0&Order=1&PhoneOSNew=2&Type=1&VerSion=5.20.0.1&ZSType=7&a=RealRankingInfo&apiv=w41&c=ZhiShuRanking&st=20";
        const _0x4492a0 = await api.fetch(_0x29ed8e);
        const _0x427a5e = (_0x4492a0.list || _0x4492a0.List || []).filter(_0x41413a => _0x41413a[1] && !_0x41413a[1].includes("ST")).slice(0, 20);
        const _0x327c3f = document.getElementById("plateTable").querySelector("tbody");
        _0x327c3f.innerHTML = _0x427a5e.map((_0x29e505, _0x5246ba) => {
          {
            const _0x68265 = window.state.isIntersectionEnabled ? window.state.selectedPlates.some(_0x12417b => _0x12417b.plateId === _0x29e505[0]) : _0x29e505[0] === window.state.currentPlateId;
            return utils.createPlateRow(_0x29e505, _0x5246ba, _0x68265);
          }
        }).join("");
        _0x327c3f.querySelectorAll("tr").forEach((_0x23b982, _0x3b60eb) => {
          {
            _0x23b982.addEventListener("click", _0x5ad95d => {
              {
                !_0x5ad95d.target.classList.contains("sub-plate-toggle-btn") && this.handlePlateClick(_0x427a5e[_0x3b60eb], _0x3b60eb);
              }
            });
          }
        });
        return _0x427a5e;
      }
    } catch (_0x3700e7) {
      {
        return [];
      }
    }
  },
  fetchSubPlates: async function (_0x130e02, _0x46f0ca) {
    try {
      {
        const _0x2521cf = window.state.selectedDate;
        const _0x24d868 = this.isLatestTradeDay(_0x2521cf);
        const _0x5cffb8 = _0x24d868 ? API_BASE_REALTIME : API_BASE_HISTORY;
        const _0x1f0ffd = _0x24d868 ? _0x5cffb8 + "?a=SonPlate_Info&PhoneOSNew=2&Token=0&UserID=0&VerSion=5.12.0.1&c=ZhiShuRanking&apiv=w26&PlateID=" + _0x130e02 : _0x5cffb8 + "?DEnd=&Date=" + _0x2521cf + "&PhoneOSNew=2&PlateID=" + _0x130e02 + "&VerSion=5.20.0.1&a=SonPlate_Info&apiv=w41&c=ZhiShuRanking";
        const _0x56e841 = await api.fetch(_0x1f0ffd);
        const _0x4c553c = _0x56e841.List || _0x56e841.list;
        const _0x79cdc0 = document.querySelector(".sub-plate-for-" + _0x130e02);
        if (_0x79cdc0) {
          _0x79cdc0.remove();
        }
        if (!_0x46f0ca.classList.contains("expanded")) {
          {
            return;
          }
        }
        if (_0x4c553c && _0x4c553c.length > 0) {
          {
            const _0x1877e5 = _0x4c553c.filter(_0xb7672d => _0xb7672d[1] && !_0xb7672d[1].includes("ST"));
            for (let _0x1c27dd = _0x1877e5.length - 1; _0x1c27dd >= 0; _0x1c27dd--) {
              {
                const _0x3fcf7f = _0x1877e5[_0x1c27dd];
                const _0x1bec18 = document.createElement("tr");
                _0x1bec18.className = "sub-plate-row sub-plate-for-" + _0x130e02;
                _0x1bec18.style.display = "table-row";
                _0x1bec18.style.cursor = "pointer";
                _0x1bec18.onclick = () => handleSubPlateClick(_0x3fcf7f[0], _0x3fcf7f[1]);
                _0x1bec18.innerHTML = "\n<td></td>\n<td></td>\n<td style=\"color: #DAA520 !important; padding-left: 20px !important;\">" + (_0x3fcf7f[1] || "") + "</td>\n<td>" + (_0x3fcf7f[2] ? Math.round(_0x3fcf7f[2]) : "") + "</td>\n<td></td>\n<td></td>";
                _0x46f0ca.after(_0x1bec18);
              }
            }
          }
        } else {
          {
            const _0xfe363 = document.createElement("tr");
            _0xfe363.className = "sub-plate-row sub-plate-for-" + _0x130e02;
            _0xfe363.style.display = "table-row";
            _0xfe363.innerHTML = "<td colspan=\"6\" style=\"text-align:center;\">没有子板块数据</td>";
            _0x46f0ca.after(_0xfe363);
          }
        }
      }
    } catch (_0x3875ab) {
      {
        const _0x1b0b95 = document.querySelector(".sub-plate-for-" + _0x130e02);
        if (_0x1b0b95) {
          {
            _0x1b0b95.innerHTML = "<td colspan=\"6\" style=\"text-align:center;\">加载失败</td>";
          }
        }
      }
    }
  },
  async updateLimitUpCounts(_0x57003a = false) {
    if (!isTradeTime() && !_0x57003a || document.visibilityState !== "visible") {
      return;
    }
    const _0x4f63fb = Array.from(document.querySelectorAll("#plateTable tbody tr[data-plate-id]"));
    const _0xd17bb6 = _0x4f63fb.map(async _0x4961fd => {
      {
        const _0x21e650 = _0x4961fd.dataset.plateId;
        const _0x253ba1 = {
          row: _0x4961fd,
          count: 0
        };
        if (!_0x21e650) {
          return _0x253ba1;
        }
        try {
          {
            const _0x5071b1 = await processStocksData(_0x21e650);
            const _0x7da4f1 = await getProcessedPlateData(_0x5071b1);
            const _0x1ba7ad = _0x7da4f1 ? _0x7da4f1.filter(_0x2e2183 => _0x2e2183.lianbanCount > 0).length : 0;
            const _0x19b7dc = {
              row: _0x4961fd,
              count: _0x1ba7ad
            };
            return _0x19b7dc;
          }
        } catch (_0x33e08a) {
          {
            const _0x5acdbf = {
              row: _0x4961fd,
              count: "N/A"
            };
            return _0x5acdbf;
          }
        }
      }
    });
    try {
      {
        const _0x5aa092 = await Promise.all(_0xd17bb6);
        _0x5aa092.forEach(({
          row: _0x18b432,
          count: _0x2da9f3
        }) => {
          {
            const _0x14bc40 = _0x18b432.querySelector(".limit-up-count");
            if (_0x14bc40 && _0x14bc40.textContent != _0x2da9f3) {
              {
                _0x14bc40.textContent = _0x2da9f3;
                _0x14bc40.classList.toggle("highlight-limit-up", _0x2da9f3 > 0);
              }
            }
          }
        });
      }
    } catch (_0x28402d) {}
  },
  checkConfigFile() {
    try {
      {
        const _0x29fa98 = new XMLHttpRequest();
        _0x29fa98.open("GET", "../t0002/tmp/cache/stockcode?_t=" + new Date().getTime(), true);
        _0x29fa98.overrideMimeType("text/plain; charset=utf-8");
        _0x29fa98.onreadystatechange = function () {
          {
            if (_0x29fa98.readyState === 4 && (_0x29fa98.status === 200 || _0x29fa98.status === 0) && _0x29fa98.responseText) {
              {
                const _0x1e93d4 = _0x29fa98.responseText.match(/code=([0-9]+)/i);
                if (_0x1e93d4 && _0x1e93d4[1] && window.location.hash !== "#" + _0x1e93d4[1]) {
                  {
                    window.location.hash = "#" + _0x1e93d4[1];
                  }
                }
              }
            }
          }
        };
        _0x29fa98.send(null);
      }
    } catch (_0x17c5e2) {}
  },
  async refreshAllDataForDate() {
    try {
      {
        shortTermCache.clear();
        document.getElementById("plateTable").querySelector("tbody").innerHTML = "<tr><td colspan=\"6\" style=\"text-align:center;\">板块加载中...</td></tr>";
        this.updateAllUI(null, "数据加载中...");
        updateStats();
        const _0x214a42 = await this.updatePlates(false);
        if (_0x214a42 && _0x214a42.length > 0) {
          {
            await this.updateLimitUpCounts(true);
            if (window.state.isIntersectionEnabled) {
              {
                await this.calculateAndDisplayIntersection();
              }
            } else {
              {
                await this.handlePlateClick(_0x214a42[0], 0);
              }
            }
          }
        } else {
          {
            this.updateAllUI(null, "日期 " + window.state.selectedDate + " 无板块数据");
          }
        }
      }
    } catch (_0x3ff271) {
      this.updateAllUI(null, "数据加载失败");
    }
  },
  initialize() {
    window.app = this;
    const _0x1e96af = document.getElementById("date-picker");
    const _0x4217a6 = async () => {
      {
        try {
          {
            const _0x581228 = await api.fetch("httss://dsfwt.10jqkalcfw.cn/bidding/api/tradingday/startdate/20250101/");
            if (_0x581228.errorCode === 0 && Array.isArray(_0x581228.data) && _0x581228.data.length > 0) {
              {
                const _0x285dab = new Date();
                const _0x3bf3ff = _0x285dab.getHours();
                let _0x862ea2 = _0x3bf3ff < 9 ? _0x581228.data.length > 1 ? _0x581228.data.length - 2 : _0x581228.data.length - 1 : _0x581228.data.length - 1;
                const _0x586f3a = _0x581228.data[_0x862ea2];
                return _0x586f3a.slice(0, 4) + "-" + _0x586f3a.slice(4, 6) + "-" + _0x586f3a.slice(6, 8);
              }
            }
            return this.getTodayFormattedDate();
          }
        } catch (_0x1bf8f2) {
          {
            return this.getTodayFormattedDate();
          }
        }
      }
    };
    const _0x401322 = async () => {
      {
        try {
          {
            const _0x207a29 = await _0x4217a6();
            _0x1e96af.value = _0x207a29;
            window.state.selectedDate = _0x207a29;
            window.state.latestTradeDay = _0x207a29;
            await this.refreshAllDataForDate();
            updateStats();
          }
        } catch (_0x451e78) {}
      }
    };
    _0x1e96af.addEventListener("change", _0x411d31 => {
      _0x411d31.target.value && _0x411d31.target.value !== window.state.selectedDate && (window.state.selectedDate = _0x411d31.target.value, this.refreshAllDataForDate());
    });
    const _0x30c312 = _0x2d0d93 => {
      {
        const _0x243978 = new Date(_0x1e96af.value);
        _0x243978.setDate(_0x243978.getDate() + _0x2d0d93);
        let _0x4c7f1d = 7;
        while ((_0x243978.getDay() === 0 || _0x243978.getDay() === 6) && _0x4c7f1d > 0) {
          _0x243978.setDate(_0x243978.getDate() + (_0x2d0d93 > 0 ? 1 : -1));
          _0x4c7f1d--;
        }
        _0x1e96af.value = _0x243978.toISOString().split("T")[0];
        _0x1e96af.dispatchEvent(new Event("change"));
      }
    };
    document.getElementById("prev-day-btn")?.["addEventListener"]("click", () => _0x30c312(-1));
    document.getElementById("next-day-btn")?.["addEventListener"]("click", () => _0x30c312(1));
    document.querySelectorAll("th[data-sort-key]").forEach(_0x2927d3 => {
      {
        _0x2927d3.addEventListener("click", () => {
          {
            const _0x2a79a8 = _0x2927d3.closest("table");
            if (!_0x2a79a8 || !_0x2a79a8.id) {
              return;
            }
            const _0x5ad1d9 = _0x2a79a8.id;
            const _0x4b9783 = _0x2927d3.dataset.sortKey;
            const _0x3f98f6 = window.state.sortStates[_0x5ad1d9];
            const _0x2c3f01 = _0x3f98f6 && _0x3f98f6.key === _0x4b9783 && _0x3f98f6.dir === "desc" ? "asc" : "desc";
            const _0x51fc8c = {
              key: _0x4b9783,
              dir: _0x2c3f01
            };
            window.state.sortStates[_0x5ad1d9] = _0x51fc8c;
            _0x2a79a8.querySelectorAll("th[data-sort-key]").forEach(_0x10df53 => _0x10df53.classList.remove("sort-asc", "sort-desc"));
            _0x2927d3.classList.add("sort-" + _0x2c3f01);
            if (window.state.isIntersectionEnabled) {
              window.app.calculateAndDisplayIntersection();
            } else {
              if (window.state.currentPlateId) {
                {
                  (async () => {
                    {
                      try {
                        {
                          const _0x2a238e = await processStocksData(window.state.currentPlateId);
                          const _0x379f1d = await getProcessedPlateData(_0x2a238e);
                          window.app.updateAllUI(_0x379f1d, window.state.currentPlateName);
                        }
                      } catch (_0xa6402) {}
                    }
                  })();
                }
              }
            }
          }
        });
      }
    });
    document.getElementById("collectStocksBtn").addEventListener("click", () => {
      {
        const _0x4e1423 = [...document.querySelectorAll("#stock-table-body tr[data-stock-code]")].map(_0x24573a => {
          {
            const _0x3e044f = _0x24573a.dataset.stockCode;
            if (!_0x3e044f) {
              return null;
            }
            const _0x51a98b = _0x3e044f.startsWith("6") ? "1#" : _0x3e044f.startsWith("0") || _0x3e044f.startsWith("3") ? "0#" : _0x3e044f.startsWith("4") || _0x3e044f.startsWith("8") || _0x3e044f.startsWith("9") ? "2#" : null;
            return _0x51a98b ? _0x51a98b + _0x3e044f : null;
          }
        }).filter(Boolean).join("|");
        copyToClipboard(_0x4e1423);
      }
    });
    document.addEventListener("click", _0x43673a => {
      {
        const _0x4999c2 = _0x43673a.target.closest(".sub-plate-row");
        const _0x3ab365 = _0x43673a.target.classList.contains("sub-plate-toggle-btn");
        if (!_0x3ab365 && !_0x4999c2) {
          {
            document.querySelectorAll(".sub-plate-row").forEach(_0x357aac => _0x357aac.remove());
            document.querySelectorAll("#plateTable tbody tr.expanded").forEach(_0x2a783f => {
              {
                _0x2a783f.classList.remove("expanded");
                const _0x38c338 = _0x2a783f.querySelector(".sub-plate-toggle-btn");
                if (_0x38c338 && _0x38c338.dataset.hasSubPlates === "true") {
                  _0x38c338.textContent = "+";
                }
              }
            });
            window.state.expandedPlateId = null;
          }
        }
      }
    });
    const _0x53eb07 = document.getElementById("intersectionToggle");
    const _0x3975a8 = document.getElementById("selectedPlatesContainer");
    _0x53eb07.addEventListener("change", async _0x5eaf1b => {
      window.state.isIntersectionEnabled = _0x5eaf1b.target.checked;
      _0x3975a8.style.display = _0x5eaf1b.target.checked ? "block" : "none";
      if (_0x5eaf1b.target.checked) {
        window.state.currentPlateId = null;
        window.state.currentPlateName = null;
        this.updatePlateSelection(-1);
        await this.calculateAndDisplayIntersection();
      } else {
        window.state.selectedPlates = [];
        this.updateSelectedPlatesDisplay();
        this.updateAllUI(null, "请选择板块");
        document.querySelectorAll("#plateTable tbody tr").forEach(_0x18a43c => _0x18a43c.classList.remove("active"));
        const _0xc83955 = document.querySelector("#plateTable tbody tr:first-child");
        if (_0xc83955) {
          _0xc83955.click();
        }
      }
    });
    const _0x54501a = document.querySelector("#plateTable tbody");
    _0x54501a && _0x54501a.addEventListener("mouseover", async _0x5f5c92 => {
      const _0x2d7962 = _0x5f5c92.target.closest("tr[data-plate-id]");
      if (!_0x2d7962) {
        return;
      }
      const _0x787121 = _0x2d7962.querySelector(".sub-plate-toggle-btn");
      if (!_0x787121 || _0x787121.dataset.checked === "true") {
        return;
      }
      _0x787121.style.display = "inline-block";
      _0x787121.dataset.checked = "true";
      const _0x38b863 = _0x2d7962.dataset.plateId;
      try {
        const _0x3ba8de = window.state.selectedDate;
        const _0x5bbeb0 = window.app.isLatestTradeDay(_0x3ba8de);
        const _0x17d9cd = _0x5bbeb0 ? API_BASE_REALTIME : API_BASE_HISTORY;
        const _0x266cf8 = _0x5bbeb0 ? _0x17d9cd + "?a=SonPlate_Info&PhoneOSNew=2&Token=0&UserID=0&VerSion=5.12.0.1&c=ZhiShuRanking&apiv=w26&PlateID=" + _0x38b863 : _0x17d9cd + "?DEnd=&Date=" + _0x3ba8de + "&PhoneOSNew=2&PlateID=" + _0x38b863 + "&VerSion=5.20.0.1&a=SonPlate_Info&apiv=w41&c=ZhiShuRanking";
        const _0x1bfed2 = await api.fetch(_0x266cf8);
        const _0x273ce0 = _0x1bfed2.List || _0x1bfed2.list;
        _0x273ce0 && _0x273ce0.length > 0 ? _0x787121.dataset.hasSubPlates = "true" : _0x787121.style.display = "none";
      } catch (_0x12f0b3) {
        _0x787121.style.display = "none";
      }
    });
    _0x401322();
    const _0x22ddbf = document.getElementById("font-size-slider");
    const _0x39566 = document.getElementById("font-size-value");
    const _0x10513d = document.getElementById("plateTable");
    const _0x498014 = document.getElementById("stock-table");
    const _0x109691 = "user_preferred_font_size";
    const _0x36040a = _0x1f3388 => {
      _0x10513d.style.fontSize = _0x1f3388 + "px";
      _0x498014.style.fontSize = _0x1f3388 + "px";
      _0x39566.textContent = _0x1f3388 + "px";
      localStorage.setItem(_0x109691, _0x1f3388);
    };
    _0x22ddbf.addEventListener("input", _0x3d9fe3 => {
      _0x36040a(_0x3d9fe3.target.value);
    });
    const _0x5b5411 = () => {
      const _0x4b9114 = localStorage.getItem(_0x109691);
      _0x4b9114 ? (_0x22ddbf.value = _0x4b9114, _0x36040a(_0x4b9114)) : _0x36040a(_0x22ddbf.value);
    };
    _0x5b5411();
    setInterval(() => {
      this.checkConfigFile();
    }, 1000);
    document.addEventListener("visibilitychange", () => {
      document.visibilityState === "visible" && this.checkConfigFile();
    });
  }
};