interface Person {
    id: number;
    name: string;
    dob: Date;
    isStudent: boolean;
}

const people: Person[] = [
    {id:1,name:"Serge Klokov",dob:new Date("1/31/1997"),isStudent:false},
    {id:2,name:"Tristan Klokov",dob:new Date("12/3/2010"),isStudent:true},
    {id:3,name:"McKayla Klokov",dob:new Date("7/24/2012"),isStudent:true}
]

let searchString:string = "Serge";
let isNameFound:boolean = people.some(p=>p.name.indexOf(searchString)>-1);
console.log(`Search string ${searchString} found in array: ${isNameFound}`);

// let's create new array with names only
let newList:string[] = people.map(p=>p.name.substring(0,p.name.indexOf('Klokov')-1));

const joinedString: string = newList.join("; "); 
console.log(joinedString);

// .includes cause compile error:
//error TS2550: Property 'includes' does not exist on type 'string[]'. Do you need to change your target library? 
//Try changing the 'lib' compiler option to 'es2016' or later.ts(2550)
isNameFound = newList.includes(searchString);
console.log(`Search string ${searchString} found in array: ${isNameFound}`);
