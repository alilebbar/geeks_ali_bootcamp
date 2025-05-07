data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

def resultat(v,f):
    print(F"vous avez {v} reponse juste et {f} reponse faux")

def quiz():
    v=0
    f=0
    fReponse=[]
    for items in data:
       reponseU= input(F"{items["question"]} ")
       if items["answer"]==reponseU:
           v+=1
       else:
           f+=1
           fReponse.append(reponseU) 
    resultat(v,f)

quiz()