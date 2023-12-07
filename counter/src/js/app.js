/*** ===== minha forma de fazer ===== ****/
// let count = 0;

// const value = document.getElementById('value');
// const decrease = document.querySelector('.decrease');
// const increase = document.querySelector('.increase');
// const reset = document.querySelector('.reset');

// decrease.addEventListener('click', function () {
//   count -= 1;
//   value.textContent = count;
//   if (count < 0 && count !== 0) {
//     value.style.color = 'red';
//   } else if (count === 0) {
//     value.style.color = 'black';
//   }
// });

// increase.addEventListener('click', function () {
//   count += 1;
//   value.textContent = count;
//   if (count > 0) {
//     value.style.color = 'green';
//   } else if (count === 0) {
//     value.style.color = 'black';
//   }
// });

// reset.addEventListener('click', function () {
//   count = 0;
//   value.textContent = count;
//   if (count === 0) {
//     value.style.color = 'black';
//   }
// });

/*** ===== forma video ===== ****/
//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector("#value")
const btns = document.querySelectorAll('.btn')

btns.forEach(function(btn){
  btn.addEventListener('click', function(e) {
    const styles = e.currentTarget.classList
    if(styles.contains('decrease')){
      count--
    } else if(styles.contains('increase')){
      count++
    } else {
      count = 0
    }

    if(count > 0){
      value.style.color = 'green'
    }
    if(count < 0){
      value.style.color = 'red'
    }
    if(count === 0){
      value.style.color = '#222';
    }
    value.textContent = count
    
  })
})
