//Carlos Rondón Pérez - HLC: JavaScript Actividad RA1 (2º DAM)

let nombre, edad, esEstudiante, num1, num2, suma, resta, mult, div, mod, mensajeCompleto;

//a)
nombre = "Carlos";
edad = 29;
esEstudiante = true;

console.log(`Nombre: ${nombre}, Edad: ${edad}, Estudiante: ${esEstudiante}`);

//b)
num1 = 375;
num2= 15;

suma = num1 + num2;
console.log(``);
console.log(`La suma de ${num1} más ${num2} es ${suma}.`);

resta = num1 - num2;
console.log(`La resta de ${num1} menos ${num2} es ${resta}.`);

mult = num1 * num2;
console.log(`La multiplicación de ${num1} por ${num2} es ${mult}.`);

div = num1 / num2;
console.log(`La división de ${num1} entre ${num2} es ${div}.`);

mod = num1 % num2;
console.log(`El resto de ${num1} entre ${num2} es ${mod}.`);

//c)
mensajeCompleto = "Mi nombre es " + nombre + " y tengo " + edad + " años.";
console.log(``);
console.log(mensajeCompleto);

//d)
console.log(``);
console.log(`La variable nombre es de tipo ` + typeof nombre + `.`);
console.log(`La variable edad es de tipo ` + typeof edad + `.`);
console.log(`La variable esEstudiante es de tipo ` + typeof esEstudiante + `.`);
console.log(`La variable mensajeCompleto es de tipo ` + typeof mensajeCompleto + `.`);