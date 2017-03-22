'use strict';
for (let strings of my_array) {
    if(strings == strings.split('').reverse().join('')){
        console.log(strings);
    }
}

/**/

for (var strings of my_array) {
    if (strings == strings.split('').reverse().join('')) {
        console.log(strings);
    }
}
