// Utils Functions
const selectElement = (element) => {
  return document.querySelector(element)
}

const insertText = (element, textToInsert) => {
  const text = document.createTextNode(textToInsert)
  element.appendChild(text)
}

// CSS Variables
const success = getComputedStyle(document.documentElement)
    .getPropertyValue("--success")
const gray = getComputedStyle(document.documentElement)
    .getPropertyValue("--gray")

// Header
const jumbotron = selectElement(".jumbotron");
const jumbotronBtn = jumbotron.querySelector(".btn-primary")
jumbotron.style.textAlign = "right"
jumbotron.style.backgroundColor = gray
jumbotron.style.color = "white"
jumbotronBtn.style.backgroundColor = success
jumbotronBtn.style.borderColor = success

// Lista
const lista = selectElement(".list-group")

const primeiroElemento = selectElement(".list-group-item.active")
primeiroElemento.classList.remove("active")

const quartoElemento = document.createElement("li")
quartoElemento.classList.add("list-group-item", "active")
insertText(quartoElemento, "Quarto item")

const quintoElemento = document.createElement("li")
quintoElemento.classList.add("list-group-item")
insertText(quintoElemento, "Quinto item")

lista.appendChild(quartoElemento)
lista.appendChild(quintoElemento)

// Menu
const menu = selectElement(".btn-group-vertical")
const menuBtn = menu.querySelectorAll(".btn-secondary")

menu.style.flexDirection = "row"
menu.style.alignItems = "center"
menu.style.gap = "5px"

menuBtn.forEach(btn => {
  btn.style.borderRadius = "0.25rem"
  btn.style.whiteSpace = "nowrap"
})

// Cards
const cards = document.querySelectorAll(".col-lg-3")
const newOrder = [1, 3, 2, 0]

const animaisCard = cards[0]
const animaisCardBtn = animaisCard.querySelector(".btn-primary")
animaisCardBtn.style.backgroundColor = success
animaisCardBtn.style.borderColor = success

cards.forEach((card, index) => {
  card.style.order = newOrder[index]
})
