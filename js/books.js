
var minScrollIndex = 0;
var maxScrollIndex = $(".slideshowElementWrapper").length -1;
var currentScrollIndex = 0;

setArrows();

$(".elementScrollLeft").click(function () {
    if(!isMaxScrollLeft()) {
        currentScrollIndex -= 1;
        $(".slideshowElementWrapper").animate({
            left: `-${$(".slideshowElementWrapper").outerWidth(true) * currentScrollIndex}px`
        })
    }
    setArrows();
});

$(".elementScrollRight").click(function () {
    if(!isMaxScrollRight()) {
        currentScrollIndex += 1;
        $(".slideshowElementWrapper").animate({
            left: `-${$(".slideshowElementWrapper").outerWidth(true) * currentScrollIndex}px`
        })
    }
    setArrows();
});

function setArrows () {
    if(isMaxScrollLeft()) {
        $(".elementScrollLeft").css("filter","grayscale(100%)");
        $(".elementScrollLeft").css("opacity","50%");
    } else {
        $(".elementScrollLeft").css("filter","grayscale(0%)");
        $(".elementScrollLeft").css("opacity","100%");
    }

    if(isMaxScrollRight()) {
        $(".elementScrollRight").css("filter","grayscale(100%)");
        $(".elementScrollRight").css("opacity","50%");
    } else {
        $(".elementScrollRight").css("filter","grayscale(0%)");
        $(".elementScrollRight").css("opacity","100%");
    }
}

function isMaxScrollRight() {
    return (currentScrollIndex === maxScrollIndex);
}

function isMaxScrollLeft() {
    return (currentScrollIndex === minScrollIndex);
}