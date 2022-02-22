const container = document.createElement("div")
container.classList.add("container")

const image = document.createElement("img")
image.classList.add("img")
const button = document.createElement("button")
button.innerText = "click"

document.body.appendChild(container)
container.appendChild(image)
container.appendChild(button)

const img = document.querySelector(".img")

button.addEventListener("click", () => {
    console.log("working!")
    fetch("https://api.giphy.com/v1/gifs/translate?api_key=IDGzSuuAs0D94d7tjUw9ymDha8gXyjIX&s=cats",
        { mode: 'cors' })
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        img.src = response.data.images.original.url;
    });
})