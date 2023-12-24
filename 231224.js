/**
  2023.12.24
  K번째수
*/


function solution(array, commands) {
  var answer = [];
  
  commands.map((v)=>{
      
    answer.push(array.slice(v[0]-1,v[1])
      .sort(function(a, b)  {
        if(a > b) return 1;
        if(a === b) return 0;
        if(a < b) return -1;
        })[v[2]-1]);
  })
  
  return answer;
}
