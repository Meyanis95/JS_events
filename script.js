//Question 1
let element_footer = document.querySelector("footer")
let count = 0
element_footer.addEventListener("click", function() {count++, console.log(`clic numéro ${count}`)})

//Question 2
let element_burger_menu = document.getElementById("navbarHeader");
let navbar_toggler = document.querySelector("button.navbar-toggler");
navbar_toggler.addEventListener("click", function() {element_burger_menu.classList.toggle("collapse");})

//Question 3 
let first_card = document.getElementsByClassName("col-md-4")[0]
let first_edit_button = first_card.getElementsByClassName("btn btn-sm btn-outline-secondary")[0]

first_edit_button.addEventListener("click", function() {first_card.style.color = "red"} )

//Question 4
let second_card = document.getElementsByClassName("col-md-4")[1]
let second_edit_button = second_card.getElementsByClassName("btn btn-sm btn-outline-secondary")[0]
second_edit_button.addEventListener("click", function() {if (second_card.style.color === "green") { second_card.style.color = "";} else {second_card.style.color = "green"}} )

//Question 5
let navbar = document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow")[0]
navbar.addEventListener("dblclick", function() {if (document.styleSheets[0].disabled === true) {document.styleSheets[0].disabled = false; } else {document.styleSheets[0].disabled = true};})

//Question 6 
let all_cards = document.getElementsByClassName("card mb-4 box-shadow")
Array.prototype.forEach.call(all_cards, card => {
  let view_buttons = card.getElementsByClassName("btn btn-sm btn-success")[0]
  let card_text = card.getElementsByClassName("card-text")[0]
  view_buttons.addEventListener("mouseover", function() {
    if (card_text.style.display === "none") { card_text.style.display = "" } 
    else {card_text.style.display = "none"}; 
    if (card.querySelector(".card-img-top").style.width === "20%") { card.querySelector(".card-img-top").style.width = "100%" } 
    else {card.querySelector(".card-img-top").style.width = "20%"};})
});

//Question 7 
let right_btn = document.getElementsByClassName("btn btn-secondary my-2")[0]
all = document.getElementsByClassName("row")[1]
right_btn.addEventListener("click", function() {all.insertBefore(all.lastElementChild,all.firstElementChild)})

//Question 8
let left_btn = document.getElementsByClassName("btn btn-primary my-2")[0]
left_btn.addEventListener("click", function(e) {e.preventDefault(); all.appendChild(all.firstElementChild)})