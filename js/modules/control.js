import { renderNewTask } from './render.js'
import { getStorage, setStorage, removeStorage } from './storageControl.js'

export const formControl = (form, tbody, key) => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newTask = Object.fromEntries(formData);
        newTask.execution = 'В процессе';
        console.log(newTask);
        setStorage(key, newTask);
        renderNewTask(newTask, tbody);
        form.reset();
    });

    form.addEventListener('reset', e => {
        form.elements.submitBtn.disabled = true;
    });

    form.addEventListener('keyup', e => {
        if (e.target.value !== '') {
            form.elements.submitBtn.disabled = false;
        }
        else {
            form.elements.submitBtn.disabled = true;
        }
    });
};

export const taskControl = (table, key) => {
    table.addEventListener('click', e => {
        if (e.target.closest('.btn-danger')) {
            e.target.closest('.task').remove();
            const task = e.target.closest('.task').children[1].textContent;
            removeStorage(key, task);
        }
    });
}