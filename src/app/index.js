import "../../src/style/app.scss";
import "../../src/style/first.scss";
// import html1 from "../public/pages/1.html";
// import html2 from "../public/pages/2.html";
// import html3 from "../public/pages/3.html";
import users from "./users";
console.log(users);
// переадрессация на страницы логинизации и регистрации
document.getElementById("logIn-button").onclick = function () {
  window.location.href = "#login";
};

document.getElementById("signIn-button").onclick = function () {
  window.location.href = "#register";
};

// // регистрация - ВАНЯ
// let user = new Object();
// // убрала повторный let
// user = {
//   sizes: {
//     height: 170,
//     weight: 50,
//   },
// };
// alert(user.sizes.height); // 170

// let clone = Object.assign({}, user);

// alert(user.sizes === clone.sizes);
// user.sizes.weight++;
// alert(clone.sizes.weight); //50

// for (let size in sizes) {
//   alert(+size); // 170, 50
//   // закрыла тело функции
// }

// // объявила переменные, передаваемые в Date()
// let year = 1986;
// let month = 9;
// let day = 25;
// const birth = new Date(year, month, day);

// логинизация - Дима Олейник
// ===================== 1 ========================
// const tpToLogin = document.querySelector('button[data-onclick="6"]');
// const tpToRegister = document.querySelector('button[data-onclick="7"]');

// function TeleportLogin() {
//   window.location.href = "index.html";
// }
// tpToLogin.addEventListener("click", TeleportLogin);

// function TeleportRegister() {
//   window.location.href = "page3.html";
// }
// tpToRegister.addEventListener("click", TeleportRegister);
// ===================== 2 ========================
// import users from "./users.js";
// import habits from "./habits.js";

// console.log(users);
// console.log(habits);

// const login = document.querySelector("input[data-onclick='8']");
// const submit = document.querySelector('input[data-onclick="9"]');

// function onClick(event) {
//   event.preventDefault();
//   for (let user of users) {
//     if (login.value == user.pass) {
//       window.location.href = "page2.html"; // next page
//     } else {
//       window.location.href = "page3.html"; // registration page
//     }
//   }
// }
// submit.addEventListener("click", onClick);

// создание привычки - ФЕЛИКС
const buttonForHabit = document.querySelector("#habit-button-id");

// function addHabit() {
//     alert("Test")
// }

// buttonForHabit.addEventListener("click", addHabit);
buttonForHabit.addEventListener("click", addNewHabitSection);

// создание привычки - НИКИТА КОТ
const inputs = document.getElementById("habitForm").elements;
const inputByIndex = inputs[0];
const inputByName = inputs["name"];

function getInputByName(name) {
  return document.querySelector(`input[name=${name}]`);
}

const form = document.getElementById("habitForm");
const habit_title = document.querySelector("#habit_title");
const habit_desc = document.querySelector("#habit_desc");
const habit_not = document.querySelector("#habit_not");
const habit_remind = document.querySelector("#habit_remind");
const habit_submit = document.querySelector("#habit_submit");
const habit_area = document.querySelector(".habits_area");
// const habit_article = document.querySelector(".newHabit_modal");

class NewHabit {
  constructor(habit_title, habit_desc, habit_not, habit_remind, habit_submit) {
    this.title = habit_title;
    this.content = habit_desc;
    this.frequency = habit_not;
    this.reminder = habit_remind;
    this.submit = habit_submit;
  }
}

function getSubmit(event) {
  event.preventDefault();
  const habitTitle = habit_title.value.trim();
  const habitDesc = habit_desc.value.trim();
  const habitNot = habit_not.value.trim();
  const habitRemind = habit_remind.value.trim();
  const habitSubmit = habit_submit.value.trim();

  //   const obj = {};
  const newHabit = new NewHabit(
    habitTitle,
    habitDesc,
    habitNot,
    habitRemind,
    habitSubmit
  );

  console.log(newHabit);
  return newHabit;
}

const habitWrapper = document.querySelector(".habit_wrapper");

