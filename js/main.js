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
    "tipeeeLink": "Tipee est une plate-forme de financement participatif ! Si vous aimez ce que je crée, " +
        "vous pouvez me laisser des \"pourboires\" mensuels, et ainsi avoir accès à des contenus exclusifs ! " +
        "Vous trouverez plus de détails sur ma page dédiée.",
    "facebookLink": "En aimant la page \"Flora Lune\", vous m'offrez une plus grande visibilité. Il est également possible " +
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

const bookInfos = {
    "adda": {
        "synopsis": "Bannis et emprisonnés pendant des siècles par les anges, les nephilims se vengent et pourchassent leurs " +
            "bourreaux jusqu'en Ikkai, le monde des humains. Et, lorsqu'elle trouve le cadavre de l'un d'entre eux amputé " +
            "de ses ailes, Yuna ignore encore qu'elle s'apprête à prendre part à une guerre à laquelle elle n'est pas étrangère... ",
        "heath": "Insupportable bourreau des coeurs, manipulateur invétéré, Heath est pourtant l'un, si ce n'est LE personnage central d'ADDA." +
            "<br/>" +
            "Officiellement en dernière année de magie thérapeutique et défensive, Heath maîtrise également la magie élémentaire, la magie minérale, le combat à mains nues et la quasi-totalité des armes existantes, sa préférée étant le pistolet." +
            "<br/>" +
            "Un \"mage un peu cheaté\" comme je l'ai parfois entendu appeler... Oui, et non. En réalité, rien ne me fait plus plaisir que de confronter Heath à ceux qui le surpassent, car c'est là qu'il révèle sa vraie valeur." +
            "<br/>" +
            "En plus d'être extrêmement polyvalent, il est d'une intelligence rare... ainsi que d'une arrogance à laquelle il peut imputer ses plus lourdes erreurs de jugement.\n" +
            "<br/>" +
            "Véritable bourreau des coeurs, Heath ne quitte jamais un endroit sans avoir séduit une femme, ou un homme. Frivole, oui et non. S'il aime avoir des aventures pour le simple plaisir de la séduction, il est capable d'aimer plusieurs personnes à la fois avec la même force." +
            "<br/>" +
            "Mais, le vrai mystère de ce personnage - pour moi y compris - réside dans son imprévisibilité. Changeant, instable, il est capable de l'amour le plus sincère et de la haine la plus profonde, d'une bienveillance pure comme de la cruauté proche de la folie." +
            "<br/>" +
            "En somme, Heath représente un véritable défi pour moi, et plus ses défauts m'apparaissent, plus son évolution devient intéressante.",
        "tommy": "Tommy est un médecin de 33 ans, qui a fait ses études à la très réputée académie de Valcendré, et c'est aujourd'hui le meilleur (et seul) médecin de Valroux, exerçant en association avec Eunice, son épouse, pharmacienne." +
            "Tommy est donc ce qu'on peut appeler un érudit, mais surtout un homme très intelligent, droit, sévère, et intransigeant." +
            "<br/>" +
            "Il a recueilli Yuna lorsqu'elle avait 10 ans, et, malgré un difficile apprivoisement mutuel, l'a soignée, l'a instruite, et lui a confié ses tout premiers travaux sur les terres de Nads. Aujourd'hui encore, même si Yuna voyage de plus en plus longtemps et de plus en plus loin, même si Tommy et Eunice travaillent à fonder leur propre foyer, leur demeure reste son havre, son point de chute." +
            "<br/>" +
            "Pour ceux qui souhaitent en savoir un peu plus sur ce personnage, je vous suggère d'aller lire \"L'enfant de Valmort\", le spin-off qui narre leur première rencontre.",
        "frost": "Têtu, sanguin et bagarreur, Frost est aspirant soldat à la prestigieuse académie militaire de Shirolite et, à ce jour, détient le record du plus grand nombre de sanctions disciplinaires. "
            + "Malgré son tempérament associable, Frost n'est jamais le dernier à la taverne, au grand dam de ceux qui l'accompagnent : en effet, c'est un excellent danseur, mais un très mauvais buveur."
            + "<br/>"
            + "Exclu de l'école à l'âge de quinze ans et forcé d'abandonner son projet d'être soigneur équin, et de se retrancher dans l'armée, comme la plupart des garçons dans sa situation. "
            + "<br/>"
            + "Il n'en est cependant pas malheureux car son métier lui permet de canaliser sa fougue débordante et de régler plus ou moins légalement ses comptes à coups de poings."
            + "Un coup reçu, deux rendus. Au combat, Frost se distingue par sa force de frappe, son agressivité, et sa rapidité. Son arme de prédilection est la claymore, mais il se débrouille également à l'épée simple, et manie de façon rudimentaire le boomerang, l'arc et le fouet de guerre."
            + "<br/>"
            + "Quand j'ai créé Frost, il n'était qu'un soldat parmi d'autres. D'ailleurs, il n'était même pas prévu dans le synopsis et s'est imposé tout seul à partir de l'épisode 2 : Délit de fuite. Et depuis, je n'envisage plus mon intrigue sans lui."
        ,
        "philomene": "Issue d'une famille de magiciens émérites, Philomène a tout pour perpétrer ce qui semble être une tradition familiale : la curiosité, la vivacité d'esprit... mais hélas, pas le talent, ni la rigueur, ce qui la conduit parfois à des situations, au mieux, cocasses, au pire, dangereuses.</br>" +
            "Malgré son désintérêt pour la magie élémentaire, dans laquelle elle s'est pourtant spécialisée, malgré la vanité de ses efforts, Philomène s'accroche longtemps à ses études. Pourquoi ? Pour ne pas décevoir ses parents ? Pour se dire que, comme ses trois soeurs aînées, elle est capable de réussir de brillantes études de magie ? Ou tout simplement parce que l'univers dans lequel elle a grandi l'empêche d'envisager autre chose pour son futur ?</br>" +
            "Malgré toute sa bonne volonté, Philomène reste distraite et maladroite, ce qui complique énormément ses rapports avec Heath, lequel passe son temps à lui rappeler son piètre niveau - ce qui, évidemment, n'aide pas à la faire progresser.</br>" +
            "Toutefois, pour parer à cela, Philomène possède deux armes essentielles : une persévérance à toute épreuve, et une dose colossale d'auto-dérision. Du moins, est-ce là l'apparence qu'elle maintient, tant pour elle-même que pour les autres.</br>" +
            "Volontaire, débrouillarde, et entreprenante, Philomène préfère toutefois suivre que diriger. Sa présence attentive et bienveillante fait d'elle un soutien indispensable, ce qui ne l'empêche pas de se montrer ferme, voire froide, lorsque la situation l'exige. De plus, elle émet souvent des jugements rapides, sur lesquels elle ne revient pas, ce qui peut l'amener à manquer de discernement. "
    }
};

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
    let bookDetailsWrapperTag = $("#bookZoomWrapper");
    let bookCoverTag = $(".bookZoomLink");
    let selectedBookTag = $("#bookCover");
    let bookTitleTag = $("#bookTitle");
    let bookSummaryTag = $("#bookSummary");
    let bookInfosTag = $("#bookInfosLinks");

    let currentBookId;

    // This event handler form support dynamic elements
    $("body").on("click", ".bookInfoLink", function (e) {
        e.preventDefault();
        let infoId = $(this).attr("id");
        // Reset class of all other links
        let otherLinks = $(`.bookInfoLink[id!=${infoId}]`);
        $(otherLinks).attr("class", "bookInfoLink");

        infoId = $(this).attr("id").split("_")[0];
        let selectedBookInfos = bookInfos[currentBookId];
        bookSummaryTag.html(selectedBookInfos[infoId]);
        $(this).attr("class", "bookInfoLinkSelected bookInfoLink");

        bookSummaryTag.scrollTop(0);
    });


    bookCoverTag.click(function () {
        currentBookId = $(this).attr("id").split("_")[0]; // attribut id = idRoman_cover
        console.log(currentBookId);
        bookDetailsWrapperTag.css("display", "flex");
        selectedBookTag.attr("src", bookCovers[currentBookId]);
        bookTitleTag.html(bookTitles[currentBookId]);
        let selectedBookInfos = bookInfos[currentBookId];
        let htmlInfos = "";
        let infoId = "";
        for (let key of Object.keys(selectedBookInfos)) {
            infoId = key + "_infoLink";
            if (key === "synopsis") {
                htmlInfos += "<a href='#' class='bookInfoLink bookInfoLinkSelected' id='" + infoId + "'>";
            } else {
                htmlInfos += "<a href='#' class='bookInfoLink' id='" + infoId + "'>";
            }
            htmlInfos += "@" + key;
            htmlInfos += "</a> ";
        }
        bookSummaryTag.html(selectedBookInfos['synopsis']);
        bookInfosTag.html(htmlInfos
        );
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
