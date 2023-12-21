var hitrn=0;
function bubblemaker(){
    var clutter="";



    for(var i=1; i<=168;i++){
        var rn=Math.floor(Math.random()*10)
       clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML=clutter;
}
var timer=60;
function RunTimer(){
 var timerint=setInterval(function(){
    if(timer>0){
    timer--;
    document.querySelector("#timerval").textContent = timer;
}
else{
    clearInterval(timerint);
    document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER<H1>`;
    document.querySelector("#hitval").textContent=0;
}
}, 1000);
}
function gethit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;

}
var score=0;
function increasescore(){
    score += 10;
   document.querySelector("#scoreval").textContent=score;
}
document.querySelector("#pbtm")
.addEventListener("click",function(details){
 var clickednumber=Number(details.target.textContent);
 if(clickednumber===hitrn){
   increasescore();
   bubblemaker();
   gethit();
   gethit();
 }
});
 bubblemaker();
 RunTimer();
 gethit();