/*** ===== minha forma de fazer ===== ****/
let count = 0;

const value = document.getElementById('value');
const decrease = document.querySelector('.decrease');
const increase = document.querySelector('.increase');
const reset = document.querySelector('.reset');

decrease.addEventListener('click', function () {
  count -= 1;
  value.textContent = count;
  if (count < 0 && count !== 0) {
    value.style.color = 'red';
  } else if (count === 0) {
    value.style.color = 'black';
  }
});

increase.addEventListener('click', function () {
  count += 1;
  value.textContent = count;
  if (count > 0) {
    value.style.color = 'green';
  } else if (count === 0) {
    value.style.color = 'black';
  }
});

reset.addEventListener('click', function () {
  count = 0;
  value.textContent = count;
  if (count === 0) {
    value.style.color = 'black';
  }
});

/*** ===== forma video ===== ****/
