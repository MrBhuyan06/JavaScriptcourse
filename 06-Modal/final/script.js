'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btncloseModal = document.querySelector('.close-modal');
const btnsOpenmodel = document.querySelectorAll('.show-modal');
console.log(btnsOpenmodel);

const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModel = function () {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};

// React to click on the btn(show-model)
for (let i = 0; i < btnsOpenmodel.length; i++) {
  // console.log(btnsOpenmodel[i].textContent``);
  btnsOpenmodel[i].addEventListener('click', openModel);
  // console.log(btnsOpenmodel.textContent);
  // console.log('click');
  //moving the Hidden class
  // console.log(modal.classList);
  // to remove multiple class just pass class name separated bty ,
  // overlay.classList.remove('hidden');
}

btncloseModal.addEventListener('click', closeModel);

overlay.addEventListener('click', closeModel);
