var  acc  =  prompt ( "Selecciona el movimiento que desas realizado"  +  "1. Deposito"  +  "2. Saldo"  +  "3. Retiro"  +  "4. Salir"  ) ;
var  deposito  =  0 ;
var  saldo  =  0 ;
var  retiro  =  0 ;

switch ( acc ) {
    caso  "1" :
        var  dp  =  parseInt ( prompt ( "Ingresa el monto a depositar:" ) )
        deposito  =  deposito  +  dp ;
        parseInt ( alert ( "Su saldo anterior era de:"  +  saldo  +  "Pesos" ) )
        parseInt ( alert ( "Su saldo actual es de de:"  +  deposito  +  "Pesos" ) )
        saldo  =  saldo  +  deposito ;
        romper ;

        caso  "2" :
        parseInt ( alert ( "Su saldo actual es de de:"  +  saldo  +  "Pesos" ) )
        romper ;

        caso  "3" :
        var  dp  =  parseInt ( prompt ( "Ingresa el monto a retirar:" ) )
        alerta ( "Su saldo anterior era de:"  +  saldo  +  "Pesos" )
        saldo  =  saldo  —  retiro ;
        alerta ( "Su saldo actual es de de:"  +  retiro  +  "Pesos" )
        romper ;

        caso  "4" :
        alert ( "Sus movimientos fueron realizados con exito, gracias por confiar en nostros" )
        romper ;

        por defecto :
            alert ( "Ese movimiento no se encuentra disponible" )
}

// retorno acc
