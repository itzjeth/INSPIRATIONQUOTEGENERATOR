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

    $("#share").attr("href", "https://twitter.com/intent/tweet?text=\"" + encodeURIComponent($("#hidden").html(randomQuote.quote).text()) + "\" -@pajokenneth");
}

function getRandomQuoteNumber() {
    return Math.floor(Math.random() * quotes.length);
}

var quotes = [{
        "author": "Kenneth Pajo",
        "quote": "Do not trust anyone. Remember salt look like a sugar"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Every mistake can be a lesson"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Learn to be alone, not everyone will stay at you forever"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "There's two type of pain, One that hurt you, and the one that change you"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Never assume that loud is strong and quite is weak"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Never regret anything that made you smile"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Everything is going to be okay at the end if it is not okay it is not the end"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Everybody has 2 lives, The second one begins when they realize they only got one"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "If you dont sacrifice for your dream, your dream will be the sacrifice"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "No paper no pencil but i am still drawing attention"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Magagalit ba si gusion, kung tayo ang perfect combination"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "When life puts you down dont say why, Say try me"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Win in silence, let them think you're losing"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Don't compare sun and moon, they both shine when its their time"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Your mind is a battlefield. Be its commander not its soldier"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "First learn then remove the L"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "The most valuable lessons in life cannot be taught, they must be experienced"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Make improvements, not excuses"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Sometimes you have to lose all you have to find out who you truly are"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "You’ve gotta know when it’s time to turn the page"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "The funniest people are the one who is saddiest"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "You can’t move forward if you’re still hanging on"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "If there’s a single lesson that life teaches us, it’s that wishing doesn’t make it so"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Be yourself — everyone else is already taken"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "It’s not the mistake that matters, it’s how you interpret the lesson"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Sometimes the hardest part isn’t letting go but rather learning to start over"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Yesterday is history, Tomorrow is a mystery, but Today is a gift. That is why it is called the present"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "There is always something more to learn. Even for a master"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "One often meets his destiny on the road he takes to avoid it"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "When the path you walk always leads back to yourself, you never get anywhere"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Remember the path"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "You are the master of your destiny: No one and nothing can come in between you and your destiny except you"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "It matters not what someone is born, but what they grow to be"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "I fear they will all lose. Until they find a battle worth fighting"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "What goes on in your head I really don't always understand, but what goes on in your heart will never let us down"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Never back down, Never what?"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "The past is a place of reference, not a place of residence"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "You make mistakes. Mistakes don’t make you"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Happiness is not the absence of problems, it’s the ability to deal with them"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "When one door closes, another opens"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Life is 10% what happens to you and 90% how you react"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Luck is what happens when preparation meets opportunity"
    },

    {
        "author": "Kenneth Pajo",
        "quote": "Behind every adversity is an opportunity"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Never be ashamed! There’s some who will hold it against you, but they are not worth bothering with"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Knowing is not enough, we must apply"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Time doesn’t heal emotional pain, you need to learn how to let go"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "The first step towards getting somewhere is to decide that you are not going to stay where you are"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "There are far better things ahead than any we leave behind"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "The biggest lesson in life was failure"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "If you want to be strong learn to live alone"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Sitting alone and enjoying your own life is better than being surrounded by fake people"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Life is short just do what the f*ck makes you happy"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "They keep saying the right person will come along , I think mine got hit by truck"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Don’t get emotionally attached to anyone"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Opportunities don't happen, you create them"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "It is hard to fail, but it is worse never to have tried to succeed"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "The only thing we have to fear is fear itself"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Darkness cannot drive out darkness, only light can do that"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Do one thing every day that scares you"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "The way to get started is to quit talking and begin doing it"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "The secret of getting ahead is getting started"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "It is hard to beat a person who never gives up"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Impossible is just an opinion"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Trust the process"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Be like glass, if they break you, cut them"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "A fish with its mouth closed never gets caught"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Everybody has chapter they dont read out loud"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Take the risk or lose the chance"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Don't tell people your plans, show them your result"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Just be yourself, there is no one better"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "If you're lucky enough to be different, never change"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Everything you lose is a step you take"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Be like a snake. Be nice to everyone, unless someone steps on you"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Once you get what you want, you got something to lose"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Mistakes are proof that you are trying"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Failure is part of the success"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Sometimes you win, sometimes you learn"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "A little progress each day adds up to a big results"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Nothing last forever. we can change the future"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "A star will disappear if you lose"
    }
]
