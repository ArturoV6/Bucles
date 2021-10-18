//Por cada vez que la condicion se cumpla la iteracion sigue

//declaracion
//condicion 
//iteracion (aumento o decremento)
for (let i = 0; i < 11; i++) {
    console.log(i);
};

//--------------------------*------------------------//

let i;

for (i = 6; i >= 0; i--) {
    console.log(i)
    if (i == 4) {
        continue;
    }else if(i == 5){
        i--
        break;
    }
}

console.log(i);

//-------------------------*------------------------//

let i = 6

for (i; i >= 0; i--) {
    console.log(i)
    if (i == 4) {
        break;
    }
}
