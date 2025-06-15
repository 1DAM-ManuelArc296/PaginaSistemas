
let hierba_generada = []

function hierba(){
    let container = document.getElementsByClassName("seccion_tierra")[0];
    if (container === null || container === undefined){
        return;
    }
    for (let i = 0; i < 5; i++) {
        let hierbita = document.createElement('img');
        hierbita.src = "img/grassie.png";
        hierbita.style.width = "25%";
        hierbita.style.left = (20 * i) + "%";
        hierbita.id = "hierba";
        hierbita.style.position = "absolute";
        container.appendChild(hierbita)
        hierba_generada.push(hierbita)
    }
}
function hierba_resize() {
    let container = document.getElementsByClassName("seccion_tierra")[0];
    if (container === null || container === undefined){
        return;
    }
    hierba_generada.forEach(hierba => {
        const rect = container.getBoundingClientRect();
        hierba.style.top = window.scrollY + rect.top - (hierba.height/2)-10 + 'px';
        /*hierba.style.left = window.scrollX + rect.left + 'px';*/
        //hierba.style.top = (container.getBoundingClientRect().top).toString() + "px";
    });
}

function randBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function playsoundnube(){
    var audioplayer = document.getElementById("generalaudio");
    if (audioplayer === null ){
        return;
    }
    audioplayer.src = "aud/splat.wav"
    audioplayer.play();

}

// Nubes
const totalNubes = 15;

function creaNube() {
    const container = document.getElementsByClassName("seccion_cielo")[0];

    const cloud = document.createElement('div');
    cloud.classList.add('cloud');

    // Esto es basicamente pa crear las partes de las nubes
    const shapes = [
        { width: 70, height: 70, left: 60, top: 10 },
        { width: 50, height: 50, left: 100, top: 20 },
        { width: 60, height: 60, left: 30, top: 20 },
        { width: 40, height: 40, left: 80, top: 0 }
    ];

    shapes.forEach(shape => {
        const part = document.createElement('div');
        part.classList.add('cloud-part');
        part.style.width = `${shape.width}px`;
        part.style.height = `${shape.height}px`;
        part.style.left = `${shape.left}px`;
        part.style.top = `${shape.top}px`;
        part.addEventListener('click', playsoundnube);
        cloud.appendChild(part);
    });

    //const topPos = Math.random() * (container.getBoundingClientRect().bottom - (container.getBoundingClientRect().bottom * 0.05));
    // Deberia funcionar, pero las nubes se siguen llendo por donde les sale de...
    const topPos = randBetween((container.getBoundingClientRect().bottom - (container.getBoundingClientRect().bottom * 0.05)), (container.getBoundingClientRect().top + (container.getBoundingClientRect().top * 0.05)));
    const leftStart = -300 - Math.random() * 200;
    const duration = 40 + Math.random() * 40; 
    const scale = 0.5 + Math.random();

    cloud.style.top = `${topPos}px`;
    cloud.style.left = `${leftStart}px`;

    cloud.animate(
    [
        { transform: `translateX(0) scale(${scale})` },
        { transform: `translateX(${window.innerWidth + 800}px) scale(${scale})` }
    ],
    {
        duration: duration * 1000,
        iterations: Infinity,
        easing: 'linear'  
    }
    );

    container.appendChild(cloud);
}

function creaTodasNubes(){
    const audioplayer = document.createElement("audio");
    audioplayer.id = "generalaudio";
    document.body.appendChild(audioplayer);

    let nubes_a_generar = totalNubes;
    const container = document.getElementsByClassName("seccion_cielo")[0];
    if (container === null || container === undefined){
        return;
    }
    if (container.hasAttribute("numero_nubes")){
        nubes_a_generar = parseInt(container.getAttribute("numero_nubes"));
    }
    for (let i = 0; i < nubes_a_generar; i++) {
        creaNube();
    }
}

document.documentElement.style.overflowX = 'hidden';
document.documentElement.scrollLeft = 0;

window.addEventListener('load', hierba_resize);
window.addEventListener('resize', hierba_resize);
window.addEventListener('scroll', hierba_resize)


hierba();
creaTodasNubes();
