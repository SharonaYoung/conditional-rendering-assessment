const navBtns = document.querySelector('#navBtns');
const homeBtn = document.querySelector('#homeBtn');
const home = document.querySelector('#home');
const aboutBtn = document.querySelector('#aboutBtn');
const about = document.querySelector('#about');
const jokeBtn = document.querySelector('#jokeBtn');
const joke = document.querySelector('#joke');

homeBtn.addEventListener('click', function(){
    home.classList.toggle('show');
    about.classList.remove('show');
    joke.classList.remove('show');
})

aboutBtn.addEventListener('click', function(){
  about.classList.toggle('show');
  home.classList.remove('show');
  joke.classList.remove('show');
})

jokeBtn.addEventListener('click', function(){
  joke.classList.toggle('show');
  about.classList.remove('show');
  home.classList.remove('show');
})

