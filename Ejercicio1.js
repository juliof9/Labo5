function palindrome (str = prompt('Ingrese una palabra: ')) {
    if(str.split("").reverse().join("") == str) {
        console.log(str + ' es una palabra palindrome');
        return;
    }
    console.log(str + ' no es una palabra palindrome');
    return;
}