// Navbar

const hamBurger=document.querySelector(".hamBurger");
    const nav=document.querySelector("nav");

      hamBurger.addEventListener("click",function() {
         nav.classList.toggle("open");
         hamBurger.classList.toggle("close")
      })

//Gallery

      const current = document.querySelector('#current');
      const imgs = document.querySelector('.imgs');
      const img = document.querySelectorAll('.imgs img');
      const opacity = 0.6;
      

      img[0].style.opacity = opacity; //for first image opacity
      
      imgs.addEventListener('click', imgClick);
      
      function imgClick(e) {
        // Reset the opacity
        img.forEach(img => (img.style.opacity = 1));
      
        // Change current image to src of clicked image
        current.src = e.target.src;
      
        // Add fade in class
        current.classList.add('fade-in');
      
        // Remove fade-in class after .5 seconds
        setTimeout(() => current.classList.remove('fade-in'), 250);
      
        // Change the opacity to opacity var
        e.target.style.opacity = opacity;
      }
      
      //loading
      setTimeout(function(){ document.body.classList.add("loaded"); }, 5000);
