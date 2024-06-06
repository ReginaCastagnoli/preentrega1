


function calcularCambio(monto, moneda){

    let cambio = 0;

    if(moneda == "DOLAR" || moneda == "dolar"){
        let cambio = monto / 896;
        

    }
    else if (moneda == "EURO" || moneda == "euro"){
       let cambio = monto / 970;
        


    }
    return cambio
}

function datosCambio (monto , moneda){

    let cambioFinal = calcularCambio( monto, moneda);

    console.log ( "Datos de la convertibilidad:");
    console.log ( "Monto en peso ingresado: ", monto);
    console.log ( "Cambio a: ", moneda);
    console.log ( "Valor final: ", cambioFinal);
    
}

console.log("Bienvenido a Conversor Pepito");

let monto = "";

while(monto != "SALIR") {
    
    monto = prompt("Ingrese el monto que quiere convertir a otra moneda oficial o SALIR para no continuar");
    
    if( monto != "SALIR"){

        monto = parseFloat( monto);
        let moneda = prompt( " Ingrese el tipo de moneda a la cual quiere pasar: DOLAR | EURO");
        datosCambio ( monto, moneda);

}
else{
    console.log( "Gracias por visitar este sitio");
}
}
