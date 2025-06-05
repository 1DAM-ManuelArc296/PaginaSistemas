
function generarNav(){
    let header = document.getElementById("contenedor_navbar");
    if (header === null){
        alert("Alerta: No se generó el navbar correctamente.")
        return;
    }

    var nombreHtml = location.pathname.split("/").slice(-1);

    // Genera titulo
    let titulo = document.createElement("h1")
    titulo.textContent = nombreEmpresa;
    header.appendChild(titulo)

    // Genera nav y UL
    let navi = document.createElement("nav");
    let unorderedList = document.createElement("ul");
    unorderedList.id = "nav-menu";

    for (const [key, value] of Object.entries(enlacesNavbar)) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.textContent = key;
        if (value.includes(nombreHtml)){
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

generarNav();