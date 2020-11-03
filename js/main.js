/*
=============================================================================
------------------------------------------------------------------------ INITIALIZATION
=============================================================================
*/

/*
------------------------------------------------------------------------ Support Links Data
*/

const supportLinkDescription = {
    "tipeeeLink": "Tipee est une plate-forme de financement participatif. Si vous aimez ce que je crée, " +
        "vous pouvez me laisser des \"pourboires\" mensuels, et ainsi avoir accès à des contenus exclusifs ! " +
        "Vous trouverez plus de détails sur ma page dédiée. C'est la forme d'aide la plus concrète puisqu'elle " +
        "pourrait me permettre, à terme, de me consacrer uniquement à l'écriture.",
    "facebookLink": "En aimant ma page Facebook, vous m'offrez une plus grande visibilité. Il est également possible " +
        "de partager avec vos proches son contenu, et donc de faire connaître plus facilement mon travail. Bien que ce soit une aide moins " +
        "concrète qu'avec Tipeee, le partage de contenu est primordial. C'est aussi gratuit !",
    "twitterLink": "Twitter est le réseau social de partage par excellence. En me suivant, et en faisant suivre mes tweets, vous " +
        "contribuez grandement à me donner de la visiblité sur internet. C'est rapide, sans frais, et cela donne toujours un bon coup " +
        "de pouce. Je vous en serais très reconnaissante !",
    "scribayLink": "Scribay est un réseau social axé sur l'écriture et la lecture ! Inscription en un clic avec un compte Facebook, " +
        "n'hésitez pas à me laisser un petit j'aime, voire même des commentaires sur vos passages préférés ou au contraire sur ce qui vous a moins " +
        "plu. Les retours constructifs sur l'oeuvre sont à la fois encourageants et formateurs pour moi."
};

const supportLinkDestination = {
    "tipeeeLink": "https://fr.tipeee.com/flora-lune",
    "facebookLink": "https://www.facebook.com/FloraLune777",
    "twitterLink": "https://twitter.com/lune_flora",
    "scribayLink": "https://www.scribay.com/author/2126495238/flora-lune",
};


/*
------------------------------------------------------------------------ GLOBAL
*/

$(document).ready(function() {
    selectSupportLink($(".supportLink[alt=tipeeeLink]")); // Select Tipeee support Link as default.
});


/*
=============================================================================
------------------------------------------------------------------------ EVENT HANDLERS
=============================================================================
*/

/*
--------------------------------------------------------- HEADER Events
*/
let navPencils = $(".pencils");
let pencilTexts = $(".pencilLabels");

pencilTexts.hover(
    function() {
        $(this).animate({
            left: "60px"
        });
        $(this).next(navPencils).animate({
            margin: "-5px -5px -5px -20px"
        })
    },
    function() {
        $(this).animate({
            left: "40px"
        });
        $(this).next(navPencils).animate({
            margin: "-5px -5px -5px -40px"
        })
    });

pencilTexts.click(function(e) { // Nav button click event : Scroll to according section when clicked.
    e.preventDefault();
    let destinationId = $(this).attr("href");
    let destination = $(`section${destinationId}`);
    $('html,body').animate({ scrollTop: destination.offset().top - 40 }, 'slow');
});

/*
------------------------------------------------------------ WRITINGS events
*/
/*
-------------- Details Button 
*/
$(".detailsButton").click(function() {
    let writing = $(this).closest('.writing');
    let writingSummary = $(writing).children('.writingSummary').first();

    if ($(writingSummary).css('--is-down') === 'true') {
        $(writingSummary).css('--is-down', 'false');
        writingSummary.slideUp();
    } else {
        $(writingSummary).css('--is-down', 'true');
        writingSummary.slideDown();
    }
});

/*
------------------------------------------------------------ SUPPORT events
*/
let supportLinks = $(".supportLink");

supportLinks.hover(
    function() {
        selectSupportLink($(this));
    },
    function() {}
);

supportLinks.click(function() {
    socialMediaLink($(this));
});

$(".socialMediaIcon").click(function() {
    socialMediaLink($(this));
});

function socialMediaLink(el) {
    window.location.href = supportLinkDestination[el.attr("alt")];
}

function selectSupportLink(linkSelector) {
    let linkAlt = linkSelector.attr("alt");
    $(linkSelector).css('height', $(linkSelector).css('--focus-height'));
    $(linkSelector).css('margin', $(linkSelector).css('--focus-margin'));

    $(".supportLink").each(function(index, element) {
        if ($(this).attr("alt") !== linkAlt) {
            $(this).css('height', $(this).css('--unfocus-height'));
            $(this).css('margin', $(this).css('--unfocus-margin'));
        }
    });

    let des = $("#supportDescription")
    des.html(supportLinkDescription[linkAlt]);
}