// function add(a: number, b: number){
//     return a+b;
// }

// var ans = add(2,3);
// console.log(ans);

let hobbies: string[];

hobbies = ['Sports', 'Singing'];

let person: {
    name: string,
    age: number
}

person = {
    name: 'Tanvi',
    age: 21
};

let course: string | number = "Angular"
course = 11

class Student{
    firstName: string;
    lastName: string;
    age: number;
    private courses: string[];

    constructor(
        public firstName: string,
        public lastName: string, 
        public age: number, 
        private courses: string[]
    ){
        // (first: string, last: string, age: number, courses: string[]) {
        // this.firstName = first;
        // this.lastName = last;
        // this.age = age;
        // this.courses = courses;
    }

    enrol(courseName: string){
        this.courses.push(courseName);
    }

    listCourses(){
        return this.courses;
    }
}

const student = new Student('Tanvi', 'Kshatriya', 21, ['Angular']);
student.enrol('React');
student.listCourses();

interface Human{
    firstName: string
}