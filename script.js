const navButton = document.querySelector("#hamburger");
const navLinks = document.querySelectorAll(".nawigacja");

navButton.addEventListener("click", () => {
  navLinks.forEach(navLink => {
    navLink.classList.toggle("show");
  });
});

const sunIconButton = document.querySelector("#sunBtn");
const moonIconButton = document.querySelector("#moonBtn");
const headerBackground = document.querySelector("header");
const projectsBackground = document.querySelector("#projects");
const newsBackground = document.querySelector("#news");
const winterPageBtn = document.querySelector("#winterPageBtn");
const winterPage = document.querySelector("#winterPageId");
const closeWinterPage = document.querySelector("#closeBtnX");


sunIconButton.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
  sunIconButton.style.display = "none";
  moonIconButton.style.display = "block";
  headerBackground.style.backgroundColor = "black";
  headerBackground.style.border = "2.5px solid orangered";
  projectsBackground.style.backgroundColor = "black";
  projectsBackground.style.border = "2.5px solid orangered";
  newsBackground.style.backgroundColor = "black";
  newsBackground.style.border = "2.5px solid orangered";
});

if(moonIconButton.addEventListener("click", () =>  {
  document.body.style.backgroundColor = "black";
  moonIconButton.style.display = "none";
  sunIconButton.style.display = "block";
}));


let textArray = ["1", "2", "3"];

const nextPageBtn = document.querySelector("#pageBtnNext");
const backPageBtn = document.querySelector("#pageBtnBack");

let mainPage = document.querySelector("#page");
mainPage.innerHTML = textArray[0];

nextPageBtn.addEventListener("click", () => {
  if (mainPage.innerHTML === textArray[0]) {
    backPageBtn.style.display = "block";
    mainPage.innerHTML = textArray[1];
  } else if (mainPage.innerHTML === textArray[1]) {
    mainPage.innerHTML = textArray[2];
  }
});

backPageBtn.addEventListener("click", () => {
  if (mainPage.innerHTML === textArray[2]) {
    mainPage.innerHTML = textArray[1];
  } else if (mainPage.innerHTML === textArray[1]) {
    mainPage.innerHTML = textArray[0];
    backPageBtn.style.display = "none"; 
  }
});

if(winterPageBtn.addEventListener("click", () => {
  winterPage.style.display = "block";
  winterPageBtn.style.display = "none";
  closeWinterPage.style.display = "block";
})); 

if (closeWinterPage.addEventListener("click", () => {
  closeWinterPage.style.display = "none";
  winterPage.style.display = "none";
  winterPageBtn.style.display = "block";
}));












