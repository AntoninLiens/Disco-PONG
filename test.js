let signup = document.querySelector(".signup");
let login = document.querySelector(".signin");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".formBox");
let bodysection = document.querySelector("body");
let box = document.querySelector(".box");
let submitBtn = document.querySelector(".submitBtn");
let addBox = document.querySelector(".addBox");

signup.addEventListener("click", () => {
	slider.classList.add("moveSlider");
	formSection.classList.add("moveFormBox");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveSlider");
	formSection.classList.remove("moveFormBox");
});

submitBtn.addEventListener("click", () => {
	box.remove();
	
});

addBox.addEventListener("click", () => {

	let customElem = document.createElement("p");
	customElem.innerHTML = "coucou";
	bodysection.appendChild(customElem);
});
