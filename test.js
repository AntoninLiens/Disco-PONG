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

let menu = document.querySelector(".menu");
let chat = document.querySelector(".chat");

let menuBtn = document.getElementById("menuBtn");
let chatBtn = document.getElementById("chatBtn");

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

menuBtn.addEventListener("click", () => {
	if (menuBtn.innerHTML === "menu") {
		menu.style.left = 0;
		menuBtn.innerHTML = "close";
	}
	else {
		menuBtn.innerHTML = "menu";
		menu.style.left = "-60px";
	}
});

chatBtn.addEventListener("click", () => {
	if (chatBtn.innerHTML === "chat") {
		chat.style.right = 0;
		chatBtn.innerHTML = "close";
	}
	else {
		chatBtn.innerHTML = "chat";
		chat.style.right = "-100%";
	}
});