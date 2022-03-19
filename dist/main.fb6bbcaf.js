// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/clock.js":[function(require,module,exports) {
var clock = document.querySelector("h2#clock");

function getClock() {
  var getHours = String(new Date().getHours()).padStart(2, "0");
  var getMinutes = String(new Date().getMinutes()).padStart(2, "0");
  var getSeconds = String(new Date().getSeconds()).padStart(2, "0");
  clock.innerHTML = "".concat(getHours, " : \n  ").concat(getMinutes, " : \n  ").concat(getSeconds);
}

setInterval(getClock, 1000);
},{}],"js/greetings.js":[function(require,module,exports) {
var loginForm = document.querySelector("#login-form");
var loginInput = document.querySelector("#login-form input");
var greeting = document.querySelector("#greeting");
var STORAGE_KEY = "username";
var HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  var username = loginInput.value;
  localStorage.setItem(STORAGE_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings();
}

function paintGreetings() {
  var username = localStorage.getItem(STORAGE_KEY);
  greeting.innerHTML = "Hello ".concat(username);
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (localStorage.getItem(STORAGE_KEY) === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}
},{}],"js/quotes.js":[function(require,module,exports) {
var quotes = [{
  quote: "나 자신에 대한 자신감을 잃으면 온 세상이 나의 적이 된다.",
  author: "랄프 왈도 에머슨"
}, {
  quote: "항상 맑으면 사막이 된다. 비가 내리고 바람이 불어야만 비옥한 땅이 된다.",
  author: "스페인 속담"
}, {
  quote: "인생에서 가장 슬픈 세 가지. 할 수 있었는데, 해야 했는데, 해야만 했는데.",
  author: "루이스 E. 분"
}, {
  quote: "같은 실수를 두려워하되 새로운 실수를 두려워하지 마라. 실수는 곧 경험이다.",
  author: "도서 ‘어떤 하루’ 中"
}, {
  quote: "오늘은 당신의 남은 인생 중, 첫 번째 날이다.",
  author: "영화 ‘아메리칸 뷰티’ 中"
}, {
  quote: "인생은 곱셈이다. 어떤 기회가 와도 내가 제로면 아무런 의미가 없다.",
  author: "나카무라 미츠루"
}, {
  quote: "별은 바라보는 자에게 빛을 준다.",
  author: "도서 ‘드래곤 라자’ 中"
}, {
  quote: "생명이 있는 한 희망이 있다. 실망을 친구로 삼을 것인가, 아니면 희망을 친구로 삼을 것인가.",
  author: "J.위트"
}, {
  quote: "실패란 넘어지는 것이 아니라, 넘어진 자리에 머무는 것이다.",
  author: "도서 ‘프린세스, 라 브라바!’ 中"
}, {
  quote: "슬픔이 그대의 삶으로 밀려와 마음을 흔들고 소중한 것을 쓸어가 버릴 때면 그대 가슴에 대고 말하라. “이것 또한 지나가리라”",
  author: "랜터 윌슨 스미스"
}];
var quote = document.querySelector("#quote span:first-child");
var author = document.querySelector("#quote span:last-child");
var ramdomNumber = Math.floor(Math.random() * quotes.length);
var todaysQuote = quotes[ramdomNumber];
quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;
},{}],"js/todo.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var toDoForm = document.getElementById("todo-form");
var toDoList = document.getElementById("todo-list");
var toDoInput = document.querySelector("#todo-form input");
var TODOS_KEY = "todos";
var toDos = [];

function savedToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  var li = event.target.parentElement;
  li.remove();
  var li_ID = li.id;
  console.log(_typeof(parseInt(li_ID)));
  toDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li_ID);
  });
  savedToDos();
}

function paintToDo(newTodo) {
  var li = document.createElement("li");
  li.id = newTodo.id;
  var span = document.createElement("span");
  span.innerText = newTodo.text;
  var button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  var newTodo = toDoInput.value;
  toDoInput.value = "";
  var newTodoObj = {
    text: newTodo,
    id: Date.now()
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  savedToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
var savedToDoss = localStorage.getItem(TODOS_KEY);

if (savedToDoss !== null) {
  var parseToDos = JSON.parse(savedToDoss); // localStorage에 받은것들을 배열로 저장

  toDos = parseToDos;
  parseToDos.forEach(paintToDo); // parseToDos 의 배열 원소들 하나하나 함수로 받기 가능 / paintToDo의 매개변수로 원소들이 들어간다.
  // paintToDo({text: "a", id:12121212})
}
},{}],"js/weather.js":[function(require,module,exports) {
var API_KEY = "15f1bcbbaf67df2baa68485eb095fa9f";

function onGeoOk(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  console.log("You live it latitude : ".concat(lat, " , longitude : ").concat(lon));
  var url = "https://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(lon, "&appid=").concat(API_KEY, "&units=metric");
  fetch(url) //
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    var city = document.querySelector("#weather span:last-child");
    var weather = document.querySelector("#weather span:first-child");
    city.innerHTML = data.name;
    weather.innerHTML = "".concat(data.weather[0].main, " / ").concat(data.main.temp, " ");
  });
}

function onGeoError() {
  alert("날씨못찾겠어");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
},{}],"js/background.js":[function(require,module,exports) {
var images = [];

for (var index = 0; index < 3; index++) {
  images[index] = "".concat(index, ".jpg");
}

var chosenImage = images[Math.floor(Math.random() * images.length)];
var bgImage = document.createElement("img");
bgImage.src = "img/".concat(chosenImage);
document.body.appendChild(bgImage);
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

require("./clock");

require("./greetings");

require("./quotes");

require("./todo");

require("./weather");

require("./background");
},{"./clock":"js/clock.js","./greetings":"js/greetings.js","./quotes":"js/quotes.js","./todo":"js/todo.js","./weather":"js/weather.js","./background":"js/background.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "42275" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map