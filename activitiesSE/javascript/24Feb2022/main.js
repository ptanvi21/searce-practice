// Graphical text
var canvas = document.createElement('canvas'); 
canvas.width = 500;
canvas.height = 250;
var ctx = canvas.getContext('2d');
ctx.font = '50px Cursive';
ctx.fillText("Searce Pune!", 50, 50);
document.body.appendChild(canvas);

// infinity
var a = 0;
var b = 0;
console.log("a===b :", a===b);  //true
console.log("1/ (a===1)/b", 1/ (a===1)/b);  //infinity

console.log("Square root of -1 is ", Math.sqrt(-1));

// measuring time
console.time('response in');
// alert('Measuring time');
console.timeEnd('response in');

// date
console.log(new Date())

// tabulating values
var person =[
    {
        "id" :1,
        "name" : "John",
        "city" : "London",
    },
    {
        "id" :2,
        "name" : "Joe",
        "city": "Washington",
    },
    {
        "id" :3,
        "name" : "Riya",
        "city" : "Pune"
    }
];
console.table(person, ['name', 'city']);

// xml
var myObject = { "foo":{
    "bar":"data"
}
};
console.dir(myObject);
console.dirxml(myObject);

// compare string lexicographically
var a = 'pune';
var b = 'searce';
console.log(a.localeCompare(b));

// trim whitespace
console.log("      string   ".trim()); 

var s = "Jan, Feb, March, April, May, June";
console.log(s.split(","));

// repeat a string
console.log("abcs".repeat(3));

// convert to string
var date = new Date();
console.log(date.toDateString());
console.log(date.toLocaleDateString());

// number of milliseconds
console.log(Date.now());

// increment date object
var checkoutDate = new Date();
checkoutDate.setDate( checkoutDate.getDate() + 10);
console.log(checkoutDate);

// convert to json
var date = new Date();
console.log(date.toJSON());

console.log(0 || 'default');
console.log(0 || undefined);

// short circuiting
var x = 10;
// console.log(x == 10 && alert("x is 10"))
// console.log(x == 10 && alert("x is not 10"))

// sort
console.log([100, 1000, 10, 10000, 1].sort(function(a, b) { 
    return b - a;
}));

console.log([100, 1000, 10, 10000, 1].sort(function(a, b) { 
    return a - b;
}));

a = [1,2,3,4];
for (i in a){
    console.log(i*2);
}

console.log([1,2,3,4].reverse());

// concatenate
var arr1 = ["a","b"]; 
var arr2 = ["e", "f"];
var arrConc = arr1.concat("c", "d", arr2);
console.log(arrConc);

// array spread
let arr = [..."123456"].map(x=>parseInt(x));
console.log(arr)

// searching an array
let people = [
    {name: "bob"},
    {name: "john"}
];
let bob = people.find(person => person.name === 'bob');
console.log(bob);

// string to array
var sarr = "stackoverflow".split("");
console.log(sarr);

// remove items
var b = [6,7,8,9];
b.shift();
console.log(b);

var z = [3,5,7,6,9,10];
z.splice(1,2);
console.log(z);

// find minimum,maximum
var p = [1,4,9,25,36];
var minVal = Math.min(...p);
var maxVal = Math.max(...p);
console.log(minVal,maxVal);

console.log(["Hello", " ", "World"].join(""));

// add elements using spice
var v = [1,2,4,5,3];
var i = v.length + 1;
v.splice(i,0,6,7,8);
console.log(v);

// entries method
var l = ['a', 'b', 'c'];
for(const[i,e] of l.entries()){
    console.log(i,e);
}

// flattening arrays
var deeplyNested = [4,[5,6,[7,8],9]];
const flatten = deeplyNested.toString().split(',').map(Number);
console.log(flatten);


// using windows.confirm()
if(window.confirm("Are you sure you want to delete this?")) { 
    deleteItem(itemId);
}