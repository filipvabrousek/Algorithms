    function sort(arr) {
        var copy = arr;
        let temp = [];
        let max = arr[0];

    for (var j = 0; j < arr.length * copy.length; j++) {
        for (var i = 0; i < copy.length; i++) {
                if (copy[i] < max) {
                    max = copy[i];
                }
        }

        temp.push(max);
        copy = copy.filter(x => x != max);
        max = copy[0];
    }
    
    return temp;
}

const res = sort([6, 3, 1, 8, 2]);
// const res = sort([3, 2, 123, 9787, -23]);
console.log(res);
