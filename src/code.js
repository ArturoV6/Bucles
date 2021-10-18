let  numeroParaSumar = 0;

//mientras que
while (numeroParaSumar < 10) {
    console.log(numeroParaSumar++);
}

//Lo mismo que arriba pero primero ejecuta el codigo ya se vera si se sigue la iteracion
do {
    console.log(numeroParaSumar++);
}
while (numeroParaSumar < 10) 

let numeroNegativo = 0;

//Con condiciones
while (numeroNegativo < 10) {
    if (numeroNegativo !== 6) {
        numeroNegativo++;
        console.log(numeroNegativo);
    }else if(numeroNegativo == 6){
        numeroNegativo++;
        console.log(numeroNegativo);
    }else if (numeroNegativo) {
        //break esto para el codigo es usado mayormente para la optimizacion
        break;
    }
}
