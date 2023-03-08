import { generateMarkers } from "./markers.js";

const clock = document.querySelector(".clock");
const outerFaceElement = clock.querySelector(".outer-face");
const secondsHand = clock.querySelector(".second");
const minutesHand = clock.querySelector(".minute");
const hoursHand = clock.querySelector(".hour");

const markers = generateMarkers();
outerFaceElement.append(markers);

window.requestAnimationFrame(main);

let lastSecond = 0;
let isInit = false;

function main(timestamp) {
  window.requestAnimationFrame(main);

  if (lastSecond === 0 && !isInit) {
    tick();
    isInit = true;
  }

  const timeInSecond = timestamp / 1000;
  if (timeInSecond - lastSecond < 1) {
    return;
  }
  lastSecond = timeInSecond;

  tick();
}

function tick() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360;
  secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

  const minutes = now.getMinutes();
  // minutes degrees + passed seconds degrees in the minute,
  // one minute's degree is: 360 / 60 = 6
  const minutesDegree = (minutes / 60) * 360 + (seconds / 60) * 6;
  minutesHand.style.transform = `rotate(${minutesDegree}deg)`;

  const hours = now.getHours();
  // hours degrees + passed minutes degrees in the hour,
  // one hour's degree is: 360 / 12 = 30
  const hoursDegree = (hours / 12) * 360 + (minutes / 60) * 30;
  hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
}
