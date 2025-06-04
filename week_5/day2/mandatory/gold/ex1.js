


const afficheGiphy =async (aliatoire)=>{
     try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=duck&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
        const data = await response.json();
        console.log(data);
        document.body.innerHTML = `<img src=${data.data[aliatoire].images.fixed_height.url} alt="giph">`
    } catch (e) {
        console.error(e);
    }
}

let n = Math.floor(Math.random() * 51);
afficheGiphy(n)