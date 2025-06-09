
var nombreEmpresa = "Annum";
var sloganEmpresa = "Es mejor cuando las hortalizas son las de toda la vida.";
var enlacesNavbar = {
    "Inicio" : "index.html",
    "Plan de sostenibilidad" : "plan.html",
    "Indicadores CII-FESG" : "indicadores.html"
};
var smalliconpath = "img/potato_notext.png";
var bigiconpath = "img/potato_text.png";
var bigiconblushpath = "img/potato_text_abierto.png";

var gruposInteresInternos = {
    "Propietarios" : "Los propietarios necesitan que las actividades de Annum sean rentables a largo plazo.",
    "Inversores" : "Los inversores están interesados en la rentabilidad, la gestión ética y la transparencia de la empresa.",
    "Empleados" : "Las acciones de la empresa afectan directamente al empleo y economia de este grupo.",
    "Comunidad local" : "La existencia de la empresa genera nuevos puestos de trabajo, también, las actividades de la empresa podrían dejar un impacto ambiental."
}
var gruposInteresExterno = {
    "Proveedores" : "Los cambios dentro de Annum podrían hacer que la relación comercial entre los proveedores que quieren cultivos Annum y Annum cambie.",
    "Clientes finales" : "Este grupo se ve afectado por la calidad del producto de Annum que compren o el precio de venta que se le ponga. Nosotros trabajamos en hacer los precios asequibles para todos los que quieran calidad.",
    "Entidades gubernamentales" : "Las entidad gubernamentales se ven afectadas cuando intentan asegurar que Annum cumple con las normas, o requisitos para subvenciones y demás trámites burocráticos y/o reguladores. Lo cual siempre tratamos de cumplir."
}

var analisisMaterialidadAmbiental = {
    "Uso de agua" : "Debemos mejorar la eficiencia de nuestro uso del agua, ya que el riego es clave en el cultivo de patatas. Investigaremos cómo reducir su consumo sin afectar la calidad.",
    "Uso de pesticidas" : "Queremos intentar reducir el uso de pesticidas para proteger la salud de nuestros indispensables trabajadores y ustedes, los clientes finales."
}


// EASTER EGG!!!! DELTARUNE CAPITULOS 3-4 SALIERON YA DESPUES DE 2 AÑOS
let secret = "";
document.addEventListener("keydown", (e) => {
    secret += e.key.toLowerCase();
    if (secret.includes("deltarune")) {
        let url = "https://deltarune.com/";
        window.open(url, '_blank').focus();
        secret = "";
    }
});