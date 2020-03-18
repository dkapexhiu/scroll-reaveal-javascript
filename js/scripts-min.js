"use strict";

function responsive(e) {
    modalInit || (scrollPos = -1), winWidth = window.innerWidth ? window.innerWidth : $(window).width(), winHeight = window.innerHeight ? window.innerHeight : $(window).height(), footerHeight = $footer.outerHeight(), heroHeight = Math.floor($("#content > .hero:first-child").height()), $("#home-mission").length && (heroHeight += $("#home-mission").height()), $("#content, #content > section:only-child").css("min-height", winHeight - footerHeight + "px"), dotsWidth = Math.ceil(winWidth / 3), lazySizes.loader.checkElems(), e && (winWidth >= breakpoint && ($menu.children(".site-menu").height() + headerHeight + subnavHeight > .75 * winHeight ? $menu.attr("data-height", "full") : $menu.children(".site-menu").height() + headerHeight + subnavHeight > winHeight / 2 ? $menu.attr("data-height", "mid") : $menu.attr("data-height", "half")), winWidth > winHeight ? ($(".portrait-image ~ .landscape-image, .portrait-image:only-child, .landscape-image:only-child").not("[src]").addClass("lazyload"), $(".portrait-image.lazyload").not("[src]").not(":only-child").removeClass("lazyload")) : ($(".landscape-image ~ .portrait-image, .portrait-image:only-child, .landscape-image:only-child").not("[src]").addClass("lazyload"), $(".landscape-image.lazyload").not("[src]").not(":only-child").removeClass("lazyload")), $("#home-hero").length && safari && $("#home-hero .fullscreen").height(winHeight), $("#project-hero").length && ($("#project-hero .fullscreen").height(winHeight), $("#project-hero").is(".fall-in") ? $("#project-hero").height(winHeight - subnavHeight) : $("#project-hero").height(winHeight), heroHeight = $("#project-hero").height()), $("#page-hero").length && (heroMargin = Math.floor((winHeight - $("#hero-text .wrap").innerHeight()) / 2), $("#hero-text").css("margin", winHeight + "px auto " + heroMargin + "px")), $(".subnav-wrap").length && (subnavPos = Math.floor($(".subnav-wrap").offset().top), ($body.is(".touchscreen") || winWidth < winHeight) && (subnavPos -= headerHeight)), $(".slideshow-section").length && ($body.is(".touchscreen") || winWidth < winHeight ? $(".slideshow-section .slideshow").height(winHeight - headerHeight - subnavHeight) : $(".slideshow-section .slideshow").height(winHeight - subnavHeight)), $(".slick-initialized").length && $(".slick-initialized").find(".slick-dots").each(function() {
        $(this).find("li").length * dotWidth > dotsWidth + dotWidth ? $(this).width(dotsWidth).addClass("overflow") : $(this).width("auto").removeClass("overflow").find("li").css({
            transform: "translateX(0)",
            "-webkit-transform": "translateX(0)"
        })
    }), $(".section-view").length > 1 && ($body.is(".touchscreen") || winWidth < breakpoint ? $sectionViews.css("min-height", winHeight - subnavHeight - headerHeight) : $sectionViews.css("min-height", winHeight - subnavHeight), secHeight = winHeight - headerHeight - footerHeight, $(".post-nav").length && (secHeight -= $(".post-nav").outerHeight()), $(".section-view > section:only-of-type").css("min-height", secHeight + "px")), $projectsGrid.length && $("#project-filters .select-wrap label").each(function() {
        if (winWidth >= 1024) {
            var e = $(this).outerWidth();
            $(this).siblings(".chosen-container").find(".chosen-drop, .chosen-single").css("padding-left", e + "px")
        } else $(this).siblings(".chosen-container").find(".chosen-drop, .chosen-single").css("padding-left", "16px")
    }), $("#ok-form").length && (winWidth < breakpoint ? $("#select-wrap").insertBefore("[data-subject]:first") : $("#select-wrap").insertBefore("#message-wrap")))
}

function constant() {
    if (scrollPos === window.pageYOffset || repositioning) return scroll(constant), !1;
    if (!modalInit && $body.is('[data-loading="false"]') && (scrollPos = window.pageYOffset, $body.is(".touchscreen") || scrollInterval++, scrollInterval % 10 == 0 && (scrollPos >= lastScrollPos ? $body.addClass("hide-header") : repositioning || $body.removeClass("hide-header"), lastScrollPos = scrollPos)), $body.is('[data-loading="true"]') ? $("#header-logo").addClass("ok") : $("#home-hero").length && scrollPos < winHeight - headerHeight / 2 ? $("#header-logo").removeClass("ok") : $("#header-logo").addClass("ok"), $body.is('[data-loading="true"]')) $header.removeClass("opaque");
    else if (modalInit) $header.addClass("opaque");
    else if ($("#content > *:first-child").is(".hero"))
        if (0 !== heroHeight) {
            if ($("#project-hero").length && scrollPos >= heroHeight - headerHeight ? $header.addClass("opaque") : $("#home-hero").length && scrollPos >= heroHeight - headerHeight ? $header.addClass("opaque") : scrollPos >= heroHeight - headerHeight ? $header.addClass("opaque") : $header.removeClass("opaque"), $("#page-hero").length && scrollPos < winHeight - heroMargin) {
                var e = (heroHeight - scrollPos) / heroHeight;
                $("#hero-image img").css("opacity", e.toFixed(2))
            }
        } else $header.removeClass("opaque");
    else $header.addClass("opaque");
    $("#page-hero").length && $("#section-toggle").length ? scrollPos >= subnavPos ? ($body.addClass("subnav-fixed").removeClass("subnav-fixed-bottom"), $("#section-toggle button.active").length || $("#section-toggle button:first").addClass("active")) : $("#page-hero").length && scrollPos < winHeight - heroMargin + headerHeight ? $body.addClass("subnav-fixed subnav-fixed-bottom") : $("#owner-hero").length && scrollPos < winHeight + headerHeight / 2 ? $body.addClass("subnav-fixed subnav-fixed-bottom") : $body.removeClass("subnav-fixed") : $("#section-toggle").length ? scrollPos >= subnavPos ? ($body.addClass("subnav-fixed").removeClass("subnav-fixed-bottom"), $("#section-toggle button.active").length || $("#section-toggle button:first").addClass("active")) : $body.removeClass("subnav-fixed").removeClass("subnav-fixed-bottom") : $body.removeClass("subnav-fixed subnav-fixed-bottom"), $projectsGrid.length && (scrollPos >= subnavPos ? ($body.addClass("subnav-fixed"), checkedElems || (lazySizes.loader.checkElems(), checkedElems = !0)) : $body.removeClass("subnav-fixed")), $("[data-video]:not([data-loaded])").length && $("[data-video]:not([data-loaded])").each(function() {
        $(this).parents(".section-view").length && !$(this).parents(".section-view").is(".show") || $(this).parents(".slideshow").length && !$(this).parents(".slick-slide").is(".slick-active") || (secTopPos = $(this).offset().top, secHeight = $(this).innerHeight(), secBot = secTopPos + secHeight, scrollPos >= secTopPos - 1.5 * winHeight && scrollPos <= secBot && loadVideo($(this)))
    }), scroll(constant)
}

function anchorHook() {
    $("a").each(function() {
        var e = $(this).attr("href");
        if (e && e.indexOf(".") > -1) {
            var t = e.split(".").pop().toLowerCase();
            if ("pdf" === t || "zip" === t || "doc" === t) {
                var i = $(this).attr("title");
                i ? $(this).attr("download", i) : $(this).attr("download", "")
            }
        }
    }).off("click").on("click", function(e) {
        var t = $(this).attr("href"),
            i = new RegExp("/" + window.location.host + "/");
        if (e.ctrlKey || e.metaKey || $(this).is("[download]")) return !0;
        if (e.preventDefault(), $(this).is("[data-clear-cookies]") && clearCookies(), t.indexOf(".jpg") > -1 || t.indexOf(".jpeg") > -1 || t.indexOf(".png") > -1 || t.indexOf(".gif") > -1) {
            var s;
            s = $(this).is("[data-image-index]") ? $('#modal-slideshow [data-slide-index="' + $(this).attr("data-image-index") + '"]').parents(".slick-slide").attr("data-slick-index") : $('#modal-slideshow [src="' + $(this).attr("href") + '"]').parents(".slick-slide").attr("data-slick-index"), openModal("#slideshow-modal"), $("#modal-slideshow").slick("slickGoTo", s, !0)
        } else {
            if ("#" === t) return !1;
            if (t.indexOf("#go-back") > -1) window.history.back(), $("#error-modal").removeClass("show");
            else if (t.indexOf("#") > -1) {
                if (targetPage = t.split("#")[0], targetHash = t.split("#")[1], (targetAnchor = $("#" + targetHash)).is(".hidden-content")) return targetAnchor.slideDown(transTime), $(this).parents(".button-wrap").slideUp(transTime), !1;
                if (targetAnchor.is(".section-view")) {
                    var o = targetAnchor.index() + 1;
                    $("#section-toggle button:nth-child(" + o + ")").trigger("click")
                } else {
                    if (targetAnchor.length && targetPage !== currentState) return menuOpen && closeMenu(), closeModal(), targetOffset = targetAnchor.offset().top, scrollPos > targetOffset && (targetOffset -= headerHeight), stateData = {
                        path: currentState,
                        scrollTop: targetOffset
                    }, history.replaceState(stateData, pageName, t), history.pushState(stateData, pageName, t), $htmlBody.stop().animate({
                        scrollTop: targetOffset
                    }, 2 * transTime), !1;
                    targetPage && targetPage !== currentState && (e.preventDefault(), loadWrap(t))
                }
            } else {
                if (t === currentState || currentState.indexOf("#") > -1 && t === currentState.split("#")[0] || currentState.indexOf("?") > -1 && t === currentState.split("?")[0]) return menuOpen && closeMenu(), searchOpen && closeSearch(), modalInit && closeModal(), $htmlBody.stop().animate({
                    scrollTop: 0
                }, 2 * transTime), !1;
                if ($(this).is("[data-cover]") && !safari) {
                    $body.attr("data-loading", "true");
                    var n = !1;
                    $(this).find(".landscape-image").length && $(this).find(".portrait-image").length ? ($(this).attr("data-cover") === $(this).find(".landscape-image").attr("data-id") && winWidth > winHeight || $(this).attr("data-cover") === $(this).find(".portrait-image").attr("data-id") && winHeight > winWidth) && (n = !0) : $(this).find(".landscape-image").length && $(this).attr("data-cover") === $(this).find(".landscape-image").attr("data-id") ? n = !0 : $(this).find(".portrait-image").length && $(this).attr("data-cover") === $(this).find(".portrait-image").attr("data-id") && (n = !0), n ? ($(this).parents(".fullscreen").clone().hide().appendTo($body).addClass("offblack-bg white-text").attr("id", "transition-cover").fadeIn(transTime).find("a").removeAttr("href"), setTimeout(function() {
                        loadWrap(t)
                    }, transTime)) : loadWrap(t)
                } else $(this).is('[rel="nofollow"]') ? window.open(t, "t", "toolbar=0,resizable=1,status=0,width=600,height=500") : i.test(this.href) && !$(this).is(".post-edit-link") ? loadWrap(t) : -1 === t.indexOf("javascript") && (e.stopPropagation(), window.open(this.href, "_blank"))
            }
        }
    })
}

function openMenu() {
    modalInit && closeModal(), searchOpen && closeSearch(), $body.addClass("menu-open"), menuOpen = !0
}

function closeMenu() {
    $body.removeClass("menu-open"), menuOpen = !1
}

function openSearch() {
    searchOpen = !0, modalInit && closeModal(), menuOpen && closeMenu(), $body.addClass("search-open"), setTimeout(function() {
        $("#search-input").focus()
    }, transTime)
}

function closeSearch() {
    searchOpen = !1, $body.removeClass("search-open"), $("#search-input").blur()
}

function alignToSubnav() {
    scrollPos < subnavPos ? $htmlBody.stop().animate({
        scrollTop: subnavPos
    }, transTime) : (repositioning = !0, setTimeout(function() {
        $body.addClass("hide-header"), $(document).scrollTop(subnavPos + 1)
    }, transTime / 2 + 1), setTimeout(function() {
        scrollPos = subnavPos + 1, lastScrollPos = subnavPos + 1, repositioning = !1
    }, transTime + 1))
}


function makeCookies() {
    if (clearCookies(), $("#project-filters select").each(function() {
            "all" !== $(this).val() && filtersList.push($(this).attr("id").split("-")[1] + "=" + $(this).val())
        }), $("#projects-sort").is(".active") && filtersList.push("sort=alpha"), updateQueryString(), $.isEmptyObject(filtersList)) $("#project-filters select option").removeAttr("disabled").trigger("chosen:updated");
    else {
        for (Cookies.set("filters", filtersList, {
                expires: 1
            }), cookieFilters = Cookies.getJSON("filters"), i = 0; i < cookieFilters.length; i++) updateQueryString(filterName = cookieFilters[i].split("=")[0], cookieFilters[i].split("=")[1]), "sort" !== filterName && $('#project-filters select:not([id="select-' + filterName + '"])').each(function() {
            "all" === $(this).val() && (filterName = $(this).attr("id").split("-")[1], $(this).find('option:not([selected]):not([value="all"])').each(function() {
                $(".grid-item.show[data-" + filterName + 's*="' + $(this).attr("value") + '"]').length ? $(this).removeAttr("disabled") : $(this).attr("disabled", ""), $(this).trigger("chosen:updated")
            }))
        });
        $projects.each(function() {
            $(this).is(".show") && (projectsList += "," + $(this).attr("data-id"))
        }), Cookies.set("project-list", projectsList, {
            expires: 1
        })
    }
}

function updateQueryString(e, t) {
    if (stateData = {
            path: currentState,
            scrollTop: scrollPos
        }, e && t) {
        var i = [location.protocol, "//", location.host, location.pathname].join(""),
            s = document.location.search,
            o = e + "=" + t,
            n = "?" + o;
        if (s) {
            var r = new RegExp("([?&])" + e + "[^&]*");
            n = null !== s.match(r) ? s.replace(r, "$1" + o) : s + "&" + o
        }
        window.history.replaceState(stateData, pageName, i + n)
    } else window.history.replaceState(stateData, pageName, currentState)
}

