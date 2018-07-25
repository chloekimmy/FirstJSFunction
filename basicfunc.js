
 // 1. Array를 생성 
let list = [];
//위와 동일: let list = new Array();

// 2. Array 안에 50개의 상품을 넣음
for( var i = 0; i < 50; i ++ ) {
    let name = '상품';
    list.push(name + i);
}
console.log(list);
// 3. 상품을 호출하는 함수 생성
const call = ()=>{
    console.log(list);
}
// 4. 함수를 호출해서 상품을 출력
call();

// 5. List 내장함수를 이용하여 리스트 목록 뿌리기
function callBackFunc(value){
    console.log(value);
}

list.forEach(callBackFunc);

list.forEach(function(l){
    console.log('NEw'+l)
})

