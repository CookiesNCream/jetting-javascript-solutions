function processData(input) {
    var rows = input.split('\n');
    var K = rows[0].split(' ').map(Number)[1];
    var N = rows[1].split(' ').map(Number);
    N = N.sort(function(a, b){return a-b}); 
    var i = 0;
    while(K>=0) {
        K -= N[i];
        i++;
    }
    console.log(i-1);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
