class Phone:
    def __init__(self,phone_number):
        self.phone_number=phone_number
        self.call_history=[]
        self.message=[]

    def call(self,other_phone):
        history=self.phone_number+","+other_phone
        self.call_history.append(history)
        print(self.phone_number+" appel en coure "+other_phone)
    
    def show_call_history(self):
        print(self.call_history)
    
    def send_message(self,to,frome,message,):
        self.message.append({"to":to,"from":frome,"message":message})
    
    def show_outgoing_messages(self):
        for value in self.message:
            if(value["from"]==self.phone_number):
                print(value["message"])
    
    def show_incoming_messages(self):
        for value in self.message:
            if(value["to"]==self.phone_number):
                print(value["message"])      

    def show_messages_from(self,number):
        for value in self.message:
            if(value["from"]==number):
                print(value["message"]) 


repertoire=Phone("01")      
repertoire.call("02")
repertoire.show_call_history()
repertoire.send_message("03","01","a fin")
repertoire.show_incoming_messages()
repertoire.show_outgoing_messages()
repertoire.show_messages_from("06")
