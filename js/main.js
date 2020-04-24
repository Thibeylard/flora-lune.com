/*
=============================================================================
------------------------------------------------------------------------ INITIALIZATION
=============================================================================
*/

/*
------------------------------------------------------------------------ Support Links Data
*/
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

const supportLinkDestination = {
    "tipeeeLink": "https://fr.tipeee.com/flora-lune",
    "facebookLink": "https://www.facebook.com/FloraLune777",
    "twitterLink": "https://twitter.com/lune_flora",
    "wattpadLink": "https://www.wattpad.com/user/FloraLune",
};

/*
------------------------------------------------------------------------ Books Data
*/
const bookIdList = [
    "adda"
];

const bookCovers = {
    "adda": "../img/ADDA_cover.jpg"
};

const bookTitles = {
    "adda": "ADDA"
};

const bookButtons = {
    "adda": {"wattpad": "https://www.wattpad.com/325976668-adda-s1_e01-la-mort-corrompue-prologue"}
};

const bookDescription = {
    "adda": "\"Les anges existent, et ils se font décimer en ce moment-même.\"\n" +
        "Telle est la phrase que lui dit un jour son ami Clément, et que Yuna n'aurait " +
        "jamais crue si tous deux n'avaient pas déjà trouvé la dépouille de l'un des leurs, " +
        "le dos barré d'une plaie en forme de croix. Depuis, et malgré ses efforts pour s'en " +
        "éloigner, il semble que tout la ramène vers les victimes et leurs bourreaux, depuis " +
        "les missions qui lui sont confiées jusqu'à sa rencontre avec Heath, un mage en fin de " +
        "formation qui paraît en savoir bien plus que ce qu'on lui a enseigné à l'école... "
};

/*
------------------------------------------------------------------------ Writings Data
*/
const writingIdList = [
    "mia",
    "philomene"
];

const writingTitles = {
    "mia": "Mia",
    "philomene": "Philomène"
};

const writingButtons = {
    "mia": {"wattpad": "https://www.wattpad.com/733474694-mia-4-septembre"},
    "philomene": {"wattpad": "https://www.wattpad.com/614989477-philom%C3%A8ne-1"}
};

const writingDescription = {
    "mia": "Journal d'une étudiante de septembre à juin.",
    "philomene": "Philomène aurait du être aimée. En la nommant de la sorte, c'est sans doute ce que ses " +
        "parents souhaitaient pour elle. Oui, mais voilà, des parents, Philomène n'en avait plus. " +
        "Ou n'en avait jamais eu. Car si elle en avait eu, plus aucun élément aujourd'hui ne permettait " +
        "de prouver leur existence, comme si ils avaient été définitivement effacés de la surface de la Terre. " +
        "Philomène vivait donc là où vont les enfants qui n'ont pas de maison. Elle n'avait jamais été malheureuse là-bas, " +
        "ni jamais vraiment heureuse, mais qu'importe : elle n'avait jamais connu que cet endroit."
};

let writingDescriptionVisible = {
    "mia": false,
    "philomene": false
};

/*
------------------------------------------------------------------------ Page html generation
*/

$(document).ready(function () {
    selectSupportLink($(".supportLink[alt=tipeeeLink]")); // Select Tipeee support Link as default.
    generateWritings();
});

function generateWritings() {
    let writingSection = $("#writings");
    let writingButtonDictionnary;
    let finalHtml = writingSection.html();
    for (let i = 0; i < writingIdList.length; i++) {
        finalHtml +=
            "<div class=\"writing\" id=\"" + writingIdList[i] + "_writing\">" +
            "            <div class=\"writingBar\">" +
            "                <img class=\"writingBarEnd\" src=\"img/bookmarkEnd.png\" alt=\"\">" +
            "                <div class=\"writingBarBody\">" +
            "                    <span class=\"writingTitle \">" + writingTitles[writingIdList[i]] + "</span>";

        writingButtonDictionnary = writingButtons[writingIdList[i]];
        if (writingButtonDictionnary.hasOwnProperty("wattpad"))
            finalHtml += "<img class=\"writingButton\" src=\"img/wattpadButton.png\" alt=\"wattpadButton\" id='" + writingIdList[i] + "_wattpad'>";
        if (writingButtonDictionnary.hasOwnProperty("youtube"))
            finalHtml += "<img class=\"writingButton\" src=\"img/youtubeButton.png\" alt=\"youtubeButton\" id='" + writingIdList[i] + "_youtube'>";

        finalHtml +=
            "                    <img class=\"writingButton\" src=\"img/detailsButton.png\" alt=\"detailsButton\" id=\"" + writingIdList[i] + "_details\">" +
            "                </div>" +
            "            </div>" +
            "            <p class=\"writingSummary\" id=\"" + writingIdList[i] + "_summary\">" +
            writingDescription[writingIdList[i]] +
            "            </p>" +
            "        </div>"
    }
    writingSection.html(finalHtml);

    $(".writingButton").click(function () {
        let writingId = $(this).attr("id").split("_")[0];
        let buttonId = $(this).attr("id").split("_")[1];

        if (buttonId === "details") {
            if (writingDescriptionVisible[writingId]) {
                $(`\#${writingId}_summary`).slideUp();
                writingDescriptionVisible[writingId] = false;
            } else {
                $(`\#${writingId}_summary`).slideDown();
                writingDescriptionVisible[writingId] = true;
            }
        } else {
            console.log(writingId);
            console.log(buttonId);
            let selectedWritingButtons = writingButtons[writingId];
            window.location.href = selectedWritingButtons[buttonId];
        }
    });
}

/*
=============================================================================
------------------------------------------------------------------------ EVENT HANDLERS
=============================================================================
*/

$(".pencilLabels").click(function (e) { // Nav button click event : Scroll to according section when clicked.
    e.preventDefault();
    let destinationId = $(this).attr("href");
    let destination = $(`section${destinationId}`);
    $('html,body').animate({scrollTop: destination.offset().top}, 'slow');
});

/*
------------------------------------------------------------------------ Book zoom events
*/

let bookDetailsWrapper = $("#bookZoomWrapper");
let bookCover = $(".bookZoomLink");
let selectedBook = $("#bookCover");
let bookTitle = $("#bookTitle");
let bookSummary = $("#bookSummary");


bookCover.click(function () {
    bookDetailsWrapper.css("display", "flex");
    selectedBook.attr("src", $(this).attr("src"));
    bookTitle.html("ADDA");
    bookSummary.html("Test");
});

// Get the <span> element that closes the modal
let span = $("#closeBookZoom");

// When the user clicks on <span> (x), close the modal
span.click(function () {
    bookDetailsWrapper.css("display", "none");
});


$(".supportLink").hover(
    function () {
        selectSupportLink($(this));
    },
    function () {
    }
);

$(".supportLink").click(function () {
    socialMediaLink($(this));
});

$(".socialMediaIcon").click(function () {
    socialMediaLink($(this));
});

function socialMediaLink(el) {
    window.location.href = supportLinkDestination[el.attr("alt")];
}

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
