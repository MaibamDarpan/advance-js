const nums = [1,3,4,5,-6,7,-7,8,-8,9,-23,1];
// for (let i = 0; i< nums.length; i++) {
//         if (nums[i]> 7) {
//             break
//         }
//         console.log(nums[i]);
//     }

for (let i = 0; i< nums.length; i++) {
    if (nums[i] < 0) {
        continue
    }
    console.log(nums[i]);
}