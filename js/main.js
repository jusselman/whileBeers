// var i = 1; 

// while ( i < 50 ) {
//     console.log(i);
//     i++
// }

// var output = [];
// var count = 1;
// var printIt = document.getElementById('show');
    

// function fizzBuzz() {

//     while(count <= 50) {

//         if(count % 3 === 0 && count % 5 === 0) {
//             output.push("FizzBuzz");
//         } else if (count % 3 === 0 ) {
//             output.push("Fizz");
//         } else if ( count % 5 === 0 ) {
//             output.push("Buzz");
//         }
//           else {
//             output.push(count);
//         }

//         count++;
//         console.log(output);
//     }

    


// }

// fizzBuzz();




var bottleOutput = [];
var bottleCount = 99;

function bCount() {

    while (bottleCount >= 0) {
        console.log(bottleCount + " bottles of beer on the wall." + '\n' +
            bottleCount + " bottles of beer" + '\n' +
            "You take one down, you pass it around " + '\n' +
            (bottleCount - 1) + " bottles of beer on the wall."
            );

        bottleCount--;
    }
}

bCount();

