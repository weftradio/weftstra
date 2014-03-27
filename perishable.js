$(".entry-content a:has(img)").css({
    backgroundColor: "transparent"
});
if (top.location != self.location) {
    top.location = self.location
}
$('a[rel^="external"],a[rel$="external"]').attr({
    target: "_blank"
});
$("p:empty").remove();
$("span:empty").remove();
if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    $("body").addClass("ios-webkit")
}
if (!$("body").is(".ios-webkit")) {
    if (window.location.hash) {
        $(".tweet-latest").remove()
    }
}
$(function() {
    $(".meta-box li a:not(.c), .meta-box p a:not(.c), .meta-box h3 a:not(.c)").wrapInner('<span class="x" />')
});
$("body").append('<div class="top">&uarr;</div>');
$(window).scroll(function() {
    if ($(this).scrollTop() > 220) {
        $(".top").fadeIn(500)
    } else {
        $(".top").fadeOut(500)
    }
});
$(".top").click(function(a) {
    a.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, 500);
    return false
});
$(window).load(function() {
    $(".entry-content img:not(.static-image)").each(function() {
        var a = $(".entry-content").width();
        var b = $(this).outerWidth();
        var e = b / a;
        var d = $(window).width();
        var c = "img-resize";
        if (e > 0.7 || e >= 1) {
            e = 1
        }
        if (e < 0.3 && d > 1000) {
            e = e + 0.05
        }
        if (e < 0.3 && d < 500) {
            e = e - 0.05
        }
        if ($(this).is(".l")) {
            c = "img-resize-l"
        }
        if ($(this).parents(".capl").length != 1) {
            if (e < 0.7) {
                $(this).wrap('<div class="' + c + '" style="width:' + (e * 100) + '%;"></div>')
            }
            $(this).css({
                width: "100%",
                height: "auto"
            })
        }
    });
    $(".entry-content .capl").each(function() {
        var a = $(".entry-content").width();
        var b = $(this).outerWidth();
        var d = b / a;
        var c = $(window).width();
        if ((d > 0.5 && c > 1000) || (d >= 1)) {
            d = 1
        }
        if (d < 0.5 && c > 1000) {
            d = d + 0.1
        }
        $(this).wrap('<div class="img-resize-capl" style="width:' + (d * 100) + '%; float:left; margin:0 3rem 2rem 0; padding:0.6rem;"></div>');
        $(this).css({
            width: "100%",
            height: "auto",
            margin: "0",
            padding: "0"
        });
        $("img", this).css({
            width: "80%",
            height: "auto",
            margin: "0 auto 1.3rem auto"
        })
    })
});
jQuery.cookie = function(b, j, m) {
    if (typeof j != "undefined") {
        m = m || {};
        if (j === null) {
            j = "";
            m = $.extend({}, m);
            m.expires = -1
        }
        var e = "";
        if (m.expires && (typeof m.expires == "number" || m.expires.toUTCString)) {
            var f;
            if (typeof m.expires == "number") {
                f = new Date();
                f.setTime(f.getTime() + (m.expires * 24 * 60 * 60 * 1000))
            } else {
                f = m.expires
            }
            e = "; expires=" + f.toUTCString()
        }
        var l = m.path ? "; path=" + (m.path) : "";
        var g = m.domain ? "; domain=" + (m.domain) : "";
        var a = m.secure ? "; secure" : "";
        document.cookie = [b, "=", encodeURIComponent(j), e, l, g, a].join("")
    } else {
        var d = null;
        if (document.cookie && document.cookie != "") {
            var k = document.cookie.split(";");
            for (var h = 0; h < k.length; h++) {
                var c = jQuery.trim(k[h]);
                if (c.substring(0, b.length + 1) == (b + "=")) {
                    d = decodeURIComponent(c.substring(b.length + 1));
                    break
                }
            }
        }
        return d
    }
};
$(document).ready(function() {
    $(".tweet-latest").append('<span class="hide tweet-hide"><a href="#" title="Hide the tweet for 24 hours">x</a></span>');
    $(".tweet-latest").attr("style", "display:block;");
    var a = $.cookie("perishable_Latest_Tweet");
    if (a == "hide") {
        $(".tweet-latest").attr("style", "display:none;")
    }
    $(".tweet-hide a").click(function() {
        $.cookie("perishable_Latest_Tweet", "hide", {
            expires: 1,
            path: "/"
        });
        $(".tweet-latest").slideToggle(300);
        return false
    })
});
$(document).ready(function() {
    $(".welcome").append('<span class="hide welcome-hide"><a href="#" title="Hide welcome message for 24 hours">x</a></span>');
    $(".welcome").attr("style", "display:block;");
    var a = $.cookie("perishable_Welcome_Message");
    if (a == "hide") {
        $(".welcome").attr("style", "display:none;");
        $(".nav-single-top").css("margin-top", "0")
    }
    $(".welcome-hide a").click(function() {
        $.cookie("perishable_Welcome_Message", "hide", {
            expires: 1,
            path: "/"
        });
        $(".welcome").slideToggle(300);
        return false
    })
});
$(".anchor").click(function(e) {
    e.preventDefault();
    var b = this.href;
    var f = b.split("#");
    var a = f[1];
    var d = $("#" + a).offset();
    var c = d.top;
    var h = $.cookie("perishable_Latest_Tweet");
    var g = 0;
    if (!$("body").is(".ios-webkit")) {
        if (h != "hide") {
            g = 70
        }
    } else {
        g = 30
    }
    $("html, body").animate({
        scrollTop: c - g
    }, 500)
});
$(function() {
    $("ul.dropdown li").hover(function() {
        $(this).addClass("hover");
        $("ul:first", this).css("visibility", "visible")
    }, function() {
        $(this).removeClass("hover");
        $("ul:first", this).css("visibility", "hidden")
    });
    $("ul.dropdown li ul li:has(ul)").find("a:first").append(" &raquo; ")
});
var searchvisible = 0;
$("#search-link").click(function(a) {
    a.preventDefault();
    if (searchvisible === 0) {
        $(".search-box").slideDown(200);
        $(".search input").slideDown(200);
        $("#s").focus();
        searchvisible = 1
    } else {
        $(".search input").slideDown(100);
        $(".search-box").slideUp(200);
        searchvisible = 0
    }
    $(this).parents("li.hover").removeClass("hover");
    $(this).parents("ul:first").css("visibility", "hidden")
});
$(".search-site, .search-local, .search-google").submit(function(b) {
    var a = $.trim($($(this).children(".search-input")).val());
    if (a === "") {
        alert("Please enter some search terms..");
        return false
    } else {
        if ($(this).children(".search-input").is("#s")) {
            b.preventDefault();
            location.href = "/search/" + encodeURIComponent(this.s.value).replace(/%20/g, "+") + "/";
            return false
        } else {
            return true
        }
    }
});

function sideline() {
    var a = $("#content").outerHeight(false),
        c = $("#content-meta").outerHeight(false),
        b = $(window).width();
    if (b >= 1085) {
        $("#sidebar").css({
            height: (a + c - 60) + "px"
        });
        $(".sideline").css({
            top: (a + c - 80) + "px"
        })
    } else {
        $("#sidebar").css({
            height: (a + c - 20) + "px"
        });
        $(".wire-single .sideline").css({
            top: (a - 20) + "px"
        });
        $(".wire-index .sideline").css({
            top: (a - 40) + "px"
        })
    }
}
$("#sidebar").append('<div class="sideline"></div>');
$(".sideline").css({
    position: "absolute",
    "z-index": "999",
    width: "100%",
    height: "20px",
    overflow: "hidden",
    background: "url(/wp/wp-content/themes/wire/img/bg-side.png) no-repeat right top"
});
$(window).load(function() {
    sideline()
});
$(window).resize(function() {
    sideline()
});
