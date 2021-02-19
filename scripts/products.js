function showProducts(){
    const productsCtn = document.querySelector("#products-ctn");
    const productColumnOne = document.createElement("div");
    productColumnOne.className = "column";
    productColumnOne.id = "column-one"
    const productColumnTwo = document.createElement("div");
    productsCtn.appendChild(productColumnOne);
    productsCtn.appendChild(productColumnTwo);
    productColumnTwo.className = "column";
    productColumnTwo.id = "column-two"
    for (let i = 1; i < 11; i++){
        const productCtn = document.createElement("div");
        productCtn.className = "product-ctn";
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.id = `${i}`;
        productDiv.style.backgroundImage = "url(../images/products/bike_one.jpeg)";
        const productName = document.createElement("p");
        productName.textContent = `Bike ${i}`;
        productName.className = "product-name";
        const productPrice = document.createElement("p");
        productPrice.className = "product-price";
        productPrice.textContent = `$${Math.floor(Math.random(0.5, 1)*100)}.00`;
        i % 2 != 0 ? productColumnOne.appendChild(productCtn) : productColumnTwo.appendChild(productCtn);
        productCtn.appendChild(productDiv);
        productCtn.appendChild(productName);
        productCtn.appendChild(productPrice);
    }
}

showProducts();