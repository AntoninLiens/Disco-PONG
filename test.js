let signup = document.querySelector(".signup");
let login = document.querySelector(".signin");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".formBox");
let box = document.querySelector(".box");
let loginBtn = document.querySelector(".loginBtn");
let registerBtn = document.querySelector(".registerBtn");
let addBox = document.querySelector(".addBox");
let body = document.querySelector("body");
let title = document.querySelector("title");

signup.addEventListener("click", () => {
	slider.classList.add("moveSlider");
	formSection.classList.add("moveFormBox");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveSlider");
	formSection.classList.remove("moveFormBox");
});

function setHomePage() {
	body.classList.remove(body.getAttribute("class"));
	body.classList.add("homePage");
	title.innerHTML = "Home page";

}

loginBtn.addEventListener("click", () => { setHomePage(); });
registerBtn.addEventListener("click", () => { setHomePage(); });