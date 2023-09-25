(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel

    $(".header-carousel").owlCarousel({
        items: 3,
        rtl: true,
        dots: false,
        loop: true,
        nav: false,

        onChanged: function (event) {
            // Scroll to the top of the page
            $('.section.active').first()
        }
    });
    //faq
    const questions = document.getElementsByClassName('accordion-title')//Gets all the questions (plus icon)

    for (const question of questions) {
        const answer = question.parentElement.querySelector('.accordion-content')
        const remove = question.parentElement.querySelector(".remove")
        const add = question.parentElement.querySelector(".add")
        let open = false //Variable to check if the answer is visible or not

        function openAnswer() {
            if (open == true) { //If you click the question while the answer is visible it will stop being visible and open will change it's value to false
                add.style.display = "block";
                remove.style.display = "none";
                answer.style.overflow = "hidden";
                answer.style.maxHeight = '0';
                open = false;
            } else { //If you click the question while the answer is not visible it will start being visible and open will change it's value to true
                add.style.display = "none";
                remove.style.display = "block";
                answer.style.maxHeight = "300px";
                answer.style.overflow = "visible";
                open = true;
            }
        }

        question.addEventListener('click', openAnswer)
    }


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        rtl: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-right"></i>',
            '<i class="bi bi-arrow-left"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


})(jQuery);

