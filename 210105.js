/**
  2021.01.05 
  완주하지 못한 선수
*/

function solution(participant, completion) {
    var answer = '';
    
    participant.sort();
    completion.sort();
    
    answer = participant.find((e,i)=>{
        return e != completion[i];
    });
        
    return answer;
}
