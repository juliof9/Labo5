function insertionSort (arr) {
    for(var i = 0; i < arr.length; i++) {
        let key = arr[i];
        for(var j = i-1; j > -1 && arr[j] > key; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = key;
    }
    console.log(arr);
    return;
}