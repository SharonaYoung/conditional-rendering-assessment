const navBtns = document.querySelector('#navBtns');
const navBtn = document.querySelector('.navBtn');
const home = document.querySelector('#home');
const tog = document.querySelector('.tog');

navBtns.addEventListener('click', function(event){
  if(event.target.matches('a')){
    console.log('nav btn pushed');

    home.classList.add('show');
  }
})

tog.addEventListener('click', function(){
  home.classList.toggle('show');
})