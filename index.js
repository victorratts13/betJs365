function __getOwnPropertyDescriptor(e, t) {
    try {
        return Object.getOwnPropertyDescriptor(e, t)
    } catch (n) {
        return {
            configurable: !1,
            enumerable: !0,
            value: e[t],
            writable: !0
        }
    }
}

function __defineProperty(e, t, n) {
    try {
        Object.defineProperty(e, t, n)
    } catch (i) {}
}

function override(e, t, n) {}

function final(e, t) {}

function GetCompiledAsset(e) {
    return ErrorReporter.Trace(null, "GetCompiledAsset call outside of module definition."), ""
}

function RegisterCompiledAsset(e, t) {}

function Harness(e) {
    return null
}

function JasmineSpec(e) {
    return null
}

function lazyStaticInit(e) {
    return function(t) {
        var n = !0,
            i = function() {
                var i = t.apply(this, arguments);
                return n && (n = !1, e()), i
            };
        return i.prototype = t.prototype, i
    }
}

function $timestamp(e) {
    "console" in window && "timeStamp" in console && "object" != typeof console.timeStamp && -1 == console.timeStamp.toString().indexOf("__BROWSERTOOLS_CONSOLE_SAFEFUNC") && console.timeStamp(e)
}

function $warn(e) {}

function $time(e) {}

function $timeEnd(e) {}

function $ots() {
    "console" in window && console.log(Locator.otsReport.generate())
}

function $dir(e) {}

function $now() {
    return null
}

function $stem(e) {
    var t = Locator.treeLookup.getReference(e);
    return "dir" in console && console.dir(t), t
}

function cycleid() {
    return "Locator" in window && Locator.validationManager ? Locator.validationManager.cyclecount : 0
}

function LongClick(e, t, n) {
    "use strict";
    var i = this;
    if (this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.touchBoundary = 10, this.time = t, this.handler = n, this.timer = null, this.layer = e, !e || !e.nodeType) throw new TypeError("Layer must be a document node");
    this.onTouchStart = function() {
        return LongClick.prototype.onTouchStart.apply(i, arguments)
    }, this.onTouchMove = function() {
        return LongClick.prototype.onTouchMove.apply(i, arguments)
    }, this.onTouchEnd = function() {
        return LongClick.prototype.onTouchEnd.apply(i, arguments)
    }, this.onTouchCancel = function() {
        return LongClick.prototype.onTouchCancel.apply(i, arguments)
    }, window.navigator.msPointerEnabled ? (this.startEventName = "MSPointerDown", this.moveEventName = "MSPointerMove", this.endEventName = "MSPointerUp", this.cancelEventName = "MSPointerCancel") : (this.startEventName = "touchstart", this.moveEventName = "touchmove", this.endEventName = "touchend", this.cancelEventName = "touchcancel"), e.addEventListener(this.startEventName, this.onTouchStart, !1), e.addEventListener(this.moveEventName, this.onTouchMove, !1), e.addEventListener(this.endEventName, this.onTouchEnd, !1), e.addEventListener(this.cancelEventName, this.onTouchCancel, !1)
}
var ns_test, ns_gen5_util, ErrorReporter, __decorate, __param, __extends, extend, ANIMATION_END, TRANSITION_END, $log_log, $log, $logTest, $logFmt, $assert, FastClick, ns_gen5_ml, ns_gen5_util_user, ns_gen5_events, ns_gen5_net, ns_gen5_util_logging, ns_gen5_validation, ns_gen5_language, ns_gen5_data, ns_gen5_ui, ns_gen5_config, ns_gen5_ui_managers, ns_gen5_ui_controls, ns_gen5_animation_easing, ns_gen5_animation, readit, ns_betslip, Locator, SITE_ROOT_PATH = "sports";
!(function(e) {
    var t, n, i = (function() {
        function e() {}
        return e.prototype.runSpec = function() {
            throw new Error("Method should be overriten")
        }, e
    })();
    e.B365JasmineSpec = i, t = window, n = t.JasmineSpecLookup = {}, t.addJasmineSpec = function(e, t, i) {
        var r = n[e] || (n[e] = []);
        r.push([t, i])
    }
})(ns_test || (ns_test = {})), (function(e) {
    var t = (function() {
        function e() {}
        return e.encrypt = function(t) {
            var n, i = "",
                r = t.length,
                o = 0,
                s = 0;
            for (o = 0; r > o; o++) {
                for (n = t.substr(o, 1), s = 0; s < e.MAP_LEN; s++)
                    if (n == e.charMap[s][0]) {
                        n = e.charMap[s][1];
                        break
                    } i += n
            }
            return i
        }, e.decrypt = function(t) {
            var n, i = "",
                r = t.length,
                o = 0,
                s = 0;
            for (o = 0; r > o; o++) {
                for (n = t.substr(o, 1), s = 0; s < e.MAP_LEN; s++) {
                    if (":" == n && ":|~" == t.substr(o, 3)) {
                        n = "\n", o += 2;
                        break
                    }
                    if (n == e.charMap[s][1]) {
                        n = e.charMap[s][0];
                        break
                    }
                }
                i += n
            }
            return i
        }, e.MAP_LEN = 64, e.charMap = [
            ["A", "d"],
            ["B", "e"],
            ["C", "f"],
            ["D", "g"],
            ["E", "h"],
            ["F", "i"],
            ["G", "j"],
            ["H", "k"],
            ["I", "l"],
            ["J", "m"],
            ["K", "n"],
            ["L", "o"],
            ["M", "p"],
            ["N", "q"],
            ["O", "r"],
            ["P", "s"],
            ["Q", "t"],
            ["R", "u"],
            ["S", "v"],
            ["T", "w"],
            ["U", "x"],
            ["V", "y"],
            ["W", "z"],
            ["X", "a"],
            ["Y", "b"],
            ["Z", "c"],
            ["a", "Q"],
            ["b", "R"],
            ["c", "S"],
            ["d", "T"],
            ["e", "U"],
            ["f", "V"],
            ["g", "W"],
            ["h", "X"],
            ["i", "Y"],
            ["j", "Z"],
            ["k", "A"],
            ["l", "B"],
            ["m", "C"],
            ["n", "D"],
            ["o", "E"],
            ["p", "F"],
            ["q", "0"],
            ["r", "1"],
            ["s", "2"],
            ["t", "3"],
            ["u", "4"],
            ["v", "5"],
            ["w", "6"],
            ["x", "7"],
            ["y", "8"],
            ["z", "9"],
            ["0", "G"],
            ["1", "H"],
            ["2", "I"],
            ["3", "J"],
            ["4", "K"],
            ["5", "L"],
            ["6", "M"],
            ["7", "N"],
            ["8", "O"],
            ["9", "P"],
            ["\n", ":|~"],
            ["\r", ""]
        ], e
    })();
    e.B365SimpleEncrypt = t
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t, n;
    !(function(e) {
        e.CONNECTION_ENTRY = "CONNECTION_ENTRY", e.PUSH_MESSAGE_CONNECTION_ENTRY = "PUSH_MESSAGE_CONNECTION_ENTRY", e.PULL_DATA_ENTRY = "PULL_DATA_ENTRY", e.MODULE_LOAD_ENTRY = "MODULE_LOAD_ENTRY", e.NAVIGATION_ENTRY = "NAVIGATION_ENTRY", e.VIDEO_ENTRY = "VIDEO_ENTRY", e.COUPON_STREAMING_ENTRY = "COUPON_STREAMING_ENTRY", e.BET_SLIP_ENTRY = "BET_SLIP_ENTRY", e.GLOBAL_CONFIG_ENTRY = "GLOBAL_CONFIG_ENTRY", e.PLAYTECH_INSTANT_GAMES_ENTRY = "PLAYTECH_INSTANT_GAMES_ENTRY", e.FLASH_MODULE_ENTRY = "FLASH_MODULE_ENTRY", e.EMPTY_TOPIC_ENTRY = "EMPTY_TOPIC_ENTRY", e.FINANCIALS_TOPIC_ENTRY = "FINANCIALS_TOPIC_ENTRY", e.FILTERING_ENTRY = "FILTERING_ENTRY", e.BLOB_ENTRY = "BLOB_ENTRY", e.EDIT_BETS_ENTRY = "EDIT_BETS", e.MATCH_ALERTS_SERVICE_WORKER_ENTRY = "MATCH_ALERTS_SERVICE_WORKER_ENTRY", e.MATCH_ALERTS_ENTRY = "MATCH_ALERTS_ENTRY", e.QUICK_BET_ENTRY = "QUICK_BET_ENTRY", e.GENERAL_ENTRY = "GENERAL_ENTRY", e.DEPRECATION_WARNING_ENTRY = "DEPRECATION_WARNING_ENTRY", e.MOS_ENTRY = "MOS_ENTRY", e.GEO_COMPLY_ENTRY = "GEO_COMPLY_ENTRY", e.LOGIN_ENTRY = "LOGIN_ENTRY", e.MEMBERS_ENTRY = "MEMBERS_ENTRY"
    })(t = e.InfoReporterGroups || (e.InfoReporterGroups = {})), n = (function() {
        function e() {}
        return e.getLog = function() {
            return e.InfoLog
        }, e.Trace = function(t, n) {
            var i, r;
            e.InfoLog[t] || (e.InfoLog[t] = []), i = new Date, r = i.getHours() + ":" + i.getMinutes() + ":" + i.getSeconds(), n = r + " " + n, e.InfoLog[t].push(n)
        }, e.InfoLog = {}, e
    })(), e.InfoReporter = n
})(ns_gen5_util || (ns_gen5_util = {})), ErrorReporter = (function() {
    function e() {}
    return e.Trace = function(t, n, i) {
        var r, o, s;
        try {
            r = n.stack || n.message || n, o = "" + t, $log(n.message || n, o, r), this.ErrorLog.length >= e.MAXIMUM_LOG_SIZE && (s = this.ErrorLog.length - e.MAXIMUM_LOG_SIZE + 1, e.ErrorLog.splice(0, s)), this.ErrorLog.push(new Date + " " + o + " " + n), ns_gen5_util_logging.ClientErrorLogger.QueueError(t, n, i)
        } catch (n) {
            ns_gen5_util.InfoReporter.Trace(ns_gen5_util.InfoReporterGroups.GENERAL_ENTRY, "Problem happened during logging error")
        }
    }, e.MAXIMUM_LOG_SIZE = 100, e.ErrorLog = [], e.GetLog = function() {
        return e.ErrorLog
    }, e
})(), __decorate = this && this.__decorate || function(e, t, n, i) {
    var r, o, s = arguments.length,
        a = 3 > s ? t : null === i ? i = __getOwnPropertyDescriptor(t, n) : i;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
    else
        for (o = e.length - 1; o >= 0; o--)(r = e[o]) && (a = (3 > s ? r(a) : s > 3 ? r(t, n, a) : r(t, n)) || a);
    return s > 3 && a && __defineProperty(t, n, a), a
}, __param = this.__param || function(e, t) {
    return function(n, i) {
        t(n, i, e)
    }
}, __extends = this && this.__extends || function(e, t) {
    var n, i;
    for (n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i = function() {
        this.constructor = e
    }, e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
}, extend = function(e, t) {
    return __extends(t, e), e
}, (function() {
    var e, t, n, i, r = document.createElement("div"),
        o = r.style;
    for ("" === o.animation ? ANIMATION_END = "animationend" : "" === o.webkitAnimation ? ANIMATION_END = "webkitAnimationEnd" : "" === o.mozAnimation ? ANIMATION_END = "mozAnimationEnd" : "" === o.msAnimation && (ANIMATION_END = "msAnimationEnd"), "" === o.transition ? TRANSITION_END = "transitionend" : "" === o.webkitTransition && (TRANSITION_END = "webkitTransitionEnd"), e = 0, t = ["webkit", "moz"], n = window, i = 0; i < t.length && !window.requestAnimationFrame; ++i) n.requestAnimationFrame = n[t[i] + "RequestAnimationFrame"], n.cancelAnimationFrame = n[t[i] + "CancelAnimationFrame"] || n[t[i] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(t) {
        var n = (new Date).getTime(),
            i = Math.max(0, 16 - (n - e)),
            r = window.setTimeout((function() {
                t(n + i)
            }), i);
        return e = n + i, r
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
        clearTimeout(e)
    })
})(), (function() {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
        var n, i;
        for (t || (t = 0), n = this.length, i = t; n > i; i++)
            if (this[i] === e) return i;
        return -1
    })
})(), $log_log = "", $log = function() {}, $logTest = function() {}, $logFmt = function(e, t) {}, (function() {
    window.safeSessionStorage || (window.safeSessionStorage = (function() {
        function e() {}

        function t() {
            this._store = {}
        }
        var n = "test-string",
            i = (function() {
                try {
                    if (window.sessionStorage) return window.sessionStorage.setItem(n, n), window.sessionStorage.removeItem(n), !0
                } catch (e) {
                    ErrorReporter.Trace(null, e)
                }
                return !1
            })();
        return e.prototype.setItem = function(e, t) {
            try {
                window.sessionStorage && window.sessionStorage.setItem(e, t)
            } catch (n) {}
        }, e.prototype.getItem = function(e) {
            try {
                if (window.sessionStorage) return window.sessionStorage.getItem(e)
            } catch (t) {}
            return null
        }, e.prototype.removeItem = function(e) {
            try {
                window.sessionStorage && window.sessionStorage.removeItem(e)
            } catch (t) {}
        }, t.prototype.setItem = function(e, t) {
            this._store[e] = t
        }, t.prototype.getItem = function(e) {
            return this._store[e]
        }, t.prototype.removeItem = function(e) {
            delete this._store[e]
        }, i ? new e : new t
    })())
})(), (function(e, t, n) {
    function i(e) {
        var n = t[e];
        t[e] = function(e) {
            return r(n(e))
        }
    }

    function r(e) {
        var t = e.length;
        if (t)
            for (; t--;) e[t].addEventListener = c, e[t].removeEventListener = l;
        else e.addEventListener = c, e.removeEventListener = l;
        return e
    }
    var o, s, a, c, l, u;
    e.addEventListener && e.removeEventListener || !e.attachEvent || !e.detachEvent || (o = function(e) {
        return "function" == typeof e
    }, s = function(e, t) {
        var i, r, o = t[n];
        if (o)
            for (i = void 0, r = o.length; r--;)
                if (i = o[r], i[0] === e) return i[1]
    }, a = function(e, t, i) {
        var r = t[n] || (t[n] = []);
        return s(e, t) || (r[r.length] = [e, i], i)
    }, c = function(n, i, r) {
        if (o(i)) {
            var s = this;
            s.attachEvent("on" + n, a(s, i, (function(n) {
                n = n || e.event, n.preventDefault = n.preventDefault || function() {
                    n.returnValue = !1
                }, n.stopPropagation = n.stopPropagation || function() {
                    n.cancelBubble = !0
                }, n.target = n.target || n.srcElement || t.documentElement, n.currentTarget = n.currentTarget || s, n.timeStamp = n.timeStamp || (new Date).getTime(), i.call(s, n)
            })))
        }
    }, l = function(e, t, n) {
        var i, r;
        o(t) && (i = this, r = s(i, t), r && i.detachEvent("on" + e, r))
    }, r([t, e]), "Element" in e ? (u = e.Element, u.prototype.addEventListener = c, u.prototype.removeEventListener = l) : (t.attachEvent("onreadystatechange", (function() {
        r(t.all)
    })), i("getElementsByTagName"), i("getElementById"), i("createElement"), r(t.all)))
})(window, document, "x-ms-event-listeners"), (function() {
    function e(e) {
        var t, n, i = this,
            r = i,
            o = r.length >>> 0;
        if ("function" != typeof e) throw new TypeError("Array.prototype.reduceRight callback must be a function");
        if (0 === o && 1 === arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
        if (n = o - 1, arguments.length >= 2) t = arguments[1];
        else
            for (;;) {
                if (n in r) {
                    t = r[n--];
                    break
                }
                if (--n < 0) throw new TypeError("reduceRight of empty array with no initial value")
            }
        if (0 > n) return t;
        do n in r && (t = e(t, r[n], n, i)); while (n--);
        return t
    }
    Array.prototype.reduceRight || (Array.prototype.reduceRight = e)
})(), (function(e) {
    function t(e, n, i) {
        var r, o = e.document && e.currentStyle[n].match(/([\d\.]+)(%|cm|em|in|mm|pc|pt|)/) || [0, 0, ""],
            s = o[1],
            a = o[2];
        return i = i ? /%|em/.test(a) && e.parentElement ? t(e.parentElement, "fontSize", null) : 16 : i, r = "fontSize" == n ? i : /width/i.test(n) ? e.clientWidth : e.clientHeight, "%" == a ? s / 100 * r : "cm" == a ? .3937 * s * 96 : "em" == a ? s * i : "in" == a ? 96 * s : "mm" == a ? .3937 * s * 96 / 10 : "pc" == a ? 12 * s * 96 / 72 : "pt" == a ? 96 * s / 72 : s
    }

    function n(e, t) {
        var n = "border" == t ? "Width" : "",
            i = t + "Top" + n,
            r = t + "Right" + n,
            o = t + "Bottom" + n,
            s = t + "Left" + n;
        e[t] = (e[i] == e[r] && e[i] == e[o] && e[i] == e[s] ? [e[i]] : e[i] == e[o] && e[s] == e[r] ? [e[i], e[r]] : e[s] == e[r] ? [e[i], e[r], e[o]] : [e[i], e[r], e[o], e[s]]).join(" ")
    }

    function i(e) {
        var i, r = this,
            o = e.currentStyle,
            s = t(e, "fontSize"),
            a = function(e) {
                return "-" + e.toLowerCase()
            };
        for (i in o)
            if (Array.prototype.push.call(r, "styleFloat" == i ? "float" : i.replace(/[A-Z]/, a)), "width" == i) r[i] = e.offsetWidth + "px";
            else if ("height" == i) r[i] = e.offsetHeight + "px";
        else if ("styleFloat" == i) r["float"] = o[i];
        else if (/margin.|padding.|border.+W/.test(i) && "auto" != r[i]) r[i] = Math.round(t(e, i, s)) + "px";
        else if (/^outline/.test(i)) try {
            r[i] = o[i]
        } catch (c) {
            r.outlineColor = o.color, r.outlineStyle = r.outlineStyle || "none", r.outlineWidth = r.outlineWidth || "0px", r.outline = [r.outlineColor, r.outlineWidth, r.outlineStyle].join(" ")
        } else r[i] = o[i];
        n(r, "margin"), n(r, "padding"), n(r, "border"), r.fontSize = Math.round(s) + "px"
    }
    e.getComputedStyle || (i.prototype = {
        constructor: i,
        getPropertyPriority: function() {
            $assert && $assert(!1, "NotSupportedError: DOM Exception 9")
        },
        getPropertyValue: function(e) {
            return this[e.replace(/-\w/g, (function(e) {
                return e[1].toUpperCase()
            }))]
        },
        item: function(e) {
            return this[e]
        },
        removeProperty: function() {
            $assert && $assert(!1, "NoModificationAllowedError: DOM Exception 7")
        },
        setProperty: function() {
            $assert && $assert(!1, "NoModificationAllowedError: DOM Exception 7")
        },
        getPropertyCSSValue: function() {
            $assert && $assert(!1, "NotSupportedError: DOM Exception 9")
        }
    }, e.getComputedStyle = function(e) {
        return new i(e)
    })
})(this), FastClick = (function() {
    "use strict";

    function e(t, n) {
        function i(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }
        var r, o, s, a, c, l, u;
        if (n = n || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = n.touchBoundary || 10, this.layer = t, this.tapDelay = n.tapDelay || 20, this.tapTimeout = n.tapTimeout || 700, o = this.deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0, s = this.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0 && !o, this.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !o, this.deviceIsIOS4 = this.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent), this.deviceIsIOSWithBadTarget = this.deviceIsIOS && /OS [6-7]_\d/.test(navigator.userAgent), this.deviceIsBlackBerry10 = navigator.userAgent.indexOf("BB10") > 0, !e.notNeeded(t)) {
            for (a = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], c = this, l = a.length, u = 0; l > u; u++) c[a[u]] = i(c[a[u]], c);
            s && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, n, i) {
                var r = Node.prototype.removeEventListener;
                "click" === e ? r.call(t, e, n.hijacked || n, i) : r.call(t, e, n, i)
            }, t.addEventListener = function(e, n, i) {
                var r = Node.prototype.addEventListener;
                "click" === e ? r.call(t, e, n.hijacked || (n.hijacked = function(e) {
                    e.propagationStopped || n(e)
                }), i) : r.call(t, e, n, i)
            }), "function" == typeof t.onclick && (r = t.onclick, t.addEventListener("click", (function(e) {
                r(e)
            }), !1), t.onclick = null)
        }
    }
    return e.prototype.needsClick = function(e) {
        var t, n;
        switch (e.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (e.disabled) return !0;
                break;
            case "input":
                if (this.deviceIsIOS && "file" === e.type || e.disabled) return !0;
                break;
            case "label":
            case "iframe":
            case "video":
                return !0
        }
        for (t = !1, n = e; n && n !== document && !t;) t = /\bneedsclick\b/.test(n.className), n = n.parentNode;
        return t
    }, e.prototype.needsFocus = function(e) {
        if (/\bforcenofocus\b/.test(e.className)) return !1;
        switch (e.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !this.deviceIsAndroid;
            case "input":
                switch (e.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !e.disabled && !e.readOnly;
            default:
                return /\bneedsfocus\b/.test(e.className)
        }
    }, e.prototype.sendClick = function(e, t) {
        var n, i;
        document.activeElement && document.activeElement !== e && document.activeElement.blur(), i = t.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n)
    }, e.prototype.determineEventType = function(e) {
        return this.deviceIsAndroid && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
    }, e.prototype.focus = function(e) {
        var t;
        this.deviceIsIOS && e.setSelectionRange && -1 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
    }, e.prototype.updateScrollParent = function(e) {
        var t, n = e.fastClickScrollParent;
        if (!n || !n.contains(e)) {
            t = e;
            do {
                if (t.scrollHeight > t.offsetHeight) {
                    n = t, e.fastClickScrollParent = t;
                    break
                }
                t = t.parentElement
            } while (t)
        }
        n && (n.fastClickLastScrollTop = n.scrollTop, n.fastClickLastScrollLeft = n.scrollLeft)
    }, e.prototype.getTargetElementFromEventTarget = function(e) {
        return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
    }, e.prototype.onTouchStart = function(e) {
        var t, n, i;
        if (e.targetTouches.length > 1) return !0;
        if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], this.deviceIsIOS) {
            if (i = window.getSelection(), i.rangeCount && !i.isCollapsed) return !0;
            if (!this.deviceIsIOS4) {
                if (n.identifier && n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
                this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = (new Date).getTime(), this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, this.trackingClickStart - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
    }, e.prototype.touchHasMoved = function(e) {
        var t = e.changedTouches[0],
            n = this.touchBoundary;
        return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n
    }, e.prototype.onTouchMove = function(e) {
        return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
    }, e.prototype.findControl = function(e) {
        return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, e.prototype.onTouchEnd = function(e) {
        var t, n, i, r, o, s, a = this.targetElement;
        if ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !this.trackingClick) return !0;
        if (s = (new Date).getTime(), s - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
        if (s - this.trackingClickStart > this.tapTimeout) return !0;
        if (this.cancelNextClick = !1, this.lastClickTime = s, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, this.deviceIsIOSWithBadTarget && (o = e.changedTouches[0], a = document.elementFromPoint(o.pageX - window.pageXOffset, o.pageY - window.pageYOffset) || a, a.fastClickScrollParent = this.targetElement.fastClickScrollParent), i = a.tagName.toLowerCase(), "label" === i) {
            if (t = this.findControl(a)) {
                if (this.focus(a), this.deviceIsAndroid) return !1;
                a = t
            }
        } else if (this.needsFocus(a)) return s - n > 100 || this.deviceIsIOS && window.top !== window && "input" === i ? (this.targetElement = null, !1) : (this.focus(a), this.sendClick(a, e), this.deviceIsIOS && "select" === i || (this.targetElement = null, e.preventDefault()), !1);
        return !this.deviceIsIOS || this.deviceIsIOS4 || (r = a.fastClickScrollParent, !r || r.fastClickLastScrollTop === r.scrollTop && r.fastClickLastScrollLeft === r.scrollLeft) ? (this.needsClick(a) || (e.preventDefault(), this.sendClick(a, e)), !1) : !0
    }, e.prototype.onTouchCancel = function() {
        this.trackingClick = !1, this.targetElement = null
    }, e.prototype.onMouse = function(e) {
        return this.targetElement ? e.forwardedTouchEvent ? !0 : e.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1) : !0 : !0
    }, e.prototype.onClick = function(e) {
        var t;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail ? !0 : (t = this.onMouse(e), t || (this.targetElement = null), t)
    }, e.prototype.destroy = function() {
        var e = this.layer;
        this.deviceIsAndroid && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, e.notNeeded = function(e) {
        var t, n, i, r;
        if ("undefined" == typeof window.ontouchstart) return !0;
        if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!this.deviceIsAndroid) return !0;
            if (t = document.querySelector("meta[name=viewport]")) {
                if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
                if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
        }
        if (this.deviceIsBlackBerry10 && (i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), i[1] >= 10 && i[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) {
            if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return !0
        }
        return "none" === e.style.msTouchAction || "manipulation" === e.style.touchAction ? !0 : (r = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], r >= 27 && (t = document.querySelector("meta[name=viewport]"), t && (-1 !== t.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === e.style.touchAction || "manipulation" === e.style.touchAction)
    }, e.attach = function(t, n) {
        return new e(t, n)
    }, e
})(), window.FastClick = FastClick, LongClick.prototype.onTouchStart = function(e) {
    "use strict";
    var t, n;
    if (e.targetTouches && 1 === e.targetTouches.length) n = e.targetTouches[0];
    else {
        if (!e.clientX || !e.clientY) return !0;
        n = e
    }
    return t = e.target, this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.clientX, this.touchStartY = n.clientY, this.timer = window.setTimeout(this.handler, this.time), !0
}, LongClick.prototype.touchHasMoved = function(e) {
    "use strict";
    var t, n = this.touchBoundary;
    return t = e.changedTouches ? e.changedTouches[0] : e, Math.abs(t.clientX - this.touchStartX) > n || Math.abs(t.clientY - this.touchStartY) > n
}, LongClick.prototype.onTouchMove = function(e) {
    "use strict";
    return this.trackingClick ? ((this.targetElement !== e.target || this.touchHasMoved(e)) && this.reset(), !0) : !0
}, LongClick.prototype.onTouchEnd = function(e) {
    "use strict";
    return this.trackingClick ? e.timeStamp - this.trackingClickStart < this.time ? (this.reset(), !0) : !1 : !0
}, LongClick.prototype.reset = function() {
    "use strict";
    this.timer && window.clearTimeout(this.timer), this.trackingClick = !1, this.trackingClickStart = null, this.targetElement = null
}, LongClick.prototype.onTouchCancel = function() {
    "use strict";
    this.reset()
}, LongClick.prototype.destroy = function() {
    "use strict";
    var e = this.layer;
    e.removeEventListener(this.startEventName, this.onTouchStart, !1), e.removeEventListener(this.moveEventName, this.onTouchMove, !1), e.removeEventListener(this.endEventName, this.onTouchEnd, !1), e.removeEventListener(this.cancelEventName, this.onTouchCancel, !1)
}, LongClick.attach = function(e, t, n) {
    "use strict";
    return new LongClick(e, t, n)
}, (function(e) {
    var t = (function() {
        function e(e, t, n, i, r, o, s) {
            this.languageId = e, this.cultureCode = t, this.cultureCode2 = n, this.languageCode = i, this.supportsEmbeddedFonts = r, this.isAsianRegion = o, this.allowCapitalisation = s
        }
        return e
    })();
    e.LanguageProfile = t
})(ns_gen5_ml || (ns_gen5_ml = {})), (function(e) {
    var t = e.LanguageProfile,
        n = (function() {
            function e() {}
            return e.SelectLanguageProfile = function(t) {
                0 == t && (t = 1), e.SelectedProfile = e.LanguageProfiles[t]
            }, e.getRegionIsAsian = function() {
                return e.SelectedProfile.isAsianRegion
            }, e.getLanguageId = function() {
                return e.SelectedProfile.languageId
            }, e.allowCapitalisation = function() {
                return e.SelectedProfile.allowCapitalisation
            }, e.getLanguageCode = function() {
                return this.SelectedProfile.languageCode
            }, e.getCultureCode = function() {
                return this.SelectedProfile.cultureCode
            }, e.getCultureCode2 = function() {
                return this.SelectedProfile.cultureCode2
            }, e.init = function() {
                e.LanguageProfiles = {
                    1: new t(1, "en", "en", "en-GB", !0, !1, !0),
                    2: new t(2, "zht", "zh-cht", "ch", !1, !0, !1),
                    3: new t(3, "es", "es", "es", !0, !1, !0),
                    4: new t(4, "fr", "fr", "fr", !0, !1, !0),
                    5: new t(5, "de", "de", "de", !0, !1, !0),
                    6: new t(6, "it", "it", "it", !0, !1, !0),
                    7: new t(7, "da", "da", "da", !0, !1, !0),
                    8: new t(8, "sv", "sv", "sv", !0, !1, !0),
                    9: new t(9, "nn", "nn", "no", !0, !1, !0),
                    10: new t(10, "zh", "zh-chs", "zh-cn", !1, !0, !1),
                    19: new t(19, "bg", "bg", "bg", !0, !1, !0),
                    20: new t(20, "el", "el", "el", !0, !1, !1),
                    21: new t(21, "pl", "pl", "pl", !0, !1, !0),
                    22: new t(22, "pt", "pt", "pt", !0, !1, !0),
                    23: new t(23, "ro", "ro", "ro", !0, !1, !0),
                    24: new t(24, "cs", "cs", "cs", !0, !1, !0),
                    25: new t(25, "hu", "hu", "hu", !0, !1, !0),
                    26: new t(26, "sk", "sk", "sk", !0, !1, !0),
                    28: new t(28, "nl", "nl", "nl-nl", !0, !1, !0),
                    29: new t(29, "et", "et", "et-EE", !0, !1, !0),
                    30: new t(30, "au", "au", "en-AU", !0, !1, !0),
                    31: new t(31, "ru", "ru", "ru", !0, !1, !0),
                    32: new t(32, "us", "us", "en-US", !0, !1, !0),
                    33: new t(33, "br", "br", "br", !0, !1, !0)
                }
            }, e
        })();
    e.LanguageSettings = n, n.init()
})(ns_gen5_ml || (ns_gen5_ml = {})), (function(e) {
    var t = e.LanguageSettings,
        n = (function() {
            function e() {}
            return e.GetMonthName = function(n) {
                return e._mylanguage || (e._mylanguage = e.ALL_MONTHS[t.getLanguageId()]), t.getRegionIsAsian() ? (n + 1 + e.CMC).toString() : e._mylanguage[n].toString()
            }, e.CMC = "月", e.CDC = "日", e.ALL_MONTHS = {
                1: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                2: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                3: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                5: ["Januar ", "Februar ", "März", "April ", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                6: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
                7: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober ", "November", "December"],
                8: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                9: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
                10: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                19: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
                20: ["Ιανουαρίου", "Φεβρουαρίου", "Μαρτίου", "Απριλίου", "Μαϊου", "Ιουνίου", "Ιουλίου", "Αυγούστου", "Σεπτεμβρίου", "Οκτωβρίου", "Νοεμβρίου", "Δεκεμβρίου"],
                21: ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"],
                22: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                23: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                24: ["ledna", "února", "března", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince"],
                25: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
                26: ["januára", "februára", "marca", "apríla", "mája", "júna", "júla", "augusta", "septembra", "októbra", "novembra", "decembra"],
                28: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
                29: ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"],
                30: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                31: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                32: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                33: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
            }, e
        })();
    e.LongMonthNames = n
})(ns_gen5_ml || (ns_gen5_ml = {})), (function(e) {
    var t = e.LanguageSettings,
        n = (function() {
            function e() {}
            return e.GetDay = function(n) {
                return e._mylanguage || (e._mylanguage = e.ALL_DAYS[t.getLanguageId()]), e._mylanguage[n].toString()
            }, e.ALL_DAYS = {
                1: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                2: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
                3: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
                5: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
                6: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
                7: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
                8: ["Söndag", "Mandag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
                9: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
                10: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
                19: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
                20: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
                21: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
                22: ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"],
                23: ["Duminica", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"],
                24: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
                25: ["Vasárnap", "Hétfő", "Kedd", "Szerda", " Csütörtök", "Péntek", "Szombat"],
                26: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"],
                28: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
                29: ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"],
                30: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                31: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
                32: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                33: ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
            }, e
        })();
    e.LongDayNames = n
})(ns_gen5_ml || (ns_gen5_ml = {})), (function(e) {
    var t = e.LanguageSettings,
        n = (function() {
            function e() {}
            return e.GetMonthName = function(n) {
                return e._mylanguage || (e._mylanguage = e.ALL_MONTHS[t.getLanguageId()]), t.getRegionIsAsian() ? String(n + 1) + this.CMC : e._mylanguage[n]
            }, e.CYC = "年", e.CMC = "月", e.CDC = "日", e.ALL_MONTHS = {
                1: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                2: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                3: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                4: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                5: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
                6: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
                7: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
                8: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
                9: ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"],
                10: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                14: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                19: ["яну", "фев", "мар", "апр", "май", "юни", "юли", "авг", "сеп", "окт", "ное", "дек"],
                20: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαΐου", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"],
                21: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
                22: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Sep", "Out", "Nov", "Dez"],
                23: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                24: ["led", "úno", "bře", "dub", "kvě", "čer", "čvc", "srp", "zář", "říj", "lis", "pro"],
                25: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
                26: ["jan", "feb", "mar", "apr", "máj", "jún", "júl", "aug", "sep", "okt", "nov", "dec"],
                28: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
                29: ["jan", "veb", "mär", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "det"],
                30: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                31: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Нбр", "Дек"],
                32: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                33: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Sep", "Out", "Nov", "Dez"]
            }, e
        })();
    e.ShortMonthNames = n
})(ns_gen5_ml || (ns_gen5_ml = {})), (function(e) {
    var t = e.LanguageSettings,
        n = (function() {
            function e() {}
            return e.GetDay = function(n) {
                return e._mylanguage || (e._mylanguage = e.ALL_DAYS[t.getLanguageId()]), e._mylanguage[n]
            }, e.ALL_DAYS = {
                1: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                2: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
                3: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
                5: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
                6: ["Dom", "Lun", "Mar", "Mer", "Giov", "Ven", "Sab"],
                7: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", " Lør"],
                8: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
                9: ["Søn", "Man", "Tirs", "Ons", "Tors", "Fre", "Lør"],
                10: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
                19: ["Нед", "Пон", "Вт", "Ср", "Чет", "Пет", "Съб"],
                20: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
                21: ["N", "Pn", "Wt", "Śr", "Cz", "Pt", "So"],
                22: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
                23: ["D", "L", "Ma", "Mi", "J", "V", "S"],
                24: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
                25: ["Vas", "Hét", "Kedd", "Sze", " Csüt", "Pén", "Szo"],
                26: ["Ned", "Pon", "Ut", "Str", "Štv", "Pia", "Sob"],
                28: ["zo", "ma", "di", "wo", "do", "vr", "za"],
                29: ["P", "E", "T", "K", "N", "R", "L"],
                30: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                31: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                32: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                33: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
            }, e
        })();
    e.ShortDayNames = n
})(ns_gen5_ml || (ns_gen5_ml = {})), (function(e) {
    var t = e.LanguageSettings,
        n = e.ShortMonthNames,
        i = e.LongMonthNames,
        r = e.ShortDayNames,
        o = e.LongDayNames,
        s = (function() {
            function e() {}
            return e.FormatDate = function(e, t, n, i) {
                var r, o;
                switch (0 != i && (o = t.getMinutes(), o += i, t.setMinutes(o)), e) {
                    case this.BOOK_CLOSE:
                        r = this.bookClose(t);
                        break;
                    case this.DAY_DATE_LONGMONTH:
                        r = this.dayDateLongMonth(t);
                        break;
                    case this.DAY_SUFFIX_DATE_MONTH_TIME:
                        r = this.daySuffixDateMonthTime(t);
                        break;
                    case this.DAY_DATE_MONTH_YEAR_TIME:
                        r = this.dayDateMonthYearTime(t);
                        break;
                    case this.DAY_SUFFIX_TIME:
                        r = this.daySuffixTime(t);
                        break;
                    case this.HH_MM_SS:
                        r = this.hhmmss(t);
                        break;
                    case this.HH_MM:
                        r = this.hhmm(t);
                        break;
                    case this.DAY_DATE:
                        r = this.dayDate(t);
                        break;
                    case this.DAY_DATE_LONG:
                        r = this.dayDateLong(t);
                        break;
                    case this.DAY_ONLY:
                        r = this.day(t);
                        break;
                    case this.DATE_MONTH_YEAR:
                        r = this.dateMonthYear(t);
                        break;
                    case this.DATE_MONTH_YEAR_SLASH:
                        r = this.dateMonthYearSlash(t);
                        break;
                    case this.DAY_DATE_MONTH_YEAR_TIME_SECONDS:
                        r = this.dayDateMonthYearTimeSeconds(t);
                        break;
                    case this.DAY_DATE_MONTH_TIME:
                        r = this.dayDateMonthTime(t);
                        break;
                    case this.DATE_MONTHNAME_YEAR:
                        r = this.dateMonthNameYear(t);
                        break;
                    case this.LONGDAY_DATE_MONTH_TIME:
                        r = this.longDayDateMonthTime(t)
                }
                return r
            }, e.FormatStringToDate = function(e) {
                var t = e.split(" "),
                    n = t[0],
                    i = n.split("/"),
                    r = t[1],
                    o = r.split(":"),
                    s = new Date;
                return s.setDate(parseInt(i[0])), s.setMonth(parseInt(i[1]) - 1), s.setFullYear(parseInt(i[2])), s.setHours(parseInt(o[0])), s.setMinutes(parseInt(o[1])), s.setSeconds(parseInt(o[2])), s
            }, e.bookClose = function(i) {
                var r, o = i.getDate().toString(),
                    s = n.GetMonthName(i.getMonth()),
                    a = i.getMinutes().toString(),
                    c = i.getHours().toString(),
                    l = (c.length > 1 ? c : "0" + c) + this.TIME_SEPERATOR + (a.length > 1 ? a : "0" + a);
                return t.getRegionIsAsian() ? (o += n.CDC, r = s + o + " " + l) : r = e.RequiresUSStyleFormatting ? s + " " + o + " " + l : 25 == t.getLanguageId() ? s + " " + o + " " + l : o + " " + s + " " + l, r
            }, e.dayDateLong = function(e) {
                var t = e.getDay();
                return r.GetDay(t) + " " + this.dayDate(e)
            }, e.dateMonthNameYear = function(e) {
                return this.dayDate(e) + " " + e.getFullYear().toString().substr(-2)
            }, e.dayDate = function(i) {
                var r, o = i.getDate(),
                    s = 10 > o ? "0" + o.toString() : o.toString(),
                    a = n.GetMonthName(i.getMonth());
                return t.getRegionIsAsian() ? (s += n.CDC, r = a + s) : r = e.RequiresUSStyleFormatting ? a + " " + s : 25 == t.getLanguageId() ? a + " " + s : s + " " + a, r
            }, e.day = function(e) {
                var t = e.getDay();
                return o.GetDay(t)
            }, e.hhmmss = function(e) {
                var t = e.getHours().toString(),
                    n = e.getMinutes().toString(),
                    i = e.getSeconds().toString();
                return t.length < 2 && (t = "0" + t), n.length < 2 && (n = "0" + n), i.length < 2 && (i = "0" + i), t + ":" + n + ":" + i
            }, e.hhmm = function(e) {
                var t = e.getHours().toString(),
                    n = e.getMinutes().toString();
                return t.length < 2 && (t = "0" + t), n.length < 2 && (n = "0" + n), t + ":" + n
            }, e.dayDateLongMonth = function(n) {
                var r, o = n.toString(),
                    s = i.GetMonthName(n.getMonth()).toString(),
                    a = this.GetSuffix(n.getDay()),
                    c = t.getLanguageId();
                switch (c) {
                    case 1:
                    case 6:
                    case 9:
                    case 19:
                    case 20:
                    case 21:
                    case 24:
                    case 26:
                    case 28:
                    case 31:
                    case 32:
                        r = e.RequiresUSStyleFormatting ? s + " " + o + a : o + a + " " + s;
                        break;
                    case 2:
                    case 10:
                        o += i.CDC, r = s + " " + o;
                        break;
                    case 3:
                        r = o + a + " de " + s;
                        break;
                    case 5:
                        r = ", den " + o + a + " " + s;
                        break;
                    case 7:
                    case 8:
                        r = "den " + o + a + " " + s;
                        break;
                    case 23:
                        r = ", " + o + a + " " + s;
                        break;
                    case 25:
                        r = s + " " + o + a;
                        break;
                    default:
                        r = o + " " + s
                }
                return r
            }, e.dayDateMonthYearTime = function(i) {
                var o, s, a = n.GetMonthName(i.getMonth()),
                    c = r.GetDay(i.getDay()),
                    l = i.getMinutes().toString(),
                    u = t.getLanguageId();
                switch (s = 0 == i.getHours() ? "00" : i.getHours() < 10 ? "0" + i.getHours().toString() : i.getHours().toString(), l = 0 == i.getMinutes() ? "00" : i.getMinutes() < 10 ? "0" + i.getMinutes().toString() : i.getMinutes().toString(), u) {
                    case 2:
                    case 10:
                        o = c + " " + i.getFullYear() + n.CYC + a + i.getDate() + n.CDC + ", " + s + ":" + l;
                        break;
                    case 23:
                        o = c + ", " + i.getDate() + " " + a + " " + i.getFullYear() + ", " + s + ":" + l;
                        break;
                    case 25:
                        o = c + " " + i.getFullYear() + " " + a + " " + i.getDate() + " " + s + ":" + l;
                        break;
                    default:
                        o = e.RequiresUSStyleFormatting ? c + " " + a + " " + i.getDate() + " " + i.getFullYear() + ", " + s + ":" + l : c + " " + i.getDate() + " " + a + " " + i.getFullYear() + ", " + s + ":" + l
                }
                return o
            }, e.daySuffixDateMonthTime = function(t) {
                var i, o = n.GetMonthName(t.getMonth()),
                    s = r.GetDay(t.getDay()),
                    a = t.getMinutes(),
                    c = a.toString(),
                    l = t.getDate(),
                    u = this.GetSuffix(l),
                    h = Number(Locator.user.languageId),
                    d = t.getHours(),
                    p = ("00" + d.toString()).slice(-2);
                switch (c = ("00" + a.toString()).slice(-2), h) {
                    case 2:
                    case 10:
                        i = s + " " + o + l + u + ", " + p + ":" + c;
                        break;
                    case 23:
                        i = s + ", " + l + u + " " + o + ", " + p + ":" + c;
                        break;
                    case 25:
                        i = s + " " + o + " " + l + u + " " + p + ":" + c;
                        break;
                    case 3:
                    case 6:
                    case 28:
                        i = s + " " + l + " " + o + " " + p + ":" + c;
                        break;
                    default:
                        i = e.RequiresUSStyleFormatting ? s + " " + o + " " + l + u + " " + p + ":" + c : s + " " + l + u + " " + o + " " + p + ":" + c
                }
                return i
            }, e.daySuffixTime = function(e) {
                var t, n = r.GetDay(e.getDay()),
                    i = e.getMinutes(),
                    o = i.toString(),
                    s = e.getHours(),
                    a = ("00" + s.toString()).slice(-2);
                return o = ("00" + i.toString()).slice(-2), t = n + " " + a + ":" + o
            }, e.dayDateMonthYearTimeSeconds = function(e) {
                var t = this.dayDateMonthYearTime(e),
                    n = e.getSeconds().toString();
                return n.length < 2 && (n = "0" + n), t += ":" + n
            }, e.dateMonthYear = function(e) {
                var t = (e.getDay() < 10 ? "0" + e.getDay() : e.getDay()).toString(),
                    n = ((e.getMonth() < 9 ? "0" : "") + (e.getMonth() + 1)).toString(),
                    i = e.getFullYear().toString(),
                    r = t + "." + n + "." + i;
                return r
            }, e.dateMonthYearSlash = function(e) {
                var n, i = (e.getDate() < 10 ? "0" + e.getDate() : e.getDate()).toString(),
                    r = ((e.getMonth() < 9 ? "0" : "") + (e.getMonth() + 1)).toString(),
                    o = e.getFullYear().toString(),
                    s = t.getLanguageId();
                switch (s) {
                    case 1:
                    case 3:
                    case 6:
                    case 7:
                    case 20:
                    case 22:
                    case 28:
                    case 32:
                    case 33:
                        n = i + "/" + r + "/" + o;
                        break;
                    case 2:
                    case 10:
                        n = o + "年" + r + "月" + i;
                        break;
                    case 8:
                        n = o + "-" + r + "-" + i;
                        break;
                    case 5:
                    case 9:
                    case 19:
                    case 21:
                    case 23:
                    case 26:
                    case 29:
                    case 31:
                        n = i + "." + r + "." + o;
                        break;
                    case 24:
                        n = i + "." + r + "/." + o;
                        break;
                    case 25:
                        n = o + "." + r + "." + i;
                        break;
                    default:
                        n = i + "/" + r + "/" + o
                }
                return n
            }, e.dayDateMonthTime = function(t) {
                var i, o = n.GetMonthName(t.getMonth()),
                    s = r.GetDay(t.getDay()),
                    a = t.getMinutes().toString();
                return i = 0 == t.getHours() ? "00" : t.getHours() < 10 ? "0" + t.getHours().toString() : t.getHours().toString(), a = 0 == t.getMinutes() ? "00" : t.getMinutes() < 10 ? "0" + t.getMinutes().toString() : t.getMinutes().toString(), e.RequiresUSStyleFormatting ? s + " " + o + " " + t.getDate() + " " + i + ":" + a : s + " " + t.getDate() + " " + o + " " + i + ":" + a
            }, e.longDayDateMonthTime = function(t) {
                var i, r = n.GetMonthName(t.getMonth()),
                    s = o.GetDay(t.getDay()),
                    a = t.getMinutes().toString();
                return i = 0 == t.getHours() ? "00" : t.getHours() < 10 ? "0" + t.getHours().toString() : t.getHours().toString(), a = 0 == t.getMinutes() ? "00" : t.getMinutes() < 10 ? "0" + t.getMinutes().toString() : t.getMinutes().toString(), e.RequiresUSStyleFormatting ? s + " " + r + " " + t.getDate() + " " + i + ":" + a : s + " " + t.getDate() + " " + r + " " + i + ":" + a
            }, e.GetSuffix = function(e) {
                var n, i, r = t.getLanguageId(),
                    o = [];
                switch (e %= 100, e > 19 && (i = e.toString(), e = parseInt(this.charAt(i, i.length - 1))), r) {
                    case 1:
                        o = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th"];
                        break;
                    case 6:
                        n = 1 == e ? "°" : "";
                        break;
                    case 3:
                        n = "°";
                        break;
                    case 5:
                    case 7:
                    case 9:
                    case 21:
                    case 24:
                    case 25:
                    case 26:
                        n = ".";
                        break;
                    case 19:
                    case 20:
                    case 22:
                    case 23:
                        n = "";
                        break;
                    case 8:
                        o = ["e:", ":a", ":a", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e", ":e"];
                        break;
                    case 28:
                        o = ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e"];
                        break;
                    default:
                        n = ""
                }
                return null != n ? n : o[e]
            }, e.charAt = function(e, t) {
                var n = e.charAt(t);
                return n
            }, e.BOOK_CLOSE = "bookClose", e.HH_MM_SS = "hhmmss", e.HH_MM = "hhmm", e.DAY_SUFFIX_DATE_MONTH_TIME = "daySuffixDateMonthTime", e.DAY_DATE_MONTH_YEAR_TIME = "dayDateMonthYearTime", e.DAY_SUFFIX_TIME = "daySuffixTime", e.DAY_DATE_LONGMONTH = "dayDateLongMonth", e.DAY_ONLY = "day", e.DAY_DATE = "dayDate", e.DAY_DATE_LONG = "dayDateLong", e.DATE_MONTH_YEAR = "dateMonthYear", e.DAY_DATE_MONTH_TIME = "dayDateMonthTime", e.DAY_DATE_MONTH_YEAR_TIME_SECONDS = "dayDateMonthYearTimeSeconds", e.DATE_MONTHNAME_YEAR = "dateMonthNameYear", e.LONGDAY_DATE_MONTH_TIME = "longdayDateMonthTime", e.DATE_MONTH_YEAR_SLASH = "dateMonthYearSlash", e.TIME_SEPERATOR = ":", e.RequiresUSStyleFormatting = !1, e
        })();
    e.MLDateFormatter = s
})(ns_gen5_ml || (ns_gen5_ml = {})), (function(e) {
    var t = (function() {
        function e() {}
        return e.Init = function() {
            var t = Locator.user.countryId,
                n = Locator.config.domain.hostname.toLowerCase().split(".");
            e.IsSpanish = t === e.Spain, e.IsDanish = t === e.Denmark, e.IsGreek = t === e.Greece, e.IsCypriot = t === e.Cyprus, e.IsItalyDomain = t === e.Italy, e.IsBulgarian = t === e.Bulgaria, e.IsSpainDomain = "es" == n[n.length - 1], e.IsAusDomain = t === e.Australia, e.IsCzechRepublic = t === e.CzechRepublic, e.IsIndia = t === e.India, e.IsEstonia = t === e.Estonia, e.IsEstoniaRestricted = e.IsEstonia && Locator.user.restrictedBettingEnabled, e.IsMexico = t === e.Mexico, e.IsMexicoDomain = "mx" == n[n.length - 1], e.IsUnitedStatesOfAmerica = t === e.UnitedStatesOfAmerica, e.IsSwedish = t === e.Sweden, e.IsDkDomain = "dk" == n[n.length - 1], e.IsCanadian = t === e.Canada, e.IsAusDomainAndCustomer = e.IsAusDomain && (Locator.user.isLoggedIn || !Locator.user.isLoggedIn && "AU" === Locator.user.countryCode)
        }, e.Denmark = "54", e.Spain = "171", e.Greenland = "218", e.Australia = "13", e.Germany = "75", e.Greece = "78", e.Cyprus = "51", e.Italy = "97", e.Bulgaria = "31", e.CzechRepublic = "52", e.India = "91", e.Estonia = "64", e.Mexico = "126", e.UnitedStatesOfAmerica = "198", e.Sweden = "181", e.Canada = "36", e.Brazil = "28", e
    })();
    e.RegisteredCountry = t
})(ns_gen5_util_user || (ns_gen5_util_user = {})), (function(e) {
    var t = (function() {
        function e() {}
        return e.HexStringToNumber = function(e) {
            return Number("0x" + e.slice(1))
        }, e.NumberToHexString = function(e) {
            var t = (16777215 & e).toString(16);
            return "#" + "00000".substring(0, 6 - t.length) + t
        }, e.AdjustColourBrightness = function(e, t) {
            return e = ((16711680 & e) >> 16) * t << 16 | ((65280 & e) >> 8) * t << 8 | (255 & e) * t, e > 16777215 ? 16777215 : e
        }, e.AdjustHexBrightness = function(e, t) {
            return this.NumberToHexString(this.AdjustColourBrightness(this.HexStringToNumber(e), t))
        }, e.Blend = function(e, t, n) {
            var i = (((16711680 & e) >> 16) * (1 - n) << 16 | ((65280 & e) >> 8) * (1 - n) << 8 | (255 & e) * (1 - n)) + (((16711680 & t) >> 16) * n << 16 | ((65280 & t) >> 8) * n << 8 | (255 & t) * n);
            return i
        }, e
    })();
    e.ColourUtil = t
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t;
    !(function(e) {
        function t(e) {
            return e - 0
        }

        function n(e) {
            return ~~e
        }

        function i(e) {
            return e - e % 1
        }

        function r(e) {
            var t, n, i, r, o = atob(e),
                s = o.length,
                a = new Uint8Array(new ArrayBuffer(s));
            for (t = 0; s > t; t++) a[t] = o.charCodeAt(t);
            for (n = new ArrayBuffer(a.length), i = new DataView(n), t = 0, r = a.length; r > t; t++) i.setUint8(a.length - 1 - t, a[t]);
            return i.getUint32(0)
        }
        e.StringToNumber = t, e.StringToInteger = n, e.Truncate = i, e.ConvertBase64ToNumber = r
    })(t = e.MathUtil || (e.MathUtil = {}))
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t = (function() {
        function e() {}
        return e.prototype.setConfigJSON = function(e) {
            this.rawJSON = e, this.configJSON = this.rawJSON.config
        }, e.prototype.getItem = function(e) {
            return this.configJSON[e]
        }, e.prototype.getRawJson = function() {
            return this.rawJSON
        }, e
    })();
    e.Config = t
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t = (function() {
        function e(e) {
            this.message = e, this.timestamp = new Date
        }
        return e.prototype.toString = function() {
            return "[" + this.timestamp + "] - " + this.message
        }, e
    })();
    e.LogEntry = t
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    e.AjaxLoader = (function() {
        "use strict";

        function t(e, t) {
            var i, r, o, s, a, c, l = [];
            if (l.splice(0, 0, document.getElementsByTagName("script")), c = !1, e.src)
                for (s = 0, a = l.length; a > s; s++)
                    if (l[s].src && l[s].src.split("?")[0] == e.src.split("?")[0]) {
                        c = !0;
                        break
                    } if (c) t && t();
            else {
                if (r = document.head || document.getElementsByTagName("head")[0], o = document.createElement("script"), o.type = "text/javascript", e.src) o.src = e.src, o.onerror = o.onload = t;
                else {
                    for (i = n(e), s = 0, a = l.length; a > s; s++) n(l[s]) == i && l[s].parentNode.removeChild(l[s]);
                    o.appendChild(document.createTextNode(i)), t && t()
                }
                r.appendChild(o, r.firstChild), e.parentNode && e.parentNode.removeChild(e)
            }
        }

        function n(e) {
            return e.text || e.textContent || e.innerHTML || ""
        }

        function i(e, n, r) {
            n < e.length ? t(e[n], (function() {
                i(e, ++n, r)
            })) : r && r()
        }
        return {
            load: function(e, t, n) {
                var i = new XMLHttpRequest;
                i.onreadystatechange = function() {
                    4 == i.readyState && (200 == i.status ? (t.innerHTML = i.responseText, n && n()) : $log("MatchLive markup request failed, status: " + i.status), i.onreadystatechange = null)
                }, i.open("GET", e, !0), i.send("")
            },
            loadAndExecute: function(t, n, i) {
                e.AjaxLoader.load(t, n, (function() {
                    e.AjaxLoader.processScripts(n, i)
                }))
            },
            processScripts: function(e, t) {
                var n, r = [],
                    o = e.getElementsByTagName("script");
                for (n = o.length; n--;) o[0].type && "text/javascript" !== o[0].type.toLowerCase() || r.push(o[0].parentNode ? o[0].parentNode.removeChild(o[0]) : o[0]);
                i(r, 0, t)
            }
        }
    })()
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    e.EventTrigger = (function() {
        "use strict";
        return {
            triggerEventOnElement: function(e, t, n) {
                var i;
                document.createEvent ? (i = document.createEvent("HTMLEvents"), i.initEvent(t, !0, !0)) : (i = document.createEventObject(), i.eventType = t), i.eventName = t, i.data = n || {}, document.createEvent ? document.dispatchEvent(i) : document.fireEvent("on" + i.eventType, i)
            }
        }
    })()
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t = (function() {
        function e(e, t) {
            this.scope = e, this.method = t
        }
        return e.prototype.toString = function() {
            return "[Delegate scope=" + this.scope + "]"
        }, e
    })();
    e.Delegate = t, e.EventListener = t
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t;
    !(function(e) {
        e[e.DEFAULT = 1] = "DEFAULT", e[e.FRACTIONAL = 1] = "FRACTIONAL", e[e.DECIMAL = 2] = "DECIMAL", e[e.AMERICAN = 3] = "AMERICAN", e[e.AMERICANFRACTIONAL = 4] = "AMERICANFRACTIONAL"
    })(t = e.OddsType || (e.OddsType = {}))
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t = (function() {
        function e() {}
        return e.NOT_SUSPENDED = "0", e.SUSPEND_AND_SHOW = "1", e.OFF_THE_BOARD = "2", e.IPPG_SUSPEND_AND_HIDE = "3", e
    })();
    e.SuspendType = t
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t, n, i = {},
        r = {};
    !(function(e) {
        e[e.AVAILABLE = 0] = "AVAILABLE", e[e.BELOW_MINIMUM = 1] = "BELOW_MINIMUM", e[e.NOT_OFFERED = 2] = "NOT_OFFERED"
    })(t = e.OddsAvailable || (e.OddsAvailable = {})), n = (function() {
        function e() {}
        return e.ConvertOddsDecimal = function(t, n, r) {
            var o, s, a, c, l, u, h, d;
            if (n || 0 == n || (n = 2), r || 0 == r || (r = !0), o = t + n, r && (i[o] || !t)) return i[o];
            if (a = t.indexOf("/", 1), a > -1)
                if (s = [t.slice(0, a), t.slice(++a)], c = Number(Number(s[0]) / Number(s[1]) + (r ? 1 : 0)).toFixed(4), Number(c) < 1.1 && c.split(".")[1].length > 2 && 0 == e.MinOdds && "0" !== c.charAt(c.length - 2) && (n = 3), l = 0, u = c.indexOf(".", 1), 0 == n) c = c.slice(0, u > -1 ? u : 2147483647);
                else if (u > -1)
                if (l = n - (c.length - ++u), l > 0)
                    for (h = 0; l > h; h++) c += "0";
                else 0 > l && (c = c.slice(0, c.length + l));
            else
                for (c += ".", d = 0; n > d; d++) c += "0";
            return r && (i[o] = c), c
        }, e.ConvertOddsUS = function(e) {
            var t, n, i, o, s, a;
            return r[e] || !e ? r[e] : (i = e.indexOf("/", 1), i > -1 && (n = [e.slice(0, i), e.slice(++i)], o = Number(n[0]), s = Number(n[1]), a = o / s, t = a > .999999 ? "+" + String(100 * a + 1e-6 | 0) : "-" + String(s / o * 100 + .999999 | 0)), r[e] = t, t)
        }, e.AreOddsBelowMinimum = function(t) {
            if (e.MinOdds <= 1) return !1;
            var n = e.ConvertOddsDecimal(t, 4);
            return isNaN(n) ? !1 : n - 0 < e.MinOdds
        }, e.AreOddsRestricted = function(e) {
            var t, n, i = e.data.PX,
                r = !1;
            if (i) {
                t = -1, n = Locator.user.countryCode64;
                do t = i.indexOf(n, ++t); while (-1 != t && t % 2);
                r = t > -1
            }
            return r
        }, e.ConvertDecimalOddsToFractional = function(t) {
            var n, i, r, o = String(t),
                s = Math.pow(o.length, 10),
                a = (t - 1) * s,
                c = e.FactorOdds(a, s);
            return c ? (i = a / c, r = s / c) : (i = a, r = s), n = String(i) + "/" + String(r)
        }, e.FactorOdds = function(t, n) {
            var i;
            return i = e.HCF(t, n), Math.floor(i)
        }, e.HCF = function(t, n) {
            var i;
            return i = 0 == t ? n : 0 == n ? t : e.HCF(n, t % n), Math.floor(i)
        }, e.AreOddsAvailable = function(e) {
            return this.AreOddsBelowMinimum(e.data.OD) ? t.BELOW_MINIMUM : this.AreOddsRestricted(e) ? t.NOT_OFFERED : t.AVAILABLE
        }, e.MinOdds = 0, e.NOT_OFFERED = "N / O", e
    })(), e.OddsConverter = n
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t = (function() {
        function e(e, t) {
            this.min = e, this.max = t
        }
        return e.prototype.getLength = function() {
            return this.max - this.min
        }, e
    })();
    e.Range = t
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t = (function() {
        function e(e) {
            this.type = e, $assert && $assert(e, '"type" has not been defined on ' + this)
        }
        return e.prototype.toString = function() {
            return "[Event365 type=" + this.type + "]"
        }, e.SInit = (function() {
            e.prototype.stopPropagation = !1, e.prototype.target = null, e.prototype.currentTarget = null
        })(), e
    })();
    e.Event365 = t
})(ns_gen5_events || (ns_gen5_events = {})), (function(e) {
    var t = (function(e) {
        function t(t, n) {
            var i = e.call(this, t) || this;
            return i.type = t, i.data = n, i
        }
        return __extends(t, e), t.prototype.toString = function() {
            return "[Event365 type=" + this.type + ", data = " + this.data + "]"
        }, t.DATA = "data", t
    })(e.Event365);
    e.DataEvent = t
})(ns_gen5_events || (ns_gen5_events = {})), (function(e) {
    var t = (function() {
        function e() {}
        return e.prototype.toString = function() {
            return "[EventDispatcher]"
        }, e.prototype.addEventListener = function(e, t) {
            $assert && $assert(t, "handlerDelegate must be defined."), this._eRegister || (this._eRegister = {}, this._touchlist = {});
            var n = this._eRegister[e];
            n ? n[n.length] = t : this._eRegister[e] = [t]
        }, e.prototype.dispatchEvent = function(e) {
            var t, n, i, r;
            if (e.target ? e.currentTarget = this : e.target = e.currentTarget = this, this._eRegister && (t = e.type, n = this._eRegister[t]))
                for (this._touchlist[t] && this.cleanRegister(t), r = 0; r < n.length; r++) {
                    i = n[r];
                    try {
                        i && i.method.call(i.scope, e)
                    } catch (o) {
                        ErrorReporter.Trace(i.scope, o)
                    }
                }
        }, e.prototype.bubbleEvent = function(e) {
            if (this.dispatchEvent(e), !e.stopPropagation)
                for (var t = this.parent; t;) {
                    if (t.bubbleEvent) {
                        t.bubbleEvent(e);
                        break
                    }
                    t = t.parent
                }
        }, e.prototype.removeEventListener = function(e, t) {
            var n, i;
            return this._eRegister ? (n = this._eRegister[e], void(n && (i = n.indexOf(t)) > -1 ? (n[i] = void 0, this._touchlist[e] = !0) : $assert && $assert(!1, "removeEventListener call failed because the delegate didn't exist."))) : void($assert && $assert(!1, "removeEventListener call failed because the eRegister doesn't exist."))
        }, e.prototype.hasEventListener = function(e) {
            if (!this._eRegister) return !1;
            this._touchlist[e] && this.cleanRegister(e);
            var t = this._eRegister[e];
            return t && t.length > 0
        }, e.prototype.hasEventListenerWithDelegate = function(e, t) {
            if (!this._eRegister) return !1;
            this._touchlist[e] && this.cleanRegister(e);
            var n = this._eRegister[e];
            return !!(n && n.indexOf(t) > -1)
        }, e.prototype.cleanRegister = function(e) {
            var t, n, i, r, o;
            for (this._touchlist[e] = !1, t = this._eRegister[e], n = [], i = 0, r = t; i < r.length; i++) o = r[i], o && (n[n.length] = o);
            this._eRegister[e] = n
        }, e.SInit = (function() {
            e.prototype._eRegister = null, e.prototype._touchlist = null
        })(), e
    })();
    e.EventDispatcher = t
})(ns_gen5_events || (ns_gen5_events = {})), (function(e) {
    var t = (function(e) {
        function t(t, n) {
            void 0 === n && (n = NaN);
            var i = e.call(this, t) || this;
            return i.width = n, i
        }
        return __extends(t, e), t.prototype.toString = function() {
            return "[ApplicationEvent]"
        }, t.LOADING = "loading", t.LOADING_COMPLETE = "loadingComplete", t.LOADING_TIMEOUT = "loadingTimeout", t.UNLOADING = "unloading", t.WIDTH_STATE_CHANGED = "widthStateChanged", t.VIEW_STATE_CHANGED = "viewStateChanged", t.HEIGHT_CHANGED = "heightChanged", t.WIDTH_CHANGED = "widthChanged", t.FOCUS_IN = "focusIn", t.FOCUS_OUT = "focusOut", t
    })(e.Event365);
    e.ApplicationEvent = t
})(ns_gen5_events || (ns_gen5_events = {})), (function(e) {
    var t = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e), t.ODDS_TYPE_CHANGED = "oddsChanged", t.LANGUAGE_CHANGED = "languageChanged", t
    })(e.Event365);
    e.UserEvent = t
})(ns_gen5_events || (ns_gen5_events = {})), (function(e) {
    var t = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e), t.MODULE_READY = "moduleReady", t
    })(e.Event365);
    e.ModuleEvent = t
})(ns_gen5_events || (ns_gen5_events = {})), (function(e) {
    var t = e.Event365,
        n = (function(e) {
            function t(t) {
                return e.call(this, t) || this
            }
            return __extends(t, e), t.BALANCEMODEL_UPDATE_EVENT = "balanceModelUpdated", t
        })(t);
    e.BalanceModelEvent = n
})(ns_gen5_events || (ns_gen5_events = {})), (function(e) {
    var t = (function(e) {
        function t(t, n) {
            var i = e.call(this, t) || this;
            return i.modal = n, i
        }
        return __extends(t, e), t.MODAL_CHANGE = "modalChange", t
    })(e.Event365);
    e.ModalEvent = t
})(ns_gen5_events || (ns_gen5_events = {})), (function(e) {
    var t = ns_gen5_events.EventDispatcher,
        n = (function(e) {
            function t(t) {
                var n = e.call(this) || this;
                return n.preformattedXML = t, n
            }
            return __extends(t, e), t.prototype.setPreformattedXML = function(e) {
                this.preformattedXML !== e && (this.preformattedXML = e)
            }, t.prototype.parse = function(e) {
                var t, n, i;
                if (e && this.setPreformattedXML(e), window.DOMParser && DOMParser.prototype.parseFromString) n = new DOMParser, t = n.parseFromString(this.preformattedXML, "text/xml");
                else {
                    if (n = new ActiveXObject("Microsoft.XMLDOM"), n.aSync && (n.aSync = !1), i = n.loadXML(this.preformattedXML), !i) return ErrorReporter.Trace(this, "Unable to parse XML"), null;
                    t = n
                }
                return t
            }, t
        })(t);
    e.XMLParser = n
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t = (function() {
        function e() {
            this.manifest = window.websiteManifest
        }
        return e.prototype.getBuildVersion = function(e) {
            return e ? this.manifest.modulesInformation[e].version : this.manifest.version
        }, e.prototype.getDefaultTopic = function(e) {
            return this.manifest.modulesInformation[e].defaultTopic
        }, e.prototype.getDefaultApiLocation = function(e) {
            return this.manifest.modulesInformation[e].defaultApiLocation
        }, e.prototype.getLocaleNames = function(e) {
            return this.manifest.modulesInformation[e].localeNames
        }, e.prototype.resolveResourcePath = function(e, t) {
            return ""
        }, e.prototype.getDependencyLookup = function() {
            return this.manifest.modulesInformation
        }, e.prototype.getApp = function(e) {
            return this.manifest.modulesInformation[e].app
        }, e
    })();
    e.ManifestManager = t
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e), t.COMPLETE = "complete", t.TICK = "tick", t
    })(ns_gen5_events.Event365);
    e.TimerEvent = t
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t = e.TimerEvent,
        n = (function(e) {
            function n(t, n) {
                var i = e.call(this) || this;
                return i.time = t, i.timeStarted = null, i.timerid = -1, i.timeRemaining = 0, i.repeats = n || 0, i.ticks = 0, i.callback_tickHandler = function() {
                    return i.tickHandler()
                }, i
            }
            return __extends(n, e), n.prototype.start = function() {
                var e = this.timeRemaining || this.time;
                this.timeRemaining = 0, this.timeStarted = new Date, this.timerid = setTimeout(this.callback_tickHandler, e), this.active = !0
            }, n.prototype.reset = function() {
                this.timerid > -1 && (clearTimeout(this.timerid), this.timerid = -1, this.ticks = 0, this.timeRemaining = 0, this.active = !1)
            }, n.prototype.stop = function() {
                this.timerid > -1 && (this.timeRemaining = this.time - ((new Date).getTime() - this.timeStarted.getTime()), clearTimeout(this.timerid), this.timerid = -1, this.active = !1)
            }, n.prototype.tickHandler = function() {
                this.repeats > -1 && ++this.ticks >= this.repeats ? (this.dispatchEvent(new t(t.COMPLETE)), this.completeDelegate && this.completeDelegate(), this.active = !1) : (this.dispatchEvent(new t(t.TICK)), this.tickDelegate && this.tickDelegate(), this.start())
            }, n
        })(ns_gen5_events.EventDispatcher);
    e.Timer = n
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t = (function(e) {
        function t(t, n, i) {
            var r = e.call(this, t) || this;
            return r.date = n, r.dateZoneAdjusted = i, r
        }
        return __extends(t, e), t.prototype.toString = function() {
            return "[TimeManagerEvent type=" + this.type + "]"
        }, t.TICK = "tick", t
    })(ns_gen5_events.Event365);
    e.TimeManagerEvent = t
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t = e.TimeManagerEvent,
        n = (function(e) {
            function n() {
                var t = e.call(this) || this;
                return t._callback_serverTime_tick = function() {
                    t._serverTime_tick()
                }, t
            }
            return __extends(n, e), n.prototype.toString = function() {
                return "[TimeManager]"
            }, n.prototype.getTime = function() {
                return this._serverDate ? new Date(this._serverDate.getTime()) : null
            }, n.prototype.getTimeInDateFormat = function() {
                var e = n.ParseDate(this._serverTime);
                return e
            }, n.prototype.getTimeZoneAdjustedDate = function() {
                var e = this._serverDateZoneAdjusted ? this._serverDateZoneAdjusted : this._serverDate;
                return e ? new Date(e.getTime()) : null
            }, n.ParseDate = function(e) {
                var t = new Date(Number(e.slice(0, 4)), Number(e.slice(4, 6)) - 1, Number(e.slice(6, 8)), Number(e.slice(8, 10)), Number(e.slice(10, 12)), Number(e.slice(12, 14)));
                return t
            }, n.ParseZoneDate = function(e) {
                var t = n.ParseDate(e);
                return t.setTime(t.getTime() + 60 * Locator.user.timeZoneAdjustment * 1e3), t
            }, n.ParseEpochDate = function(e, t) {
                t && (e += "000");
                var n = new Date(1e3 * Number(e));
                return n
            }, n.ParseEpochZoneDate = function(e, t) {
                var i = n.ParseEpochDate(e, t);
                return i.setTime(i.getTime() + 60 * Locator.user.timeZoneAdjustment * 1e3), i
            }, n.StripNonNumericChars = function(e) {
                var t = /[^0-9]/g,
                    n = e.replace(t, "");
                return n
            }, n.getTimeString = function(e, t) {
                void 0 === t && (t = !0);
                var n = e.toTimeString();
                return n = n.substr(0, n.indexOf(" ")), t ? n : n = n.substr(0, n.lastIndexOf(this.TIME_SEPERATOR))
            }, n.prototype.setServerTime = function(e) {
                var t, i;
                this._serverTime || (Locator.validationManager.callLater(this._callback_serverTime_tick), this._lastUpdatedMS = (new Date).getTime()), this._serverTime = e, this._serverDate = n.ParseDate(e), this._lastUpdatedMS = (new Date).getTime(), t = Locator.user.timeZoneAdjustment, 0 != t && (this._serverDateZoneAdjusted = n.ParseDate(e), i = this._serverDate.getMinutes() + t, this._serverDateZoneAdjusted.setMinutes(i))
            }, n.prototype._serverTime_tick = function() {
                var e, n, i, r;
                this._serverDate && (n = (new Date).getTime(), i = n - this._lastUpdatedMS, this._lastUpdatedMS = n, r = this._serverDate.getTime() + i, this._serverDate.setTime(r), this._serverDateZoneAdjusted ? (r = this._serverDateZoneAdjusted.getTime() + i, this._serverDateZoneAdjusted.setTime(r), e = this._serverDateZoneAdjusted) : e = this._serverDate, this.dispatchEvent(new t(t.TICK, this._serverDate, e)), setTimeout(this._callback_serverTime_tick, 1e3))
            }, n.DATE_SEPERATOR = "/", n.TIME_SEPERATOR = ":", n
        })(ns_gen5_events.EventDispatcher);
    e.TimeManager = n
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    e.PrintDump = (function() {
        "use strict";

        function e(n, i) {
            var r, o, s, a, c, l;
            for (i || (i = 0), r = t(n), o = "", a = "", c = 0; i > c; c++) a += "  ";
            switch (r) {
                case "string":
                    return '"' + n + '"';
                case "number":
                    return n.toString();
                case "boolean":
                    return n ? "true" : "false";
                case "date":
                    return "Date: " + n.toLocaleString();
                case "array":
                    for (o += "List ( \n", s = 0; s < n.length; s++) o += a + "  " + s + " => " + e(n[s], i + 1) + "\n";
                    o += a + ")";
                    break;
                case "object":
                    o += "\n";
                    for (l in n) n.hasOwnProperty(l) && (o += a + "  " + l + ": " + e(n[l], i + 1) + "\n");
                    break;
                default:
                    o += "N/A: " + r
            }
            return o
        }

        function t(e) {
            var t = typeof e;
            if ("object" !== t) return t;
            switch (e) {
                case null:
                    return "null"
            }
            switch (e.constructor) {
                case Array:
                    return "array";
                case Boolean:
                    return "boolean";
                case Date:
                    return "date";
                case Number:
                    return "number";
                case Object:
                    return "object"
            }
            return "Unknown"
        }

        function n(t) {
            return e(t)
        }
        return n
    })()
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t = "\r\n",
        n = " -------------------- ",
        i = (function() {
            function i() {}
            return i.prototype.buildHeader = function(e) {
                return "*" + n + e + n + "*" + t
            }, i.prototype.generate = function() {
                var e = [this._appendSummary()];
                return e.push(this._appendNavigationHistory()), e.push(this._appendManifest()), e.push(this._appendSiteProps()), e.push(this._appendSettings()), e.push(this._pushedConfig()), e.push(this._appendNavigator()), e.push(this._appendReadIt()), e.push(this._appendSportSubscriptions()), e.push(this._appendPrivateSubscriptions()), e.push(this._appendErrorLog()), e.push(this._appendTraceLog()), e.push(this._appendOpenBetsLog()), e.push(this._appendAAATCookie()), e.push(this._appendSiteDataLocal()), e
            }, i.prototype.send = function() {
                var e = new XMLHttpRequest;
                e.open("POST", "/api/1/clienterrors/ots", !0), e.send(this.generate())
            }, i.prototype._appendSiteProps = function() {
                return ""
            }, i.prototype._appendAAATCookie = function() {
                var t = e.CookieManager.GetCookieValue("aaat");
                return t ? this.buildHeader("Alternative Auth Token Cookie") + t : ""
            }, i.prototype._appendSiteDataLocal = function() {
                if ("siteDataLocal" in window) {
                    var t = window.siteDataLocal.siteData;
                    return t.constructor = Object, this.buildHeader("Site Data Local") + e.PrintDump(t)
                }
                return ""
            }, i.prototype._appendManifest = function() {
                var e, n, i = this.buildHeader("Manifest");
                i = i.concat("MasterVersion:" + Locator.manifestManager.getBuildVersion() + t), e = Locator.manifestManager.getDependencyLookup();
                for (n in e) e.hasOwnProperty(n) && (i = i.concat(n + ":" + t), i = i.concat("  version:" + e[n].version + t), i = i.concat(t));
                return i
            }, i.prototype._appendSettings = function() {
                var n, i, r = Locator.user,
                    o = this.buildHeader("User");
                o = o.concat("sessionId: " + e.CookieManager.GetSessionId() + t);
                for (n in r)
                    if (r.hasOwnProperty(n)) {
                        if (i = r[n], "object" == typeof i) try {
                            i = JSON.stringify(i)
                        } catch (s) {
                            i = ""
                        }
                        i && (o = o.concat(n + ":" + i + t))
                    } return o
            }, i.prototype._pushedConfig = function() {
                var e, n = "",
                    i = Locator.pushedConfig,
                    r = this.buildHeader("pushedConfig");
                for (n in i)
                    if (i.hasOwnProperty(n)) {
                        if (e = i[n], "object" == typeof e) try {
                            e = JSON.stringify(e)
                        } catch (o) {
                            e = ""
                        }
                        e && (r = r.concat(n + ":" + e + t))
                    } return r
            }, i.prototype._appendSummary = function() {
                var e = "";
                return e = e.concat("Current Url:" + Locator.config.domain.href() + t), e = e.concat("Current time:" + new Date + t)
            }, i.prototype._appendNavigator = function() {
                var e = window.navigator,
                    n = this.buildHeader("Navigator");
                return n = n.concat("UserAgent:" + e.userAgent + t), n = n.concat("Language:" + (e.language || e.userLanguage) + t), n = n.concat("Vendor:" + e.vendor + t), n = n.concat("Platform:" + e.platform + t)
            }, i.prototype._appendNavigationHistory = function() {
                return ""
            }, i.prototype._appendReadIt = function() {
                var e, n = readit.ReadItLog.getLog(),
                    i = this.buildHeader("ReadIt");
                for (e = 0; e < n.length; e++) i = i.concat(n[e].toString() + t);
                return i
            }, i.prototype._appendSportSubscriptions = function() {
                return this.buildHeader("SubscriptionManager - Sports") + Locator.subscriptionManager._OtsReport()
            }, i.prototype._appendPrivateSubscriptions = function() {
                return this.buildHeader("PrivateSubscriptionManager") + Locator.privateSubscriptionManager._OtsReport()
            }, i.prototype._appendErrorLog = function() {
                var e, n = ErrorReporter.GetLog(),
                    i = this.buildHeader("Error Reporter");
                for (e = 0; e < n.length; e++) i = i.concat(n[e] + t);
                return i
            }, i.prototype._appendTraceLog = function() {
                var i, r, o, s, a = e.InfoReporter.getLog(),
                    c = this.buildHeader("Trace Log");
                for (i in a)
                    for (c = c.concat(n + i + n + t), r = 0, o = a[i]; r < o.length; r++) s = o[r], c = c.concat(s + t);
                return c = c.concat(n + t)
            }, i.prototype._appendOpenBetsLog = function() {
                var e, n, i = "";
                try {
                    if (n = Locator.treeLookup.getReference("OPENBETS"))
                        for (i = this.buildHeader("Open Bets"), e = 0; e < n.getChildren().length; e++) i = i.concat(n.getChildren()[e].data.IT + t)
                } catch (r) {
                    i = ""
                }
                return i
            }, i
        })();
    e.OTSReport = i
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t = ns_gen5_ml.LanguageSettings,
        n = (function() {
            function e() {}
            return e.Format = function(e) {
                var t, n, i, r = [];
                for (t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
                if (!e) return null;
                for (n = r.length, i = 0; n > i; i++) e = e.split("{" + i + "}").join(r[i]);
                return e
            }, e.Uppercase = function(e) {
                return e ? t.allowCapitalisation() ? e.toUpperCase() : e : ""
            }, e.Trim = function(e) {
                return e.replace(/^\s+|\s+$/g, "")
            }, e.DecodeHtmlEntity = function(e) {
                return e ? e.replace(this.HTML_ENTITY_REGEX, (function(e, t) {
                    return String.fromCharCode(t)
                })) : ""
            }, e.HTML_ENTITY_REGEX = /&#(\d+);/g, e
        })();
    e.StringUtil = n
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t = (function() {
        function e() {
            this.endPageRenderReceivers = [], this.pageRenderEndQueued = !1
        }
        return e.prototype.pageRenderEnd = function() {
            var e = this;
            this.pageRenderEndQueued || (this.pageRenderEndQueued = !0, Locator.validationManager.callNewContext((function() {
                Locator.validationManager.callNewContext((function() {
                    e.callPageRenderEndReceivers(), e.pageRenderEndQueued = !1
                }))
            })))
        }, e.prototype.registerEndPageRenderReceivers = function(e) {
            $assert && $assert(-1 === this.endPageRenderReceivers.indexOf(e), "Delegate already exists"), this.endPageRenderReceivers.push(e)
        }, e.prototype.callPageRenderEndReceivers = function() {
            for (; this.endPageRenderReceivers.length;) {
                var e = this.endPageRenderReceivers.shift();
                e.pageLoaded()
            }
        }, e
    })();
    e.PageRender = t
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t = (function() {
        function e() {}
        return e.getUnloadedDependencies = function(e) {
            var t, n, i, r, o, s, a;
            if (!this.Lookup) return null;
            for (t = [], n = Locator.manifestManager.getApp(e), n && boot.isAppRequest && t.push(e + "-App"), i = Locator.manifestManager.getLocaleNames(e), i && i.length && (r = boot.getLocale(), -1 === i.indexOf(r) && (r = "Default"), t.push(e + "-" + r)), o = 0, s = this.Lookup[e].deps; o < s.length; o++) a = s[o], this.LoadedDependenciesLookup[a] || t.push(a);
            return t.length ? t : null
        }, e.setLookup = function(e) {
            this.Lookup = e
        }, e.setLoaded = function(e) {
            this.LoadedDependenciesLookup[e] = !0
        }, e.IsLoaded = function(e) {
            return e in this.LoadedDependenciesLookup
        }, e.LoadedDependenciesLookup = {}, e
    })();
    e.DependencyManager = t
})(ns_gen5_net || (ns_gen5_net = {})), (function(e) {
    var t, n, i = ns_gen5_util.Timer,
        r = ns_gen5_util.TimerEvent,
        o = (function() {
            function e(e) {
                this.keys = [], e && this.deSerialize(e)
            }
            return e.prototype.addPair = function(e, t) {
                this.keys[this.keys.length] = [e, t]
            }, e.prototype.getPairWithKey = function(e) {
                var t, n, i;
                for (t = 0, n = this.keys; t < n.length; t++)
                    if (i = n[t], i[0] == e) return i[1];
                return null
            }, e.prototype.getKeys = function() {
                return this.keys
            }, e.prototype.serialize = function() {
                var e, t, n, i = "";
                for (e = 0, t = this.keys; e < t.length; e++) n = t[e], i += n[0] + "=" + encodeURIComponent(n[1]) + "&";
                return i.length ? i.slice(0, i.length - 1) : i
            }, e.prototype.deSerialize = function(e) {
                var t, n, i, r, o = e.split("&");
                for (t = 0, n = o; t < n.length; t++) i = n[t], r = i.indexOf("="), r > -1 && this.addPair(i.substring(0, r), i.substring(r + 1))
            }, e
        })();
    e.URLVariables = o, t = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e), t.COMPLETE = "complete", t.ERROR = "error", t.TIMEOUT = "timeout", t
    })(ns_gen5_events.Event365), e.LoaderEvent = t, n = (function(e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(n, e), n.prototype.load = function(e, o) {
            var s, a, c, l, u, h = this;
            if (this.url = e, s = this.xhr = new XMLHttpRequest, a = !1, s.onreadystatechange = function(e) {
                    var n, i;
                    4 != s.readyState || a || (a = !0, s.onreadystatechange = null, h.xhr = null, 200 == s.status ? (h.completeHandler && Locator.validationManager.callNewContext((function() {
                        return h.completeHandler(s.responseText, s.status)
                    })), h.hasEventListener(t.COMPLETE) && (n = new t(t.COMPLETE), n.status = 200, n.data = s.responseText, Locator.validationManager.callNewContext((function() {
                        return h.dispatchEvent(n)
                    })))) : (h.errorHandler && Locator.validationManager.callNewContext((function() {
                        return h.errorHandler(s.status, s.responseText)
                    })), h.hasEventListener(t.ERROR) && (i = new t(t.ERROR), i.status = s.status, i.data = s.responseText, Locator.validationManager.callNewContext((function() {
                        return h.dispatchEvent(i)
                    })))), h.disposeTimer())
                }, s.open(o && o.method || "GET", e + (o && o.method != n.POST && o.urlVariables && "?" + o.urlVariables.serialize() || ""), !0), o && o.contentType && s.setRequestHeader("Content-type", o.contentType), o && o.customRequestHeaders)
                for (c = 0, l = o.customRequestHeaders; c < l.length; c++) u = l[c], s.setRequestHeader(u[0], u[1]);
            s.withCredentials = o && o.withCredentials || !1, o && o.timeout && (this.timer = new i(o.timeout, 1), this.timer.addEventListener(r.COMPLETE, this.delegate_timeHandler = new ns_gen5_util.Delegate(this, function() {
                h.abort(), h.timeoutHandler && Locator.validationManager.callNewContext((function() {
                    return h.timeoutHandler()
                })), h.hasEventListener(t.TIMEOUT) && Locator.validationManager.callNewContext((function() {
                    return h.dispatchEvent(new t(t.TIMEOUT))
                }))
            })), this.timer.start()), s.send((o && o.method == n.POST ? o.urlVariables && o.urlVariables.serialize() : null) || o && o.data || "")
        }, n.prototype.abort = function() {
            try {
                this.xhr && (this.xhr.abort(), this.xhr.onreadystatechange = null, this.xhr = null)
            } catch (e) {}
            this.disposeTimer()
        }, n.prototype.getURL = function() {
            return this.url
        }, n.prototype.disposeTimer = function() {
            this.timer && (this.timer.removeEventListener(r.COMPLETE, this.delegate_timeHandler), this.timer.stop(), this.timer = null)
        }, n.GET = "GET", n.POST = "POST", n
    })(ns_gen5_events.EventDispatcher), e.Loader = n
})(ns_gen5_net || (ns_gen5_net = {})), (function(e) {
    var t = (function() {
        function t() {}
        return t.prototype.loadModule = function(t, n, i) {
            function r() {
                n.resourcesLoaded = n.resourcesNeeded, i()
            }
            var o, s, a, c, l;
            if (!e.DependencyManager.IsLoaded(t)) {
                if (o = e.DependencyManager.getUnloadedDependencies(t))
                    for (s = 0, a = o; s < a.length; s++) c = a[s], this.loadModule(c, new ns_gen5_ui.ModuleResourcePackage, (function() {}));
                l = boot.loadModule(t, r), e.DependencyManager.setLoaded(t), l & boot.LoadingFlags.CSS && n.resourcesNeeded++, l & boot.LoadingFlags.LANGUAGE && n.resourcesNeeded++
            }
        }, t
    })();
    e.ModuleLoaderBlob = t
})(ns_gen5_net || (ns_gen5_net = {})), (function(e) {
    var t = (function() {
        function e() {
            this.manifest = _websiteManifest
        }
        return e.prototype.getBuildVersion = function(e) {
            return e ? this.manifest.modulesInformation[e].version : this.manifest.version
        }, e.prototype.getDefaultTopic = function(e) {
            return this.manifest.modulesInformation[e].defaultTopic
        }, e.prototype.getDependencyLookup = function() {
            return this.manifest.modulesInformation
        }, e.prototype.getDefaultApiLocation = function(e) {
            return this.manifest.modulesInformation[e].defaultApiLocation
        }, e.prototype.getLocaleNames = function(e) {
            return this.manifest.modulesInformation[e].localeNames
        }, e.prototype.getApp = function(e) {
            return this.manifest.modulesInformation[e].app
        }, e
    })();
    e.WebsiteManifest = t
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t = (function(e) {
            function t(t, n) {
                var i = e.call(this) || this;
                return i._url = t, i._options = n, i
            }
            return __extends(t, e), t.prototype.load = function() {
                e.prototype.load.call(this, this._url, this._options)
            }, t
        })(ns_gen5_net.Loader),
        n = (function() {
            function e() {}
            return e.QueueForLogSubmission = function(e, n) {
                $assert && $assert(e, "URL isn't defined."), this.LoggingQueue[this.LoggingQueue.length] = new t(e, n)
            }, e.ProcessQueue = function() {
                var e, t, n, i = this.LoggingQueue;
                for (this.LoggingQueue = [], e = i.length, t = 0; e > t; t++) try {
                    n = i[t], n.load()
                } catch (r) {
                    ErrorReporter.Trace(this, r)
                }
            }, e.LoggingQueue = [], e
        })();
    e.ServerLogger = n
})(ns_gen5_util_logging || (ns_gen5_util_logging = {})), (function(e) {
    var t = e.ServerLogger,
        n = (function() {
            function e() {}
            return e.QueueError = function(e, n, i) {
                var r, o, s, a, c, l, u, h;
                try {
                    if (!Locator.pushedConfig.getArePropertiesInitialised()) return;
                    if (r = ns_gen5_util.MathUtil.StringToNumber(Locator.pushedConfig.getAttributeValue("WL")) || 0, !(r > 0)) return;
                    if (1e4 * Math.random() > r) return;
                    if (o = n.stack || n.message, s = o && o.split("\n"), a = void 0, c = void 0, l = void 0, "string" == typeof e) a = e;
                    else if (a = e.moduleName || "", a || (u = ns_gen5_ui.Module.getRoot(e), u && (a = u.parent.moduleName || "")), e._styleList)
                        for (h in e._styleList) a = a + " " + h;
                    s && s[1] ? (s[0].indexOf(n.message) > -1 ? (c = s[1].match(/\.([<>\w\d]+)\s/i), c = c ? c[1] : "Window") : c = s[0].split("@")[0], l = n.message) : l = n + "", t.QueueForLogSubmission("/api/1/clienterrors", {
                        method: "POST",
                        data: JSON.stringify({
                            summary: (a || c || "Unknown") + ": " + c + " encountered an error with the message " + l,
                            filename: a || "Unknown",
                            funcname: c || "Unknown",
                            main: e + "",
                            message: l || "Unknown",
                            stack: o || "Unknown",
                            url: Locator.config.domain.href(),
                            history: (ns_gen5_util.InfoReporter.getLog()[ns_gen5_util.InfoReporterGroups.NAVIGATION_ENTRY] || []).join("\n"),
                            zone: Locator.user.zoneId,
                            language: Locator.user.languageId,
                            manifestversion: Locator.manifestManager.getBuildVersion(),
                            betstring: window.safeSessionStorage.getItem("betstring") || "Unknown",
                            metadata: i || ""
                        })
                    })
                } catch (d) {
                    ns_gen5_util.InfoReporter.Trace(ns_gen5_util.InfoReporterGroups.GENERAL_ENTRY, "MobileServerLogger failed to submit to the server.")
                }
            }, e
        })();
    e.ClientErrorLogger = n
})(ns_gen5_util_logging || (ns_gen5_util_logging = {})), (function(e) {
    var t = ns_gen5_net.Loader,
        n = ns_gen5_net.URLVariables,
        i = (function() {
            function e() {}
            return e.QueueCounter = function(t, n) {
                try {
                    e.CounterLookup[t] ? e.CounterLookup[t] += n : e.CounterLookup[t] = n, e.FlushTimer || (e.FlushTimer = setTimeout((function() {
                        e.FlushCounters()
                    }), 1e4))
                } catch (i) {
                    ns_gen5_util.InfoReporter.Trace(ns_gen5_util.InfoReporterGroups.GENERAL_ENTRY, "CounterLogger failed to submit to the server.")
                }
            }, e.QueueAdd = function(t, n) {
                try {
                    e.StatsArray[t] || (e.StatsArray[t] = []), e.StatsArray[t] = e.StatsArray[t].concat(n), e.FlushTimer || (e.FlushTimer = setTimeout((function() {
                        e.FlushCounters()
                    }), 1e4))
                } catch (i) {
                    ns_gen5_util.InfoReporter.Trace(ns_gen5_util.InfoReporterGroups.GENERAL_ENTRY, "CounterLogger failed to submit to the server.")
                }
            }, e.ForceCounterFlush = function() {
                e.FlushCounters()
            }, e.FlushCounters = function() {
                var i, r, o, s, a, c;
                if (!Locator.pushedConfig.getArePropertiesInitialised()) return void(e.FlushTimer = setTimeout((function() {
                    e.FlushCounters()
                }), 1e4));
                if ("1" === Locator.pushedConfig.getAttributeValue("EC")) {
                    i = new n;
                    for (r in e.CounterLookup) i.addPair(r, e.CounterLookup[r] + "");
                    for (r in e.StatsArray)
                        for (o = e.StatsArray[r], s = 0, a = o; s < a.length; s++) c = a[s], i.addPair(r, c);
                    (new t).load("/uicountersapi/increment", {
                        method: "GET",
                        urlVariables: i
                    }), e.CounterLookup = {}, clearTimeout(e.FlushTimer), e.FlushTimer = null
                }
            }, e.CounterLookup = {}, e.StatsArray = {}, e
        })();
    e.CounterLogger = i
})(ns_gen5_util_logging || (ns_gen5_util_logging = {})), (function(e) {
    var t = e.CounterLogger,
        n = (function() {
            function e(e) {
                this.startTime = this.getTimeStamp(), this.key = e
            }
            return e.prototype.getTimeStamp = function() {
                return performance && performance.now ? performance.now() : Date.now()
            }, e.prototype.snapshotTimestampNow = function() {
                this.endTime = this.getTimeStamp()
            }, e.prototype.record = function() {
                var e = this.endTime ? this.endTime - this.startTime : this.getTimeStamp() - this.startTime;
                isNaN(e) || t.QueueAdd(this.key, e.toFixed(2))
            }, e
        })();
    e.Timer = n
})(ns_gen5_util_logging || (ns_gen5_util_logging = {})), (function(e) {
    var t, n = ns_gen5_net.Loader,
        i = ns_gen5_net.LoaderEvent,
        r = ns_gen5_net.URLVariables,
        o = (function() {
            function e() {
                this.data = {}
            }
            return e.UserPreferencesGUID = "ns_gen5_util.UserPreferenceData", e
        })();
    e.UserPreferenceData = o, t = (function() {
        function t() {
            this._preferences = new o, this._preferencesInitialised = !1, this._pendingRequest = null, this._saveToServerCompleteHandlerDelegate = new e.Delegate(this, this._saveToServerCompleteHandler), this._saveToServerErrorHandlerDelegate = new e.Delegate(this, this._saveToServerErrorHandler)
        }
        return t.prototype.setUserPreferenceServiceUrl = function(e) {
            $assert && $assert(!this._userPreferenceServiceUrl, "setUserPreferenceServiceUrl: value already set."), this._userPreferenceServiceUrl = e
        }, t.prototype.loadInitialPreferenceData = function(e) {
            $assert && $assert(!this._preferencesInitialised, "UserPreferencesAPI already initialised!"), this._preferencesInitialised || (this._preferencesInitialised = !0, e && (this._preferences.data[t.TEAM_PREFERENCE] = e.teamPreference, this._preferences.data[t.MARKET_GROUP_PREFERENCE] = e.marketGroupPreference, this._preferences.data[t.LEAGUE_TABLE_PREFERENCE] = e.leagueTablePreference, this._preferences.data[t.OVERVIEW_DEFAULT_MARKET] = e.overviewDefaultMarketPreference, this._preferences.data[t.PREGAME_CLASSIFICATION_MENU_FAVOURITES] = e.prematchClassificationsPreference, this._preferences.data[t.INPLAY_FAVOURITE_MARKETS] = e.inplayFavouriteMarkets, this._preferences.data[t.ALT_AUTH_DISMISSED_COUNT] = [e.altAuthDismissedCount], this._preferences.data[t.NOTIFICATIONS_DEVICEID] = [e.notificationsDeviceID]))
        }, t.prototype.getSerializationData = function() {
            return this._preferences
        }, t.prototype.setSerializationData = function(e) {
            this._preferences = e
        }, t.prototype.addValues = function(e, t) {
            var n, i, r, o;
            for (this._preferences.data[e] || (this._preferences.data[e] = []), n = this._preferences.data[e], i = 0, r = t; i < r.length; i++) o = r[i], -1 === n.indexOf(o) && n.push(o);
            this.save(e)
        }, t.prototype.removeValues = function(e, t) {
            var n, i, r = this._preferences.data[e];
            for (n = 0; n < r.length; ++n)
                for (i = 0; i < t.length; ++i) r[n] === t[i] && r.splice(n--, 1);
            this._preferences.data[e] = r, this.save(e)
        }, t.prototype.setValue = function(e, t) {
            this.setValues(e, [t])
        }, t.prototype.setValues = function(e, t) {
            this._preferences.data[e] = t, this.save(e)
        }, t.prototype.getValue = function(e) {
            var t = this._preferences.data[e];
            return t ? t[0] : ""
        }, t.prototype.getValues = function(e) {
            return this._preferences.data[e]
        }, t.prototype.save = function(e) {
            this.saveToServer(e)
        }, t.prototype.saveToServer = function(e) {
            var t, o, s;
            if (Locator.user.isLoggedIn) {
                if (this._clearPendingRequest(), t = new r, e) t.addPair(e, this._preferences.data[e].join(","));
                else
                    for (o in this._preferences.data) t.addPair(o, this._preferences.data[o].join(","));
                s = this._pendingRequest = new n, s.addEventListener(i.COMPLETE, this._saveToServerCompleteHandlerDelegate), s.addEventListener(i.ERROR, this._saveToServerErrorHandlerDelegate), s.load(this._userPreferenceServiceUrl, {
                    method: n.POST,
                    urlVariables: t,
                    contentType: "application/x-www-form-urlencoded"
                })
            }
        }, t.prototype._saveToServerCompleteHandler = function() {
            $log(this, "Save To Server OK"), this._clearPendingRequest()
        }, t.prototype._saveToServerErrorHandler = function(e) {
            ErrorReporter.Trace(this, "Save To Server : " + e.data), this._clearPendingRequest()
        }, t.prototype._clearPendingRequest = function() {
            this._pendingRequest && (this._pendingRequest.removeEventListener(i.COMPLETE, this._saveToServerCompleteHandlerDelegate), this._pendingRequest.removeEventListener(i.ERROR, this._saveToServerErrorHandlerDelegate), this._pendingRequest.abort(), this._pendingRequest = null)
        }, t.TEAM_PREFERENCE = "te", t.MARKET_GROUP_PREFERENCE = "lg", t.LEAGUE_TABLE_PREFERENCE = "lt", t.OVERVIEW_DEFAULT_MARKET = "odm", t.PREGAME_CLASSIFICATION_MENU_FAVOURITES = "lhsf", t.INPLAY_FAVOURITE_MARKETS = "ipf", t.ALT_AUTH_DISMISSED_COUNT = "aadc", t.NOTIFICATIONS_DEVICEID = "nd", t
    })(), e.UserPreferenceAPI = t
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t = (function() {
        function e() {
            this._interface = null
        }
        return e.prototype.setUserPreferenceInterface = function(e) {
            this._interface = e
        }, e.prototype.get3wayPreference = function(e) {
            try {
                if (this._interface && this._interface.get3wayPreference) return this._interface.get3wayPreference(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
            return !1
        }, e.prototype.set3wayPreference = function(e, t) {
            try {
                this._interface && this._interface.set3wayPreference && this._interface.set3wayPreference(e, t)
            } catch (n) {
                ErrorReporter.Trace(this, n)
            }
        }, e.prototype.getAltAuthDissmisedCount = function() {
            try {
                return this._interface && this._interface.getAltAuthDissmisedCount ? this._interface.getAltAuthDissmisedCount() : 0
            } catch (e) {
                return ErrorReporter.Trace(this, e), 0
            }
        }, e.prototype.setAltAuthDissmisedCount = function(e) {
            try {
                this._interface && this._interface.setAltAuthDissmisedCount && this._interface.setAltAuthDissmisedCount(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
        }, e.prototype.getNotificationsDeviceId = function() {
            try {
                if (this._interface && this._interface.getNotificationsDeviceId) return this._interface.getNotificationsDeviceId()
            } catch (e) {
                ErrorReporter.Trace(this, e)
            }
            return ""
        }, e.prototype.setNotificationsDeviceId = function(e) {
            try {
                if (this._interface && this._interface.setNotificationsDeviceId) return this._interface.setNotificationsDeviceId(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
        }, e.prototype.setTeamPreference = function(e, t) {
            try {
                if (this._interface && this._interface.setTeamPreference) return this._interface.setTeamPreference(e, t)
            } catch (n) {
                ErrorReporter.Trace(this, n)
            }
            return !1
        }, e.prototype.getTeamPreference = function(e) {
            try {
                if (this._interface && this._interface.getTeamPreference) return this._interface.getTeamPreference(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
            return !1
        }, e.prototype.getPreferredTeams = function() {
            try {
                if (this._interface && this._interface.getPreferredTeams) return this._interface.getPreferredTeams()
            } catch (e) {
                ErrorReporter.Trace(this, e)
            }
            return []
        }, e.prototype.getPreferredTeamIds = function() {
            try {
                if (this._interface && this._interface.getPreferredTeamIds) return this._interface.getPreferredTeamIds()
            } catch (e) {
                ErrorReporter.Trace(this, e)
            }
            return []
        }, e.prototype.setLeagueTableLiveUpdates = function(e) {
            try {
                if (this._interface && this._interface.setLeagueTableLiveUpdates) return this._interface.setLeagueTableLiveUpdates(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
        }, e.prototype.getLeagueTableLiveUpdates = function() {
            try {
                if (this._interface && this._interface.getLeagueTableLiveUpdates) return this._interface.getLeagueTableLiveUpdates()
            } catch (e) {
                ErrorReporter.Trace(this, e)
            }
            return ""
        }, e.prototype.setClassificationMenuFavourites = function(e) {
            try {
                if (this._interface && this._interface.setClassificationMenuFavourites) return this._interface.setClassificationMenuFavourites(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
        }, e.prototype.getClassificationMenuFavourites = function() {
            try {
                if (this._interface && this._interface.getClassificationMenuFavourites) return this._interface.getClassificationMenuFavourites()
            } catch (e) {
                ErrorReporter.Trace(this, e)
            }
            return []
        }, e.prototype.setOverviewDefaultMarkets = function(e) {
            try {
                if (this._interface && this._interface.setOverviewDefaultMarkets) return this._interface.setOverviewDefaultMarkets(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
        }, e.prototype.getOverviewDefaultMarkets = function() {
            try {
                if (this._interface && this._interface.getOverviewDefaultMarkets) return this._interface.getOverviewDefaultMarkets()
            } catch (e) {
                ErrorReporter.Trace(this, e)
            }
            return []
        }, e.prototype.addInPlayFavouriteMarket = function(e) {
            try {
                if (this._interface && this._interface.addInPlayFavouriteMarket) return this._interface.addInPlayFavouriteMarket(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
            return !1
        }, e.prototype.removeInPlayFavouriteMarket = function(e) {
            try {
                if (this._interface && this._interface.removeInPlayFavouriteMarket) return this._interface.removeInPlayFavouriteMarket(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
            return !1
        }, e.prototype.getInPlayFavouriteMarkets = function() {
            try {
                if (this._interface && this._interface.getOverviewDefaultMarkets) return this._interface.getInPlayFavouriteMarkets()
            } catch (e) {
                ErrorReporter.Trace(this, e)
            }
            return []
        }, e
    })();
    e.ServerPreferenceManager = t
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t = (function() {
        function t() {}
        return t.FilterStemChildren = function(e) {
            var t, n;
            for (n = 0; n < e.getChildren().length; n++)(t = e.getChildren()[n]) && this.IsExcludedFromPromotion(t.data.EF) && (t.remove(), n--);
            return e.parent && "XL" !== e.parent.nodeName && 0 === e.getChildren().length && Locator.validationManager.callPostValidation((function() {
                return e.parent.remove()
            })), e.getChildren().length > 0
        }, t.IsExcludedFromPromotion = function(n) {
            return 1 == Locator.user.customerType && e.MathUtil.StringToNumber(n) & t.NSW_EXCLUSION_FLAG ? !0 : !!(e.MathUtil.StringToNumber(n) & Locator.user.offerType)
        }, t.NSW_EXCLUSION_FLAG = 4, t
    })();
    e.PromotionalFilter = t
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {})(ns_gen5_validation || (ns_gen5_validation = {})), (function(e) {
    var t = ns_gen5_util_logging.ServerLogger,
        n = (function(e) {
            function n() {
                var t, n = e.call(this) || this;
                return n.callLaterQueue = [], n.priorityQueue = [], n.postValidationQueue = [], n.postWakeUpQueue = [], n.canCreateNewContext = !0, n.nextCallLaterQueue = [], n.cycleID = -1, n.callback_cycleHandler = function() {
                    return n.cycleHandler()
                }, n.cyclecount = 0, t = function() {
                    setTimeout((function() {
                        Locator.validationManager.callLater((function() {
                            t()
                        }))
                    }), 15e3)
                }, t(), n
            }
            return __extends(n, e), n.prototype.toString = function() {
                return "[ValidationManager]"
            }, n.prototype.callLater = function(e) {
                $assert && $assert(e, "Callback isn't defined."), this.callLaterQueue[this.callLaterQueue.length] = e, -1 == this.cycleID && this.cycle()
            }, n.prototype.callNewContext = function(e) {
                var t = this;
                $assert && $assert(e, "Callback isn't defined."), this.nextCallLaterQueue[this.nextCallLaterQueue.length] = e, this.canCreateNewContext && (this.canCreateNewContext = !1, setTimeout((function() {
                    document.body.clientWidth, t.canCreateNewContext = !0, t.callLaterQueue = t.nextCallLaterQueue.concat(t.callLaterQueue), t.nextCallLaterQueue.length = 0, t.processValidationCycleNow()
                }), 0))
            }, n.prototype.queueForValidation = function(e) {
                var t, n;
                1 != e.validationState && (e.validationState = 1, t = e.nestLevel || 0, n = this.priorityQueue[t], n || (n = this.priorityQueue[t] = []), n[n.length] = e, -1 == this.cycleID && this.cycle())
            }, n.prototype.callPostValidation = function(e) {
                $assert && $assert(e, "Callback isnt defined."), this.postValidationQueue[this.postValidationQueue.length] = e, -1 == this.cycleID && this.cycle()
            }, n.prototype.processValidationCycleNow = function() {
                -1 != this.cycleID && clearTimeout(this.cycleID), this.cycleHandler()
            }, n.prototype.callPostWakeUp = function(e) {
                $assert && $assert(e, "Callback isnt defined."), this.postWakeUpQueue[this.postWakeUpQueue.length] = e, -1 == this.cycleID && this.cycle()
            }, n.prototype.processCallLaterQueue = function() {
                var e, t, n = this.callLaterQueue;
                for (this.callLaterQueue = [], e = n.length, t = 0; e > t; t++) try {
                    n[t]()
                } catch (i) {
                    ErrorReporter.Trace(this, i)
                }
            }, n.prototype.processValidationQueue = function() {
                var e, t, n, i, r, o, s = this.priorityQueue;
                for (this.priorityQueue = [], r = s.length, o = 0; r > o; o++)
                    if (n = s[o])
                        for (e = 0, t = n.length; t > e; e++)
                            if ((i = n[e]) && 1 == i.validationState) try {
                                i.validationState = 2, i.validateNow(!1), i.validationState = 0
                            } catch (a) {
                                ErrorReporter.Trace(i, a)
                            }
            }, n.prototype.processPostValidationQueue = function() {
                var e, t, n = this.postValidationQueue;
                for (this.postValidationQueue = [], e = n.length, t = 0; e > t; t++) try {
                    n[t]()
                } catch (i) {
                    ErrorReporter.Trace(this, i)
                }
            }, n.prototype.processPostWakeUpQueue = function() {
                var e, t, n = this.postWakeUpQueue;
                for (this.postWakeUpQueue = [], e = n.length, t = 0; e > t; t++) try {
                    n[t]()
                } catch (i) {
                    ErrorReporter.Trace(this, i)
                }
            }, n.prototype.cycle = function(e) {
                this.cycleID = setTimeout(this.callback_cycleHandler, e || 50)
            }, n.prototype.cycleHandler = function() {
                this.cyclecount++, $timestamp("Start Frame");
                var e = Date.now();
                for (e - this.cycleTimeStamp > 3e4 && this.processPostWakeUpQueue(), this.cycleTimeStamp = e, this.callLaterQueue.length > 0 && this.processCallLaterQueue(); this.priorityQueue.length > 0;) this.processValidationQueue();
                this.postValidationQueue.length > 0 && this.processPostValidationQueue(), this.callLaterQueue.length > 0 || this.priorityQueue.length > 0 || this.postValidationQueue.length > 0 ? ($timestamp("Recursive Start Frame"), this.cycleHandler()) : (Math.random() < .05 && t.ProcessQueue(), this.cycleID = -1)
            }, n
        })(ns_gen5_events.EventDispatcher);
    e.ValidationManager = n
})(ns_gen5_validation || (ns_gen5_validation = {})), (function(e) {
    var t = ns_gen5_util.InfoReporterGroups,
        n = ns_gen5_util.InfoReporter,
        i = (function() {
            function e() {
                this.mlJson = {}
            }
            return e.prototype.toString = function() {
                return "[Resource]"
            }, e.prototype.getValue = function(e, i) {
                return this.mlJson[e] || n.Trace(t.DEPRECATION_WARNING_ENTRY, "Missing language asset " + e), this.mlJson[e] || i
            }, e
        })();
    e.Resource = i
})(ns_gen5_language || (ns_gen5_language = {})), (function(e) {
    var t, n = (function() {
        function e(e, t, n, i, r) {
            this.topic = e, this.type = t, this.item = n, this.nodeType = i, this.info = r
        }
        return e.prototype.toString = function() {
            return "[DataMessage type=" + this.type + " item=" + this.item + " nodeType=" + this.nodeType + " info=" + this.info + "]"
        }, e
    })();
    e.DataMessage = n, t = (function() {
        function e() {}
        return e.SNAPSHOT = "F", e.UPDATE = "U", e.INSERT = "I", e.DELETE = "D", e
    })(), e.DataMessageType = t
})(ns_gen5_data || (ns_gen5_data = {})), (function(e) {
    var t = (function(e) {
        function t(t, n) {
            var i = e.call(this, t) || this;
            return i.data = n, i
        }
        return __extends(t, e), t.prototype.toString = function() {
            return "[StemEvent type=" + this.type + "]"
        }, t.UPDATE = "update", t.INSERT = "insert", t.DELETE = "delete", t.CHILD_DELETE = "childDelete", t
    })(ns_gen5_events.Event365);
    e.StemEvent = t
})(ns_gen5_data || (ns_gen5_data = {})), (function(e) {
    var t = e.StemEvent,
        n = e.DataMessage,
        i = (function(e) {
            function i() {
                var t = e.call(this) || this;
                return t._delegateList = [], t._actualChildren = [], t
            }
            return __extends(i, e), i.prototype.toString = function() {
                return "[Stem]"
            }, i.prototype.update = function(e) {
                var n, r, o, s, a, c, l, u, h, d;
                if (e) {
                    for (s in e) this.data[s] = e[s];
                    if (this.parent)
                        if (a = "OR" in e, a && (c = Number(e.OR), l = this.parent._actualChildren, l.splice(l.indexOf(this), 1), l.splice(c, 0, this)), "FF" in e) {
                            for (u = !1, h = e.FF, d = null, i.FilterToken.lastIndex = 0; !u && null !== (d = i.FilterToken.exec(h));) u = !(1 & d.index), i.FilterToken.lastIndex--;
                            if (this.filtered != (this.filtered = u)) {
                                if (this.parent._filterInvalidated = !0, this.filtered) {
                                    if (this.readonly_length--, this._hasDelegates)
                                        for (n = 0, r = this._delegateList.length; r > n; n++)
                                            if (o = this._delegateList[n]) try {
                                                o.stemDeleteHandler(this)
                                            } catch (p) {
                                                ErrorReporter.Trace(this, p)
                                            }
                                    this._hasListeners && this.dispatchEvent(new t(t.DELETE))
                                } else {
                                    if (this.parent.getChildren(), this.parent._hasDelegates)
                                        for (n = 0, r = this.parent._delegateList.length; r > n; n++)
                                            if (o = this.parent._delegateList[n]) try {
                                                o.stemInsertHandler(this.parent, this)
                                            } catch (p) {
                                                ErrorReporter.Trace(this, p)
                                            }
                                    this.parent._hasListeners && this.parent.dispatchEvent(new t(t.INSERT, this)), this._filterInvalidated = !0
                                }
                                return
                            }
                        } else a && !this.filtered && this.parent._children && (this.parent._filterInvalidated = !0);
                    if (!this.filtered) {
                        if (this._hasDelegates)
                            for (n = 0, r = this._delegateList.length; r > n; n++)
                                if (o = this._delegateList[n]) try {
                                    o.stemUpdateHandler(this, e)
                                } catch (p) {
                                    ErrorReporter.Trace(this, p)
                                }
                        this._hasListeners && this.dispatchEvent(new t(t.UPDATE, e))
                    }
                }
            }, i.prototype.insert = function(e, r) {
                var o, s, a, c, l, u;
                if (r = r || i, e instanceof n ? (s = e, o = new r, o.set_data(s.item), o.nodeName = s.nodeType) : e instanceof i ? o = e : (o = new r, o.set_data(e)), o.parent = this, a = o.data.OR, a ? this._actualChildren.splice(Number(a), 0, o) : this._actualChildren[this._actualChildren.length] = o, o.filtered) this._filterInvalidated = !0;
                else {
                    if (this._children ? (this._filterInvalidated = !0, this.getChildren()) : this.readonly_length++, this._hasDelegates)
                        for (c = void 0, l = this._delegateList.length, u = 0; l > u; u++)
                            if (c = this._delegateList[u]) try {
                                c.stemInsertHandler(this, o)
                            } catch (h) {
                                ErrorReporter.Trace(this, h)
                            }
                    this._hasListeners && this.dispatchEvent(new t(t.INSERT, o))
                }
            }, i.prototype.remove = function() {
                var e, n, i, r, o, s, a, c;
                if (this._hasDelegates)
                    for (e = void 0, n = this._delegateList.length, i = 0; n > i; i++)
                        if (e = this._delegateList[i]) try {
                            e.stemDeleteHandler(this)
                        } catch (l) {
                            ErrorReporter.Trace(this, l)
                        }
                for (this._hasListeners && this.dispatchEvent(new t(t.DELETE)), o = this._actualChildren.length, s = 0; o > s; s++) r = this._actualChildren[s], r && (r.parent = null, r.remove(), delete this._actualChildren[s]);
                if (this.hasLookupReference && Locator.treeLookup.removeReference(this.data.IT), this.shadow && (this.shadow.remove(), this.shadow = null), null != this.parent) {
                    for (this.filtered || this.parent.readonly_length--, a = this.parent._actualChildren, c = a.length, this.parent._children && (this.parent._filterInvalidated = !0), i = 0; c > i; i++)
                        if (a[i] == this) {
                            a.splice(i, 1);
                            break
                        } this.parent._hasListeners && this.parent.hasEventListener(t.CHILD_DELETE) && this.parent.dispatchEvent(new t(t.CHILD_DELETE, this)), this.parent = null
                }
            }, i.prototype.removeChildStem = function(e) {
                if (e.parent == this) {
                    e.filtered || this.readonly_length--, this._children && (this._filterInvalidated = !0);
                    var t = this._actualChildren.indexOf(e);
                    t > -1 && this._actualChildren.splice(t, 1), e.parent = null
                }
            }, i.prototype.adoptStem = function(e, t) {
                var n, i, r, o;
                if (null != e.parent) {
                    for (n = e.parent, i = n._actualChildren, r = i.length, e.filtered || (n.readonly_length--, this.readonly_length++), n._children && (n._filterInvalidated = !0), o = 0; r > o; o++)
                        if (i[o] == e) {
                            i.splice(o, 1);
                            break
                        } e.parent = this, (void 0 == t || t > this._actualChildren.length) && (t = this._actualChildren.length), this._actualChildren[t] = e, this._children && (this._filterInvalidated = !0)
                }
            }, i.prototype.set_data = function(e) {
                var n, r, o, s, a, c;
                if (this.data = e, this.hasLookupReference || Locator.treeLookup.addReference(this), e.FF) {
                    for (n = !1, r = e.FF, o = null, i.FilterToken.lastIndex = 0; !n && null !== (o = i.FilterToken.exec(r));) n = !(1 & o.index), i.FilterToken.lastIndex--;
                    n ? (this.filtered = !0, this.parent && (this.parent._filterInvalidated = !0)) : this.parent && this.parent.readonly_length++
                } else this.parent && this.parent.readonly_length++;
                if (this._hasDelegates)
                    for (s = void 0, a = this._delegateList.length, c = 0; a > c; c++)
                        if (s = this._delegateList[c]) try {
                            s.stemUpdateHandler(this, e)
                        } catch (l) {
                            ErrorReporter.Trace(this, l)
                        }
                this._hasListeners && this.dispatchEvent(new t(t.UPDATE, e))
            }, i.prototype.getChildren = function() {
                var e, t, n, i, r;
                if (this._filterInvalidated) {
                    for (this._filterInvalidated = !1, this._children ? this._children.length = 0 : this._children = [], e = void 0, t = this._actualChildren, n = void 0, i = t.length, r = 0; i > r; r++) e = t[r], e && !e.filtered && (n = this._children.length, e.data.OR = String(n), this._children[n] = e);
                    this.readonly_length = this._children.length
                }
                return this._children || this._actualChildren
            }, i.prototype.shed = function() {
                var e, n, i, r, o = this;
                if (this._hasDelegates)
                    for (i = void 0, e = 0, n = this._delegateList.length; n > e; e++)
                        if (i = this._delegateList[e]) try {
                            i.stemDeleteHandler(this)
                        } catch (s) {
                            ErrorReporter.Trace(this, s)
                        }
                for (this._hasListeners && this.dispatchEvent(new t(t.DELETE)), $assert && (this.hasClearedDown() || Locator.validationManager.callPostValidation((function() {
                        return $assert && $assert(o.hasClearedDown(), "'shed' has been called on this stem, but delegates/listeners still exist.")
                    }))), r = this._actualChildren, e = 0, n = r.length; n > e; e++) r[e].shed();
                this.shadow && this.shadow.shed()
            }, i.prototype.hasClearedDown = function() {
                var e, t, n;
                for (e = 0, t = this._delegateList; e < t.length; e++)
                    if (n = t[e]) return !1;
                return !this._hasListeners
            }, i.prototype.addDelegate = function(e) {
                this._delegateList[this._delegateList.length] = e, this._hasDelegates = !0
            }, i.prototype.removeDelegate = function(e) {
                var t = this._delegateList.indexOf(e);
                t > -1 && (this._delegateList[t] = void 0)
            }, i.prototype.addEventListener = function(t, n) {
                this._numListeners++, this._hasListeners = !0, e.prototype.addEventListener.call(this, t, n)
            }, i.prototype.removeEventListener = function(t, n) {
                this._numListeners--, this._hasListeners = this._numListeners > 0, e.prototype.removeEventListener.call(this, t, n)
            }, i.SInit = (function() {
                i.prototype._actualChildren = null, i.prototype._children = null, i.prototype._numListeners = 0, i.prototype._hasListeners = !1, i.prototype._filterInvalidated = !1, i.prototype.data = null, i.prototype.parent = null, i.prototype.filtered = !1, i.prototype.readonly_length = 0, i.prototype.nodeName = null, i.prototype.hasLookupReference = !1
            })(), i.FilterToken = /\^\^\^/, i
        })(ns_gen5_events.EventDispatcher);
    e.Stem = i
})(ns_gen5_data || (ns_gen5_data = {})), (function(e) {})(ns_gen5_data || (ns_gen5_data = {})), (function(e) {
    var t = e.Stem,
        n = e.StemEvent,
        i = e.DataMessage,
        r = (function(e) {
            function r() {
                var t = e.call(this) || this;
                return t.statGroups = [], t.teamGroups = [], t.additionalScores = [], t
            }
            return __extends(r, e), r.prototype.toString = function() {
                return "[FixtureStem]"
            }, r.prototype.insert = function(e, r) {
                var o, s, a, c, l, u;
                if (r = r || t, e instanceof i ? (s = e, o = new r, o.set_data(s.item), o.nodeName = s.nodeType) : e instanceof t ? o = e : (o = new r, o.set_data(e)), o.parent = this, "ES" == o.nodeName ? this.additionalScores[this.additionalScores.length] = o : "TG" == o.nodeName ? this.teamGroups[this.teamGroups.length] = o : "SG" == o.nodeName ? this.statGroups[this.statGroups.length] = o : (a = o.data.OR, a ? this._actualChildren.splice(Number(a), 0, o) : this._actualChildren[this._actualChildren.length] = o, o.filtered || (this._children ? (this._filterInvalidated = !0, this.getChildren()) : this.readonly_length++)), o.filtered) this._filterInvalidated = !0;
                else {
                    if (this._hasDelegates)
                        for (c = void 0, l = this._delegateList.length, u = 0; l > u; u++)(c = this._delegateList[u]) && c.stemInsertHandler(this, o);
                    this._hasListeners && this.dispatchEvent(new n(n.INSERT, o))
                }
            }, r.prototype.remove = function() {
                var t, n, i;
                for (e.prototype.remove.call(this), n = this.statGroups.length, i = 0; n > i; i++) t = this.statGroups[i], t && (t.parent = null, t.remove(), delete this.statGroups[i]);
                for (n = this.teamGroups.length, i = 0; n > i; i++) t = this.teamGroups[i], t && (t.parent = null, t.remove(), delete this.teamGroups[i]);
                for (n = this.additionalScores.length, i = 0; n > i; i++) t = this.additionalScores[i], t && (t.parent = null, t.remove(), delete this.additionalScores[i])
            }, r.prototype.shed = function() {
                var t, n, i, r, o, s, a;
                for (e.prototype.shed.call(this), t = 0, n = this.additionalScores; t < n.length; t++) i = n[t], i.shed();
                for (r = 0, o = this.teamGroups; r < o.length; r++) i = o[r], i.shed();
                for (s = 0, a = this.statGroups; s < a.length; s++) i = a[s], i.shed()
            }, r.prototype.getLegacyID = function() {
                return this.data.C1 + this.data.T1 + this.data.C2 + this.data.T2 + "-" + ((this.parent && this.parent.data ? this.parent.data.ID : null) || this.data.CL)
            }, r.prototype.getLegacyIDraw = function() {
                return this.data.C1 + this.data.T1 + this.data.C2 + this.data.T2 + ((this.parent && this.parent.data ? this.parent.data.ID : null) || this.data.CL)
            }, r.prototype.getLegacyInPlayNavigationID = function() {
                return this.data.C1 + this.data.T1 + this.data.C2 + this.data.T2 + "C" + ((this.parent && this.parent.data ? this.parent.data.ID : null) || this.data.CL)
            }, r
        })(e.Stem);
    e.FixtureStem = r
})(ns_gen5_data || (ns_gen5_data = {})), (function(e) {
    var t = (function() {
        function e() {
            this._table = {}
        }
        return e.prototype.toString = function() {
            return "[TreeLookup]"
        }, e.prototype.addReference = function(e, t) {
            var n = e.data[t || "IT"];
            n && (this._table[n] = e, e.hasLookupReference = !0)
        }, e.prototype.getReference = function(e) {
            return this._table[e]
        }, e.prototype.removeReference = function(e) {
            var t = this._table[e];
            t && (delete this._table[e], t.hasLookupReference = !1)
        }, e
    })();
    e.TreeLookup = t
})(ns_gen5_data || (ns_gen5_data = {})), (function(e) {
    var t = (function(e) {
        function t(t, n) {
            var i = e.call(this, t) || this;
            return i.data = n, i
        }
        return __extends(t, e), t.INFO_UPDATED = "infoUpdated", t.SNAPSHOT_EMPTY = "snapshotEmpty", t.SERVER_RECONNECT = "serverReconnect", t.CONNECTION_FAILED = "connectionFailed", t.RECONNECT_FAILED = "reconnectFailed", t.CONNECTED = "connected", t.PULL_DATA_RECEIVED = "pullDataReceived", t.PULL_REQUEST_FAILED = "pullRequestFailed", t.CONNECTION_FAILED_INVALID_SESSION = "connectionFailedInvalidSession", t
    })(ns_gen5_events.Event365);
    e.StreamDataProcessorEvent = t
})(ns_gen5_data || (ns_gen5_data = {})), (function(e) {
    var t = (function(e) {
        function t(t, n) {
            var i = e.call(this, t) || this;
            return i.message = n, i
        }
        return __extends(t, e), t.BALANCE_RECEIVED = "balanceReceived", t.PUSH_MESSAGE_RECEIVED = "pushMessageReceived", t.D23_MESSAGE_RECEIVED = "d23Received", t
    })(ns_gen5_events.Event365);
    e.PrivateStreamDataProcessorEvent = t
})(ns_gen5_data || (ns_gen5_data = {})), (function(e) {
    e.SubscriptionManagerFlags = {
        SUPPRESS_SERVER_MESSAGE: 1,
        BATCH: 2,
        SUPPRESS_FULL_HIERARCHY: 4,
        NO_GRACE_PERIOD: 16,
        DONT_BATCH: 32,
        USE_CUSTOM_PARAMS: 64,
        SUPPRESS_STANDARD_QS_PARAMS: 128,
        GLOBAL_CONTEXT: 256,
        VAL: 512
    }
})(ns_gen5_data || (ns_gen5_data = {})), (function(e) {
    var t = (function(e) {
        function t(t, n) {
            var i = e.call(this, t) || this;
            return i.data = n, i
        }
        return __extends(t, e), t.RENEW_SUBSCRIPTION = "renewSubscription", t.CONNECTION_FAILED = "connectionFailed", t.CONNECTED = "connected", t.ERROR = "error", t.INFO_UPDATED = "infoUpdated", t
    })(ns_gen5_events.Event365);
    e.SubscriptionManagerEvent = t
})(ns_gen5_data || (ns_gen5_data = {})), (function(e) {
    var t = (function(e) {
        function t(t, n, i) {
            var r = e.call(this, t) || this;
            return r.topic = n, r.message = i, r
        }
        return __extends(t, e), t.BALANCE_RECEIVED = "balanceReceived", t.PUSH_MESSAGE_RECEIVED = "pushMessageReceived", t.D23_MESSAGE_RECEIVED = "d23Received", t
    })(ns_gen5_events.Event365);
    e.PrivateSubscriptionManagerEvent = t
})(ns_gen5_data || (ns_gen5_data = {})), (function(e) {
    function t(e) {
        e.VI = "0", e.VS = "0", e.MS = "0"
    }
    var n = e.Stem,
        i = e.DataMessage,
        r = e.DataMessageType,
        o = e.FixtureStem,
        s = r.SNAPSHOT,
        a = "PH",
        c = 0,
        l = (function() {
            function l() {
                this.toString = function() {
                    return "[DataUtil]"
                }
            }
            return l.ProcessStemChanges = function(e, t, n, i, s) {
                var a, c, l, u, h, d = e.type,
                    p = e.item;
                d == r.SNAPSHOT ? s(t) : d == r.UPDATE ? (a = Locator.treeLookup.getReference(t), a && a.update(p)) : d == r.INSERT ? (c = i ? t : n, l = c.lastIndexOf("/"), u = c.lastIndexOf("/", l - 1) + 1, h = c.slice(u, l), a = Locator.treeLookup.getReference(h), a && a.insert(e, "EV" == e.nodeType ? o : null)) : d == r.DELETE && (a = Locator.treeLookup.getReference(t), a && a.remove())
            }, l.ParseMessage = function(e, l) {
                for (var u, h, d, p, _, g, f, E, m, v, S, y, C, T, L, b, I, D, A, N, M, R, P, O, w, k, H, F, B, x, U, G, V, Y, W, z, Q, q, $, j, J = Locator.treeLookup, X = e.charAt(0), K = X == r.SNAPSHOT || X == r.INSERT, Z = new n, ee = e.indexOf("|", 1), te = ee, ne = (h = X != s) ? 0 : 1, ie = Locator.user.countryCode, re = Locator.user.countryCode64, oe = Locator.user.phoneOnlyEnabled; - 1 != te;) {
                    for (ee = e.indexOf("|", ++te), _ = e.slice(te, ee).split(";"), p = _.length - 1, te = ee, g = {}, m = _[0], u = ne; p > u; u++) E = _[u], g[E.charAt(0) + E.charAt(1)] = E.substr(3);
                    if (K && !g.IT && (g.IT = "_i" + c++), ie && "CB" in g) {
                        z = g.CB || "", Q = -1;
                        do Q = z.indexOf(ie, ++Q); while (-1 != Q && 1 == (1 & Q)); - 1 != Q && t(g)
                    } else !ie && "CB" in g && "" != g.CB && t(g);
                    if ("Modernizr" in window && !Modernizr.embeddedstreaming && "1" == g.ES && (g._V = g.VI, t(g)), oe && "TO" in g) {
                        z = g.TO, Q = -1;
                        do Q = z.indexOf(re, ++Q); while (-1 != Q && 1 == (1 & Q)); - 1 != Q && (g[a] = "1")
                    }
                    if ("FI" in g && (S = g.FI), "TK" in g && (q = g.TK, v = String.fromCharCode(q.charCodeAt(0) ^ q.charCodeAt(1))), h && "IN" != m) return X === r.INSERT && "PA" === m ? g.ZW = S + "-" + g.ID : X === r.UPDATE && g.ID && ($ = Locator.treeLookup.getReference(l), $ && "PA" === $.nodeName && (S || (S = $.data.FI), g.ZW = S + "-" + g.ID)), [new i(l, X, g, m, d)];
                    switch (m) {
                        case "PA":
                            f = new n, Y = M || N || G || V || Z, S && (g.ZW = S + "-" + g.ID), v && (g._T = v), f.parent = Y, R = Y._actualChildren[Y._actualChildren.length] = f;
                            break;
                        case "CO":
                            f = new n, f.parent = N, M = N._actualChildren[N._actualChildren.length] = f;
                            break;
                        case "MA":
                            M = null, N = f = new n, W = D || I || V || Z, f.parent = W, W._actualChildren[W._actualChildren.length] = f;
                            break;
                        case "MG":
                            M = null, D = f = new n, f.parent = I, I._actualChildren[I._actualChildren.length] = f;
                            break;
                        case "CT":
                            A = f = new n, f.parent = b, b._actualChildren[b._actualChildren.length] = f;
                            break;
                        case "EV":
                            f = new o, null == b && (b = T || V || Z), W = A || b, f.parent = W, I = f, W._actualChildren[W._actualChildren.length] = f;
                            break;
                        case "CL":
                            b = f = new n, A = null, f.parent = L || V || Z, f.parent._actualChildren[f.parent._actualChildren.length] = f;
                            break;
                        case "CS":
                            L = f = new n, f.parent = Z, Z._actualChildren[Z._actualChildren.length] = f;
                            break;
                        case "TG":
                            P = f = new n, f.parent = I, I.teamGroups[I.teamGroups.length] = f;
                            break;
                        case "TE":
                            f = new n, f.parent = P, P._actualChildren[P._actualChildren.length] = f;
                            break;
                        case "SG":
                            O = f = new n, f.parent = I, I.statGroups[I.statGroups.length] = f;
                            break;
                        case "ST":
                            f = new n, f.parent = O, O._actualChildren[O._actualChildren.length] = f;
                            break;
                        case "ES":
                            w = f = new n, f.parent = I, I.additionalScores[I.additionalScores.length] = f;
                            break;
                        case "SC":
                            k = f = new n, f.parent = w, w._actualChildren[w._actualChildren.length] = f;
                            break;
                        case "SL":
                            f = new n, f.parent = k, k._actualChildren[k._actualChildren.length] = f;
                            break;
                        case "AS":
                            H = f = new n, f.parent = I, I._actualChildren[I._actualChildren.length] = f;
                            break;
                        case "AP":
                            F = f = new n, f.parent = H, H._actualChildren[H._actualChildren.length] = f;
                            break;
                        case "AT":
                            B = f = new n, f.parent = F, F._actualChildren[F._actualChildren.length] = f;
                            break;
                        case "AC":
                            x = f = new n, f.parent = B, B._actualChildren[B._actualChildren.length] = f;
                            break;
                        case "AE":
                            f = new n, f.parent = x, x._actualChildren[x._actualChildren.length] = f;
                            break;
                        case "SP":
                            f = new n, f.parent = R, R._actualChildren[R._actualChildren.length] = f;
                            break;
                        case "IN":
                            d = g;
                            break;
                        case "PD":
                            T = f = new n, null == C && (C = y || V || Z), f.parent = C, C._actualChildren[C._actualChildren.length] = f;
                            break;
                        case "PS":
                            C = f = new n, null == y && (y = Z), f.parent = y, y._actualChildren[y._actualChildren.length] = f;
                            break;
                        case "XL":
                            y = f = new n, Z._actualChildren[Z._actualChildren.length] = y;
                            break;
                        case "LG":
                            f.parent = I, I._actualChildren[I._actualChildren.length] = f;
                            break;
                        case "XI":
                            Z = f = new n;
                            break;
                        case "CG":
                            Z = f = new n;
                            break;
                        case "OP":
                            U = f = new n;
                            break;
                        case "CF":
                            U = f = new n;
                            break;
                        case "BE":
                            G = f = new n, f.parent = U, U._actualChildren[U._actualChildren.length] = f;
                            break;
                        case "SH":
                            V = f = new n, L = null, I = null, D = null, N = null, M = null;
                            break;
                        default:
                            f = null
                    }
                    f && (f.nodeName = m, f.set_data(g))
                }
                return 1 == Z._actualChildren.length && "PA" == Z._actualChildren[0].nodeName ? Z = Z._actualChildren[0] : J.getReference(l) || Z.set_data({
                    IT: l
                }), V && (Z.shadow = V), j = new i(l, X, Z, m, d), [j]
            }, l.ParseMergeMessage = function(n, o) {
                var c, u, h, d, p, _, g, f, E, m, v, S, y, C, T, L, b, I, D, A, N, M, R, P, O, w, k, H, F, B, x, U, G, V, Y, W, z, Q, q, $, j, J, X, K, Z, ee, te, ne, ie, re, oe, se, ae, ce = Locator.treeLookup,
                    le = n.indexOf("|", 1),
                    ue = le,
                    he = Locator.user.phoneOnlyEnabled,
                    de = n.charAt(0),
                    pe = Locator.user.countryCode64,
                    _e = Locator.user.countryCode,
                    ge = (u = de != s) ? 0 : 1,
                    fe = {},
                    Ee = [],
                    me = [],
                    ve = [],
                    Se = [Ee, me, ve],
                    ye = [];
                for (fe[o] = !0, o.lastIndexOf("/") >= 0 && (Q = o.substring(o.lastIndexOf("/") + 1, o.length), fe[Q] = !0); - 1 != ue;) try {
                    if (le = n.indexOf("|", ++ue), p = n.slice(ue, le).split(";"), d = p.length - 1, ue = le, -1 === ue && 0 === d) break;
                    for (_ = {}, m = p[0], c = ge; d > c; c++) E = p[c], _[E.substr(0, 2)] = E.substr(3);
                    if (_e && "CB" in _) {
                        W = _.CB || "", z = -1;
                        do z = W.indexOf(_e, ++z); while (-1 != z && 1 == (1 & z)); - 1 != z && t(_)
                    } else !_e && "CB" in _ && "" != _.CB && t(_);
                    if ("Modernizr" in window && !Modernizr.embeddedstreaming && "1" == _.ES && t(_), he && "TO" in _) {
                        W = _.TO, z = -1;
                        do z = W.indexOf(pe, ++z); while (-1 != z && 1 == (1 & z)); - 1 != z && (_[a] = "1")
                    }
                    switch ("FI" in _ && (v = _.FI), m) {
                        case "PA":
                            G = _.IT, V = N || A || x || U || o, v && (_.ZW = v + "-" + _.ID), f = V;
                            break;
                        case "CO":
                            N = _.IT, f = A;
                            break;
                        case "MA":
                            N = null, A = _.IT, Y = I || b || U || o, f = Y;
                            break;
                        case "MG":
                            N = null, I = _.IT, f = b;
                            break;
                        case "CT":
                            D = _.IT, f = L;
                            break;
                        case "EV":
                            null == L && (L = C || o), Y = D || L || U, f = Y, b = _.IT;
                            break;
                        case "CL":
                            L = _.IT, D = null, f = T || U || _.IT;
                            break;
                        case "CS":
                            T = _.IT, f = _.IT;
                            break;
                        case "TG":
                            M = _.IT, f = b;
                            break;
                        case "TE":
                            f = M;
                            break;
                        case "SG":
                            R = _.IT, f = b;
                            break;
                        case "ST":
                            f = R;
                            break;
                        case "ES":
                            P = _.IT, f = b;
                            break;
                        case "SC":
                            O = _.IT, f = P;
                            break;
                        case "SL":
                            f = O;
                            break;
                        case "AS":
                            w = _.IT, f = b;
                            break;
                        case "AP":
                            k = _.IT, f = w;
                            break;
                        case "AT":
                            H = _.IT, f = k;
                            break;
                        case "AC":
                            F = _.IT, f = H;
                            break;
                        case "AE":
                            f = F;
                            break;
                        case "IN":
                            h = _;
                            break;
                        case "PD":
                            C = _.IT, null == y && (y = S || U || o), f = y;
                            break;
                        case "PS":
                            y = _.IT, null == S && (S = o), f = S;
                            break;
                        case "XL":
                            S = _.IT;
                            break;
                        case "LG":
                            f = b;
                            break;
                        case "OP":
                            B = _.IT;
                            break;
                        case "CF":
                            B = _.IT, f = B;
                            break;
                        case "BE":
                            x = _.IT, f = B;
                            break;
                        case "CG":
                            f = _.IT;
                            break;
                        case "SH":
                            U = f = _.IT, T = null, b = null, I = null, A = null, N = null;
                            break;
                        case "SP":
                            f = G
                    }
                    if (g = _.IT, fe[g] = !0, q = ce.getReference(g), q && (g === f || q.parent && q.parent.data && q.parent.data.IT === f)) {
                        $ = q.data, j = {}, J = !1;
                        for (X in _) $[X] != _[X] && (J = !0, j[X] = _[X]);
                        J && (j.IT = g, ve[ve.length] = {
                            topic: g,
                            msgType: r.UPDATE,
                            data: j,
                            nodeType: m,
                            info: h
                        })
                    } else g !== f ? me.push({
                        topic: f + "/" + g,
                        msgType: r.INSERT,
                        data: _,
                        nodeType: m,
                        info: h
                    }) : "EMPTY" === o && "undefined" != typeof h && me.push({
                        topic: o,
                        msgType: r.SNAPSHOT,
                        data: _,
                        nodeType: "",
                        info: h
                    })
                } catch (Ce) {
                    ErrorReporter.Trace(l, Ce)
                }
                for (K = ce.getReference(o), K && (ee = function(e) {
                        var t, n = e.length;
                        for (t = 0; n > t; t++) Z(e[t], e)
                    }, (Z = function(t, n) {
                        var i, o;
                        if (t) {
                            if (!fe[t.data.IT] && (Ee.push({
                                    topic: t.data.IT,
                                    msgType: r.DELETE,
                                    data: t.data,
                                    nodeType: t.nodeName
                                }), n && t.parent instanceof e.FixtureStem && (n === t.parent.statGroups || n === t.parent.teamGroups || n === t.parent.additionalScores)))
                                for (i = n.length, o = 0; i > o; o++) n[o] === t && n.splice(o, 1);
                            ee(t.getChildren()), t instanceof e.FixtureStem && (ee(t.statGroups), ee(t.teamGroups), ee(t.additionalScores))
                        }
                    })(K)), te = Se.length, ne = 0; te > ne; ne++)
                    if (ie = Se[ne])
                        for (re = ie.length, oe = 0; re > oe; oe++) se = ie[oe], se && (ae = new i(se.topic, se.msgType, se.data, se.nodeType, se.info), ye.push(ae));
                return ye
            }, l
        })();
    e.DataUtil = l
})(ns_gen5_data || (ns_gen5_data = {})), (function(e) {
    var t = e.Stem,
        n = ns_gen5_events.UserEvent,
        i = "GD,GG,GI,GJ",
        r = (function(e) {
            function r() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.username = null, t.geoComplyUserId = null, t.migratedSession = !1, t.oddsTypeId = null, t.languageId = null, t.zoneId = null, t.timeZoneId = null, t.timeZoneAdjustment = null, t.timeZoneInitials = null, t.wizeGuy = !1, t.displayGroupId = null, t.offerType = 1, t.countryId = null, t.countryStateId = null, t.countryGroupId = null, t.countryCode = null, t.countryCode64 = "", t.countryState64 = "", t.countryGroup64 = "", t.filterMode = null, t.phoneOnlyEnabled = !1, t.isLoggedIn = !1, t.lastLoginTime = null, t.telephoneAccountNumber = null, t.codiceFiscale = null, t.impersonatedUsername = null, t.currencyCode = null, t.currencyRate = null, t.currencyDecimalSeparator = null, t.restrictedBettingEnabled = !1, t._balance = null, t.cookieSecurityLevel = "", t
            }
            return __extends(r, e), r.prototype.getBalance = function() {
                return this._balance || (this._balance = ns_gen5_util.Singleton.getInstance(ns_gen5_util.BalanceModel))
            }, r.prototype.setSiteConfig = function(e, t, n, i) {
                this.countryId = t, this.countryStateId = n, this.countryGroupId = i, this.filterMode = e, this._setStemFilterMode()
            }, r.prototype.setOddsTypeId = function(e) {
                this.oddsTypeId != e && (this.oddsTypeId = e, this.dispatchEvent(new n(n.ODDS_TYPE_CHANGED)))
            }, r.prototype.setLanguageId = function(e) {
                this.languageId != e && (this.languageId = e, this.dispatchEvent(new n(n.LANGUAGE_CHANGED)))
            }, r.prototype.getFilterToken = function() {
                return new RegExp("(" + this.countryCode64.replace("+", "\\+") + "|" + this.countryState64.replace("+", "\\+") + "|" + this.countryGroup64.replace("+", "\\+") + ")", "g")
            }, r.prototype._setStemFilterMode = function() {
                for (var e, n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "+", "/"], r = [], o = 0, s = 0, a = 0; 4096 > a;) e = n[o] + n[s], (a + 1) % 64 == 0 && (o++, s = -1), r[a] = e, s++, a++;
                this.countryCode64 = r[1024 + Number(this.countryId)], this.countryState64 = r[2048 + Number(this.countryStateId)], this.countryGroup64 = r[Number(this.countryGroupId)], this.phoneOnlyEnabled = i.split(",").indexOf(this.countryCode64) > -1, t.FilterToken = this.getFilterToken()
            }, r.FILTER_MODE_COUNTRY_GROUP = "1", r.FILTER_MODE_COUNTRY = "2", r.FILTER_MODE_COUNTRY_STATE = "3", r
        })(ns_gen5_events.EventDispatcher);
    e.User = r
})(ns_gen5_data || (ns_gen5_data = {})), (function(e) {
    var t, n = ns_gen5_events.Event365,
        i = e.DataUtil,
        r = e.SubscriptionManagerEvent,
        o = e.User,
        s = ns_gen5_net.Loader,
        a = ns_gen5_net.LoaderEvent,
        c = ns_gen5_util.Delegate,
        l = ns_gen5_util.InfoReporter,
        u = ns_gen5_util.InfoReporterGroups,
        h = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e), t
        })(s),
        d = (function(s) {
            function d() {
                var e = s.call(this) || this;
                return e._dataInclusionExclusionLevel = "", e._customDataInclusionExclusionLevel = "", e._topicRequestLookup = null, e._initialised = !1, e.canDebouncePVCN = !0, e._topicRequestLookup = {}, e
            }
            return __extends(d, s), d.prototype.toString = function() {
                return "[PullDataProcessor]"
            }, d.SetNST = function(e) {
                t = e
            }, d.prototype.loadPageData = function(n, i, r, o) {
                var s, l, u, d, p, _, g;
                if (this._initialised || this._initialise(), s = Locator.config, l = Locator.user, u = s.apiLocation, d = this._dataInclusionExclusionLevel, r && (u = r, o & e.SubscriptionManagerFlags.USE_CUSTOM_PARAMS && (d = this._customDataInclusionExclusionLevel)), -1 == u.indexOf("?") && (u += "?"), o & e.SubscriptionManagerFlags.SUPPRESS_STANDARD_QS_PARAMS || (u += "lid=" + l.languageId + "&zid=" + l.zoneId + "&pd=" + escape(n) + "&cid=" + l.countryId), u += d, null != i)
                    for (p in i) u += "&" + p + "=" + i[p];
                return _ = new h, _.pageTopic = n, _.addEventListener(a.COMPLETE, new c(this, this._pageDataCompleteHandler)), _.addEventListener(a.ERROR, new c(this, this._pageDataErrorHandler)), this._topicRequestLookup[n] = _, o & e.SubscriptionManagerFlags.VAL && (g = t && t()) ? void _.load(u, {
                    customRequestHeaders: [
                        ["X-Net-Sync-Term", g]
                    ]
                }) : void _.load(u)
            }, d.prototype.cancelPageDataLoad = function(e) {
                var t = this._topicRequestLookup[e];
                if (t) try {
                    t.abort(), delete this._topicRequestLookup[e]
                } catch (n) {
                    ErrorReporter.Trace(this, n)
                }
            }, d.prototype._initialise = function() {
                var e = Locator.user;
                if (this._initialised = !0, e.countryGroupId && (this._dataInclusionExclusionLevel = "&cg=" + e.countryGroupId), e.filterMode) {
                    if ("-1" != e.filterMode) switch (e.filterMode) {
                        case o.FILTER_MODE_COUNTRY_GROUP:
                            this._dataInclusionExclusionLevel = "&cgid=" + e.countryGroupId;
                            break;
                        case o.FILTER_MODE_COUNTRY:
                            this._dataInclusionExclusionLevel = "&ctid=" + e.countryId;
                            break;
                        case o.FILTER_MODE_COUNTRY_STATE:
                            this._dataInclusionExclusionLevel = "&csid=" + e.countryStateId
                    }
                    this._customDataInclusionExclusionLevel = "&csid=" + e.countryStateId + "&ctid=" + e.countryId + "&cgid=" + e.countryGroupId
                }
            }, d.prototype._pageDataCompleteHandler = function(e) {
                var t, r, o, s, a, c, l = this,
                    u = e.target,
                    h = u.pageTopic,
                    d = e.data;
                for (delete this._topicRequestLookup[h], t = d.split("\b"), a = t.length, c = 0; a > c; c++) r = t[c], s = r.indexOf("IT="), o = 1 == a ? h : r.slice(s + 3, r.indexOf(";", s)), i.ParseMessage(r, o);
                Locator.validationManager.callLater((function() {
                    l.dispatchEvent(new n(h))
                })), this.canDebouncePVCN && (this.canDebouncePVCN = !1, setTimeout((function() {
                    l.canDebouncePVCN = !0, Locator.validationManager.processValidationCycleNow()
                }), 0))
            }, d.prototype._pageDataErrorHandler = function(e) {
                var t = e.target,
                    n = t.pageTopic,
                    i = e.status,
                    o = Locator.subscriptionManager;
                n && (o.dispatchEvent(new r(r.ERROR + n)), l.Trace(u.PULL_DATA_ENTRY, "Pull API IO Error on pageData: " + n + " - " + i), o.unsubscribe(n), delete this._topicRequestLookup[n])
            }, d
        })(ns_gen5_events.EventDispatcher);
    e.PullDataProcessor = d
})(ns_gen5_data || (ns_gen5_data = {})), (function(e) {})(ns_gen5_ui || (ns_gen5_ui = {})), (function(e) {
    function t() {
        return i.length ? i.pop() : document.createComment("")
    }

    function n(e) {
        i[i.length] = e
    }
    var i = [],
        r = (function(e) {
            function i(t) {
                var n = e.call(this) || this;
                return n._element = n._active_element = n.createElement ? n.createElement(t || "div") : document.createElement(t || "div"), n._element.wrapper = n, n
            }
            return __extends(i, e), i.prototype.toString = function() {
                return "[DomElement]"
            }, i.prototype.initialize = function() {
                this.initialized = !0
            }, i.prototype.appendChild = function(e) {
                var t = e;
                return e.parent = this, !t.initialized && t.initialize && (t.nestLevel = this.nestLevel + 1, t.initialize()), $assert && $assert("initialized" in e && t.initialized || !("initialized" in e), "Child - " + e + " - is not initialized."), this._element.appendChild(t._active_element), e
            }, i.prototype.insertBefore = function(e, t) {
                $assert && $assert(t, "before is null or undefined!!!");
                var n = e;
                return e.parent = this, !n.initialized && n.initialize && (n.nestLevel = this.nestLevel + 1, n.initialize()), this._element.insertBefore(n._active_element, t._active_element ? t._active_element : t), e
            }, i.prototype.insertAfter = function(e, t) {
                var n, i;
                return $assert && $assert(t, "after is null or undefined!!!"), n = e, e.parent = this, !n.initialized && n.initialize && (n.nestLevel = this.nestLevel + 1, n.initialize()), i = t._active_element ? t._active_element : t, i.nextSibling ? this._element.insertBefore(n._active_element, i.nextSibling) : this._element.appendChild(n._active_element), e
            }, i.prototype.appendChildAt = function(e, t) {
                var n, i = e;
                return e.parent = this, !i.initialized && i.initialize && (i.nestLevel = this.nestLevel + 1, i.initialize()), n = this._element.children.length > t ? this._element.children[t] : null, this._element.insertBefore(i._active_element, n), e
            }, i.prototype.removeChild = function(e) {
                var t, n, i, r = e;
                if (e.parent == this) {
                    e.parent = null;
                    try {
                        this._element.removeChild(r._active_element)
                    } catch (o) {
                        t = e.getElement(), n = t.parentNode && t.parentNode.className || "", this._element.className || t.className || n ? (i = this._element.className + " " + t.className + " " + n, ErrorReporter.Trace(i, o)) : $assert && $assert(!1, "Remove child has no parent when being called")
                    }
                }
                return e
            }, i.prototype.replaceChild = function(e, t) {
                if (t.parent == this) {
                    t.parent = null;
                    var n = e;
                    e.parent = this, !n.initialized && n.initialize && (n.nestLevel = this.nestLevel + 1, n.initialize()), this._element.replaceChild(n._active_element, t._active_element)
                }
                return e
            }, i.prototype.removeAllChildren = function() {
                for (var e, t = this._element.firstChild; t;) e = t.wrapper, t = t.nextSibling, e && this.removeChild(e);
                return this
            }, i.prototype.suspendElementFromDom = function() {
                var e, n;
                this._suspended_markerNode || (e = this._active_element = this._suspended_markerNode = t(), e.wrapper = this, this.parent && this._element.parentNode && (n = this.parent._element, n.replaceChild(e, this._element)))
            }, i.prototype.unsuspendElementFromDom = function() {
                var e, t;
                this._suspended_markerNode && (e = this._suspended_markerNode, e.wrapper = null, this._suspended_markerNode = null, this._active_element = this._element, n(e), this.parent && e.parentNode && (t = this.parent._element, t.replaceChild(this._element, e)))
            }, i.prototype.setAttribute = function(e, t) {
                return this._element.setAttribute(e, t), this
            }, i.prototype.removeAttribute = function(e) {
                return this._element.removeAttribute(e), this
            }, i.prototype.getAttribute = function(e) {
                return this._element.getAttribute(e)
            }, i.prototype.getElement = function() {
                return this._element
            }, i.prototype.getActiveElement = function() {
                return this._active_element
            }, i.prototype.getElementChildren = function() {
                return this._element.children
            }, i.prototype.getFirstChild = function() {
                return this._element.firstChild
            }, i.prototype.getLastChild = function() {
                return this._element.lastChild
            }, i.prototype.getPreviousSibling = function() {
                return this._active_element.previousSibling
            }, i.prototype.getNextSibling = function() {
                return this._active_element.nextSibling
            }, i.prototype.getInlineStyle = function() {
                return this._element.style
            }, i.prototype.getTooltip = function() {
                return this.tooltip
            }, i.SInit = (function() {
                i.prototype._element = null, i.prototype._active_element = null, i.prototype.parent = null, i.prototype.initialized = !1, i.prototype.nestLevel = 0, i.prototype._suspended_markerNode = null, i.prototype.tooltip = null, i.prototype.alwaysShowTooltip = !1
            })(), i
        })(ns_gen5_events.EventDispatcher);
    e.DomElement = r
})(ns_gen5_ui || (ns_gen5_ui = {})), (function(e) {
    var t = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n._styleList = {}, n
        }
        return __extends(t, e), t.prototype.toString = function() {
            return "[Component]"
        }, t.prototype.initialize = function() {
            1 != this._stopInitInvalidation && (Locator.validationManager.queueForValidation(this), this._propertiesInvalidated = !0), this.createChildren(), this.initialized = !0
        }, t.prototype.setAttribute = function(t, n) {
            return $assert && $assert("class" != t, "It's not safe to use 'setAttribute(\"class\",' with a Component instance. Use 'addStyle' instead."), e.prototype.setAttribute.call(this, t, n)
        }, t.prototype.createChildren = function() {}, t.prototype.commitProperties = function() {}, t.prototype.commitStyles = function() {
            var e, t = "";
            for (e in this._styleList) t += e + " ";
            this._element.className = t
        }, t.prototype.hasStyle = function(e) {
            return !!this._styleList[e]
        }, t.prototype.addStyle = function(e) {
            return this._styleList[e] = !0, this._stylesInvalidated || this.invalidateStyles(), this
        }, t.prototype.removeStyle = function(e) {
            return delete this._styleList[e], this._stylesInvalidated || this.invalidateStyles(), this
        }, t.prototype.overwriteStyle = function(e, t) {
            return delete this._styleList[e], this._styleList[t] = !0, this.invalidateStyles(), this
        }, t.prototype.setVisible = function(e) {
            return e != this._visible && (this._visible = e, e ? this.removeStyle("Hidden") : this.addStyle("Hidden")), this
        }, t.prototype.getVisible = function() {
            return this._visible
        }, t.prototype.invalidateProperties = function() {
            return this._propertiesInvalidated = !0, 1 != this.validationState && this.parent && Locator.validationManager.queueForValidation(this), this
        }, t.prototype.invalidateStyles = function() {
            return this._stylesInvalidated = !0, 0 == this.validationState && this.parent && Locator.validationManager.queueForValidation(this), this
        }, t.prototype.validateNow = function(e) {
            this._propertiesInvalidated && (this._propertiesInvalidated = !1, this.commitProperties()), this._stylesInvalidated && (this._stylesInvalidated = !1, this.commitStyles()), 0 != e && (this.validationState = 0)
        }, t.Wrapper = function(e) {
            var t, n, i, r, o;
            for (ns_gen5_events.EventDispatcher.call(this), this.parent = !0, this._element = e, e.wrapper = this, t = this._element.getAttribute("class"), n = {}, i = t ? t.split(" ") : [], r = i.length, o = 0; r > o; o++) n[i[o]] = !0;
            this._styleList = n
        }, t.SInit = (function() {
            t.prototype._styleList = null, t.prototype._propertiesInvalidated = !1, t.prototype._stylesInvalidated = !1, t.prototype._visible = !0, t.prototype._stopInitInvalidation = !1, t.prototype.validationState = 0, t.Wrapper.prototype = new t
        })(), t
    })(e.DomElement);
    e.Component = t
})(ns_gen5_ui || (ns_gen5_ui = {})), (function(e) {
    var t = e.DomElement,
        n = 0,
        i = (function(i) {
            function r(e) {
                var r = i.call(this, e) || this;
                return r.root = new t, r.uid = ++n, r
            }
            return __extends(r, i), r.prototype.toString = function() {
                return "[Module]"
            }, r.getRoot = function(e) {
                for (; e;) {
                    if (e instanceof r) return e;
                    e = e.parent
                }
                return null
            }, r.prototype.initialize = function() {
                i.prototype.initialize.call(this), ns_gen5_util.Singleton.RegisterModule(this), this.parent && this.parent.parent || this.parent instanceof e.ModuleContainer || (this.parent = this.root, this.moduleReady())
            }, r.prototype.moduleReady = function() {
                this.ready = !0
            }, r.prototype.dispose = function() {
                var e = this;
                this.disposed = !0, Locator.validationManager.callNewContext((function() {
                    ns_gen5_util.Singleton.RemoveScope(e)
                }))
            }, r
        })(e.Component);
    e.Module = i
})(ns_gen5_ui || (ns_gen5_ui = {})), (function(e) {
    var t, n = e.SubscriptionManagerEvent,
        i = ns_gen5_util.Delegate,
        r = 15e3,
        o = "SPTBK",
        s = (function(s) {
            function a() {
                var e = s.call(this) || this;
                return e.pushConnected = !1, e.topicCountLookup = {}, e.unsubscribeDeferralPeriodMS = r, e._subscribedTopics = {}, e.unsubscribeGraceLookup = {}, e.batchSubscribe = "", e.batchUnsubscribe = "", e._streamDataProcessor = null, e.pullDataProcessor = null, e.delegatesnapshotRecievedHandler = new i(e, e.snapshotRecievedHandler), e.delegatepushConnectedHandler = new i(e, e.pushConnectedHandler), e.delegatepushReConnectedHandler = new i(e, e.pushReConnectedHandler), e.delegatepushConnectFailedHandler = new i(e, e.pushConnectFailedHandler), e.delegatepushInfoUpdatedHandler = new i(e, e.infoUpdatedHandler), e.callback_submitBatch = function() {
                    return e.submitBatch()
                }, e
            }
            return __extends(a, s), a.prototype.toString = function() {
                return "[SubscriptionManager]"
            }, a.prototype.connect = function() {
                this._streamDataProcessor.connect(t)
            }, a.prototype.subscribe = function(t, i, r, o) {
                var s, c, l, u, h, d;
                return "boolean" == typeof r && (s = arguments[2], c = arguments[3], l = arguments[4], u = arguments[5], r = 0, s || (r |= e.SubscriptionManagerFlags.SUPPRESS_SERVER_MESSAGE), c || (r |= e.SubscriptionManagerFlags.SUPPRESS_FULL_HIERARCHY), l && (o = l), u && (r |= e.SubscriptionManagerFlags.BATCH)), t ? (a.DevicePrefix && t.indexOf("X^{0}") > -1 && (t = t.replace("{0}", a.DevicePrefix)), h = Locator.treeLookup.getReference(t), d = this.unsubscribeGraceLookup[t], d && (clearTimeout(d), !h && this._subscribedTopics[t] && delete this._subscribedTopics[t], delete this.unsubscribeGraceLookup[t]), h ? Locator.validationManager.callLater((function() {
                    return i.method.call(i.scope, new n(t))
                })) : (this.addEventListener(t, i), this._subscribedTopics[t] ? this._subscribedTopics[t].push(i) : (this._subscribedTopics[t] = [i], "#" == t.charAt(0) ? (r & e.SubscriptionManagerFlags.SUPPRESS_SERVER_MESSAGE || this.pullDataProcessor.loadPageData(t, null, o, r), this.pullDataProcessor.addEventListener(t, this.delegatesnapshotRecievedHandler)) : (r & e.SubscriptionManagerFlags.SUPPRESS_SERVER_MESSAGE || (r & e.SubscriptionManagerFlags.DONT_BATCH ? this._streamDataProcessor.subscribe(t) : this._addToSubscribeBuffer(t)), this._streamDataProcessor.addEventListener(t, this.delegatesnapshotRecievedHandler)))), t) : null
            }, a.prototype.sharedSubscribe = function(e, t, n, i) {
                return this.topicCountLookup[e] = this.topicCountLookup[e] ? this.topicCountLookup[e] + 1 : 1, this.subscribe(e, t, n, i)
            }, a.prototype.sharedUnsubscribe = function(e, t) {
                this.topicCountLookup[e] = this.topicCountLookup[e] - 1, this.topicCountLookup[e] < 1 && (delete this.topicCountLookup[e], this.unsubscribe(e, t))
            }, a.prototype.unsubscribe = function(t, n) {
                var i, r, o, s = this;
                t && (a.DevicePrefix && t.indexOf("X^{0}") > -1 && (t = t.replace("{0}", a.DevicePrefix)), i = Locator.treeLookup.getReference(t), i && i.shed(), "#" != t.charAt(0) ? n & e.SubscriptionManagerFlags.SUPPRESS_SERVER_MESSAGE || (i || this._streamDataProcessor.hasEventListener(t) && this._streamDataProcessor.removeEventListener(t, this.delegatesnapshotRecievedHandler), (!this.unsubscribeGraceLookup[t] || n & e.SubscriptionManagerFlags.NO_GRACE_PERIOD) && (r = function() {
                    n & e.SubscriptionManagerFlags.DONT_BATCH ? s._streamDataProcessor.unsubscribe(t) : s.addToUnsubscribeBuffer(t), s.clearDownTopic(t, i);
                    var r = s.unsubscribeGraceLookup[t];
                    r && (clearTimeout(r), delete s.unsubscribeGraceLookup[t])
                }, n & e.SubscriptionManagerFlags.NO_GRACE_PERIOD || this.unsubscribeDeferralPeriodMS <= 0 ? r() : (o = window.setTimeout(r, this.unsubscribeDeferralPeriodMS), this.unsubscribeGraceLookup[t] = o))) : (!this.unsubscribeGraceLookup[t] || n & e.SubscriptionManagerFlags.NO_GRACE_PERIOD) && (r = function() {
                    s.pullDataProcessor.cancelPageDataLoad(t), s.clearDownTopic(t, i);
                    var e = s.unsubscribeGraceLookup[t];
                    e && (clearTimeout(e), delete s.unsubscribeGraceLookup[t])
                }, n & e.SubscriptionManagerFlags.NO_GRACE_PERIOD || !i ? r() : (o = window.setTimeout(r, this.unsubscribeDeferralPeriodMS), this.unsubscribeGraceLookup[t] = o)))
            }, a.prototype.clearDownTopic = function(e, t) {
                this.removeListenersForTopic(e), delete this._subscribedTopics[e], t && t.remove()
            }, a.prototype.send = function(e, t) {
                this._streamDataProcessor.send(e, t)
            }, a.prototype.resubscribePush = function(e) {
                for (var t in e) "#" != t.charAt(0) && this._addToSubscribeBuffer(t)
            }, a.prototype.getSubscribedPushTopics = function() {
                var e, t = [];
                for (e in this._subscribedTopics) "#" != e.charAt(0) && (t[t.length] = e);
                return t
            }, a.prototype.setStreamDataProcessor = function(t) {
                var n = this;
                this._streamDataProcessor && (this._streamDataProcessor.removeEventListener(e.StreamDataProcessorEvent.CONNECTED, this.delegatepushConnectedHandler), this._streamDataProcessor.removeEventListener(e.StreamDataProcessorEvent.CONNECTION_FAILED, this.delegatepushConnectFailedHandler), this._streamDataProcessor.removeEventListener(e.StreamDataProcessorEvent.RECONNECT_FAILED, this.delegatepushConnectFailedHandler), this._streamDataProcessor.removeEventListener(e.StreamDataProcessorEvent.SERVER_RECONNECT, this.delegatepushReConnectedHandler), this._streamDataProcessor.removeEventListener(e.StreamDataProcessorEvent.INFO_UPDATED, this.delegatepushInfoUpdatedHandler)), this._streamDataProcessor = t, this._streamDataProcessor.getCurrentTopics = function() {
                    return n.getSubscribedPushTopics()
                }, this._streamDataProcessor.addEventListener(e.StreamDataProcessorEvent.CONNECTED, this.delegatepushConnectedHandler), this._streamDataProcessor.addEventListener(e.StreamDataProcessorEvent.CONNECTION_FAILED, this.delegatepushConnectFailedHandler), this._streamDataProcessor.addEventListener(e.StreamDataProcessorEvent.RECONNECT_FAILED, this.delegatepushConnectFailedHandler), this._streamDataProcessor.addEventListener(e.StreamDataProcessorEvent.SERVER_RECONNECT, this.delegatepushReConnectedHandler), this._streamDataProcessor.addEventListener(e.StreamDataProcessorEvent.INFO_UPDATED, this.delegatepushInfoUpdatedHandler)
            }, a.prototype.setNST = function(e) {
                t = e, this._streamDataProcessor.setNst(e)
            }, a.prototype.sendNSTToken = function(e) {
                var n, i;
                t = e, this._streamDataProcessor.setNst(e), n = e(), i = "nst" + readit.StandardProtocolConstants.RECORD_DELIM + n + readit.StandardProtocolConstants.FIELD_DELIM + o, this.send("command", i)
            }, a.prototype.setPullDataProcessor = function(e) {
                this.pullDataProcessor = e
            }, a.prototype.close = function() {
                this._streamDataProcessor.close(readit.ReaditFlags.SEND_CLOSE)
            }, a.prototype._addToSubscribeBuffer = function(e) {
                0 == this.batchSubscribe.length && 0 == this.batchUnsubscribe.length ? Locator.validationManager.callLater(this.callback_submitBatch) : this.batchSubscribe && (this.batchSubscribe += ","), this.batchSubscribe += e
            }, a.prototype.addToUnsubscribeBuffer = function(e) {
                0 == this.batchSubscribe.length && 0 == this.batchUnsubscribe.length ? Locator.validationManager.callLater(this.callback_submitBatch) : this.batchUnsubscribe && (this.batchUnsubscribe += ","), this.batchUnsubscribe += e
            }, a.prototype.submitBatch = function() {
                this.batchSubscribe && this.batchUnsubscribe ? this._streamDataProcessor.swapSubscriptions(this.batchSubscribe, this.batchUnsubscribe) : (this.batchSubscribe && this._streamDataProcessor.subscribe(this.batchSubscribe), this.batchUnsubscribe && this._streamDataProcessor.unsubscribe(this.batchUnsubscribe)), this.batchSubscribe = "", this.batchUnsubscribe = ""
            }, a.prototype.removeListenersForTopic = function(e) {
                var t, n, i = this._subscribedTopics[e];
                if (i) {
                    for (t = i.length, n = 0; t > n; n++) this.removeEventListener(e, i[n]);
                    i.length = 0
                }
            }, a.prototype._OtsReport = function() {
                var e, t = "";
                for (e in this._subscribedTopics) t += e + "	\r\n";
                return t
            }, a.prototype.snapshotRecievedHandler = function(e) {
                var t = e.type;
                e.target.removeEventListener(t, this.delegatesnapshotRecievedHandler);
                try {
                    this.dispatchEvent(new n(t)), this.removeListenersForTopic(t), Locator.treeLookup.getReference(t) || delete this._subscribedTopics[t]
                } catch (i) {
                    ErrorReporter.Trace(this, i)
                }
            }, a.prototype.pushReConnectedHandler = function() {
                t && this.sendNSTToken(t)
            }, a.prototype.pushConnectedHandler = function() {
                this.pushConnected || this.dispatchEvent(new n(n.CONNECTED)), this.pushConnected = !0, this.unsubscribeDeferralPeriodMS = r
            }, a.prototype.pushConnectFailedHandler = function() {
                this.pushConnected && this.dispatchEvent(new n(n.CONNECTION_FAILED)), this.pushConnected = !1, this.unsubscribeDeferralPeriodMS = 0
            }, a.prototype.infoUpdatedHandler = function(e) {
                this.dispatchEvent(new n(n.INFO_UPDATED, e.data))
            }, a.TOPIC_FALLBACK_INDICATOR = "*", a
        })(ns_gen5_events.EventDispatcher);
    e.SubscriptionManager = s
})(ns_gen5_data || (ns_gen5_data = {})), (function(e) {
    var t = ns_gen5_util.Delegate,
        n = (function(n) {
            function i() {
                return n.call(this) || this
            }
            return __extends(i, n), i.prototype.setStreamDataProcessor = function(i) {
                this._streamDataProcessor ? (this._streamDataProcessor.removeEventListener(e.PrivateStreamDataProcessorEvent.BALANCE_RECEIVED, this.delegate_balanceReceivedHandler), this._streamDataProcessor.removeEventListener(e.PrivateStreamDataProcessorEvent.PUSH_MESSAGE_RECEIVED, this.delegate_pushMessageReceivedHandler), this._streamDataProcessor.removeEventListener(e.PrivateStreamDataProcessorEvent.D23_MESSAGE_RECEIVED, this.delegate_d23MessageReceivedHandler)) : (this.delegate_balanceReceivedHandler = new t(this, this.balanceReceivedHandler), this.delegate_pushMessageReceivedHandler = new t(this, this.pushMessageReceivedHandler), this.delegate_d23MessageReceivedHandler = new t(this, this.d23MessageReceivedHandler)), n.prototype.setStreamDataProcessor.call(this, i), this._streamDataProcessor.addEventListener(e.PrivateStreamDataProcessorEvent.BALANCE_RECEIVED, this.delegate_balanceReceivedHandler), this._streamDataProcessor.addEventListener(e.PrivateStreamDataProcessorEvent.PUSH_MESSAGE_RECEIVED, this.delegate_pushMessageReceivedHandler), this._streamDataProcessor.addEventListener(e.PrivateStreamDataProcessorEvent.D23_MESSAGE_RECEIVED, this.delegate_d23MessageReceivedHandler)
            }, i.prototype.balanceReceivedHandler = function(t) {
                this.dispatchEvent(new e.PrivateSubscriptionManagerEvent(e.PrivateSubscriptionManagerEvent.BALANCE_RECEIVED, t.message.topic, t.message.message))
            }, i.prototype.pushMessageReceivedHandler = function(t) {
                this.dispatchEvent(new e.PrivateSubscriptionManagerEvent(e.PrivateSubscriptionManagerEvent.PUSH_MESSAGE_RECEIVED, t.message.topic, t.message.message))
            }, i.prototype.d23MessageReceivedHandler = function(t) {
                this.dispatchEvent(new e.PrivateSubscriptionManagerEvent(e.PrivateSubscriptionManagerEvent.D23_MESSAGE_RECEIVED, t.message.topic, t.message.message))
            }, i.prototype.getSubscribedPushTopics = function() {
                return []
            }, i.prototype.pushReConnectedHandler = function() {
                n.prototype.resubscribePush.call(this, this._subscribedTopics)
            }, i
        })(e.SubscriptionManager);
    e.PrivateSubscriptionManager = n
})(ns_gen5_data || (ns_gen5_data = {})), (function(e) {
    var t = e.DataUtil,
        n = ns_gen5_net.Loader,
        i = (function() {
            function i(e, t, n) {
                void 0 === n && (n = !1), this.initialSnapshotHandler = function(e) {}, this.url = e, this.topic = t, n && this.buildInclusionExclusionData()
            }
            return i.prototype.poll = function() {
                var e, t = this;
                this.dataInclusionExclusionLevel && (this.url = -1 === this.url.indexOf("?") ? this.url + "?" : this.url + "&", this.url += "pd=" + encodeURIComponent(this.topic), this.url += "&" + this.dataInclusionExclusionLevel, this.dataInclusionExclusionLevel = null), e = new n, e.completeHandler = function(e, n) {
                    200 === n && t.handleResponse(e);
                }, e.load(this.url)
            }, i.prototype.handleResponse = function(e) {
                var n, i, r, o = this,
                    s = this.topic,
                    a = !!Locator.treeLookup.getReference(s),
                    c = a ? t.ParseMergeMessage(e, s) : t.ParseMessage(e, s);
                for (n = 0, i = c; n < i.length; n++) r = i[n], a && (s = r.topic), t.ProcessStemChanges(r, s, this.topic, a, (function(e) {
                    return o.initialSnapshotHandler(e)
                }));
                this.pollCompleteHandler && this.pollCompleteHandler()
            }, i.prototype.buildInclusionExclusionData = function() {
                var t = Locator.user;
                if (this.dataInclusionExclusionLevel = "cid=" + t.countryId + "&cg=" + t.countryGroupId + "&lid=" + t.languageId + "&zid=" + t.zoneId, t.filterMode && "-1" != t.filterMode) switch (t.filterMode) {
                    case e.User.FILTER_MODE_COUNTRY_GROUP:
                        this.dataInclusionExclusionLevel += "&cgid=" + t.countryGroupId;
                        break;
                    case e.User.FILTER_MODE_COUNTRY:
                        this.dataInclusionExclusionLevel += "&ctid=" + t.countryId;
                        break;
                    case e.User.FILTER_MODE_COUNTRY_STATE:
                        this.dataInclusionExclusionLevel += "&csid=" + t.countryStateId
                }
            }, i
        })();
    e.PollDataProcessor = i
})(ns_gen5_data || (ns_gen5_data = {})), (function(e) {
    var t = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e), t.prototype.toString = function() {
            return "[PushedConfigPropertyChangeEvent type=" + this.type + "]"
        }, t.PROPERTIES_INITIALISED = "PUSH_CONFIG_PROPERTIES_INITIALISED", t.IS_INPLAY_AVAILABLE = "IS_INPLAY_AVAILABLE", t.INPLAY_LAUNCHER_DISPLAY_MODE = "INPLAY_LAUNCHER_CONTENT_TYPE", t.INPLAY_RHS_LAUNCHER_DISPLAY_MODE = "INPLAY_RHS_LAUNCHER_CONTENT_TYPE", t.IS_MYBETS_SYSTEM_ENABLED = "IS_MYBETS_SYSTEM_ENABLED", t.IS_OPEN_BETS_PULL_DELIVERY_AVAILABLE = "IS_OPEN_BETS_PULL_DELIVERY_AVAILABLE", t.IS_CLOSE_BETS_PULL_DELIVERY_AVAILABLE = "IS_CLOSE_BETS_PULL_DELIVERY_AVAILABLE", t.IS_MYBETS_SITE_FEATURE_AVAILABLE = "IS_MYBETS_SITE_FEATURE_AVAILABLE", t.IS_CLICK_TO_CALL_SITE_FEATURE_AVAILABLE = "IS_CLICK_TO_CALL_SITE_FEATURE_AVAILABLE", t.IS_BET_CALL_AVAILABLE = "IS_BET_CALL_AVAILABLE", t.IS_BET_CALL_TWILIO_AVAILABLE = "IS_BET_CALL_TWILIO_AVAILABLE", t.IS_CUSTOMER_TO_CUSTOMER_CALLING_FEATURE_AVAILABLE = "IS_CUSTOMER_TO_CUSTOMER_CALLING_FEATURE_AVAILABLE", t.IS_CUSTOMER_TO_REPRESENTATIVE_CALLING_FEATURE_AVAILABLE = "IS_CUSTOMER_TO_REPRESENTATIVE_CALLING_FEATURE_AVAILABLE", t.PUSH_BALANCE_ENABLED_AVAILABLE = "PUSH_BALANCE_ENABLED_AVAIBLE", t.IS_SETTLED_BETS_FEATURE_AVAILABLE = "IS_SETTLED_BETS_FEATURE_AVAILABLE", t.IS_EDIT_BETS_FEATURE_AVAILABLE = "IS_EDIT_BETS_FEATURE_AVAILABLE", t.IS_EDIT_BETS_COMPLEX_MULTIPLES_FEATURE_AVAILABLE = "IS_EDIT_BETS_COMPLEX_MULTIPLE_FEATURE_AVAILABLE", t.IS_AUS_MULTIPLES_AVAILABLE = "IS_AUS_MULTIPLES_AVAILABLE", t.FREE_BET_COUNTRIES_UPDATED = "FREE_BET_COUNTRIES_UPDATED", t.PSQFV4_AVAILABLE = "PSQFV4_AVAILABLE", t
    })(ns_gen5_events.Event365);
    e.PushedConfigPropertyChangeEvent = t
})(ns_gen5_config || (ns_gen5_config = {})), (function(e) {
    function t(e) {
        e && e.length > 0 && (e = ns_gen5_util.B365SimpleEncrypt.decrypt(e), Locator.subscriptionManager.subscribe(e, new l(this, function(e) {})))
    }
    var n, i, r = ns_gen5_util.OddsConverter,
        o = ns_gen5_events.EventDispatcher,
        s = ns_gen5_events.Event365,
        a = ns_gen5_data.SubscriptionManagerEvent,
        c = ns_gen5_data.StemEvent,
        l = ns_gen5_util.Delegate;
    !(function(e) {
        e[e.fixture = 0] = "fixture", e[e.classification = 1] = "classification"
    })(n = e.InplayLauncherDisplayModeEnum || (e.InplayLauncherDisplayModeEnum = {})), i = (function(n) {
        function i() {
            var e = n.call(this) || this;
            return e._subscriptionTopic = null, e._subscriptionManager = null, e._configStem = null, e._configStemUpdateHandlerDelegate = null, e._configStemDeleteHandlerDelegate = null, e._pushConnectedHandlerDelegate = null, e._pushDisconnectedHandlerDelegate = null, e._isSubscriptionInitialised = !1, e._isDisposed = !1, e._pushConnected = !1, e._arePropertiesInitialised = !1, e._isInPlayDataAvailable = !1, e._isMyBetsSystemEnabled = !1, e._isOpenBetsPullDeliveryAvailable = !1, e._isMyBetsSiteFeatureAvailable = !1, e._isBetCallAvailable = !1, e._isAusMultiplesAvailable = !1, e._isBetCallTwilioAvailable = !1, e._isPushBalanceEnabled = !1, e._settledBetsEnabled = !1, e._isCloseBetPullPresentationEnabled = !0, e._isEditBetsEnabled = !1, e.psqfV4Enabled = !1, e.freeBetCountries = [], e.editBetsComplexMultiplesEnabled = !1, e.betCallDisabledAttribute = "MB", e.ausMultiplesDisabledAttribute = "AM", e.betCallTwilioDisabledAttribute = "MT", e.settledBetsDisabledAttribute = "SB", e.pushBalanceEnabledAttribute = "PB", e.complexMultiplesEnabledAttribute = "EM", e
        }
        return __extends(i, n), i.prototype.initialiseSubscription = function(e, t) {
            this._isSubscriptionInitialised || this._isDisposed || (this._pushConnectedHandlerDelegate = new l(this, this.pushConnectedHandler), this._pushDisconnectedHandlerDelegate = new l(this, this.pushDisconnectedHandler), Locator.privateSubscriptionManager.addEventListener(a.CONNECTED, this._pushConnectedHandlerDelegate), Locator.privateSubscriptionManager.addEventListener(a.CONNECTION_FAILED, this._pushDisconnectedHandlerDelegate), this._isSubscriptionInitialised = !0, this._subscriptionTopic = ns_gen5_util.StringUtil.Format(i.USER_CONFIG_SUBSCRIPTION_TOPIC, t.languageId, t.zoneId), this._subscriptionManager = e, e.subscribe(this._subscriptionTopic, new l(this, this.configTopicSubscriptionHandler)))
        }, i.prototype.getArePropertiesInitialised = function() {
            return this._arePropertiesInitialised
        }, i.prototype.getAttributeValue = function(e) {
            return this._configStem && this._configStem.data[e] || ""
        }, i.prototype.getIsInPlayAvailable = function() {
            return this._isInPlayDataAvailable
        }, i.prototype.getIsMyBetsSystemEnabled = function() {
            return this._isMyBetsSystemEnabled
        }, i.prototype.getIsOpenBetsPullDeliveryAvailable = function() {
            return this._isOpenBetsPullDeliveryAvailable
        }, i.prototype.getIsCloseBetPullPresentationEnabled = function() {
            return this._isCloseBetPullPresentationEnabled
        }, i.prototype.getIsMyBetsSiteFeatureAvailable = function() {
            return this._isMyBetsSiteFeatureAvailable
        }, i.prototype.getIsBetCallAvailable = function() {
            return this._isBetCallAvailable
        }, i.prototype.getIsAusMultiplesAvailable = function() {
            return this._isAusMultiplesAvailable
        }, i.prototype.getIsBetCallTwilioAvailable = function() {
            return this._isBetCallTwilioAvailable
        }, i.prototype.getIsPushBalanceEnabled = function() {
            return this._isPushBalanceEnabled
        }, i.prototype.getIsEditBetsEnabled = function() {
            return this._isEditBetsEnabled
        }, i.prototype.getIsSettledBetsEnabled = function() {
            return this._settledBetsEnabled
        }, i.prototype.getIsEditBetsComplexEnabled = function() {
            return this.editBetsComplexMultiplesEnabled
        }, i.prototype.getIsPSQFV4Enabled = function() {
            return this.psqfV4Enabled
        }, i.prototype.getIsFreeBetsAllowed = function(e) {
            return this.freeBetCountries.indexOf(e) > -1
        }, i.prototype.dispose = function() {
            this._isDisposed || (this._isDisposed = !0, this._subscriptionTopic && (Locator.privateSubscriptionManager.removeEventListener(a.CONNECTED, this._pushConnectedHandlerDelegate), Locator.privateSubscriptionManager.removeEventListener(a.CONNECTION_FAILED, this._pushDisconnectedHandlerDelegate), this._subscriptionManager.unsubscribe(this._subscriptionTopic), this._subscriptionTopic = null, this._subscriptionManager = null), this.configStemDeleteHandler())
        }, i.prototype.getIsDisposed = function() {
            return this._isDisposed
        }, i.prototype.configTopicSubscriptionHandler = function(n) {
            var i = this,
                r = Locator.treeLookup;
            !this._configStem && r && (this._configStem = r.getReference(n.type), this._configStemUpdateHandlerDelegate = new l(this, this.configStemUpdateHandler), this._configStemDeleteHandlerDelegate = new l(this, this.configStemDeleteHandler), this._configStem.addEventListener(c.UPDATE, this._configStemUpdateHandlerDelegate), this._configStem.addEventListener(c.DELETE, this._configStemDeleteHandlerDelegate), this.configStemChanged(this._configStem.data), this._arePropertiesInitialised = !0, this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.PROPERTIES_INITIALISED)), this.addEventListener("AD", new l(this, function(e) {
                return t(i.getAttributeValue("AD"))
            })), this.getAttributeValue("AD") && t(this.getAttributeValue("AD")))
        }, i.prototype.updateProperties = function(t, n) {
            var i, o, s, a, c, l, u, h, d, p, _, g, f;
            "IF" in t && (i = "1" === this._configStem.data.IF, this._isInPlayDataAvailable !== i && (this._isInPlayDataAvailable = i, n && this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_INPLAY_AVAILABLE)))), "CB" in t && (o = "0" === this._configStem.data.CB, this._isMyBetsSystemEnabled !== o && (this._isMyBetsSystemEnabled = o, n && this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_MYBETS_SYSTEM_ENABLED)))), "CP" in t && (s = "0" === this._configStem.data.CP, this._isCloseBetPullPresentationEnabled !== s && (this._isCloseBetPullPresentationEnabled = s, this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_CLOSE_BETS_PULL_DELIVERY_AVAILABLE)))), "OP" in t && (a = "0" === this._configStem.data.OP, this._isOpenBetsPullDeliveryAvailable !== a && (this._isOpenBetsPullDeliveryAvailable = a, n && this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_OPEN_BETS_PULL_DELIVERY_AVAILABLE)))), "FC" in t && (this.freeBetCountries = this._configStem.data.FC.split(","), n && this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.FREE_BET_COUNTRIES_UPDATED))), c = this._isMyBetsSystemEnabled && this._isOpenBetsPullDeliveryAvailable, this._isMyBetsSiteFeatureAvailable !== c && (this._isMyBetsSiteFeatureAvailable = c, n && this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_MYBETS_SITE_FEATURE_AVAILABLE))), this.betCallTwilioDisabledAttribute in t && (l = "1" != this._configStem.data[this.betCallTwilioDisabledAttribute], this._isBetCallTwilioAvailable !== l && (this._isBetCallTwilioAvailable = l, this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_BET_CALL_TWILIO_AVAILABLE)))), this.betCallDisabledAttribute in t && (u = "1" != this._configStem.data[this.betCallDisabledAttribute], this._isBetCallAvailable !== u && (this._isBetCallAvailable = u, this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_BET_CALL_AVAILABLE)))), this.ausMultiplesDisabledAttribute in t && (h = "1" != this._configStem.data[this.ausMultiplesDisabledAttribute], this._isAusMultiplesAvailable !== h && (this._isAusMultiplesAvailable = h, this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_AUS_MULTIPLES_AVAILABLE)))), this.settledBetsDisabledAttribute in t && (d = "1" != this._configStem.data[this.settledBetsDisabledAttribute], this._settledBetsEnabled !== d && (this._settledBetsEnabled = d, this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_SETTLED_BETS_FEATURE_AVAILABLE)))), this.pushBalanceEnabledAttribute in t && (p = "1" == this._configStem.data[this.pushBalanceEnabledAttribute] && this._pushConnected, this._isPushBalanceEnabled !== p && (this._isPushBalanceEnabled = p, n && this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.PUSH_BALANCE_ENABLED_AVAILABLE)))), "EE" in t && (_ = "1" !== this._configStem.data.EE, this._isEditBetsEnabled !== _ && (this._isEditBetsEnabled = _, this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_EDIT_BETS_FEATURE_AVAILABLE)))), this.complexMultiplesEnabledAttribute in t && (g = t[this.complexMultiplesEnabledAttribute] && "1" !== t[this.complexMultiplesEnabledAttribute], this.editBetsComplexMultiplesEnabled !== g && (this.editBetsComplexMultiplesEnabled = g, this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.IS_EDIT_BETS_COMPLEX_MULTIPLES_FEATURE_AVAILABLE)))), "PF" in t && (f = "1" === this._configStem.data.PF, this.psqfV4Enabled !== f && (this.psqfV4Enabled = f, this.dispatchEvent(new e.PushedConfigPropertyChangeEvent(e.PushedConfigPropertyChangeEvent.PSQFV4_AVAILABLE)))), this.psqfV4Enabled && (r.MinOdds = 0)
        }, i.prototype.configStemUpdateHandler = function(e) {
            this.configStemChanged(e.data)
        }, i.prototype.configStemChanged = function(e) {
            this.updateProperties(e, !0);
            for (var t in e) this.dispatchEvent(new s(t))
        }, i.prototype.configStemDeleteHandler = function() {
            this._configStem && (this._configStem.removeEventListener(c.UPDATE, this._configStemUpdateHandlerDelegate), this._configStem.removeEventListener(c.DELETE, this._configStemDeleteHandlerDelegate), this._configStem = null)
        }, i.prototype.pushDisconnectedHandler = function() {
            if (this._pushConnected && (this._pushConnected = !1, this._configStem)) {
                var e = {};
                e[this.pushBalanceEnabledAttribute] = "0", this.updateProperties(e, !0)
            }
        }, i.prototype.pushConnectedHandler = function() {
            if (!this._pushConnected && (this._pushConnected = !0, this._configStem)) {
                var e = {};
                e[this.pushBalanceEnabledAttribute] = "1", this.updateProperties(e, !0)
            }
        }, i.USER_CONFIG_SUBSCRIPTION_TOPIC = "CONFIG_{0}_{1}", i
    })(o), e.PushedConfigManager = i
})(ns_gen5_config || (ns_gen5_config = {})), (function(e) {
    var t = (function() {
        function e(e) {
            this.host = e, this.membersHost = e.replace("www", "members"), this.mobileHost = e.replace("www", "mobile"), this.streamHost = e.replace("www", "streaming").replace("extra", "videostream"), this.videoStreamHost = e.replace("www", "videostream").replace("extra", "videostream"), this.extraHost = e.replace("www", "extra"), this.helpHost = e.replace("www", "help"), this.casinoHost = e.replace("www", "casino"), this.bingoHost = e.replace("www", "bingo"), this.pokerHost = e.replace("www", "poker"), this.gamesHost = e.replace("www", "games"), this.slotsHost = e.replace("www", "slots"), this.vegasHost = e.replace("www", "vegas"), this.rsGamblingHost = e.replace("www", "responsiblegambling"), this.hostname = e.replace(/https{0,1}\:\/\//g, "")
        }
        return e.prototype.href = function() {
            return (this.host || "") + location.href.substring(location.href.indexOf(location.host) + location.host.length)
        }, e.prototype.hrefNoHash = function() {
            return this.href().split("#")[0]
        }, e
    })();
    e.Domain = t
})(ns_gen5_config || (ns_gen5_config = {})), (function(e) {
    var t = (function() {
        function e() {}
        return e.prototype.setConnectionDetails = function(e) {
            this.connectionDetails = e
        }, e.prototype.getConnectionDetails = function() {
            return this.connectionDetails
        }, e.prototype.setPrivateConnectionDetails = function(e) {
            this.privateConnectionDetails = e
        }, e.prototype.getPrivateConnectionDetails = function() {
            return this.privateConnectionDetails
        }, e.prototype.fallbackConnectionEnabled = function() {
            return !1
        }, e.prototype.hasSessionExpired = function() {
            return !1
        }, e
    })();
    e.ApplicationConfig = t
})(ns_gen5_config || (ns_gen5_config = {})), (function(e) {})(ns_gen5_events || (ns_gen5_events = {})), (function(e) {
    var t = (function() {
        function e(e) {
            this._element = this._active_element = document.createTextNode(e || ""), this._text = e || null
        }
        return e.prototype.toString = function() {
            return "[TextNode text=" + this._text + "]"
        }, e.prototype.setText = function(e) {
            return this._text = this._element.data = e
        }, e.prototype.getText = function() {
            return this._text
        }, e.prototype.getElement = function() {
            return this._element
        }, e.Wrapper = function(e) {
            this._element = e, this._text = this._element.data || null
        }, e.SInit = (function() {
            e.prototype.parent = null, e.prototype._element = null, e.prototype._active_element = null, e.prototype._text = null, e.Wrapper.prototype = new e
        })(), e
    })();
    e.TextNode = t
})(ns_gen5_ui || (ns_gen5_ui = {})), (function(e) {
    var t = (function() {
        function t(e, t) {
            var n = this;
            this.element = e, this.enableFastClick = t, this._callback_clickHandler = function(e) {
                return n._clickHandler(e)
            }, this._callback_touchStartHandler = function(e) {
                return n._touchStartHandler(e)
            }
        }
        return t.prototype.activate = function() {
            var n = this.element instanceof e.DomElement ? this.element.getElement() : this.element;
            n.addEventListener("click", this._callback_clickHandler), t.IS_CHROME && n.addEventListener("touchstart", this._callback_touchStartHandler), this.enableFastClick && (this._fastClick = FastClick.attach(n))
        }, t.prototype.release = function() {
            this._fastClick && (this._fastClick.destroy(), this._fastClick = null);
            var n = this.element instanceof e.DomElement ? this.element.getElement() : this.element;
            n.removeEventListener("click", this._callback_clickHandler), t.IS_CHROME && n.removeEventListener("touchstart", this._callback_touchStartHandler)
        }, t.prototype._touchStartHandler = function(e) {
            e ? this._touchElement = e.target : this._touchElement = null
        }, t.prototype._clickHandler = function(e) {
            var n, i = e || window.event;
            if (i.target) {
                for (n = i.target, this._touchElement && t.IS_CHROME && (n = this._touchElement, this._touchElement = null); n;) {
                    if (n.wrapper && n.wrapper.clickHandler) {
                        try {
                            n.wrapper.clickHandler(i)
                        } catch (r) {
                            ErrorReporter.Trace(this, r)
                        }
                        break
                    }
                    n = n.parentNode
                }
                Locator.validationManager.processValidationCycleNow()
            }
        }, t.IS_CHROME = !!/chrome/.exec(navigator.userAgent.toLowerCase()), t
    })();
    e.PointerProcessor = t
})(ns_gen5_ui || (ns_gen5_ui = {})), (function(e) {
    var t = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e), t.prototype.setSVGData = function(e) {
            t.RequiresAbsolutePaths && (e = e.replace(/url\(#/g, "url(" + Locator.config.domain.hrefNoHash() + "#")), this._element.innerHTML = e
        }, t.RequiresAbsolutePaths = !0, t
    })(e.Component);
    e.SVGWrapperComponent = t
})(ns_gen5_ui || (ns_gen5_ui = {})), (function(e) {
    var t = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e), t.prototype.commitStyles = function() {
            var e, t = "";
            for (e in this._styleList) t += e + " ";
            this._element.setAttribute("class", t)
        }, t.prototype.createElement = function(e) {
            return document.createElementNS("http://www.w3.org/2000/svg", e)
        }, t.prototype.setViewbox = function(e) {
            this._element.setAttribute("viewBox", e)
        }, t.prototype.createSVGPoint = function() {
            return this._element.createSVGPoint()
        }, t
    })(e.Component);
    e.SVG = t
})(ns_gen5_ui || (ns_gen5_ui = {})), (function(e) {
    var t = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e), t.prototype.addPoint = function(e) {
            var t = this.cordinateContext ? this.cordinateContext.createSVGPoint() : e;
            this.cordinateContext && (t.x = e.x, t.y = e.y), this._element.points.appendItem(t)
        }, t.prototype.removePoint = function(e) {
            this._element.points.removeItem(e)
        }, t.prototype.pointCount = function() {
            return this._element.points.numberOfItems
        }, t.prototype.clearPoints = function() {
            this._element.points.clear()
        }, t.prototype.setStroke = function(e) {
            this._element.setAttribute("stroke", e)
        }, t.prototype.setStrokeWidth = function(e) {
            this._element.setAttribute("stroke-width", e)
        }, t.prototype.setFill = function(e) {
            this._element.setAttribute("fill", e)
        }, t.prototype.setFillOpacity = function(e) {
            this._element.setAttribute("fill-opacity", e)
        }, t.SInit = (function() {
            t.prototype.cordinateContext = null
        })(), t
    })(e.SVG);
    e.SVGPoly = t
})(ns_gen5_ui || (ns_gen5_ui = {})), (function(e) {
    var t = (function(e) {
        function t() {
            return e.call(this, "stop") || this
        }
        return __extends(t, e), t.prototype.setOffset = function(e) {
            this._element.setAttribute("offset", e)
        }, t.prototype.setOpacity = function(e) {
            this._element.setAttribute("stop-opacity", e)
        }, t.prototype.setColor = function(e) {
            this._element.setAttribute("stop-color", e)
        }, t
    })(e.SVG);
    e.SVGStop = t
})(ns_gen5_ui || (ns_gen5_ui = {})), (function(e) {
    var t = (function(e) {
        function t(t) {
            var n = e.call(this, "linearGradient") || this;
            return n.id = t, n.svgId = t, n
        }
        return __extends(t, e), t.prototype.initialize = function() {
            this._element.setAttribute("id", this.id), e.prototype.initialize.call(this)
        }, t.prototype.setX1 = function(e) {
            this._element.setAttribute("x1", e)
        }, t.prototype.setX2 = function(e) {
            this._element.setAttribute("x2", e)
        }, t.prototype.setY1 = function(e) {
            this._element.setAttribute("y1", e)
        }, t.prototype.setY2 = function(e) {
            this._element.setAttribute("y2", e)
        }, t.prototype.getUrl = function() {
            var e;
            return e = t.RequiresAbsolutePaths ? "url(" + Locator.config.domain.hrefNoHash() + "#" + this.svgId + ")" : "url(#" + this.svgId + ")"
        }, t.RequiresAbsolutePaths = !0, t
    })(e.SVG);
    e.SVGLinearGradient = t
})(ns_gen5_ui || (ns_gen5_ui = {})), (function(e) {
    var t, n = (function(e) {
        function n(n, i) {
            var r = this;
            return t = i.getElement(), r = e.call(this, n) || this, t = null, 1 != r._stopInitInvalidation && (Locator.validationManager.queueForValidation(r), r._propertiesInvalidated = !0), r
        }
        return __extends(n, e), n.prototype.createElement = function(e) {
            var n = t.querySelector("#" + e);
            return $assert && $assert(!n.wrapper, "The SVG element has already been wrapped."), n
        }, n
    })(e.SVG);
    e.SVGWrapper = n
})(ns_gen5_ui || (ns_gen5_ui = {})), (function(e) {
    function t(e) {
        return function(t) {
            return e + "  " + (t.moduleName || "") + ":" + (t.elementName || "")
        }
    }

    function n(e) {
        var t = "Module Load Error " + e;
        ErrorReporter.Trace("ModuleContainer:::", t), $logFmt(t, "font-weight:bold; color:#FF0000;")
    }
    var i, r = t("0x01"),
        o = ns_gen5_util.Delegate,
        s = ns_gen5_util.Config,
        a = ns_gen5_events.ModuleEvent,
        c = ns_gen5_util.InfoReporter,
        l = ns_gen5_util.InfoReporterGroups,
        u = (function() {
            function e() {
                this.resourcesNeeded = 1, this.resourcesLoaded = 0
            }
            return e.prototype.isFullyLoaded = function() {
                return this.resourcesLoaded >= this.resourcesNeeded
            }, e
        })();
    e.ModuleResourcePackage = u, i = (function(t) {
        function i() {
            var e = t.call(this) || this;
            return e.invokeQueue = [], e
        }
        return __extends(i, t), i.LoadModule = function(e, t) {
            var n, r, o, s = i.ModuleCache[e];
            s && s.definition ? (n = s.isFullyLoaded(), Locator.validationManager.callLater((function() {
                t.moduleAvailableHandler(s), n && t.moduleReadyHandler(s)
            }))) : s ? (r = i.PendingList[e], r[r.length] = t) : (s = i.ModuleCache[e] = new u, o = function() {
                var t, n, r, o;
                if (s.isFullyLoaded() && (t = i.PendingList[e])) {
                    for (n = 0, r = t; n < r.length; n++) o = r[n], o.moduleReadyHandler(s);
                    delete i.PendingList[e]
                }
            }, i.PendingList[e] = [t], i.ModuleLoader.loadModule(e, s, o))
        }, i.RegisterModule = function(e, t) {
            var n, r, o, s, a = i.ModuleCache[e];
            if (a || (a = i.ModuleCache[e] = new u), a.resourcesLoaded++, $assert && $assert(!a.definition, "Duplicate module definition loaded - " + e), a.definition = t, n = i.PendingList[e])
                for (r = 0, o = n; r < o.length; r++) s = o[r], s.moduleAvailableHandler(a)
        }, i.RegisterLanguage = function(e, t) {
            var n = i.ModuleCache[e];
            n.resourcesLoaded++, n.languageDefinition = t
        }, i.RegisterConfig = function(e, t) {
            var n = i.ModuleCache[e];
            n.config = t
        }, i.prototype.load = function(t) {
            var n, r, s, a;
            this.moduleName = t, n = Locator.manifestManager.getLocaleNames(t), n && n.length && (r = boot.getLocale(), -1 === n.indexOf(r) && (r = "Default"), this.localeModule = new e.ModuleContainer, this.localeModule.load(t + "-" + r)), Locator.manifestManager.getApp(t) && boot.isAppRequest && (this.appModule = new e.ModuleContainer, this.appModule.load(t + "-App")), i.LoadModule(t, this), this.defaultApiLocation = this.defaultApiLocation || Locator.manifestManager.getDefaultApiLocation(t), s = Locator.manifestManager.getDefaultTopic(t), null !== s && (s && (a = Locator.user, s = s.replace("{L}", a.languageId), s = s.replace("{Z}", a.zoneId), s = s.replace("{C}", "" + a.customerType), this.defaultTopic = s), this.defaultTopic && (this.defaultApiLocation ? Locator.subscriptionManager.subscribe(this.defaultTopic, new o(this, this.defaultTopicSubscriptionHandler), null, this.defaultApiLocation) : Locator.subscriptionManager.subscribe(this.defaultTopic, new o(this, this.defaultTopicSubscriptionHandler))))
        }, i.prototype.defaultTopicSubscriptionHandler = function(e) {
            var t = Locator.treeLookup.getReference(e.type);
            this.defaultStem = t, this.storedResourcePackage && this.moduleReadyHandler(this.storedResourcePackage)
        }, i.prototype.dispose = function() {
            if (this._module) {
                try {
                    this._module.dispose()
                } catch (e) {
                    ErrorReporter.Trace(this, e)
                }
                $assert && $assert(this._module.disposed, "dispose() has been called but module isn't reporting as being disposed - " + this._module), this._module.disposed || c.Trace(l.MODULE_LOAD_ENTRY, this._module + " did not dispose correctly"), this._module = null
            }
            this.localeModule && (this.localeModule.dispose(), this.localeModule = null), this.appModule && (this.appModule.dispose(), this.appModule = null), this.disposed = !0
        }, i.prototype.getModule = function() {
            return this._module
        }, i.prototype.invoke = function(e) {
            var t = this;
            this.moduleReady ? Locator.validationManager.callLater((function() {
                return e(t._module)
            })) : this.invokeQueue.push(e)
        }, i.prototype.moduleAvailableHandler = function(t) {
            var n, i = this._module = new t.definition;
            i.initObject = this.initObject, e.MediaTypeIdLookup && (n = -1 === this.moduleName.indexOf("-") ? this.moduleName : this.moduleName.substring(0, this.moduleName.indexOf("-")), i.mediaTypeId = e.MediaTypeIdLookup[n], $assert && $assert(void 0 !== i.mediaTypeId, "moduleAvailableHandler() is looking for the media type of module '" + this.moduleName + "' which is not defined in MediaTypeIdLookup"));
            try {
                this.appendChild(i)
            } catch (r) {
                ErrorReporter.Trace(this, r)
            }
        }, i.prototype.moduleReadyHandler = function(e) {
            var t, i, o, u;
            if (!this.disposed) {
                if (this.defaultTopic && !this.defaultStem) return void(this.storedResourcePackage = e);
                if (this.defaultTopic && !this._module) return void n(r(this));
                this.storedResourcePackage = null, t = this._module.languageDefinition = ns_gen5_util.Singleton.getInstance(ns_gen5_language.Resource, this._module), t.mlJson = e.languageDefinition, e.config && (this._module.config = new s, this._module.config.setConfigJSON(e.config)), this.defaultStem && (this._module.defaultStem = this.defaultStem), this.defaultApiLocation && (this._module.defaultApiLocation = this.defaultApiLocation);
                try {
                    this._module.moduleReady(), this._module.bubbleEvent(new a(a.MODULE_READY)), this.moduleReady = !0
                } catch (h) {
                    ErrorReporter.Trace(this, h)
                }
                for ($assert && $assert(this._module.ready, "moduleReady() has been called but module isn't reporting as ready - " + this._module), this._module.ready || c.Trace(l.MODULE_LOAD_ENTRY, this._module + " did not ready-up correctly"), i = 0, o = this.invokeQueue; i < o.length; i++) {
                    u = o[i];
                    try {
                        u(this._module)
                    } catch (h) {
                        ErrorReporter.Trace(this, h)
                    }
                }
                this.invokeQueue.length = 0
            }
        }, i.ModuleCache = {}, i.PendingList = {}, i.ModuleLoader = new ns_gen5_net.ModuleLoaderBlob, i.SInit = (function() {
            i.prototype._module = null, i.prototype.defaultStem = null, i.prototype.moduleReady = !1, i.prototype.storedResourcePackage = null, i.prototype.disposed = !1, i.prototype.initObject = null, i.prototype.defaultTopic = null, i.prototype.elementName = null, i.prototype.moduleName = null, i.prototype.defaultApiLocation = null
        })(), i
    })(e.Component), e.ModuleContainerAs = i, e.ModuleContainer = i
})(ns_gen5_ui || (ns_gen5_ui = {})), (function(e) {
    var t = e.DomElement,
        n = (function(e) {
            function n() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.spinnerStyle = "g5-Spinner_Image", t.defaultStyle = "g5-Spinner", t
            }
            return __extends(n, e), n.prototype.createChildren = function() {
                this.addStyle(this.defaultStyle), this.addStyle("g5-Spinner_FadeIn");
                var e = new t;
                e.setAttribute("class", this.spinnerStyle), this.appendChild(e), this.validateNow()
            }, n.prototype.remove = function() {
                var e, t = this,
                    n = this._element;
                this.removeStyle("g5-Spinner_FadeIn"), this.addStyle("g5-Spinner_FadeOut"), e = function() {
                    t.removeStyle("g5-Spinner_FadeOut"), n.parentElement.removeChild(n), n.removeEventListener(ANIMATION_END, e)
                }, this._element.addEventListener && this._element.addEventListener(ANIMATION_END, e, !1), this.validateNow()
            }, n
        })(e.Component);
    e.Spinner = n
})(ns_gen5_ui || (ns_gen5_ui = {})), (function(e) {
    function t() {
        var e, t;
        "undefined" != typeof l.currentApplication && (m = document.documentElement.clientWidth || window.innerWidth || document.body.clientWidth, v = document.documentElement.clientHeight || window.innerHeight || document.body.clientHeight, l.currentApplication.width = m, e = m < l.widthThreshold ? 0 : 1, e != l.currentApplication.widthState && (l.currentApplication.removeStyle(f + l.currentApplication.widthState), l.currentApplication.widthState = e, o.dispatchEvent(new u(u.WIDTH_STATE_CHANGED, m)), Locator.validationManager.processValidationCycleNow(), l.currentApplication.overwriteStyle(f + l.currentApplication.widthState, f + e)), e = m < l.viewWidthThreshold ? 0 : 1, e != l.currentApplication.viewState && (l.currentApplication.removeStyle(E + l.currentApplication.viewState), l.currentApplication.viewState = e, o.dispatchEvent(new u(u.VIEW_STATE_CHANGED)), Locator.validationManager.processValidationCycleNow(), l.currentApplication.overwriteStyle(E + l.currentApplication.viewState, E + e)), l.currentApplication.height !== v && (l.currentApplication.height = v, o.dispatchEvent(new u(u.HEIGHT_CHANGED))), l.currentApplication.dispatchEvent(new u(u.WIDTH_CHANGED, m)), t = v, t && (t -= l.heightOffset, l.currentApplication.getElement().style.minHeight = t + "px"))
    }

    function n(e) {
        window.removeEventListener("orientationchanged", n), window.removeEventListener("resize", n), window.addEventListener(e.type, t), t()
    }

    function i() {
        o && !o.preventUnloading && (o.preventUnloading = !1, o.dispatchEvent(new u(u.UNLOADING)))
    }

    function r(e) {
        o && (e = e || window.event, "focus" == e.type || "focusin" == e.type ? o.suspended = !1 : "blur" == e.type || "focusout" == e.type ? o.suspended = !0 : this[a] ? o.suspended = !0 : o.suspended = !1, o.suspended ? o.dispatchEvent(new u(u.FOCUS_OUT)) : o.dispatchEvent(new u(u.FOCUS_IN)))
    }
    var o, s, a, c, l, u = ns_gen5_events.ApplicationEvent,
        h = ns_gen5_util.Delegate,
        d = e.Spinner,
        p = ns_gen5_data.StreamDataProcessorEvent,
        _ = e.PointerProcessor,
        g = !1,
        f = "widthState",
        E = "viewState",
        m = 0,
        v = 0,
        S = 0,
        y = 0;
    window.addEventListener("orientationchanged", n), window.addEventListener("resize", n), window.addEventListener("beforeunload", i), a = "", c = {
        hidden: "visibilitychange",
        mozHidden: "mozvisibilitychange",
        webkitHidden: "webkitvisibilitychange",
        msHidden: "msvisibilitychange"
    };
    for (a in c)
        if (a in document) {
            s = c[a];
            break
        } s ? (document.removeEventListener(s, r), document.addEventListener(s, r)) : "onfocusin" in document ? document.onfocusin = document.onfocusout = r : window.onfocus = window.onblur = r, l = (function(n) {
        function i(r) {
            var s = n.call(this) || this;
            return s.applyPointerProcessor = !0, s._loadingTimer = null, s._spinner = null, s.height = 0, s.width = 0, s.widthState = -1, s.viewState = -1, s.suspended = !1, s.preventUnloading = !1, s.connected = !1, e.Component.Wrapper.call(s, r), s.addStyle("g5-Application"), s._delegate_loadingHandler = new h(s, s.loadingHandler), s._delegate_loadingCompleteHandler = new h(s, s.loadingCompleteHandler), s._delegate_showStreamingHandler = new h(s, s._showStreamingHandler), s._delegate_connectedHandler = new h(s, s._connectedHandler), s._delegate_connectionFailureHandler = new h(s, s._connectionFailedHandler), s._addSpinnerCallback = function() {
                return s.addSpinner()
            }, Locator.subscriptionManager._streamDataProcessor.addEventListener(p.CONNECTED, s._delegate_connectedHandler), Locator.subscriptionManager._streamDataProcessor.addEventListener(p.CONNECTION_FAILED, s._delegate_connectionFailureHandler), o = i.currentApplication = s, m = window.innerWidth || document.body.clientWidth, v = window.innerHeight || document.body.clientHeight, "screen" in window && (S = window.screen.width, y = window.screen.height), s.width = m, t(), s
        }
        return __extends(i, n), i.prototype.toString = function() {
            return "[Application]"
        }, i.prototype.enableUI = function() {
            g || (g = !0, this.applyPointerProcessor && (this.pointerProcessor = new _(this), this.pointerProcessor.activate()), this.addEventListener(u.LOADING, this._delegate_loadingHandler), this.addEventListener(u.LOADING_COMPLETE, this._delegate_loadingCompleteHandler), this.addEventListener("showStreaming", this._delegate_showStreamingHandler))
        }, i.prototype.disableUI = function() {
            g && (g = !1, this._spinner && (this._spinner.remove(), this._spinner = null), this.removeEventListener(u.LOADING, this._delegate_loadingHandler), this.removeEventListener(u.LOADING_COMPLETE, this._delegate_loadingCompleteHandler), this.removeEventListener("showStreaming", this._delegate_showStreamingHandler), this.pointerProcessor && (this.pointerProcessor.release(), this.pointerProcessor = null))
        }, i.prototype.loadingHandler = function() {
            g && !this._loadingTimer && (this._loadingTimer = setTimeout(this._addSpinnerCallback, i.loadingTimeout))
        }, i.prototype.addSpinner = function() {
            this._spinner = new d;
            var e = this.getElement();
            e.appendChild(this._spinner.getElement()), this._spinner.initialize()
        }, i.prototype.loadingCompleteHandler = function() {
            this._loadingTimer && (clearTimeout(this._loadingTimer), this._loadingTimer = null), this._spinner && (this._spinner.remove(), this._spinner = null)
        }, i.prototype._showStreamingHandler = function() {
            this.preventUnloading = !0
        }, i.prototype._connectedHandler = function() {
            this.connected = !0
        }, i.prototype._connectionFailedHandler = function() {
            this.connected = !1
        }, i.prototype.getDeviceWidth = function() {
            return m
        }, i.prototype.getDeviceHeight = function() {
            return v
        }, i.prototype.getScreenWidth = function() {
            return S
        }, i.prototype.getScreenHeight = function() {
            return y
        }, i.prototype.lockScrolling = function() {
            this.scrollLocked = !0, this.addStyle("g5-Application-scrolllock")
        }, i.prototype.unlockScrolling = function() {
            this.scrollLocked = !1, this.removeStyle("g5-Application-scrolllock")
        }, i.prototype.getIsScrollLocked = function() {
            return this.scrollLocked
        }, i.prototype.setHasOverlay = function(e) {
            e ? this.addStyle("g5-Application-hasoverlay") : this.removeStyle("g5-Application-hasoverlay")
        }, i.loadingTimeout = 200, i.overflowLayout = !1, i.widthThreshold = 550, i.viewWidthThreshold = 950, i.heightOffset = 89, i
    })(e.Component), e.Application = l
})(ns_gen5_ui || (ns_gen5_ui = {})), (function(e) {
    function t(e, t) {
        if (!t) return !1;
        for (; t.parent;) {
            if (t.parent == e || t == e) return !0;
            t = t.parent
        }
        return !1
    }
    var n = ns_gen5_ui.Component,
        i = ns_gen5_ui.Application,
        r = (function() {
            function e() {}
            return e.Register = function(t) {
                e.Root = t
            }, e.AddPopup = function(t, n, i, r) {
                void 0 === n && (n = !0), void 0 === i && (i = e.Root), void 0 === r && (r = !0),
                    $assert && $assert(e.Root, "Root is not specified"), n ? (e.PopupHasOverlay = !0, e.ShowOverlay(!0, e.Root)) : e.PopupHasOverlay && (e.PopupHasOverlay = !1, e.ShowOverlay(!1, e.Root)), e.PopupList.push(t), i.appendChildAt(t, 0), r && (e.SupressClickTarget = t)
            }, e.RemovePopup = function(t) {
                $assert && $assert(e.PopupList.indexOf(t) > -1, "Popup does not exist in the manager");
                var n = e.PopupList.indexOf(t);
                n > -1 && (t.parent.removeChild(t), t.dispose(), e.PopupList.splice(n, 1), e.PopupHasOverlay && (e.PopupHasOverlay = !1, e.ShowOverlay(!1, e.Root)))
            }, e.HasPopup = function() {
                return this.PopupList.length > 0
            }, e.ContainsPopup = function(n) {
                return t(e.Root, n)
            }, e.HandleHover = function(t) {
                for (var n = 0; n < e.RegisteredDelegates.length; n++) e.RegisteredDelegates[n].overlayHoverHandler && e.RegisteredDelegates[n].overlayHoverHandler(t)
            }, e.HandleTouchMove = function(e) {
                e.preventDefault()
            }, e.HandleClick = function(n) {
                var i, r;
                if (n = n || window.event, n.target) {
                    for (r = 0; r < e.RegisteredDelegates.length; r++) i = e.RegisteredDelegates[r], t(i, n.target.wrapper) || i == e.SupressClickTarget || i.clickOutsideHandler(n);
                    e.SupressClickTarget = null
                }
            }, e.AddDelegate = function(t) {
                var n = e.RegisteredDelegates.indexOf(t);
                $assert && $assert(-1 === n, "The delegate has already been added."), -1 === n && e.RegisteredDelegates.push(t)
            }, e.RemoveDelegate = function(t) {
                var n = e.RegisteredDelegates.indexOf(t);
                $assert && $assert(n > -1, "The delegate is not added."), n > -1 && e.RegisteredDelegates.splice(n, 1)
            }, e.ShowOverlay = function(t, n) {
                var r, o, s;
                void 0 === n && (n = null), r = e.OverlayComponent, r.initialized || r.initialize(), t ? (e.OverlayCount > 0 && (e.RemoveOverlay(r), e.OverlayCount--), null != n ? n.appendChild(r) : (o = document.getElementsByTagName("body"), o && o[0].appendChild(r.getElement())), e.OverlayCount++) : e.OverlayCount > 0 && (e.RemoveOverlay(r), e.OverlayCount--), s = e.OverlayCount > 0, r.setVisible(s), i.currentApplication.setHasOverlay(s), Locator.validationManager.queueForValidation(r)
            }, e.RemoveOverlay = function(e) {
                e.parent ? e.parent.removeChild(e) : e.getElement().parentElement.removeChild(e.getElement())
            }, e.RegisteredDelegates = [], e.OverlayCount = 0, e.PopupList = [], e.CreateOverlay = (function() {
                var t, i, r = new n;
                r.addStyle("g5-PopupManager_ClickMask"), r.setVisible(!1), t = document.getElementsByTagName("body")[0], t && (t.appendChild(r.getElement()), t.addEventListener("click", e.HandleClick), t.addEventListener("touchend", e.HandleClick)), i = r.getElement(), i.addEventListener("mouseover", e.HandleHover), i.addEventListener("mousemove", e.HandleHover), i.addEventListener("touchmove", e.HandleTouchMove), e.OverlayComponent = r
            })(), e
        })();
    e.PopupManager = r
})(ns_gen5_ui_managers || (ns_gen5_ui_managers = {})), (function(e) {
    var t = e.Component,
        n = (function(e) {
            function n(t) {
                return e.call(this, t) || this
            }
            return __extends(n, e), n.prototype.toString = function() {
                return "[ClosableContainer]"
            }, n.prototype.createChildren = function() {
                this._button = new this._buttonClass(this._buttonTag), this._initAppendChildButton && this.appendChild(this._button), this._open && this.initializeContainer()
            }, n.prototype.initializeContainer = function() {
                this._container || (this._container = new this._containerClass(this._containerTag), this._initAppendChildContainer && this.appendChild(this._container))
            }, n.prototype.setOpen = function(e) {
                e != this._open && (this._open = e, this._container ? this._container.setVisible(this._open) : this.initializeContainer())
            }, n.prototype.getOpen = function() {
                return this._open
            }, n.prototype.clickHandler = function(e) {
                this.setOpen(!this._open)
            }, n.SInit = (function() {
                n.prototype._button = null, n.prototype._buttonClass = t, n.prototype._container = null, n.prototype._containerClass = t, n.prototype._open = !1, n.prototype._initAppendChildButton = !0, n.prototype._initAppendChildContainer = !0, n.prototype._buttonTag = null, n.prototype._containerTag = null
            })(), n
        })(e.Component);
    e.ClosableContainer = n
})(ns_gen5_ui || (ns_gen5_ui = {})), (function(e) {
    e.StemBaseMixin = (function() {
        function e() {
            this.stem && this.stem.addDelegate(this), this.___initialize && this.___initialize()
        }

        function t(e) {
            var n, i, r = e || this;
            if (r.detatchStem && r.detatchStem(), r.getFirstChild)
                for (n = r.getFirstChild(), i = void 0; n;) i = n.wrapper, n = n.nextSibling, i && (i.recursiveDetatchStem ? i.recursiveDetatchStem() : t(i))
        }

        function n() {
            this.stem && (this.stem.removeDelegate(this), this.stem = null, this.validationState = 0, this.parent && this._active_element.parentNode && this.parent.removeChild(this))
        }

        function i(e, t) {}

        function r(e, t) {}

        function o(e) {
            this.detatchStem()
        }
        return function() {
            this.stem = null, this.___initialize = this.initialize, this.initialize = e, this.stemUpdateHandler = i, this.stemDeleteHandler = o, this.stemInsertHandler = r, this.detatchStem = n, this.recursiveDetatchStem = t
        }
    })()
})(ns_gen5_ui || (ns_gen5_ui = {})), (function(e) {})(ns_gen5_ui || (ns_gen5_ui = {})), (function(e) {
    var t = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e), t.prototype.toString = function() {
            return "[ComponentStemBase]"
        }, t.prototype.stemUpdateHandler = function(e, t) {}, t.prototype.stemDeleteHandler = function(e) {}, t.prototype.stemInsertHandler = function(e, t) {}, t.prototype.detatchStem = function() {}, t.prototype.recursiveDetatchStem = function() {}, t
    })(e.Component);
    e.ComponentStemBase = t, e.StemBaseMixin.call(t.prototype)
})(ns_gen5_ui || (ns_gen5_ui = {})), (function(e) {
    var t = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e), t.prototype.toString = function() {
            return "[ClosableContainerStemBase]"
        }, t.prototype.createChildren = function() {
            this._button = new this._buttonClass(this._buttonTag), this.buttonAcceptsStem && (this._button.stem = this.stem), this._initAppendChildButton && this.appendChild(this._button), this._open && this.initializeContainer()
        }, t.prototype.initializeContainer = function() {
            this._container = new this._containerClass, this._container.stem = this.stem, this._initAppendChildContainer && this.appendChild(this._container)
        }, t.prototype.stemUpdateHandler = function(e, t) {}, t.prototype.stemDeleteHandler = function(e) {}, t.prototype.stemInsertHandler = function(e, t) {}, t.prototype.detatchStem = function() {}, t.prototype.recursiveDetatchStem = function() {}, t.SInit = (function() {
            t.prototype.buttonAcceptsStem = !1
        })(), t
    })(e.ClosableContainer);
    e.ClosableContainerStemBase = t, e.StemBaseMixin.call(t.prototype)
})(ns_gen5_ui || (ns_gen5_ui = {})), (function(e) {
    function t(e) {
        return !!e.createChildInstance
    }
    var n = e.ComponentStemBase,
        i = (function(e) {
            function i(t) {
                return e.call(this, t) || this
            }
            return __extends(i, e), i.prototype.toString = function() {
                return "[GenericStemRenderer]"
            }, i.prototype.createChildren = function() {
                var e, n, i, r, o, s, a, c, l;
                if (this.stem)
                    if (e = this, n = this.stem.getChildren(), i = this.childType, t(e))
                        for (r = 0, o = n; r < o.length; r++) s = o[r], a = e.createChildInstance(s), a.stem = s, this.appendChild(a);
                    else
                        for (c = 0, l = n; c < l.length; c++) s = l[c], a = new i, a.stem = s, this.appendChild(a)
            }, i.prototype.appendChildAt = function(t, n) {
                return e.prototype.appendChildAt.call(this, t, n + this.baseIndex)
            }, i.prototype.stemInsertHandler = function(e, n) {
                var i, r = n.data.OR,
                    o = this,
                    s = t(o) ? o.createChildInstance(n) : new this.childType;
                if (s.stem = n, r) try {
                    i = this._element.childNodes[Number(r) + this.baseIndex], i ? this.insertBefore(s, i) : this.appendChild(s)
                } catch (a) {
                    ErrorReporter.Trace(this, a), this.appendChild(s)
                } else this.appendChild(s)
            }, i.prototype.setStem = function(e) {
                var t = this;
                this.stem && this.recursiveDetatchStem(), this.stem = e, this.parent && this.stem && (this.stem.addDelegate(this), Locator.validationManager.callLater((function() {
                    t.suspendElementFromDom(), t.createChildren(), Locator.validationManager.callPostValidation((function() {
                        return t.unsuspendElementFromDom()
                    }))
                })))
            }, i.SInit = (function() {
                i.prototype.childType = n, i.prototype.baseIndex = 0
            })(), i
        })(e.ComponentStemBase);
    e.GenericStemRenderer = i
})(ns_gen5_ui || (ns_gen5_ui = {})), (function(e) {
    var t = (function(e) {
        function t() {
            var t = e.call(this, "input") || this;
            return t.passwordDisplay = !1, t._rendered = !1, t
        }
        return __extends(t, e), t.prototype.createChildren = function() {
            if (this.defaultValue && this.setValue(this.defaultValue), this.maxLength > 0 && this.setAttribute("maxlength", this.maxLength + ""), this.passwordDisplay) this.setAttribute("type", "password");
            else if (this.setAttribute("type", "text"), this._initialValue && "" != this._initialValue) {
                var e = this.getElement();
                e.value = this._initialValue
            }
            this._rendered = !0
        }, t.prototype.setValue = function(e) {
            return this._rendered ? this.getElement().value = e : this._initialValue = e, e
        }, t.prototype.getValue = function() {
            var e;
            return e = this._rendered ? this.getElement().value : this._initialValue
        }, t
    })(e.Component);
    e.TextInput = t
})(ns_gen5_ui || (ns_gen5_ui = {})), (function(e) {
    var t = ns_gen5_ui.DomElement,
        n = ns_gen5_ui.Module,
        i = (function() {
            function e() {}
            return e.getInstance = function(i, r) {
                var o, s, a;
                if (e.ClassMap || (e.ClassMap = new Map, e.ModuleBank = new Map), r) {
                    if (a = r instanceof t ? n.getRoot(r) : e.ModuleIDLookup[r], !a) return null;
                    o = e.ModuleBank.get(a), o || (o = new Map, e.ModuleBank.set(a, o))
                } else o = e.ClassMap;
                return s = o.get(i), s || (s = new i, o.set(i, s)), s
            }, e.RemoveInstance = function(t) {
                e.ClassMap["delete"](t)
            }, e.RemoveScope = function(t) {
                t instanceof n && delete e.ModuleIDLookup[t.uid], e.ModuleBank["delete"](t)
            }, e.RegisterModule = function(t) {
                e.ModuleIDLookup[t.uid] || (e.ModuleIDLookup[t.uid] = t)
            }, e.ModuleIDLookup = [], e
        })();
    e.Singleton = i
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e), t.prototype.toString = function() {
            return "[WidthStateWatcherEvent]"
        }, t.WIDTH_STATE_CHANGED = "widthStateChanged", t
    })(ns_gen5_events.Event365);
    e.WidthStateWatcherEvent = t
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t = ns_gen5_ui.Application,
        n = ns_gen5_events.ApplicationEvent,
        i = e.Delegate,
        r = e.WidthStateWatcherEvent,
        o = (function(e) {
            function o() {
                return e.call(this) || this
            }
            return __extends(o, e), o.prototype.toString = function() {
                return "[WidthStateWatcher]"
            }, o.prototype.initialize = function() {
                var e, r, o, s, a;
                if (this._delegate_applicationWidthChangedHandler = new i(this, this._applicationWidthChangedHandler), this._applicationWidthChangedHandler(new n(n.WIDTH_CHANGED, t.currentApplication.width)), t.currentApplication.addEventListener(n.WIDTH_CHANGED, this._delegate_applicationWidthChangedHandler), $assert)
                    for ($assert(this.thresholds, "Thresholds have not been set on this instance of " + this), e = this.thresholds, r = -1, o = e.length, s = 0; o > s; s++) a = e[s], $assert(a > r, "The thresholds list provided to this instance of " + this + " is not sequential."), r = a;
                this.initialized = !0
            }, o.prototype.dispose = function() {
                this._registeredDisplayElements = null, t.currentApplication.removeEventListener(n.WIDTH_CHANGED, this._delegate_applicationWidthChangedHandler)
            }, o.prototype.registerElement = function(e) {
                this._registeredDisplayElements || (this._registeredDisplayElements = []), this._registeredDisplayElements[this._registeredDisplayElements.length] = e, this.initialized && e.addStyle(this.classPrefix + this.state)
            }, o.prototype.unregisterElement = function(e) {
                this._registeredDisplayElements.splice(this._registeredDisplayElements.indexOf(e), 1)
            }, o.prototype._applicationWidthChangedHandler = function(e) {
                var t, n, i, o, s = this.thresholds,
                    a = e.width,
                    c = -1,
                    l = s.length;
                for (n = 0; l > n; n++)
                    if (t = s[n], t > a) {
                        c = n;
                        break
                    } if (-1 == c && (c = s.length), this.state != c && (i = this.state, this.state = c, this.hasEventListener(r.WIDTH_STATE_CHANGED) && this.dispatchEvent(new r(r.WIDTH_STATE_CHANGED)), o = this._registeredDisplayElements, o && (l = o.length)))
                    if (-1 == i)
                        for (n = 0; l > n; n++) o[n].addStyle(this.classPrefix + c);
                    else
                        for (n = 0; l > n; n++) o[n].overwriteStyle(this.classPrefix + i, this.classPrefix + c)
            }, o.SInit = (function() {
                o.prototype._delegate_applicationWidthChangedHandler = null, o.prototype._registeredDisplayElements = null, o.prototype.initialized = !1, o.prototype.state = -1, o.prototype.thresholds = null, o.prototype.classPrefix = "g5-WidthStateWatcher_CurrentSize-"
            })(), o
        })(ns_gen5_events.EventDispatcher);
    e.WidthStateWatcher = o
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t, n = (function(e) {
        function t() {
            return e.call(this) || this
        }
        return __extends(t, e), t.prototype.initialize = function() {}, t.prototype.stemUpdateHandler = function(e, t) {}, t.prototype.stemInsertHandler = function(e, t) {}, t.prototype.stemDeleteHandler = function(e) {}, t.prototype.detatchStem = function() {}, t.prototype.recursiveDetatchStem = function() {}, t.SInit = (function() {
            ns_gen5_ui.StemBaseMixin.call(t.prototype)
        })(), t
    })(ns_gen5_events.EventDispatcher);
    e.StemMergeProcessor_PrivateBase = n, t = (function(e) {
        function t(t, n) {
            var i = e.call(this) || this;
            return i.toStem = null, i._excludeMap = null, i.stem = t, i.toStem = n, "_T" in n.data && delete n.data._T, i._excludeMap = {}, i._excludeMap.IT = 1, i
        }
        return __extends(t, e), t.prototype.toString = function() {
            return "[StemMergeProcessor]"
        }, t.prototype.excludeAttributes = function() {
            var e, t, n, i = [];
            for (e = 0; e < arguments.length; e++) i[e] = arguments[e];
            for (t = arguments.length, n = 0; t > n; n++) this._excludeMap[arguments[n]] = 1
        }, t.prototype.initialize = function() {
            e.prototype.initialize.call(this), this.takeAll()
        }, t.prototype.takeAll = function() {
            var e, t = this.stem.data,
                n = this.toStem.data;
            for (e in t) e in this._excludeMap || (n[e] = t[e]);
            return n
        }, t.prototype.detatchStem = function() {
            this.toStem = null, e.prototype.detatchStem.call(this)
        }, t.prototype.stemUpdateHandler = function(e, t) {
            var n, i = {};
            for (n in t) n in this._excludeMap || (i[n] = t[n]);
            this.toStem.update(i)
        }, t
    })(n), e.StemMergeProcessor = t
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t = (function() {
        function e() {}
        return e.GetCookieValue = function(e) {
            return this.GetCookieAttributeValue(e)
        }, e.GetCookieAttributeValue = function(e, t) {
            var n, i, r, o, s, a, c = document.cookie.split(";"),
                l = null,
                u = c.length;
            for (o = 0; u > o; o++)
                if (r = c[o], i = r.indexOf("="), n = r.substr(0, i), n = n.replace(/^\s+|\s+$/g, ""), n == e) {
                    if (l = r.substr(i + 1), t)
                        for (s = l.split("&"), l = null, a = 0; a < s.length; a++)
                            if (t == s[a].split("=")[0]) {
                                l = s[a].split("=")[1];
                                break
                            } break
                } return l ? unescape(l) : l
        }, e.SetCookieValue = function(e, t, n, i, r) {
            var o, s, a, c, l = document.cookie.split(";"),
                u = [],
                h = !1,
                d = "";
            if (i && (d = ";domain=" + i), t && 0 != t.length) {
                for (s = 0; s < l.length; s++)
                    if (l[s] = l[s].replace(/^\s+|\s+$/g, ""), e == l[s].split("=")[0])
                        for (a = l[s].substring(l[s].indexOf("=") + 1, l[s].length), u = a.split("&"), c = 0; c < u.length; c++) t == u[c].split("=")[0] && (u[c] = t + "=" + escape(n).replace(/\+/g, "%2b"), h = !0);
                h || (u.length++, u[u.length - 1] = t + "=" + escape(n).replace(/\+/g, "%2b")), document.cookie = e + "=; expires=Thu, 01-Jan-70 00:00:01 GMT;path=/", document.cookie = e + "=" + u.join("&") + (r ? d : "") + ";path=/" + Locator.user.cookieSecurityLevel
            } else o = new Date, o.setDate(o.getDate() + 90), document.cookie = e + "=" + n + d + ";path=/" + Locator.user.cookieSecurityLevel
        }, e.GetSessionId = function() {
            var t;
            try {
                t = e.GetCookieValue("pstk"), /[A-F0-9]{38}/i.test(t) || (t = null)
            } catch (n) {
                t = null, ErrorReporter.Trace(this, n)
            }
            return t
        }, e.SetSessionId = function(t, n) {
            e.SetCookieValue("pstk", "", t, n)
        }, e.SetLoginSuccess = function(t) {
            var n = 1 == t ? "1" : "0";
            e.SetCookieValue("session", "lgs", n)
        }, e.SetKYCPage = function(t) {
            e.SetCookieValue("session", "kpd", t)
        }, e
    })();
    e.CookieManager = t
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t = e.TextNode,
        n = (function(e) {
            function n(t) {
                return e.call(this, t) || this
            }
            return __extends(n, e), n.prototype.toString = function() {
                return "[Label]"
            }, n.prototype.createChildren = function() {
                this._textNode = new t(this._text), this.appendChild(this._textNode)
            }, n.prototype.commitProperties = function() {
                this._textChanged && (this._textChanged = !1, this._textNode.setText(this._text))
            }, n.prototype.setText = function(e) {
                e != this._text && (this._text = e, this._textChanged = !0, this.invalidateProperties())
            }, n.prototype.getText = function() {
                return this._text
            }, n.prototype.getTooltip = function() {
                return this._text
            }, n.prototype.commitText = function(e) {
                this._textNode.setText(e)
            }, n.SInit = (function() {
                n.prototype._text = null, n.prototype._textChanged = !1, n.prototype._textNode = null
            })(), n
        })(e.Component);
    e.Label = n
})(ns_gen5_ui || (ns_gen5_ui = {})), (function(e) {
    var t, n = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e), t.prototype.stemUpdateHandler = function(e, t) {}, t.prototype.stemDeleteHandler = function(e) {}, t.prototype.stemInsertHandler = function(e, t) {}, t.prototype.detatchStem = function() {}, t.prototype.recursiveDetatchStem = function() {}, t
    })(e.Label);
    e.LabelStemBase_Mixin = n, e.StemBaseMixin.call(n.prototype), t = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n._textChanged = !0, n
        }
        return __extends(t, e), t.prototype.toString = function() {
            return "[LabelStemBase]"
        }, t.prototype.commitProperties = function() {
            this._textChanged && (this._text = this.stem.data[this.stemAttributeName] || "", e.prototype.commitProperties.call(this))
        }, t.prototype.stemUpdateHandler = function(e, t) {
            this.stemAttributeName in t && (this._textChanged = !0, this.invalidateProperties())
        }, t.prototype.setStem = function(e) {
            this.stem && this.stem.removeDelegate(this), this.stem = e, e && (e.addDelegate(this), this._textChanged = !0, this.invalidateProperties())
        }, t.SInit = (function() {
            t.prototype.stemAttributeName = "NA"
        })(), t
    })(n), e.LabelStemBase = t
})(ns_gen5_ui || (ns_gen5_ui = {})), (function(e) {
    var t = (function(e) {
        function t() {
            var t = e.call(this, "iframe") || this;
            return t.scrolling = !1, t.onloadHandler = function() {
                return t.onLoad()
            }, t
        }
        return __extends(t, e), t.prototype.createChildren = function() {
            var e = this,
                t = this.getElement();
            t.src = this.src, t.name = this.name, t.scrolling = this.scrolling ? "yes" : "no", t.setAttribute("allowtransparency", this.allowTransparency ? "true" : "false"), this.setVisible(!1), t.addEventListener("load", this.onloadHandler), t.addEventListener("unload", (function() {
                return e.executeUnload()
            }))
        }, t.prototype.executeUnload = function() {}, t.prototype.onLoad = function() {
            var e = this.getElement();
            e.removeEventListener("load", this.onloadHandler), this.setVisible(!0)
        }, t
    })(e.Component);
    e.InlineFrame = t
})(ns_gen5_ui || (ns_gen5_ui = {})), (function(e) {
    function t(t) {
        return (function(e) {
            function n() {
                var n = e.call(this) || this;
                return n.load(t), n
            }
            return __extends(n, e), n
        })(e.ModuleContainer)
    }
    e.SingletonModule = t
})(ns_gen5_ui || (ns_gen5_ui = {})), (function(e) {
    var t = (function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.direction = null, t
        }
        return __extends(t, e), t.prototype.toString = function() {
            return "[ArrowButton]"
        }, t.prototype.createChildren = function() {
            this.addStyle("g5-ArrowButton"), this.direction && this.addStyle(this.direction)
        }, t.LEFT = "g5-ArrowButton_Left", t.RIGHT = "g5-ArrowButton_Right", t.UP = "g5-ArrowButton_Up", t.DOWN = "g5-ArrowButton_Down", t
    })(ns_gen5_ui.Component);
    e.ArrowButton = t
})(ns_gen5_ui_controls || (ns_gen5_ui_controls = {})), (function(e) {
    var t = ns_gen5_ui.Component,
        n = e.ArrowButton,
        i = -1,
        r = 1,
        o = (function(e) {
            function o() {
                var t = e.call(this) || this;
                return t.scrollAmmountModifier = 1, t.ignoreButtonsForTravel = !1, t.fixedWidthScroll = !1, t._scrollContent = null, t._leftButton = null, t._rightButton = null, t
            }
            return __extends(o, e), o.prototype.toString = function() {
                return "[HorizontalScroller]"
            }, o.prototype.createChildren = function() {
                var e, n, o, s = this;
                this.addStyle(this.baseStyle), e = this._leftButton = new this.arrowButtonType, e.direction = this.directions.LEFT, e.clickHandler = function() {
                    return s._travel(r)
                }, e.addStyle(this.baseStyle + "_Dis"), n = this._rightButton = new this.arrowButtonType, n.direction = this.directions.RIGHT, n.clickHandler = function() {
                    return s._travel(i)
                }, o = new t, o.addStyle(this.baseStyle + "_HScroll"), this.appendChild(o), this.appendChild(e), this.appendChild(o), o.appendChild(this._scrollContent), this.appendChild(n)
            }, o.prototype._travel = function(e, t) {
                var n, i, r, o;
                this._rightButton.removeStyle(this.baseStyle + "_Dis"), this._leftButton.removeStyle(this.baseStyle + "_Dis"), this.buttonWidth || (this.buttonWidth = this._rightButton.getElement().clientWidth), this.ignoreButtonsForTravel && (this.buttonWidth = 0), n = this._scrollContent.getElement(), i = n.clientWidth - 2 * this.buttonWidth, this.totalWidth || (this.totalWidth = n.scrollWidth), this.max_x_pos = i - this.totalWidth, this.max_x_pos > 0 && (this.max_x_pos = 0), r = n.style.left || "0px", r = r.slice(0, -2), o = t || n.scrollWidth / n.children.length * this.scrollAmmountModifier, this.endPos = Number(r) + o * e, this.endPos - this.graceSpace < this.max_x_pos && (this.endPos = this.max_x_pos, this._rightButton.addStyle(this.baseStyle + "_Dis")), this.endPos + this.graceSpace > 0 && (this.endPos = 0, this._leftButton.addStyle(this.baseStyle + "_Dis")), n.style.left = this.endPos + "px"
            }, o.prototype.setScrollContent = function(e) {
                this._scrollContent = e, this._scrollContent.addStyle(this.baseStyle + "_ScrollContent")
            }, o.SInit = (function() {
                o.prototype.directions = n, o.prototype.arrowButtonType = n, o.prototype.baseStyle = "g5-HorizontalScroller", o.prototype.graceSpace = 60
            })(), o
        })(ns_gen5_ui.Component);
    e.HorizontalScroller = o
})(ns_gen5_ui_controls || (ns_gen5_ui_controls = {})), (function(e) {
    var t, n, i = ns_gen5_ui.Component,
        r = ns_gen5_events.EventDispatcher,
        o = ns_gen5_events.ModalEvent;
    !(function(e) {
        e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Urgent = 4] = "Urgent", e[e.AboveAllElse = 5] = "AboveAllElse"
    })(t = e.ModalPriority || (e.ModalPriority = {})), n = (function(e) {
        function n() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.modalQueue = [], t
        }
        return __extends(n, e), n.prototype.addModal = function(e, n) {
            this.root || (this.root = this.getModalRoot()), n || (n = t.Normal), this.displayingModal ? n > this.displayingModal.priority ? (this.modalQueue.push(this.displayingModal), this.modalQueue.push({
                modalComponent: e,
                priority: n
            }), this.removeModal(this.displayingModal.modalComponent)) : this.modalQueue.push({
                modalComponent: e,
                priority: n
            }) : (this.displayingModal = {
                modalComponent: e,
                priority: n
            }, this.showDarkWash(), this.root.appendChild(e)), this.dispatchEvent(new o(o.MODAL_CHANGE, !0))
        }, n.prototype.removeModal = function(e) {
            if (this.displayingModal = null, this.darkWash.suspendElementFromDom(), this.root.removeChild(e), this.modalQueue.length > 0) {
                this.modalQueue.sort((function(e, t) {
                    return t.priority - e.priority
                }));
                var t = this.modalQueue.splice(0, 1)[0];
                this.addModal(t.modalComponent, t.priority)
            } else this.dispatchEvent(new o(o.MODAL_CHANGE, !1))
        }, n.prototype.contains = function(e) {
            if (this.displayingModal && this.displayingModal.modalComponent == e) return !0;
            if (this.modalQueue && this.modalQueue.length > 0)
                for (var t = 0; t < this.modalQueue.length; t++)
                    if (this.modalQueue[t].modalComponent == e) return !0;
            return !1
        }, n.prototype.showDarkWash = function() {
            this.darkWash ? this.darkWash.unsuspendElementFromDom() : (this.darkWash = new i, this.darkWash.addStyle(this.getWashStyle()), this.root.appendChild(this.darkWash))
        }, n
    })(r), e.ModalManagerBase = n
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t = 1.70158,
        n = (function() {
            function e() {}
            return e.EaseIn = function(e) {
                return e * e * ((t + 1) * e - t)
            }, e.EaseOut = function(e) {
                return (e -= 1) * e * ((t + 1) * e + t) + 1
            }, e.EaseInOut = function(e) {
                return (e *= 2) < 1 ? .5 * (e * e * ((1.525 * t + 1) * e - 1.525 * t)) : .5 * ((e -= 2) * e * ((1.525 * t + 1) * e + 1.525 * t) + 2)
            }, e
        })();
    e.Back = n
})(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})), (function(e) {
    var t = (function() {
        function e() {}
        return e.EaseIn = function(t) {
            return 1 - e.EaseOut(1 - t)
        }, e.EaseOut = function(e) {
            return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }, e.EaseInOut = function(t) {
            return (t *= 2) < 1 ? .5 * e.EaseIn(t) : .5 * e.EaseOut(t - 1) + .5
        }, e
    })();
    e.Bounce = t
})(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})), (function(e) {
    var t = 1,
        n = .3,
        i = n / 4,
        r = (function() {
            function e() {}
            return e.EaseIn = function(e) {
                return 0 == e || 1 == e ? e : -(t * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - i) * (2 * Math.PI) / n))
            }, e.EaseOut = function(e) {
                return 0 == e || 1 == e ? e : t * Math.pow(2, -10 * e) * Math.sin((e - i) * (2 * Math.PI) / n) + 1
            }, e.EaseInOut = function(e) {
                return 0 == e || 1 == e ? e : (e = 2 * e - 1, 0 > e ? -.5 * (t * Math.pow(2, 10 * e) * Math.sin((e - 1.5 * i) * (2 * Math.PI) / (1.5 * n))) : .5 * t * Math.pow(2, -10 * e) * Math.sin((e - 1.5 * i) * (2 * Math.PI) / (1.5 * n)) + 1)
            }, e
        })();
    e.Elastic = r
})(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})), (function(e) {
    var t = (function() {
        function e() {}
        return e.EaseIn = function(e) {
            return 0 == e ? 0 : Math.pow(2, 10 * (e - 1))
        }, e.EaseOut = function(e) {
            return 1 == e ? 1 : 1 - Math.pow(2, -10 * e)
        }, e.EaseInOut = function(e) {
            return 0 == e || 1 == e ? e : 0 > (e = 2 * e - 1) ? .5 * Math.pow(2, 10 * e) : 1 - .5 * Math.pow(2, -10 * e)
        }, e
    })();
    e.Exponential = t
})(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})), (function(e) {
    var t = (function() {
        function e() {}
        return e.EaseNone = function(e) {
            return e
        }, e
    })();
    e.Linear = t
})(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})), (function(e) {
    var t = (function() {
        function e() {}
        return e.EaseIn = function(e) {
            return e * e * e * e
        }, e.EaseOut = function(e) {
            return 1 - (e -= 1) * e * e * e
        }, e.EaseInOut = function(e) {
            return .5 > e ? 8 * e * e * e * e : -8 * (e -= 1) * e * e * e + 1
        }, e
    })();
    e.Quartic = t
})(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})), (function(e) {
    var t = (function() {
        function e() {}
        return e.EaseIn = function(e) {
            return e * e
        }, e.EaseOut = function(e) {
            return -e * (e - 2)
        }, e.EaseInOut = function(e) {
            return .5 > e ? 2 * e * e : -2 * e * (e - 2) - 1
        }, e
    })();
    e.Quadratic = t
})(ns_gen5_animation_easing || (ns_gen5_animation_easing = {})), (function(e) {
    function t() {
        var e, n, r;
        for (o = +new Date, e = 0, n = a.slice(); e < n.length; e++) r = n[e], r.update(o), r.getPlaying() || i(r);
        Locator.validationManager.processValidationCycleNow(), a.length && requestAnimationFrame(t)
    }

    function n(e) {
        a[a.length] = e, 1 == a.length && (requestAnimationFrame(t), o = +new Date), c && (c = !1, Locator.validationManager.callPostValidation((function() {
            c = !0, t()
        })))
    }

    function i(e) {
        var t = a.indexOf(e);
        t > -1 && a.splice(t, 1)
    }

    function r(e, t) {
        var n, i, r, o, s, a, c, l = e.from;
        return e.to instanceof Array ? (o = e.to, n = o[0], s = o[1], "string" == typeof s ? i = s : r = s) : (n = e.to, i = ""), a = l + t * (n - l), e.internal_different = a !== e.internal_previous_raw, e.internal_previous_raw = a, e.internal_different ? r ? (c = r(n + l === 1 ? a : Math.round(a)), e.internal_different = c !== e.internal_previous_calc, e.internal_previous_calc = c, c) : i ? (c = (n + l === 1 ? a : Math.round(a)) + i, e.internal_different = c !== e.internal_previous_calc, e.internal_previous_calc = c, c) : a : -0
    }
    var o, s = ns_gen5_animation_easing.Linear,
        a = [],
        c = !0,
        l = (function() {
            function e(t, n, i, r) {
                var o = this;
                this.element = t, this.time = n, this.params = i, this.flags = r, Locator.validationManager.callLater((function() {
                    o.flags & e.AUTO_START_OFF || o.start()
                }))
            }
            return e.prototype.start = function() {
                this.playing || (this.playing = !0, n(this), this.startTime = o)
            }, e.prototype.pause = function() {
                this.playing ? (this.playing = !1, i(this)) : this.flags |= e.AUTO_START_OFF
            }, e.prototype.end = function() {
                this.playing && (this.playing = !1, this.update(this.startTime + this.time + 1), i(this))
            }, e.prototype.getPlaying = function() {
                return this.playing
            }, e.prototype.getElement = function() {
                return this.element
            }, e.prototype.then = function(t) {
                return t.flags = (t.flags || 0) | e.AUTO_START_OFF, this.next = t
            }, e.prototype.onBegin = function(e) {
                return this.beginCallback = e, this
            }, e.prototype.onChange = function(e) {
                return this.changeCallback = e, this
            }, e.prototype.onComplete = function(e) {
                return this.completeCallback = e, this
            }, e.prototype.executeVoidCallback = function(e) {
                try {
                    e()
                } catch (t) {
                    ErrorReporter.Trace(this, t)
                }
            }, e.prototype.executeChangeCallback = function(e) {
                try {
                    this.changeCallback(e)
                } catch (t) {
                    ErrorReporter.Trace(this, t)
                }
            }, e.prototype.update = function(t) {
                var n, i, o, a, c, l, u = (t - (this.startTime + (this.params.delay || 0))) / (this.time * e.DurationModifier) || (0 === this.time ? 1 : 0);
                if (u >= 1) this.playing = !1, u = 1;
                else if (0 > u) return void(u = 0);
                if (!this.moving && this.playing && (this.moving = !0, this.beginCallback && this.executeVoidCallback(this.beginCallback)), n = (this.params.ease || s.EaseNone)(u), i = this.params, i.attribute)
                    for (o in i.attribute) a = i.attribute[o], c = r(a, n) + "", a.internal_different && this.element.setAttribute(o, c);
                if (i.style) {
                    l = this.element.getElement().style;
                    for (o in i.style) a = i.style[o], c = r(a, n) + "", a.internal_different && (l[o] = c)
                }
                if (i.property)
                    for (o in i.property) a = i.property[o], c = r(a, n), a.internal_different && ("function" == typeof this.element[o] ? this.element[o](c) : this.element[o] = c);
                this.changeCallback && this.executeChangeCallback(n), this.playing || (this.completeCallback && this.executeVoidCallback(this.completeCallback), this.next && (this.next.start(), this.next = null))
            }, e.DurationModifier = 1, e.AUTO_START_OFF = 1, e.SInit = (function() {
                e.prototype.playing = !1, e.prototype.moving = !1, e.prototype.startTime = 0, e.prototype.next = null, e.prototype.element = null, e.prototype.time = 0, e.prototype.params = null, e.prototype.flags = 0, e.prototype.beginCallback = null, e.prototype.changeCallback = null, e.prototype.completeCallback = null
            })(), e
        })();
    e.Tween = l
})(ns_gen5_animation || (ns_gen5_animation = {})), (function(e) {
    var t = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e), t.CONNECTED = "connected", t.DISCONNECTED = "disconnected", t.CONNECTION_FAILED = "connectionFailed", t.CONNECTION_FAILED_INVALID_SESSION = "connectionFailedInvalidSession", t
    })(ns_gen5_events.Event365);
    e.ReaditConnectionEvent = t
})(readit || (readit = {})), (function(e) {})(readit || (readit = {})), (function(e) {
    var t = (function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return __extends(t, e), t.CONNECTED = "connected", t.DISCONNECTED = "disconnected", t.CONNECTION_FAILED = "connectionFailed", t.PULL_ENABLED = "pullEnabled", t.PULL_DISABLED = "pullDisabled", t.PULL_DATA_RECEIVED = "pullDataReceived", t.PULL_REQUEST_FAILED = "pullRequestFailed", t.CONNECTION_FAILED_INVALID_SESSION = "connectionFailedInvalidSession", t
    })(ns_gen5_events.Event365);
    e.TransportConnectionEvent = t
})(readit || (readit = {})), (function(e) {
    var t = (function(e) {
        function t(t, n) {
            var i = e.call(this, t) || this;
            return i.message = n, i
        }
        return __extends(t, e), t.prototype.toString = function() {
            return "[ReaditMessageEvent type=" + this.type + " message=" + this.message + "]"
        }, t.MESSAGE_RECEIVED = "messageReceived", t
    })(ns_gen5_events.Event365);
    e.ReaditMessageEvent = t
})(readit || (readit = {})), (function(e) {
    var t = (function() {
        function t(e, t, n, i) {
            this.messageType = e, this.topic = t, this.message = n, this.userHeaders = i
        }
        return t.prototype.toString = function() {
            return "[ReaditMessage messageType=" + this.messageType + " message=" + this.message + " topic=" + this.topic + "]"
        }, t.prototype.getMessage = function() {
            return this.message
        }, t.prototype.getTopic = function() {
            return this.topic
        }, t.prototype.getBaseTopic = function() {
            return this.topic.substr(this.topic.lastIndexOf("/") + 1, this.topic.length)
        }, t.prototype.getUserHeaders = function() {
            return this.userHeaders
        }, t.prototype.isInitialTopicLoad = function() {
            return this.messageType === e.StandardProtocolConstants.INITIAL_TOPIC_LOAD
        }, t
    })();
    e.ReaditMessage = t
})(readit || (readit = {})), (function(e) {
    var t;
    !(function(e) {
        e[e.DISCONNECTED = 0] = "DISCONNECTED", e[e.PENDING = 1] = "PENDING", e[e.CONNECTED = 2] = "CONNECTED"
    })(t = e.ReaditConnectionStatus || (e.ReaditConnectionStatus = {})), e.StandardProtocolConstants = {
        RECORD_DELIM: "",
        FIELD_DELIM: "",
        HANDSHAKE_MESSAGE_DELIM: "",
        MESSAGE_DELIM: "\b",
        CLIENT_CONNECT: 0,
        CLIENT_POLL: 1,
        CLIENT_SEND: 2,
        CLIENT_CONNECT_FAST: 3,
        INITIAL_TOPIC_LOAD: 20,
        DELTA: 21,
        CLIENT_SUBSCRIBE: 22,
        CLIENT_UNSUBSCRIBE: 23,
        CLIENT_SWAP_SUBSCRIPTIONS: 26,
        NONE_ENCODING: 0,
        ENCRYPTED_ENCODING: 17,
        COMPRESSED_ENCODING: 18,
        BASE64_ENCODING: 19,
        SERVER_PING: 24,
        CLIENT_PING: 25,
        CLIENT_ABORT: 28,
        CLIENT_CLOSE: 29,
        ACK_ITL: 30,
        ACK_DELTA: 31,
        ACK_RESPONSE: 32
    }
})(readit || (readit = {})), (function(e) {
    var t, n, i = ns_gen5_util.Delegate,
        r = e.TransportConnectionEvent,
        o = e.ReaditConnectionEvent,
        s = e.ReaditConnectionStatus;
    e.ReadItLog = new function() {
        var e = ns_gen5_util.LogEntry;
        this._enabled = !0, this._log = [], this.getLog = function() {
            return this._log
        }, this.Log = function(t) {
            if (this._log.push(new e(t)), this._enabled) try {
                var n = new Date;
                $log(n.getHours() + ":" + n.getMinutes() + ":" + n.getSeconds() + "." + n.getMilliseconds() + " -> " + t)
            } catch (i) {}
        }, this.SetEnabled = function(e) {
            this._enabled = e
        }
    }, e.pushConnectionStatusEnum = {
        ATTEMPTINGCONNECTION: 1,
        CONNECTED: 2,
        FIRSTATTEMPTFAILED: 3,
        ALLRETRYSFAILED: 4,
        DISCONNECTED: 5,
        DELTA: 6,
        PULL_FALLBACK_ENABLED: 7,
        PULL_FALLBACK_DISABLED: 8,
        PULL_FALLBACK_DATA_RECEIVED: 9,
        PULL_FALLBACK_REQUEST_FAILED: 10
    }, e.ReaditFlags = {
        SEND_CLOSE: 1
    }, n = (function(n) {
        function a() {
            var e = n.call(this) || this;
            return e._connectionListStart = null, e._connectionListEnd = null, e._currentConnectionDetails = null, e._currentTransportMethod = null, e._connectionStatus = s.DISCONNECTED, e._connectionCycleAttempts = 0, e.connectionListCycles = 0, e.pushStatusHandler = null, e.storageId = null, e.delegate_transportConnectedHandler = new i(e, e.transportConnectedHandler), e.delegate_transportConnectionFailedHandler = new i(e, e.transportConnectionFailedHandler), e.delegate_transportDisconnectedHandler = new i(e, e.transportDisconnectedHandler), e.delegate_transportConnectionFailedInvalidSessionHandler = new i(e, e.transportConnectionFailedInvalidSessionHandler), e
        }
        return __extends(a, n), a.prototype.toString = function() {
            return "[ReaditClient]"
        }, a.prototype.addConnectionAttempt = function(e) {
            this._connectionListStart ? (this._connectionListEnd.next = e, this._connectionListEnd = e) : this._connectionListStart = this._connectionListEnd = e
        }, a.prototype.connect = function(e, n) {
            t = e, this.metricKey = n, this._connectionStatus == s.DISCONNECTED && (this._connectionStatus = s.PENDING, this._connectionCycleAttempts = 0, this._currentConnectionDetails = this._connectionListEnd, this.connectToNext())
        }, a.prototype.close = function(e) {
            if (this._currentTransportMethod) {
                var t = this._currentTransportMethod;
                this.disposeCurrentTransportMethod(), t.close(e)
            }
            this._connectionStatus = s.DISCONNECTED
        }, a.prototype.connectToNext = function() {
            if (!Locator.config.hasSessionExpired()) {
                if (!this._currentConnectionDetails || !(this._currentConnectionDetails = this._currentConnectionDetails.next)) {
                    if (this.connectionListCycles > 0 && this._connectionCycleAttempts++ == this.connectionListCycles) return e.ReadItLog.Log("Transport connection cycles completed, connection failed"), this.close(), void this.dispatchEvent(new o(e.ReaditConnectionEvent.CONNECTION_FAILED));
                    this._currentConnectionDetails = this._connectionListStart
                }
                this.disposeCurrentTransportMethod(), this._currentTransportMethod = new this._currentConnectionDetails.transportMethod, this._currentTransportMethod.addEventListener(r.CONNECTED, this.delegate_transportConnectedHandler), this._currentTransportMethod.addEventListener(r.CONNECTION_FAILED, this.delegate_transportConnectionFailedHandler), this._currentTransportMethod.addEventListener(r.DISCONNECTED, this.delegate_transportDisconnectedHandler), this._currentTransportMethod.addEventListener(r.CONNECTION_FAILED_INVALID_SESSION, this.delegate_transportConnectionFailedInvalidSessionHandler), this._currentTransportMethod.setConnectionDetails(this._currentConnectionDetails), this._currentTransportMethod.setMessageDispatcher(this), this.logPushStatus(String(e.pushConnectionStatusEnum.ATTEMPTINGCONNECTION), this.getCurrentConnectionHost()), this._currentTransportMethod.storageId = this.storageId, this._currentTransportMethod.tokenValidation = this.tokenValidation, this._currentTransportMethod.connect(t, this.metricKey)
            }
        }, a.prototype.disposeCurrentTransportMethod = function() {
            this._currentTransportMethod && (this._currentTransportMethod.removeEventListener(r.CONNECTED, this.delegate_transportConnectedHandler), this._currentTransportMethod.removeEventListener(r.CONNECTION_FAILED, this.delegate_transportConnectionFailedHandler), this._currentTransportMethod.removeEventListener(r.DISCONNECTED, this.delegate_transportDisconnectedHandler), this._currentTransportMethod.removeEventListener(r.CONNECTION_FAILED_INVALID_SESSION, this.delegate_transportConnectionFailedInvalidSessionHandler), this._currentTransportMethod = null)
        }, a.prototype.subscribe = function(e) {
            if (this._connectionStatus == s.CONNECTED) try {
                this._currentTransportMethod.subscribe(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
        }, a.prototype.unsubscribe = function(e) {
            if (this._connectionStatus == s.CONNECTED) try {
                this._currentTransportMethod.unsubscribe(e)
            } catch (t) {
                ErrorReporter.Trace(this, t)
            }
        }, a.prototype.send = function(e, t) {
            this._connectionStatus == s.CONNECTED && this._currentTransportMethod.send(e, t)
        }, a.prototype.swapSubscription = function(e, t) {
            if (this._connectionStatus == s.CONNECTED) try {
                this._currentTransportMethod.swapSubscription(e, t)
            } catch (n) {
                ErrorReporter.Trace(this, n)
            }
        }, a.prototype.getConnectionID = function() {
            return this._connectionStatus == s.CONNECTED ? this._currentTransportMethod.getConnectionId() : null
        }, a.prototype.getConnected = function() {
            return this._connectionStatus == s.CONNECTED
        }, a.prototype.getConnectionStatus = function() {
            return this._connectionStatus
        }, a.prototype.getTransportSuspended = function() {
            return this._currentTransportMethod && this._currentTransportMethod.suspended
        }, a.prototype.getCurrentConnectionHost = function() {
            return this._currentConnectionDetails ? this._currentConnectionDetails.host : this._connectionListEnd.host
        }, a.prototype.getCurrentConnectionDetails = function() {
            return this._currentTransportMethod.getConnectionDetails()
        }, a.prototype.logPushStatus = function(e, t) {
            try {
                this.pushStatusHandler && this.pushStatusHandler.log(e, 0, t)
            } catch (n) {}
        }, a.prototype.transportConnectedHandler = function() {
            this._connectionStatus = s.CONNECTED, this.logPushStatus(String(e.pushConnectionStatusEnum.CONNECTED), this.getCurrentConnectionHost()), this.dispatchEvent(new o(e.ReaditConnectionEvent.CONNECTED))
        }, a.prototype.transportConnectionFailedHandler = function() {
            this.logPushStatus(String(e.pushConnectionStatusEnum.DISCONNECTED), this.getCurrentConnectionHost()), this.connectToNext()
        }, a.prototype.transportDisconnectedHandler = function() {
            this.close(), this.logPushStatus(String(e.pushConnectionStatusEnum.DISCONNECTED), this.getCurrentConnectionHost()), this.dispatchEvent(new o(e.ReaditConnectionEvent.DISCONNECTED))
        }, a.prototype.transportConnectionFailedInvalidSessionHandler = function() {
            this.close(), this.dispatchEvent(new o(e.ReaditConnectionEvent.CONNECTION_FAILED_INVALID_SESSION))
        }, a
    })(ns_gen5_events.EventDispatcher), e.ReaditClient = n
})(readit || (readit = {})), (function(e) {
    var t = (function() {
        function e(e, t, n, i, r) {
            this.host = e, this.port = t, this.transportMethodId = n, this.defaultTopic = i, this.uid = r, this.next = null
        }
        return e.prototype.clone = function() {
            return new e(this.host, this.port, this.transportMethodId, this.defaultTopic, this.uid)
        }, e.prototype.toString = function() {
            return "[host:" + this.host + ", port:" + this.port + ", topic:" + this.defaultTopic + "]"
        }, e
    })();
    e.ReaditConnectionDetails = t
})(readit || (readit = {})), (function(e) {
    "use strict";
    var t = 0,
        n = 1,
        i = 3,
        r = 4,
        o = (function() {
            function e() {
                var e = this;
                this.xdr = new XDomainRequest, this.xdr.timeout = 6e4, this.status = 0, this.readyState = t, this.responseText = null, this.contentType = null, this.onreadystatechange = null, this.progress_delegate = function() {
                    return e._progress()
                }, this.onload_delegate = function() {
                    return e._onload()
                }, this.onerror_delegate = function() {
                    return e._onerror()
                }, this.ontimeout_delegate = function() {
                    return e._timeout()
                }
            }
            return e.TryCreate = function(t) {
                return "withCredentials" in t || !XDomainRequest ? t : new e
            }, e.prototype._progress = function() {
                this.readyState = i, this.onreadystatechange && this.onreadystatechange.call(this)
            }, e.prototype._timeout = function() {
                this.readyState = r, this.status = 0, this.responseText = null, this.contentType = null, this.xdr.onload = this.xdr.onerror = this.xdr.ontimeout = function() {}, this.xdr = void 0, this.onreadystatechange && this.onreadystatechange.call(this)
            }, e.prototype._onerror = function() {
                this.readyState = r, this.status = 0, this.responseText = null, this.contentType = null, this.xdr.onload = this.xdr.onerror = this.xdr.ontimeout = function() {}, this.xdr = void 0, this.onreadystatechange && this.onreadystatechange.call(this)
            }, e.prototype._onload = function() {
                this.readyState = r, this.status = 200, this.responseText = this.xdr.responseText, this.contentType = this.xdr.contentType, this.xdr.onload = this.xdr.onerror = this.xdr.ontimeout = function() {}, this.xdr = void 0, this.onreadystatechange && this.onreadystatechange.call(this)
            }, e.prototype.open = function(e, t) {
                var i = null;
                try {
                    i = this.xdr.open(e, t)
                } catch (r) {
                    throw {
                        name: r.name,
                        message: r.message,
                        number: r.number
                    }
                }
                return this.xdr.onprogress = this.progress_delegate, this.xdr.ontimeout = this.ontimeout_delegate, this.xdr.onerror = this.onerror_delegate, this.xdr.onload = this.onload_delegate, this.readyState = n, this.onreadystatechange && this.onreadystatechange.call(this), i
            }, e.prototype.send = function(e) {
                this.xdr.send(e)
            }, e.prototype.abort = function() {
                return this.readyState = t, this.onreadystatechange = null, this.xdr.abort()
            }, e
        })();
    e.XDomainXMLHttpRequest = o
})(readit || (readit = {})), (function(e) {
    var t, n = ns_gen5_ui.Application,
        i = ns_gen5_events.ApplicationEvent,
        r = ns_gen5_util.Delegate,
        o = ns_gen5_util.CookieManager,
        s = {
            L: "1",
            M: "2",
            I: "3"
        },
        a = (function(a) {
            function c() {
                var e = a.call(this) || this;
                return e._poller = null, e._messageDispatcher = null, e._connectionTimeout = 0, e._url = "", e._requestActive = !1, e._requestQueue = [], e._connectionID = "", e._sID = "", e._sequence = 0, e._connected = !1, e._hasNativeXmlHttp = !1, e._transportIsSupported = e.checkXmlHttpAvailable(), e._activeXVersion = null, e.instanceid = c.count++, e.suspended = !1, e.storageId = null, e.tokenValidation = !1, e.TRAILING = "/pow2/", e.CONNECTION_TIMEOUT_LIMIT = 15e3, e.PUBLISHER_SESSION_TIMEOUT = 9e4, e.TRANSPORT_TIMEOUT = 20, e._delegate_resume = new r(e, e._resume), e
            }
            return __extends(c, a), c.prototype.toString = function() {
                return "[HttpTransportMethod]"
            }, c.prototype.connect = function(n) {
                var i, r, s, a, c, l, u = this;
                if (t = n, this._transportIsSupported) {
                    this._connectionTimeout = setTimeout((function() {
                        u.connectionFailed("timeout after " + u.CONNECTION_TIMEOUT_LIMIT + "ms")
                    }), this.CONNECTION_TIMEOUT_LIMIT);
                    try {
                        l = this.retrieve(), this._connectionID = l[0], this._connectionTimeStamp = l[1], this._url = this._connectionDetails.host + ":" + this._connectionDetails.port + this.TRAILING, this.log("Attempting connection to " + this._url), i = o.GetSessionId(), r = t && t(), null == i ? this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.CONNECTION_FAILED_INVALID_SESSION)) : (s = function() {
                            var t, n = {
                                method: e.StandardProtocolConstants.CLIENT_CONNECT,
                                transporttimeout: u.TRANSPORT_TIMEOUT,
                                type: "F",
                                topic: u._connectionDetails.defaultTopic + ",S_" + i
                            };
                            u.tokenValidation && r && (n.topic += ",D_" + r), t = u.getRequest(n), u.log("Connecting with:" + t), t.onreadystatechange = function() {
                                var n, i, r, o;
                                4 == t.readyState && (clearTimeout(u._connectionTimeout), 200 == t.status ? (n = t.responseText.split(e.StandardProtocolConstants.HANDSHAKE_MESSAGE_DELIM), i = n[0], r = i.split(""), "100" == r[0] && (u.handshakeHandler(r[1]), o = n[1], o && u.processMessage(o)), "111" == r[0] && u.connectionFailed("connection rejected 111")) : u.connectionFailed("Connection Rejected - Invalid response status:" + t.status), t.onreadystatechange = null)
                            }, t.send(t.params || "")
                        }, !this.storageId || !this._connectionID || !this._connectionTimeStamp || (new Date).getTime() - this._connectionTimeStamp > this.PUBLISHER_SESSION_TIMEOUT ? s() : (this.clear(), a = !1, c = this.getRequest({
                            method: e.StandardProtocolConstants.CLIENT_CLOSE,
                            s: this._sequence++
                        }), c.onreadystatechange = function() {
                            a || 4 !== c.readyState || (a = !0, c.onreadystatechange = null, s())
                        }, c.send("")))
                    } catch (h) {
                        clearTimeout(this._connectionTimeout), this.connectionFailed("Unable to open Socket.")
                    }
                } else this.connectionFailed("XML Http Transport not supported.")
            }, c.prototype.subscribe = function(t) {
                this.put(this.getRequest({
                    method: e.StandardProtocolConstants.CLIENT_SUBSCRIBE,
                    topic: t,
                    s: this._sequence++
                }))
            }, c.prototype.unsubscribe = function(t) {
                this.put(this.getRequest({
                    method: e.StandardProtocolConstants.CLIENT_UNSUBSCRIBE,
                    topic: t,
                    s: this._sequence++
                }))
            }, c.prototype.send = function(t, n) {
                this.put(this.getRequest({
                    method: e.StandardProtocolConstants.CLIENT_SEND,
                    data: encodeURIComponent(n),
                    topic: t,
                    s: this._sequence++
                }))
            }, c.prototype.swapSubscription = function(t, n) {
                this.put(this.getRequest({
                    method: e.StandardProtocolConstants.CLIENT_SWAP_SUBSCRIPTIONS,
                    subs: t,
                    unsubs: n,
                    s: this._sequence++
                }))
            }, c.prototype.close = function(t) {
                t & e.ReaditFlags.SEND_CLOSE && (this.put(this.getRequest({
                    method: e.StandardProtocolConstants.CLIENT_CLOSE,
                    s: this._sequence++
                })), this.clear()), this.dispose(), this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.DISCONNECTED))
            }, c.prototype.setMessageDispatcher = function(e) {
                this._messageDispatcher = e
            }, c.prototype.getConnectionDetails = function() {
                return this._connectionDetails
            }, c.prototype.setConnectionDetails = function(e) {
                this._connectionDetails = e
            }, c.prototype.getConnected = function() {
                return this._connected
            }, c.prototype.connectionFailed = function(t) {
                this.log("http connection (" + this.instanceid + ", " + this._connectionDetails + ") failed - " + t);
                var n = this._connected;
                this.dispose(), n ? this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.DISCONNECTED)) : this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.CONNECTION_FAILED))
            }, c.prototype.getRequest = function(t) {
                var n, i, r;
                n = this._hasNativeXmlHttp ? e.XDomainXMLHttpRequest.TryCreate(new XMLHttpRequest) : new ActiveXObject(this._activeXVersion);
                try {
                    n.open("POST", this._url + (this._connectionID ? "?id=" + this._connectionID : "")), this._connectionID && (t.clientid = this._connectionID), i = "", n.setRequestHeader && n.setRequestHeader("Content-Type", "text/plain");
                    for (r in t) i += (i.length > 0 ? "&" : "") + r + "=" + encodeURIComponent(t[r]);
                    return n.params = i, n
                } catch (o) {
                    ErrorReporter.Trace(this, o)
                }
                return null
            }, c.prototype.put = function(e) {
                var t, n = this;
                null !== e && this._requestQueue.push(e), this._requestActive || this.suspended || "" === this._connectionID || this._requestQueue.length > 0 && (t = this._requestQueue.shift(), this._requestActive = !0, t.onreadystatechange = function() {
                    4 == t.readyState && (200 == t.status && t.responseText ? n.processMessage(t.responseText) : 200 != t.status && n.connectionFailed("Connection lost during put."), n.queuedRequestCompleteHandler(), t.onreadystatechange = null)
                }, "params" in t ? t.send(t.params || "") : t.send(""))
            }, c.prototype.poll = function() {
                var t = this;
                this._connected && (c.SuspendOnFocusLost && n.currentApplication && n.currentApplication.suspended ? this.suspended || ($log("suspend"), this.suspended = !0, n.currentApplication.addEventListener(i.FOCUS_IN, this._delegate_resume)) : (this._poller = this.getRequest({
                    method: e.StandardProtocolConstants.CLIENT_POLL,
                    s: this._sequence++,
                    topic: ""
                }), this._poller.complete = !1, this._poller.onreadystatechange = function() {
                    4 != t._poller.readyState || t._poller.complete || (t._poller.complete = !0, t._poller.onreadystatechange = null, 200 == t._poller.status ? t.pollerCompleteHandler(t._poller.responseText) : t._connected && t.connectionFailed('Connection lost during poll statusCode:"' + t._poller.status + '" statusText:"' + t._poller.statusText + '"'))
                }, "params" in this._poller ? this._poller.send(this._poller.params || "") : this._poller.send("")))
            }, c.prototype.save = function() {
                this.storageId && this._connectionID && window.safeSessionStorage.setItem(this.storageId, this._connectionID + "|" + (this._connectionTimeStamp = (new Date).getTime()))
            }, c.prototype.clear = function() {
                this.storageId && window.safeSessionStorage.setItem(this.storageId, "")
            }, c.prototype.retrieve = function() {
                var e, t, n, i;
                return this.storageId && (e = window.safeSessionStorage.getItem(this.storageId)) ? (t = e.split("|"), n = t[0], i = t[1], [n, Number(i)]) : [null, null]
            }, c.prototype._resume = function() {
                $log("resume"), n.currentApplication.removeEventListener(i.FOCUS_IN, this._delegate_resume), this.suspended = !1, this.poll(), this._requestQueue.length > 0 && this.put(null)
            }, c.prototype.dispose = function() {
                if (this._connected = !1, this._connectionTimeStamp = null, this._connectionID = null, this._poller) {
                    try {
                        this._poller.abort()
                    } catch (e) {}
                    this._poller.onreadystatechange = null, this._poller = null
                }
                this._messageDispatcher = null, clearTimeout(this._connectionTimeout)
            }, c.prototype.checkXmlHttpAvailable = function() {
                try {
                    return new XMLHttpRequest, this._hasNativeXmlHttp = !0, !0
                } catch (e) {}
                return !1
            }, c.prototype.getConnectionId = function() {
                return this._connected ? this._connectionID : ""
            }, c.prototype.log = function(t) {
                e.ReadItLog.Log(this + " -> " + t)
            }, c.prototype.handshakeHandler = function(t) {
                this._requestActive = !1, this._connectionID = t, this._connectionDetails.connectionID = t, this.save(), t ? this._sID = s[t.charAt(0).toUpperCase()] || "0" : this._sID = "0", this._connected = !0, this.log(this.instanceid + " connected as " + this._connectionID + ". " + this._connectionDetails), this.poll(), this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.CONNECTED))
            }, c.prototype.processMessage = function(t) {
                var n, i, r, o, s, a, c, l;
                if (this.save(), t) {
                    n = t.split(e.StandardProtocolConstants.MESSAGE_DELIM);
                    do switch (i = n.shift(), r = i.charCodeAt(0)) {
                        case e.StandardProtocolConstants.INITIAL_TOPIC_LOAD:
                        case e.StandardProtocolConstants.DELTA:
                            o = i.split(e.StandardProtocolConstants.RECORD_DELIM), s = o[0].split(e.StandardProtocolConstants.FIELD_DELIM), a = s.shift(), c = a.substr(1, a.length), l = i.substr(o[0].length + 1), null !== this._messageDispatcher && this._messageDispatcher.dispatchEvent(new e.ReaditMessageEvent(e.ReaditMessageEvent.MESSAGE_RECEIVED, new e.ReaditMessage(String(r), c, l, s)));
                            break;
                        case e.StandardProtocolConstants.CLIENT_ABORT:
                        case e.StandardProtocolConstants.CLIENT_CLOSE:
                            this.connectionFailed("Connection close/abort during poll.")
                    }
                    while (n.length)
                }
            }, c.prototype.pollerCompleteHandler = function(e) {
                var t = this;
                this.processMessage(e), this._connected && setTimeout((function() {
                    t.poll()
                }), c.pollDelay)
            }, c.prototype.queuedRequestCompleteHandler = function() {
                this._requestActive = !1, this._requestQueue.length && this.put(null)
            }, c.prototype.getTransportSuspended = function() {
                return this.suspended
            }, c.SuspendOnFocusLost = !0, c.pollDelay = 10, c.count = 0, c
        })(ns_gen5_events.EventDispatcher);
    e.HttpTransportMethod = a
})(readit || (readit = {})), (function(e) {
    var t, n = ns_gen5_util_logging.Timer,
        i = ns_gen5_util_user.RegisteredCountry,
        r = "overview_subscribe_brazil",
        o = "overview_subscribe",
        s = "socket_connection_brazil_",
        a = "socket_connection_",
        c = (function(c) {
            function l() {
                var e = c.call(this) || this;
                return e._messageDispatcher = null, e._connectionID = "", e._connectionTimeout = 0, e._url = "", e._transportIsSupported = e.checkWebsocketAvailable(), e._socket = null, e._socketReadyState = null, e._connected = !1, e.suspended = !1, e.storageId = null, e.tokenValidation = !1, e.subscriptionLogged = !1, e.socketOpenHandler = function(t) {
                    e.log("Websocket: onopen: " + t.type), e.socketConnectCallback()
                }, e.socketErrorHandler = function(t) {
                    e.connectionFailed("connection error: " + t.type)
                }, e.socketCloseHandler = function(t) {
                    e._connected ? e.connectionClosed("Websocket: onclosed: " + t.reason) : e.connectionFailed("connection error: " + t.type + " (unable to connect error)")
                }, e.socketMessageHandshakeHandler = function(t) {
                    e.connectionTimer.record(), e.handshakeCallback(t.data)
                }, e.socketMessageDataHandler = function(t) {
                    !e.subscriptionLogged && e.subscriptionTimer && t.data.indexOf("OVInPlay") && e.subscriptionTimer.snapshotTimestampNow(), e.socketDataCallback(t.data)
                }, e
            }
            return __extends(l, c), l.prototype.toString = function() {
                return "[WebsocketTransportMethod]"
            }, l.prototype.close = function() {
                if (this.getSocketConnected()) {
                    var t = "";
                    t += String.fromCharCode(e.StandardProtocolConstants.CLIENT_CLOSE), t += String.fromCharCode(0), this.put(t), this._socket.close()
                }
            }, l.prototype.getConnected = function() {
                return this.getSocketConnected() && this._connected
            }, l.prototype.getSocketConnected = function() {
                return this._transportIsSupported && this._socketReadyState == WebSocket.OPEN
            }, l.prototype.setSocketReadyState = function() {
                this._socketReadyState = this._socket && this._socket.readyState ? this._socket.readyState : null, this._connected && this._socketReadyState !== WebSocket.OPEN && (this._connected = !1)
            }, l.prototype.connect = function(e, c) {
                var u = this;
                if (t = e, Locator.user.countryId == i.Brazil ? (this.connectionMetricKey = s + c, this.subscriptionMetricKey = r) : (this.connectionMetricKey = a + c, this.subscriptionMetricKey = o), this._transportIsSupported || this.connectionFailed("Websocket Transport not supported."), null == this._socket) {
                    this._connectionTimeout = setTimeout((function() {
                        u.connectionFailed("timeout after " + l.CONNECTION_TIMEOUT_LIMIT + "ms")
                    }), l.CONNECTION_TIMEOUT_LIMIT);
                    try {
                        this._url = this._connectionDetails.host + ":" + this._connectionDetails.port + l.TRAILING + "?uid=" + this._connectionDetails.uid, this.connectionTimer = new n(this.connectionMetricKey), this._socket = new WebSocket(this._url, "zap-protocol-v1"), this._socket.addEventListener("open", this.socketOpenHandler), this._socket.addEventListener("error", this.socketErrorHandler), this._socket.addEventListener("close", this.socketCloseHandler)
                    } catch (h) {
                        this.connectionFailed("Unable to open Socket. Error: " + h)
                    }
                }
            }, l.prototype.socketConnectCallback = function() {
                var e, t = this;
                this.clearConnectionTimeout(), this.setSocketReadyState(), this.getSocketConnected() ? (this._socket.addEventListener("message", this.socketMessageHandshakeHandler), e = this.getHandshakeData(), e ? (this._socket.send(e), this._connectionTimeout = setTimeout((function() {
                    t.connectionFailed("timeout after " + l.HANDSHAKE_TIMEOUT_LIMIT + "ms")
                }), l.HANDSHAKE_TIMEOUT_LIMIT)) : this.close()) : this.connectionFailed("not connected")
            }, l.prototype.handshakeCallback = function(t) {
                var n = t.split(e.StandardProtocolConstants.HANDSHAKE_MESSAGE_DELIM),
                    i = n[0],
                    r = i.split(e.StandardProtocolConstants.FIELD_DELIM);
                return this._socket.removeEventListener("message", this.socketMessageHandshakeHandler), this.clearConnectionTimeout(), r[0] != l.HANDSHAKE_STATUS_CONNECTED ? r[0] == l.HANDSHAKE_STATUS_REJECTED ? void this.connectionFailed("connection rejected " + l.HANDSHAKE_STATUS_REJECTED) : void this.connectionFailed("connection rejected - unrecognised response") : (this.setSocketReadyState(), this._connected = !0, this._connectionID = r[1], this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.CONNECTED)), this.log("Websocket connected as " + this._connectionID + ". " + this._connectionDetails), void this._socket.addEventListener("message", this.socketMessageDataHandler))
            }, l.prototype.socketDataCallback = function(t) {
                var n, i, r, o, s, a, c, l;
                try {
                    if (t) {
                        n = t.split(e.StandardProtocolConstants.MESSAGE_DELIM);
                        do switch (i = n.shift(), r = i.charCodeAt(0)) {
                            case e.StandardProtocolConstants.INITIAL_TOPIC_LOAD:
                            case e.StandardProtocolConstants.DELTA:
                                o = i.split(e.StandardProtocolConstants.RECORD_DELIM), s = o[0].split(e.StandardProtocolConstants.FIELD_DELIM), a = s.shift(), c = a.substr(1, a.length), l = i.substr(o[0].length + 1), !this.subscriptionLogged && t.indexOf("OVInPlay") > -1 && this.subscriptionTimer && (this.subscriptionTimer.record(), this.subscriptionLogged = !0), null !== this._messageDispatcher && this._messageDispatcher.dispatchEvent(new e.ReaditMessageEvent(e.ReaditMessageEvent.MESSAGE_RECEIVED, new e.ReaditMessage(String(r), c, l, s)));
                                break;
                            case e.StandardProtocolConstants.CLIENT_ABORT:
                            case e.StandardProtocolConstants.CLIENT_CLOSE:
                                this.connectionFailed("Connection close/abort message type sent from publisher. Message type: " + r);
                                break;
                            default:
                                this.log("Unrecognised message type sent from publisher: " + r)
                        }
                        while (n.length)
                    }
                } catch (u) {
                    this.log(u.toString())
                }
            }, l.prototype.subscribe = function(t) {
                var n = "";
                n += String.fromCharCode(e.StandardProtocolConstants.CLIENT_SUBSCRIBE), n += String.fromCharCode(e.StandardProtocolConstants.NONE_ENCODING), n += t, n += e.StandardProtocolConstants.RECORD_DELIM, this.put(n)
            }, l.prototype.unsubscribe = function(t) {
                var n = "";
                n += String.fromCharCode(e.StandardProtocolConstants.CLIENT_UNSUBSCRIBE), n += String.fromCharCode(e.StandardProtocolConstants.NONE_ENCODING), n += t, n += e.StandardProtocolConstants.RECORD_DELIM, this.put(n)
            }, l.prototype.swapSubscription = function(e, t) {
                this.unsubscribe(t), this.subscribe(e)
            }, l.prototype.send = function(t, n) {
                var i = "";
                i += String.fromCharCode(e.StandardProtocolConstants.CLIENT_SEND), i += String.fromCharCode(e.StandardProtocolConstants.NONE_ENCODING), i += t, i += e.StandardProtocolConstants.RECORD_DELIM, i += n, this.put(i)
            }, l.prototype.put = function(e) {
                try {
                    if (!this.getSocketConnected()) throw new Error("socket not connected");
                    !this.subscriptionLogged && e.indexOf("OVInPlay") > -1 && (this.subscriptionTimer = new n(this.subscriptionMetricKey)), this._socket.send(e)
                } catch (t) {
                    this.connectionFailed("WebSocket: put:" + t)
                }
            }, l.prototype.getHandshakeData = function() {
                var n, i, r = "";
                return r += String.fromCharCode(l.HANDSHAKE_PROTOCOL), r += String.fromCharCode(l.HANDSHAKE_VERSION), r += String.fromCharCode(l.HANDSHAKE_CONNECTION_TYPE), r += String.fromCharCode(l.HANDSHAKE_CAPABILITIES_FLAG), null != this._connectionDetails.defaultTopic && (r += this._connectionDetails.defaultTopic + ","), n = ns_gen5_util.CookieManager.GetSessionId(), null == n ? (this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.CONNECTION_FAILED_INVALID_SESSION)), null) : (r += "S_" + n, this.tokenValidation && (i = t && t(), i && (r += ",D_" + i)), r += String.fromCharCode(0))
            }, l.prototype.checkWebsocketAvailable = function() {
                return "WebSocket" in window
            }, l.prototype.getConnectionId = function() {
                return this._connectionID
            }, l.prototype.getConnectionDetails = function() {
                return this._connectionDetails
            }, l.prototype.setConnectionDetails = function(e) {
                this._connectionDetails = e
            }, l.prototype.setMessageDispatcher = function(e) {
                this._messageDispatcher = e
            }, l.prototype.log = function(t) {
                e.ReadItLog.Log(this + " -> " + t)
            }, l.prototype.clearConnectionTimeout = function() {
                this._connectionTimeout && (clearTimeout(this._connectionTimeout), this._connectionTimeout = null)
            }, l.prototype.connectionFailed = function(t) {
                return this.log("Websocket connection (" + this._connectionDetails + ") failed - " + t), this.clearConnectionTimeout(), this.getConnected() ? void this.connectionClosed("connection failed") : (this.setSocketReadyState(), this.dispose(), void this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.CONNECTION_FAILED)))
            }, l.prototype.connectionClosed = function(t) {
                this.log("Websocket connection (" + this._connectionDetails + ") closed - " + t), this.clearConnectionTimeout(), this.setSocketReadyState(), this.dispose(), this.dispatchEvent(new e.TransportConnectionEvent(e.TransportConnectionEvent.DISCONNECTED))
            }, l.prototype.dispose = function() {
                this.close(), this._socket && (this._socket.removeEventListener("open", this.socketOpenHandler), this._socket.removeEventListener("close", this.socketCloseHandler), this._socket.removeEventListener("error", this.socketErrorHandler), this._socket.removeEventListener("message", this.socketMessageDataHandler), this._socket.removeEventListener("message", this.socketMessageHandshakeHandler), this._socket = null)
            }, l.TRAILING = "/zap/", l.CONNECTION_TIMEOUT_LIMIT = 15e3, l.HANDSHAKE_TIMEOUT_LIMIT = 15e3, l.HANDSHAKE_PROTOCOL = 35, l.HANDSHAKE_VERSION = 3, l.HANDSHAKE_CONNECTION_TYPE = 80, l.HANDSHAKE_CAPABILITIES_FLAG = 1, l.HANDSHAKE_STATUS_CONNECTED = "100", l.HANDSHAKE_STATUS_REJECTED = "111", l
        })(ns_gen5_events.EventDispatcher);
    e.WebsocketTransportMethod = c
})(readit || (readit = {})), (function(e) {
    var t = (function() {
        function e() {
            this.showUserBalance = !0
        }
        return e.SessionPreferencesGUID = "BalancePreferences", e
    })();
    e.BalancePreferences = t
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t = readit.StandardProtocolConstants,
        n = ns_gen5_events.BalanceModelEvent,
        i = ns_gen5_config.PushedConfigPropertyChangeEvent,
        r = ns_gen5_data.PrivateSubscriptionManagerEvent,
        o = ns_gen5_events.EventDispatcher,
        s = e.MathUtil,
        a = ns_gen5_net.Loader,
        c = ns_gen5_net.LoaderEvent,
        l = ns_gen5_events.Event365,
        u = ns_gen5_net.URLVariables,
        h = e.InfoReporter,
        d = "SPTBK",
        p = "rn",
        _ = "/balancedataapi/pullbalance",
        g = (function(o) {
            function g() {
                var t = o.call(this) || this;
                return t._subscriptionsInitializedDelegate = null, t._pushBalanceFlagChangeDelegate = null, t._pushBalanceReceivedDelegate = null, t._pullBalanceReceivedDelegate = null, t._pullBalanceErrorDelegate = null, t.balanceModelDelegates = [], t._subscriptionsInitializedDelegate = new e.Delegate(t, t.loadBalance), t._pushBalanceFlagChangeDelegate = new e.Delegate(t, t.pushBalanceFlagChangeHandler), t._pushBalanceReceivedDelegate = new e.Delegate(t, t.pushBalanceReceivedHandler), t._pullBalanceReceivedDelegate = new e.Delegate(t, t.pullBalanceReceivedHandler), t._pullBalanceErrorDelegate = new e.Delegate(t, t.pullBalanceErrorHandler), t.isItalianDomain = ns_gen5_util_user.RegisteredCountry.IsItalyDomain, t
            }
            return __extends(g, o), g.prototype.load = function(e) {
                this._sessionToken = e, Locator.pushedConfig.getArePropertiesInitialised() ? this.loadBalance() : Locator.pushedConfig.addEventListener(i.PROPERTIES_INITIALISED, this._subscriptionsInitializedDelegate)
            }, g.prototype.loadBalance = function() {
                this.pushBalanceEnabled = Locator.pushedConfig.getIsPushBalanceEnabled(), this.isItalianDomain && this.loadPullBalance(), this.loadPushBalance(), Locator.pushedConfig.addEventListener(i.PUSH_BALANCE_ENABLED_AVAILABLE, this._pushBalanceFlagChangeDelegate)
            }, g.prototype.refreshBalance = function() {
                this._sessionToken && (this.pushBalanceEnabled && !this.isItalianDomain || this.loadPullBalance(), this.pushBalanceEnabled && this.refreshPushBalance())
            }, g.prototype.calculateTotalBalance = function(e, t) {
                void 0 === t && (t = !1), this.pushBalanceEnabled || t || (this.totalBalance = (s.StringToNumber(this.totalBalance) - this.formatCurrencyNoCulture(e.toString())).toFixed(2), this.dispatchEvent(new l(n.BALANCEMODEL_UPDATE_EVENT)))
            }, g.prototype.updateWithdrawableBalance = function(e, t) {
                if (void 0 === t && (t = !1), !this.pushBalanceEnabled && !t) {
                    var i = s.StringToNumber(this.withdrableBalance) - this.formatCurrencyNoCulture(e.toString());
                    0 > i && s.StringToNumber(this.bonusBalance) > 0 ? (this.withdrableBalance = "0.00", this.updateBonusBalance((-1 * i).toFixed(2))) : this.withdrableBalance = i.toFixed(2), this.dispatchEvent(new l(n.BALANCEMODEL_UPDATE_EVENT))
                }
            }, g.prototype.updateBonusBalance = function(e) {
                this.pushBalanceEnabled || (this.bonusBalance = (s.StringToNumber(this.bonusBalance) - this.formatCurrencyNoCulture(e.toString())).toFixed(2), this.dispatchEvent(new l(n.BALANCEMODEL_UPDATE_EVENT)))
            }, g.prototype.formatCurrencyNoCulture = function(e) {
                return e ? s.StringToNumber(e.split(Locator.user.currencyDecimalSeparator).join(".")) : 0
            }, g.prototype.pushBalanceFlagChangeHandler = function() {
                this.pushBalanceEnabled = Locator.pushedConfig.getIsPushBalanceEnabled(), this.pushBalanceEnabled ? this.loadPushBalance() : (Locator.privateSubscriptionManager.removeEventListener(r.BALANCE_RECEIVED, this._pushBalanceReceivedDelegate), this._balanceListenerAdded = !1)
            }, g.prototype.pushBalanceReceivedHandler = function(t) {
                h.Trace(e.InfoReporterGroups.PUSH_MESSAGE_CONNECTION_ENTRY, "Push balance received: " + t.message), "D" == t.message.charAt(0) ? this.loadPushBalance() : this.pushBalanceEnabled = this.updateBalanceInfo(t.message)
            }, g.prototype.pullBalanceReceivedHandler = function(t) {
                h.Trace(e.InfoReporterGroups.PUSH_MESSAGE_CONNECTION_ENTRY, "Pull balance received: " + t.data), this._urlLoader.removeEventListener(c.COMPLETE, this._pullBalanceReceivedDelegate), this._urlLoader.removeEventListener(c.ERROR, this._pullBalanceErrorDelegate), this.updateBalanceInfo(t.data)
            }, g.prototype.pullBalanceErrorHandler = function() {
                this._urlLoader.removeEventListener(c.COMPLETE, this._pullBalanceReceivedDelegate), this._urlLoader.removeEventListener(c.ERROR, this._pullBalanceErrorDelegate)
            }, g.prototype.loadPushBalance = function() {
                if (this.pushBalanceEnabled) {
                    this._balanceListenerAdded || (Locator.privateSubscriptionManager.addEventListener(r.BALANCE_RECEIVED, this._pushBalanceReceivedDelegate), this._balanceListenerAdded = !0);
                    var e = "getBalance" + t.RECORD_DELIM + this._sessionToken + t.FIELD_DELIM + d;
                    Locator.privateSubscriptionManager.send("command", e)
                }
            }, g.prototype.loadPullBalance = function() {
                this._urlLoader || (this._urlLoader = new a);
                var t = new u;
                t.addPair(p, (new Date).getTime() + ""), t.addPair("y", e.B365SimpleEncrypt.encrypt(s.StringToNumber(Locator.manifestManager.getBuildVersion()).toString(16))), this._urlLoader.addEventListener(c.COMPLETE, this._pullBalanceReceivedDelegate), this._urlLoader.addEventListener(c.ERROR, this._pullBalanceErrorDelegate), this._urlLoader.load(_, {
                    method: a.GET,
                    urlVariables: t
                })
            }, g.prototype.refreshPushBalance = function() {
                if (this.pushBalanceEnabled) {
                    this.loadPushBalance();
                    var e = "refresh" + t.RECORD_DELIM + this._sessionToken + t.FIELD_DELIM + d;
                    Locator.privateSubscriptionManager.send("command", e)
                }
            }, g.prototype.updateBalanceInfo = function(e) {
                var t = e.split("$"),
                    i = !1,
                    r = t.length;
                return r > 1 && t[1].length > 0 ? (this.totalBalance = s.StringToNumber(t[1]).toFixed(2), this.withdrableBalance = s.StringToNumber(t[2]).toFixed(2), this.bonusBalance = s.StringToNumber(t[3]).toFixed(2), this.stakeRollover = s.StringToNumber(t[4]).toFixed(2), this.stakeRolloverRequirement = s.StringToNumber(t[5]).toFixed(2), this.depositRollover = s.StringToNumber(t[6]).toFixed(2), this.depositRolloverRequirement = s.StringToNumber(t[7]).toFixed(2), this.italianSportsWithdrableBalance = s.StringToNumber(t[8]).toFixed(2), this.italianSportsNonWithdrableBalance = s.StringToNumber(t[9]).toFixed(2), 11 == r && (this.gamingBalance = s.StringToNumber(t[10]).toFixed(2)), this.isItalianDomain && r > 11 && "1" === t[11] && this.refreshBalance(), this.dispatchEvent(new l(n.BALANCEMODEL_UPDATE_EVENT)), i = !0) : this.pushBalanceEnabled = !1, i
            }, g.prototype.registerBalanceItem = function(e) {
                this.balanceModelDelegates.push(e)
            }, g.prototype.unregisterBalanceItem = function(e) {
                var t = this.balanceModelDelegates.indexOf(e);
                t > -1 && this.balanceModelDelegates.splice(t, 1)
            }, g.prototype.updateBalanceItemsVisibility = function(e) {
                var t, n, i, r, o;
                if (e)
                    for (t = 0, n = this.balanceModelDelegates; t < n.length; t++) i = n[t], i.hideBalanceItem();
                else
                    for (r = 0, o = this.balanceModelDelegates; r < o.length; r++) i = o[r], i.showBalanceItem()
            }, g
        })(o);
    e.BalanceModel = g
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t = (function() {
        function e() {
            this.betQueue = []
        }
        return e.prototype.registerBetslip = function(e) {
            if (this.betslip = e, this.betQueue.length > 0) {
                for (var t = 0, n = this.betQueue.length; n > t; t++) this.betslip.addBet(this.betQueue[t]);
                this.betQueue = []
            }
        }, e.prototype.addBet = function(e, t) {
            var n, i, r, o;
            $assert && $assert(e, "No bet item provided to betslip"), e && (Locator.user.isLoggedIn && this.editBetController && this.editBetController.addSelectionsEnabled ? (n = t.stem, i = this.editBetController.editBetModel, r = n.data, o = "BS" + this.getFixtureId(n) + "-" + r.ID, i.canAddSelection(e.uid) && i.addBet({
                item: e,
                Target: t
            }, o)) : this.betslip ? this.betslip.addBet(e) : this.betQueue.push(e))
        }, e.prototype.deleteBet = function(e) {
            if ($assert && $assert(e, "No bet item provided to betslip"), e)
                if (Locator.user.isLoggedIn && this.editBetController && this.editBetController.addSelectionsEnabled) {
                    var t = this.editBetController.editBetModel;
                    t.removeBet(e.uid)
                } else this.betslip.deleteBet(e)
        }, e.prototype.deleteAllBets = function() {
            this.betslip.deleteAllBets()
        }, e.prototype.isSelected = function(e) {
            return $assert && $assert(e, "No id provided for bet check"), this.editBetController && this.editBetController.addSelectionsEnabled ? this.editBetController.editBetModel.addState.itemAdded(e) : this.betslip ? this.betslip.isSelected(e) : !1
        }, e.prototype.getBetCount = function() {
            return this.betslip ? this.betslip.getBetCount() : 0
        }, e.prototype.isSelectedEditBet = function(e) {
            return $assert && $assert(e, "No id provided for edit bet check"), e && this.editBetController ? this.editBetController.isSelectedEditBet(e) : !1
        }, e.prototype.getFixtureId = function(e) {
            var t;
            do {
                if (t = e.data.FI) break;
                e = e.parent
            } while (e && e.data);
            return t
        }, e.prototype.hideFullBetslip = function() {
            this.betslip.hideBetslip()
        }, e.prototype.showFullBetslip = function() {
            this.betslip.showBetslip()
        }, e
    })();
    e.BetSlipManager = t
})(ns_betslip || (ns_betslip = {})), (function(e) {
    var t = (function() {
        function e() {}
        return e.SetConstructOnBetItem = function(e) {
            var t, n = "#",
                i = "x",
                r = "|",
                o = "pt=",
                s = "o=",
                a = "f=",
                c = "fp=",
                l = "so=",
                u = "c=",
                h = "ln=",
                d = "mt=",
                p = "atc=",
                _ = "TP=",
                g = "Inc=",
                f = "BOdds=",
                E = "oto=",
                m = "pom=Y",
                v = o + e.partType + n;
            return v += s + (e.baseOdds && e.baseOdds.length > 0 ? e.baseOdds : e.odds) + n, v += a + e.fixtureID + n, v += c + e.participantID + n, v += l + "" + n, v += u + e.classificationID + n, v += e.handicap.length > 0 ? h + (e.baseHandicap && e.baseHandicap.length > 0 ? e.baseHandicap : e.handicap) + n : "", v += e.baseHandicap && e.baseHandicap.length > 0 ? g + e.handicap + n : "", v += e.baseHandicap && e.baseHandicap.length > 0 ? f + e.odds + n : "", e.betsource && (v += d + e.betsource + n), v += "id=" + e.uid + (e.subscribe ? "Y" : "N") + n, e.oddsTypeOverride && (v += E + e.oddsTypeOverride.toString() + n), t = e.oddsTypeOverride ? i + e.oddsTypeOverride.toString() + i + e.decimalPlaces : "", e.subscribe && (v += "" + r + _ + "BS" + e.fixtureID + "-" + e.participantID + t + n), e.pom && "1" === e.pom && (v += e.subscribe ? m + n : r + m + n), "S" == e.partType && (v += "pid=" + e.playerID + n + "mid=" + e.matchId + n), v += e.toteCombination ? p + e.toteCombination + n : "", e.constructString = v, e
        }, e
    })();
    e.BetConstructor = t
})(ns_betslip || (ns_betslip = {})), (function(e) {
    var t = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e), t.PARTICIPANT_REMOVED_FROM_BETSLIP = "participantRemovedFromBetSlip", t.PARTICIPANT_ADDED_TO_BETSLIP = "participantAddedToBetslip", t
    })(ns_gen5_events.Event365);
    e.BetSlipEvent = t
})(ns_betslip || (ns_betslip = {})), (function(e) {
    var t, n = ns_gen5_events.Event365,
        i = ns_gen5_util.Delegate,
        r = readit.ReaditClient,
        o = readit.HttpTransportMethod,
        s = readit.WebsocketTransportMethod,
        a = readit.ReaditConnectionEvent,
        c = readit.ReaditMessageEvent,
        l = e.DataUtil,
        u = e.StreamDataProcessorEvent,
        h = ns_gen5_util.Timer,
        d = ns_gen5_util.TimerEvent,
        p = ns_gen5_events.ApplicationEvent,
        _ = ns_gen5_ui.Application,
        g = ns_gen5_util.InfoReporter,
        f = ns_gen5_util.InfoReporterGroups,
        E = {
            0: null,
            2: o,
            3: s
        },
        m = 1e4,
        v = 9900,
        S = (function(e) {
            function s() {
                var t = e.call(this) || this;
                return t._retryInterval = 0, t._connectedPublisher = null, t._reconnected = !1, t._idleTime = 8e4, t._idleTimerID = -1, t._reConnectTimer = null, t._connectionAttempts = 0, t._applicaitonUnloading = !1, t._subscriptionTimeoutTimer = null, t.canDebouncePVCN = !0, t.tokenValidation = !0, t.storageId = null, t._serverConnection = null, t._pendingConnect = !1, t._initialized = !1, t._subscriptionTimeoutTopic = null, t.metricKey = "public", t._subscriptionQueue = [], t._sendQueue = [], t.delegate_serverConnectHandler = new i(t, t._serverConnectHandler), t.delegate_serverDataHandler = new i(t, t._serverDataHandler), t.delegate_applicationUnloadingHandler = new i(t, t._applicationUnloadingHandler), t.delegate_connectionFailedInvalidSessionHandler = new i(t, t._connectionFailedInvalidSessionHandler), t.callback_idleTimerHandler = function() {
                    return t._idleTimerHandler()
                }, t
            }
            return __extends(s, e), s.InstallTransportMethod = function(e, t) {
                E[e] = t
            }, s.prototype.getConnectionDetails = function() {
                return Locator.config.getConnectionDetails()
            }, s.prototype.setNst = function(e) {
                t = e
            }, s.prototype.connect = function(e) {
                var n, i, s, a, c, l;
                if (t = e, this._initialized || this._initialize(), !this._pendingConnect) {
                    for (this.closeConnection(this._serverConnection), this._pendingConnect = !0, n = this._serverConnection = new r, n.storageId = this.storageId, n.tokenValidation = this.tokenValidation, n.connectionListCycles = 1, i = (this.getCurrentTopics && this.getCurrentTopics() || []).join(","), s = 0, a = this.getConnectionDetails(); s < a.length; s++) c = a[s], l = c.clone(), l.transportMethod = E[l.transportMethodId] || o, l.defaultTopic += 0 === i.length ? "" : "," + i, n.addConnectionAttempt(l);
                    this.openConnection(n)
                }
            }, s.prototype.close = function(e) {
                this.closeConnection(this._serverConnection, e)
            }, s.prototype.openConnection = function(e) {
                e && (e.addEventListener(a.CONNECTED, this.delegate_serverConnectHandler), e.addEventListener(a.DISCONNECTED, this.delegate_serverConnectHandler), e.addEventListener(a.CONNECTION_FAILED, this.delegate_serverConnectHandler), e.addEventListener(a.CONNECTION_FAILED_INVALID_SESSION, this.delegate_connectionFailedInvalidSessionHandler), e.addEventListener(c.MESSAGE_RECEIVED, this.delegate_serverDataHandler), e.connect(t, this.metricKey))
            }, s.prototype.closeConnection = function(e, t) {
                if (e) {
                    e.hasEventListener(a.CONNECTED) && (e.removeEventListener(a.CONNECTED, this.delegate_serverConnectHandler), e.removeEventListener(a.DISCONNECTED, this.delegate_serverConnectHandler), e.removeEventListener(a.CONNECTION_FAILED, this.delegate_serverConnectHandler), e.removeEventListener(a.CONNECTION_FAILED_INVALID_SESSION, this.delegate_connectionFailedInvalidSessionHandler), e.removeEventListener(c.MESSAGE_RECEIVED, this.delegate_serverDataHandler));
                    try {
                        e.close(t)
                    } catch (n) {}
                }
            }, s.prototype.subscribe = function(e) {
                var n, r, o = this;
                this._reConnectTimer && this._reConnectTimer.active && (this._reConnectTimer.stop(), this.connect(t)), this._serverConnection && this._serverConnection.getConnected() ? e && (e.length > v ? (n = e.indexOf(",", e.length / 2), this.subscribe(e.slice(0, n)), this.subscribe(e.slice(n + 1))) : (this._serverConnection.subscribe(e), this._subscriptionTimeoutTimer || (r = e.split(",")[0], this._subscriptionTimeoutTimer = new h(m), this._subscriptionTimeoutTimer.addEventListener(d.COMPLETE, new i(this, function() {
                    g.Trace(f.CONNECTION_ENTRY, "Timed out subscribing to " + r), o._subscriptionTimeoutHandler()
                })), this._subscriptionTimeoutTimer.start(), this._subscriptionTimeoutTopic = r))) : this._subscriptionQueue.push(e)
            }, s.prototype.unsubscribe = function(e) {
                var t, n = this._subscriptionQueue;
                n.length && (t = n.indexOf(e)) > -1 && n.splice(t, 1), this._serverConnection && this._serverConnection.getConnected() && this._serverConnection.unsubscribe(e)
            }, s.prototype.send = function(e, t) {
                this._serverConnection && this._serverConnection.getConnected() ? this._serverConnection.send(e, t) : this._sendQueue.push({
                    topic: e,
                    message: t
                })
            }, s.prototype.swapSubscriptions = function(e, t) {
                var n, r = this;
                this._serverConnection.getConnected() ? (this._serverConnection.swapSubscription(e, t), !this._subscriptionTimeoutTimer && e && (n = e.split(",")[0], this._subscriptionTimeoutTimer = new h(m), this._subscriptionTimeoutTimer.addEventListener(d.COMPLETE, new i(this, function() {
                    g.Trace(f.CONNECTION_ENTRY, "Timed out subscribing to " + n), r._subscriptionTimeoutHandler()
                })), this._subscriptionTimeoutTimer.start(), this._subscriptionTimeoutTopic = n)) : this._subscriptionQueue.push(e)
            }, s.prototype._initialize = function() {
                _.currentApplication.addEventListener(p.UNLOADING, this.delegate_applicationUnloadingHandler), this._initialized = !0
            }, s.prototype._resetIdleTimer = function() {
                clearTimeout(this._idleTimerID), this._idleTimerID = setTimeout(this.callback_idleTimerHandler, this._idleTime)
            }, s.prototype._processSubscriptionQueue = function() {
                if (this._subscriptionQueue.length > 0) try {
                    this._serverConnection.subscribe(this._subscriptionQueue.join(",")), this._subscriptionQueue.length = 0
                } catch (e) {
                    ErrorReporter.Trace(this, e)
                }
                for (; this._sendQueue.length > 0;) this.send(this._sendQueue[0].topic, this._sendQueue.shift().message)
            }, s.prototype._connectionFailedInvalidSessionHandler = function() {
                g.Trace(f.PUSH_MESSAGE_CONNECTION_ENTRY, "Failed on invalid session"), this.close(), this.dispatchEvent(new u(u.CONNECTION_FAILED_INVALID_SESSION))
            }, s.prototype._serverConnectHandler = function(e) {
                var t, n, r, o, a, c, l, p, _;
                if (this._pendingConnect = !1, this._serverConnection.getConnected()) {
                    if (this._retryInterval = 0, this._connectedPublisher = this._serverConnection.getConnectionID(), this._connectedPublisher = this._connectedPublisher.substring(0, this._connectedPublisher.indexOf("-")), t = this._serverConnection.getCurrentConnectionDetails(), this.dispatchEvent(new u(u.CONNECTED, t)), this._reconnected ? (this._subscriptionQueue.length = 0, this.dispatchEvent(new u(u.SERVER_RECONNECT))) : this._reconnected = !0, this._resetIdleTimer(), this._processSubscriptionQueue(), !s.WebsocketConnectionEstablished && 3 === t.transportMethodId) {
                        for (s.WebsocketConnectionEstablished = !0, n = Locator.config.getConnectionDetails(), r = 0, o = n; r < o.length; r++) a = o[r], 3 === a.transportMethodId && Locator.config.setConnectionDetails([a]);
                        for (c = Locator.config.getPrivateConnectionDetails(), l = 0, p = c; l < p.length; l++) a = p[l], 3 === a.transportMethodId && Locator.config.setPrivateConnectionDetails([a])
                    }
                } else this._connectedPublisher = "not connected.", this._serverConnection.logPushStatus(readit.pushConnectionStatusEnum.ALLRETRYSFAILED, this._serverConnection.getCurrentConnectionHost()), _ = void 0, this._reconnected ? this.dispatchEvent(new u(u.RECONNECT_FAILED, this._connectionAttempts)) : (_ = new u(u.CONNECTION_FAILED, this._connectionAttempts), this.dispatchEvent(_), _.retry = !0, _.retry || (this._subscriptionQueue.length = 0)), (this._reconnected || _ && _.retry) && (this._applicaitonUnloading || (this._retryInterval = 5e3 + 1e4 * Math.random() | 0, this._reConnectTimer ? this._reConnectTimer.time = this._retryInterval : (this._reConnectTimer = new h(this._retryInterval), this._reConnectTimer.addEventListener(d.COMPLETE, new i(this, this._reConnectHandler))), this._reConnectTimer.reset(), this._reConnectTimer.start()), this._idleTimerID > -1 && clearTimeout(this._idleTimerID)), this._connectionAttempts++
            }, s.prototype._applicationUnloadingHandler = function() {
                this._applicaitonUnloading = !0
            }, s.prototype._serverDataHandler = function(e) {
                var t = this;
                Locator.validationManager.callLater((function() {
                    return t._serverDataHandler_later(e)
                })), Number(e.message.messageType) == readit.StandardProtocolConstants.INITIAL_TOPIC_LOAD && this.canDebouncePVCN && (this.canDebouncePVCN = !1, setTimeout((function() {
                    t.canDebouncePVCN = !0, Locator.validationManager.processValidationCycleNow()
                }), 0))
            }, s.prototype._serverDataHandler_later = function(e) {
                var t, i, r, o, s, a, c, h, d, p, _, E, m, v = this;
                for (this._resetIdleTimer(), t = e.message, i = t.getMessage(), Number(t.messageType) == readit.StandardProtocolConstants.INITIAL_TOPIC_LOAD ? (r = t.getTopic(), e.currentTarget === this._serverConnection && this._subscriptionTimeoutTopic === r && this._resetSubscriptionTimeoutTimer()) : (r = t.getBaseTopic(), this._serverConnection.logPushStatus(readit.pushConnectionStatusEnum.DELTA, this._serverConnection.getCurrentConnectionHost())), o = !!Locator.treeLookup.getReference(r), s = Number(t.messageType) == readit.StandardProtocolConstants.INITIAL_TOPIC_LOAD && o, a = s ? l.ParseMergeMessage(i, r) : l.ParseMessage(i, r), c = a.length, h = 0; c > h; h++) d = a[h], s && (r = d.topic), p = void 0, d.info && (_ = d.info, E = _.TI, E && Locator.timeManager.setServerTime(E), _ && r && (m = Locator.treeLookup.getReference(r), m && m.dispatchEvent(new u(u.INFO_UPDATED, _))), "EMPTY" == r && _.TO && (g.Trace(f.EMPTY_TOPIC_ENTRY, "Empty topic " + _.TO), r = _.TO, this._subscriptionTimeoutTopic && (this._subscriptionTimeoutTopic === r || this._subscriptionTimeoutTopic.lastIndexOf("/") > -1 && this._subscriptionTimeoutTopic.substring(this._subscriptionTimeoutTopic.lastIndexOf("/") + 1) == r) && this._resetSubscriptionTimeoutTimer(), p = Locator.treeLookup.getReference(r), p && p.remove()), this.dispatchEvent(new u(u.INFO_UPDATED, _))), l.ProcessStemChanges(d, r, t.getTopic(), s, (function(e) {
                    return v.dispatchEvent(new n(e))
                }))
            }, s.prototype._resetSubscriptionTimeoutTimer = function() {
                this._subscriptionTimeoutTimer.stop(), this._subscriptionTimeoutTimer = null, this._subscriptionTimeoutTopic = null
            }, s.prototype._idleTimerHandler = function() {
                this._serverConnection.getTransportSuspended() || (this.close(), this.connect(t))
            }, s.prototype._reConnectHandler = function() {
                this.connect(t)
            }, s.prototype._subscriptionTimeoutHandler = function() {
                this.closeConnection(this._serverConnection), this.connect(t)
            }, s.WebsocketConnectionEstablished = !1, s
        })(ns_gen5_events.EventDispatcher);
    e.StreamDataProcessor = S
})(ns_gen5_data || (ns_gen5_data = {})), (function(e) {
    var t = e.StreamDataProcessor,
        n = e.PrivateStreamDataProcessorEvent,
        i = (function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.storageId = "PrivateConnectionDetails", t.metricKey = "userdata", t
            }
            return __extends(t, e), t.prototype.getConnectionDetails = function() {
                return Locator.config.getPrivateConnectionDetails()
            }, t.prototype._serverDataHandler_later = function(t) {
                var i = t.message.topic,
                    r = i.substr(i.lastIndexOf("_") + 1);
                switch (r) {
                    case "BAL":
                        this.dispatchEvent(new n(n.BALANCE_RECEIVED, t.message));
                        break;
                    case "MSG":
                        this.dispatchEvent(new n(n.PUSH_MESSAGE_RECEIVED, t.message));
                        break;
                    case "D23":
                        this.dispatchEvent(new n(n.D23_MESSAGE_RECEIVED, t.message));
                        break;
                    default:
                        e.prototype._serverDataHandler_later.call(this, t)
                }
            }, t
        })(t);
    e.PrivateStreamDataProcessor = i
})(ns_gen5_data || (ns_gen5_data = {})), Locator = (function() {
    function e() {}
    return e.treeLookup = new ns_gen5_data.TreeLookup, e.subscriptionManager = (function() {
        var e = new ns_gen5_data.SubscriptionManager;
        return e.setStreamDataProcessor(new ns_gen5_data.StreamDataProcessor), e.setPullDataProcessor(new ns_gen5_data.PullDataProcessor), e
    })(), e.privateSubscriptionManager = (function() {
        var e = new ns_gen5_data.PrivateSubscriptionManager;
        return e.setStreamDataProcessor(new ns_gen5_data.PrivateStreamDataProcessor), e
    })(), e.validationManager = new ns_gen5_validation.ValidationManager, e.betSlipManager = new ns_betslip.BetSlipManager, e.timeManager = new ns_gen5_util.TimeManager, e.manifestManager = new ns_gen5_util.ManifestManager, e.user = new ns_gen5_data.User, e.languageResource = new ns_gen5_language.Resource, e.pushedConfig = new ns_gen5_config.PushedConfigManager, e.inplayEvents = new ns_gen5_events.EventDispatcher, e.participantEvents = new ns_gen5_events.EventDispatcher, e.otsReport = new ns_gen5_util.OTSReport, e.serverPreferenceManager = new ns_gen5_util.ServerPreferenceManager, e.pageRender = new ns_gen5_util.PageRender, e
})(), (function(e) {
    var t = (function() {
        function e() {}
        return e.ApplyCurrencyDelimiter = function(e, t) {
            var n, i, r;
            return t ? "s" == t ? t : (n = new RegExp("\\" + ("." === e ? "," : "."), "g"), i = t.replace(n, e), -1 == i.indexOf(e) ? i += e + "00" : (r = i.indexOf(e), r == i.length - 2 ? i += "0" : r == i.length - 1 && (i += "00")), i) : ""
        }, e.ApplyGroupSeparator = function(t) {
            if (!t) return "";
            if (!e.GroupSeparator) return t;
            var n = +e.ApplyCurrencyDelimiter(".", t);
            return Math.abs(n) < e.MinSepValue ? t : (e.REMOVE_GROUP_SEPARATOR_REGEX = e.REMOVE_GROUP_SEPARATOR_REGEX || new RegExp("\\" + e.GroupSeparator, "g"), t = t.replace(e.REMOVE_GROUP_SEPARATOR_REGEX, ""), t = t.replace(e.GROUP_SEPARATOR_REGEX, "$1" + e.GroupSeparator))
        }, e.ApplyDelimiterAndGroupSeparator = function(t) {
            var n = e.ApplyCurrencyDelimiter(Locator.user.currencyDecimalSeparator, t);
            return e.ApplyGroupSeparator(n)
        }, e.ApplyCurrencySymbol = function(t) {
            var n = e.GetCurrencySymbol(t),
                i = e.SpaceRequired ? e.WHITE_SPACE : "";
            return e.PrefixSymbol ? n + i + t : t + i + n
        }, e.GetFormatRules = function(t) {
            var n, i;
            return void 0 === t && (t = ""), n = e.GetCurrencySymbol(t), i = e.SpaceRequired ? e.WHITE_SPACE : "", t = e.PrefixSymbol ? i + t : t + i, {
                formattedValue: t,
                currencySymbol: n,
                prefixSymbol: e.PrefixSymbol,
                spaceRequired: e.SpaceRequired,
                featureAvailable: !0
            }
        }, e.ForceCorrectDecimalSeparator = function(e) {
            return e && -1 !== e.indexOf(".") ? e = e.split(".").join(Locator.user.currencyDecimalSeparator) : e
        }, e.GetCurrencySymbol = function(t) {
            var n, i, r = e.Symbol;
            return e.PluralSymbol && (n = t, e.GroupSeparator && (e.REMOVE_GROUP_SEPARATOR_REGEX = e.REMOVE_GROUP_SEPARATOR_REGEX || new RegExp("\\" + e.GroupSeparator, "g"), n = t.replace(e.REMOVE_GROUP_SEPARATOR_REGEX, "")), i = +e.ApplyCurrencyDelimiter(".", n), 1 != i && (r = e.PluralSymbol)), r
        }, e.UnformatCurrencyValue = function(e) {
            var t, n, i;
            return e ? (n = e.indexOf("-") >= 0, i = Locator.user.currencyDecimalSeparator, e = e.replace(/[^\d,.]/g, ""), e[e.length - 3] === i ? (t = e.substring(e.length - 2), e = e.substring(0, e.length - 3)) : e[e.length - 2] === i && (t = e.substring(e.length - 1), e = e.substring(0, e.length - 2)), e = e.replace(/[,.]/g, ""), t && (e += "." + t), (n ? "-" : "") + e) : e
        }, e.GROUP_SEPARATOR_REGEX = /(-?\d)(?=(\d{3})+(?!\d))/g, e.WHITE_SPACE = " ", e
    })();
    e.CurrencyFormatter = t
})(ns_gen5_util || (ns_gen5_util = {})), (function(e) {
    var t = (function() {
        function t() {
            this.stype = "", this.cmask = "", this.ctype = "", this.ttype = "", this.quickBetApplicable = !0
        }
        return t.prototype.updateItem = function() {
            e.BetConstructor.SetConstructOnBetItem(this)
        }, t.prototype.getCastCode = function() {
            return "" + this.stype + this.cmask + this.ctype
        }, t.prototype.getSportType = function() {
            return this.partType && 3 === this.partType.length ? this.partType[0] : this.stype ? this.stype : ""
        }, t.prototype.key = function() {
            return this.uid ? this.uid.replace("Y", "").replace("N", "") : ""
        }, t.prototype.toString = function() {
            return "[BetItem]"
        }, t
    })();
    e.BetItem = t
})(ns_betslip || (ns_betslip = {}));
var RegisterCompiledAsset, GetCompiledAsset;
var cache = cache || {};
(function() {
    RegisterCompiledAsset = function(id, value) {
        id = id.toLowerCase();
        cache[id] = value;
    };
    GetCompiledAsset = function(id) {
        id = id.toLowerCase();
        return cache[id];
    };
})();
! function(e) {
    "use strict";

    function t(e, t) {
        function i(e) {
            return this && this.constructor === i ? (this._keys = [], this._values = [], this._itp = [], this.objectOnly = t, void(e && n.call(this, e))) : new i(e)
        }
        return e.constructor = i, i.prototype = e, i
    }

    function n(e) {
        this.add ? e.forEach(this.add, this) : e.forEach(function(e) {
            this.set(e[0], e[1])
        }, this)
    }

    function i(e) {
        if (this.has(e)) {
            this._keys.splice(y, 1), this._values.splice(y, 1);
            for (var t = 0, n = this._itp.length; n > t; t++) {
                var i = this._itp[t];
                y < i[0] && i[0]--
            }
        }
        return y > -1
    }

    function s(e) {
        return this.has(e) ? this._values[y] : void 0
    }

    function u(e, t) {
        if (this.objectOnly && t !== Object(t)) throw new TypeError("Invalid value used as weak collection key");
        if (t != t || 0 === t)
            for (y = e.length; y-- && !k(e[y], t););
        else y = e.indexOf(t);
        return y > -1
    }

    function a(e) {
        return u.call(this, this._values, e)
    }

    function h(e) {
        return u.call(this, this._keys, e)
    }

    function r(e, t) {
        return this.has(e) ? this._values[y] = t : this._values[this._keys.push(e) - 1] = t, this
    }

    function o(e) {
        return this.has(e) || this._values.push(e), this
    }

    function l() {
        (this._keys || 0).length = this._values.length = 0
    }

    function f() {
        return v(this._itp, this._keys)
    }

    function c() {
        return v(this._itp, this._values)
    }

    function d() {
        return v(this._itp, this._keys, this._values)
    }

    function p() {
        return v(this._itp, this._values, this._values)
    }

    function v(e, t, n) {
        var i = [0],
            s = !1;
        return e.push(i), {
            next: function() {
                var u, a = i[0];
                return !s && a < t.length ? (u = n ? [t[a], n[a]] : t[a], i[0]++) : (s = !0, e.splice(e.indexOf(i), 1)), {
                    done: s,
                    value: u
                }
            }
        }
    }

    function _(e, t) {
        for (var n = this.entries();;) {
            var i = n.next();
            if (i.done) break;
            e.call(t, i.value[1], i.value[0], this)
        }
    }
    var y, k = (Object.defineProperty, function(e, t) {
        return isNaN(e) ? isNaN(t) : e === t
    });
    "undefined" == typeof WeakMap && (e.WeakMap = t({
        "delete": i,
        clear: l,
        get: s,
        has: h,
        set: r
    }, !0)), "undefined" != typeof Map && "function" == typeof(new Map).values && (new Map).values().next || (e.Map = t({
        "delete": i,
        has: h,
        get: s,
        set: r,
        keys: f,
        values: c,
        entries: d,
        forEach: _,
        clear: l
    })), "undefined" != typeof Set && "function" == typeof(new Set).values && (new Set).values().next || (e.Set = t({
        has: a,
        add: o,
        "delete": i,
        clear: l,
        keys: c,
        values: c,
        entries: p,
        forEach: _
    })), "undefined" == typeof WeakSet && (e.WeakSet = t({
        "delete": i,
        add: o,
        clear: l,
        has: a
    }, !0))
}("undefined" != typeof exports && "undefined" != typeof global ? global : window);
