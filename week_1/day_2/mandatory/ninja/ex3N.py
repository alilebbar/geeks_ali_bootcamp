morse_code_dict = {
    'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',
    'E': '.',     'F': '..-.',  'G': '--.',   'H': '....',
    'I': '..',    'J': '.---',  'K': '-.-',   'L': '.-..',
    'M': '--',    'N': '-.',    'O': '---',   'P': '.--.',
    'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
    'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',
    'Y': '-.--',  'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.'
}

def to_morse(text):
    textToMorse=""
    for lettre in text.upper():
        if lettre in morse_code_dict.keys():
            textToMorse+=morse_code_dict[lettre]+" "
        elif lettre == " ":
            textToMorse+="/ "
    
    return textToMorse
def to_text(morse):
    inverse_dict = {v: k for k, v in morse_code_dict.items()}
    mots = morse.strip().split(" / ") 
    texte = ""
    for mot in mots:
        lettres = mot.split()
        for code in lettres:
            texte += inverse_dict.get(code, "?")
        texte += " "
    return texte.strip()


textT=input("entrer votre text : ")
morse=to_morse(textT)
print(morse)
morseT=input("entrer le code morse : ")
morseToText=to_text(morseT).lower()
print(morseToText)