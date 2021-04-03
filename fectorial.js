// ! 5! = 5*4*3*2*1

const fectorial=(n)=>{
    let answer = 1
    if (n === 2){
        answer = 2
    }
    for( let i = 2; i<= n; i++){
        answer = answer * i
    }
    return answer
}
console.log(fectorial(10))