function addNewHabitSection(obj) {
  for (let i = 0; i < inputs.length; i++) {
    obj[inputs[i].name] = inputs[i].value;
  }

  const newHabitSection = document.createElement("div");
  const newHabitTitle = document.createElement("h2");
  const newHabitContent = document.createElement("p");

  newHabitSection.classList.add("habitSection");
  newHabitTitle.setAttribute("id", "habitTitle");
  newHabitContent.setAttribute("id", "habitContent");

  newHabitTitle.innerText = obj.title;
  newHabitContent.innerText = obj.content;

  newHabitSection.append(newHabitTitle, newHabitContent);
  habit_area.prepend(newHabitSection);
  console.log(habit_area);

  newHabitSection.style.backgroundColor = "#EAE7F2";
  newHabitSection.style.width = "200px";
  newHabitSection.style.height = "80px";
  newHabitSection.style.borderRadius = "20px";
  newHabitTitle.style.paddingLeft = "20px";
  newHabitTitle.style.paddingTop = "12px";
  newHabitTitle.style.marginBottom = "0px";
  newHabitContent.style.marginTop = "10px";
  newHabitContent.style.paddingLeft = "20px";
  return habit_area;
}

form.addEventListener("submit", getSubmit);

habit_submit.addEventListener("click", (newHabit) => {
  addNewHabitSection(newHabit);
});

const colors = [
  { label: "Красный", value: "#C0024A" },
  { label: "Зелёный", value: "#02C0B9" },
  { label: "Синий", value: "#390093" },
  { label: "Персиковый", value: "#FFDAB9" },
  { label: "Розовенький", value: "#F4C2C2" },
];

function makeSelect() {
  const select = document.getElementById("select-color");

  colors.forEach((c) => {
    let opt = document.createElement("option");
    opt.value = c.value;
    opt.innerHTML = c.label;
    select.appendChild(opt);
  });
}

function makeDiv(obj) {
  const pickedColor = document.getElementById("select-color").value;
  habitWrapper.style.backgroundColor = pickedColor;
  habitWrapper.style.color = "white";
}

makeSelect();

// уведомления о выработке привычки - ИЛЬЯ
//функция что показывает модальное окно с формой о уведомлениях
//Илья Дмитренко

// let notificationFormJs = function () {
//   function showCover() {
//     let coverDiv = document.createElement("div");
//     coverDiv.id = "cover-div";

//     document.body.style.overflowY = "hidden";

//     document.body.append(coverDiv);
//   }

//   function hideCover() {
//     document.getElementById("cover-div").remove();
//     document.body.style.overflowY = "";
//   }

//   let inputPeriod = document.getElementById("period");
//   let inputBegin = document.getElementById("begin");
//   let inputFinish = document.getElementById("finish");

//   const newNotification = {
//     conctructor(input1, input2, input3) {
//       this.input1 = input1;
//       this.input2 = input2;
//       this.input3 = input3;
//     },
//   };

//   function showPrompt() {
//     showCover();
//     let form = document.getElementById("prompt-form");
//     let container = document.getElementById("prompt-form-container");

//     function complete() {
//       hideCover();
//       container.style.display = "none";
//       event.preventDefault();
//     }

//     form.onsubmit = function (event) {
//       event.preventDefault();
//       let valuePeriod = inputPeriod.value;
//       let valueOt = inputBegin.value;
//       let valueDo = inputFinish.value;
//       if (valuePeriod === "" || valueOt === " " || valueDo == "") return false; // игнорируем отправку пустой формы
//       complete();
//       return false;
//       let notification = new newNotification(index1, index2, index3);
//     };

//     form.cancel.onclick = function () {
//       complete(null);
//     };

//     container.style.display = "block";
//     form.elements.text.focus();
//   }
//   showPrompt();
// };

// notificationFormJs();

//Функция что создает уведомления

//  let notificationAboutHabitsJs = function () {

//  }
//  notificationAboutHabitsJs();
