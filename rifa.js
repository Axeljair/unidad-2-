var  x  =  parseInt ( prompt ( "Cuantas personas van a participar en la rifa?" ) )
var  nom  =  [ ] ;

    para ( i  =  1 ;  i  <=  x ;  i ++ ) {
        var  z  =  prompt ( "Nombre del participante" )
        nom . empujar ( z ) ;
    }

// alea (nom);
función  alea  ( a ) {
    b  =  Matemáticas . piso ( Math . random ( ) * ( a . length ) ) ;
    c  =  a [ b ] ;
    alert ( "El ganador es:"  +  c ) ;
    consola . log ( a ) ;
}
