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
    const buttRemove = document.createElement("button")
    const image = document.createElement("img")
    image.src = "assets/lixeira.svg"
    image.alt = "Remover"

       

    productName.textContent = food.value;
    newProduct.classList.add("product")
    newProduct.appendChild(check);
    newProduct.append(productName)
    product.append(newProduct)
    buttRemove.append(image)
    newProduct.append(buttRemove)
    
    food.value = "";

    buttRemove.addEventListener("click", (event)=> {
        event.preventDefault
        newProduct.remove()
    } )
}   
