let landPage = document.querySelector(".landing");
let landPageP = document.querySelector(".pragraghHead");

//change background for landing page by click in arrow------------------------------------
let arrowRight = document.querySelector(".arrowRight");
let arrowLeft = document.querySelector(".arrowLeft");
let numberOfPage = 1;
let arrayOfImg = [
  "./imags/1.jpg",
  "./imags/2.jpg",
  "./imags/3.jpg",
  "./imags/4.jpg",
  "./imags/5.jpg",
];
arrowRight.addEventListener("click", () => {
  if (numberOfPage === 5) {
    numberOfPage = 1;
    landPage.style.cssText = `background-image: url(../imags/${numberOfPage}.jpg);`;
  } else {
    numberOfPage++;
    landPage.style.cssText = `background-image: url(../imags/${numberOfPage}.jpg);`;
  }
});
arrowLeft.addEventListener("click", () => {
  if (numberOfPage === 1) {
    numberOfPage = 5;
    landPage.style.cssText = `background-image: url(../imags/${numberOfPage}.jpg);`;
  } else {
    numberOfPage--;
    landPage.style.cssText = `background-image: url(../imags/${numberOfPage}.jpg);`;
  }
});
//---------------------------------------------------------------------------------------

// display the list in mobile view-------------------------------------------------------
let listOfIcon = document.querySelector(".headerRes .list");
let IconsInMob = document.querySelector(".headerRes ul");
let numOfClick = 1;
listOfIcon.addEventListener("click", () => {
  numOfClick++;
  if (numOfClick % 2 === 1) {
  } else {
    IconsInMob.classList.toggle("ul");
    landPageP.classList.toggle("remove");
    numOfClick = 1;
  }
});
//---------------------------------------------------------------------------------------

//adjust Settings------------------------------------------------------------------------
let BtnSetting = document.querySelector(".contSetting i");
let NavSetting = document.querySelector(".navSetting");
BtnSetting.addEventListener("click", () => {
  NavSetting.classList.toggle("content");
  BtnSetting.classList.toggle("trans");
});
// document.body.addEventListener('click',()=>{
//     NavSetting.classList.toggle("content");
//     BtnSetting.classList.toggle("trans");
// })
//----------
let color = document.querySelectorAll(".colors div");
color[1].addEventListener("click", () => {
  document.body.style.cssText = "--main-color: rgb(46, 160, 145);";
});
color[2].addEventListener("click", () => {
  document.body.style.cssText = "--main-color: rgb(13, 175, 13);";
});
color[3].addEventListener("click", () => {
  document.body.style.cssText = "--main-color: rgb(134, 69, 69);";
});
color[4].addEventListener("click", () => {
  document.body.style.cssText = "--main-color: rgb(60, 84, 173);";
});
color[5].addEventListener("click", () => {
  document.body.style.cssText = "--main-color: rgb(128, 25, 114);";
});
//-------------
let changeBtn = document.querySelectorAll(".btnSetting,.btnSettingR");
let w;

changeBtn[1].addEventListener("click", () => {
  w = setInterval(() => {
    let randomNum = Math.floor(Math.random() * arrayOfImg.length);
    landPage.style.cssText = `background-image: url(${arrayOfImg[randomNum]});`;
  }, 3500);
});
changeBtn[2].addEventListener("click", () => {
  clearInterval(w);
});
changeBtn[3].addEventListener("click", () => {
  document.body.classList.add("darkMood");
});
changeBtn[4].addEventListener("click", () => {
  document.body.classList.remove("darkMood");
});
changeBtn[5].addEventListener("click", () => {
  document.body.classList.remove("darkMood");
  document.body.style.cssText = "--main-color: rgb(19, 201, 201);";
  clearInterval(w);
});
function change() {}
changeBtn[0].addEventListener("click", () => {
  let x = Math.floor(Math.random() * 255);
  let y = Math.floor(Math.random() * 255);
  let z = Math.floor(Math.random() * 255);
  document.body.style.cssText = `--main-color: rgb(${x},${y},${z})`;
}); //End adjust Settings------------------------------------------------------------------------
//Start Conatant Us------------------------------------------------------------------------
let inputs = document.querySelectorAll(".formContant input");
// inputs[0].onblur=()=>{
//     inputs[1].focus();
// }
// inputs[1].onblur=()=>{
//     inputs[2].focus();
// }
// inputs[2].onblur=()=>{
//     inputs[3].focus();
// }
//---------------------
let btnSend = document.querySelector(".button");
myObj = {
  username: "",
  phoneNum: 0,
  email: "",
  subject: "",
};
btnSend.onclick = () => {
  inputs[0].value = myObj.username;
  console.log(myObj.username);
  console.log(inputs[1].value);
  console.log(inputs[2].value);
  console.log(inputs[3].value);
};
//End Conatant Us------------------------------------------------------------------------
//Start Our Skills ------------------------------------------------------------------------
let skills = document.querySelectorAll(".ourSkills ul li div div");
window.onscroll = () => {
  if (scrollY >= 500) {
    skills[0].style.cssText = "width: 80%;";
  }
  if (scrollY >= 580) {
    skills[1].style.cssText = "width: 70%;";
  }
  if (scrollY >= 660) {
    skills[2].style.cssText = "width: 70%;";
  }
  if (scrollY >= 740) {
    skills[3].style.cssText = "width: 50%;";
  }
  if (scrollY >= 820) {
    skills[4].style.cssText = "width: 60%;";
  }
  if (scrollY >= 900) {
    skills[5].style.cssText = "width: 40%;";
  }
};
//End Our Skills ------------------------------------------------------------------------
