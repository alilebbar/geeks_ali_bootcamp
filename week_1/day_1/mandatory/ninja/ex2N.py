phrase = input("entrer la plus long phrase sans la lettre \"a\" (entrer ex pour sortir)): ")
score=len(phrase)

while(phrase!="ex"):
  if "a" in phrase:
    print("dans ta phrase il y a une lettre a")
  elif score<=len(phrase):
    score=len(phrase)
    print("ta phrase est correcte et ta phrase et la plus long") 
    phrase = input("entrer la plus long phrase sans la lettre \"a\" (entrer ex pour sortir)): ")
  else:
    print("ta phrase est correcte mais ta phrase n'est la plus long") 
    phrase = input("entrer la plus long phrase sans la lettre \"a\" (entrer ex pour sortir)): ")  
