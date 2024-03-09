
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minuts = document.getElementById("minuts");
const seconds = document.getElementById("seconds");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`March 25 2024 ${currentYear + 1} 00:00:00`);

// update countdown time

function updateCountDown(){
	const currentTime = new Date();

	const diff = newYearTime - currentTime;

	const d = Math.floor(diff / 1000 / 60 / 60 / 24);
	const h = Math.floor(diff / 1000 / 60 / 60) % 24;
	const m = Math.floor(diff / 1000 / 60) % 60;
	const s = Math.floor(diff /1000) %60;

	days.innerHTML = d;
	hours.innerHTML = h < 10 ? '0' + h : h;
	minuts.innerHTML = m < 10 ? '0' + m : m;
	seconds.innerHTML = s < 10 ? '0' + s : s;

}

setInterval(updateCountDown,1000);

