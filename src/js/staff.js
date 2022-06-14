$(document).ready(() => {
    const partsHeight = $(window).height() - 115;
    $('.barista').height(partsHeight);
    $('#lastText').height(partsHeight);
    let zindex = -1;

    $('.infinite1').each(function (index) {
        $(this).css('z-index', zindex);
        zindex -= 1;
    });
    $('.infinite2').each(function (index) {
        $(this).css('z-index', zindex);
        zindex -= 1;
    });

    $(document).scroll(() => {
        $('.barista2').each(function (index) {
            if ($(this).offset().top - $(window).scrollTop() < 115) {
                if ($(this).attr('data-triggered') === 'false') {
                    $(this).attr('data-triggered', 'true');
                    console.log('triggered');
                    $(this).find('.infinite2').addClass('infinite1').removeClass('infinite2');
                    $(this).find('.sticky2').addClass('sticky1').removeClass('sticky2');
                }
            } else if ($(this).offset().top - $(window).scrollTop() > 115) {
                if ($(this).attr('data-triggered') === 'true') {
                    $(this).attr('data-triggered', 'false');
                    console.log('triggeredagain');
                    $(this).find('.infinite1').addClass('infinite2').removeClass('infinite1');
                    $(this).find('.sticky1').addClass('sticky2').removeClass('sticky1');
                }
            }
        });
    });
    console.log($('.fill').position().top);
});
