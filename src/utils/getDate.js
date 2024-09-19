export function getDate(timestamp){
    let getTime=new Date(timestamp)
    let year = getTime.getFullYear();
    let month = getTime.getMonth() + 1;
    let date = getTime.getDate();
    let hours = getTime.getHours();
    let min = getTime.getMinutes();
    let second = getTime.getSeconds();
    hours = hours < 10 ? "0" + hours : hours;
    min = min < 10 ? "0" + min : min;
    second = second < 10 ? "0" + second : second;
   let  todayTime = year + "/" + month + "/" + date;
   let todayHours = hours + ":" + min + ":" + second;
    return todayTime+' '+todayHours
}

export function getDateTo(){
    let getTime=new Date()
    let year = getTime.getFullYear();
    let month = getTime.getMonth() + 1;
    let date = getTime.getDate();
    let hours = getTime.getHours();
    let min = getTime.getMinutes();
    let second = getTime.getSeconds();
    hours = hours < 10 ? "0" + hours : hours;
    min = min < 10 ? "0" + min : min;
    second = second < 10 ? "0" + second : second;
   let  todayTime = year + "-" + month + "-" + date;
   let todayHours = hours + ":" + min + ":" + second;
    return todayTime+' '+todayHours
}