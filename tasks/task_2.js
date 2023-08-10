let userBio = {
    occupation: 'software developer',
    height: 5.4,
    gender: 'female',
    nationality: 'Nigeria',
},
userBio2 = {
    occupation: 'software developer',
    height: 5.4,
    gender: 'female',
    nationality: 'Nigeria',
},
 userBio3 = {
    occupation: 'software developer',
    height: 5.4,
    gender: 'female',
    nationality: 'Nigeria',
}
// console.log(`chizoba's is a ${gender} and she is a ${occupation}`);
// function bio({gender, occupation}) {
//     const person1= bio(userBio)
// }
// console.log(person1);

function bio(obj) {
    let {gender, occupation}= obj
    console.log(`chizoba's is a ${gender} and she is a ${occupation}`);
}
bio(userBio)
bio(userBio2)
bio(userBio3)