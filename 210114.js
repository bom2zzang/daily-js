/**
    다리를 지나는 트럭
    testcase통과
    채점 통과!

*/

function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let length = truck_weights.length;
    let bridge_truck = [];
    
    while(true){
        
        
       if(length==0){
            const cnt = bridge_truck.findIndex((item)=>{
                return item>0;
            });                
            answer += bridge_length-cnt;
            break; 
           
       }else{        

            answer +=1;
            if(bridge_truck.length == 0){
                bridge_truck.push(truck_weights[truck_weights.length-length]);   
                length -= 1;
            }else{
                
                const sum_weight = bridge_truck.slice(0,bridge_length-1).reduce((sum,item)=>{
                        return sum + item; 
                },0);

                if(sum_weight+truck_weights[truck_weights.length-length] > weight){
                    bridge_truck.unshift(0);
                    bridge_truck = bridge_truck.slice(0,bridge_length);
                }else{
                    bridge_truck.unshift(truck_weights[truck_weights.length-length]);
                    bridge_truck = bridge_truck.slice(0,bridge_length);
                    length -= 1;
                }            
            }
        }
         
    }
    return answer;
}
