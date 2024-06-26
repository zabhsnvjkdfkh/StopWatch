const display = document.getElementById("display");


let timer = null;
let startTime=0;
let elapsedTime=0;
let isrunning=false;
function start(){
    if(!isrunning){
        startTime=Date.now();
        timer = setInterval(update,10);
        isrunning=true;
    }

}
function stop() {
    if(isrunning){
        clearInterval(timer);
        elapsedTime =Date.now()-startTime;
        isrunning=false;
    }

}
function reset() {
    clearInterval(timer);
    startTime=0;
    elapsedTime=0;
    isrunning=false;
    display.textContent = "00:00:00:00";


}
function update() {
    const currenttime = Date.now();
    elapsedTime=currenttime - startTime;
    let hours = Math.floor(elapsedTime/(1000*60*60));
    let minutes = Math.floor(elapsedTime / (1000 * 60 )%60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000  / 10);
    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");
    display.textContent =`${hours}:${minutes}:${seconds}:${milliseconds}`;

}