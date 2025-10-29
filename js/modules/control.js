import { renderNewTask } from './render.js'
import { getStorage, setStorage, removeStorage, editStorage } from './storageControl.js'
import { installClass } from './createElements.js'

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
            let task;
            if (e.target.closest('.taskRow') !== null) {
                task = e.target.closest('.taskRow').children[1].textContent;
                e.target.closest('.taskRow').remove();
            }
            else { task = e.target.closest('.table-success').children[1].textContent; e.target.closest('.table-success').remove(); }

            removeStorage(key, task);
        } else
            if (e.target.closest('.btn-success')) {
                e.target.closest('.btn-success').enabled = true;
                const task = e.target.closest('.taskRow').children[1].textContent;
                e.target.closest('.taskRow').children[2].textContent = 'Завершено';
                installClass(e.target.closest('.taskRow').children[1], 'text-decoration-line-through');
                installClass(e.target.closest('.taskRow'), 'table-success');
                editStorage(key, task);
            }

    });


}