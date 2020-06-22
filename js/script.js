$(document).ready(function() {

    $('.hamburger-menu').click(function() {
        $('.navigation').toggleClass('change');
    });

    $(window).scroll(function() {
        let pos = $(this).scrollTop();
        if (pos >= 350) {
            $('.gallery').addClass('change')
        } else
            $('.gallery').removeClass('change');
    });

    $('.writers-accordion').click(function(event) {

        if (event.target.id.split('-')[0] === 'button') {
            $('#book-1').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book1.jpg');
            $('#book-2').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book2.jpg');
        }

    });

    var lastWidth = $(window).width();

    $(window).resize(function() {
        if ($(window).width() != lastWidth) {
            //execute code here.
            lastWidth = $(window).width();
            if (lastWidth < 992) {
                $('#book-div-1').addClass('order-0');
                $('#book-div-2').addClass('order-1');
                $('#writer').addClass('order-2');
            } else {
                $('#book-div-1').removeClass('order-0');
                $('#book-div-2').removeClass('order-1');
                $('#writer').removeClass('order-2');
            }

        }
    })


});