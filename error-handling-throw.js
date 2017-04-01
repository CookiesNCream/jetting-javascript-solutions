function processData(my_height) {
    try {
        if (my_height >= 4 && my_height <= 10) {
            console.log(my_height);
        } else if (my_height > 10) {
            throw new Error("hugeHeightError");
        } else if (my_height < 4) {
            throw new Error("tinyHeightError");
        } else {
            throw new Error("notANumberError");
        }
    } catch (err) {
        console.log(err.message);
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
