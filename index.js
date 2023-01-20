function A (arr){
    const even = []
    const odd = []
        for(num of arr) {
            if (arr[num] % 2 == 0) {
                even.push(arr[num])
            }
            else {
                odd.push(arr[num])
            }
        }
    console.log(even)
    console.log(odd)
}

A([1,2,3,4,5,4,3,2,2])