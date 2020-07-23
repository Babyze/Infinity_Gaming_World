$('a[href*="#comment"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
$('.collapse').on('shown.bs.collapse', function() {
    $(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
}).on('hidden.bs.collapse', function() {
    $(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
}); //this is for plus and minus item navbar
$(document).ready(function() {
    $("#sidebar-game").mCustomScrollbar({
        theme: "minimal"
    });

    $("#sidebar-giftcard").mCustomScrollbar({
        theme: "minimal"
    });

    $("#sidebar-search").mCustomScrollbar({
        theme: "minimal"
    });

    $("#footer-end").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function() {
        $('#sidebar-game').removeClass('active');
        $('#sidebar-giftcard').removeClass('active');
        $('#sidebar-search').removeClass('active');
        $('#footer-end').removeClass('active');
        $('.overlay').removeClass('active');
        $('#content').removeClass('active');
        $('body').removeClass('active');
    });

    $('#sidebarGame').on('click', function() {
        $('#sidebar-game').addClass('active');
        $('#content').addClass('active');
        $('body').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        $('#sidebar-giftcard').removeClass('active');
        $('#sidebar-search').removeClass('active');
        $('#footer-end').removeClass('active');
    });

    $('#sidebarGiftcard').on('click', function() {
        $('#sidebar-giftcard').addClass('active');
        $('#content').addClass('active');
        $('body').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        $('#sidebar-game').removeClass('active');
        $('#sidebar-search').removeClass('active');
    });

    $('#sidebarSearch').on('click', function() {
        $('#sidebar-search').addClass('active');
        $('#content').addClass('active');
        $('body').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        $('#sidebar-game').removeClass('active');
        $('#sidebar-giftcard').removeClass('active');
        $('#footer-end').removeClass('active');
    });

    $('#showFooter').on('click', function() {
        $('#footer-end').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        $('#sidebar-game').removeClass('active');
        $('#sidebar-giftcard').removeClass('active');
        $('#sidebar-search').removeClass('active');
        $('#content').removeClass('active');
    });
});