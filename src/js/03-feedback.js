const form = document.querySelector(`form`);
const input = document.querySelector(`input`);
const textarea = document.querySelector('textarea');
// const submitBtn = document.querySelector('button');

const throttle = require('lodash.throttle');

const dateType = () => {
    const type = { 
        email: input.value, 
        message: textarea.value };
    localStorage.setItem('feedback-form-state', JSON.stringify(type));
    };

form.addEventListener('input', throttle(dateType, 500));

 try {
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));
    input.value = data.email;
    textarea.value = data.message;
 }  catch (error) {
    console.log(error.name); 
    console.log(error.message);
 }

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log({ email: input.value, message: textarea.value });
    localStorage.removeItem('feedback-form-state');
    input.value = '';
    textarea.value = '';
    });