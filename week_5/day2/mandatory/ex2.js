

fetch(`https://api.giphy.com/v1/gifs/search?q=sun&limit=10&bundle=3&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    .then((response)=>{
        return response.json()})
    .then((responseData) => {
        console.log(responseData)
    }).catch((e)=>console.error(e.message))

