// 1. Javascript arrays
let names = ["Eden", "Andrew", "John"];
console.log(names);
console.log(names[1]);
console.log(names[3]); // undefined
console.log(names.length - 1);

let ages = [8, 6, 2];

let mixArray = ["string", 5];
console.log(mixArray);

// 2. Javascript objects
let studentName = "Bob";
let studentClass = "WDD131";
// literal objects
let student = {
    name : "Bob",
    class: "WDD131",
    grade : "A",
    age : 27
}
console.log(student);
console.log(student.class);

// 3. Array methods
names.forEach((name) => { // anonymous function (has no name)
    console.log(name);
})

// map function returns a NEW array with values returned from function
let newNameArray = names.map((name) => {
    return name + " Long";
})
console.log(newNameArray);

// Filter function returns a new array with filtered values
let filteredArray = names.filter((name) => {
    // filter returns boolean. True keep, false don't keep
    return name[0] === "A";
})
console.log(filteredArray);

let filteredArray2 = names.filter((name) => {
    // filter returns boolean. True keep, false don't keep
    return name.includes('e');
})
console.log(filteredArray2);

// ADD reduce, index of, template literal, etc

function myFunc(total, num) {
    return total - num;
}

const numbers = [300, 25, 15];
console.log(numbers.reduce(myFunc));

const aList = ["My", "Favorite", "Foods"];
let myIndex = aList.indexOf("My");
console.log(myIndex);

const book = {title:"stormlight", rating:"5/5"};

const bookRating = `
    <div class="book-rating">
        <h2>${book.title}</h2>
        <p>${book.rating}</p>
    </div>
`;


