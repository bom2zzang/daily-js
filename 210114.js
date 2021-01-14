/**
    다리를 지나는 트럭
    testcase통과
    채점 탈락쓰 ㅠ

*/

function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let length = truck_weights.length;
    let bridge_truck = [];
    
    while(true){
        answer +=1;
               
        if(bridge_truck.length == 0){
            bridge_truck.push(truck_weights[truck_weights.length-length]);   
            length -= 1;
        }else{
            
            if(length==0){
                const cnt = bridge_truck.findIndex((item)=>{
                    return item>0;
                });                
                answer += bridge_length-cnt-1;
                break;
                
                
            }else if(bridge_truck[0]+truck_weights[truck_weights.length-length] > weight){
                bridge_truck.unshift(0);
                bridge_truck = bridge_truck.slice(0,bridge_length);
            }else{
                bridge_truck.unshift(truck_weights[truck_weights.length-length]);
                bridge_truck = bridge_truck.slice(0,bridge_length);
                length -= 1;
            }            
        }
         
    }
    return answer;
}
