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

const generateBtn=document.getElementById('PWG-btn');
const generatedPWEl=document.getElementById('generatedPW');
const cryptBtnEl = document.getElementById('cryptBtn');
const decryptBtnEl = document.getElementById('decryptBtn');
const refreshBtnEl=document.getElementById('refreshBtn');
let lunghezzaPwEl=document.getElementById('lunghezzaPW');

generateBtn.addEventListener('click', ()=>{
    let pw = generatePassword(lunghezzaPwEl.value);
    document.getElementById('generatedPW').textContent=pw;
    //document.getElementById('generatedPW').classList="box";
});

cryptBtnEl.addEventListener('click', event=>{
    let tocrypt = document.getElementById('userInput');
    let givenKey = document.getElementById('userKey');
    const criptedPw = crypt(tocrypt.value,givenKey.value);
    document.getElementById('PWTradotta').textContent=criptedPw;
    //document.getElementById('PWTradotta').classList="input is-small";
    tocrypt.value='';
    givenKey.value='';
    generatedPWEl.textContent='';
});

decryptBtnEl.addEventListener('click',()=>{
    let todecrypt = document.getElementById('userInput');
    let givenKey = document.getElementById('userKey');
    const decriptedPw = decrypt(todecrypt.value,givenKey.value);
    document.getElementById('PWTradotta').textContent=decriptedPw;
    //document.getElementById('PWTradotta').classList="input is-small";
    todecrypt.value='';
    givenKey.value='';
});

refreshBtnEl.addEventListener('click', ()=>{
    window.location.reload();
});


