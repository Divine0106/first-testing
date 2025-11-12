let downside = document.getElementById("entry")
let count = 0
let nodo = document.getElementById("no")
console.log(entry)



function myLead() {
    count = count + 1;
    // document.getElementById("no").innerText = count
    // console.log("count")
    nodo.innerText = count;
}
function save() {
    let countstring = count + " - "
    downside.textContent += countstring
    nodo.textContent = 0
    count = 0
    console.log("count")
}


    // let myname = "Deraa"
    // let greet = "My name is "
    // let myGreeting = greet + myname + "."
    // console.log(myGreeting)


    // let points = 6
    // let bonusPoints = "12"
    // let total = points + bonusPoints
    // console.log(total)


    // let comein = document.getElementById("welcomee")
    // let name = "Onimaro"
    // let greeting = "Welcome To My Page "
    // comein.innerText = greeting + name 
    // comein.innerText +="&#x1F44B"