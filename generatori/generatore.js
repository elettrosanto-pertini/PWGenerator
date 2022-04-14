// Generatore di password in javascript

function generatePassword(chars){
    let result = '';
    const letters= Math.floor(chars*0.3);
    const otherChars= chars-letters;
    const numbers= Math.floor(otherChars*0.33);
    const upperCase=Math.ceil(otherChars*0.33);
    const specialChars=otherChars-numbers-upperCase;

    for (let i=0; i<letters; i++){
        result=result+carattereRandom('abcdefghijklmnopqrstuvwxyz');
    }

    for(let i=0; i<numbers;i++){
        result= randomInsertInto(result, carattereRandom('1234567890'));
    }

    for (let i=0; i<upperCase;i++){
        result=randomInsertInto(result, carattereRandom('ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
    }

    for (let i=0; i<specialChars;i++){
        result = randomInsertInto(result, carattereRandom('!?%&$@#+[]\{\}-_./'));
    }

    return result;
}

function carattereRandom(setOfCharacters){
    const posizione= Math.floor(Math.random()*(setOfCharacters.length));
    return setOfCharacters[posizione];
}

function randomInsertInto(stringa, carattere){
    const posizione= Math.round(Math.random()*(stringa.length));
    result= stringa.substr(0,posizione)+carattere+stringa.substr(posizione);
    return result;
}


