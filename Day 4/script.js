const input = document.getElementById("value");
let btnLength = document.querySelectorAll(".btn").length;
let btn = document.querySelector(".btn");
let backspace = document.querySelector(".backspace-btn");
let clearnBtn = document.querySelector(".clear-btn");
let equals = document.querySelector(".equals");
let equation = document.querySelector(".equation");

let final = "";
let results = 0;

for (let i = 0; i < btnLength; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", (e) => {
        let value = document.querySelectorAll(".btn")[i].innerHTML
            final = input.value += value;
    })
}


backspace.addEventListener("click", () => {
    final = final.substring(0, final.length - 1)
    input.value = final;
})


clearnBtn.addEventListener("click", () => {
    final = "";
    input.value = "";
    equation.innertText = "";
})


equals.addEventListener("click", () => {
    results = eval(final)
    equation.innerHTML = final
    input.value = results;
})

