const navSlide = () => {
   const burger = document.querySelector('.burger');
   const nav = document.querySelector('.menu');
   const navLinks = document.querySelectorAll('.menu li');
   const clicks = document.querySelector('.nav-link')

   burger.addEventListener('click', () =>{
       //Toggle Nav

       nav.classList.toggle('menu-active');


       

       nav.addEventListener('click', ()=>{
        nav.classList.remove('menu-active');
        burger.classList.remove('toggle');
        navLinks.forEach((link,index) =>{
            link.style.animation = ''
        });

    });

       //Animate Links
       
       navLinks.forEach((link,index) => {
           if (link.style.animation) {
               link.style.animation = '';
           } else {
               link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`; 
           }

    });
       //Burger Animation
       burger.classList.toggle('toggle');
       


    //Close Nav on click.

   });       


}


navSlide();        

