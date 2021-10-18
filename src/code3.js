let animales = ["Gato", "Perro", "Tiranosaurorex"];
animales.tamaño = "grande"

//For in y of es lo casi lo mismo que lo visto en code2 pero te ahorras la sintaxis

for (animal in animales) {
    console.log(animal);
};

//----------------------------*---------------------------//

let animales = ["Gato", "Perro", "Tiranosaurorex"];
animales.edad = "20"

for (animal of animales) {
    console.log(animal);
    console.log(animales.edad)
};

//----------------------------*---------------------------//

let animales = ["Gato", "Perro", "Tiranosaurorex"];

for (animal in animales) {
    console.log(animales[animal]);
};

//For In es la posicion en la que se encuentra y For Of muestra el valor que esta en esa posicion