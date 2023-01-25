// banner carrossel
const imgs = document.querySelector("#img");
const img = document.querySelectorAll("#img div");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 100}vw)`;
}

setInterval(carrossel, 3300);


//efeito na escrita 
function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(()=>elemento.innerHTML += letra, 75 * i)
    })
}

const titulo = document.querySelector(".txt")
typeWriter(titulo)
