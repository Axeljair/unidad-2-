var  x  =  parseInt ( prompt ( "Cuantos alumnos van a asistir?" ) )
var  alumnos  =  [ "alexa" ,  "andrik" ,  "Daniel" , "Marcelo" , "Dilan" , "Dafne" , "Danae" , "Brayan" , "Edder" , "Fernando" , "Tamara" , "Isaac " , " Eduardo " , " José " , " Arely " , " Natanael " ]
var  asis  =  [ ]
alumbre ( ) ;

function  alum ( ) {
    aleatorio ( alumnos ,  asis ,  x ) ;
    alerta  ( asis ) ;
}
función  aleatoria ( a ,  asi ,  num ) {
    para ( i  =  1 ;  i  <=  num ;  i ++ ) {
        b  =  Matemáticas . piso ( Math . random ( ) * ( a . length ) ) ;
        c  =  a [ b ] ;
        alerta ( "El / La alumn @"  +  c  +  "asistira el dia viernes" )
        asi . empujar ( c ) ;
        a . empalme ( b ,  1 )
    }
}
