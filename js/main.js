//INGRESO DEL USUARIO
let Usuario= prompt("Ingrese nombre de Usuario")
let Contraseña= prompt ("Ingrese Contraseña")

//DATOS DE LA MERCADERIA
let marca = "";
let detalle = "";
let color = "";

//INGRESO DE MERCADERIA
let laMarca = false;
while (!laMarca){
    marca = prompt (`Ingrese la marca de la prenda \El Don, \ Bastard, \ Vieja Scul.`);
    switch (marca){
        case "El Don":
            marca = "El Don"
            laMarca = true;
            break;
        case "Bastard":
            marca = "Bastard"
            laMarca = true;
            break;
        case "Vieja Scul":
            marca = "Vieja Scul"
            laMarca = true;
            break;
    default:
        alert("Elija una opcion correcta");
    }
    console.log("La Marca: " + marca);
}


let elDetalle = false;
while (!elDetalle){
    detalle = prompt (`Ingrese un detalle distintivo de la prenda \Cuello redondo, \Capucha, \Estampa, \Liso.`);
    switch (detalle){
        case "Cuello redondo":
            detalle = "Cuello redondo"
            elDetalle = true;
        case "Capucha":
            detalle = "Capucha"
            elDetalle = true;
        case "Estampa":
            detalle = "Estampa"
            elDetalle = true;
        case "Liso":
            detalle =  "Liso"
            elDetalle = true;
        break;
    default:
        alert ("Elija una opcion correcta");

    }
    console.log("El Detalle: " + detalle);
}

let elColor = false;
while (!elColor){
    color =prompt ("Ingrese el color  de la prenda \Paleta de Rojos, \Paleta de Azules, \Paleta de Verdes.");
    switch (color){
        case "Paleta de Rojos":
            color = "Paleta de Rojos"
            elColor = true;
        case "Paleta de Azules":
            color = "Paleta de Azules"
            elColor = true;
        case "Paleta de Verdes":
            color = "Paleta de Verdes"
            elColor = true;
        break;
    default:
        alert ("Elija una opcion correcta");    
    }
    console.log("El Color: " + color );
}

// CANTIDAD DE PRENDAS DISPONIBLES
function ingresarStock() {
    let cantidadPrenda = prompt ("Cuantas unidades hay de esta prenda?");
    if (cantidadPrenda === null || isNaN (cantidadPrenda) || cantidadPrenda === "") {
        console.log("Operacion cancelada");
    } else {
        cantidadPrenda = parseInt (cantidadPrenda);
        console.log (`Hay un total de ${cantidadPrenda} prendas iguales o similares a esta. `);
    }
}
ingresarStock();

//ARRAY DE BUZOS EL DON Y SU PRECIO
let mismosBuzos = "Buzos El Don. Distintos modelos,  mismos precios."
console.log(mismosBuzos);

const buzosElDon = [
    {buzoElDon : "Patagonia", precio: 39900},
    {buzoElDon : "Sidney", precio: 39900},
    {buzoElDon : "Over", precio: 39900},
    {buzoElDon : "Border", precio: 39900},
    {buzoElDon: "Tokio", precio: 39900},
    {buzoElDon: "Reincarnation", precio: 39900},
];

for (let i = 0; i < buzosElDon.length; i++) {
    console.log (`Modelo: ${buzosElDon[i].buzoElDon}, Precio :${buzosElDon[i].precio + "$"}`);
}

//EFECTUAR MOVIMIENTO DE MERCADERIA
let registroMercaderia = confirm("¿Desea registrar ingreso de mercaderia?")
if (registroMercaderia) {
    console.log("Registrar movimiento de mercaderia");
} else{
    alert("Registro cancelado");
    console.log("Movimiento de mercaderia cancelado");
}

