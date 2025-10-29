import { renderNewTask } from './render.js'
import { getStorage, setStorage, removeStorage } from './storageControl.js'

export const formControl = (form, tbody, key) => {
console.log(form.elements);

    form.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newTask = Object.fromEntries(formData);
        console.log(e.target);
        newTask.execution = 'В процессе';
        console.log(newTask);
        setStorage(key, newTask);
        renderNewTask(newTask, tbody);
        form.reset();
    });

    form.addEventListener('reset', e => {
        form.elements.submit.disabled = true;
    });

    form.addEventListener('keyup', e => {
        console.log(e.target.value);
        if (e.target.value !== '') { 
            form.elements.submit.disabled = false; 
        }
        else { 
            form.elements.submit.disabled = true; 
        }
    });
};