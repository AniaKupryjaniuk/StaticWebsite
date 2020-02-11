fetch("https://kea-alt-del.dk/t5/api/productlist")
.then(function(response)
{
    return response.json()
})
.then(function (data) {
      showDdata(data)
      })
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


const parent = document.querySelector("main");
parent.appendChild(clone)
}
