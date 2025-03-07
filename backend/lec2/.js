const students = {
    name: 'John',
    age: 25,
    isGraduated: false,
    subjects: ['Math', 'English', 'Science'],
    address: {
        street: '123 Main St',
        city: 'New York',
        country: 'USA'
    },
    getAge: function () {
        return this.age;
    },
    getName: function () { return this.name }
}

console.log(students.name); // John
console.log(students.age); // 25
console.log(students.isGraduated); // false
console.log(students.subjects); // ['Math', 'English', 'Science']
console.log(students.address); // { street: '123 Main St', city: 'New York', country: 'USA' }
console.log(students.address.street); // 123 Main St
console.log(students.address.city); // New York
console.log(students.address.country); // USA
console.log(students.getAge()); // 25
console.log(students.getName()); // undefined
const { name, age, isGraduated, subjects, address, getAge, getName } = students;
console.log(name); // John