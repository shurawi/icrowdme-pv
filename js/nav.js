//shows up-btn
let upButton = document.querySelector('.head__ref');

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    upButton.classList.add('head__ref--show');
  } else {
    upButton.classList.remove('head__ref--show');
  }
};

upButton.addEventListener('click', function (e) {
  e.preventDefault ();

  let linkId = upButton.getAttribute('href');

  document.querySelector(linkId).scrollIntoView ({
    behavior: 'smooth',
    block: 'start'
  })
})
