// main for today 2081/11/5

// 1st question (2,10,12,18)
// let array = [2,10,12,18]
// const [a,b,c,...rest]=array;
// console.log(a);
// console.log(rest);  
// 
// 2 question  const company ={
    // name :"abac",
    // location:"new",
    // Number :[2,8,1,4,13,16,18]
// } 
// const [ a,b,c,...rest]=company;
// console.log (c(4));
// console.log(rest);
function StartClock(){
    let today =new Date ();
    let hours=today.getHours();
    let minutes=today.getMinutes();
  let seconds=today.getSeconds();
  seconds = checkTime(seconds);
    // console.log(hours % 12); 
    let timer =document.getElementById("timer");
    // console.log(timer);
    timer.innerText=`${hours}:${minutes}:${seconds}s `;
    setTimeout(StartClock,1000);
}
StartClock();
function checkTime(value){
    if (value<10){
        return `0${value}`;
    }
    return value ;
}

const age  =[12,18,19,20,21,14,16];
 const over18 =age.filter(myfunction);
function myfunction(value){
    return value >18;
}
 