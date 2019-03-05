document.addEventListener('DOMContentLoaded', () => {
  // Take the image
  const imageHero = document.querySelector('.hero');

  // Initialize the variables

  let i = 0;
  let time = 0;

  // Array images background
  const images = ['arriba2.jpg', 'arriba.jpg'];

  setInterval(() => {
    imageHero.style.backgroundPositionY = '-'+time+'px';

    if(time > 40) {
      time = 0;
      imageHero.style.backgroundImage = "url(img/"+images[i]+")";

      if(i === images.length - 1) {
        i = 0;
      } else {
        i++;
      }
      console.log(i);
    }
    time ++;
  }, 100)

  setTimeout

  // Buttom float footer
  const btnFloat = document.querySelector('.btn-float');
  btnFloat.addEventListener('click', () => {
    event.preventDefault();
    
    // We prevent the default but execute the following code
    const footer = document.querySelector('#footer');

    if(footer.classList.contains('active')) {
      footer.classList.remove('active');
      btnFloat.classList.remove('active');
      btnFloat.innerHTML = 'Terms, Privacy, Currency & More'
    } else {
      footer.classList.add('active');
      btnFloat.classList.add('active')
      btnFloat.innerHTML = 'X Close'
    };
  });
});