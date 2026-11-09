const menBtn= document.getElementById("menu-btn");
const navMenus = document.getElementById("navMenus");
const close = document.getElementById("close")
const header = document.getElementById("header");
const body = document.body;
const loading = document.getElementById("loading");
const darkmode = document.getElementById("tun")



menBtn.addEventListener("click", ()=>{
    navMenus.classList.add("show")
})
close.addEventListener("click", ()=>{
    navMenus.classList.remove("show")
})