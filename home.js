var count = 0;
function result(){
    count = count+1;
    var a = "Total Score :"+count;
    document.getElementById("total").innerHTML=a;
    document.getElementById("jerry").style.marginLeft=Math.random()*1000+"px";
    document.getElementById("jerry").style.marginTop=Math.random()*300+"px";
}
var sec = 60;
var max = 0;
function timer(){
    sec--;
    var min = Math.floor(sec/60);
    var rem = sec%60;
    if(rem<10) rem="0"+rem;
    document.getElementById("timer").innerHTML="Remaining Seconds: "+min+":"+rem;
    if(sec<= 0){
        if(max<count){
            max = count;
        }
        clearTimeout(timerID);
        alert("Time's Up!");
        location.reload();
    }
}
var timerID = setInterval(timer,1000);