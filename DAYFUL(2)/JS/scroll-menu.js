/* Scroll-Menu */
let scrollState=0;
const ScrollMenu=document.getElementById("scroll-menu")
document.addEventListener('scroll',(e)=>{
    // console.log('scrollY',window.scrollY)
    if(window.scrollY>=200){
        ScrollMenu.classList.add('sfixed')
    }
    if(window.scrollY<200){
        ScrollMenu.classList.remove('sfixed')
    }
})