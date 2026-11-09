const menBtn= document.getElementById("menu-btn");
const navMenus = document.getElementById("navMenus");
const close = document.getElementById("close")
const header = document.getElementById("header");
const body = document.body;




menBtn.addEventListener("click", ()=>{
    navMenus.classList.add("show")
})
close.addEventListener("click", ()=>{
    navMenus.classList.remove("show")
})