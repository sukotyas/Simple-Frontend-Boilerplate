$(document).ready(function () {
    /*
     var $sidebar = $("#company-info"),
     $window = $(document),
     offset = $sidebar.offset(),
     topPadding = 120;
     
     var docViewTop = $(window).scrollTop();
     var docViewBottom = docViewTop + $(window).height();
     
     var elemTop = $("footer").offset().top;
     var elemBottom = elemTop + $("footer").height();
     
     $window.scroll(function () {
     
     var selisih = elemTop - (offset.top + $sidebar.height() + $(window).scrollTop());
     
     if ($window.scrollTop() > offset.top) {
     if (parseInt(selisih) > -100) {
     $sidebar.stop().animate({
     marginTop: $window.scrollTop() - offset.top + topPadding
     }, 1000);
     }
     } else {
     $sidebar.stop().animate({
     marginTop: 0
     }, 1000);
     }
     
     if (($(window).scrollTop() + $(window).height()) - elemTop === 270) {
     $sidebar.stop().animate({
     marginTop: ($(window).scrollTop() + $(window).height()) - 270 - $sidebar.height() - 200
     }, 1000);
     }
     });
     */

    $('#carouselExampleControls').on('slid.bs.carousel', function (e) {
        var the_index = $('#carouselExampleControls .carousel-item.active').index('#carouselExampleControls .carousel-item');
        $(".company-projects-thumbnail-list a").removeClass("is-active");
        $('.company-projects-thumbnail-list a').eq(the_index).addClass('is-active');
    });
    $(".company-projects-thumbnail-list a").click(function (e) {
        $(".company-projects-thumbnail-list a").removeClass("is-active");
        $(this).addClass("is-active");
    });
});
