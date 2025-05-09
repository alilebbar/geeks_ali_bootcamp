import math
class Pagination:
    def __init__(self, items=None, page_size=10):
        self.items=[] if items==None else items
        self.page_size=page_size
        self.current_idx=0
        self.total_page=math.ceil(len(self.items)/self.page_size)

    def __str__(self):
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return '\n'.join(self.items[start:end]) 

    
    def get_visible_items(self):
        return self.items[self.current_idx*self.page_size:self.current_idx*self.page_size+self.page_size]
    
    def go_to_page(self,page_num):
        if(page_num<1 or page_num>self.total_page):
            raise ValueError(F"l'index de page {page_num} que tu a envoyer n'est pas dans le livre")
        
        self.current_idx=page_num-1

    def first_page(self):
        self.current_idx=0
        return self
    
    def last_page(self):
        self.current_idx=self.total_page-1
        return self
    
    def next_page(self):
      if self.current_idx < self.total_page - 1:
        self.current_idx += 1
      else:
        print("vous êtes déjà sur la dernière page")
      return self

    def previous_page(self):
      if self.current_idx > 0:
        self.current_idx -= 1
      else:
        print("vous êtes déjà sur la première page")
      return self
 
    
    

    
alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)
print(str(p))

print(p.get_visible_items())
# ['a', 'b', 'c', 'd']

p.next_page()
print(p.get_visible_items())
# ['e', 'f', 'g', 'h']

p.last_page()
print(p.get_visible_items())
# ['y', 'z']

p.go_to_page(10)
print(p.current_idx + 1)
# Résultat : 7 (parce que l’index commence à 0)

p.go_to_page(0)
# Doit lever une ValueError
