const menBtn= document.getElementById("menu-btn");
const navMenus = document.getElementById("navMenus");
const close = document.getElementById("close")




menBtn.addEventListener("click", ()=>{
    navMenus.classList.add("show")
})
close.addEventListener("clik", ()=>{
    navMenus.classList.remove("show")
})