function filterGrid() {
    $projectsGrid.addClass("filtering"), filterAttrs = "", itemCount = 0, $("#project-filters select").each(function() {
        $(this).attr("data-value", $(this).val()), "all" !== $(this).val() && (filterAttrs += "[data-" + $(this).attr("id").split("-")[1] + 's*="' + $(this).val() + '"]')
    }), setTimeout(function() {
        if ("" === storedProjectsList || storedListSet) "" === filterAttrs ? ($projects.addClass("show"), $("#projects-sort").is("active") ? sortProjects("title") : sortProjects("position"), itemCount = $("#projects-grid .grid-item").length) : ($projects.each(function() {
            $(this).removeClass("show"), $(this).is(filterAttrs) && (itemCount++, $(this).attr("data-last-position", itemCount).addClass("show"))
        }), $("#projects-sort").is("active") ? sortProjects("title") : sortProjects("last-position"), 0 === itemCount ? $("#no-projects").addClass("show") : $("#no-projects").removeClass("show"));
        else {
            if (console.log("storedProjectsList", storedProjectsList), $.isArray(storedProjectsList) || (storedProjectsList = storedProjectsList.split(",").map(Number)), storedProjectsList.length > 0) {
                for (i = 0; i < storedProjectsList.length; i++) $('.grid-item[data-id="' + storedProjectsList[i] + '"]').attr("data-stored-sort", i).addClass("show");
                $(".grid-item:not([data-stored-sort])").attr("data-stored-sort", storedProjectsList.length + 1).removeClass("show")
            }
            itemCount = storedProjectsList.length, sortProjects("stored-sort")
        }
    }, transTime / 2), setTimeout(function() {
        $projectsGrid.removeClass("filtering"), responsive(!1)
    }, transTime)
}

function loadWrap(e) {
    $contentWrap.focus(), "Win16" === platform || "Windows 95" === platform || "Win95" === platform || "Windows_95" === platform || "Windows 98" === platform || "Win98" === platform || "Windows NT 5.0" === platform || "Windows 2000" === platform || "Windows NT 5.1" === platform || "Windows XP" === platform || "Windows NT 5.2" === platform ? window.location.href = e : ($body.removeClass("hide-header").attr("data-loading", "true"), $(".admin-edit").length && $(".admin-edit").fadeOut(transTime), $contentWrap.fadeOut(transTime), $header.removeClass("opaque"), menuOpen && closeMenu(), searchOpen && closeSearch(), closeModal(), setTimeout(function() {
        $body.removeClass("subnav-fixed-bottom subnav-fixed"), $("#project-hero").removeClass("fall-in"), $(".admin-edit").length && $(".admin-edit").remove(), $htmlBody.scrollTop(0), scrollPos = -1, checkedElems = !1, $.ajax(e).done(function(t) {
            $contentWrap.html($(t).find("#content")), pageName = $("#content").attr("data-pagename"), document.title = pageName, currentState = $("#content").is("[data-url]") ? $("#content").attr("data-url") : e, isPopState ? isPopState = !1 : (stateData = {
                path: currentState,
                scrollTop: scrollPos
            }, history.pushState(stateData, pageName, currentState)), initialize(currentState), pageName && pageName.indexOf("—") > -1 && (pageName = pageName.split(" — ")[1]), analyticsID && gaTrack(currentState, pageName), attempts = 0
        }).fail(function(t, i) {
            ++attempts < 7 ? setTimeout(loadWrap(e), 1e3) : (openModal("#error-modal"), $header.addClass("opaque"))
        })
    }, transTime))
}


