// Generatore di password in javascript

function generatePassword(chars){
    //@param chars: Number (int)
    //@return: string

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
        result = randomInsertInto(result, carattereRandom(' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'));
    }

    return result;
}

function carattereRandom(setOfCharacters){
    //@param: string
    //@return: string
    const posizione= Math.floor(Math.random()*(setOfCharacters.length));
    return setOfCharacters[posizione];
}

function randomInsertInto(stringa, carattere){
    //@param stringa: string
    //@param carattere: string (length 1, a single char)
    //@return: string
    const posizione= Math.round(Math.random()*(stringa.length));
    result= stringa.substr(0,posizione)+carattere+stringa.substr(posizione);
    return result;
}



const alphabet= ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'; 
const characterOf= new Map();
const indexOf =new Map();

for(let i=0;i<alphabet.length;i++){
    indexOf.set(alphabet[i],i);
}
for(let i=0;i<alphabet.length;i++){
    characterOf.set(i,alphabet[i]);
}


function crypt(stringa, key){
    let cripted='';
    for (let i=0;i<stringa.length;i++){
        let sum=(indexOf.get(stringa[i])+indexOf.get(key[i%key.length]))%alphabet.length;
        cripted=cripted+characterOf.get(sum);
    }
    return cripted;
}

function decrypt(stringa, key){
    let decripted='';
    for(let i=0;i<stringa.length;i++){
        let sum = (indexOf.get(stringa[i])-indexOf.get(key[i%key.length])+alphabet.length)%alphabet.length;
        decripted = decripted + characterOf.get(sum);
    }
    return decripted;
}


const toCrypt= generatePassword(10);
const chiave = 'G19l1@&F3der|C0';
const criptata=crypt(toCrypt,chiave);
const decriptata=decrypt(criptata,chiave);


