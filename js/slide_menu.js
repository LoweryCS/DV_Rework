const toggler = document.querySelector(".toggler");
var btn = document.querySelectorAll(".btn-slide");

toggler.addEventListener ('click', () => {
    if (toggler.checked)
    {           
        document.querySelector(".header").style.opacity = 1;     
        document.querySelector(".overlay-menu").style.opacity = 0.842;        
    }
    else 
    {   
        document.querySelector(".header").style.opacity = 0.87;    
        document.querySelector(".overlay-menu").style.opacity = 0; 
        
        for (var i = 0; i < btn.length; i++)
        {
            btn[i].style.transform = "translateX(-270px)";
            btn[i].classList.add('fade');
        }              
    }
})
