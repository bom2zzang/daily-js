/**
  2024.01.04
  같은 숫자는 싫어
*/

function solution(arr)
{
    var answer = [];

    for ( var i = 0; i< arr.length; i++){
        
        const prev = i > 0 ? arr[i-1] : '';
        if(prev !== arr[i]){
            answer.push(arr[i])
        }
    }
    return answer;
}
