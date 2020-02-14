const modal = document.querySelector(".modal-background");
modal.addEventListener("click", () => {
    modal.classList.add("hide");
});

fetch("https://kea-alt-del.dk/t5/api/categories")
    .then(res => res.json())
    .then(createCategories)


function createCategories(data) {
    console.log(data)
    data.forEach(function (oneCat) {
        //create links
        const a = document.createElement("a");
        a.setAttribute("href", `#${oneCat}`);
        document.querySelector(".catnav").appendChild(a);
        a.textContent = oneCat;


        //create sections
        const section = document.createElement("section");
        section.id = oneCat;
        const h2 = document.createElement("h2");
        h2.textContent = oneCat;
        section.appendChild(h2);
        document.querySelector("main").appendChild(section);
    })
    getProducts();
}

function getProducts() {
    fetch("https://kea-alt-del.dk/t5/api/productlist")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            showDdata(data)
        })
}

function showDdata(jsonData) {
    console.log(jsonData)
    jsonData.forEach(oneDish)
}


function oneDish(dish) {


    const template = document.querySelector("#allDishes").content;
    const clone = template.cloneNode(true);

    console.log(dish)

    clone.querySelector(".pic").src = "medium/" + dish.image + "-md.jpg";
    clone.querySelector("h3").textContent = dish.name;
    clone.querySelector(".shortdescription").textContent = dish.shortdescription;
    clone.querySelector(".longdescription").textContent = dish.longdescription;
//    clone.querySelector(".soldout").style.display = "inline";
//    clone.querySelector(".soldout").textContent = dish.soldout;
    if (dish.soldout) {
        clone.querySelector(".soldout").style.display = "inline"; }
     if (dish.vegetarian) {
        clone.querySelector(".vegetarian").style.display = "inline"; }



    if (dish.discount) {
        clone.querySelector(".price-discount span").textContent = dish.price;
        const new_price = Math.round(dish.price - dish.price * dish.discount / 100);
        clone.querySelector(".price-full span").textContent = new_price;

    } else {
        clone.querySelector(".price-discount").remove();
        clone.querySelector(".price-full span").textContent = dish.price
    }
        if (dish.alcohol) {
        clone.querySelector(".alcohol").style.display = "inline";
    }


    clone.querySelector("button").addEventListener("click", () => {
        console.log("click", dish)
        fetch(`https://kea-alt-del.dk/t5/api/product?id=${dish.id}`)
            .then(res => res.json())
            .then(showDetails);
    });

    console.log(`#${dish.category}`)
    document.querySelector(`#${dish.category}`).appendChild(clone)

    function showDetails(data) {
        modal.querySelector(".modal-name").textContent = data.name;
        modal.querySelector(".modal-description").textContent = data.longdescription;
        modal.querySelector(".modal-price").textContent = data.price + " dkk";
        modal.querySelector(".modal-pic").src = "medium/" + data.image + "-md.jpg";
        //...
        modal.classList.remove("hide");
    }

}
