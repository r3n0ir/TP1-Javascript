const num1 = parseInt(prompt("Ingrese un numero: "));
const num2 = parseInt(prompt("Ingrese otro numero: "));

if (num1 == num2) {
    document.write("Los numeros ingresados son iguales");
}
else if (num1 > num2) {
    document.write("El numero mayor es el: " + num1);
}
else {
    document.write("El numero mayor es el: " + num2);
}