function gaTrack(e, t) {
    e.indexOf(homeURL) > -1 && (e = e.replace(homeURL, "")), ga("set", {
        page: e,
        title: t
    }), ga("send", "pageview")
}! function(e, t) {
    var i = t(e, e.document);
    e.lazySizes = i, "object" == typeof module && module.exports && (module.exports = i)
}(window, function e(t, i) {
    if (i.getElementsByClassName) {
        var s, o, n = i.documentElement,
            r = t.Date,
            l = t.HTMLPictureElement,
            a = "addEventListener",
            c = "getAttribute",
            d = t.addEventListener,
            h = t.setTimeout,
            u = t.requestAnimationFrame || h,
            p = t.requestIdleCallback,
            f = /^picture$/i,
            g = ["load", "error", "lazyincluded", "_lazyloaded"],
            m = {},
            v = Array.prototype.forEach,
            _ = function(e, t) {
                return m[t] || (m[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), m[t].test(e.getAttribute("class") || "") && m[t]
            },
            w = function(e, t) {
                _(e, t) || e.setAttribute("class", (e.getAttribute("class") || "").trim() + " " + t)
            },
            y = function(e, t) {
                var i;
                (i = _(e, t)) && e.setAttribute("class", (e.getAttribute("class") || "").replace(i, " "))
            },
            $ = function(e, t, i) {
                var s = i ? a : "removeEventListener";
                i && $(e, t), g.forEach(function(i) {
                    e[s](i, t)
                })
            },
            b = function(e, t, o, n, r) {
                var l = i.createEvent("Event");
                return o || (o = {}), o.instance = s, l.initEvent(t, !n, !r), l.detail = o, e.dispatchEvent(l), l
            },
            k = function(e, i) {
                var s;
                !l && (s = t.picturefill || o.pf) ? (i && i.src && !e.getAttribute("srcset") && e.setAttribute("srcset", i.src), s({
                    reevaluate: !0,
                    elements: [e]
                })) : i && i.src && (e.src = i.src)
            },
            T = function(e, t) {
                return (getComputedStyle(e, null) || {})[t]
            },
            S = function(e, t, i) {
                for (i = i || e.offsetWidth; i < o.minSize && t && !e._lazysizesWidth;) i = t.offsetWidth, t = t.parentNode;
                return i
            },
            C = (H = [], P = A = [], O = function() {
                var e = P;
                for (P = A.length ? H : A, x = !0, j = !1; e.length;) e.shift()();
                x = !1
            }, (z = function(e, t) {
                x && !t ? e.apply(this, arguments) : (P.push(e), j || (j = !0, (i.hidden ? h : u)(O)))
            })._lsFlush = O, z),
            x, j, A, H, P, O, z, E = function(e, t) {
                return t ? function() {
                    C(e)
                } : function() {
                    var t = this,
                        i = arguments;
                    C(function() {
                        e.apply(t, i)
                    })
                }
            },
            L = function(e) {
                var t, i = 0,
                    s = o.throttleDelay,
                    n = o.ricTimeout,
                    l = function() {
                        t = !1, i = r.now(), e()
                    },
                    a = p && n > 49 ? function() {
                        p(l, {
                            timeout: n
                        }), n !== o.ricTimeout && (n = o.ricTimeout)
                    } : E(function() {
                        h(l)
                    }, !0);
                return function(e) {
                    var o;
                    (e = !0 === e) && (n = 33), t || (t = !0, (o = s - (r.now() - i)) < 0 && (o = 0), e || o < 9 ? a() : h(a, o))
                }
            },
            M = function(e) {
                var t, i, s = 99,
                    o = function() {
                        t = null, e()
                    },
                    n = function() {
                        var e = r.now() - i;
                        e < 99 ? h(n, 99 - e) : (p || o)(o)
                    };
                return function() {
                    i = r.now(), t || (t = h(n, 99))
                }
            };
        ! function() {
            var e, i = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 1.5,
                hFac: .8,
                loadMode: 2,
                loadHidden: !0,
                ricTimeout: 0,
                throttleDelay: 125
            };
            for (e in o = t.lazySizesConfig || t.lazysizesConfig || {}, i) e in o || (o[e] = i[e]);
            t.lazySizesConfig = o, h(function() {
                o.init && be()
            })
        }();
        var W = (K = /^img$/i, J = /^iframe$/i, Q = "onscroll" in t && !/(gle|ing)bot/.test(navigator.userAgent), Z = 0, ee = 0, te = 0, ie = -1, se = function(e) {
                te--, e && e.target && $(e.target, se), (!e || te < 0 || !e.target) && (te = 0)
            }, oe = function(e) {
                return null == V && (V = "hidden" == T(i.body, "visibility")),
                    V || "hidden" != T(e.parentNode, "visibility") && "hidden" != T(e, "visibility")
            }, ne = function(e, t) {
                var s, o = e,
                    r = oe(e);
                for (U -= t, Y += t, X -= t, G += t; r && (o = o.offsetParent) && o != i.body && o != n;)(r = (T(o, "opacity") || 1) > 0) && "visible" != T(o, "overflow") && (s = o.getBoundingClientRect(), r = G > s.left && X < s.right && Y > s.top - 1 && U < s.bottom + 1);
                return r
            }, le = L(re = function() {
                var e, t, r, l, a, c, d, h, u, p, f, g, m = s.elements;
                if ((q = o.loadMode) && te < 8 && (e = m.length)) {
                    for (t = 0, ie++, f = (p = !o.expand || o.expand < 1 ? n.clientHeight > 500 && n.clientWidth > 500 ? 500 : 370 : o.expand) * o.expFactor, g = o.hFac, V = null, ee < f && te < 1 && ie > 2 && q > 2 && !i.hidden ? (ee = f, ie = 0) : ee = q > 1 && ie > 1 && te < 6 ? p : 0; t < e; t++)
                        if (m[t] && !m[t]._lazyRace)
                            if (Q)
                                if ((h = m[t].getAttribute("data-expand")) && (c = 1 * h) || (c = ee), u !== c && (R = innerWidth + c * g, B = innerHeight + c, d = -1 * c, u = c), r = m[t].getBoundingClientRect(), (Y = r.bottom) >= d && (U = r.top) <= B && (G = r.right) >= d * g && (X = r.left) <= R && (Y || G || X || U) && (o.loadHidden || oe(m[t])) && (I && te < 3 && !h && (q < 3 || ie < 4) || ne(m[t], c))) {
                                    if (fe(m[t]), a = !0, te > 9) break
                                } else !a && I && !l && te < 4 && ie < 4 && q > 2 && (N[0] || o.preloadAfterLoad) && (N[0] || !h && (Y || G || X || U || "auto" != m[t].getAttribute(o.sizesAttr))) && (l = N[0] || m[t]);
                    else fe(m[t]);
                    l && !a && fe(l)
                }
            }), ce = E(ae = function(e) {
                w(e.target, o.loadedClass), y(e.target, o.loadingClass), $(e.target, de), b(e.target, "lazyloaded")
            }), de = function(e) {
                ce({
                    target: e.target
                })
            }, he = function(e, t) {
                try {
                    e.contentWindow.location.replace(t)
                } catch (i) {
                    e.src = t
                }
            }, ue = function(e) {
                var t, i = e.getAttribute(o.srcsetAttr);
                (t = o.customMedia[e.getAttribute("data-media") || e.getAttribute("media")]) && e.setAttribute("media", t), i && e.setAttribute("srcset", i)
            }, pe = E(function(e, t, i, s, n) {
                var r, l, a, c, d, u;
                (d = b(e, "lazybeforeunveil", t)).defaultPrevented || (s && (i ? w(e, o.autosizesClass) : e.setAttribute("sizes", s)), l = e.getAttribute(o.srcsetAttr), r = e.getAttribute(o.srcAttr), n && (c = (a = e.parentNode) && f.test(a.nodeName || "")), u = t.firesLoad || "src" in e && (l || r || c), d = {
                    target: e
                }, u && ($(e, se, !0), clearTimeout(D), D = h(se, 2500), w(e, o.loadingClass), $(e, de, !0)), c && v.call(a.getElementsByTagName("source"), ue), l ? e.setAttribute("srcset", l) : r && !c && (J.test(e.nodeName) ? he(e, r) : e.src = r), n && (l || c) && k(e, {
                    src: r
                })), e._lazyRace && delete e._lazyRace, y(e, o.lazyClass), C(function() {
                    (!u || e.complete && e.naturalWidth > 1) && (u ? se(d) : te--, ae(d))
                }, !0)
            }), ge = function() {
                if (!I)
                    if (r.now() - F < 999) h(ge, 999);
                    else {
                        var e = M(function() {
                            o.loadMode = 3, le()
                        });
                        I = !0, o.loadMode = 3, le(), d("scroll", function() {
                            3 == o.loadMode && (o.loadMode = 2), e()
                        }, !0)
                    }
            }, {
                _: function() {
                    F = r.now(), s.elements = i.getElementsByClassName(o.lazyClass), N = i.getElementsByClassName(o.lazyClass + " " + o.preloadClass), d("scroll", le, !0), d("resize", le, !0), t.MutationObserver ? new MutationObserver(le).observe(n, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0
                    }) : (n.addEventListener("DOMNodeInserted", le, !0), n.addEventListener("DOMAttrModified", le, !0), setInterval(le, 999)), d("hashchange", le, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(e) {
                        i.addEventListener(e, le, !0)
                    }), /d$|^c/.test(i.readyState) ? ge() : (d("load", ge), i.addEventListener("DOMContentLoaded", le), h(ge, 2e4)), s.elements.length ? (re(), C._lsFlush()) : le()
                },
                checkElems: le,
                unveil: fe = function(e) {
                    var t, i = K.test(e.nodeName),
                        s = i && (e.getAttribute(o.sizesAttr) || e.getAttribute("sizes")),
                        n = "auto" == s;
                    (!n && I || !i || !e.getAttribute("src") && !e.srcset || e.complete || _(e, o.errorClass) || !_(e, o.lazyClass)) && (t = b(e, "lazyunveilread").detail, n && me.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, te++, pe(e, t, n, s, i))
                }
            }),
            N, I, D, q, F, R, B, U, X, G, Y, V, K, J, Q, Z, ee, te, ie, se, oe, ne, re, le, ae, ce, de, he, ue, pe, fe, ge, me = (_e = E(function(e, t, i, s) {
                var o, n, r;
                if (e._lazysizesWidth = s, s += "px", e.setAttribute("sizes", s), f.test(t.nodeName || ""))
                    for (n = 0, r = (o = t.getElementsByTagName("source")).length; n < r; n++) o[n].setAttribute("sizes", s);
                i.detail.dataAttr || k(e, i.detail)
            }), we = function(e, t, i) {
                var s, o = e.parentNode;
                o && (i = S(e, o, i), (s = b(e, "lazybeforesizes", {
                    width: i,
                    dataAttr: !!t
                })).defaultPrevented || (i = s.detail.width) && i !== e._lazysizesWidth && _e(e, o, s, i))
            }, {
                _: function() {
                    ve = i.getElementsByClassName(o.autosizesClass), d("resize", $e)
                },
                checkElems: $e = M(function() {
                    var e, t = ve.length;
                    if (t)
                        for (e = 0; e < t; e++) we(ve[e])
                }),
                updateElem: we
            }),
            ve, _e, we, ye, $e, be = function() {
                be.i || (be.i = !0, me._(), W._())
            };
        return s = {
            cfg: o,
            autoSizer: me,
            loader: W,
            init: be,
            uP: k,
            aC: w,
            rC: y,
            hC: _,
            fire: b,
            gW: S,
            rAF: C
        }
    }
});
var objectFitImages = function() {
    function e(e, t) {
        return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + e + "' height='" + t + "'%3E%3C/svg%3E"
    }

    function t(e) {
        if (e.srcset && !g && window.picturefill) {
            var t = window.picturefill._;
            e[t.ns] && e[t.ns].evaled || t.fillImg(e, {
                reselect: !0
            }), e[t.ns].curSrc || (e[t.ns].supported = !1, t.fillImg(e, {
                reselect: !0
            })), e.currentSrc = e[t.ns].curSrc || e.src
        }
    }

    function i(e) {
        for (var t = getComputedStyle(e).fontFamily, i, s = {}; null !== (i = d.exec(t));) s[i[1]] = i[2];
        return s
    }

    function s(t, i, s) {
        var o = e(i || 1, s || 0);
        m.call(t, "src") !== o && v.call(t, "src", o)
    }

    function o(e, t) {
        e.naturalWidth ? t(e) : setTimeout(o, 100, e, t)
    }

    function n(e) {
        var n = i(e),
            l = e[c];
        if (n["object-fit"] = n["object-fit"] || "fill", !l.img) {
            if ("fill" === n["object-fit"]) return;
            if (!l.skipTest && u && !n["object-position"]) return
        }
        if (!l.img) {
            l.img = new Image(e.width, e.height), l.img.srcset = m.call(e, "data-ofi-srcset") || e.srcset, l.img.src = m.call(e, "data-ofi-src") || e.src, v.call(e, "data-ofi-src", e.src), e.srcset && v.call(e, "data-ofi-srcset", e.srcset), s(e, e.naturalWidth || e.width, e.naturalHeight || e.height), e.srcset && (e.srcset = "");
            try {
                r(e)
            } catch (e) {
                window.console && console.warn("https://bit.ly/ofi-old-browser")
            }
        }
        t(l.img), e.style.backgroundImage = 'url("' + (l.img.currentSrc || l.img.src).replace(/"/g, '\\"') + '")', e.style.backgroundPosition = n["object-position"] || "center", e.style.backgroundRepeat = "no-repeat", e.style.backgroundOrigin = "content-box", /scale-down/.test(n["object-fit"]) ? o(l.img, function() {
            l.img.naturalWidth > e.width || l.img.naturalHeight > e.height ? e.style.backgroundSize = "contain" : e.style.backgroundSize = "auto"
        }) : e.style.backgroundSize = n["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), o(l.img, function(t) {
            s(e, t.naturalWidth, t.naturalHeight)
        })
    }

    function r(e) {
        var t = {
            get: function t(i) {
                return e[c].img[i || "src"]
            },
            set: function t(i, s) {
                return e[c].img[s || "src"] = i, v.call(e, "data-ofi-" + s, i), n(e), i
            }
        };
        Object.defineProperty(e, "src", t), Object.defineProperty(e, "currentSrc", {
            get: function() {
                return t.get("currentSrc")
            }
        }), Object.defineProperty(e, "srcset", {
            get: function() {
                return t.get("srcset")
            },
            set: function(e) {
                return t.set(e, "srcset")
            }
        })
    }

    function l() {
        function e(e, t) {
            return e[c] && e[c].img && ("src" === t || "srcset" === t) ? e[c].img : e
        }
        p || (HTMLImageElement.prototype.getAttribute = function(t) {
            return m.call(e(this, t), t)
        }, HTMLImageElement.prototype.setAttribute = function(t, i) {
            return v.call(e(this, t), t, String(i))
        })
    }

    function a(e, t) {
        var i = !_ && !e;
        if (t = t || {}, e = e || "img", p && !t.skipTest || !f) return !1;
        "img" === e ? e = document.getElementsByTagName("img") : "string" == typeof e ? e = document.querySelectorAll(e) : "length" in e || (e = [e]);
        for (var s = 0; s < e.length; s++) e[s][c] = e[s][c] || {
            skipTest: t.skipTest
        }, n(e[s]);
        i && (document.body.addEventListener("load", function(e) {
            "IMG" === e.target.tagName && a(e.target, {
                skipTest: t.skipTest
            })
        }, !0), _ = !0, e = "img"), t.watchMQ && window.addEventListener("resize", a.bind(null, e, {
            skipTest: t.skipTest
        }))
    }
    var c = "bfred-it:object-fit-images",
        d = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,
        h = "undefined" == typeof Image ? {
            style: {
                "object-position": 1
            }
        } : new Image,
        u = "object-fit" in h.style,
        p = "object-position" in h.style,
        f = "background-size" in h.style,
        g = "string" == typeof h.currentSrc,
        m = h.getAttribute,
        v = h.setAttribute,
        _ = !1;
    return a.supportsObjectFit = u, a.supportsObjectPosition = p, l(), a
}();
! function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.balanceText = t()
}(this, function() {
    function e() {}

    function t(e, t) {
        Array.prototype.forEach.call(e, t)
    }

    function i(e) {
        "loading" !== document.readyState ? e() : document.addEventListener ? document.addEventListener("DOMContentLoaded", e) : document.attachEvent("onreadystatechange", function() {
            "loading" !== document.readyState && e()
        })
    }

    function s(e, t, i) {
        var s;
        return function o() {
            function n() {
                i || e.apply(r, l), s = null
            }
            var r = this,
                l = arguments;
            s ? clearTimeout(s) : i && e.apply(r, l), s = setTimeout(n, t || 100)
        }
    }

    function o() {
        var e = document.documentElement.style;
        return e.textWrap || e.WebkitTextWrap || e.MozTextWrap || e.MsTextWrap
    }

    function n() {
        this.reset()
    }

    function r(e) {
        return T.some(function(t) {
            return t.start < e && e < t.end
        })
    }

    function l(e, i) {
        var s;
        if (e.nodeType === e.ELEMENT_NODE)
            if ("nowrap" === window.getComputedStyle(e).whiteSpace) {
                var o = e.outerHTML.length;
                T.push({
                    start: S,
                    end: S + o
                }), S += o
            } else t(e.childNodes, function(e) {
                l(e, !0)
            }), i && (S += e.outerHTML.length - e.innerHTML.length);
        else e.nodeType === e.COMMENT_NODE ? S += e.length + 7 : e.nodeType === e.PROCESSING_INSTRUCTION_NODE ? S += e.length + 2 : S += e.length
    }

    function a(e, t, i) {
        if (0 === i) e.style.whiteSpace = t, S = 0, T = [], l(e, !1), e.style.whiteSpace = "nowrap";
        else {
            var s = [];
            T.forEach(function(e) {
                e.start > i && s.push({
                    start: e.start - i,
                    end: e.end - i
                })
            }), T = s
        }
    }

    function c(e) {
        var i = e.querySelectorAll('br[data-owner="balance-text-hyphen"]');
        t(i, function(e) {
            e.outerHTML = ""
        }), t(i = e.querySelectorAll('br[data-owner="balance-text"]'), function(e) {
            e.outerHTML = " "
        });
        var s = e.querySelectorAll('span[data-owner="balance-text-softhyphen"]');
        if (s.length > 0 && t(s, function(e) {
                var t = document.createTextNode("­");
                e.parentNode.insertBefore(t, e), e.parentNode.removeChild(e)
            }), (s = e.querySelectorAll('span[data-owner="balance-text-justify"]')).length > 0) {
            var o = "";
            t(s, function(e) {
                o += e.textContent, e.parentNode.removeChild(e)
            }), e.innerHTML = o
        }
    }

    function d(e, t, i) {
        var s, o, n, r, l;
        return r = (t = t.trim()).split(" ").length, t += " ", r < 2 ? t : ((n = document.createElement("span")).innerHTML = t, e.appendChild(n), o = n.offsetWidth, n.parentNode.removeChild(n), l = Math.floor((i - o) / (r - 1)), n.style.wordSpacing = l + "px", n.setAttribute("data-owner", "balance-text-justify"), (s = document.createElement("div")).appendChild(n), s.innerHTML)
    }

    function h(e, t) {
        var i = /([^\S\u00a0]|-|\u2014|\u2013|\u00ad)(?![^<]*>)/g,
            s;
        if (!k)
            for (k = [], s = i.exec(e); null !== s;) r(s.index) || k.push(s.index), s = i.exec(e);
        return -1 !== k.indexOf(t)
    }

    function u(e, t) {
        return 0 === t || t === e.length || h(e, t - 1) && !h(e, t)
    }

    function p(e, t, i, s, o, n, r) {
        var l;
        if (t && "string" == typeof t)
            for (;;) {
                for (; !u(t, n);) n += o;
                if (e.innerHTML = t.substr(0, n), l = e.offsetWidth, o < 0) {
                    if (l <= s || l <= 0 || 0 === n) break
                } else if (s <= l || i <= l || n === t.length) break;
                n += o
            }
        r.index = n, r.width = l
    }

    function f(e, t) {
        var i, s, o, n = document.createElement("div");
        return n.style.display = "block", n.style.position = "absolute", n.style.bottom = 0, n.style.right = 0, n.style.width = 0, n.style.height = 0, n.style.margin = 0, n.style.padding = 0, n.style.visibility = "hidden", n.style.overflow = "hidden", (s = document.createElement("span")).style.fontSize = "2000px", s.innerHTML = "&nbsp;", n.appendChild(s), e.appendChild(n), i = s.getBoundingClientRect(), n.parentNode.removeChild(n), t / (o = i.height / i.width)
    }

    function g(e) {
        return e ? "string" == typeof e ? document.querySelectorAll(e) : e.tagName && e.querySelectorAll ? [e] : e : []
    }

    function m(e) {
        t(g(e), function(e) {
            var t = 5e3;
            c(e);
            var i = e.style.whiteSpace,
                s = e.style.float,
                o = e.style.display,
                r = e.style.position,
                l = e.style.lineHeight;
            e.style.lineHeight = "normal";
            var h = e.offsetWidth,
                u = e.offsetHeight;
            e.style.whiteSpace = "nowrap", e.style.float = "none", e.style.display = "inline", e.style.position = "static";
            var g = e.offsetWidth,
                m = e.offsetHeight,
                v = "pre-wrap" === i ? 0 : f(e, m);
            if (h > 0 && g > h && g < 5e3) {
                for (var _ = e.innerHTML, w = "", y = "", $ = A(e), b, T = Math.round(u / m), S = 0, C, x, j, H, P, O, z; T > 1;) k = null, a(e, i, S), p(e, _, h, C = Math.round((g + v) / T - v), -1, x = Math.round((_.length + 1) / T) - 1, j = new n), H = new n, p(e, _, h, C, 1, x = j.index, H), j.reset(), p(e, _, h, C, -1, x = H.index, j), P = 0 === j.index ? H.index : h < H.width || j.index === H.index ? j.index : Math.abs(C - j.width) < Math.abs(H.width - C) ? j.index : H.index, y = _.substr(0, P).replace(/\s$/, ""), (z = Boolean(y.match(/\u00ad$/))) && (y = y.replace(/\u00ad$/, '<span data-owner="balance-text-softhyphen">-</span>')), $ ? w += d(e, y, h) : (w += y, w += (O = z || Boolean(y.match(/(-|\u2014|\u2013)$/))) ? '<br data-owner="balance-text-hyphen" />' : '<br data-owner="balance-text" />'), _ = _.substr(P), S = P, T--, e.innerHTML = _, g = e.offsetWidth;
                e.innerHTML = $ ? w + d(e, _, h) : w + _
            }
            e.style.whiteSpace = i, e.style.float = s, e.style.display = o, e.style.position = r, e.style.lineHeight = l
        })
    }

    function v() {
        var e, t = g(C.sel.join(",")),
            i;
        m(Array.prototype.concat.apply(C.el, t))
    }

    function _() {
        x || (i(v), window.addEventListener("load", v), window.addEventListener("resize", s(v)), x = !0)
    }

    function w(e) {
        "string" == typeof e ? C.sel.push(e) : t(g(e), function(e) {
            C.el.push(e)
        }), _(), v()
    }

    function y(e) {
        "string" == typeof e ? C.sel = C.sel.filter(function(t) {
            return t !== e
        }) : (e = g(e), C.el = C.el.filter(function(t) {
            return -1 === e.indexOf(t)
        }))
    }

    function $() {
        j || (C.sel.push(".balance-text"), _(), j = !0)
    }

    function b(e, t) {
        e ? t && !0 === t.watch ? w(e) : t && !1 === t.watch ? y(e) : m(e) : $()
    }
    var k, T, S, C = {
            sel: [],
            el: []
        },
        x = !1,
        j = !1;
    n.prototype.reset = function() {
        this.index = 0, this.width = 0
    };
    var A = function(e) {
        var t;
        return "justify" === (e.currentStyle || window.getComputedStyle(e, null)).textAlign
    };
    return b.updateWatched = v, o() ? (e.updateWatched = e, e) : b
}),
function() {
    var e, t, i, s, o = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        n = function(e, t) {
            function i() {
                this.constructor = e
            }
            for (var s in t) r.call(t, s) && (e[s] = t[s]);
            return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
        },
        r = {}.hasOwnProperty;
    (s = function() {
        function e() {
            this.options_index = 0, this.parsed = []
        }
        return e.prototype.add_node = function(e) {
            return "OPTGROUP" === e.nodeName.toUpperCase() ? this.add_group(e) : this.add_option(e)
        }, e.prototype.add_group = function(e) {
            var t, i, s, o, n, r;
            for (t = this.parsed.length, this.parsed.push({
                    array_index: t,
                    group: !0,
                    label: e.label,
                    title: e.title ? e.title : void 0,
                    children: 0,
                    disabled: e.disabled,
                    classes: e.className
                }), r = [], i = 0, s = (n = e.childNodes).length; i < s; i++) o = n[i], r.push(this.add_option(o, t, e.disabled));
            return r
        }, e.prototype.add_option = function(e, t, i) {
            if ("OPTION" === e.nodeName.toUpperCase()) return "" !== e.text ? (null != t && (this.parsed[t].children += 1), this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                value: e.value,
                text: e.text,
                html: e.innerHTML,
                title: e.title ? e.title : void 0,
                selected: e.selected,
                disabled: !0 === i ? i : e.disabled,
                group_array_index: t,
                group_label: null != t ? this.parsed[t].label : null,
                classes: e.className,
                style: e.style.cssText
            })) : this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                empty: !0
            }), this.options_index += 1
        }, e
    }()).select_to_array = function(e) {
        var t, i, o, n, r;
        for (n = new s, i = 0, o = (r = e.childNodes).length; i < o; i++) t = r[i], n.add_node(t);
        return n.parsed
    }, t = function() {
        function e(t, i) {
            this.form_field = t, this.options = null != i ? i : {}, this.label_click_handler = o(this.label_click_handler, this), e.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready())
        }
        return e.prototype.set_default_values = function() {
            return this.click_test_action = (e = this, function(t) {
                return e.test_active_click(t)
            }), this.activate_action = function(e) {
                return function(t) {
                    return e.activate_field(t)
                }
            }(this), this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.is_rtl = this.options.rtl || /\bchosen-rtl\b/.test(this.form_field.className), this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text && this.options.allow_single_deselect, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null == this.options.enable_split_word_search || this.options.enable_split_word_search, this.group_search = null == this.options.group_search || this.options.group_search, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null == this.options.single_backstroke_delete || this.options.single_backstroke_delete, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null == this.options.display_selected_options || this.options.display_selected_options, this.display_disabled_options = null == this.options.display_disabled_options || this.options.display_disabled_options, this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1, this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY, this.case_sensitive_search = this.options.case_sensitive_search || !1, this.hide_results_on_select = null == this.options.hide_results_on_select || this.options.hide_results_on_select;
            var e
        }, e.prototype.set_default_text = function() {
            return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || e.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || e.default_single_text, this.default_text = this.escape_html(this.default_text), this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || e.default_no_result_text
        }, e.prototype.choice_label = function(e) {
            return this.include_group_label_in_selected && null != e.group_label ? "<b class='group-name'>" + e.group_label + "</b>" + e.html : e.html
        }, e.prototype.mouse_enter = function() {
            return this.mouse_on_container = !0
        }, e.prototype.mouse_leave = function() {
            return this.mouse_on_container = !1
        }, e.prototype.input_focus = function(e) {
            if (this.is_multiple) {
                if (!this.active_field) return setTimeout(function(e) {
                    return function() {
                        return e.container_mousedown()
                    }
                }(this), 50)
            } else if (!this.active_field) return this.activate_field()
        }, e.prototype.input_blur = function(e) {
            if (!this.mouse_on_container) return this.active_field = !1, setTimeout(function(e) {
                return function() {
                    return e.blur_test()
                }
            }(this), 100)
        }, e.prototype.label_click_handler = function(e) {
            return this.is_multiple ? this.container_mousedown(e) : this.activate_field()
        }, e.prototype.results_option_build = function(e) {
            var t, i, s, o, n, r, l;
            for (t = "", l = 0, o = 0, n = (r = this.results_data).length; o < n && (s = "", "" !== (s = (i = r[o]).group ? this.result_add_group(i) : this.result_add_option(i)) && (l++, t += s), (null != e ? e.first : void 0) && (i.selected && this.is_multiple ? this.choice_build(i) : i.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(i))), !(l >= this.max_shown_results)); o++);
            return t
        }, e.prototype.result_add_option = function(e) {
            var t, i;
            return e.search_match && this.include_option_in_results(e) ? (t = [], e.disabled || e.selected && this.is_multiple || t.push("active-result"), !e.disabled || e.selected && this.is_multiple || t.push("disabled-result"), e.selected && t.push("result-selected"), null != e.group_array_index && t.push("group-option"), "" !== e.classes && t.push(e.classes), (i = document.createElement("li")).className = t.join(" "), i.style.cssText = e.style, i.setAttribute("data-option-array-index", e.array_index), i.innerHTML = e.highlighted_html || e.html, e.title && (i.title = e.title), this.outerHTML(i)) : ""
        }, e.prototype.result_add_group = function(e) {
            var t, i;
            return (e.search_match || e.group_match) && e.active_options > 0 ? ((t = []).push("group-result"), e.classes && t.push(e.classes), (i = document.createElement("li")).className = t.join(" "), i.innerHTML = e.highlighted_html || this.escape_html(e.label), e.title && (i.title = e.title), this.outerHTML(i)) : ""
        }, e.prototype.results_update_field = function() {
            if (this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing) return this.winnow_results()
        }, e.prototype.reset_single_select_options = function() {
            var e, t, i, s, o;
            for (o = [], e = 0, t = (i = this.results_data).length; e < t; e++)(s = i[e]).selected ? o.push(s.selected = !1) : o.push(void 0);
            return o
        }, e.prototype.results_toggle = function() {
            return this.results_showing ? this.results_hide() : this.results_show()
        }, e.prototype.results_search = function(e) {
            return this.results_showing ? this.winnow_results() : this.results_show()
        }, e.prototype.winnow_results = function() {
            var e, t, i, s, o, n, r, l, a, c, d, h, u, p, f;
            for (this.no_results_clear(), c = 0, e = (r = this.get_search_text()).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), a = this.get_search_regex(e), i = 0, s = (l = this.results_data).length; i < s; i++)(o = l[i]).search_match = !1, d = null, h = null, o.highlighted_html = "", this.include_option_in_results(o) && (o.group && (o.group_match = !1, o.active_options = 0), null != o.group_array_index && this.results_data[o.group_array_index] && (0 === (d = this.results_data[o.group_array_index]).active_options && d.search_match && (c += 1), d.active_options += 1), f = o.group ? o.label : o.text, o.group && !this.group_search || (h = this.search_string_match(f, a), o.search_match = null != h, o.search_match && !o.group && (c += 1), o.search_match ? (r.length && (u = h.index, n = f.slice(0, u), t = f.slice(u, u + r.length), p = f.slice(u + r.length), o.highlighted_html = this.escape_html(n) + "<em>" + this.escape_html(t) + "</em>" + this.escape_html(p)), null != d && (d.group_match = !0)) : null != o.group_array_index && this.results_data[o.group_array_index].search_match && (o.search_match = !0)));
            return this.result_clear_highlight(), c < 1 && r.length ? (this.update_results_content(""), this.no_results(r)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
        }, e.prototype.get_search_regex = function(e) {
            var t, i;
            return i = this.search_contains ? e : "(^|\\s|\\b)" + e + "[^\\s]*", this.enable_split_word_search || this.search_contains || (i = "^" + i), t = this.case_sensitive_search ? "" : "i", new RegExp(i, t)
        }, e.prototype.search_string_match = function(e, t) {
            var i;
            return i = t.exec(e), !this.search_contains && (null != i ? i[1] : void 0) && (i.index += 1), i
        }, e.prototype.choices_count = function() {
            var e, t, i;
            if (null != this.selected_option_count) return this.selected_option_count;
            for (this.selected_option_count = 0, e = 0, t = (i = this.form_field.options).length; e < t; e++) i[e].selected && (this.selected_option_count += 1);
            return this.selected_option_count
        }, e.prototype.choices_click = function(e) {
            if (e.preventDefault(), this.activate_field(), !this.results_showing && !this.is_disabled) return this.results_show()
        }, e.prototype.keydown_checker = function(e) {
            var t, i;
            switch (i = null != (t = e.which) ? t : e.keyCode, this.search_field_scale(), 8 !== i && this.pending_backstroke && this.clear_backstroke(), i) {
                case 8:
                    this.backstroke_length = this.get_search_field_value().length;
                    break;
                case 9:
                    this.results_showing && !this.is_multiple && this.result_select(e), this.mouse_on_container = !1;
                    break;
                case 13:
                case 27:
                    this.results_showing && e.preventDefault();
                    break;
                case 32:
                    this.disable_search && e.preventDefault();
                    break;
                case 38:
                    e.preventDefault(), this.keyup_arrow();
                    break;
                case 40:
                    e.preventDefault(), this.keydown_arrow()
            }
        }, e.prototype.keyup_checker = function(e) {
            var t, i;
            switch (i = null != (t = e.which) ? t : e.keyCode, this.search_field_scale(), i) {
                case 8:
                    this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0 ? this.keydown_backstroke() : this.pending_backstroke || (this.result_clear_highlight(), this.results_search());
                    break;
                case 13:
                    e.preventDefault(), this.results_showing && this.result_select(e);
                    break;
                case 27:
                    this.results_showing && this.results_hide();
                    break;
                case 9:
                case 16:
                case 17:
                case 18:
                case 38:
                case 40:
                case 91:
                    break;
                default:
                    this.results_search()
            }
        }, e.prototype.clipboard_event_checker = function(e) {
            if (!this.is_disabled) return setTimeout(function(e) {
                return function() {
                    return e.results_search()
                }
            }(this), 50)
        }, e.prototype.container_width = function() {
            return null != this.options.width ? this.options.width : this.form_field.offsetWidth + "px"
        }, e.prototype.include_option_in_results = function(e) {
            return !(this.is_multiple && !this.display_selected_options && e.selected || !this.display_disabled_options && e.disabled || e.empty)
        }, e.prototype.search_results_touchstart = function(e) {
            return this.touch_started = !0, this.search_results_mouseover(e)
        }, e.prototype.search_results_touchmove = function(e) {
            return this.touch_started = !1, this.search_results_mouseout(e)
        }, e.prototype.search_results_touchend = function(e) {
            if (this.touch_started) return this.search_results_mouseup(e)
        }, e.prototype.outerHTML = function(e) {
            var t;
            return e.outerHTML ? e.outerHTML : ((t = document.createElement("div")).appendChild(e), t.innerHTML)
        }, e.prototype.get_single_html = function() {
            return '<a class="chosen-single chosen-default">\n  <span>' + this.default_text + '</span>\n  <div><b></b></div>\n</a>\n<div class="chosen-drop">\n  <div class="chosen-search">\n    <input class="chosen-search-input" type="text" autocomplete="off" />\n  </div>\n  <ul class="chosen-results"></ul>\n</div>'
        }, e.prototype.get_multi_html = function() {
            return '<ul class="chosen-choices">\n  <li class="search-field">\n    <input class="chosen-search-input" type="text" autocomplete="off" value="' + this.default_text + '" />\n  </li>\n</ul>\n<div class="chosen-drop">\n  <ul class="chosen-results"></ul>\n</div>'
        }, e.prototype.get_no_results_html = function(e) {
            return '<li class="no-results">\n  ' + this.results_none_found + " <span>" + this.escape_html(e) + "</span>\n</li>"
        }, e.browser_is_supported = function() {
            return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : !(/iP(od|hone)/i.test(window.navigator.userAgent) || /IEMobile/i.test(window.navigator.userAgent) || /Windows Phone/i.test(window.navigator.userAgent) || /BlackBerry/i.test(window.navigator.userAgent) || /BB10/i.test(window.navigator.userAgent) || /Android.*Mobile/i.test(window.navigator.userAgent))
        }, e.default_multiple_text = "Select Some Options", e.default_single_text = "Select an Option", e.default_no_result_text = "No results match", e
    }(), (e = jQuery).fn.extend({
        chosen: function(s) {
            return t.browser_is_supported() ? this.each(function(t) {
                var o, n;
                n = (o = e(this)).data("chosen"), "destroy" !== s ? n instanceof i || o.data("chosen", new i(this, s)) : n instanceof i && n.destroy()
            }) : this
        }
    }), i = function(i) {
        function o() {
            return o.__super__.constructor.apply(this, arguments)
        }
        return n(o, t), o.prototype.setup = function() {
                return this.form_field_jq = e(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex
            }, o.prototype.set_up_html = function() {
                var t, i;
                return (t = ["chosen-container"]).push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && t.push(this.form_field.className), this.is_rtl && t.push("chosen-rtl"), i = {
                    class: t.join(" "),
                    title: this.form_field.title
                }, this.form_field.id.length && (i.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = e("<div />", i), this.container.width(this.container_width()), this.is_multiple ? this.container.html(this.get_multi_html()) : this.container.html(this.get_single_html()), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior()
            }, o.prototype.on_ready = function() {
                return this.form_field_jq.trigger("chosen:ready", {
                    chosen: this
                })
            }, o.prototype.register_observers = function() {
                return this.container.on("touchstart.chosen", (e = this, function(t) {
                    e.container_mousedown(t)
                })), this.container.on("touchend.chosen", function(e) {
                    return function(t) {
                        e.container_mouseup(t)
                    }
                }(this)), this.container.on("mousedown.chosen", function(e) {
                    return function(t) {
                        e.container_mousedown(t)
                    }
                }(this)), this.container.on("mouseup.chosen", function(e) {
                    return function(t) {
                        e.container_mouseup(t)
                    }
                }(this)), this.container.on("mouseenter.chosen", function(e) {
                    return function(t) {
                        e.mouse_enter(t)
                    }
                }(this)), this.container.on("mouseleave.chosen", function(e) {
                    return function(t) {
                        e.mouse_leave(t)
                    }
                }(this)), this.search_results.on("mouseup.chosen", function(e) {
                    return function(t) {
                        e.search_results_mouseup(t)
                    }
                }(this)), this.search_results.on("mouseover.chosen", function(e) {
                    return function(t) {
                        e.search_results_mouseover(t)
                    }
                }(this)), this.search_results.on("mouseout.chosen", function(e) {
                    return function(t) {
                        e.search_results_mouseout(t)
                    }
                }(this)), this.search_results.on("mousewheel.chosen DOMMouseScroll.chosen", function(e) {
                    return function(t) {
                        e.search_results_mousewheel(t)
                    }
                }(this)), this.search_results.on("touchstart.chosen", function(e) {
                    return function(t) {
                        e.search_results_touchstart(t)
                    }
                }(this)), this.search_results.on("touchmove.chosen", function(e) {
                    return function(t) {
                        e.search_results_touchmove(t)
                    }
                }(this)), this.search_results.on("touchend.chosen", function(e) {
                    return function(t) {
                        e.search_results_touchend(t)
                    }
                }(this)), this.form_field_jq.on("chosen:updated.chosen", function(e) {
                    return function(t) {
                        e.results_update_field(t)
                    }
                }(this)), this.form_field_jq.on("chosen:activate.chosen", function(e) {
                    return function(t) {
                        e.activate_field(t)
                    }
                }(this)), this.form_field_jq.on("chosen:open.chosen", function(e) {
                    return function(t) {
                        e.container_mousedown(t)
                    }
                }(this)), this.form_field_jq.on("chosen:close.chosen", function(e) {
                    return function(t) {
                        e.close_field(t)
                    }
                }(this)), this.search_field.on("blur.chosen", function(e) {
                    return function(t) {
                        e.input_blur(t)
                    }
                }(this)), this.search_field.on("keyup.chosen", function(e) {
                    return function(t) {
                        e.keyup_checker(t)
                    }
                }(this)), this.search_field.on("keydown.chosen", function(e) {
                    return function(t) {
                        e.keydown_checker(t)
                    }
                }(this)), this.search_field.on("focus.chosen", function(e) {
                    return function(t) {
                        e.input_focus(t)
                    }
                }(this)), this.search_field.on("cut.chosen", function(e) {
                    return function(t) {
                        e.clipboard_event_checker(t)
                    }
                }(this)), this.search_field.on("paste.chosen", function(e) {
                    return function(t) {
                        e.clipboard_event_checker(t)
                    }
                }(this)), this.is_multiple ? this.search_choices.on("click.chosen", function(e) {
                    return function(t) {
                        e.choices_click(t)
                    }
                }(this)) : this.container.on("click.chosen", function(e) {
                    e.preventDefault()
                });
                var e
            }, o.prototype.destroy = function() {
                return e(this.container[0].ownerDocument).off("click.chosen", this.click_test_action), this.form_field_label.length > 0 && this.form_field_label.off("click.chosen"), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
            }, o.prototype.search_field_disabled = function() {
                return this.is_disabled = this.form_field.disabled || this.form_field_jq.parents("fieldset").is(":disabled"), this.container.toggleClass("chosen-disabled", this.is_disabled), this.search_field[0].disabled = this.is_disabled, this.is_multiple || this.selected_item.off("focus.chosen", this.activate_field), this.is_disabled ? this.close_field() : this.is_multiple ? void 0 : this.selected_item.on("focus.chosen", this.activate_field)
            }, o.prototype.container_mousedown = function(t) {
                var i;
                if (!this.is_disabled) return !t || "mousedown" !== (i = t.type) && "touchstart" !== i || this.results_showing || t.preventDefault(), null != t && e(t.target).hasClass("search-choice-close") ? void 0 : (this.active_field ? this.is_multiple || !t || e(t.target)[0] !== this.selected_item[0] && !e(t.target).parents("a.chosen-single").length || (t.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), e(this.container[0].ownerDocument).on("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
            }, o.prototype.container_mouseup = function(e) {
                if ("ABBR" === e.target.nodeName && !this.is_disabled) return this.results_reset(e)
            }, o.prototype.search_results_mousewheel = function(e) {
                var t;
                if (e.originalEvent && (t = e.originalEvent.deltaY || -e.originalEvent.wheelDelta || e.originalEvent.detail), null != t) return e.preventDefault(), "DOMMouseScroll" === e.type && (t *= 40), this.search_results.scrollTop(t + this.search_results.scrollTop())
            }, o.prototype.blur_test = function(e) {
                if (!this.active_field && this.container.hasClass("chosen-container-active")) return this.close_field()
            }, o.prototype.close_field = function() {
                return e(this.container[0].ownerDocument).off("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale(), this.search_field.blur()
            }, o.prototype.activate_field = function() {
                if (!this.is_disabled) return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
            },
            o.prototype.test_active_click = function(t) {
                var i;
                return (i = e(t.target).closest(".chosen-container")).length && this.container[0] === i[0] ? this.active_field = !0 : this.close_field()
            }, o.prototype.results_build = function() {
                return this.parsing = !0, this.selected_option_count = null, this.results_data = s.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
                    first: !0
                })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
            }, o.prototype.result_do_highlight = function(e) {
                var t, i, s, o, n;
                if (e.length) {
                    if (this.result_clear_highlight(), this.result_highlight = e, this.result_highlight.addClass("highlighted"), o = (s = parseInt(this.search_results.css("maxHeight"), 10)) + (n = this.search_results.scrollTop()), (t = (i = this.result_highlight.position().top + this.search_results.scrollTop()) + this.result_highlight.outerHeight()) >= o) return this.search_results.scrollTop(t - s > 0 ? t - s : 0);
                    if (i < n) return this.search_results.scrollTop(i)
                }
            }, o.prototype.result_clear_highlight = function() {
                return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
            }, o.prototype.results_show = function() {
                return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.get_search_field_value()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
                    chosen: this
                }))
            }, o.prototype.update_results_content = function(e) {
                return this.search_results.html(e)
            }, o.prototype.results_hide = function() {
                return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                    chosen: this
                })), this.results_showing = !1
            }, o.prototype.set_tab_index = function(e) {
                var t;
                if (this.form_field.tabIndex) return t = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = t
            }, o.prototype.set_label_behavior = function() {
                if (this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = e("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0) return this.form_field_label.on("click.chosen", this.label_click_handler)
            }, o.prototype.show_search_field_default = function() {
                return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
            }, o.prototype.search_results_mouseup = function(t) {
                var i;
                if ((i = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first()).length) return this.result_highlight = i, this.result_select(t), this.search_field.focus()
            }, o.prototype.search_results_mouseover = function(t) {
                var i;
                if (i = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first()) return this.result_do_highlight(i)
            }, o.prototype.search_results_mouseout = function(t) {
                if (e(t.target).hasClass("active-result") || e(t.target).parents(".active-result").first()) return this.result_clear_highlight()
            }, o.prototype.choice_build = function(t) {
                var i, s;
                return i = e("<li />", {
                    class: "search-choice"
                }).html("<span>" + this.choice_label(t) + "</span>"), t.disabled ? i.addClass("search-choice-disabled") : ((s = e("<a />", {
                    class: "search-choice-close",
                    "data-option-array-index": t.array_index
                })).on("click.chosen", function(e) {
                    return function(t) {
                        return e.choice_destroy_link_click(t)
                    }
                }(this)), i.append(s)), this.search_container.before(i)
            }, o.prototype.choice_destroy_link_click = function(t) {
                if (t.preventDefault(), t.stopPropagation(), !this.is_disabled) return this.choice_destroy(e(t.target))
            }, o.prototype.choice_destroy = function(e) {
                if (this.result_deselect(e[0].getAttribute("data-option-array-index"))) return this.active_field ? this.search_field.focus() : this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.get_search_field_value().length < 1 && this.results_hide(), e.parents("li").first().remove(), this.search_field_scale()
            }, o.prototype.results_reset = function() {
                if (this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.trigger_form_field_change(), this.active_field) return this.results_hide()
            }, o.prototype.results_reset_cleanup = function() {
                return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
            }, o.prototype.result_select = function(e) {
                var t, i;
                if (this.result_highlight) return t = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                }), !1) : (this.is_multiple ? t.removeClass("active-result") : this.reset_single_select_options(), t.addClass("result-selected"), (i = this.results_data[t[0].getAttribute("data-option-array-index")]).selected = !0, this.form_field.options[i.options_index].selected = !0, this.selected_option_count = null, this.search_field.val(""), this.is_multiple ? this.choice_build(i) : this.single_set_selected_text(this.choice_label(i)), this.is_multiple && (!this.hide_results_on_select || e.metaKey || e.ctrlKey) ? this.winnow_results() : (this.results_hide(), this.show_search_field_default()), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.trigger_form_field_change({
                    selected: this.form_field.options[i.options_index].value
                }), this.current_selectedIndex = this.form_field.selectedIndex, e.preventDefault(), this.search_field_scale())
            }, o.prototype.single_set_selected_text = function(e) {
                return null == e && (e = this.default_text), e === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(e)
            }, o.prototype.result_deselect = function(e) {
                var t;
                return t = this.results_data[e], !this.form_field.options[t.options_index].disabled && (t.selected = !1, this.form_field.options[t.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.trigger_form_field_change({
                    deselected: this.form_field.options[t.options_index].value
                }), this.search_field_scale(), !0)
            }, o.prototype.single_deselect_control_build = function() {
                if (this.allow_single_deselect) return this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")
            }, o.prototype.get_search_field_value = function() {
                return this.search_field.val()
            }, o.prototype.get_search_text = function() {
                return e.trim(this.get_search_field_value())
            }, o.prototype.escape_html = function(t) {
                return e("<div/>").text(t).html()
            }, o.prototype.winnow_results_set_highlight = function() {
                var e, t;
                if (null != (e = (t = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result")).length ? t.first() : this.search_results.find(".active-result").first())) return this.result_do_highlight(e)
            }, o.prototype.no_results = function(e) {
                var t;
                return t = this.get_no_results_html(e), this.search_results.append(t), this.form_field_jq.trigger("chosen:no_results", {
                    chosen: this
                })
            }, o.prototype.no_results_clear = function() {
                return this.search_results.find(".no-results").remove()
            }, o.prototype.keydown_arrow = function() {
                var e;
                return this.results_showing && this.result_highlight ? (e = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(e) : void 0 : this.results_show()
            }, o.prototype.keyup_arrow = function() {
                var e;
                return this.results_showing || this.is_multiple ? this.result_highlight ? (e = this.result_highlight.prevAll("li.active-result")).length ? this.result_do_highlight(e.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight()) : void 0 : this.results_show()
            }, o.prototype.keydown_backstroke = function() {
                var e;
                return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (e = this.search_container.siblings("li.search-choice").last()).length && !e.hasClass("search-choice-disabled") ? (this.pending_backstroke = e, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0
            }, o.prototype.clear_backstroke = function() {
                return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
            }, o.prototype.search_field_scale = function() {
                var t, i, s, o, n, r, l;
                if (this.is_multiple) {
                    for (n = {
                            position: "absolute",
                            left: "-1000px",
                            top: "-1000px",
                            display: "none",
                            whiteSpace: "pre"
                        }, i = 0, s = (r = ["fontSize", "fontStyle", "fontWeight", "fontFamily", "lineHeight", "textTransform", "letterSpacing"]).length; i < s; i++) n[o = r[i]] = this.search_field.css(o);
                    return (t = e("<div />").css(n)).text(this.get_search_field_value()), e("body").append(t), l = t.width() + 25, t.remove(), this.container.is(":visible") && (l = Math.min(this.container.outerWidth() - 10, l)), this.search_field.width(l)
                }
            }, o.prototype.trigger_form_field_change = function(e) {
                return this.form_field_jq.trigger("input", e), this.form_field_jq.trigger("change", e)
            }, o
    }()
}.call(this),
    function(e) {
        var t;
        if ("function" == typeof define && define.amd && (define(e), t = !0), "object" == typeof exports && (module.exports = e(), t = !0), !t) {
            var i = window.Cookies,
                s = window.Cookies = e();
            s.noConflict = function() {
                return window.Cookies = i, s
            }
        }
    }(function() {
        function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var i = arguments[e];
                for (var s in i) t[s] = i[s]
            }
            return t
        }

        function t(e) {
            return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
        }

        function i(s) {
            function o() {}

            function n(t, i, n) {
                if ("undefined" != typeof document) {
                    "number" == typeof(n = e({
                        path: "/"
                    }, o.defaults, n)).expires && (n.expires = new Date(1 * new Date + 864e5 * n.expires)), n.expires = n.expires ? n.expires.toUTCString() : "";
                    try {
                        var r = JSON.stringify(i);
                        /^[\{\[]/.test(r) && (i = r)
                    } catch (e) {}
                    i = s.write ? s.write(i, t) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                    var l = "";
                    for (var a in n) n[a] && (l += "; " + a, !0 !== n[a] && (l += "=" + n[a].split(";")[0]));
                    return document.cookie = t + "=" + i + l
                }
            }

            function r(e, i) {
                if ("undefined" != typeof document) {
                    for (var o = {}, n = document.cookie ? document.cookie.split("; ") : [], r = 0; r < n.length; r++) {
                        var l = n[r].split("="),
                            a = l.slice(1).join("=");
                        i || '"' !== a.charAt(0) || (a = a.slice(1, -1));
                        try {
                            var c = t(l[0]);
                            if (a = (s.read || s)(a, c) || t(a), i) try {
                                a = JSON.parse(a)
                            } catch (e) {}
                            if (o[c] = a, e === c) break
                        } catch (e) {}
                    }
                    return e ? o[e] : o
                }
            }
            return o.set = n, o.get = function(e) {
                return r(e, !1)
            }, o.getJSON = function(e) {
                return r(e, !0)
            }, o.remove = function(t, i) {
                n(t, "", e(i, {
                    expires: -1
                }))
            }, o.defaults = {}, o.withConverter = i, o
        }
        return i(function() {})
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        var t = window.Slick || {};
        (t = function() {
            function t(t, s) {
                var o = this,
                    n;
                o.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(t),
                    appendDots: e(t),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(t, i) {
                        return e('<button type="button" />').text(i + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, o.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, e.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = e(t), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, n = e(t).data("slick") || {}, o.options = e.extend({}, o.defaults, s, n), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, void 0 !== document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = e.proxy(o.autoPlay, o), o.autoPlayClear = e.proxy(o.autoPlayClear, o), o.autoPlayIterator = e.proxy(o.autoPlayIterator, o), o.changeSlide = e.proxy(o.changeSlide, o), o.clickHandler = e.proxy(o.clickHandler, o), o.selectHandler = e.proxy(o.selectHandler, o), o.setPosition = e.proxy(o.setPosition, o), o.swipeHandler = e.proxy(o.swipeHandler, o), o.dragHandler = e.proxy(o.dragHandler, o), o.keyHandler = e.proxy(o.keyHandler, o), o.instanceUid = i++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
            }
            var i = 0;
            return t
        }()).prototype.activateADA = function() {
            var e;
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, s) {
            var o = this;
            if ("boolean" == typeof i) s = i, i = null;
            else if (i < 0 || i >= o.slideCount) return !1;
            o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : s ? e(t).insertBefore(o.$slides.eq(i)) : e(t).insertAfter(o.$slides.eq(i)) : !0 === s ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(t, i) {
                e(i).attr("data-slick-index", t)
            }), o.$slidesCache = o.$slides, o.reinit()
        }, t.prototype.animateHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: t
                }, e.options.speed)
            }
        }, t.prototype.animateSlide = function(t, i) {
            var s = {},
                o = this;
            o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
                left: t
            }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
                top: t
            }, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
                animStart: o.currentLeft
            }).animate({
                animStart: t
            }, {
                duration: o.options.speed,
                easing: o.options.easing,
                step: function(e) {
                    e = Math.ceil(e), !1 === o.options.vertical ? (s[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(s)) : (s[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(s))
                },
                complete: function() {
                    i && i.call()
                }
            })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? s[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : s[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(s), i && setTimeout(function() {
                o.disableTransition(), i.call()
            }, o.options.speed))
        }, t.prototype.getNavTarget = function() {
            var t = this,
                i = t.options.asNavFor;
            return i && null !== i && (i = e(i).not(t.$slider)), i
        }, t.prototype.asNavFor = function(t) {
            var i, s = this.getNavTarget();
            null !== s && "object" == typeof s && s.each(function() {
                var i = e(this).slick("getSlick");
                i.unslicked || i.slideHandler(t, !0)
            })
        }, t.prototype.applyTransition = function(e) {
            var t = this,
                i = {};
            !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, t.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function() {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function() {
            var e = this,
                t = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
        }, t.prototype.buildArrows = function() {
            var t = this;
            !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, t.prototype.buildDots = function() {
            var t = this,
                i, s;
            if (!0 === t.options.dots && t.slideCount > t.options.slidesToShow) {
                for (t.$slider.addClass("slick-dotted"), s = e("<ul />").addClass(t.options.dotsClass), i = 0; i <= t.getDotCount(); i += 1) s.append(e("<li />").append(t.options.customPaging.call(this, t, i)));
                t.$dots = s.appendTo(t.options.appendDots), t.$dots.find("li").first().addClass("slick-active")
            }
        }, t.prototype.buildOut = function() {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
                e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
            }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
        }, t.prototype.buildRows = function() {
            var e = this,
                t, i, s, o, n, r, l;
            if (o = document.createDocumentFragment(), r = e.$slider.children(), e.options.rows > 0) {
                for (l = e.options.slidesPerRow * e.options.rows, n = Math.ceil(r.length / l), t = 0; t < n; t++) {
                    var a = document.createElement("div");
                    for (i = 0; i < e.options.rows; i++) {
                        var c = document.createElement("div");
                        for (s = 0; s < e.options.slidesPerRow; s++) {
                            var d = t * l + (i * e.options.slidesPerRow + s);
                            r.get(d) && c.appendChild(r.get(d))
                        }
                        a.appendChild(c)
                    }
                    o.appendChild(a)
                }
                e.$slider.empty().append(o), e.$slider.children().children().children().css({
                    width: 100 / e.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, t.prototype.checkResponsive = function(t, i) {
            var s = this,
                o, n, r, l = !1,
                a = s.$slider.width(),
                c = window.innerWidth || e(window).width();
            if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = a : "min" === s.respondTo && (r = Math.min(c, a)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                for (o in n = null, s.breakpoints) s.breakpoints.hasOwnProperty(o) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[o] && (n = s.breakpoints[o]) : r > s.breakpoints[o] && (n = s.breakpoints[o]));
                null !== n ? null !== s.activeBreakpoint ? (n !== s.activeBreakpoint || i) && (s.activeBreakpoint = n, "unslick" === s.breakpointSettings[n] ? s.unslick(n) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[n]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), l = n) : (s.activeBreakpoint = n, "unslick" === s.breakpointSettings[n] ? s.unslick(n) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[n]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), l = n) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), l = n), t || !1 === l || s.$slider.trigger("breakpoint", [s, l])
            }
        }, t.prototype.changeSlide = function(t, i) {
            var s = this,
                o = e(t.currentTarget),
                n, r, l;
            switch (o.is("a") && t.preventDefault(), o.is("li") || (o = o.closest("li")), n = (l = s.slideCount % s.options.slidesToScroll != 0) ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
                case "previous":
                    r = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - r, !1, i);
                    break;
                case "next":
                    r = 0 === n ? s.options.slidesToScroll : n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + r, !1, i);
                    break;
                case "index":
                    var a = 0 === t.data.index ? 0 : t.data.index || o.index() * s.options.slidesToScroll;
                    s.slideHandler(s.checkNavigable(a), !1, i), o.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, t.prototype.checkNavigable = function(e) {
            var t, i, s;
            if (s = 0, e > (i = this.getNavigableIndexes())[i.length - 1]) e = i[i.length - 1];
            else
                for (var o in i) {
                    if (e < i[o]) {
                        e = s;
                        break
                    }
                    s = i[o]
                }
            return e
        }, t.prototype.cleanUpEvents = function() {
            var t = this;
            t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.cleanUpSlideEvents = function() {
            var t = this;
            t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.cleanUpRows = function() {
            var e = this,
                t;
            e.options.rows > 0 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(t))
        }, t.prototype.clickHandler = function(e) {
            var t;
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, t.prototype.destroy = function(t) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                e(this).attr("style", e(this).data("originalStyling"))
            }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
        }, t.prototype.disableTransition = function(e) {
            var t = this,
                i = {};
            i[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, t.prototype.fadeSlide = function(e, t) {
            var i = this;
            !1 === i.cssTransitions ? (i.$slides.eq(e).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(e).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), t && setTimeout(function() {
                i.disableTransition(e), t.call()
            }, i.options.speed))
        }, t.prototype.fadeSlideOut = function(e) {
            var t = this;
            !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }))
        }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
            var t = this;
            null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.focusHandler = function() {
            var t = this;
            t.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function(i) {
                var s = e(this);
                setTimeout(function() {
                    t.options.pauseOnFocus && s.is(":focus") && (t.focussed = !0, t.autoPlay())
                }, 0)
            }).on("blur.slick", "*", function(i) {
                var s = e(this);
                t.options.pauseOnFocus && (t.focussed = !1, t.autoPlay())
            })
        }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
            var e;
            return this.currentSlide
        }, t.prototype.getDotCount = function() {
            var e = this,
                t = 0,
                i = 0,
                s = 0;
            if (!0 === e.options.infinite)
                if (e.slideCount <= e.options.slidesToShow) ++s;
                else
                    for (; t < e.slideCount;) ++s, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (!0 === e.options.centerMode) s = e.slideCount;
            else if (e.options.asNavFor)
                for (; t < e.slideCount;) ++s, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else s = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return s - 1
        }, t.prototype.getLeft = function(e) {
            var t = this,
                i, s, o = 0,
                n, r;
            return t.slideOffset = 0, s = t.$slides.first().outerHeight(!0), !0 === t.options.infinite ? (t.slideCount > t.options.slidesToShow && (t.slideOffset = t.slideWidth * t.options.slidesToShow * -1, r = -1, !0 === t.options.vertical && !0 === t.options.centerMode && (2 === t.options.slidesToShow ? r = -1.5 : 1 === t.options.slidesToShow && (r = -2)), o = s * t.options.slidesToShow * r), t.slideCount % t.options.slidesToScroll != 0 && e + t.options.slidesToScroll > t.slideCount && t.slideCount > t.options.slidesToShow && (e > t.slideCount ? (t.slideOffset = (t.options.slidesToShow - (e - t.slideCount)) * t.slideWidth * -1, o = (t.options.slidesToShow - (e - t.slideCount)) * s * -1) : (t.slideOffset = t.slideCount % t.options.slidesToScroll * t.slideWidth * -1, o = t.slideCount % t.options.slidesToScroll * s * -1))) : e + t.options.slidesToShow > t.slideCount && (t.slideOffset = (e + t.options.slidesToShow - t.slideCount) * t.slideWidth, o = (e + t.options.slidesToShow - t.slideCount) * s), t.slideCount <= t.options.slidesToShow && (t.slideOffset = 0, o = 0), !0 === t.options.centerMode && t.slideCount <= t.options.slidesToShow ? t.slideOffset = t.slideWidth * Math.floor(t.options.slidesToShow) / 2 - t.slideWidth * t.slideCount / 2 : !0 === t.options.centerMode && !0 === t.options.infinite ? t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2) - t.slideWidth : !0 === t.options.centerMode && (t.slideOffset = 0, t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2)), i = !1 === t.options.vertical ? e * t.slideWidth * -1 + t.slideOffset : e * s * -1 + o, !0 === t.options.variableWidth && (n = t.slideCount <= t.options.slidesToShow || !1 === t.options.infinite ? t.$slideTrack.children(".slick-slide").eq(e) : t.$slideTrack.children(".slick-slide").eq(e + t.options.slidesToShow), i = !0 === t.options.rtl ? n[0] ? -1 * (t.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === t.options.centerMode && (n = t.slideCount <= t.options.slidesToShow || !1 === t.options.infinite ? t.$slideTrack.children(".slick-slide").eq(e) : t.$slideTrack.children(".slick-slide").eq(e + t.options.slidesToShow + 1), i = !0 === t.options.rtl ? n[0] ? -1 * (t.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, i += (t.$list.width() - n.outerWidth()) / 2)), i
        }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
            var t;
            return this.options[e]
        }, t.prototype.getNavigableIndexes = function() {
            var e = this,
                t = 0,
                i = 0,
                s = [],
                o;
            for (!1 === e.options.infinite ? o = e.slideCount : (t = -1 * e.options.slidesToScroll, i = -1 * e.options.slidesToScroll, o = 2 * e.slideCount); t < o;) s.push(t), t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return s
        }, t.prototype.getSlick = function() {
            return this
        }, t.prototype.getSlideCount = function() {
            var t = this,
                i, s, o, n;
            return n = !0 === t.options.centerMode ? Math.floor(t.$list.width() / 2) : 0, o = -1 * t.swipeLeft + n, !0 === t.options.swipeToSlide ? (t.$slideTrack.find(".slick-slide").each(function(i, n) {
                var r, l, a;
                if (r = e(n).outerWidth(), l = n.offsetLeft, !0 !== t.options.centerMode && (l += r / 2), o < (a = l + r)) return s = n, !1
            }), i = Math.abs(e(s).attr("data-slick-index") - t.currentSlide) || 1) : t.options.slidesToScroll
        }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
            var i;
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t)
        }, t.prototype.init = function(t) {
            var i = this;
            e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
        }, t.prototype.initADA = function() {
            var t = this,
                i = Math.ceil(t.slideCount / t.options.slidesToShow),
                s = t.getNavigableIndexes().filter(function(e) {
                    return e >= 0 && e < t.slideCount
                });
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
                var o = s.indexOf(i);
                if (e(this).attr({
                        role: "tabpanel",
                        id: "slick-slide" + t.instanceUid + i,
                        tabindex: -1
                    }), -1 !== o) {
                    var n = "slick-slide-control" + t.instanceUid + o;
                    e("#" + n).length && e(this).attr({
                        "aria-describedby": n
                    })
                }
            }), t.$dots.attr("role", "tablist").find("li").each(function(o) {
                var n = s[o];
                e(this).attr({
                    role: "presentation"
                }), e(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + t.instanceUid + o,
                    "aria-controls": "slick-slide" + t.instanceUid + n,
                    "aria-label": o + 1 + " of " + i,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(t.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var o = t.currentSlide, n = o + t.options.slidesToShow; o < n; o++) t.options.focusOnChange ? t.$slides.eq(o).attr({
                tabindex: "0"
            }) : t.$slides.eq(o).removeAttr("tabindex");
            t.activateADA()
        }, t.prototype.initArrowEvents = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
        }, t.prototype.initDotEvents = function() {
            var t = this;
            !0 === t.options.dots && t.slideCount > t.options.slidesToShow && (e("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.initSlideEvents = function() {
            var t = this;
            t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
        }, t.prototype.initializeEvents = function() {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
        }, t.prototype.initUI = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
        }, t.prototype.keyHandler = function(e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "next" : "previous"
                }
            }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "previous" : "next"
                }
            }))
        }, t.prototype.lazyLoad = function() {
            function t(t) {
                e("img[data-lazy]", t).each(function() {
                    var t = e(this),
                        s = e(this).attr("data-lazy"),
                        o = e(this).attr("data-srcset"),
                        n = e(this).attr("data-sizes") || i.$slider.attr("data-sizes"),
                        r = document.createElement("img");
                    r.onload = function() {
                        t.animate({
                            opacity: 0
                        }, 100, function() {
                            o && (t.attr("srcset", o), n && t.attr("sizes", n)), t.attr("src", s).animate({
                                opacity: 1
                            }, 200, function() {
                                t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }), i.$slider.trigger("lazyLoaded", [i, t, s])
                        })
                    }, r.onerror = function() {
                        t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), i.$slider.trigger("lazyLoadError", [i, t, s])
                    }, r.src = s
                })
            }
            var i = this,
                s, o, n, r;
            if (!0 === i.options.centerMode ? !0 === i.options.infinite ? r = (n = i.currentSlide + (i.options.slidesToShow / 2 + 1)) + i.options.slidesToShow + 2 : (n = Math.max(0, i.currentSlide - (i.options.slidesToShow / 2 + 1)), r = i.options.slidesToShow / 2 + 1 + 2 + i.currentSlide) : (n = i.options.infinite ? i.options.slidesToShow + i.currentSlide : i.currentSlide, r = Math.ceil(n + i.options.slidesToShow), !0 === i.options.fade && (n > 0 && n--, r <= i.slideCount && r++)), s = i.$slider.find(".slick-slide").slice(n, r), "anticipated" === i.options.lazyLoad)
                for (var l = n - 1, a = r, c = i.$slider.find(".slick-slide"), d = 0; d < i.options.slidesToScroll; d++) l < 0 && (l = i.slideCount - 1), s = (s = s.add(c.eq(l))).add(c.eq(a)), l--, a++;
            t(s), i.slideCount <= i.options.slidesToShow ? t(o = i.$slider.find(".slick-slide")) : i.currentSlide >= i.slideCount - i.options.slidesToShow ? t(o = i.$slider.find(".slick-cloned").slice(0, i.options.slidesToShow)) : 0 === i.currentSlide && t(o = i.$slider.find(".slick-cloned").slice(-1 * i.options.slidesToShow))
        }, t.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, t.prototype.next = t.prototype.slickNext = function() {
            var e;
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.orientationChange = function() {
            var e = this;
            e.checkResponsive(), e.setPosition()
        }, t.prototype.pause = t.prototype.slickPause = function() {
            var e = this;
            e.autoPlayClear(), e.paused = !0
        }, t.prototype.play = t.prototype.slickPlay = function() {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
        }, t.prototype.postSlide = function(t) {
            var i = this,
                s;
            i.unslicked || (i.$slider.trigger("afterChange", [i, t]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && e(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
        }, t.prototype.prev = t.prototype.slickPrev = function() {
            var e;
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, t.prototype.preventDefault = function(e) {
            e.preventDefault()
        }, t.prototype.progressiveLazyLoad = function(t) {
            t = t || 1;
            var i = this,
                s = e("img[data-lazy]", i.$slider),
                o, n, r, l, a;
            s.length ? (o = s.first(), n = o.attr("data-lazy"), r = o.attr("data-srcset"), l = o.attr("data-sizes") || i.$slider.attr("data-sizes"), (a = document.createElement("img")).onload = function() {
                r && (o.attr("srcset", r), l && o.attr("sizes", l)), o.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === i.options.adaptiveHeight && i.setPosition(), i.$slider.trigger("lazyLoaded", [i, o, n]), i.progressiveLazyLoad()
            }, a.onerror = function() {
                t < 3 ? setTimeout(function() {
                    i.progressiveLazyLoad(t + 1)
                }, 500) : (o.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), i.$slider.trigger("lazyLoadError", [i, o, n]), i.progressiveLazyLoad())
            }, a.src = n) : i.$slider.trigger("allImagesLoaded", [i])
        }, t.prototype.refresh = function(t) {
            var i = this,
                s, o;
            o = i.slideCount - i.options.slidesToShow, !i.options.infinite && i.currentSlide > o && (i.currentSlide = o), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), s = i.currentSlide, i.destroy(!0), e.extend(i, i.initials, {
                currentSlide: s
            }), i.init(), t || i.changeSlide({
                data: {
                    message: "index",
                    index: s
                }
            }, !1)
        }, t.prototype.registerBreakpoints = function() {
            var t = this,
                i, s, o, n = t.options.responsive || null;
            if ("array" === e.type(n) && n.length) {
                for (i in t.respondTo = t.options.respondTo || "window", n)
                    if (o = t.breakpoints.length - 1, n.hasOwnProperty(i)) {
                        for (s = n[i].breakpoint; o >= 0;) t.breakpoints[o] && t.breakpoints[o] === s && t.breakpoints.splice(o, 1), o--;
                        t.breakpoints.push(s), t.breakpointSettings[s] = n[i].settings
                    }
                t.breakpoints.sort(function(e, i) {
                    return t.options.mobileFirst ? e - i : i - e
                })
            }
        }, t.prototype.reinit = function() {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
        }, t.prototype.resize = function() {
            var t = this;
            e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
            }, 50))
        }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
            var s = this;
            if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : s.slideCount - 1 : !0 === t ? --e : e, s.slideCount < 1 || e < 0 || e > s.slideCount - 1) return !1;
            s.unload(), !0 === i ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(e).remove(), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slidesCache = s.$slides, s.reinit()
        }, t.prototype.setCSS = function(e) {
            var t = this,
                i = {},
                s, o;
            !0 === t.options.rtl && (e = -e), s = "left" == t.positionProp ? Math.ceil(e) + "px" : "0px", o = "top" == t.positionProp ? Math.ceil(e) + "px" : "0px", i[t.positionProp] = e, !1 === t.transformsEnabled ? t.$slideTrack.css(i) : (i = {}, !1 === t.cssTransitions ? (i[t.animType] = "translate(" + s + ", " + o + ")", t.$slideTrack.css(i)) : (i[t.animType] = "translate3d(" + s + ", " + o + ", 0px)", t.$slideTrack.css(i)))
        }, t.prototype.setDimensions = function() {
            var e = this;
            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, t.prototype.setFade = function() {
            var t = this,
                i;
            t.$slides.each(function(s, o) {
                i = t.slideWidth * s * -1, !0 === t.options.rtl ? e(o).css({
                    position: "relative",
                    right: i,
                    top: 0,
                    zIndex: t.options.zIndex - 2,
                    opacity: 0
                }) : e(o).css({
                    position: "relative",
                    left: i,
                    top: 0,
                    zIndex: t.options.zIndex - 2,
                    opacity: 0
                })
            }), t.$slides.eq(t.currentSlide).css({
                zIndex: t.options.zIndex - 1,
                opacity: 1
            })
        }, t.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, t.prototype.setOption = t.prototype.slickSetOption = function(t, i, s) {
            var o = this,
                n, r, l, a, c = !1,
                d;
            if ("object" === e.type(t) ? (l = t, c = i, d = "multiple") : "string" === e.type(t) && (l = t, a = i, c = s, "responsive" === t && "array" === e.type(i) ? d = "responsive" : void 0 !== i && (d = "single")), "single" === d) o.options[l] = a;
            else if ("multiple" === d) e.each(l, function(e, t) {
                o.options[e] = t
            });
            else if ("responsive" === d)
                for (r in a)
                    if ("array" !== e.type(o.options.responsive)) o.options.responsive = [a[r]];
                    else {
                        for (n = o.options.responsive.length - 1; n >= 0;) o.options.responsive[n].breakpoint === a[r].breakpoint && o.options.responsive.splice(n, 1), n--;
                        o.options.responsive.push(a[r])
                    }
            c && (o.unload(), o.reinit())
        }, t.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, t.prototype.setProps = function() {
            var e = this,
                t = document.body.style;
            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
        }, t.prototype.setSlideClasses = function(e) {
            var t = this,
                i, s, o, n;
            if (s = t.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), t.$slides.eq(e).addClass("slick-current"), !0 === t.options.centerMode) {
                var r = t.options.slidesToShow % 2 == 0 ? 1 : 0;
                i = Math.floor(t.options.slidesToShow / 2), !0 === t.options.infinite && (e >= i && e <= t.slideCount - 1 - i ? t.$slides.slice(e - i + r, e + i + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = t.options.slidesToShow + e, s.slice(o - i + 1 + r, o + i + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? s.eq(s.length - 1 - t.options.slidesToShow).addClass("slick-center") : e === t.slideCount - 1 && s.eq(t.options.slidesToShow).addClass("slick-center")), t.$slides.eq(e).addClass("slick-center")
            } else e >= 0 && e <= t.slideCount - t.options.slidesToShow ? t.$slides.slice(e, e + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : s.length <= t.options.slidesToShow ? s.addClass("slick-active").attr("aria-hidden", "false") : (n = t.slideCount % t.options.slidesToShow, o = !0 === t.options.infinite ? t.options.slidesToShow + e : e, t.options.slidesToShow == t.options.slidesToScroll && t.slideCount - e < t.options.slidesToShow ? s.slice(o - (t.options.slidesToShow - n), o + n).addClass("slick-active").attr("aria-hidden", "false") : s.slice(o, o + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== t.options.lazyLoad && "anticipated" !== t.options.lazyLoad || t.lazyLoad()
        }, t.prototype.setupInfinite = function() {
            var t = this,
                i, s, o;
            if (!0 === t.options.fade && (t.options.centerMode = !1), !0 === t.options.infinite && !1 === t.options.fade && (s = null, t.slideCount > t.options.slidesToShow)) {
                for (o = !0 === t.options.centerMode ? t.options.slidesToShow + 1 : t.options.slidesToShow, i = t.slideCount; i > t.slideCount - o; i -= 1) s = i - 1, e(t.$slides[s]).clone(!0).attr("id", "").attr("data-slick-index", s - t.slideCount).prependTo(t.$slideTrack).addClass("slick-cloned");
                for (i = 0; i < o + t.slideCount; i += 1) s = i, e(t.$slides[s]).clone(!0).attr("id", "").attr("data-slick-index", s + t.slideCount).appendTo(t.$slideTrack).addClass("slick-cloned");
                t.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    e(this).attr("id", "")
                })
            }
        }, t.prototype.interrupt = function(e) {
            var t = this;
            e || t.autoPlay(), t.interrupted = e
        }, t.prototype.selectHandler = function(t) {
            var i = this,
                s = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                o = parseInt(s.attr("data-slick-index"));
            o || (o = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(o, !1, !0) : i.slideHandler(o)
        }, t.prototype.slideHandler = function(e, t, i) {
            var s, o, n, r, l = null,
                a = this,
                c;
            if (t = t || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === e))
                if (!1 === t && a.asNavFor(e), s = e, l = a.getLeft(s), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (e < 0 || e > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (s = a.currentSlide, !0 !== i && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function() {
                    a.postSlide(s)
                }) : a.postSlide(s));
                else if (!1 === a.options.infinite && !0 === a.options.centerMode && (e < 0 || e > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (s = a.currentSlide, !0 !== i && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function() {
                a.postSlide(s)
            }) : a.postSlide(s));
            else {
                if (a.options.autoplay && clearInterval(a.autoPlayTimer), o = s < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + s : s >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : s - a.slideCount : s, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, o]), n = a.currentSlide, a.currentSlide = o, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (c = (c = a.getNavTarget()).slick("getSlick")).slideCount <= c.options.slidesToShow && c.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== i ? (a.fadeSlideOut(n), a.fadeSlide(o, function() {
                    a.postSlide(o)
                })) : a.postSlide(o), void a.animateHeight();
                !0 !== i && a.slideCount > a.options.slidesToShow ? a.animateSlide(l, function() {
                    a.postSlide(o)
                }) : a.postSlide(o)
            }
        }, t.prototype.startLoad = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, t.prototype.swipeDirection = function() {
            var e, t, i, s, o = this;
            return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(t, e), (s = Math.round(180 * i / Math.PI)) < 0 && (s = 360 - Math.abs(s)), s <= 45 && s >= 0 ? !1 === o.options.rtl ? "left" : "right" : s <= 360 && s >= 315 ? !1 === o.options.rtl ? "left" : "right" : s >= 135 && s <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? s >= 35 && s <= 135 ? "down" : "up" : "vertical"
        }, t.prototype.swipeEnd = function(e) {
            var t = this,
                i, s;
            if (t.dragging = !1, t.swiping = !1, t.scrolling) return t.scrolling = !1, !1;
            if (t.interrupted = !1, t.shouldClick = !(t.touchObject.swipeLength > 10), void 0 === t.touchObject.curX) return !1;
            if (!0 === t.touchObject.edgeHit && t.$slider.trigger("edge", [t, t.swipeDirection()]), t.touchObject.swipeLength >= t.touchObject.minSwipe) {
                switch (s = t.swipeDirection()) {
                    case "left":
                    case "down":
                        i = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide + t.getSlideCount()) : t.currentSlide + t.getSlideCount(), t.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        i = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide - t.getSlideCount()) : t.currentSlide - t.getSlideCount(), t.currentDirection = 1;
                        break;
                    default:
                }
                "vertical" != s && (t.slideHandler(i), t.touchObject = {}, t.$slider.trigger("swipe", [t, s]))
            } else t.touchObject.startX !== t.touchObject.curX && (t.slideHandler(t.currentSlide), t.touchObject = {})
        }, t.prototype.swipeHandler = function(e) {
            var t = this;
            if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e);
                    break
            }
        }, t.prototype.swipeMove = function(e) {
            var t = this,
                i = !1,
                s, o, n, r, l, a;
            return l = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!t.dragging || t.scrolling || l && 1 !== l.length) && (s = t.getLeft(t.currentSlide), t.touchObject.curX = void 0 !== l ? l[0].pageX : e.clientX, t.touchObject.curY = void 0 !== l ? l[0].pageY : e.clientY, t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curX - t.touchObject.startX, 2))), a = Math.round(Math.sqrt(Math.pow(t.touchObject.curY - t.touchObject.startY, 2))), !t.options.verticalSwiping && !t.swiping && a > 4 ? (t.scrolling = !0, !1) : (!0 === t.options.verticalSwiping && (t.touchObject.swipeLength = a), o = t.swipeDirection(), void 0 !== e.originalEvent && t.touchObject.swipeLength > 4 && (t.swiping = !0, e.preventDefault()), r = (!1 === t.options.rtl ? 1 : -1) * (t.touchObject.curX > t.touchObject.startX ? 1 : -1), !0 === t.options.verticalSwiping && (r = t.touchObject.curY > t.touchObject.startY ? 1 : -1), n = t.touchObject.swipeLength, t.touchObject.edgeHit = !1, !1 === t.options.infinite && (0 === t.currentSlide && "right" === o || t.currentSlide >= t.getDotCount() && "left" === o) && (n = t.touchObject.swipeLength * t.options.edgeFriction, t.touchObject.edgeHit = !0), !1 === t.options.vertical ? t.swipeLeft = s + n * r : t.swipeLeft = s + n * (t.$list.height() / t.listWidth) * r, !0 === t.options.verticalSwiping && (t.swipeLeft = s + n * r), !0 !== t.options.fade && !1 !== t.options.touchMove && (!0 === t.animating ? (t.swipeLeft = null, !1) : void t.setCSS(t.swipeLeft))))
        }, t.prototype.swipeStart = function(e) {
            var t = this,
                i;
            if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
            void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (i = e.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== i ? i.pageX : e.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== i ? i.pageY : e.clientY, t.dragging = !0
        }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, t.prototype.unload = function() {
            var t = this;
            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, t.prototype.unslick = function(e) {
            var t = this;
            t.$slider.trigger("unslick", [t, e]), t.destroy()
        }, t.prototype.updateArrows = function() {
            var e = this,
                t;
            t = Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, t.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
        }, t.prototype.visibility = function() {
            var e = this;
            e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
        }, e.fn.slick = function(e) {
            var i = this,
                s = e,
                o = Array.prototype.slice.call(arguments, 1),
                n = i.length,
                r, l;
            for (r = 0; r < n; r++)
                if ("object" == typeof s || void 0 === s ? i[r].slick = new t(i[r], s) : l = i[r].slick[s].apply(i[r].slick, o), void 0 !== l) return l;
            return i
        }
    }),
    function(e) {
        function t(e, t) {
            for (var i = e.length; i--;)
                if (e[i] === t) return i;
            return -1
        }

        function i(e, t) {
            if (e.length != t.length) return !1;
            for (var i = 0; i < e.length; i++)
                if (e[i] !== t[i]) return !1;
            return !0
        }

        function s(e) {
            for (w in $) $[w] = e[x[w]]
        }

        function o(e) {
            var i, o, n, r, a, c;
            if (i = e.keyCode, -1 == t(C, i) && C.push(i), 93 != i && 224 != i || (i = 91), i in $)
                for (n in $[i] = !0, k) k[n] == i && (l[n] = !0);
            else if (s(e), l.filter.call(this, e) && i in y)
                for (c = p(), r = 0; r < y[i].length; r++)
                    if ((o = y[i][r]).scope == c || "all" == o.scope) {
                        for (n in a = o.mods.length > 0, $)(!$[n] && t(o.mods, +n) > -1 || $[n] && -1 == t(o.mods, +n)) && (a = !1);
                        (0 != o.mods.length || $[16] || $[18] || $[17] || $[91]) && !a || !1 === o.method(e, o) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), e.cancelBubble && (e.cancelBubble = !0))
                    }
        }

        function n(e) {
            var i = e.keyCode,
                s, o = t(C, i);
            if (o >= 0 && C.splice(o, 1), 93 != i && 224 != i || (i = 91), i in $)
                for (s in $[i] = !1, k) k[s] == i && (l[s] = !1)
        }

        function r() {
            for (w in $) $[w] = !1;
            for (w in k) l[w] = !1
        }

        function l(e, t, i) {
            var s, o;
            s = g(e), void 0 === i && (i = t, t = "all");
            for (var n = 0; n < s.length; n++) o = [], (e = s[n].split("+")).length > 1 && (o = m(e), e = [e[e.length - 1]]), e = e[0], (e = S(e)) in y || (y[e] = []), y[e].push({
                shortcut: s[n],
                scope: t,
                method: i,
                key: s[n],
                mods: o
            })
        }

        function a(e, t) {
            var s, o, n = [],
                r, l, a;
            for (s = g(e), l = 0; l < s.length; l++) {
                if ((o = s[l].split("+")).length > 1 && (n = m(o)), e = o[o.length - 1], e = S(e), void 0 === t && (t = p()), !y[e]) return;
                for (r = 0; r < y[e].length; r++)(a = y[e][r]).scope === t && i(a.mods, n) && (y[e][r] = {})
            }
        }

        function c(e) {
            return "string" == typeof e && (e = S(e)), -1 != t(C, e)
        }

        function d() {
            return C.slice(0)
        }

        function h(e) {
            var t = (e.target || e.srcElement).tagName;
            return !("INPUT" == t || "SELECT" == t || "TEXTAREA" == t)
        }

        function u(e) {
            b = e || "all"
        }

        function p() {
            return b || "all"
        }

        function f(e) {
            var t, i, s;
            for (t in y)
                for (i = y[t], s = 0; s < i.length;) i[s].scope === e ? i.splice(s, 1) : s++
        }

        function g(e) {
            var t;
            return "" == (t = (e = e.replace(/\s/g, "")).split(","))[t.length - 1] && (t[t.length - 2] += ","), t
        }

        function m(e) {
            for (var t = e.slice(0, e.length - 1), i = 0; i < t.length; i++) t[i] = k[t[i]];
            return t
        }

        function v(e, t, i) {
            e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent && e.attachEvent("on" + t, function() {
                i(window.event)
            })
        }

        function _() {
            var t = e.key;
            return e.key = j, t
        }
        var w, y = {},
            $ = {
                16: !1,
                18: !1,
                17: !1,
                91: !1
            },
            b = "all",
            k = {
                "⇧": 16,
                shift: 16,
                "⌥": 18,
                alt: 18,
                option: 18,
                "⌃": 17,
                ctrl: 17,
                control: 17,
                "⌘": 91,
                command: 91
            },
            T = {
                backspace: 8,
                tab: 9,
                clear: 12,
                enter: 13,
                return: 13,
                esc: 27,
                escape: 27,
                space: 32,
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                del: 46,
                delete: 46,
                home: 36,
                end: 35,
                pageup: 33,
                pagedown: 34,
                ",": 188,
                ".": 190,
                "/": 191,
                "`": 192,
                "-": 189,
                "=": 187,
                ";": 186,
                "'": 222,
                "[": 219,
                "]": 221,
                "\\": 220
            },
            S = function(e) {
                return T[e] || e.toUpperCase().charCodeAt(0)
            },
            C = [];
        for (w = 1; w < 20; w++) T["f" + w] = 111 + w;
        var x = {
            16: "shiftKey",
            18: "altKey",
            17: "ctrlKey",
            91: "metaKey"
        };
        for (w in k) l[w] = !1;
        v(document, "keydown", function(e) {
            o(e)
        }), v(document, "keyup", n), v(window, "focus", r);
        var j = e.key;
        e.key = l, e.key.setScope = u, e.key.getScope = p, e.key.deleteScope = f, e.key.filter = h, e.key.isPressed = c, e.key.getPressedKeyCodes = d, e.key.noConflict = _, e.key.unbind = a, "undefined" != typeof module && (module.exports = l)
    }(this),
    function() {
        var e = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
            t = "undefined" != typeof module && module.exports,
            i = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
            s = function() {
                for (var t, i = [
                        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                    ], s = 0, o = i.length, n = {}; s < o; s++)
                    if ((t = i[s]) && t[1] in e) {
                        for (s = 0; s < t.length; s++) n[i[0][s]] = t[s];
                        return n
                    }
                return !1
            }(),
            o = {
                change: s.fullscreenchange,
                error: s.fullscreenerror
            },
            n = {
                request: function(t) {
                    var o = s.requestFullscreen;
                    t = t || e.documentElement, / Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent) ? t[o]() : t[o](i ? Element.ALLOW_KEYBOARD_INPUT : {})
                },
                exit: function() {
                    e[s.exitFullscreen]()
                },
                toggle: function(e) {
                    this.isFullscreen ? this.exit() : this.request(e)
                },
                onchange: function(e) {
                    this.on("change", e)
                },
                onerror: function(e) {
                    this.on("error", e)
                },
                on: function(t, i) {
                    var s = o[t];
                    s && e.addEventListener(s, i, !1)
                },
                off: function(t, i) {
                    var s = o[t];
                    s && e.removeEventListener(s, i, !1)
                },
                raw: s
            };
        s ? (Object.defineProperties(n, {
            isFullscreen: {
                get: function() {
                    return Boolean(e[s.fullscreenElement])
                }
            },
            element: {
                enumerable: !0,
                get: function() {
                    return e[s.fullscreenElement]
                }
            },
            enabled: {
                enumerable: !0,
                get: function() {
                    return Boolean(e[s.fullscreenEnabled])
                }
            }
        }), t ? module.exports = n : window.screenfull = n) : t ? module.exports = !1 : window.screenfull = !1
    }(), window.lazySizesConfig = window.lazySizesConfig || {}, lazySizesConfig.loadHidden = !1, lazySizesConfig.loadMode = 1;
