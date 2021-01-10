/**
    
    위장
    
    종류별 옷+1 을 구해서 모두 곱한 후 -1  

*/

function solution(clothes) {
    var answer = 1;
    var obj = new Object();
    
    clothes.map((item)=>{
        
        var gb = item[1];
                
        if(obj[gb]!=null){
            obj[gb] = obj[gb] + 1;
        }else{
            obj[gb] = 2;
        }
       
    });
    
    
    //console.log(obj);
    for (let o in obj) { 
        answer = answer * obj[o];
    }
    
    answer = answer - 1;


    return answer;
}




/**
    
    기능개발

*/
function solution(progresses, speeds) {
    //var answer = [];
    
    const answer = progresses.map((item,idx)=>{
        let cnt = 0;
        while(item<100){
            
            item = item + speeds[idx];
            cnt = cnt + 1;
        }
        
        return cnt;     
        
    },[]).reduce((a,b,c,d)=>{        
        

        
    },[]);
    
    
    
    return answer;
}
