
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Funkcja zapisuje stan formularza w localStorage
const saveStateToLocalStorage = throttle(() => {
  const currentState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
}, 500); // Throttle na 500ms

// Funkcja wypełnia  formularz danymi z localStorage
function fillFormFromLocalStorage() {
  const storedState = localStorage.getItem('feedback-form-state');
  if (storedState !== null) {
    const parsedState = JSON.parse(storedState);
    emailInput.value = parsedState.email;
    messageInput.value = parsedState.message;
  } else {
    emailInput.value = '';
    messageInput.value = '';
  }
}

//  wypełnia formularz przy przeładowaniu strony
window.addEventListener('load', fillFormFromLocalStorage);

// Śledzenie zdarzenia input i zapisywanie stanu w localStorage
form.addEventListener('input', saveStateToLocalStorage);

// Obsługa zdarzenia submit - wysłanie formularza
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Form submitted!');

  // Wyczyść localStorage 
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';

  // Wyloguj obecny stan danych z konsoli
  const currentState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log('Current form state:', currentState);
});