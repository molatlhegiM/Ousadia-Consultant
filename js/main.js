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
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    document.addEventListener("DOMContentLoaded", function() {
        var toggles = document.querySelectorAll('.read-more-toggle');
    
        toggles.forEach(function(toggle) {
            toggle.addEventListener('click', function() {
                var parent = this.closest('.about-des-col');
                var shortText = parent.querySelector('.short-text');
                var fullText = parent.querySelector('.full-text');
                
                if (fullText.style.display === 'none') {
                    shortText.style.display = 'none';
                    fullText.style.display = 'block';
                    this.classList.add('read-more');
                } else {
                    shortText.style.display = 'block';
                    fullText.style.display = 'none';
                    this.classList.remove('read-more');
                }
            });
        });
    });

    
    document.getElementById('reviewForm').addEventListener('submit', function(e) {
        e.preventDefault();
    
        const name = document.getElementById('reviewerName').value;
        const review = document.getElementById('reviewText').value;
    
        const carouselInner = document.querySelector('.carousel-inner');
    
        const newReviewItem = document.createElement('div');
        newReviewItem.classList.add('carousel-item');
        if (carouselInner.children.length === 0) {
            newReviewItem.classList.add('active');
        }
    
        newReviewItem.innerHTML = `
            <h5>${name}</h5>
            <p>"${review}"</p>
        `;
    
        carouselInner.appendChild(newReviewItem);
    
        // Clear the form
        document.getElementById('reviewForm').reset();
    });
        

    
})(jQuery);

