const container = document.querySelector('.container');
const btn = document.querySelectorAll('button');
console.log(btn);
btn.forEach(btn => {
  return btn.addEventListener('click', e => console.log(e.target));
});

container.addEventListener('click', e => console.log(e.target));
