
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
    "Asegurar el empleo digno" : "Esperamos que para el 2026 podamos tener mejores condiciones de empleo.",
    "Fomentar el empleo rural" : "Esperamos que para el 2030, el 40% del personal contratado en cada campaña agrícola sea joven y local.",
    "Energía solar en nuestra operación" : "Instalar paneles solares en las instalaciones, y para el 2026 para cubrir el 50% de nuestro consumo energético.",
    "Mantenerse al tanto con las normativas" : "Para este mismo año, otra vez queremos revisar nuestro cumplimiento de las normativas impuestas por el gobierno.",
    "Modernización sostenible" : "Buscaremos modernizar aún más nuestras instalaciones gracias a ayudas y subvenciones."
}

var planDeAccion = {
    "Reducir el uso de agua sin afectar la calidad" : {
        "Implementación de sensores de humedad" : "Instalar sensores que indiquen cuándo realmente es necesario regar.",
        "Riego por goteo inteligente" : "Sustituir gradualmente los sistemas tradicionales por riego por goteo automatizado."
    },
    "Cuidar de la tierra" : {
        "Usar agentes biológicos" : "Fomentar el uso de agentes biológicos en vez de pesticidas no orgánicos.",
        "Uso de pesticidas orgánicos" : "Investigar y testear pesticidas naturales con bajo impacto ambiental.",
        "Uso de abonos y compost orgánico" : "Fomentaremos el uso interno de fertilización natural para devolver nutrientes al suelo."
    },
    "Asegurar el empleo digno" : {
        "Evaluación de salarios y condiciones laborales" : "Compararemos salarios con el estándar del sector y condiciones de seguridad.", 
        "Escucha a los trabajadores" : "Crear un comité para tratar temas laborales y sugerencias de mejora.",
        "Programas de salud y bienestar" : "Ofrecer revisiones médicas anuales, apoyo psicológico, etc..."
    },
    "Fomentar el empleo rural" : {
        "Inversión en infraestructuras locales" : "Crear programas de los que se puedan beneficiar los locales que nos llevan apoyando toda la vida.",
        "Ofertas de empleo para la población local" : "Si priorizamos la contratación de residentes locales, hay una posibilidad de que familias se muevan a la comunidad local por el empleo."
    },
    "Energía solar en nuestra operación" : {
        "Hacer una evaluación energética" : "Medir cuánta electricidad estamos gastando e identificar qué apartados se pueden mejorar.",
        "Instalación de paneles solares" : "Instalar más paneles solares para decrecer la dependencia de energías no renovables."
    },
    "Mantenerse al tanto con las normativas" : {
        "Realizar un análisis normativo e identificar posibles errores" : "Así, estaremos seguros que cumplimos con todo lo que podemos mejorar como buena empresa responsable.",
        "Plan de corrección y mejoras" : "Se ajustarán las partes que sean necesarias para cumplir con las normativas que se nos apliquen.",
        "Cursos de capacitación sobre normativas" : "Se les impartirá a nuestros valiosos trabajadores unos cursos sobre normativas para asegurar que estas se respetan."
    },
    "Modernización sostenible" : {
        "Identificación de ayudas disponibles y aplicables" : "Identificamos las ayudas y subvenciones a las que nos podamos presentar.",
        "Postulación y seguimiento de convocatorias" : "Prepararemos los documentos que procedan para poder presentarlos a recibir ayudas.",
        "Mejora de equipamiento e instalaciones" : "Con el dinero recibido de las ayudas que nos han sido aceptadas, mejoraremos las instalaciones y el equipamiento para poder seguir brindando calidad a su mesa."
    }
}

var indicadores = {
    "Reducir el uso de agua sin afectar la calidad" : {
        "Reducción en consumo de agua" : "%",
        "Superficie con sensores de humedad instalados" : "%",
        "Superficie con riego por goteo inteligente" : "%"
    },
    "Cuidar de la tierra" : {
        "Reducción de uso de pesticidas no orgánicos" : "%",
        "Compost producido mensualmente" : "Kg",
        "Uso de la fertilizacion natural" : "% de fertilización mensual"
    },
    "Asegurar el empleo digno" : {
        "Encuestas de satisfacción laboral" : "Media en escala del 1 al 10",
        "Empleados con capacidad de atender a los programas de salud y bienestar" : "%",
        "Reuniones del comité laboral realizadas" : "Numero mensual"
    },
    "Fomentar el empleo rural" : {
        "Programas existentes que beneficien a los locales" : "Número anual",
        "Ofertas de empleos generadas para locales" : "Número anual"
    },
    "Energía solar en nuestra operación" : {
        "Energía proveniente de paneles solares" : "% del consumo total anual",
        "Número de paneles solares instalados" : "Numero anual",
        "Eficiencia energética de nuestras facilidades" : "%"
    },
    "Mantenerse al tanto con las normativas" : {
        "Cumplimiento normativo" : "%",
        "Trabajadores que han recibido un curso de capacitación sobre normativas" : "%"
    },
    "Modernización sostenible" : {
        "Subvenciones solicitadas" : "Numero anual",
        "Subvenciones aprobadas" : "Numero anual",
        "Mejoras en el equipamiento e instalaciones" : "%"
    }
}

