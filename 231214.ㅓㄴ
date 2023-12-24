/**
  2023.12.14
  전화번호 목록
*/

// 효율성 실패
function solution(phone_book) {
    var answer = true;
    
    for(const no of phone_book) {
         for(const no2 of phone_book) {
             if(no !== no2 && no.startsWith(no2)){
                 return false;
             }   
        }   
    }
        return answer;
}

// get 
function solution(phone_book) {
    const prefixMap = {};

    // 해시맵에 각 전화번호의 접두어를 키로 추가
    for (const no of phone_book) {
        for (let i = 1; i <= no.length; i++) {
            const prefix = no.slice(0, i);
            if (prefixMap[prefix]) {
                return false; // 접두어가 이미 존재하면 false 반환
            }
        }
        prefixMap[no] = true;
    }
    return true; // 모든 번호가 접두어로 등장하지 않으면 true 반환
}

// 개선
function solution(phone_book) {
  const prefixMap = {};
    for (const no of phone_book){
      prefixMap[no] = true;
    }

  for (const no of phone_book) {
    for (let i = 1; i < no.length; i++) {
      const prefix = no.slice(0, i);
      if (prefixMap[prefix] ) {
        return false;
      }
    }
  }
  return true;
}
