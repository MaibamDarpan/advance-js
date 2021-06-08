const numbers = [3, 4, 6 , 7, 9, 13];
function square(element){
    return element * element;
}
// numbers.map(function(element, index, array){
//     console.log(element, index, array);
// })
// const result = numbers.map(square);
// console.log(result);

// const result = numbers.map(element => element * element);
// console.log(result);

const result = numbers.map( x => x * x);
console.log(result);

const bigger = numbers.filter(x => x > 6);
console.log(bigger);

const isThere = numbers.find(x => x < 7);
console.log(isThere);