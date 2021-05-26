$(document).ready(function () {
    //upload images
    $(function () {
        var imagesPreview = function (input, placeToInsertImagePreview) {
            $('.gallery').empty();
            if (input.files) {
                var filesAmount = input.files.length;
                for (i = 0; i < filesAmount; i++) {
                    var reader = new FileReader();
                    reader.onload = function (event) {
                        var image = document.createElement('img');
                        image.setAttribute('src', event.target.result);
                        var body = document.createElement('div');
                        var button = document.createElement('button');
                        var input = document.createElement('input');
                        input.setAttribute('name', 'images[]');
                        input.setAttribute('type', 'hidden');
                        button.setAttribute('class', 'close');
                        button.innerHTML = '<i class="fa fa-times-circle"></i>';
                        body.appendChild(image);
                        body.appendChild(input);
                        body.appendChild(button);
                        body.setAttribute('class', 'images');
                        console.log(body);
                        $('.gallery').append(body);
                        ($($.parseHTML(body)).appendTo(placeToInsertImagePreview));
                    }
                    reader.readAsDataURL(input.files[i]);
                }
            }
        };
        $(document).on('click', '.close', function (event) {
            event.preventDefault();
            $(this).parent().remove();
        });
        $('#gallery-photo-add').on('change', function () {
            imagesPreview(this, 'div.gallery');
        });
    });
    // scroll nice 
    $('nav ul li a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    // Start Navbar 

    $('.overlay').fadeOut();

    $(".mob-collaps").click(function () {
        $(this).parents('nav').find("ul.site-nav").toggleClass('nav-open');
        $('.overlay').fadeToggle();
        $(this).find("span:first-child").toggleClass('rotate');
        $(this).find("span:nth-child(2)").toggleClass('none');
        $(this).find("span:nth-child(3)").toggleClass('rotate2');
    });

    $(".overlay").click(function () {
        $("nav ul.site-nav").removeClass('nav-open');
        $(this).fadeOut();
        $(".mob-collaps span:first-child").removeClass('rotate');
        $(".mob-collaps span:nth-child(2)").removeClass('none');
        $(".mob-collaps span:nth-child(3)").removeClass('rotate2');
    })

    // Start Testamonial
    $('#owl-student').owlCarousel({
        center: true,
        items: 6,
        loop: true,
        margin: 20,
        responsive: {
            300: {
                items: 1
            },

            700: {
                items: 3
            },
            991:{
                items:6
            }
        }

    });
});
//loader
$(window).on('load', function () {
    $("#preloader_6").fadeOut(2000, function () {
        $("body").fadeIn(1000)
    })
})