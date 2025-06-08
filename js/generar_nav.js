
function generarNav(){
    let header = document.getElementById("contenedor_navbar");
    if (header === null){
        alert("Alerta: No se generó el navbar correctamente.")
        return;
    }

    var nombreHtml = document.body.id.toLowerCase();//location.pathname.split("/").slice(-1);
    //alert("Nombre del ficherito: " + nombreHtml);
    //alert("Pathname: " + location.pathname);

    // Genera titulo
    let divcontenedor = document.createElement('div');
    divcontenedor.style.display = "flex";
    divcontenedor.style.justifyContent = "center";
    let titulo = document.createElement("h1")
    titulo.textContent = nombreEmpresa;
    let img = document.createElement("img");
    img.src = bigiconpath;
    img.style.position = "relative";
    img.style.width = "88px";
    img.style.marginRight = "20px";
    //header.appendChild(img);
    //header.appendChild(titulo);
    divcontenedor.appendChild(img);
    divcontenedor.appendChild(titulo);
    header.appendChild(divcontenedor);

    // Genera nav y UL
    let navi = document.createElement("nav");
    let unorderedList = document.createElement("ul");
    unorderedList.id = "nav-menu";

    for (const [key, value] of Object.entries(enlacesNavbar)) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.textContent = key;
        if (value.toLowerCase().includes(nombreHtml)){
            // Estamos en esta pagina, ponerla a disabled
            li.className = "disabled";
        }
        else{
            a.href = value;
        }

        li.appendChild(a);
        unorderedList.appendChild(li);
    }

    navi.appendChild(unorderedList);
    header.appendChild(navi)
}

function ponDatos(){
    let nombresEmpresa = document.querySelectorAll('[nombreEmpresa]');
    let sloganesEmpresa = document.querySelectorAll('[sloganEmpresa]');
    nombresEmpresa.forEach(element => {
        element.textContent = nombreEmpresa;
    });
    sloganesEmpresa.forEach(element => {
        element.textContent = sloganEmpresa;
    });

}

function generarFooter(){
    const footie = document.getElementById("contenedor_footer");
    if (footie === null){
        return;
    }
    let br1 = document.createElement('br');
    let pps = document.createElement('p');
    pps.textContent = "Todos los derechos reservados a '" + nombreEmpresa + "'."

    footie.appendChild(br1);
    footie.appendChild(pps);
}

generarNav();
ponDatos();
generarFooter();