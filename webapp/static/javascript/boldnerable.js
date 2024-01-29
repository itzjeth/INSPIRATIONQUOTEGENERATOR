$(document).ready(function() {
    $("#next-quote").on("click", function(e) {
        e.preventDefault();

        var randomQuoteNumber = getRandomQuoteNumber();
        updateQuote(randomQuoteNumber);
    });

    var q = location.search.split("?q=")[1];

    if (q >= 0 && q < quotes.length) {
        updateQuote(q);
    } else {
        $("#next-quote").click();
    }
});

function updateQuote(quoteNumber) {
    var randomQuote = quotes[quoteNumber];

    $("#quote").html(randomQuote.quote);
    $("#author").html(randomQuote.author);
    $("#quote-box").removeClass().addClass("animated bounceIn").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });

    $("#share").attr("href", "https://twitter.com/intent/tweet?text=\"" + encodeURIComponent($("#hidden").html(randomQuote.quote).text()) + "\" diff_jeth" + quoteNumber);
}

function getRandomQuoteNumber() {
    return Math.floor(Math.random() * quotes.length);
}

var quotes = [{
        "author": "Jethro Jabay",
        "quote": "Anong favourite number mo sa electric fan"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Nakakapagod pala pag laging nakaupo pwede ba tayo nalang"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Katulad ng bold sa japan, malabo kitang iwan"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Anong dasal dinadasal mo kada gabi"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Anong ulam nyo kagabi"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Kung papapiliin ka, bat ako"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Alam moba kaya walang araw sa gabi, kase walang araw na di kita namimiss"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Happiness is a choice, that why i choose you"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Si joserizal nasa piso, ikaw nasa puso ko"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Kung si ed caluag may nakikitang iba ako wala, ikaw lang talaga"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Magagalit ba si gusion, kung tayo ang perfect combination"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Kung bibigyan ako tatlong kahilingan, tatlong beses kita hihilingin"
    },
    {
        "author": "Jethro Jabay",
        "quote": "I am not good at math, but i can give you the value you deserve"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Anong oras ginagawa yung orasan"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Anong araw ginagawa yung calendar"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Baka ipagpalit moko sa malapit wag ah may pamasahe naman ako"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Anong oras ka mag rereply mag aalarm ako"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Every mistake can be a lesson"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Wag mong mahalin yung sarili mo, obligasyon ko yan"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Ha? hastronaut"
    }
]
