let sentence ="The movie is not that bad, I like it"
wordNot = sentence.indexOf("not")
wordbad = sentence.indexOf("bad")
if (wordNot < wordbad) {
    t= sentence.slice(wordNot, wordbad + 3)
    sentence = sentence.replace(t, "good")
}

console.log(sentence)