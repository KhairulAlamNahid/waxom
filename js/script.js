$(function () {
    // venobox js
    $('.venobox').venobox();

    // couner up js
    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });

    // back to top js
    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });

    // fixed menu js
    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();
        if (scrolling > 0) {
            $('.navbar').addClass('fixed');
        }
        else {
            $('.navbar').removeClass('fixed');
        }
    })

    //animation scroll js
    let html_body = $('html, body');
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 88
                }, 500);
                return false;
            }
        }
    });

    // wow js
    new WOW().init();

    // scroll down js
    $(function () {
        $('a[href*=#]').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
        });
    });

    // preloader js
    $(window).on('load', function () {
        $('.preloader').delay(2000).fadeOut(800);
    })

});