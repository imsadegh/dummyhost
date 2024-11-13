// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
// alert("hello!");

// function multiply(num1, num2) {
//   let result = num1 * num2;
//   return result;
// }
// multiply(4, 7);

// document.querySelector("h2").addEventListener("click", () => {
//   alert("Ouch! Stop poking me!");
// });

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (
    mySrc === "images/gold-ornate-frame-green-background_639785-130530.jpg.avif"
  ) {
    myImage.setAttribute(
      "src",
      "images/gold-ornate-frame-green-background_639785-130915.jpg"
    );
  } else {
    myImage.setAttribute(
      "src",
      "images/gold-ornate-frame-green-background_639785-130530.jpg.avif"
    );
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `سلام . ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `سلام . ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
