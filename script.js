const form = document.querySelector("form")
const subBtn = document.querySelector("#subBtn")
const userInput = document.querySelector("#subBox")
const msgBox = document.querySelector(".msg")
const randomNum = Math.round(Math.random() * 100 + 1)
let count = [];
subBtn.addEventListener("click", (e) => {
    e.preventDefault()
    count.push(userInput.value)
    if (randomNum === parseInt(userInput.value)) {
        msgBox.innerHTML = `<p>you are win 🏆</p> 
        <p>You are try ${count.length} times to win</p>`
    } else if (randomNum < parseInt(userInput.value)) {
        msgBox.innerHTML = `<p>Put Lower number</p>`
    } else if (randomNum > parseInt(userInput.value)) {
        msgBox.innerHTML = `<p>Put Higher number</p>`
    } else if (userInput.value.length === 0) {
        msgBox.innerHTML = ``
    }
})