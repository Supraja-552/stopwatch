let timerdisplay=document.querySelector(".timerdisplay");
let startBtn=document.getElementById("start-btn");
let stopBtn=document.getElementById("stop-btn");
let resetBtn=document.getElementById("reset-btn");
let msec= 0;
let secs= 0;
let mins= 0;
let timerId=null;
startBtn.addEventListener('click',function(event){
    if (timerId !==null){
        clearInterval(timerId);

    }
    timerId=setInterval(startTimer,10)
});
stopBtn.addEventListener('click',function(){
   
        clearInterval(timerId);
        
  
});
resetBtn.addEventListener('click',function(){
   
    clearInterval(timerId);
    timerdisplay.innerHTML='00 : 00 :00';
});
function  startTimer(){
    msec++;
    if(msec == 100){
        msec =0;
        secs++;
        if(secs ==60){
            secs=0;
            mins++;
            

        }
    }
let msecString=msec<10?`${msec}`:msec;
let secsString=secs<10?`${msec}`:secs;
let minsString=mins<10?`${msec}`:mins;
timerdisplay.innerHTML=`${minsString}:${secsString}:${msecString}`;

}