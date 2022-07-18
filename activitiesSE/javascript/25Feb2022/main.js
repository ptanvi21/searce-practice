// test array elements for equality
console.log([1,2,3].every(function(item,i,list) {
    return item===list[0];
}));

console.log([1,1,1].every(function(item,i,list) {
    return item===list[0];
}))

// slice
var a = [1,2,3,4,5,6,7];
console.log(a.slice(1,4));
console.log(a.slice(2));

// shallow cloning
const existing = {a:1, b:2, c:3, d:4, e:5}
const clone1 = Object.assign({}, existing);
console.log(clone1);
const {...clone2} = existing;
console.log(clone2);

// object freeze
var obj = {
    a: 'abc',
    val: [1,2,3],
};
Object.freeze(obj);
console.log(obj);
obj.a = "pqr";
console.log(obj)

// shallow cloning
var x = {a:1, b: {c:2}};
var y = JSON.parse(JSON.stringify(x));
x.b.c = 3;
console.log(x);

// object properties iteration
var obj = {0:'a', 1:'b', 2:'c'};
Object.keys(obj).map(function(key){
    console.log(key);
})

// object assign
var user = {
    fname : "John"
}
Object.assign(user,{lname: "Doe", age: 20});
console.log(user);

var a1 = {
    a: 1
};
var a2 = {
    b: 2
};
var a3 = {
    c: 3
};
var res = Object.assign(a1,a2,a3);
console.log(res);
console.log(a1);

var x1 = "abc";
var x2 = true;
var x3 = 10;
var xx = Object.assign({}, x1,x2,x3);
console.log(xx);

// object rest/spread
let y1 = {a:1};
let y2 ={...y1, b:2, c:3, d: {e:8}};
console.log(y2);

// define property
var yy = {};
Object.defineProperty(yy, 'pune', {value: 'pune'});
console.log(yy.pune);

// get and set
var person = {
    fname: "John",
    lname: "Doe"
}
Object.defineProperty(person, 'fullname', {
    get: function(){
        return this.fname + " " + this.lname;
    },
    set: function(value){
        [this.fname, this.lname] = value.split(" ");
    }
})
console.log(person.fullname)
person.lname = "Paul";
console.log(person.fullname);
person.fullname = "Rita Roy";
console.log(person.fullname);

// arrays are objects
var anObject = { foo: 'bar',
    length: 'interesting',
    '0': 'zero!',
    '1': 'one!'
};
var anArray = ['zero.', 'one.'];
console.log(typeof anArray == 'object', typeof anObject == 'object');
console.log(anArray instanceof Object, anObject instanceof Object); 
console.log(anArray instanceof Array, anObject instanceof Array); 
console.log(Array.isArray(anArray), Array.isArray(anObject)); 

// convert object value to arrays
var objs = {
    a: "Hello",
    b: "Welcome to ",
    c: "Pune!"
}
var ars = Object.keys(objs).map(function(key){
    return objs[key];
});
console.log(ars);
var keys = Object.keys(ars);
console.log(keys);

// retrieving objects
var p = {a:1, b:1};
props = [];
for(i in p){
    props.push(i);
}
console.log(props);

var ss;
ss = Object.keys(x);
console.log(ss);

// read only property
var ll = {};
Object.defineProperty(a,'foo', {value: 'original', writable: false});
ll.foo = "new";
console.log(ll.foo);

// Object.getOwnPropertyDescriptor
var sampleObj = {
    hello: "world"
};
var op = Object.getOwnPropertyDescriptor(sampleObj, 'hello');
console.log(op);

v = {};
v['val😊'] = "smile";
console.log(v['val😊']);
v[123] = 'hi';
console.log(v['123']);
console.log(v['12'+'3']);
console.log(v[120+3]);
console.log(v[123.0]);
console.log(v['123.0']);

var g = {1:'a', 2:'b', 3:'c'};
console.log(Object.values(g));

console.log(Math.round(6.7));
console.log(Math.ceil(2.3));
console.log(Math.floor(2.3));
console.log(Math.floor(-2.3));

// exponentiation
var k = 16;
var ansk = Math.pow(k,1/2);
console.log(ansk);

console.log(Math.ceil(Math.random()));

console.log(Math.max(2,7));
console.log(Math.min(2,7));
console.log(Math.sqrt(64));

var rand = (Math.random() * Math.random())/6;
console.log(rand);

// find direction
var v = {x:4, y:6};
var dir = Math.atan2(v.y,v.x);
console.log(dir);

var p1 = {x:345, y:987};
var p2 = {x:123, y:456};
var pp = Math.atan2(p2.y-p1.y, p2.x-p1.x);
console.log(pp);

// create vector in given direction
var direction = 1.456;
var vec = {};
vec.x = Math.sin(direction);
vec.y = Math.cos(direction);
console.log(vec.x,vec.y);

// hypot - gives distance between two points
var v1 = {x : 10, y :5};
var v2 = {x : 20, y : 10};
var x = v2.x - v1.x;
var y = v2.y - v1.y;
var distance = Math.hypot(x,y); 
console.log(distance);

console.log(5<<2);
console.log(20>>2);

const map = new Map()
    .set('a', 21)
    .set('b', 24)
for(const i of map){
    console.log(i);
}

// currying function

function fooo(l,b){
    return (l*b);
}
console.log(fooo(3,5));

// immediately invoked function
var eg = (function() {
    return 42;
}());
console.log(eg);

(function(msg){
    console.log(msg);
}("Hello"));

(() => console.log("Searce Pune"))();

// named functions
var sum = function (a,b){
    return (a+b);
}
console.log(sum(4,9));

// error: sub is not a function
// console.log(sub(5,1));
// var sub = function (a,b){
//     return (a-b);
// }

console.log(sub(4,1));
function sub(a,b){
    return a-b;
}

window = {};
window.c = 6;
console.log(egc());
function egc(){
    return this.c;
}


