


function calcularCambio(monto, moneda){

    let cambio = 0;

    if(moneda == "DOLARES" || moneda == "dolares"){
        let cambio = monto / 896;
        return cambio

    }
    else if (moneda == "EUROS" || moneda == "euros"){
       let cambio = monto / 970;
        return cambio


    }
    
}

function datosCambio (monto , moneda){

    let cambioFinal = calcularCambio( monto, moneda);

    console.log ( "Datos de la convertibilidad:");
    console.log ( "Monto ingresado: ", monto , "pesos");
    console.log ( "Cambio a: ", moneda);
    console.log ( "Valor final: ", cambioFinal,moneda);
    
}

console.log("Bienvenido a Conversor Pepito");

let monto = "";

while(monto != "SALIR") {
    
    monto = prompt("Ingrese el monto que quiere convertir a otra moneda oficial o SALIR para no continuar");
    
    if( monto != "SALIR"){

        monto = parseFloat( monto);
        let moneda = prompt( " Ingrese el tipo de moneda a la cual quiere pasar: DOLARES | EUROS");
        datosCambio ( monto, moneda);

}
else{
    console.log( "Gracias por visitar este sitio");
}
}
