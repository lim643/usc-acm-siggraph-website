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
    close = $("#close"),
    focus = $("#focus"),
    nextEv = $("#next-event");

// Adds animation functionality to header links
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