var ua = window.navigator.userAgent,
    iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i),
    iPad = !!ua.match(/iPad/i),
    safari = /^((?!chrome|android).)*safari/i.test(ua),
    webkit = !!ua.match(/WebKit/i),
    iOSSafari = iOS && webkit && !ua.match(/CriOS/i),
    platform = window.navigator.oscpu;
platform || (platform = "");
var $htmlBody = $("html,body"),
    $body = $("body"),
    $header = $("#header"),
    $footer = $("#footer"),
    $menu = $("#menu"),
    $contentWrap = $("#content-wrap"),
    $sectionViews = $("#section-views"),
    $projectsGrid = $("#projects-grid"),
    $projects, homeURL = $('meta[name="home-url"]').attr("content"),
    analyticsID = $('meta[name="google-analytics-id"]').attr("content"),
    winWidth, winHeight, transTime = 400,
    breakpoint = 700,
    headerHeight = 50,
    subnavHeight = 30,
    dotWidth = 15,
    dotsWidth, footerHeight, heroHeight, heroMargin, modalInit, modalCount = 1,
    setOpen, searchThrottle, scrollPos, scrollInterval = 1,
    lastScrollPos = 0,
    repositioning = !1,
    secTopPos, secHeight, secBot, subnavPos, pageName = $("#content").attr("data-pagename"),
    stateData, attempts = 0,
    isPopState = !1,
    currentState = window.location.href,
    i, itemCount, filterName, filterAttrs, filtersList, cookieFilters, projectsList = "",
    storedProjectsList = "",
    storedListSet = !1,
    lazyInitThrottle;
