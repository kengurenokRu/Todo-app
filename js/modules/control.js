import { renderNewTask } from './render.js'
import {getStorage, setStorage, removeStorage} from './storageControl.js'

export const formControl = (form, tbody, key) => {
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
};