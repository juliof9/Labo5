function circle (a = prompt('Ingrese el radio: ')) {
    if(a <= 0) {
        console.log('El radio ingresado debe ser positivo y distinto de 0');
        return;
    }
    console.log('El area es: ' + Math.PI*Math.pow(r, 2));
    return;
}