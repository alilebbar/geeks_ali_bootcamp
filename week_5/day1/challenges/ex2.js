const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
}`

let input = document.getElementsByTagName("input")[0];
let output = document.getElementsByTagName("section")[0];
let button = document.getElementsByTagName("button")[0];

const toJs = (tabJs) => {
        return new Promise((resolve, reject) => {
                let tabOb = JSON.parse(tabJs);
                if (!tabOb) reject("Objet vide !");
                resolve(tabOb);
        });
};

const toMorse = (morseJS = {}) => {
        return new Promise((resolve, reject) => {
                let phrase = input.value.toLowerCase();
                let morseArr = [];
                for (let i of phrase) {
                        if (Object.keys(morseJS).includes(i)) {
                                morseArr.push(morseJS[i]);
                        } else if (i === " ") {
                                morseArr.push(" "); // space between words
                        } else {
                                reject("caractère non reconnu !");
                                return;
                        }
                }
                resolve(morseArr);
        });
};

const joinWords = (tabMorse = []) => {
        let phraseFinale = tabMorse.join(" ");
        output.innerHTML = `<br><p>${phraseFinale}</p>`;
};
button.addEventListener("click",(e)=>{
    toJs(morse)
    .then(result=>toMorse(result)
    .then(result=>joinWords(result))
    .catch(error=>console.log(error))
)

})