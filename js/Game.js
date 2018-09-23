class Game {
    constructor(phrases) {
        this.missed = 0;
        this.phrases = phrases;
        this.phrase = this.startGame(phrases);
    }

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    handleInteraction(ween) {
        if (this.phrase.checkLetter(ween.textContent)) {
            this.phrase.showMatchedLetter(ween);
            this.checkForWin();
        } else {
            this.removeLife();
        }
    }
    
    handleKeyInteraction(ween) {
        if (this.phrase.checkLetter(ween)) {
            this.phrase.keyShowMatchedLetter(ween);
            this.checkForWin();
        } else {
            this.removeLife();
        }
    }

    removeLife() {
        var hearts = $('#scoreboard ol li img');
        this.missed += 1;
        for (let i = 0; i < this.missed; i++) {
            hearts[i].src = 'images/lostHeart.png'
        }
        if (this.missed > 4) {
            this.gameOver(2);
        }
    }

    checkForWin() {
        var hidden = $('.hide');
        if (hidden.length == 0) {
            this.gameOver(1);
        }
    }

    gameOver(num) {
        var overlay = $('#overlay');
        var overlayTitle = $('#overlay .title');
        var restart = $('#btn__reset');
        var keys = $('.key');
        this.phrase = this.startGame(phrases);
        this.missed = 0;
        var hearts = $('#scoreboard ol li img');
        for (let i = 0; i < hearts.length; i++) {
            hearts[i].src = 'images/liveHeart.png'
        }
        for (let i = 0; i < keys.length; i++) {
            keys[i].className = 'key';
            keys[i].disabled = false;
        }
        if (num == 1) {
            overlay.className = 'win'
            overlayTitle.html('You Win!');
            restart.html('Play Again');
            overlay.show();
        } else if (num == 2) {
            overlay.className = 'lose'
            overlayTitle.html('You Lose');
            restart.html('Try Again');
            overlay.show();
        }
    }

    startGame() {
        var phrase = new Phrase(this.getRandomPhrase());
        phrase.addPhraseToDisplay();
        return phrase;
    }
}
