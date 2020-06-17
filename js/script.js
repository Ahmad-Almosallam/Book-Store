$(document).ready(function() {
    $(window).scroll(function() {
        let pos = $(this).scrollTop();
        if (pos >= 350) {
            $('.gallery').addClass('change')
        } else
            $('.gallery').removeClass('change');
    });
});