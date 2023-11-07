export function returnHello(text) {
    return 'Hello'
    

}

export function returnAString(text) {
    return 'Hello World'

}

export function concatenateStrings() {
    const firstWord = 'I';
    const secondWord = 'Love';
    const thirdWord = ' JS';
    return firstWord.concat(' ', secondWord, thirdWord )

}

export function giveOneLetter() {
    const dog = 'dog';
    return dog.substr(-1)
}

export function giveTheIndexOfWord() {
    const wordToSearch = 'Butterfly';
    const phrase = "Once upon a time!!!";
return phrase.indexOf(wordToSearch);

}

export function replaceFishWord() {
    let phrase = 'Give a Man a Fish';

    return phrase.replace('Fish', 'Pussy Cat');
}

export function giveAllLettersInUppercase() {
    let phrase = 'Ride Him, Cowboy!';
phrase = phrase.substr(0, phrase.length -1);
    return phrase.toUpperCase();
}

export function removeWhiteSpaces() {
    let phrase = '    Hands Down    ';
    return phrase.trim();
;

}