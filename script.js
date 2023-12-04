document.addEventListener('DOMContentLoaded', () => {
    window.alert('The following application demonstrates a form that users can enter an email to subscribe to a mailing list. Currently, there are no emails being sent out. \n\n To see the form\'s functionality, the mailing list is publically included in this project. It can be accessed by anyone. \n\n While you are free to enter your personal email, please understand that it does not change the way the application works, and that email will be collected and visible. I recommend visitors use a simple fake email. Thank you.')
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbyheDpU2ONgxryNmFxdywnV-QNNpBuyxUjyOgQ4vjIooHaGxCzNFuKrDCpA5VPHkOc8DQ/exec'
const form = document.forms['submit-to-google-sheet']
const span = document.querySelector('#response-msg');

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        console.log('Success!', response);
        span.innerHTML = 'Thank you for subscribing!';
        setTimeout(() => {
            span.innerHTML = '';
        }, 5000)
        form.reset();
    })
    .catch(error => {
        console.error('Error!', error.message)
        span.innerHTML = 'An error has occured. Please try again later.'
    });
});
