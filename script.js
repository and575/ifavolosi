const form = document.querySelector('#rsvp-form');
const message = document.querySelector('#form-message');

form?.addEventListener('submit', () => {
  if (form.action.includes('YOUR_FORM_ID')) {
    message.textContent = 'Prima di pubblicare, sostituisci YOUR_FORM_ID con il tuo endpoint Formspree.';
    message.style.color = '#a93e29';
    event.preventDefault();
    return;
  }

  message.textContent = 'Invio in corso...';
});