$(document).on("lazybeforeunveil", function(e) {
    clearTimeout(lazyInitThrottle), lazyInitThrottle = setTimeout(function() {
        !iPad && $(e.target).parents(".slide-image").length && $(e.target).parents(".slick-slide").next().find(".slide-image.hidden").length && $(e.target).parents(".slick-slide").next().find(".slide-image.hidden").removeClass("hidden"), responsive(!1)
    }, 150)
});
var scroll = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(e) {
        window.setTimeout(e, 1e3 / 60)
    },
    checkedElems = !1,
    menuOpen = !1,
    targetAnchor, targetHash, targetOffset, targetPage, menuOpen = !1,
    searchOpen = !1;
$(document).ready(function() {
    var e;
    analyticsID && (gaTracker(analyticsID), gaTrack(currentState, pageName.split(" — ")[1])), responsive(!1), $footer.hide(), $("#menu-button").on("click", function() {
        menuOpen ? closeMenu() : openMenu()
    }), $("#search-button").on("click", function() {
        searchOpen ? closeSearch() : openSearch()
    }), $("#search-input").data("oldVal", $(this).val()).bind("propertychange change keyup input paste", function() {
        searchOpen || openSearch(), $(this).is(":focus") && ("" === (e = $(this).val()) || " " === e || e.length < 3 ? ($("#search").removeClass("has-results"), $("#search-results").empty()) : $(this).data("oldVal") !== e && ($("#search").addClass("has-results"), $("#search-results").html('<div class="searching"></div>'), clearTimeout(searchThrottle), searchThrottle = setTimeout(function() {
            $(this).data("oldVal", e), $("#search-results").load(homeURL + "/?s=" + e.replace(" ", "+")), console.log(e), $("#search-results a").on("click", function(e) {
                e.preventDefault(), loadWrap($(this).attr("href"))
            })
        }, transTime)))
    }), $("#search form").on("submit", function() {
        return !1
    }), $("#content-wrap").on("click keypress focus", function() {
        searchOpen && closeSearch(), menuOpen && closeMenu()
    }), window.onkeydown = function(e) {
        if (27 === e.keyCode)
            if ($(".modal.show").length) {
                var t = 1;
                $(".modal.show").each(function() {
                    $(this).attr("data-modal-count") > t && (t = $(this).attr("data-modal-count"))
                });
                var i = $('[data-modal-count="' + t + '"]').attr("id");
                i ? closeModal("#" + i) : closeModal()
            } else menuOpen ? closeMenu() : searchOpen && closeSearch()
    }, stateData = {
        path: currentState,
        scrollTop: scrollPos
    }, history.replaceState(stateData, pageName, currentState), initialize(currentState), constant()
}), $(window).bind("load", function() {
    $body.removeClass("first-load"), key("tab", function() {
        $(document.activeElement).parents("#home-hero").length ? $htmlBody.stop().animate({
            scrollTop: ($(document.activeElement).parents(".fullscreen").index() + 1) * winHeight
        }, transTime) : $(document.activeElement).parents(".section-view").length && !$(document.activeElement).parents(".section-view").is(".show") && $("#section-toggle button:nth-child(" + $(document.activeElement).parents(".section-view").index() + "1)").trigger("click")
    })
}), window.addEventListener("popstate", function(e) {
    if (e.state) {
        var t = e.state.path;
        isPopState || -1 !== t.indexOf("?s=") ? null !== e.state && (window.location = t) : (e.preventDefault(), isPopState = !0, null !== e.state && loadWrap(t), console.log("popstate", t))
    }
}, {
    passive: !0
}), $(window).on("resize", function() {
    iOSSafari && $(window).width() !== winWidth ? responsive(!0) : iOSSafari || responsive(!0)
}), window.addEventListener("orientationchange", function() {
    responsive(!0)
}, {
    passive: !0
}), window.addEventListener("touchstart", function() {
    $("body").addClass("touchscreen")
}, {
    passive: !0
});

//script to create sticky header 
/*jQuery(function(){
    createSticky(jQuery("#sticky-wrap"));
});*/

function createSticky(sticky) {
    if (typeof sticky != "undefined") {

        var pos = sticky.offset().top - 10,
            win = jQuery(window),
            header = jQuery('#header')[0].offsetHeight,
            newTop = header + 10;

        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '.customStyle { top: '+newTop+'px!important }';
        document.getElementsByTagName('head')[0].appendChild(style);

        win.on("scroll", function() {

            if( win.scrollTop() > pos ) {
                //sticky.addClass("stickyhead");
                sticky.addClass("customStyle");
            } else {
                //sticky.removeClass("stickyhead");
                sticky.removeClass("customStyle");
            }           
        });         
    }
}

$(window).scroll(function(){
    if($(window).scrollTop() + $(window).height() < $(document).height() - 150) {
        $("#sticky-wrap").stop().animate({"marginTop": ($(window).scrollTop()) + "px"}, "fast" );
    }
});