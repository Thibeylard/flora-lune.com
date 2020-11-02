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
        "muple": "https://muple.fr/book/101",
        "scribay": "https://www.scribay.com/text/1166040301/adda---saison-1---les-anges-dechus"
    }
};

const bookInfos = {
    "adda": {
        "synopsis": "Bannis et emprisonnés pendant des siècles par les anges, les nephilims se vengent et pourchassent leurs " +
            "bourreaux jusqu'en Ikkai, le monde des humains. Et, lorsqu'elle trouve le cadavre de l'un d'entre eux amputé " +
            "de ses ailes, Yuna ignore encore qu'elle s'apprête à prendre part à une guerre à laquelle elle n'est pas étrangère... ",
        "personnages": {
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
            "frost": "Têtu, sanguin et bagarreur, Frost est aspirant soldat à la prestigieuse académie militaire de Shirolite et, à ce jour, détient le record du plus grand nombre de sanctions disciplinaires. " +
                "Malgré son tempérament associable, Frost n'est jamais le dernier à la taverne, au grand dam de ceux qui l'accompagnent : en effet, c'est un excellent danseur, mais un très mauvais buveur." +
                "<br/>" +
                "Exclu de l'école à l'âge de quinze ans et forcé d'abandonner son projet d'être soigneur équin, et de se retrancher dans l'armée, comme la plupart des garçons dans sa situation. " +
                "<br/>" +
                "Il n'en est cependant pas malheureux car son métier lui permet de canaliser sa fougue débordante et de régler plus ou moins légalement ses comptes à coups de poings." +
                "Un coup reçu, deux rendus. Au combat, Frost se distingue par sa force de frappe, son agressivité, et sa rapidité. Son arme de prédilection est la claymore, mais il se débrouille également à l'épée simple, et manie de façon rudimentaire le boomerang, l'arc et le fouet de guerre." +
                "<br/>" +
                "Quand j'ai créé Frost, il n'était qu'un soldat parmi d'autres. D'ailleurs, il n'était même pas prévu dans le synopsis et s'est imposé tout seul à partir de l'épisode 2 : Délit de fuite. Et depuis, je n'envisage plus mon intrigue sans lui.",
            "philomene": "Issue d'une famille de magiciens émérites, Philomène a tout pour perpétrer ce qui semble être une tradition familiale : la curiosité, la vivacité d'esprit... mais hélas, pas le talent, ni la rigueur, ce qui la conduit parfois à des situations, au mieux, cocasses, au pire, dangereuses.</br>" +
                "Malgré son désintérêt pour la magie élémentaire, dans laquelle elle s'est pourtant spécialisée, malgré la vanité de ses efforts, Philomène s'accroche longtemps à ses études. Pourquoi ? Pour ne pas décevoir ses parents ? Pour se dire que, comme ses trois soeurs aînées, elle est capable de réussir de brillantes études de magie ? Ou tout simplement parce que l'univers dans lequel elle a grandi l'empêche d'envisager autre chose pour son futur ?</br>" +
                "Malgré toute sa bonne volonté, Philomène reste distraite et maladroite, ce qui complique énormément ses rapports avec Heath, lequel passe son temps à lui rappeler son piètre niveau - ce qui, évidemment, n'aide pas à la faire progresser.</br>" +
                "Toutefois, pour parer à cela, Philomène possède deux armes essentielles : une persévérance à toute épreuve, et une dose colossale d'auto-dérision. Du moins, est-ce là l'apparence qu'elle maintient, tant pour elle-même que pour les autres.</br>" +
                "Volontaire, débrouillarde, et entreprenante, Philomène préfère toutefois suivre que diriger. Sa présence attentive et bienveillante fait d'elle un soutien indispensable, ce qui ne l'empêche pas de se montrer ferme, voire froide, lorsque la situation l'exige. De plus, elle émet souvent des jugements rapides, sur lesquels elle ne revient pas, ce qui peut l'amener à manquer de discernement. ",
            "yuna": "Héroïne d’Adda, Yuna est une jeune fille solitaire, taciturne, mais aussi impulsive et bagarreuse.</br>" +
                "Elle est née à Valmort dans une famille de trois enfants, plus que misérable. Aussi, son premier métier est voleuse à la tire, avant de devenir coursière à l’âge de 11 ans sous la houlette de Tommy.</br>" +
                "Débrouillarde et indépendante, elle aime l’idée de ne rien devoir à personne. Le réflexe du rationnement est profondément ancré en elle, ce qui la rend très économe, trop parfois. Comme elle est en perpétuel mouvement, elle se lie rarement d’amitié et sa vie amoureuse se résume à des aventures plus ou moins longues mais sans engagement. De manière générale, elle préfère être seule plutôt que d’avoir à changer son rythme de vie.</br>" +
                "Enfin, ses émotions sont un vrai problème pour elle, tant pour les nommer que les exprimer, et pire encore, pour les canaliser, ses réactions premières étant bien souvent sanguines.</br>" +
                "Pour la petite histoire, j’ai eu beaucoup de mal à apprivoiser Yuna, car c’est la première fois que je suis un personnage dont la personnalité est aussi éloignée de la mienne. D’ailleurs, dans les premières versions, elle était beaucoup moins ouverte, comme si finalement je n’arrivais pas à la révéler ",
            "clement": " Âgé de dix-huit ans au début de l’histoire, Clément est le fils de Sandra, tenancière de l’auberge du Pur-Sang, et de Béric, ancien général à la retraite originaire de Fort-Cristal.</br>" +
                "De tous les personnages que j’ai créés, Clément est, je crois, celui qui plaît le plus. Il est d’ailleurs resté mon personnage préféré pendant assez longtemps.</br>" +
                "Pourquoi cet engouement ? Parce que Clément est le genre d’ami qu’on voudrait tous avoir. Un garçon loyal, gentil, affectueux, un brin maladroit, et toujours une bonne blague au bord des lèvres.</br>" +
                "Motivé depuis toujours par l’exemple de son père, Clément aspire à devenir soldat et à intégrer la prestigieuse armée de Shirolite, sa ville natale. Ayant quitté l’école à l’âge de seize ans, il attend patiemment sa majorité en aidant ses parents à l’auberge, mais également en assistant aux entraînements des soldats.</br>" +
                "Garçon au cœur tendre, il n’aime pas les effusions de sang inutiles, aussi, son arme de prédilection est la massue, bien qu’il ait appris quelques rudiments de l’épée. Il manie également le boomerang et l’arc, avec moins de précision cependant.</br>" +
                "Si Clément peut se montrer susceptible, il est rare de le voir vraiment en colère, et, contrairement à Frost qui en vient facilement aux mains, il ne porte jamais le premier coup, si ce n’est en combat réel.</br>" +
                "Et, à ses yeux, violenter une femme est le comble de la honte pour un homme, et jamais il ne laissera un tel spectacle se produire devant ses yeux, quitte à y laisser quelques dents.</br>" +
                "Véritable feu follet, Clément ne parvient pas à entretenir d’amitiés solides (si ce n’est avec Frost, puis, plus tard, avec Yuna et Philomène), ni n’a de vie sentimentale... connue. Car oui, à l’insu du lecteur, Clément est amoureux. Mais de qui ? Dans la version précédente, Yuna était l’élue de son cœur. Dans celle-ci... je vous laisserai le découvrir... à l’occasion d’un spin-off ? "
        },
        "univers": {
            "calendrier": "Une année civile dure 8 mois, de 6 semaines chacun : Floréveil, Vivelune, Estidor, Panchromia, Froidebise, Mortefeuille, Longuenuit et Blanchétoile.</br>" +
                "Le printemps débute le 14ème jour de Floréveil et s'achève le 35ème jour de Vivelune. L'été dure du 36ème jour de Vivelune jusqu'au 19ème jour de Panchromia. L'automne commence le 20ème jour de Panchromia et court jusqu'au dernier jour de Mortefeuille. Enfin, l'hiver couvre Longuenuit, Blanchétoile, et les premiers jours de Floréveil.</br>" +
                "A noter que ces dates sont données à titre indicatif et varient en fonction des solstices et des équinoxes. De plus, ces saisons ne sont valables que pour la région de Shirolite et le comté de Carénie, tous deux au climat tempéré. Ceilan et Nads ne comportent, elles, que deux saisons :</br>" +
                "- Dans les terres désertiques de Nads, c'est la saison sèche et la saison des pluies. La première, de Panchromia à Floréveil, est ponctuée par de fréquentes tempêtes de sable. Au cours de la seconde, les épisodes pluvieux viennent adoucir les températures estivales.</br>" +
                "- Dans les plaines de Ceilan, la saison douce et la saison des vents, ou saison des blizzards.</br>" +
                "De nombreuses fêtes régionales et inter-régionales rythment la vie des habitants... mais pour ne pas surcharger, on les abordera dans un prochain post, mois après mois"
        }
    }
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