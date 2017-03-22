function processData(myArray) {
   var array = myArray;
   var lar = Math.max(array[0], array[1]);
   var secondLar = Math.min(array[0], array[1]);
   for (var i = 2; i < array.length; i++){
      if (array[i] > lar){
         secondLar = lar;
         lar = array[i];
      } else if (array[i] < lar && array[i] > secondLar){
        secondLar = array[i];
      }
}
console.log(secondLar);
};


// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split('\n')[1].split(' ').map(Number));
});
