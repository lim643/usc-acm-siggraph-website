function mobileMenu() {
    body.toggleClass("noscroll"), menuMobile.toggleClass("menu-toggle"), mMobile.show(0, function () {
        $(this).toggleClass("menu-show")
    })
}

function resetMenu() {
    body.removeClass("noscroll"), menuMobile.removeClass("menu-toggle"), mMobile.hide(0, function () {
        $(this).removeClass("menu-show")
    })
}

function closeModal() {
    overlay.show(), body.addClass("noscroll"), grid.addClass("grid-scroll"), full.addClass("resize"), gallery.hide(), setTimeout(function () {
        focus.find(".item-wrapper").addClass("content-show"), close.show(0, function () {
            $(this).addClass("close-show")
        })
    }, 10)
}

function closeModalAlt() {
    overlay.hide(), body.removeClass("noscroll"), grid.removeClass("grid-scroll"), full.removeClass("resize"), focus.find(".item-wrapper").add(close).add(gallery).hide(), setTimeout(function () {
        close.removeClass("close-show")
    }, 10)
}

function showTime() {
    var date = new Date,
        DD = date.getDate(),
        nextDate = eval("date" + num),
        CC = nextDate.substring(2, nextDate.length - 3),
        nextEvent = nextDate.substring(0, nextDate.length - 5).replace(/\./g, ""),
        MM = date.getMonth() + 1,
        currentDate = "" + MM + DD,
        diff = CC - DD,
        upcoming = $("#upcoming");
    if (MM == nextEvent) {
        nextEv.html('<div class="next-event"><h5>' + eval("date" + num) + " — </h5><p>" + eval("title" + num) + "</p></div>");
        var dt = $("#time-left");
        0 === diff ? dt.html("today") : 1 === diff ? dt.html("in " + diff + " day") : 0 > diff ? upcoming.html("<h5>No Upcoming Events</h5>") : dt.html(" in " + diff + " days")
    } else upcoming.html("<h5>No Upcoming Events</h5>");
    var nextE = nextDate.substring(0, nextDate.length - 3).replace(/\./g, "");
    nextE >= currentDate && $("#it-" + num).css("border", "2px solid #FFCC00").find("h5").css("color", "#FFCC00")
}

function WidthChange(e) {
    e.matches && resetMenu()
}

function supportsSvg() {
    return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.0")
}
var content = $("#content"),
    hero = content.find(".hero"),
    list = $("#list"),
    mlist = $("#m-list"),
    line = list.add(mlist).find(".line"),
    liA = list.add(mlist).find("li a"),
    sc = $("#sc"),
    body = $("body"),
    menuMobile = $("#menu"),
    mMobile = $("#m-mobile"),
    overlay = $("#overlay"),
    grid = $(".grid"),
    full = $("header,main,footer,#banner,nav"),
    gallery = $("#gallery"),
    gal = gallery.find(".gallery"),
    close = $("#close"),
    focus = $("#focus"),
    nextEv = $("#next-event");
mlist.add(list).on("mouseenter", "li", function () {
    var e = $(this).attr("id");
    $("#" + e).find(".line").addClass("line-active")
}).on("mouseleave", "li", function () {
    var e = $(this).attr("id");
    $("#" + e).find(".line").removeClass("line-active")
}), nextEv.on("click", ".next-event", function () {
    focus.html('<div class="item-wrapper"><div class="item-content"><h1>' + eval("title" + num) + '</h1><h5 class="set"><span class="half">Date<br><span id="it-c-date">' + eval("date" + num) + '</span></span><span class="half">Time<br><span id="it-c-time">' + eval("time" + num) + '</span></span></h5><h5 class="set"><span class="full">Place<br><span id="it-c-place">' + eval("place" + num) + '</span></span></h5><br><p class="body">' + eval("body" + num) + "</p></div></div>"), closeModal()
}), close.add(overlay).on("click", function () {
    closeModalAlt()
});
var $d = $(document);
if ($d.on("click", "#menu", function () {
        mobileMenu(), $d.on("click", ".menu-toggle", function () {
            resetMenu()
        })
    }), $(function () {
        navigation(), showTime()
    }), matchMedia) {
    var mq = window.matchMedia("(min-width: 760px)");
    mq.addListener(WidthChange), WidthChange(mq)
}
1 != supportsSvg() && $("#logo").find("img").attr("src", "img/logo-usc-siggraph.png").css("max-width", "100%");