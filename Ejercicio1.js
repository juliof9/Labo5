function palindrome (s = prompt('Ingrese una palabra: ')) {
    if(s.split("").reverse().join("") == s) {
        console.log(s + ' es una palabra palindrome');
        return;
    }
    console.log(s + ' no es una palabra palindrome');
    return;
}