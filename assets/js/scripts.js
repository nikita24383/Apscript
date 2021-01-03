/*!
    * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 50) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

// let launchDate = new Date("Feb 5, 2021 08:00:00").getTime();
// let timer = setInterval(tick, 1000);

// function tick() {
//     let now = new Date().getTime();
//     let t = launchDate - now;
//     if (t > 0) {
//         let days = Math.floor(t / (1000 * 60 * 60 * 24));
//         if (days < 10)
//             days = "0" + days;

//         let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         if (hours < 10)
//             hours = "0" + hours;

//         let min = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
//         if (min < 10)
//             min = "0" + min;

//         let sec = Math.floor((t % (1000 * 60)) / (1000));
//         if (sec < 10)
//             sec = "0" + sec;

//         let time = `${days} : ${hours} : ${min} : ${sec}`
//         document.querySelector('.countdown').innerHTML = time;
//     }
// }
