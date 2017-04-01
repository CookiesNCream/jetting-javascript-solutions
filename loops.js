function vowelsAndConsonants(s) {
   vowels = ['a','e','i','o','u'];
   consonants = new Array();

   for (var i = 0; i <= s.length; i++) {
       index = s.charAt(i);
       if (vowels.indexOf(index)!==-1) {
          console.log(index);
       }else{            
          consonants.push(index);
       }
   }
   console.log(consonants.join("\n"));
}

/**/

function vowelsAndConsonants(s) {
    vowels = ['a','e','i','o','u'];
    consonants = [];
    for (letter of s) {
        if (vowels.indexOf(letter) !== -1) {
            console.log(letter);
        } else {
            consonants.push(letter);
        }
    }
    console.log(consonants.join("\n"));
}
