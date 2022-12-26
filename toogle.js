const body = document.querySelector("body")
const nav = document.querySelector(".navbar")
const navbarbrand = document.querySelector('.navbar-brand');
 
const toggle = document.querySelector('.toggle')
// const toggle = document.querySelector('.toggle')
// const toggle = document.querySelector('.toggle')
// const toggle = document.querySelector('.toggle')
// const toggle = document.querySelector('.toggle')



toggle.addEventListener('click',()=>{
    body.classList.toggle('dark')
});
toggle.addEventListener('click',()=>{
    nav.classList.toggle('black')
    navbarbrand.classList.toggle('white')
    document.querySelector('.Home').classList.toggle('white')
    document.querySelector('.about').classList.toggle('white')
    document.querySelector('.contact').classList.toggle('white')
    document.querySelector('.MySkill').classList.toggle('white')
    document.querySelector('.Portfolio').classList.toggle('white')
    document.querySelector('.masthead').classList.toggle('white')
    document.querySelector('#about').classList.toggle('white')
    document.querySelector('.about1').classList.toggle('white')
    document.querySelector('.about2').classList.toggle('white')
    document.querySelector('.about3').classList.toggle('white')
});

toggle.addEventListener('click',()=>toggle.classList.toggle("active"))
console.log(body,toggle);

