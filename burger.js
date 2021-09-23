const burger = document.querySelector(".humburger-menu")
const menu = document.querySelector(".menu")

burger.addEventListener('click', () => {
    menu.classList.toggle("menu-active")
    burger.classList.toggle("humburger-menu-active")
})

document.body.onscroll = () => {
    console.log("YES")
    menu.classList.remove("menu-active")
    burger.classList.remove("humburger-menu-active")  
}