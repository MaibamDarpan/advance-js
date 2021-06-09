const nums = [1,2,3,4,5,6,7,8,9];
const part = nums.slice(1, 8);

const remove = nums.splice(2,4,344, 'Sundori');


// console.log(part);
// console.log(remove);
const together = nums.join(' ');
console.log(remove);
console.log(together);
console.log(nums);