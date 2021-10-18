let array1 = ["maria", "josefa"];
let array2 = ["roberta", "roberto", array1, "macaco"];

forRancio:
for (let array in array2) {
    if (array == 2) {
        for (let array of array1) {
            console.log(array);
            break forRancio;
        }
    }else{
        console.log(array2[array]);
    }
};