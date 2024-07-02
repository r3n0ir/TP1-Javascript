const num = parseInt(prompt("Ingrese un numero: "));

if ((num % 2) == 0) {
    document.write(`<p>El numero ingresado: ${num}  es divisible por 2</p>`)
}
else if ((num % 3) == 0) {
    document.write(`<p>El numero ingresado: ${num}  es divisible por 3</p>`)
}
else if ((num % 5) == 0) {
    document.write(`<p>El numero ingresado: ${num}  es divisible por 5</p>`)
}
else if ((num % 7) == 0) {
    document.write(`<p>El numero ingresado: ${num}  es divisible por 7</p>`)
}
