import os
import random
class Gene:
    def __init__(self):
        self.gene=random.randint(0,1)

    def muter(self):
        self.gene= 1 if self.gene==0 else 0
        
    
    def __repr__(self):
     return str(self.gene)
    
class Chromosome:
   def __init__(self):
      self.chromosome=[]
      for i in range(10):
       self.chromosome.append(Gene())
    
   def muter(self):
     for gene in self.chromosome:
      if random.random() > 0.5:
        gene.muter()


class DNA:
   def __init__(self):
      self.dna=[]
      for i in range(10):
         self.dna.append(Chromosome())
        
   def muter(self):
      for i in range(10):
            self.dna[i].muter()
   def est_parfait(self):
    for chromosome in self.dna:
        for gene in chromosome.chromosome:
            if gene.gene == 0:
                return False
    return True

class Organism:
   def __init__(self,dna,probabiliter_mutation):
      self.dna=dna
      self.probabiliter_mutation=probabiliter_mutation
      
   def muter(self):
      if random.random() < self.probabiliter_mutation:
       self.dna.muter()
       
   

generations = 0
organisme = Organism(DNA(), 0.9)

while not organisme.dna.est_parfait():
    organisme.muter()
    generations += 1
    for chrom in organisme.dna.dna:
     print(chrom.chromosome)
     os.system("cls")


print("ADN parfait trouvé en", generations, "générations")



          

      
            
      
         
      
    

