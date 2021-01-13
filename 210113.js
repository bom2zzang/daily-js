/**
    기능개발
*/


function solution(progresses, speeds) {
    let answer = [];

    let cnt = 1;
    let dayCnt = progresses.map((item,idx)=>{
        let cnt = 0;
        while(item<100){ 
            item = item + speeds[idx];
            cnt += 1;
        }

        return cnt;     
    },[]);


    cnt = 1;
    let num;
    for(var i = 0; i<dayCnt.length; i++){
        
        if(i==0){
            num = dayCnt[i];
        }

        if(num>=dayCnt[i+1]){
            cnt +=1;
        }else{
            answer.push(cnt);
            cnt = 1;
            num = dayCnt[i+1];
        }


    }

    return answer;
}
