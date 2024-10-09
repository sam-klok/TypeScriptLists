const people = [
    { id: 1, name: "Serge Klokov", dob: new Date("1/31/1997"), isStudent: false },
    { id: 2, name: "Tristan Klokov", dob: new Date("12/3/2010"), isStudent: true },
    { id: 3, name: "McKayla Klokov", dob: new Date("7/24/2012"), isStudent: true }
];
let searchString = "Ser";
let isNameFound = people.some(p => p.name.indexOf(searchString) > -1);
console.log(`Search string ${searchString} found in array: ${isNameFound}`);
//# sourceMappingURL=listDemo.js.map