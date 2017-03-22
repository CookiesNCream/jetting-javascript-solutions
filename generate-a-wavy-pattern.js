function processData(input) {
    console.log(Array(15).join(Array(8).join("\u2571\u2572")+'\n'));
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
    console.log(('\u2571\u2572'.repeat(7) + '\n').repeat(14));
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
console.log(`\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572
\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572
\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572                
\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572
\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572
\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572
\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572
\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572
\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572
\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572
\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572
\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572
\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572
\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572\u2571\u2572`);
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
