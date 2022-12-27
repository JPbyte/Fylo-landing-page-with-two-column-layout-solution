//variables
const textInput = document.getElementById("text")
const btn = document.getElementById("btn")
const textInputTwo = document.getElementById("input_email_two")
const btnTwo = document.getElementById("input_submit_two")

console.log(textInputTwo)
//functions
btn.addEventListener("click", (e) => {
    e.preventDefault();
    let ren = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let validate = ren.test(textInput.value)

    if (!validate == "") {
        textInput.style.border = "0.17rem green solid"
        btn.style.backgroundColor = "green"
    } else {
        textInput.style.border = "0.17rem red solid"
        btn.style.backgroundColor = "red"
    }
})

btnTwo.addEventListener("click", (event) => {
    event.preventDefault();
    let renTWO = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let validateTwo = renTWO.test(textInputTwo.value)

    if (!validateTwo == "") {
        textInputTwo.style.border = "0.17rem green solid"
        btnTwo.style.backgroundColor = "green"
    } else {
        textInputTwo.style.border = "0.17rem red solid"
        btnTwo.style.backgroundColor = "red"
    }
})