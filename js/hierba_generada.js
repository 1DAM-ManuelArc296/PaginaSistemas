
let hierba_generada = []

function hierba(){
    let container = document.getElementsByClassName("seccion_tierra")[0];
    let hierba = document.createElement('img');
    let hierba2 = document.createElement('img');
    let hierba3 = document.createElement('img');
    let hierba4 = document.createElement('img');
    let hierba5 = document.createElement('img');
    hierba.src = "img/grassie.png";
    hierba.textContent = "Piss";
    hierba.style.width = "25%";
    hierba.style.left = "-2%";
    hierba.style.position = "absolute";
    container.appendChild(hierba)
    hierba_generada.push(hierba)

    hierba2.src = "img/grassie.png";
    hierba2.textContent = "Piss";
    hierba2.style.width = "25%";
    hierba2.style.left = "20%";
    hierba2.style.position = "absolute";
    container.appendChild(hierba2)
    hierba_generada.push(hierba2)

    hierba3.src = "img/grassie.png";
    hierba3.textContent = "Piss";
    hierba3.style.width = "25%";
    hierba3.style.left = "40%";
    hierba3.style.position = "absolute";
    container.appendChild(hierba3)
    hierba_generada.push(hierba3)

    hierba4.src = "img/grassie.png";
    hierba4.textContent = "Piss";
    hierba4.style.width = "25%";
    hierba4.style.left = "60%";
    hierba4.style.position = "absolute";
    container.appendChild(hierba4)
    hierba_generada.push(hierba4)

    hierba5.src = "img/grassie.png";
    hierba5.textContent = "Piss";
    hierba5.style.width = "25%";
    hierba5.style.left = "80%";
    hierba5.style.position = "absolute";
    container.appendChild(hierba5)
    hierba_generada.push(hierba5)
}
function hierba_resize() {
    let container = document.getElementsByClassName("seccion_tierra")[0];
    hierba_generada.forEach(hierba => {
        const rect = container.getBoundingClientRect();
        hierba.style.top = window.scrollY + rect.top - (hierba.height/2)-10 + 'px';
        /*hierba.style.left = window.scrollX + rect.left + 'px';*/
        //hierba.style.top = (container.getBoundingClientRect().top).toString() + "px";
    });
}

document.documentElement.style.overflowX = 'hidden';

window.addEventListener('load', hierba_resize);
window.addEventListener('resize', hierba_resize);
window.addEventListener('scroll', hierba_resize)


hierba();