const scrollBtn = document.querySelector( '.scroll-btn');

  window.addEventListtener( 'scroll' ,()=> {
    if(document.body.scrolltop > 800 // doccument.doccumentElement.scrollTop >800)
    { scrollBtn.style.display = 'block';
}

  else{
    scrollBtn.style.display = 'none' ;
  }

  })