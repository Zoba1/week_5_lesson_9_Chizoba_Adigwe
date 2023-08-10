
// Write something
let DOB = 1992,
year = 2000,
name = 'chi',
location = 'awka'
const user = (DOB,year,name,location) =>{
let age = `${year - DOB}`
let message = `Hello name is ${name} from ${location}, your current age is ${age}`;
console.log(message);
return age
// console.log(age);
}
user(DOB,year,name,location)