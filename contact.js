// About
const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("")
text.textContent =""; /*Avoid duplicate */

for(let i=0; i<splitText.length; i++){
    text.innerHTML += "<span>"+ splitText[i] + "</span>";

}

let char = 0;
let timer = setInterval(onTick,50);
function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === splitText.length){
       complete();
       return;
    }
}

function complete(){
    clearInterval(timer)
    timer = null;
}

// navbar
const hamBurger=document.querySelector(".hamBurger");
const nav=document.querySelector("nav");

  hamBurger.addEventListener("click",function() {
     nav.classList.toggle("open");
     hamBurger.classList.toggle("close")
  })
