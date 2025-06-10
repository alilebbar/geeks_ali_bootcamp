const p = document.querySelector("p")
const btn = document.querySelector("button")
const input = document.querySelector("input")
const h3 = document.querySelector("h3")
const h5 = document.querySelector("h5")


const getQuestion = async ()=>{
    try {
        let response = await fetch("/quiz")
        let data = await response.json()
        p.innerHTML=data
    } catch (error) {
        console.error(error)
    }
}

const getScore = async ()=>{
    try {
        let response = await fetch("/quiz/score")
        let data = await response.json()
        console.log(data)
        h3.textContent = data
    } catch (error) {
        console.error(error)
    }
}

const postReponse = async () => {
    let question = p.textContent;
    try {
        let response = await fetch("/quiz", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ question: question, answer: input.value })
        });
        let data = await response.json()
        getQuestion()
        getScore()
        input.value = ""
        return data
    } catch (error) {
        console.error(error);
    }
};

btn.addEventListener("click", async ()=>{
    let data = await postReponse()
    console.log(data)
    h5.textContent=data
})
window.onload=()=>{
getQuestion()
getScore()
}
