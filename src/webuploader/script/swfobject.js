/*
SWFObject v2.2 <http://code.google.com/p/swfobject/> 
is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/

function f() {
    if (J) return;
    try {
        var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
        Z.parentNode.removeChild(Z);
    } catch (aa) {
        return;
    }
    J = !0;
    var X = U.length;
    for (var Y = 0; Y < X; Y++) U[Y]();
}

function K(X) {
    J ? X() : U[U.length] = X;
}

function s(Y) {
    if (typeof O.addEventListener != D) O.addEventListener("load", Y, !1);
    else if (typeof j.addEventListener != D) j.addEventListener("load", Y, !1);
    else if (typeof O.attachEvent != D) i(O, "onload", Y);
    else if (typeof O.onload == "function") {
        var X = O.onload;
        O.onload = function() {
            X(), Y();
        };
    } else O.onload = Y;
}

function h() {
    T ? V() : H();
}

function V() {
    var X = j.getElementsByTagName("body")[0],
        aa = C(r);
    aa.setAttribute("type", q);
    var Z = X.appendChild(aa);
    if (Z) {
        var Y = 0;
        (function() {
            if (typeof Z.GetVariable != D) {
                var ab = Z.GetVariable("$version");
                ab && (ab = ab.split(" ")[1].split(","), M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]);
            } else if (Y < 10) {
                Y++, setTimeout(arguments.callee, 10);
                return;
            }
            X.removeChild(aa), Z = null, H();
        })();
    } else H();
}

function H() {
    var ag = o.length;
    if (ag > 0)
        for (var af = 0; af < ag; af++) {
            var Y = o[af].id,
                ab = o[af].callbackFn,
                aa = {
                    "success": !1,
                    "id": Y
                };
            if (M.pv[0] > 0) {
                var ae = c(Y);
                if (ae)
                    if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) w(Y, !0), ab && (aa.success = !0, aa.ref = z(Y), ab(aa));
                    else if (o[af].expressInstall && A()) {
                    var ai = {};
                    ai.data = o[af].expressInstall, ai.width = ae.getAttribute("width") || "0", ai.height = ae.getAttribute("height") || "0", ae.getAttribute("class") && (ai.styleclass = ae.getAttribute("class")), ae.getAttribute("align") && (ai.align = ae.getAttribute("align"));
                    var ah = {},
                        X = ae.getElementsByTagName("param"),
                        ac = X.length;
                    for (var ad = 0; ad < ac; ad++) X[ad].getAttribute("name").toLowerCase() != "movie" && (ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value"));
                    P(ai, ah, Y, ab);
                } else p(ae), ab && ab(aa);
            } else {
                w(Y, !0);
                if (ab) {
                    var Z = z(Y);
                    Z && typeof Z.SetVariable != D && (aa.success = !0, aa.ref = Z), ab(aa);
                }
            }
        }
}

function z(aa) {
    var X = null,
        Y = c(aa);
    if (Y && Y.nodeName == "OBJECT")
        if (typeof Y.SetVariable != D) X = Y;
        else {
            var Z = Y.getElementsByTagName(r)[0];
            Z && (X = Z);
        }
    return X;
}

function A() {
    return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312);
}

function P(aa, ab, X, Z) {
    a = !0, E = Z || null, B = {
        "success": !1,
        "id": X
    };
    var ae = c(X);
    if (ae) {
        ae.nodeName == "OBJECT" ? (l = g(ae), Q = null) : (l = ae, Q = X), aa.id = R;
        if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) aa.width = "310";
        if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) aa.height = "137";
        j.title = j.title.slice(0, 47) + " - Flash Player Installation";
        var ad = M.ie && M.win ? "ActiveX" : "PlugIn",
            ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
        typeof ab.flashvars != D ? ab.flashvars += "&" + ac : ab.flashvars = ac;
        if (M.ie && M.win && ae.readyState != 4) {
            var Y = C("div");
            X += "SWFObjectNew", Y.setAttribute("id", X), ae.parentNode.insertBefore(Y, ae), ae.style.display = "none",
                function() {
                    ae.readyState == 4 ? ae.parentNode.removeChild(ae) : setTimeout(arguments.callee, 10);
                }();
        }
        u(aa, ab, X);
    }
}

function p(Y) {
    if (M.ie && M.win && Y.readyState != 4) {
        var X = C("div");
        Y.parentNode.insertBefore(X, Y), X.parentNode.replaceChild(g(Y), X), Y.style.display = "none",
            function() {
                Y.readyState == 4 ? Y.parentNode.removeChild(Y) : setTimeout(arguments.callee, 10);
            }();
    } else Y.parentNode.replaceChild(g(Y), Y);
}

function g(ab) {
    var aa = C("div");
    if (M.win && M.ie) aa.innerHTML = ab.innerHTML;
    else {
        var Y = ab.getElementsByTagName(r)[0];
        if (Y) {
            var ad = Y.childNodes;
            if (ad) {
                var X = ad.length;
                for (var Z = 0; Z < X; Z++)(ad[Z].nodeType != 1 || ad[Z].nodeName != "PARAM") && ad[Z].nodeType != 8 && aa.appendChild(ad[Z].cloneNode(!0));
            }
        }
    }
    return aa;
}

function u(ai, ag, Y) {
    var X, aa = c(Y);
    if (M.wk && M.wk < 312) return X;
    if (aa) {
        typeof ai.id == D && (ai.id = Y);
        if (M.ie && M.win) {
            var ah = "";
            for (var ae in ai) ai[ae] != Object.prototype[ae] && (ae.toLowerCase() == "data" ? ag.movie = ai[ae] : ae.toLowerCase() == "styleclass" ? ah += ' class="' + ai[ae] + '"' : ae.toLowerCase() != "classid" && (ah += " " + ae + '="' + ai[ae] + '"'));
            var af = "";
            for (var ad in ag) ag[ad] != Object.prototype[ad] && (af += '<param name="' + ad + '" value="' + ag[ad] + '" />');
            aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>", N[N.length] = ai.id, X = c(ai.id);
        } else {
            var Z = C(r);
            Z.setAttribute("type", q);
            for (var ac in ai) ai[ac] != Object.prototype[ac] && (ac.toLowerCase() == "styleclass" ? Z.setAttribute("class", ai[ac]) : ac.toLowerCase() != "classid" && Z.setAttribute(ac, ai[ac]));
            for (var ab in ag) ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie" && e(Z, ab, ag[ab]);
            aa.parentNode.replaceChild(Z, aa), X = Z;
        }
    }
    return X;
}

function e(Z, X, Y) {
    var aa = C("param");
    aa.setAttribute("name", X), aa.setAttribute("value", Y), Z.appendChild(aa);
}

function y(Y) {
    var X = c(Y);
    X && X.nodeName == "OBJECT" && (M.ie && M.win ? (X.style.display = "none", function() {
        X.readyState == 4 ? b(Y) : setTimeout(arguments.callee, 10);
    }()) : X.parentNode.removeChild(X));
}

function b(Z) {
    var Y = c(Z);
    if (Y) {
        for (var X in Y) typeof Y[X] == "function" && (Y[X] = null);
        Y.parentNode.removeChild(Y);
    }
}

function c(Z) {
    var X = null;
    try {
        X = j.getElementById(Z);
    } catch (Y) {}
    return X;
}

function C(X) {
    return j.createElement(X);
}

function i(Z, X, Y) {
    Z.attachEvent(X, Y), I[I.length] = [Z, X, Y];
}

function F(Z) {
    var Y = M.pv,
        X = Z.split(".");
    return X[0] = parseInt(X[0], 10), X[1] = parseInt(X[1], 10) || 0, X[2] = parseInt(X[2], 10) || 0, Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? !0 : !1;
}

function v(ac, Y, ad, ab) {
    if (M.ie && M.mac) return;
    var aa = j.getElementsByTagName("head")[0];
    if (!aa) return;
    var X = ad && typeof ad == "string" ? ad : "screen";
    ab && (n = null, G = null);
    if (!n || G != X) {
        var Z = C("style");
        Z.setAttribute("type", "text/css"), Z.setAttribute("media", X), n = aa.appendChild(Z), M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0 && (n = j.styleSheets[j.styleSheets.length - 1]), G = X;
    }
    M.ie && M.win ? n && typeof n.addRule == r && n.addRule(ac, Y) : n && typeof j.createTextNode != D && n.appendChild(j.createTextNode(ac + " {" + Y + "}"));
}

function w(Z, X) {
    if (!m) return;
    var Y = X ? "visible" : "hidden";
    J && c(Z) ? c(Z).style.visibility = Y : v("#" + Z, "visibility:" + Y);
}

function L(Y) {
    var Z = /[\\\"<>\.;]/,
        X = Z.exec(Y) != null;
    return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y;
}
var D = "undefined",
    r = "object",
    S = "Shockwave Flash",
    W = "ShockwaveFlash.ShockwaveFlash",
    q = "application/x-shockwave-flash",
    R = "SWFObjectExprInst",
    x = "onreadystatechange",
    O = window,
    j = document,
    t = navigator,
    T = !1,
    U = [h],
    o = [],
    N = [],
    I = [],
    l, Q, E, B, J = !1,
    a = !1,
    n, G, m = !0,
    M = function() {
        var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
            ah = t.userAgent.toLowerCase(),
            Y = t.platform.toLowerCase(),
            ae = Y ? /win/.test(Y) : /win/.test(ah),
            ac = Y ? /mac/.test(Y) : /mac/.test(ah),
            af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
            X = !1,
            ag = [0, 0, 0],
            ab = null;
        if (typeof t.plugins != D && typeof t.plugins[S] == r) ab = t.plugins[S].description, ab && (typeof t.mimeTypes == D || !t.mimeTypes[q] || !!t.mimeTypes[q].enabledPlugin) && (T = !0, X = !1, ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10), ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10), ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
        else if (typeof O.ActiveXObject != D) try {
            var ad = new ActiveXObject(W);
            ad && (ab = ad.GetVariable("$version"), ab && (X = !0, ab = ab.split(" ")[1].split(","), ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]));
        } catch (Z) {}
        return {
            "w3": aa,
            "pv": ag,
            "wk": af,
            "ie": X,
            "win": ae,
            "mac": ac
        };
    }(),
    k = function() {
        if (!M.w3) return;
        (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) && f(), J || (typeof j.addEventListener != D && j.addEventListener("DOMContentLoaded", f, !1), M.ie && M.win && (j.attachEvent(x, function() {
            j.readyState == "complete" && (j.detachEvent(x, arguments.callee), f());
        }), O == top && function() {
            if (J) return;
            try {
                j.documentElement.doScroll("left");
            } catch (X) {
                setTimeout(arguments.callee, 0);
                return;
            }
            f();
        }()), M.wk && function() {
            if (J) return;
            if (!/loaded|complete/.test(j.readyState)) {
                setTimeout(arguments.callee, 0);
                return;
            }
            f();
        }(), s(f));
    }(),
    d = function() {
        M.ie && M.win && window.attachEvent("onunload", function() {
            var ac = I.length;
            for (var ab = 0; ab < ac; ab++) I[ab][0].detachEvent(I[ab][1], I[ab][2]);
            var Z = N.length;
            for (var aa = 0; aa < Z; aa++) y(N[aa]);
            for (var Y in M) M[Y] = null;
            M = null;
            for (var X in swfobject) swfobject[X] = null;
            swfobject = null;
        });
    }();
    
module.exports = {
    "registerObject": function(ab, X, aa, Z) {
        if (M.w3 && ab && X) {
            var Y = {};
            Y.id = ab, Y.swfVersion = X, Y.expressInstall = aa, Y.callbackFn = Z, o[o.length] = Y, w(ab, !1);
        } else Z && Z({
            "success": !1,
            "id": ab
        });
    },
    "getObjectById": function(X) {
        if (M.w3) return z(X);
    },
    "embedSWF": function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
        var X = {
            "success": !1,
            "id": ah
        };
        M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y ? (w(ah, !1), K(function() {
            ae += "", ag += "";
            var aj = {};
            if (af && typeof af === r)
                for (var al in af) aj[al] = af[al];
            aj.data = ab, aj.width = ae, aj.height = ag;
            var am = {};
            if (ad && typeof ad === r)
                for (var ak in ad) am[ak] = ad[ak];
            if (Z && typeof Z === r)
                for (var ai in Z) typeof am.flashvars != D ? am.flashvars += "&" + ai + "=" + Z[ai] : am.flashvars = ai + "=" + Z[ai];
            if (F(Y)) {
                var an = u(aj, am, ah);
                aj.id == ah && w(ah, !0), X.success = !0, X.ref = an;
            } else {
                if (aa && A()) {
                    aj.data = aa, P(aj, am, ah, ac);
                    return;
                }
                w(ah, !0);
            }
            ac && ac(X);
        })) : ac && ac(X);
    },
    "switchOffAutoHideShow": function() {
        m = !1;
    },
    "ua": M,
    "getFlashPlayerVersion": function() {
        return {
            "major": M.pv[0],
            "minor": M.pv[1],
            "release": M.pv[2]
        };
    },
    "hasFlashPlayerVersion": F,
    "createSWF": function(Z, Y, X) {
        return M.w3 ? u(Z, Y, X) : undefined;
    },
    "showExpressInstall": function(Z, aa, X, Y) {
        M.w3 && A() && P(Z, aa, X, Y);
    },
    "removeSWF": function(X) {
        M.w3 && y(X);
    },
    "createCSS": function(aa, Z, Y, X) {
        M.w3 && v(aa, Z, Y, X);
    },
    "addDomLoadEvent": K,
    "addLoadEvent": s,
    "getQueryParamValue": function(aa) {
        var Z = j.location.search || j.location.hash;
        if (Z) {
            /\?/.test(Z) && (Z = Z.split("?")[1]);
            if (aa == null) return L(Z);
            var Y = Z.split("&");
            for (var X = 0; X < Y.length; X++)
                if (Y[X].substring(0, Y[X].indexOf("=")) == aa) return L(Y[X].substring(Y[X].indexOf("=") + 1));
        }
        return "";
    },
    "expressInstallCallback": function() {
        if (a) {
            var X = c(R);
            X && l && (X.parentNode.replaceChild(l, X), Q && (w(Q, !0), M.ie && M.win && (l.style.display = "block")), E && E(B)), a = !1;
        }
    }
};