const celeb = [
    {id: 12, naam: 'Salman'},
    {id: 13, naam: 'Shahrukh'},
    {id: 31, naam: 'Shakib'},
    {id: 33, naam: 'Mousumi'},
    {id: 42, naam: 'Bappa'},
];
// const nameList = [];
// for (let i = 0; i< celeb.length; i++) {
//   const element = celeb[i];
//   nameList.push(element.naam);
//     }

//     console.log(nameList);
const names = celeb.map( x => x.naam);
console.log(names);
const bigger = celeb.filter( x => x.id > 30);
console.log(bigger);
const findingOne = celeb.find( x => x.id < 30);
console.log(findingOne);