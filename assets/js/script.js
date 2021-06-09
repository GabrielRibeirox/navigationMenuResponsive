
  const buttonMenu = document.querySelector('.button-menu');
  let menu = document.querySelector('.container-menu')


  function menuActive(){
      


  }
  buttonMenu.addEventListener('click',function(event){ 
    if(menu.classList.contains("active")){
      menu.classList.remove('active');
      menu.classList.add('disable');
    }else{
      menu.classList.remove('disable');
      menu.classList.add('active');
    }
});

