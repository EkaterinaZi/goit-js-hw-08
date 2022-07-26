import trottle from 'lodash.throttle';

const form = document.querySelector('form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('submit', onSubmitedForm)
form.addEventListener('input', trottle(
e =>{
    formData[e.target.name] = e.target.value
    console.log(formData)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}), 500)

populateForm();


function onSubmitedForm (e){
    e.preventDefault();
    e.currentTarget.reset();
    console.log(localStorage.getItem(STORAGE_KEY));
    localStorage.removeItem(STORAGE_KEY);
    }

function populateForm(){
    const savedStorage = localStorage.getItem(STORAGE_KEY)
    
    if(savedStorage){
        const savedForm = JSON.parse(savedStorage);
        console.log(savedForm)
        form.elements.email.value = savedForm.email || "";
        form.elements.message.value = savedForm.message || "";  
}
    }


   

