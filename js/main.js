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
    "scribayLink": "Scribay",
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
    "scribayLink": "Scribay est un réseau social axé sur l'écriture et la lecture ! Inscription en un clic avec un compte Facebook, " +
        "n'hésitez pas à lui laisser un j'aime, voire même des commentaires sur vos passages préférés ou au contraire sur ce qui vous a moins " +
        "plu. Les retours constructifs sur l'oeuvre sont à la fois encourageants et formateurs."
};

const supportLinkDestination = {
    "tipeeeLink": "https://fr.tipeee.com/flora-lune",
    "facebookLink": "https://www.facebook.com/FloraLune777",
    "twitterLink": "https://twitter.com/lune_flora",
    "scribayLink": "https://www.scribay.com/author/2126495238/flora-lune",
};

/*
------------------------------------------------------------------------ Books Data
*/
const bookIdList = [
    "adda"
];

const bookCovers = {
    "adda": "img/ADDA_cover.jpg"
};

const bookTitles = {
    "adda": "ADDA"
};

const bookButtons = {
    "adda": {
        "scribay": "https://www.scribay.com/text/1166040301/adda---saison-1---les-anges-dechus",
        "wattpad": "https://www.wattpad.com/325976668-adda-s1_e01-la-mort-corrompue-prologue"
    }
};

const bookDescriptions = {
    "adda": "\"Les anges existent, et ils se font décimer en ce moment-même.\"<br>" +
        "Telle est la phrase que lui dit un jour son ami Clément, et que Yuna n'aurait " +
        "jamais crue si tous deux n'avaient pas déjà trouvé la dépouille de l'un des leurs, " +
        "le dos barré d'une plaie en forme de croix. Depuis, et malgré ses efforts pour s'en " +
        "éloigner, il semble que tout la ramène vers les victimes et leurs bourreaux, des " +
        "missions qui lui sont confiées jusqu'à sa rencontre avec Heath, un mage en fin de " +
        "formation qui paraît en savoir bien plus que ce qu'on lui a enseigné à l'école... "
};

const bookCharacters = {
    "adda": {
        "yuna": "",
        "heath": "",
        "tommy": "",
        "clement": "",
    }
}

/*
------------------------------------------------------------------------ Writings Data
*/
const writingIdList = [
    "ameEgaree",
    "balTulipe",
    "mia",
    "philomene"
];

const writingTitles = {
    "ameEgaree": "L'âme égarée",
    "balTulipe": "Le bal des Tulipe",
    "mia": "Mia",
    "philomene": "Philomène"
};

const writingButtons = {
    "ameEgaree": {
        "scribay": "https://www.scribay.com/text/808338942/l-ame-egaree",
        "revedelignes": "https://revedelignes.com/titres/lame-egaree/"
    },
    "balTulipe": {
        "scribay": "https://www.scribay.com/text/1954759394/le-bal-des-tulipe"
    },
    "mia": {
        "scribay": "https://www.scribay.com/text/1720137389/mia",
        "wattpad": "https://www.wattpad.com/733474694-mia-4-septembre"
    },
    "philomene": {
        "wattpad": "https://www.wattpad.com/614989477-philom%C3%A8ne-1",
        "revedelignes": "https://revedelignes.com/titres/philomene-partie-1/"
    }
};

const writingDescriptions = {
    "ameEgaree": "Brutalement, sans crier gare, la mort sépare un beau jour Riley de sa sœur jumelle, Miley. Injustice… ou juste retour des choses ?",
    "balTulipe": "\"Cependant, un matin, il retrouva ses protégées mais hélas, mille fois hélas, aucune d'entre elles ne l'accueillit. Tête baissées, les pétales négligées, les fleurs dormaient à poing fermé.\"\n" +
        "Extrait de Siméon le Papillon, d'Antoon Krings, dont cette histoire se veut la réécriture.",
    "mia": "Journal d'une étudiante de septembre à juin.",
    "philomene": "Philomène aurait du être aimée. En la nommant de la sorte, c'est sans doute ce que ses " +
        "parents souhaitaient pour elle. Oui, mais voilà, des parents, Philomène n'en avait plus. " +
        "Ou n'en avait jamais eu. Car si elle en avait eu, plus aucun élément aujourd'hui ne permettait " +
        "de prouver leur existence, comme si ils avaient été définitivement effacés de la surface de la Terre. " +
        "Philomène vivait donc là où vont les enfants qui n'ont pas de maison. Elle n'avait jamais été malheureuse là-bas, " +
        "ni jamais vraiment heureuse, mais qu'importe : elle n'avait jamais connu que cet endroit."
};

