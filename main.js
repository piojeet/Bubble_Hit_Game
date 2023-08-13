// var culttor = "";

// function bubblebox() {


//     for (var i = 0; i <= 132; i++) {
//         var rn = Math.floor(Math.random() * 10)
//         culttor += `<div class="bubble">${rn}</div>`
//     }

//     document.querySelector(".bottom").innerHTML = culttor;
// }




// var setTimer = 60;
// function setval() {
//     var setval = setInterval(function () {
//         if (setTimer > 0) {
//             setTimer--;
//             document.querySelector("#timeercnt").textContent = setTimer;
//         } else {
//             clearInterval(setval)
//         }

//     },1000)
// }


// var hitval = 0;
// function hitnewval(){
//     var hitval = Math.floor(Math.random()*10)
//     document.querySelector("#hitman").textContent = hitval;
// }


// var scoreval = 0;
// function score(){

//      scoreval += 10;
//     document.querySelector("#score").textContent = scoreval;
// }

// document.querySelector(".bottom").addEventListener("click", function(dets){
//     var clickednum = Number(dets.target.textContent);
//     if(clickednum === hitval){
//         score();
//         bubblebox();
//         setval();
//     }
// })






// hitnewval();
// bubblebox();
// setval();










var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 133; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector(".bottom").innerHTML = clutter;
}


function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector(".bottom").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

document.querySelector(".bottom").addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    if (clickednum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }

});


runTimer();
makeBubble();
getNewHit();
