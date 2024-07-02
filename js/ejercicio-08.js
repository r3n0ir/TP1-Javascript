const num = parseInt(prompt("Ingrese un numero: "));

if ((num % 2) == 0) {
    document.write(`<p>El numero ingresado: ${num}  es divisible por 2</p>`)
} else {
    document.write(`<p>El numero ingresado: ${num}  no es divisible por 2</p>`)
}