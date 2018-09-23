class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    addPhraseToDisplay() {
        let letters = this.phrase.toUpperCase().split('');
        let phraseDisplay = '';
        letters.forEach(function (letter) {
            if (letter != " ") {
                let letterItem = '<li class="hide letter ' + letter + '">' + letter + '</li>';
                phraseDisplay += letterItem;
            } else {
                let letterItem = '<li class="space"> </li>';
                phraseDisplay += letterItem;
            }
        })
        $('#phrase ul').html(phraseDisplay);
        return letters;
    }
    checkLetter(ween) {
        var matches = 0;
        var letters = $('.letter');
        for (let i = 0; i < letters.length; i++) {
            if (ween.toUpperCase() == letters[i].textContent) {
                matches += 1;
            }
        }
        if (matches > 0) {
            return true;
        } else {
            return false;
        }
    }

    showMatchedLetter(target) {
        var letters = $('.letter');
        for (let i = 0; i < letters.length; i++) {
            if (target.textContent.toUpperCase() == letters[i].textContent) {
                letters[i].classList.add("show");
                letters[i].classList.remove("hide");
            }
        }
    }
    
    keyShowMatchedLetter(target) {
        var letters = $('.letter');
        for (let i = 0; i < letters.length; i++) {
            if (target.toUpperCase() == letters[i].textContent) {
                $('.' + target.toUpperCase()).addClass("show");
                $('.' + target.toUpperCase()).removeClass("hide");
            }
        }
    }
}
