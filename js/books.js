setSlideshowsMaxSlideIndex();

$(".elementScrollLeft").click(function() {
    let section = $(this).closest('.slideshowSection');
    let slideshow = $(section).children('.slideshow').first();
    let slideshowElements = $(slideshow).children('.slideshowElementWrapper');

    if (!isMaxScrollLeft(slideshow)) {
        $(slideshow).css('--current-slide-index', Number.parseInt($(slideshow).css('--current-slide-index')) - 1)
        slideshowElements.animate({
            left: `-${slideshowElements.outerWidth(true) * slideshow.css('--current-slide-index')}px`
        })
    }
    setArrows();
});

$(".elementScrollRight").click(function() {
    let section = $(this).closest('.slideshowSection');
    let slideshow = $(section).children('.slideshow').first();
    let slideshowElements = $(slideshow).children('.slideshowElementWrapper');

    if (!isMaxScrollRight(slideshow)) {
        $(slideshow).css('--current-slide-index', Number.parseInt($(slideshow).css('--current-slide-index')) + 1)
        slideshowElements.animate({
            left: `-${slideshowElements.outerWidth(true) * slideshow.css('--current-slide-index')}px`
        })
    }
    setArrows();
});

function setSlideshowsMaxSlideIndex() {
    $('.slideshow').each(function(index, element) {
        // element == this
        $(this).css('--max-slide-index', $(this).children('.slideshowElementWrapper').length - 1);
    });

    setArrows();
}

function setArrows() {
    let section = $('.slideshowSection');

    $(section).each(function(index, element) {
        // element == this
        let slideshow = $(this).children('.slideshow').first();
        let scrollerWrapper = $(this).children(".slideshowScrollersWrapper").first();
        if (isMaxScrollLeft(slideshow)) {
            $(scrollerWrapper).children(".elementScrollLeft").first().css("opacity", "50%");
        } else {
            $(scrollerWrapper).children(".elementScrollLeft").first().css("opacity", "100%");
        }

        if (isMaxScrollRight(slideshow)) {
            $(scrollerWrapper).children(".elementScrollRight").first().css("opacity", "50%");
        } else {
            $(scrollerWrapper).children(".elementScrollRight").first().css("opacity", "100%");
        }
    });

}

function isMaxScrollRight(slideshow) {
    return ($(slideshow).css('--current-slide-index') == Number.parseInt($(slideshow).css('--max-slide-index')));
}

function isMaxScrollLeft(slideshow) {
    return ($(slideshow).css('--current-slide-index') == 0);
}