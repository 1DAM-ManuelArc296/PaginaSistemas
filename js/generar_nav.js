

let clicks_icono = 0;

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
    img.addEventListener('click', function () {
        clicks_icono++;
        if (clicks_icono == 1){
            this.src = bigiconblushpath;
        }
        else if (clicks_icono == 2){
            this.src = "img/potato_text_nocadena.png";
        }
        else if (clicks_icono == 3){
            this.src = "img/potato_text_nocirculo.png";
        }
        else if (clicks_icono == 4){
            this.src = "img/potato_text_nopatata.png";
        }
        else if (clicks_icono == 5){
            this.src = "img/potato_text_no.png";
        }
        else if (clicks_icono == 6){
            this.style.display = "None";
        }
    });
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

function rellena_tabla(str_identificador, diccionario){
    const tabla_grupos = document.querySelector('['+str_identificador+']');
    if (tabla_grupos === null || tabla_grupos === undefined){
        return;
    }
    
    for (const [key, value] of Object.entries(diccionario)) {
        let nombre_grupo = document.createElement("div");
        let escrito_grupo = document.createElement("div");

        nombre_grupo.textContent = key;
        escrito_grupo.textContent = value;

        tabla_grupos.appendChild(nombre_grupo);
        tabla_grupos.appendChild(escrito_grupo);
    }
}

function rellena_multitabla(str_identificador, diccionario_multi, nombre_primera_columna = "Accion", nombre_segunda_columna = "Breve explicacion"){
    const contenedor1 = document.querySelector('['+str_identificador+']');
    if (contenedor1 === null || contenedor1 === undefined){
        return;
    }
    for (const [key, value] of Object.entries(diccionario_multi)) {
        let nombre_grande = document.createElement("h2");
        nombre_grande.style.textAlign = "center";
        nombre_grande.style.fontFamily = "'Roboto', 'Arial Narrow Bold', sans-serif";
        nombre_grande.textContent = key;

        let tabla = document.createElement("div");
        tabla.style.paddingTop = "10px";
        tabla.style.paddingLeft = "15px";
        tabla.style.paddingRight = "15px";
        tabla.style.paddingBottom = "28px";
        tabla.classList.add("tabla_grupos_interes");

        let tabla_key_desc = document.createElement("div");
        tabla_key_desc.id = "head";
        tabla_key_desc.textContent = nombre_primera_columna;
        let tabla_value_desc = document.createElement("div");
        tabla_value_desc.id = "head";
        tabla_value_desc.textContent = nombre_segunda_columna;

        tabla.appendChild(tabla_key_desc);
        tabla.appendChild(tabla_value_desc);

        for (const [key2, value2] of Object.entries(value)) {
            let nombre_grupo = document.createElement("div");
            let escrito_grupo = document.createElement("div");

            nombre_grupo.textContent = key2;
            escrito_grupo.textContent = value2;

            tabla.appendChild(nombre_grupo);
            tabla.appendChild(escrito_grupo);
        }

        contenedor1.appendChild(nombre_grande);
        contenedor1.appendChild(tabla);
    }
}

function rellena_multitabla_ciifesg(str_identificador, diccionario_multi){
    const contenedor1 = document.querySelector('['+str_identificador+']');
    if (contenedor1 === null || contenedor1 === undefined){
        return;
    }
    let tabla_pilar = document.createElement("div");
    tabla_pilar.id = "head";
    tabla_pilar.textContent = "Pilar";
    let tabla_kpi = document.createElement("div");
    tabla_kpi.id = "head";
    tabla_kpi.textContent = "KPI (Indicador Clave de Desempeño)";
    let tabla_unidad = document.createElement("div");
    tabla_unidad.id = "head";
    tabla_unidad.textContent = "Unidad de medida";

    contenedor1.appendChild(tabla_pilar);
    contenedor1.appendChild(tabla_kpi);
    contenedor1.appendChild(tabla_unidad);
    for (const [key, value] of Object.entries(diccionario_multi)) {
        let nomgrupo = document.createElement("div");
        nomgrupo.textContent = "Indicadores " + key;
        nomgrupo.id = "bigone";
        contenedor1.appendChild(nomgrupo);
        for (const valdos of (value)) {
            let pilar = document.createElement("div");
            let kpi = document.createElement("div");
            let unidadmedida = document.createElement("div");

            pilar.textContent = valdos["Pilar"]
            kpi.textContent = valdos["KPI"]
            unidadmedida.textContent = valdos["Unidad"]

            contenedor1.appendChild(pilar);
            contenedor1.appendChild(kpi);
            contenedor1.appendChild(unidadmedida);
        }
    }
}

function rellena_grupos() {
    rellena_tabla('tabla_grupo_interes_interno', gruposInteresInternos);
    rellena_tabla('tabla_grupo_interes_externo', gruposInteresExterno);
    rellena_tabla('tabla_analisis_materialidad_ambiental', analisisMaterialidadAmbiental);
    rellena_tabla('tabla_analisis_materialidad_social', analisisMaterialidadSocial);
    rellena_tabla('tabla_analisis_materialidad_economico', analisisMaterialidadEconomico);
    rellena_tabla('tabla_analisis_materialidad_gubernamental', analisisMaterialidadGubernamental);
    rellena_tabla('tabla_definicion_objetivos', definicionObjetivos);
    rellena_multitabla('tabla_plan_accion', planDeAccion);
    rellena_multitabla('tabla_indicadores', indicadores, "Indicador", "Unidad de medida");
    rellena_multitabla_ciifesg('tabla_indicadores_ciifesg', indicadores_ciifesg)
}

generarNav();
ponDatos();
rellena_grupos();
generarFooter();