!function($) {
    "use strict";
    $.fn.meanmenu = function(e) {
        var n = {
            meanMenuTarget: jQuery(this),
            meanMenuContainer: ".mobile-nav",
            meanMenuClose: "X",
            meanMenuCloseSize: "18px",
            meanMenuOpen: "<span /><span /><span />",
            meanRevealPosition: "right",
            meanRevealPositionDistance: "0",
            meanRevealColour: "",
            meanScreenWidth: "480",
            meanNavPush: "",
            meanShowChildren: !0,
            meanExpandableChildren: !0,
            meanExpand: "+",
            meanContract: "-",
            meanRemoveAttrs: !1,
            onePage: !1,
            meanDisplay: "block",
            removeElements: ""
        };
        e = $.extend(n, e);
        var a = window.innerWidth || document.documentElement.clientWidth;

        return this.each(function() {
            var n = e.meanMenuTarget,
                t = e.meanMenuContainer,
                r = e.meanMenuClose,
                i = e.meanMenuCloseSize,
                s = e.meanMenuOpen,
                u = e.meanRevealPosition,
                m = e.meanRevealPositionDistance,
                l = e.meanRevealColour,
                o = e.meanScreenWidth,
                c = e.meanNavPush,
                v = ".meanmenu-reveal",
                h = e.meanShowChildren,
                d = e.meanExpandableChildren,
                y = e.meanExpand,
                j = e.meanContract,
                Q = e.meanRemoveAttrs,
                f = e.onePage,
                g = e.meanDisplay,
                p = e.removeElements,
                C = !1;

            // Detecting mobile devices
            (navigator.userAgent.match(/iPhone|iPod|iPad|Android|Blackberry|Windows Phone/i)) && (C = !0);
            (navigator.userAgent.match(/MSIE 8|MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");

            var w = "",
                x = function() {
                    if ("center" === u) {
                        var e = window.innerWidth || document.documentElement.clientWidth,
                            n = e / 2 - 22 + "px";
                        w = "left:" + n + ";right:auto;", C ? jQuery(".meanmenu-reveal").animate({
                            left: n
                        }) : jQuery(".meanmenu-reveal").css("left", n);
                    }
                },
                A = !1,
                E = !1;

            "right" === u && (w = "right:" + m + ";left:auto;");
            "left" === u && (w = "left:" + m + ";right:auto;");
            x();

            var M = "",
                P = function() {
                    M.html(jQuery(M).is(".meanmenu-reveal.meanclose") ? r : s);
                },
                W = function() {
                    jQuery(".mean-bar,.mean-push").remove();
                    jQuery(t).removeClass("mean-container");
                    jQuery(n).css("display", g);
                    A = !1;
                    E = !1;
                    jQuery(p).removeClass("mean-remove");
                },
                b = function() {
                    var e = "background:" + l + ";color:" + l + ";" + w;
                    if (o >= a) {
                        jQuery(p).addClass("mean-remove");
                        E = !0;
                        jQuery(t).addClass("mean-container");
                        jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" id="baricon" class="meanmenu-reveal" style="' + e + '">Show Navigation</a><nav id="mobile-menu" class="mean-nav"></nav></div>');
                        var r = jQuery(n).html();
                        jQuery(".mean-nav").html(r);

                        if (Q) {
                            jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function() {
                                jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class");
                                jQuery(this).removeAttr("id");
                            });
                        }

                        jQuery(n).before('<div class="mean-push" />');
                        jQuery(".mean-push").css("margin-top", c);
                        jQuery(n).hide();
                        jQuery(".meanmenu-reveal").show();
                        jQuery(v).html(s);
                        M = jQuery(v);
                        jQuery(".mean-nav ul").hide();

                        if (h) {
                            if (d) {
                                jQuery(".mean-nav ul ul").each(function() {
                                    if (jQuery(this).children().length) {
                                        jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + i + '">' + y + "</a>");
                                    }
                                });
                                jQuery(".mean-expand").on("click", function(e) {
                                    e.preventDefault();
                                    jQuery(this).hasClass("mean-clicked") ? (
                                        jQuery(this).text(y),
                                        jQuery(this).prev("ul").slideUp(300)
                                    ) : (
                                        jQuery(this).text(j),
                                        jQuery(this).prev("ul").slideDown(300)
                                    );
                                    jQuery(this).toggleClass("mean-clicked");
                                });
                            } else {
                                jQuery(".mean-nav ul ul").show();
                            }
                        } else {
                            jQuery(".mean-nav ul ul").hide();
                        }

                        jQuery(".mean-nav ul li").last().addClass("mean-last");
                        M.removeClass("meanclose");

                        jQuery(M).click(function(e) {
                            e.preventDefault();

                            if (A === !1) {
                                M.css("text-align", "center");
                                M.css("text-indent", "0");
                                M.css("font-size", i);
                                jQuery(".mean-nav ul:first").slideDown();
                                A = !0;

                                jQuery("#mobile-menu").css({
                                    "height": "342px",
                                    "overflow-y": "auto",
                                    "overflow-x": "hidden"
                                });
                            } else {
                                jQuery(".mean-nav ul:first").slideUp();
                                A = !1;

                                jQuery("#mobile-menu").css({
                                    "height": "0px",
                                    "overflow-y": "",
                                    "overflow-x": ""
                                });
                            }

                            M.toggleClass("meanclose");
                            P();
                            jQuery(p).addClass("mean-remove");
                        });

                        if (f) {
                            jQuery(".mean-nav ul > li > a:first-child").on("click", function() {
                                jQuery(".mean-nav ul:first").slideUp();
                                A = !1;
                                jQuery(M).toggleClass("meanclose").html(s);
                                jQuery("#mobile-menu").css({
                                    "height": "0px",
                                    "overflow-y": "",
                                    "overflow-x": ""
                                });
                            });
                        }
                    } else {
                        W();
                    }
                };

            C || jQuery(window).resize(function() {
                a = window.innerWidth || document.documentElement.clientWidth;
                o >= a ? (b(), x()) : W();
            });

            jQuery(window).resize(function() {
                a = window.innerWidth || document.documentElement.clientWidth;
                C ? (x(), o >= a ? E === !1 && b() : W()) : (W(), o >= a && (b(), x()));
            });

            b();
        });
    };
}(jQuery);
