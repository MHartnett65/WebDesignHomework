$(document).ready(function() {
    
    $('.navbar-toggler').click(function() {
        $('.collapse').toggleClass('show');
    });

    
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var slides = $('.slide');
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = 'block';  
        setTimeout(showSlides, 3000); 
    }
});
