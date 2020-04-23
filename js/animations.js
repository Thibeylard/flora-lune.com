// Writings Details Buttons

// TODO detailsDown would be an array of boolean usable by each writing.
var detailsDown = false;
$("#detailsButton").click(function () {
    if (detailsDown) {
        $(".writingSummary").slideUp();
        detailsDown = false;
    } else {
        $(".writingSummary").slideDown();
        detailsDown = true;
    }
});