var indicadores_ciifesg = {
    "Financieros" : [
        {
            "Pilar" : "F1",
            "KPI" : "Ingresos anuales por venta de patatas",
            "Unidad" : "€"
        },
        {
            "Pilar" : "F2",
            "KPI" : "Gasto en proveedores",
            "Unidad" : "€"
        },
        {
            "Pilar" : "F4",
            "KPI" : "Remuneración a empleados",
            "Unidad" : "€"
        },
        {
            "Pilar" : "F8",
            "KPI" : "Impuesto sobre los beneficios",
            "Unidad" : "%"
        },
        {
            "Pilar" : "F11",
            "KPI" : "Inversión I+D+i",
            "Unidad" : "€"
        },
        {
            "Pilar" : "F12",
            "KPI" : "Inversión total",
            "Unidad" : "€"
        },
        {
            "Pilar" : "F16",
            "KPI" : "Subvenciones recibidas",
            "Unidad" : "€"
        },
        {
            "Pilar" : "F17",
            "KPI" : "Inversión ambientalmente sostenible",
            "Unidad" : "€"
        },
        {
            "Pilar" : "F18",
            "KPI" : "Inversión socialmente responsable",
            "Unidad" : "€"
        }
    ],
    "Ambientales" : [
        {
            "Pilar" : "E1",
            "KPI" : "Consumo de energía",
            "Unidad" : "kWh"
        },
        {
            "Pilar" : "E1/F1",
            "KPI" : "Intensidad energética",
            "Unidad" : "kWh/€"
        },
        {
            "Pilar" : "E2",
            "KPI" : "Consumo de agua",
            "Unidad" : "M³"
        },
        {
            "Pilar" : "E2/F1",
            "KPI" : "Intensidad de agua",
            "Unidad" : "M³/€"
        },
        {
            "Pilar" : "E8",
            "KPI" : "Residuos gestionados",
            "Unidad" : "t"
        },
        {
            "Pilar" : "E9",
            "KPI" : "Residuos reutilizados",
            "Unidad" : "t"
        }
    ],
    "Sociales" : [
        {
            "Pilar" : "S1",
            "KPI" : "Empleados",
            "Unidad" : "Numero de empleados"
        },
        {
            "Pilar" : "S2",
            "KPI" : "Diversidad de género",
            "Unidad" : "% de empleadas"
        },
        {
            "Pilar" : "S5",
            "KPI" : "Estabilidad laboral",
            "Unidad" : "% de contratos fijos"
        },
        {
            "Pilar" : "S10",
            "KPI" : "Absentismo",
            "Unidad" : "Media de días de absentismo por trabajador"
        },
        {
            "Pilar" : "S12",
            "KPI" : "Creación neta de empleo",
            "Unidad" : "Creación neta de empleo"
        },
        {
            "Pilar" : "S14",
            "KPI" : "Formación de empleados",
            "Unidad" : "Media de horas de formación por empleado al año"
        }
    ],
    "Gobierno Corporativo" : [
        {
            "Pilar" : "CG1",
            "KPI" : "Consejeros",
            "Unidad" : "Número de consejeros"
        },
        {
            "Pilar" : "CG3",
            "KPI" : "Consejeros en material de Responsabilidad Social Corporativa (RSC)",
            "Unidad" : "% de consejeros que se dedican a RSC"
        },
        {
            "Pilar" : "CG7",
            "KPI" : "Reuniones del consejo",
            "Unidad" : "Número de reuniones hechas en un año"
        },
        {
            "Pilar" : "CG9",
            "KPI" : "Diversidad de género en el consejo",
            "Unidad" : "% de mujeres pertenecientes al consejo"
        },
        {
            "Pilar" : "CG10",
            "KPI" : "Casos de corrupción/soborno",
            "Unidad" : "Número de casos de corrupción o soborno identificados."
        }
    ]
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
    else if (secret.includes("sostenibilidad")) {
        let url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO8dNp1eUIYV-px8rJnfc8ETbfDUnkF8PQ5w&s";
        window.open(url, '_blank').focus();
        secret = "";
    }
    else if (secret.includes("galleta") || secret.includes("bake") ||secret.includes("cookie")) {
        let url = "https://1dam-eliasgar491.github.io/index.html";
        window.open(url, '_blank').focus();
        secret = "";
    }
    else if (secret.includes("lancer")) {
        let url = "https://static.wikia.nocookie.net/ad9eeb6a-5751-4aac-b4c7-a6459f443a93/scale-to-width/100";
        window.open(url, '_blank').focus();
        secret = "";
    }
});