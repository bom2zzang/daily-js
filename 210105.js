/**
  2021.01.05 (01)
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



/**
  (02)
  위장 
  :종류별 수는 구했지만 여기서 어떻게 계산해야 하는지 모르겠다. 
   더 고민해보기.
  
*/
function solution(clothes) {
    var answer = 0;
    var obj = new Object();
    
    var sortItems = clothes.map((item)=>{
        
        var gb = item[1];
        
        if(obj[gb]!=null){
            obj[gb] = obj[gb] + 1;
        }else{
            obj[gb] = 1;
        }
       
        
    });
    
    console.log(obj);  
    return answer;
}
