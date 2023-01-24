let signup = document.querySelector(".signup");
let login = document.querySelector(".signin");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".formBox");
let bodysection = document.querySelector("body");
let color = bodysection.querySelector(".box");

console.log("coucou")

signup.addEventListener("click", () => {
	slider.classList.add("moveSlider");
	formSection.classList.add("moveFormBox");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveSlider");
	formSection.classList.remove("moveFormBox");
});