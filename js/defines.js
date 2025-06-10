
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
    "Uso de pesticidas" : "Queremos intentar reducir el uso de pesticidas para proteger la salud de nuestros indispensables trabajadores y ustedes, los clientes finales.",
    "Manejo de residuos" : "La generación de residuos plásticos y materiales de embalaje por el envío masivo de productos es un tema que no podemos ignorar. Necesitamos revisar qué alternativas sostenibles podemos implementar.",
    "Explotación de la tierra" : "Las prácticas agrícolas intensivas podrían acabar con la vida en el suelo, por ello, intentaremos minimizar el daño con técnicas de agricultura regenerativa."
}

var analisisMaterialidadSocial = {
    "Condiciones laborales justas" : "Aunque el trabajo agrícola sea duro, no queremos que sea injusto, por ello, intentaremos dar a nuestros trabajadores las mejores condiciones para ellos y sus familias, ellos son el corazón de Annum. Así desmentimos esos desdichados rumores y ofrecemos a la gente un trabajo digno.",
    "Fomentar el crecimiento de población en zonas rurales" : "Muchos pueblos están perdiendo habitantes, sobre todo jóvenes. Esta es una de las razones por la que en Annuum queremos generar empleos dignos y estables, para que las personas se queden o incluso regresen a trabajar y vivir en estas tierras pulcras.",
    "Seguridad alimentaria y calidad" : "Nosotros nos tomamos muy en serio nuestros estándares de calidad. Por ello queremos volver a revisar nuestros sistemas de control de calidad para asegurar la mejor calidad para usted."
}

var analisisMaterialidadEconomico = {
    "Estabilidad de precio" : "Sabemos que la inestabilidad o altitud de los precios pueden acabar con cualquier empresa. Por eso, buscamos ampliar los canales de venta y reducir costes sin perder calidad.",
    "Dependencia de productos externos" : "Los embalajes, fertilizantes o incluso la energía usada tiene un precio que no depende de nosotros, con lo que estamos investigando cómo reducir estas dependencias."
}

var analisisMaterialidadGubernamental = {
    "Cumplimiento de normativas" : "En annum, siempre queremos estar al día con la legislación. No solo para evitar sanciones, sino porque muchas normas nuevas van en la línea con nuestra voluntad: producir de forma más responsable y segura.",
    "Acceso a subvenciones y ayudas" : "Con ayudas como estas, podremos modernizar aún más a Annum para su disfrute, entre muchas posibilidades, se puede modernizar equipos o instalar energía solar.",
    "Transparencia y trazabilidad" : "En Annum, no tenemos nada que esconder, al contrario de lo que piensan los sensacionalistas, queremos trabajar en sistemas de trazabilidad que nos permitan decir con orgullo: esto se ha hecho bien."
}

var definicionObjetivos = {
    "Reducir el uso de agua sin afectar la calidad" : "Queremos reducir el uso del agua en un 30% para el 2027.",
    "Cuidar de la tierra" : "Aparte de las técnicas de rotación de cultivos, empezaremos a aplicar técnicas regenerativas en el 100% de nuestras tierras para 2028.",
    "Fomentar el empleo rural" : "Esperamos que para el 2030, el 40% del personal contratado en cada campaña agrícola sea joven y local.",
    "Energía solar en nuestra operación" : "Instalar paneles solares en las instalaciones, y para el 2026 para cubrir el 50% de nuestro consumo energético.",
    "Mantenerse al tanto con las normativas" : "Para este mismo año, otra vez queremos revisar nuestro cumplimiento de las normativas impuestas por el gobierno."
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