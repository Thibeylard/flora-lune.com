$(".pencilLabels").click(function (e) {
    e.preventDefault();
    let destinationId = $(this).attr("href");
    console.log(destinationId);
    let destination = $(`section${destinationId}`);
    $('html,body').animate({scrollTop: destination.offset().top}, 'slow');
});