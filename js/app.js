const menu = document.getElementById("mobile-menu");
const menuLinks = document.querySelector('.navbar_menu');


menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
});

window.onload = function() {
    //const pageHeight = document.documentElement.offsetHeight;
    //document.body.style.minHeight = window.innerHeight + "px";
    //const documentHeight = document.documentElement.scrollHeight;
    const windowheight = document.body.scrollHeight;

    window.devicePixelRatio = 1;
    
    document.body.style.background = `linear-gradient(#141414 164px, #444, #141414 ${windowheight - 120}px)`;
    //responsiveIndex();
};

function background() {
    //const scrollAmount = window.scrollY || document.documentElement.scrollTop;
    const windowheight = document.body.scrollHeight;

    document.body.style.background = `linear-gradient(#141414 ${164/* + scrollAmount*/}px, #444, #141414 ${windowheight - 120/* + scrollAmount*/}px)`;
};

/*function responsiveIndex() {
    const indexbox = document.getElementById("content");
    indexbox.style.marginLeft = `${1920 * 0.2 - (402 - window.innerWidth * 0.2)}px`
};*/

window.addEventListener("resize", background);
//window.addEventListener("resize", responsiveIndex)*/