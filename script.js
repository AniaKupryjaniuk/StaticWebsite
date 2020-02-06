const template = document.querySelector("template").content;

console.log(template)

const aCopy = template.cloneNode(true);
console.log(aCopy)

aCopy.querySelector("h1").textContent = "Title";
aCopy.querySelector("p span").textContent = "description";
aCopy.querySelector("h2").textContent = "price";

const maintemplate = document.querySelector("main");
maintemplate.appendChild(aCopy)
