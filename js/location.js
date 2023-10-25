
    var pathname = window.location.pathname.replace(/^(.+)\/$/, "$1");
    if (pathname !== window.location.pathname) {
      window.location.pathname = pathname;
    }
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('index.htmlsw.426a177e1ad90720deb625ed0de7b0ee.js');
      window.swPromise = Promise.race([
        new Promise(function (resolve) { setTimeout(resolve, 4000) }),
        new Promise(function (resolve) {
          navigator.serviceWorker.addEventListener('message', function messageListener(event) {
            if (event.data.msg == "active") {
              resolve()
            }
          })
          navigator.serviceWorker.ready.then(function (registration) {
            var interval
            function checkActive() {
              if (registration.active) {
                clearInterval(interval)
                resolve()
              }
            }
            interval = setInterval(checkActive, 15)
          })
        })
      ]);
    }
    ; (function (adata) {
      window["registerAdata"] = function registerAdata(data) { adata = Object.assign(adata, data) }
      window["getAdata"] = function getAdata() { return adata }
    })({})
      ; (function (styles) {
        window["__set_style__"] = function setStyle(id, style) { styles[id] = style }
        window["__require_style__"] = function requireStyle(id) { return styles[id] }
      })({})
      ; (function (blocks) {
        window["blockJsonp"] = function blockJsonpCallback(id, view, content) {
          blocks[id] = {
            view: view,
            content: content
          }
        }
        window["__require_block__"] = function requireBlock(deps) {
          var ReactDOM = deps.ReactDOM;
          var React = deps.React;
          var _ = deps._;
          var classNames = deps.classNames;
          var PropTypes = deps.PropTypes;
          var editorModule = deps.editorModule;
          return function (id) {
            var block = blocks[id]
            if (!block || !block.view) {
              return null
            }
            var exports = {}
            function requireStub(path) {
              if (path === 'weblium/editor') {
                return editorModule
              }
            }
            try {
              block.view(exports, requireStub, ReactDOM, React, PropTypes, _, classNames)
            } catch (e) {
              console.error('Failed to load block', { error: e.message, stack: e.stack })
            }
            return { view: exports.default, content: block.content }
          }
        }
      })({})
      ; (function (views) {
        window["viewJsonp"] = function viewJsonpCallback(id, view) {
          views[id] = {
            view: view,
          }
        }
        window["__require_view__"] = function requireView(deps) {
          return function (id) {
            var block = views[id]
            if (!block || !block.view) {
              return null
            }
            var exports = {}
            function requireStub(path) { }
            try {
              block.view(exports, requireStub)
            } catch (e) {
              console.error('Failed to load block', { error: e.message, stack: e.stack })
            }
            return exports.default
          }
        }
      })({});

    ; (function () {
      if (typeof window.CustomEvent === "function") return false;
      function CV(e, p) {
        p = p || { bubbles: false, cancelable: false, detail: null };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(e, p.bubbles, p.cancelable, p.detail);
        return evt;
      }
      CV.prototype = window.Event.prototype;
      window.CustomEvent = CV;
    })();


    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    if (!Element.prototype.closest) {
      Element.prototype.closest = function (s) {
        var el = this;
        do {
          if (Element.prototype.matches.call(el, s)) return el;
          el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
      };
    }


    (function () {
      if (Node.prototype.replaceChildren === undefined) {
        Node.prototype.replaceChildren = function (...args) {
          while (this.lastChild) {
            this.removeChild(this.lastChild);
          }
          if (args.length) {
            this.append(...args);
          }
        }
      }
    }());


    if (!window.localStorage || !window.sessionStorage) (function () {
      var Storage = function (type) {
        function createCookie(name, value, days) {
          var date, expires;
          if (days) {
            date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
          } else {
            expires = "";
          }
          document.cookie = name + "=" + value + expires + "; path=/";
        }
        function readCookie(name) {
          var nameEQ = name + "=",
            ca = document.cookie.split(';'),
            i, c;
          for (i = 0; i < ca.length; i++) {
            c = ca[i];
            while (c.charAt(0) == ' ') {
              c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) == 0) {
              return c.substring(nameEQ.length, c.length);
            }
          }
          return null;
        }
        function setData(data) {
          data = JSON.stringify(data);
          if (type == 'session') {
            window.name = data;
          } else {
            createCookie('localStorage', data, 365);
          }
        }
        function clearData() {
          if (type == 'session') {
            window.name = '';
          } else {
            createCookie('localStorage', '', 365);
          }
        }
        function getData() {
          var data = type == 'session' ? window.name : readCookie('localStorage');
          return data ? JSON.parse(data) : {};
        }
        var data = getData();
        function numKeys() {
          var n = 0;
          for (var k in data) {
            if (data.hasOwnProperty(k)) {
              n += 1;
            }
          }
          return n;
        }
        return {
          clear: function () {
            data = {};
            clearData();
            this.length = numKeys();
          },
          getItem: function (key) {
            key = encodeURIComponent(key);
            return data[key] === undefined ? null : data[key];
          },
          key: function (i) {
            var ctr = 0;
            for (var k in data) {
              if (ctr == i) return decodeURIComponent(k);
              else ctr++;
            }
            return null;
          },
          removeItem: function (key) {
            key = encodeURIComponent(key);
            delete data[key];
            setData(data);
            this.length = numKeys();
          },
          setItem: function (key, value) {
            key = encodeURIComponent(key);
            data[key] = String(value);
            setData(data);
            this.length = numKeys();
          },
          length: 0
        };
      };
      if (!window.localStorage) window.localStorage = new Storage('local');
      if (!window.sessionStorage) window.sessionStorage = new Storage('session');
    })();

    !function () { "use strict"; var e = function (e) { e.setAttribute("rel", "stylesheet"), e.setAttribute("type", "text/css"), e.setAttribute("media", "all"), e.setAttribute("preloaded", "true"), e.removeAttribute("as") }, t = function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; e.setAttribute("preloaded", t ? "error" : "true"), e.removeEventListener("load", window.invokePreload.onLoad), e.removeAttribute("onload"), e.removeAttribute("onerror"), e.onload = null }; !function () { try { new Function("(a = 0) => a") } catch (e) { return !1 } }(); window.invokePreload = window.invokePreload || {}, invokePreload.onLoad = t, invokePreload.onScriptLoad = t, invokePreload.onScriptError = function (e) { return t(e, !0) }, invokePreload.onStyleLoad = function (t) { return -1 === [].map.call(document.styleSheets, function (e) { return "all" === e.media.mediaText ? e.href : null }).indexOf(t.href) && (window.requestAnimationFrame ? window.requestAnimationFrame(function () { return e(t) }) : e(t)), t.removeAttribute("onload"), t } }();

    var preload_polyfill = function () { "use strict"; var e = function (e) { e.setAttribute("rel", "stylesheet"), e.setAttribute("type", "text/css"), e.setAttribute("media", "all"), e.setAttribute("preloaded", "true"), e.removeAttribute("as") }, t = function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; e.setAttribute("preloaded", t ? "error" : "true"), e.removeEventListener("load", window.invokePreload.onLoad), e.removeAttribute("onload"), e.removeAttribute("onerror"), e.onload = null }, n = function () { try { return new Function("(a = 0) => a"), !0 } catch (e) { return !1 } }(), r = function (n, r) { if ("style" === r.getAttribute("as")) return t(r), o = r, -1 === [].map.call(document.styleSheets, function (e) { return "all" === e.media.mediaText ? e.href : null }).indexOf(o.href) && (window.requestAnimationFrame ? window.requestAnimationFrame(function () { return e(o) }) : e(o)), void o.removeAttribute("onload"); var o; t(r), r.dispatchEvent(new CustomEvent("load", n)) }, o = function (e, n) { t(n, !0) }, u = function (e) { var t, n; (t = 3e3, n = fetch(e.href, { method: "GET", mode: "cors", cache: "force-cache" }), new Promise(function (e, r) { setTimeout(function () { return r(new Error("timeout")) }, t), n.then(e, r) })).then(function (t) { t.ok ? r(null, e) : o(0, e) }).catch(function () { return o(0, e) }) }, i = function (e) { if (window.fetch) return u(e); var t = new XMLHttpRequest; t.addEventListener("load", function (n) { t.status >= 200 && t.status < 300 ? r(n, e) : o(0, e) }), t.open("index.htmlGET", e.href, !0), t.timeout = 3e3, t.send() }, a = function (e) { switch (e.getAttribute("as")) { case "script": !function (e) { "nomodule" === e.getAttribute("rel") && e.setAttribute("rel", "preload"), i(e) }(e); break; case "image": !function (e) { var t = new Image; t.onload = function (t) { return r(t, e) }, t.onerror = function (t) { return o(0, e) }, t.src = e.href }(e); break; case "style": !function (e) { e.onload = function (t) { return r(t, e) }, e.onerror = function (t) { return o(0, e) }, e.media = "none", e.type = "text/css", e.rel = "stylesheet" }(e); break; case "font": !function (e) { document.fonts && e.hasAttribute("name") ? new FontFace(e.getAttribute("name"), "url(".concat(e.href, ")"), { weight: e.getAttribute("weight") || "normal", style: "normal" }).load(e.href).then(function (t) { document.fonts.add(t), r(null, e) }).catch(function () { }) : i(e) }(e); break; default: i(e) } }, l = [], c = function (e) { -1 === l.indexOf(e.href) && (function (e) { if (("script" === e.getAttribute("as") || "worker" === e.getAttribute("as")) && ("nomodule" === e.getAttribute("rel") || e.hasAttribute("module"))) { var t = "nomodule" === e.getAttribute("rel"); if (e.hasAttribute("module") && !n || t && n) return !0 } return !1 }(e) || (a(e), l.push(e.href))) }, d = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'link[rel="preload"]'; if (window.MutationObserver) { var t = new MutationObserver(function (e) { return function (e) { for (var t = 0, n = e.length; t < n; t++)for (var r = e[t].addedNodes, o = 0, u = r.length; o < u; o++) { var i = r[o]; "LINK" !== i.nodeName || !i.hasAttribute("rel") || "preload" !== i.getAttribute("rel") && "nomodule" !== i.getAttribute("rel") || c(i) } }(e) }).observe(document.documentElement, { childList: !0, subtree: !0 }); document.addEventListener("DOMContentLoaded", function () { t && t.disconnect() }) } else var n = setInterval(function () { "complete" == document.readyState && (clearInterval(n), s(e)) }, 50) }, s = function () { for (var e, t = function (e) { for (var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document).querySelectorAll(e), n = [], r = [], o = 0, u = t.length; o < u; ++o) { var i = t[o]; -1 === r.indexOf(i.href) && (r.push(i.href), n.push(i)) } return n }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'link[rel="preload"]'); void 0 !== (e = t.shift());)c(e) }; return function () { try { if (!document.createElement("link").relList.supports("preload")) throw Error } catch (t) { s(e = 'link[rel="preload"]'), d(e) } var e }() }();

    var preload_polyfill_invoke = function () { "use strict"; var t = function (t, e, r) { var n = document.createElement("script"); return n.async = e, n.onload = r, n.onerror = r, n.setAttribute("src", t.href), t.integrity && (n.integrity = t.integrity), t.hasAttribute("crossorigin") && n.setAttribute("crossorigin", t.getAttribute("crossorigin")), t.insertAdjacentElement ? t.insertAdjacentElement("afterend", n) : t.parentNode.appendChild(n), n }, e = function (t) { t.setAttribute("rel", "stylesheet"), t.setAttribute("type", "text/css"), t.setAttribute("media", "all"), t.setAttribute("preloaded", "true"), t.removeAttribute("as") }, r = function (t) { return -1 === [].map.call(document.styleSheets, function (t) { return "all" === t.media.mediaText ? t.href : null }).indexOf(t.href) && (window.requestAnimationFrame ? window.requestAnimationFrame(function () { return e(t) }) : e(t)), t.removeAttribute("onload"), t }, n = function () { try { return new Function("(a = 0) => a"), !0 } catch (t) { return !1 } }(), i = function (t) { if (("script" === t.getAttribute("as") || "worker" === t.getAttribute("as")) && ("nomodule" === t.getAttribute("rel") || t.hasAttribute("module"))) { var e = "nomodule" === t.getAttribute("rel"); if (t.hasAttribute("module") && !n || e && n) return !0 } return !1 }, o = function (t) { for (var e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document).querySelectorAll(t), r = [], n = [], i = 0, o = e.length; i < o; ++i) { var u = e[i]; -1 === n.indexOf(u.href) && (n.push(u.href), r.push(u)) } return r }, u = !0, s = function e(r, n, i) { "true" === r.getAttribute("preloaded") ? t(r, n, i) : "error" === r.getAttribute("preloaded") ? i() : setTimeout(function () { e(r, n, i) }, 10) }, a = function () { window.performance && window.performance.now }; document.addEventListener("DOMContentLoaded", function () { a(); for (var t, e = o("link[rel='preload'][as='script']"), r = [], n = []; void 0 !== (t = e.shift());)i(t) || (t.hasAttribute("critical") ? r.push(t) : n.push(t)); u = 0 === r.length, function (t) { for (var e = []; t.length;)e.push(new Promise(function (e) { s(t.shift(), !1, e) })); return Promise.all(e) }(r).then(function () { return function (t) { for (var e = []; t.length;)e.push(new Promise(function (e) { s(t.shift(), u, e) })); return Promise.all(e) }(n) }).then(function () { document.dispatchEvent(new CustomEvent("AllScriptsExecuted")), a() }) }); return function (e) { for (var n, u = o("link[rel='preload']", e); void 0 !== (n = u.shift());)"script" === n.getAttribute("as") ? i(n) || t(n, !1) : "style" === n.getAttribute("as") && r(n) } }();

