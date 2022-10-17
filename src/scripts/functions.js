// hw3
export function convertCurrency(value) {
  let result;
  value = value.toUpperCase();

  if (value.includes("UAH")) {
    result = (+value.slice(0, value.indexOf("UAH")) / 35).toFixed(2) + "$";
  } else if (value.includes("$")) {
    result = +value.slice(0, value.indexOf("$")) * 35 + "UAH";
  } else {
    return "Введіть суму в $ або в UAH";
  }
  return result;
}

// hw4
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
function getPairs(students) {
  const pairs = [],
    girls = [],
    boys = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].slice(-1) === "а") {
      girls.push(students[i]);
    } else {
      boys.push(students[i]);
    }
  }

  for (let i = 0; i < boys.length; i++) {
    pairs.push([boys[i], girls[i]]);
  }
  return pairs;
}
export const pairs = getPairs(students);

// hw5

export function divideByThree(word) {
  let result = [];
  let arr = word.toLowerCase().replaceAll(" ", "");

  if (arr.length > 3) {
    for (let i = 0; i < arr.length; i += 3) {
      result.push(arr.slice(i, i + 3));
    }
    return result;
  }
  return arr;
}
export default divideByThree;

// hw6

function calculateWordLetters([...string]) {
  let obj = {};
  string.forEach((letter) => {
    obj[letter] = (obj[letter] || 0) + 1;
  });
  return obj;
}
export let obj = calculateWordLetters("test");

// hw7

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

function getMyTaxes(number) {
  return (number * this.tax).toFixed(0);
}

export let taxes = getMyTaxes.call(ukraine, 1500);

// hw8

class Student {
  constructor(fullName, university, course, marks) {
    this.fullName = fullName;
    this.university = university;
    this.course = course;
    this.marks = marks;
    this.isDismissed = false;
  }
  getInfo() {
    return `${this.fullName} - студент ${this.course} курсу в університеті ${this.university}.`;
  }
}
const student = new Student(
  "Артем Лоїк",
  "ПНТУ ім.Кондратюка",
  "3",
  [5, 4, 4, 5]
);
export const studentArtem = student.getInfo();

// hw9

export function generateBlocksInterval() {
  const containerAdvanced = document.createElement("div");
  document.body.append(containerAdvanced);
  containerAdvanced.classList.add("container");
  for (let i = 0; i < 25; i++) {
    const box = document.createElement("div");
    box.className = "box";
    containerAdvanced.appendChild(box);
    box.style.background = "#" + Math.random().toString(16).slice(-6);
    setInterval(() => {
      box.style.background = "#" + Math.random().toString(16).slice(-6);
    }, 1000);
  }
}

// hw10
import sound1 from "../audio/key1.mp3"
import sound2 from "../audio/key2.mp3"
import sound3 from "../audio/key3.mp3"
import sound4 from "../audio/key4.mp3"
import sound5 from "../audio/key5.mp3"
import sound6 from "../audio/key6.mp3"
import sound7 from "../audio/key7.mp3"
import sound8 from "../audio/key8.mp3"

export const audio = new Audio();

export function getKeySound(keyCode) {
  if (keyCode === "KeyA") {
    return sound1;
  }
  if (keyCode === "KeyS") {
    return sound2;
  }
  if (keyCode === "KeyD") {
    return sound3;
  }
  if (keyCode === "KeyF") {
    return sound4;
  }
  if (keyCode === "KeyG") {
    return sound5;
  }
  if (keyCode === "KeyH") {
    return sound6;
  }
  if (keyCode === "KeyJ") {
    return sound7;
  }
  if (keyCode === "KeyK") {
    return sound8;
  }
}

export function play(keyCode) {
  let src = getKeySound(keyCode);
  if (src) {
    audio.src = src;
    audio.play();
  }
}

export function removeActive() {
  document
    .querySelectorAll(".music-button")
    .forEach((button) => button.classList.remove("active"));
}
export const keyDown = document.body.addEventListener("keydown", function (e) {
  removeActive();
  let keyActive = document.querySelector("#key" + e.code.slice(-1));
  if (keyActive) {
    keyActive.classList.add("active");
    play("Key" + e.code.slice(-1));
  }
});
export const btnClick = document
  .querySelectorAll(".music-button")
  .forEach((button) => {
    button.onclick = () => {
      removeActive();
      console.log(button);
      button.classList.add("active");
      play("Key" + button.id.slice(-1));
    };
  });

// hw11

export async function getRandomChinese(length) {
  let result = "";
  while (length) {
    let string = new Promise((res) => {
      setTimeout(() => {
        res(String.fromCharCode(Date.now().toString().slice(-5)));
      }, 50);
    });
    result += await string;
    length--;
  }
  return result;
}

getRandomChinese(4).then(res => {
  console.log(res);
});

