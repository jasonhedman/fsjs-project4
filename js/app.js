// variables

const overlay = $('#overlay');
const startGame = $('#btn__reset');
const keys = $('.key');
const phrases = [
	'Cristiano Ronaldo',
	'LeBron James',
	'Lionel Messi',
	'Neymar',
	'Roger Federer'
];
let game = new Game(phrases);

// functions

function resetDisplay() {
    overlay.hide();
}

function markButton(e) {
    e.target.disabled = true;
    if (game.phrase.checkLetter(e.target.textContent)) {
        e.target.classList.add('chosen');
    } else {
        e.target.classList.add('wrong');
    }
}

function keyMarkButton(e) {
    var key = $('.' + e);
    key.attr("disabled", "disabled");
    if (game.phrase.checkLetter(e)) {
        key.addClass('chosen');
    } else {
        key.addClass('wrong');
    }
}

// functionality

startGame.click(resetDisplay);
keys.click(function (e) {
    markButton(e);
    game.handleInteraction(e.target);
});

$(document).keypress(function (e) {
    keyMarkButton(e.key);
    game.handleKeyInteraction(e.key)
})
