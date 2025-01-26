import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delayInput = form.elements.delay.value;
  const stateInput = form.elements.state.value;

  const delay = Number(delayInput);

  if (isNaN(delay) || delay <= 0) {
    iziToast.error({
      title: 'Error',
      message: 'Введіть коректне число затримки!',
    });
    return;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateInput === 'fulfilled') {
        resolve(delay);
      } else if (stateInput === 'rejected') {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
});