let writingDescriptionVisible = {
    "ameEgaree": false,
    "balTulipe": false,
    "mia": false,
    "philomene": false
};

/*
------------------------------------------------------------------------ Page html generation
*/

$(document).ready(function () {
    selectSupportLink($(".supportLink[alt=tipeeeLink]")); // Select Tipeee support Link as default.
    //generateBooks();
    generateWritings();
    setEventsOnDynamicElements();
});

function generateBooks() {
    // TODO Make function on same dynamic model as generateWritings. Also insert slideshow for multiple books.
}

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
        if (writingButtonDictionnary.hasOwnProperty("scribay"))
            finalHtml += "<img class=\"writingButton\" src=\"img/scribayButton.png\" alt=\"scribayButton\" id='" + writingIdList[i] + "_scribay' title='Lire sur Scribay'>";
        if (writingButtonDictionnary.hasOwnProperty("wattpad"))
            finalHtml += "<img class=\"writingButton\" src=\"img/wattpadButton.png\" alt=\"wattpadButton\" id='" + writingIdList[i] + "_wattpad' title='Lire sur Wattpad'>";
        if (writingButtonDictionnary.hasOwnProperty("revedelignes"))
            finalHtml += "<img class=\"writingButton\" src=\"img/revedelignesButton.png\" alt=\"revedelignesButton\" id='" + writingIdList[i] + "_revedelignes' title='Lire sur Rêve de Lignes'>";
        if (writingButtonDictionnary.hasOwnProperty("youtube"))
            finalHtml += "<img class=\"writingButton\" src=\"img/youtubeButton.png\" alt=\"youtubeButton\" id='" + writingIdList[i] + "_youtube' title='Voir sur Youtube'>";

        finalHtml +=
            "                    <img class=\"writingButton\" src=\"img/detailsButton.png\" alt=\"detailsButton\" id=\"" + writingIdList[i] + "_details\">" +
            "                </div>" +
            "            </div>" +
            "            <p class=\"writingSummary\" id=\"" + writingIdList[i] + "_summary\">" +
            writingDescriptions[writingIdList[i]] +
            "            </p>" +
            "        </div>"
    }
    writingSection.html(finalHtml);

}

function setEventsOnDynamicElements() {

    /*
    ----------- Book cover click event
    */
    let bookDetailsWrapper = $("#bookZoomWrapper");
    let bookCover = $(".bookZoomLink");
    let selectedBook = $("#bookCover");
    let bookTitle = $("#bookTitle");
    let bookSummary = $("#bookSummary");


    bookCover.click(function () {
        let bookId = $(this).attr("id").split("_")[0]; // attribut id = idRoman_cover
        bookDetailsWrapper.css("display", "flex");
        selectedBook.attr("src", bookCovers[bookId]);
        bookTitle.html(bookTitles[bookId]);
        bookSummary.html(bookDescriptions[bookId]);
    });

    /*
    -------------- Writings click event
    */
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
            let selectedWritingButtons;

            if (writingButtons.hasOwnProperty(writingId))
                selectedWritingButtons = writingButtons[writingId];
            else
                selectedWritingButtons = bookButtons[writingId];

            window.location.href = selectedWritingButtons[buttonId];
        }
    });
}

/*
=============================================================================
------------------------------------------------------------------------ EVENT HANDLERS
=============================================================================
*/

/*
------------------------------------------------------------------------Header elements events
*/
let navPencils = $(".pencils");
let pencilTexts = $(".pencilLabels");

pencilTexts.hover(
    function () {
        $(this).animate({
            left: "60px"
        });
        $(this).next(navPencils).animate({
            margin: "-5px -5px -5px -20px"
        })
    },
    function () {
        $(this).animate({
            left: "40px"
        });
        $(this).next(navPencils).animate({
            margin: "-5px -5px -5px -40px"
        })
    });
pencilTexts.click(function (e) { // Nav button click event : Scroll to according section when clicked.
    e.preventDefault();
    let destinationId = $(this).attr("href");
    let destination = $(`section${destinationId}`);
    $('html,body').animate({scrollTop: destination.offset().top}, 'slow');
});

/*
------------------------------------------------------------------------ Book static elements events
*/

// Get the <span> element that closes the modal
let span = $("#closeBookZoom");

// When the user clicks on <span> (x), close the modal
span.click(function () {
    $("#bookZoomWrapper").css("display", "none");
});

/*
------------------------------------------------------------------------Support elements events
*/
let supportLinks = $(".supportLink");
supportLinks.hover(
    function () {
        selectSupportLink($(this));
    },
    function () {
    }
);

supportLinks.click(function () {
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
