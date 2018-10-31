let arr = [];

for(let i = 0; i < 10000000; i++){
    arr.push(i*2);
}

// Binary search
console.time('Binary Search')
function binarySearch(arr, searchedItem) {
    low = 0;                // start index in array (at start)
    high = arr.length - 1;  // last  index in array (at start)
    

    while (low <= high){
        mid = Math.round((low + high) / 2);
        guess = arr[mid];

        if(guess === searchedItem){
            return mid;
        }
        if(guess > searchedItem){
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }
}
console.timeEnd('Binary Search')
console.time('Binary Search v2')
console.log(binarySearch(arr, 2))
console.timeEnd('Binary Search v2')