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

    $("#share").attr("href", "https://twitter.com/intent/tweet?text=\"" + encodeURIComponent($("#hidden").html(randomQuote.quote).text()) + "\" -@vuvujeth");
}

function getRandomQuoteNumber() {
    return Math.floor(Math.random() * quotes.length);
}

var quotes = [{
        "author": "Jethro Jabay",
        "quote": "Do not trust anyone. Remember salt look like a sugar"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Every mistake can be a lesson"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Learn to be alone, not everyone will stay at you forever"
    },
    {
        "author": "Jethro Jabay",
        "quote": "There's two type of pain, One that hurt you, and the one that change you"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Never assume that loud is strong and quite is weak"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Never regret anything that made you smile"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Everything is going to be okay at the end if it is not okay it is not the end"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Everybody has 2 lives, The second one begins when they realize they only got one"
    },
    {
        "author": "Jethro Jabay",
        "quote": "If you dont sacrifice for your dream, your dream will be the sacrifice"
    },
    {
        "author": "Jethro Jabay",
        "quote": "No paper no pencil but i am still drawing attention"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Magagalit ba si gusion, kung tayo ang perfect combination"
    },
    {
        "author": "Jethro Jabay",
        "quote": "When life puts you down dont say why, Say try me"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Win in silence, let them think you're losing"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Don't compare sun and moon, they both shine when its their time"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Your mind is a battlefield. Be its commander not its soldier"
    },
    {
        "author": "Jethro Jabay",
        "quote": "First learn then remove the L"
    },
    {
        "author": "Jethro Jabay",
        "quote": "The most valuable lessons in life cannot be taught, they must be experienced"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Make improvements, not excuses"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Sometimes you have to lose all you have to find out who you truly are"
    },
    {
        "author": "Jethro Jabay",
        "quote": "You’ve gotta know when it’s time to turn the page"
    },
    {
        "author": "Jethro Jabay",
        "quote": "The funniest people are the one who is saddiest"
    },
    {
        "author": "Jethro Jabay",
        "quote": "You can’t move forward if you’re still hanging on"
    },
    {
        "author": "Jethro Jabay",
        "quote": "If there’s a single lesson that life teaches us, it’s that wishing doesn’t make it so"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Be yourself — everyone else is already taken"
    },
    {
        "author": "Jethro Jabay",
        "quote": "It’s not the mistake that matters, it’s how you interpret the lesson"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Sometimes the hardest part isn’t letting go but rather learning to start over"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Yesterday is history, Tomorrow is a mystery, but Today is a gift. That is why it is called the present"
    },
    {
        "author": "Jethro Jabay",
        "quote": "There is always something more to learn. Even for a master"
    },
    {
        "author": "Jethro Jabay",
        "quote": "One often meets his destiny on the road he takes to avoid it"
    },
    {
        "author": "Jethro Jabay",
        "quote": "When the path you walk always leads back to yourself, you never get anywhere"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Remember the path"
    },
    {
        "author": "Jethro Jabay",
        "quote": "You are the master of your destiny: No one and nothing can come in between you and your destiny except you"
    },
    {
        "author": "Jethro Jabay",
        "quote": "It matters not what someone is born, but what they grow to be"
    },
    {
        "author": "Jethro Jabay",
        "quote": "I fear they will all lose. Until they find a battle worth fighting"
    },
    {
        "author": "Jethro Jabay",
        "quote": "What goes on in your head I really don't always understand, but what goes on in your heart will never let us down"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Never back down, Never what?"
    },
    {
        "author": "Jethro Jabay",
        "quote": "The past is a place of reference, not a place of residence"
    },
    {
        "author": "Jethro Jabay",
        "quote": "You make mistakes. Mistakes don’t make you"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Happiness is not the absence of problems, it’s the ability to deal with them"
    },
    {
        "author": "Jethro Jabay",
        "quote": "When one door closes, another opens"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Life is 10% what happens to you and 90% how you react"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Luck is what happens when preparation meets opportunity"
    },

    {
        "author": "Jethro Jabay",
        "quote": "Behind every adversity is an opportunity"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Never be ashamed! There’s some who will hold it against you, but they are not worth bothering with"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Knowing is not enough, we must apply"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Time doesn’t heal emotional pain, you need to learn how to let go"
    },
    {
        "author": "Jethro Jabay",
        "quote": "The first step towards getting somewhere is to decide that you are not going to stay where you are"
    },
    {
        "author": "Jethro Jabay",
        "quote": "There are far better things ahead than any we leave behind"
    },
    {
        "author": "Jethro Jabay",
        "quote": "The biggest lesson in life was failure"
    },
    {
        "author": "Jethro Jabay",
        "quote": "If you want to be strong learn to live alone"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Sitting alone and enjoying your own life is better than being surrounded by fake people"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Life is short just do what the f*ck makes you happy"
    },
    {
        "author": "Jethro Jabay",
        "quote": "They keep saying the right person will come along , I think mine got hit by truck"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Don’t get emotionally attached to anyone"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Opportunities don't happen, you create them"
    },
    {
        "author": "Jethro Jabay",
        "quote": "It is hard to fail, but it is worse never to have tried to succeed"
    },
    {
        "author": "Jethro Jabay",
        "quote": "The only thing we have to fear is fear itself"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Darkness cannot drive out darkness, only light can do that"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Do one thing every day that scares you"
    },
    {
        "author": "Jethro Jabay",
        "quote": "The way to get started is to quit talking and begin doing it"
    },
    {
        "author": "Jethro Jabay",
        "quote": "The secret of getting ahead is getting started"
    },
    {
        "author": "Jethro Jabay",
        "quote": "It is hard to beat a person who never gives up"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Impossible is just an opinion"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Trust the process"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Be like glass, if they break you, cut them"
    },
    {
        "author": "Jethro Jabay",
        "quote": "A fish with its mouth closed never gets caught"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Everybody has chapter they dont read out loud"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Take the risk or lose the chance"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Don't tell people your plans, show them your result"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Just be yourself, there is no one better"
    },
    {
        "author": "Jethro Jabay",
        "quote": "If you're lucky enough to be different, never change"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Everything you lose is a step you take"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Be like a snake. Be nice to everyone, unless someone steps on you"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Once you get what you want, you got something to lose"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Mistakes are proof that you are trying"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Failure is part of the success"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Sometimes you win, sometimes you learn"
    },
    {
        "author": "Jethro Jabay",
        "quote": "A little progress each day adds up to a big results"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Nothing last forever. we can change the future"
    },
    {
        "author": "Jethro Jabay",
        "quote": "A star will disappear if you lose"
    }
]
