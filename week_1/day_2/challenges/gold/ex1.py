matrix = [
    ["7","i","i"],
    ["T","s","x"],
    ["h","%","?"],
    ["i"," ","#"],
    ["s","M"," "],
    ["$","a"," "],
    ["#","t","%"],
    ["^","r","!"]
]

ligne=len(matrix)
colone=len(matrix[0])
addlist=[]
for x in range(colone):
    for y in range(ligne):
        print(matrix[y][x])
        addlist.append(matrix[y][x])

for z in range(len(addlist)) :
  if (addlist[z].isalpha() == False):
     addlist[z]=" "
listespace=""
for e in range(len(addlist)):
    if addlist[e]!=" " or (addlist[e]==" " and addlist[e-1].isalpha() ):
      listespace+=addlist[e]
   

print(listespace)


    
        
         