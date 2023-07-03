'use strict';

///////////////////////////////////////
// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const openModal = function (e) {
  // e.priventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//LERN MORE SECTION CODE
btnScrollTo.addEventListener('click', e => {
  const S1cords = section1.getBoundingClientRect();
  console.log(S1cords);
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  //scrollong
  // window.scrollTo({
  //   left: S1cords.left + window.pageXOffset,
  //   top: S1cords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

//EVENT DELEGATION
//smooth scroll
//pageNavigation
// document.querySelectorAll('.nav__link').forEach(function (e) {
//   e.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//do using event delegation
//1.need to mark the common parent or add event to the common parent
//2.determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);

  //Matching strategey
  if (e.target.classList.contains('nav__links')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//TABBED COMPNENTS
tabsContainer.addEventListener('click', function (e) {
  // console.log(e.currentTarget);
  // console.log(e.target);
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  //GUard clause
  if (!clicked) return;
  //remove Active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate content area
  clicked.classList.add('operations__tab--active');
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

///Event propagation
// const randomIntGen = function (min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
// const randomColor = () => {
//   return `rgb(${randomIntGen(0, 255)},${randomIntGen(0, 255)},${randomIntGen(
//     0,
//     255
//   )})`;
// };

// const rgb = randomColor();
// console.log(rgb);

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(e.target);
//   //stop Proppagation
//   // e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.color = randomColor();
//   console.log(e.target);
//   console.log(e.currentTarget === this);
// });
// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('nav');
//     console.log(e.target);
//     console.log(e.currentTarget);
//   },
//   true
// );
//dOM TRAVERSING
// const h1 = document.querySelector('h1');

// // going downward child
// console.log(h1.querySelectorAll('.highlight'));

// console.log(h1.childNodes);
// console.log(h1.children); //direct child
// h1.firstElementChild.style.color = 'red';
// h1.lastElementChild.style.color = 'orangered';

// //going upwards : parent
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('h1').style.background = 'var(--color-primary)';

// //going side ways: siblings
// //we can now acces the direct sibling
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(e => {
//   if (e !== h1) {
//     e.style.transform = 'scale(0.5)';
//   }
// });
