const fs = require("fs")
const path = require("path")
const loc = path.join(__dirname,"../data/data.json")
const bcrypt = require("bcrypt")
const getData = ()=>{
    let data = fs.readFileSync(loc,"utf-8")
    return JSON.parse(data)
}
const postData = (pData)=>{
    fs.writeFileSync(loc,JSON.stringify(pData,null,2),"utf-8")
}

let crypto = async (pss) => {
    return await bcrypt.hash(pss, 10);
}
const postRegister = async (req,res)=>{
    try {
        let body = req.body
        let data = await getData()
        let exist = data.find(u => u.username === body.username);
        if (exist) return res.send("Nom d'utilisateur déjà utilisé !");
        let format = {
            id : data.length,
            firstname : body.firstname,
            lastname : body.lastname,
            email : body.email,
            username : body.username,
            password : await crypto(body.password)
        }
        data.push(format)
        postData(data)
        res.send("enregistrement bien fait !")
    } catch (error) {
        console.error(error.message)
        return res.status(500).send("Une erreur est survenue !");

    }
}
const getLogin= async (req,res)=>{
    const {username,password} = req.body
    data = await getData()
    let userExiste = data.find(e=>e.username===username)
    if(!userExiste) return res.status(401).send("utilisateur non trouvée")
    let passCorrecte = await bcrypt.compare(password, userExiste.password)
    if(!passCorrecte)return res.status(402).send("password incorrecte")
    res.send("connection reussite !")
}

module.exports={postRegister,getLogin}