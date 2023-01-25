let body = document.querySelector("body");
let url = document.querySelector("#link2").href;
let begin = url.lastIndexOf('#');
let end = url.length - begin;
let currentClass = body.getAttribute("class");
url = url.substr(begin + 1, end);

body.classList.remove(currentClass);
body.classList.add(url);
console.log("coucou : " + url);