//const car = {
//    make: "Citroen",
//    model: "Berlingo",
//    price: 40000,
//    lenght: 2
//
//};
//const template = document.querySelector("#carTemplate").content;
//const clone = template.cloneNode(true);
//
//clone.querySelector("h1").textContent = `${car.make} - ${car.model}`;
//clone.querySelector(".price span").textContent = car.price;
//clone.querySelector(".lengh span").textContent = car.lenght;
//document.querySelector("#cars").appendChild(clone);

const animalsForAdoption = [
    {
        species: "dog",
        age: 13
    },
    {
        species: "cat",
        age: 3
    }
    ];

animalsForAdoption.forEach(sayHi)

function sayHi(adoptMe){
    console.log("Hi " + adoptMe.species)
}
