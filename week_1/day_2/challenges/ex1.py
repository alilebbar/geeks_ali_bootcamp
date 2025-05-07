mot=input("Entrer un mot : ")
motDic={}
for i,m in enumerate(mot):
    if m in motDic.keys():
        motDic[m].append(i)
    else:
        motDic[m]=[i]

print(motDic) 