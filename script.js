const button = document.querySelector("#menu-button");

const menu = document.querySelector("#menu-list");


button.addEventListener("click", function () {

    menu.classList.toggle("show");

});