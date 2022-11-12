let linkIcon = document.querySelector('.header .links .icon');
let menus = document.querySelector('.header .links ul');
linkIcon.addEventListener("click",()=>{

    
     if(menus.style.display =="none" || menus.style.display ==""){
         menus.style.display="block"
     }
     else{
        menus.style.display="none"
     }

})