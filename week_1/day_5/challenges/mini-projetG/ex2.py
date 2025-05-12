from googletrans import Translator

french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]
translator = Translator()

translations = []
for word in french_words:
    translated = translator.translate(word, src='fr', dest='en')
    translations.append(translated.text)

print(translations)
tr=dict(zip(french_words,translations))
print(tr)