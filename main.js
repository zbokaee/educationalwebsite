   setTimeout(function(){ document.body.classList.add("loaded"); }, 5000);
   
   const container = document.querySelector(".container");
   document.querySelector(".open-navbar-icon").addEventListener("click", () => {
    container.classList.add("change");
  });

  document.querySelector(".close-navbar-icon").addEventListener("click", () => {
    container.classList.remove("change");
  });
  




   var searchbar = document.querySelector("#search-bar");
   function slide(){
       if(searchbar.classList.contains("hide")){
       searchbar.classList.remove("hide");
       }else{
        searchbar.classList.add("hide");
       }
   }

   let i = 0;
   function read(){
       if (!i){
           document.getElementById("more").style.display = "inline";
           document.getElementById("dots").style.display = "none";
           document.getElementById("read-more").innerHTML = "Read Less";
           i = 1;
       } 
       else{
        document.getElementById("more").style.display = "none";
        document.getElementById("dots").style.display = "inline";
        document.getElementById("read-more").innerHTML = "Read More";
        i = 0;
       }
   }

   let mybtn1 = document.getElementById("read-more");
   mybtn1.addEventListener("click", () => mybtn1.style.backgroundColor="#000")
   mybtn1.removeEventListener("click", () => mybtn1.style.backgroundColor="#fff")

   function changeColor(){
    mybtn1.style.backgroundColor="#ccc"
    var opacity = parseFloat(window.getComputedStyle(mybtn1).getPropertyValue("opacity"))
    mybtn1.style.opacity = (opacity + .001)
   }
function removecolor(){
       mybtn1.style.backgroundColor = "#fff";
       mybtn1.style.color = "rgb(0, 173, 212)";

   }

   mybtn1.addEventListener("mousemove",changeColor)
   mybtn1.addEventListener("click",removecolor)
  
   Array.from(document.querySelectorAll(".navigation-button")).forEach((item) => {
      item.onclick = () =>{
         item.parentElement.parentElement.classList.toggle("change")
      };
    });


    const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

    let j = 0;
    
    Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
      item.style.cssText = `background-color: ${colors[j++]}`;
    });
    
    var backTop = document.getElementById("backtop")

    window.onscroll = function () {
        var offset = document.getElementById("offset")

        var backTop = document.getElementById("backtop")
        backTop.style.display = (window.pageYOffset > 300) ? "block" : "none"

        
}    

    backTop.onclick = function () {
        window.scrollBy(0, -1 * window.pageYOffset)
    }

