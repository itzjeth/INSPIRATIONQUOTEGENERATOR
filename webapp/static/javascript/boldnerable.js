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

    $("#share").attr("href", "https://twitter.com/intent/tweet?text=\"" + encodeURIComponent($("#hidden").html(randomQuote.quote).text()) + "\" @kennethpajo" + quoteNumber);
}

function getRandomQuoteNumber() {
    return Math.floor(Math.random() * quotes.length);
}

var quotes = [{
        "author": "Kenneth Pajo",
        "quote": "Anong favourite number mo sa electric fan"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Nakakapagod pala pag laging nakaupo pwede ba tayo nalang"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Katulad ng bold sa japan, malabo kitang iwan"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Anong dasal dinadasal mo kada gabi"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Anong ulam nyo kagabi"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Kung papapiliin ka, bat ako"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Alam moba kaya walang araw sa gabi, kase walang araw na di kita namimiss"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Happiness is a choice, that why i choose you"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Si joserizal nasa piso, ikaw nasa puso ko"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Kung si ed caluag may nakikitang iba ako wala, ikaw lang talaga"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Magagalit ba si gusion, kung tayo ang perfect combination"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Kung bibigyan ako tatlong kahilingan, tatlong beses kita hihilingin"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "I am not good at math, but i can give you the value you deserve"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Anong oras ginagawa yung orasan"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Anong araw ginagawa yung calendar"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Baka ipagpalit moko sa malapit wag ah may pamasahe naman ako"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Anong oras ka mag rereply mag aalarm ako"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Every mistake can be a lesson"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Wag mong mahalin yung sarili mo, obligasyon ko yan"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Ha? hastronaut"
    }
]
