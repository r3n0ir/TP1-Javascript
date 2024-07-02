const frase = prompt("Ingrese una frase: ");

for (let i = 0; i < frase.length; i++) {
    const caracter = frase.charAt(i);

    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
        console.log(caracter);
    }
}
