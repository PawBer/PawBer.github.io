"use strict";

let globalMinutes = 0;

function minutesToHours(totalMinutes) {
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;

    return {
        "hours": hours,
        "minutes": minutes,
    }
}

function addTime() {
    let hours = document.getElementById("hour").value;
    if (document.getElementById("hour").value === '') {
        hours = 0;
    }
    document.getElementById("hour").value = '';
    let minutes = document.getElementById("minute").value;
    if (document.getElementById("minute").value === '') {
        minutes = 0;
    }
    document.getElementById("minute").value = '';
    globalMinutes += parseInt(hours * 60 + parseInt(minutes));
    updateResults();
}

function subtractTime() {
    let hours = document.getElementById("hour").value;
    if (document.getElementById("hour").value === '') {
        hours = 0;
    }
    document.getElementById("hour").value = '';
    let minutes = document.getElementById("minute").value;
    if (document.getElementById("minute").value === '') {
        minutes = 0;
    }
    document.getElementById("minute").value = '';
    globalMinutes -= parseInt(hours * 60 + parseInt(minutes));
    updateResults();
}

function clearTime() {
    document.getElementById("hour").value = '';
    document.getElementById("minute").value = '';
    globalMinutes = parseInt(0);
    updateResults();
}

function updateResults() {
    let result = document.getElementById("result");
    let time = minutesToHours(globalMinutes);
    result.innerText = `${time.hours}:${time.minutes}`
}

function wylicz() {
    let hours = document.getElementById("hourdyzury").value;
    if (document.getElementById("hourdyzury").value === '') {
        hours = 0;
    }
    document.getElementById("hourdyzury").value = '';
    let minutes = document.getElementById("minutedyzury").value;
    if (document.getElementById("minutedyzury").value === '') {
        minutes = 0;
    }
    document.getElementById("minutedyzury").value = '';
    let dyzury = document.getElementById("dyzury").value;
    if (document.getElementById("dyzury").value === '') {
        dyzury = 0;
    }
    document.getElementById("dyzury").value = '';
    let totalMinutes = parseInt(hours * 60 + parseInt(minutes));
    let complete = Math.floor(totalMinutes / (60 * parseInt(dyzury)));
    console.log(complete);
    totalMinutes -= (60 * complete * dyzury);
    let restHours = Math.floor(totalMinutes / 60);
    let restMinutes = totalMinutes % 60;
    document.getElementById("dyzor").innerHTML = `${complete} dyżurów ${restHours} godzin ${restMinutes} minut`;
}