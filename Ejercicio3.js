
function fibonacci(n){
    var a=0;
    var b=1;
    console.log(a+" ");
 
    for(i=0; i<n-1;i++){
        var numeroTemporal=a;
        a=b;
        b=numeroTemporal+b;
 
        console.log(a+" ");
    }
    
}