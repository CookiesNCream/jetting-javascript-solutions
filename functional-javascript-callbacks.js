function myFilter(my_array, callback){
    var arr = [];
    for (var index in my_array) {
        if (callback(my_array[index])) {
           arr.push(my_array[index])
        }
    }
    return arr;
}

function processData(inputArray) {
    //Write anonymous function, which takes one parameter and returns true if its even or false if its odd.
    console.log(myFilter(inputArray,(x) => (x % 2 == 0)));   
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split(' ').map(num => Number(num)));
});

/**/

function myFilter(my_array, callback) {
    return my_array.filter(callback);
} 

function processData(inputArray) {
    //Write anonymous function, which takes one parameter and returns true if its even or false if its odd.
    console.log(myFilter(inputArray, (x) => (x % 2 == 0)));   
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split(' ').map(num => Number(num)));
});
