function processData(input) {
    var loveTree = `        *
        0
       000
      00000
     0000000
    000000000
   00000000000
  0000000000000
 000000000000000
00000000000000000
`
    console.log(loveTree);
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

/**/

function processData(input) {
    console.log(' '.repeat(8)+'*'.repeat(1));
    for(i=8;i>=0;i--){
       console.log(' '.repeat(i)+'0'.repeat(17-(2*i)));
    }
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
