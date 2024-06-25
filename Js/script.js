const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('animeLeft-on')
    } else {
      entry.target.classList.remove('animeLeft-on')
    }
  })
});

const animeLeft = document.querySelectorAll('.animeLeft');

animeLeft.forEach((element) => {
  myObserver.observe(element);
});