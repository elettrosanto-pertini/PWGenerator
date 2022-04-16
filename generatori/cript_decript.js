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