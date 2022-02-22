const container = document.createElement("div")
container.classList.add("container")

const image = document.createElement("img")
image.classList.add("img")
const button = document.createElement("button")
button.innerText = "click"

const input = document.createElement("input")
input.type = "text"
input.placeholder = "Search a gif"

const h4 = document.createElement("h4")

document.body.appendChild(container)
container.appendChild(input)
container.appendChild(button)
container.appendChild(h4)
container.appendChild(image)

button.addEventListener("click", () => {    
    const input = document.querySelector("input")
    const search = input.value 
    renderGif(search)
    document.querySelector("input").value = "";
})

const renderGif = (search) => {
    h4.style.display = "none"
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=IDGzSuuAs0D94d7tjUw9ymDha8gXyjIX&s=${search}`,
        { mode: "cors" })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            const img = document.querySelector(".img")
            img.src = response.data.images.original.url;
        }).catch(function (err) {
            const h4 = document.querySelector("h4")
            console.log("error detected")
            h4.innerText = "Try again?"
            h4.style.display = "flex"
            document.querySelector("input").focus()
        })
}