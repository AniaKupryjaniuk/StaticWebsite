fetch("https://kea-alt-del.dk/t5/api/categories")
    .then(res=>res.json())
   .then(createCategories)


function createCategories(data) {
    console.log(data)
    data.forEach(function(oneCat){

        //create sections
        const section = document.createElement("section");
        section.id = oneCat;
        const h2 = document.createElement("h2");
        h2.textContent=oneCat;
        section.appendChild(h2);
        document.querySelector("main").appendChild(section);
    })
    getProducts();
}






function getProducts() {
fetch("https://kea-alt-del.dk/t5/api/productlist")
.then(function(response){
    return response.json()
})
.then(function (data) {
      showDdata(data)
      })
}
    function showDdata(jsonData){
        console.log(jsonData)
        jsonData.forEach(oneDish)
    }


function oneDish(dish){


const template = document.querySelector("#allDishes").content;
const clone = template.cloneNode(true);

console.log(dish)

clone.querySelector(".pic").src = "medium/" + dish.image + "-md.jpg";
clone.querySelector("h3").textContent = dish.name;
clone.querySelector(".price").textContent = dish.price;
clone.querySelector(".discountprice").textContent = dish.discount;
clone.querySelector(".shortdescription").textContent = dish.shortdescription;
clone.querySelector(".longdescription").textContent =dish.longdescription;
clone.querySelector(".soldout").textContent = dish.soldout;

console.log(`#${dish.category}`)
    document.querySelector(`#${dish.category}`).appendChild(clone)
//const parent = document.querySelector("main");
//parent.appendChild(clone)
}
