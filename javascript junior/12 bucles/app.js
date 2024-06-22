
// bucle for
// declaracion e inicializacion
// condicion
// iteracion

for (let i = 0; i < 6; i++) {
    document.write(i + "<br>")
}


// for in

let animales = ["gato", "perro", "tiranosaurio rex"]

for (animal in animales) {
    document.write(animal + "<br>")
}

for (animal of animales) {
    document.write(animal + "<br>")
}

// label

array1 = ["maria", "josefa", "roberta"]
array2 = ["pedro", "marcelo", array1, "josefina"]

forRancio:
for (let array in array2) {
    if (array == 2) {
        for (let array of array1) {
            break forRancio;
            document.write(array + "<br>")
        }
    } else {
        document.write(array2[array]+ "<br>")
    }
}