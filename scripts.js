const btnOne = document.querySelector("#btn-1")
const food = document.getElementById("food")
const form = document.querySelector("form")
const product = document.querySelector("ul")

btnOne.addEventListener("click", (event) => {
    event.preventDefault()
    addProduct()
})


food.addEventListener("input", () => {
    const hasCharactersRegex = /\d+/g
    food.value = food.value.replace(hasCharactersRegex, "")
})


function addProduct () {

    const newProduct = document.createElement("li")
    const productName = document.createElement("span")
    const check = document.createElement("input")
    check.type = "checkbox"
    
    productName.textContent = food.value;
    newProduct.classList.add("product")
    newProduct.appendChild(check);
    newProduct.append(productName)
    product.append(newProduct)
    
    food.value = "";
}   



