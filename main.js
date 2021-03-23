
//============== GET HTML Element  ============//
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let workMinutes = document.getElementById('w_minutes');
let workSeconds = document.getElementById('w_seconds');

let breakMinutes = document.getElementById('b_minutes');
let breakSeconds = document.getElementById('b_seconds');

//========== variable StartTimer ================//
let startTimer;

//============= AUDIO ==============//
let debutAudio = new Audio('./assets/Audio/letsgo.mp3');
let finAudio = new Audio('./assets/Audio/end.mp3')
//===================== ADD EVENT LISTENER START BUTTON ===================//
start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
        document.getElementById("work").style = 'background-color: #4C8385; border-radius: 10px'
        document.getElementById("break").style = 'background-color: none;'
        debutAudio.play();
        
    } else {
        alert("Timer is already running!");
    }
})
//===================== ADD EVENT LISTENER RESET BUTTON ===================//
reset.addEventListener('click', function(){
    workMinutes.innerText = 25;
    workSeconds.innerText = "00";

    breakMinutes.innerText = 5;
    breakSeconds.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
})
//================== ADD EVENT LISTENER STOP"pause" BUTTON ================//
stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
    document.getElementById("break").style = 'background-color: #4C8385; border-radius: 10px'
    document.getElementById("work").style = 'background-color: none;'
})


//========================== START TIMER FUNCTION =========================//
function timer(){
    //============= compte a rebours Travail ============//
    if(workSeconds.innerText != 0){
        workSeconds.innerText--;
    } else if(workMinutes.innerText != 0 && workSeconds.innerText == 0){
        workSeconds.innerText = 59;
        workMinutes.innerText--;
    } 

    //============= compte a rebours pause ============//
    if(workMinutes.innerText == 0 && workSeconds.innerText == 0){
        finAudio.play();
        if(breakSeconds.innerText != 0){
            breakSeconds.innerText--;
        } else if(breakMinutes.innerText != 0 && breakSeconds.innerText == 0){
            breakSeconds.innerText = 59;
            breakMinutes.innerText--;
        }
    }

    //===== Round +1 si compte à rebours travail = 00 ======//
    if(workMinutes.innerText == 0 && workSeconds.innerText == 0 && breakMinutes.innerText == 0 && breakSeconds.innerText == 0){
        workMinutes.innerText = 25;
        workSeconds.innerText = "00";

        breakMinutes.innerText = 5;
        breakSeconds.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}

//========Stop Timer Function============//
function stopInterval(){
    clearInterval(startTimer);
}