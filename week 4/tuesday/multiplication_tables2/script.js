/* Multiplication tables 2.0
Write a for loop that will iterate from 0 to 10.
For each iteration of the for loop, it will multiply the number by 9.
Log the result (e.g. "2 * 9 = 18"). */

let number = 0;

for(i=0; number <= 10; number++) {
    console.log(number + " * 9 = " + (number * 9));
}




var str = '{"names":[' +                    // crate JSON object
'{"first":"Hakuna","lastN":"Matata" },' +
'{"first":"Jane","lastN":"Doe" },' +
'{"first":"Air","last":"Jordan" }]}';
obj = JSON.parse(str);                      // parse
document.write(obj.names[1].first);   