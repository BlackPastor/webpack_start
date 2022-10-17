import {
  convertCurrency,
  pairs,
  divideByThree,
  obj,
  taxes,
  studentArtem,
  generateBlocksInterval,
  audio,
  getKeySound,
  getRandomChinese
} from "./functions";
import "../styles/hw9.css";
import "../styles/hw10.css";
import Image from "../assets/bg.jpeg";

const img = document.createElement("img");
img.src = Image;

document.body.querySelector(".homework3").innerHTML = `Homework 3 <br> 
${convertCurrency("50$")}`;
document.body.querySelector(".homework4").innerHTML = `Homework 4 <br> 
${pairs.join(" & ")}`;
document.body.querySelector(".homework5").innerHTML = `Homework 5 <br> 
${divideByThree("Comm ande r")}`;
document.body.querySelector(".homework6").innerHTML = `Homework 6 <br> 
${JSON.stringify(obj)}`;
document.body.querySelector(".homework7").innerHTML = `Homework 7 <br> 
${taxes} y.e`;
document.body.querySelector(".homework8").innerHTML = `Homework 8 <br> 
${studentArtem}`;
document.body.querySelector(".homework9").innerHTML = `Homework 9 <br> 
${generateBlocksInterval()}`;
document.body.querySelector(".homework10").innerHTML = `Homework 10 <br> 
<div class="container2" style="background: url(${img.src})">
<div class="music-button" id="keyA">
    <div class="key">A</div>
    <div class="text">Key1</div>
</div>
<div class="music-button" id="keyS">
    <div class="key">S</div>
    <div class="text">Key2</div>
</div>
<div class="music-button" id="keyD">
    <div class="key">D</div>
    <div class="text">Key3</div>
</div>
<div class="music-button" id="keyF">
    <div class="key">F</div>
    <div class="text">Key4</div>
</div>
<div class="music-button" id="keyG">
    <div class="key">G</div>
    <div class="text">Key5</div>
</div>
<div class="music-button" id="keyH">
    <div class="key">H</div>
    <div class="text">Key6</div>
</div>
<div class="music-button" id="keyJ">
    <div class="key">J</div>
    <div class="text">Key7</div>
</div>
<div class="music-button" id="keyK">
    <div class="key">K</div>
    <div class="text">Key8</div>
</div>
</div>
</div>
${(audio, getKeySound())}`;
document.body.querySelector(".homework11").innerHTML = `Homework 11 <br>
${getRandomChinese()}`;
