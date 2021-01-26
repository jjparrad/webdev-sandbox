const title = document.querySelector("h1");
const btn = document.querySelector("button");
let rojo = false;

btn.addEventListener("click", () => {
    title.classList.toggle("red");
    if(rojo){
        btn.innerText = "Rojo"
        rojo = false;
    } else {
        btn.innerText = "Negro"
        rojo = true;
    }
});