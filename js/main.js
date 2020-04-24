// Initialization
$(document).ready(function () {
    selectSupportLink($(".supportLink[alt=tipeeeLink]"));
});


// Scroll to according section when clicked.
$(".pencilLabels").click(function (e) {
    e.preventDefault();
    let destinationId = $(this).attr("href");
    console.log(destinationId);
    let destination = $(`section${destinationId}`);
    $('html,body').animate({scrollTop: destination.offset().top}, 'slow');
});

// Pencils move when hover OR when scroll corresponding to their position.
$(document).scroll(function () {

    if ($(window).scrollTop() > $("#support").scrollTop()) {
        checkSectionIdScroll($("#support").attr("id"));
    } else if ($(window).scrollTop() > $("#author").scrollTop()) {
        checkSectionIdScroll($("#author").attr("id"));
    } else if ($(window).scrollTop() > $("#writings").scrollTop()) {
        checkSectionIdScroll($("#writings").attr("id"));
    } else if ($(window).scrollTop() > $("#books").scrollTop()) {
        checkSectionIdScroll($("#books").attr("id"));
    } else if ($(window).scrollTop() > $("#page").scrollTop()) {
        checkSectionIdScroll($("#page").attr("id"));
    }
});

function checkSectionIdScroll(sectionId) {
    console.log(sectionId);
}

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


// Support links

const supportLinkTitle = {
    "tipeeeLink": "Tipeee",
    "facebookLink": "Facebook",
    "twitterLink": "Twitter",
    "wattpadLink": "Wattpad",
};

const supportLinkDescription = {
    "tipeeeLink": "Tipee est une plate-forme de financement participatif ! Si vous aimez les oeuvres signées Flora Lune, " +
        "                vous pouvez lui laisser des \"pourboires\" mensuels, et ainsi avoir accès à des contenus exclusifs ! " +
        "                Vous trouverez plus de détails sur sa page dédiée.",
    "facebookLink": "En aimant la page \"Flora Lune\", vous lui offrez une plus grande visibilité. Il est également possible " +
        "de partager avec vos proches son contenu, et donc de la faire connaître plus facilement. Bien que ce soit une aide moins " +
        "concrète qu'avec Tipeee, partager le contenu d'un artiste est primordial. C'est aussi gratuit !",
    "twitterLink": "Twitter est le réseau social de partage par excellence. En suivant Flora, et en faisant suivre ses tweets, vous " +
        "contribuez grandement à lui donner de la visiblité sur internet. C'est rapide, sans frais, et cela donne toujours un bon coup " +
        "de pouce. N'hésitez pas !",
    "wattpadLink": "Wattpad est une plate-forme sociale d'auteurs et de lecteurs. Si vous lisez une des oeuvres de Flora sur Wattpad, " +
        "n'hésitez pas à lui laisser un vote, voire même des commentaires sur vos passages préférés ou au contraire sur ce qui vous a moins " +
        "plu. Les retours constructifs sur l'oeuvre sont à la fois encourageants et formateurs.",
};

function selectSupportLink(linkSelector) {
    linkSelector.css("height", "125px");
    linkSelector.css("margin", "0");

    let linkAlt = linkSelector.attr("alt");
    let otherLinks = $(`.supportLink[alt!=${linkAlt}]`);

    otherLinks.css("margin", "25px 12px 0 13px");
    otherLinks.css("height", "100px");

    $("#supportTitle").html(supportLinkTitle[linkAlt]);
    $("#supportDescription").html(supportLinkDescription[linkAlt]);
}

$(".supportLink").hover(
    function () {
        selectSupportLink($(this));
    },
    function () {
    }
);