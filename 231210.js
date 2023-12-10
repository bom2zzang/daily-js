/**
  2023.12.10 (01)
  폰켓몬
*/

function solution(nums) {

    const n2 = nums.length/2;
    const set = new Set(nums);
    const arr = [...set].length;

    return arr > n2 ? n2 : arr;

} 
