function fibonacci(n = prompt('Ingrese el numero de la posicion: ')) {
    var a = 1, b = 0, aux;
    while(n >= 0) {
        aux = a;
        a = a+b;
        b = aux;
        n--;
        console.log(b);
    }
    return;
}