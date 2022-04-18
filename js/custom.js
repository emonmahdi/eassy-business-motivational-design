


const displayForm = () => {

  window.addEventListener('scroll', document.querySelector('#popup').style.display = 'block')
}
setTimeout(displayForm);

document.querySelector('#close').addEventListener('click', function() {
  document.querySelector('#popup').style.display = 'none'
})

function openform(){
  window.addEventListener('click', document.querySelector('#popup').style.display = 'block')
}


document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 80) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 