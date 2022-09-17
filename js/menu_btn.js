/*var mens = document.querySelector(".mens-options");
var closem = document.querySelector(".men-close");

var womens = document.querySelector(".womens-options");
var closew = document.querySelector(".women-close");

var child = document.querySelector(".child-options");
var closec = document.querySelector(".child-close");

mens.addEventListener('click', ( ) => {    
    //document.querySelector(".men-cloth").style.visibility = "visible";
    document.querySelector(".men-cloth").style.transform = "translateX(540px)";

    setTimeout( () => {
        document.querySelector(".men-img").style.transform = "translateX(270px)";
    }, 50)    
})

closem.addEventListener('click', () => {
    document.querySelector(".men-cloth").style.transform = "translateX(-270px)";

    setTimeout( () => {
        document.querySelector(".men-img").style.transform = "translateX(-480px)";
    }, 50)
})

womens.addEventListener('click', ( ) => {    
    //document.querySelector(".men-cloth").style.visibility = "visible";
    document.querySelector(".women-cloth").style.transform = "translateX(540px)";
    document.querySelector(".women-cloth").classList.remove('fade');

    setTimeout( () => {
        document.querySelector(".women-img").style.transform = "translateX(270px)";
    }, 50)    
})

closew.addEventListener('click', () => {
    document.querySelector(".women-cloth").style.transform = "translateX(-270px)";
    document.querySelector(".women-cloth").classList.add('fade');

    setTimeout( () => {
        document.querySelector(".women-img").style.transform = "translateX(-480px)";
    }, 50)
})

child.addEventListener('click', ( ) => {    
    //document.querySelector(".men-cloth").style.visibility = "visible";
    document.querySelector(".child-cloth").style.transform = "translateX(540px)";

    setTimeout( () => {
        document.querySelector(".child-img").style.transform = "translateX(270px)";
    }, 50)    
})

closec.addEventListener('click', () => {
    document.querySelector(".child-cloth").style.transform = "translateX(-270px)";

    setTimeout( () => {
        document.querySelector(".child-img").style.transform = "translateX(-480px)";
    }, 50)
})*/

var mens = document.querySelector(".mens-options");
var womens = document.querySelector(".womens-options");
var child = document.querySelector(".child-options");
var closeBtns = document.querySelectorAll(".close_btn");

mens.addEventListener('click', ( ) => {    
    var slide = document.querySelector(".men-cloth");
    var img = document.querySelector(".men-img"); 
    
    openClose(slide, img);
})

womens.addEventListener('click', ( ) => {     
    var slide = document.querySelector(".women-cloth");
    var img = document.querySelector(".women-img"); 
    
    openClose(slide, img);    
})

child.addEventListener('click', ( ) => {      
    var slide = document.querySelector(".child-cloth");
    var img = document.querySelector(".child-img"); 
    
    openClose(slide, img);
})

function openClose(slide, img) {   
    var fade = document.querySelectorAll(".btn-slide")

    slide.style.transform = "translateX(540px)";
    for (var i = 0; i < fade.length; i++)
    {
        fade[i].classList.remove('fade');
    }
    
    setTimeout( () => {
        img.style.transform = "translateX(270px)";
    }, 50)       
    
    for (var i = 0; i < closeBtns.length; i++)
    {
        closeBtns[i].addEventListener('click', () => {
            slide.style.transform = "translateX(-270px)";
            for (var i = 0; i < fade.length; i++)
            {
                fade[i].classList.add('fade');
            }    
            setTimeout( () => {
                img.style.transform = "translateX(-480px)";
            }, 50)
        })
    }    
}