//toggles state in advantages block's description
let btnSmp = document.querySelector('.advantages__link--smp');
let btnTrs = document.querySelector('.advantages__link--trs');
let btnClb = document.querySelector('.advantages__link--clb');
let advHead = document.querySelector('.advantages__head');
let headBtnMobile = document.querySelector('.head__btn--mobile');
let headNavCatalog = document.querySelector('.head__nav--menu');
let links = document.querySelectorAll('a');

btnSmp.addEventListener ("click", function (evt) {
  evt.preventDefault();
  btnSmp.classList.add('advantages__link--active');
  btnTrs.classList.remove('advantages__link--active');
  btnClb.classList.remove('advantages__link--active');
  advHead.style.color = '#26a6d1';
})

btnTrs.addEventListener ("click", function (evt) {
  evt.preventDefault();
  btnTrs.classList.add('advantages__link--active');
  btnClb.classList.remove('advantages__link--active');
  btnSmp.classList.remove('advantages__link--active');
  advHead.style.color = '#add136';
})

btnClb.addEventListener ("click", function (evt) {
  evt.preventDefault();
  btnClb.classList.add('advantages__link--active');
  btnSmp.classList.remove('advantages__link--active');
  btnTrs.classList.remove('advantages__link--active');
  advHead.style.color = '#959595';
})

//adds open/close state for nav menu
headBtnMobile.addEventListener ('click', function (evt) {
  evt.preventDefault();
  headBtnMobile.classList.toggle('head__btn--close');
  headBtnMobile.classList.toggle('head__btn--open');
  headNavCatalog.classList.toggle('head__nav--catalog');
  headNavCatalog.classList.toggle('head__nav--close');
})

for (let link of links) {
  link.addEventListener ('click', function (evt) {
    evt.preventDefault();
  })
}
