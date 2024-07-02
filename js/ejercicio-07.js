const num1 = parseInt(prompt("Ingrese un numero: "));
const num2 = parseInt(prompt("Ingrese otro numero: "));
const num3 = parseInt(prompt("Ingrese otro numero: "));

if (num1 > num2 && num1 > num3) {
    document.write("El numero mayor es: " + num1);
}
else if (num2 > num1 && num2 > num3) {
    document.write("El numero mayor es: " + num2);
}
else if (num3 > num1 && num3 > num2) {
    document.write("El numero mayor es: " + num3);
}
else if (num1 == num2 && num2 == num3) {
    document.write("Los numeros ingresados son iguales");
}