

const getHello = (req,res)=>{
        res.send("Hello from express")
}
const postWorld = (req,res)=>{
        const {valeur} = req.body
        res.status(200).send(`I received your POST request. This is what you sent me: ${valeur}`)
}

module.exports= {getHello,postWorld}