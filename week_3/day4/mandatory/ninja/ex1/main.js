

window.onload = function() {
	document.getElementById("each").style.display = "none";
    document.getElementById("totalTip").style.display="none"
};
function calculateTip(){
    let billAmount = document.getElementById("billamt").value
    let serviceQuality = document.getElementById("serviceQual").value
    let numberOfPeople = document.getElementById("peopleamt").value
    if(serviceQuality === 0 || !billAmount) alert("resesire tes donné")
    if(numberOfPeople<=0)numberOfPeople=1
    let total = ((billAmount * serviceQuality) / numberOfPeople).toFixed(2)
    document.getElementById("totalTip").style.display="block"
    document.getElementById("tip").textContent = total
}