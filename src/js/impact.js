$(document).ready(function () {
    $(document).on('click', '.impact_whatsapp', function () {
        $(this).siblings('.card-text').first().toggleClass('show-more');
        console.log($(this));
        if (this.innerText === 'Read More') {
            this.innerText = 'Read Less';
        } else {
            this.innerText = 'Read More';
        }
    });
});
