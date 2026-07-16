const links=document.querySelectorAll("nav a");

links.forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const id=this.getAttribute("href");

document.querySelector(id).scrollIntoView({

behavior:"smooth"

});

});

});

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="#020617";

}else{

header.style.background="#111827";

}

});