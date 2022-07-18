// MAP

const tasks = [
    {
      'name'     : 'Study JavaScript',
      'duration' : 120
    },
    {
      'name'     : 'Work out',
      'duration' : 60
    },
    {
      'name'     : 'Study GCP',
      'duration' : 240
    }
  ];
const task_names = tasks.map(task => task.name)
console.log(task_names);


// FILTER

const words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
const result = words.filter(word => word.length < 8);
console.log(result);

const difficult_tasks = tasks.filter((task) => task.duration >= 120 );
console.log(difficult_tasks);

// REDUCE

const numbers = [1,2,3,4,5];
let total = numbers.reduce(function (previous, current) {
    return previous + current;
}, 0);
console.log(numbers);
console.log(total);

const sum = [1, 2, 3, 4, 5].reduce(function (previous, current, index) {
    const val = previous + current;
    console.log("The previous value is " + previous + 
                "; the current value is " + current +
                ", and the current iteration is " + (index + 1));
    return val;
}, 0);
console.log("The loop is done, and the final value is " + sum + ".");

var numbers= [1,2,3,4,5];
var doubled  = numbers.map(n => n * 2);
console.log(numbers);
console.log(doubled);

var numbers = [1,2,3,4,5];
var greaterThan2 = numbers.filter(n => n > 2);
console.log(numbers);
console.log(greaterThan2);