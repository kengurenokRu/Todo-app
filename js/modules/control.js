import { renderNewTask } from './render.js'
import { getStorage, setStorage, removeStorage, editStorage } from './storageControl.js'
import { installClass } from './createElements.js'

export const formControl = (form, tbody, key) => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newTask = Object.fromEntries(formData);
        newTask.execution = 'В процессе';
        newTask.id = Math.random().toString().substring(2, 10);
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
            const сonfirmation = confirm("Вы уверены, что хотите удалить эту задачу?");
            if (сonfirmation) {
                let id;
                if (e.target.closest('.taskRow') !== null) {
                    id = e.target.closest('.taskRow').children[4].textContent;
                    e.target.closest('.taskRow').remove();
                }
                else {
                    id = e.target.closest('.table-success').children[4].textContent;
                    e.target.closest('.table-success').remove();

                }
                removeStorage(key, id);
                Array.from(table.tbody.children).forEach((el, index) => {
                    el.children[0].textContent = index + 1;
                });
            }
        } else
            if (e.target.closest('.btn-success')) {
                e.target.closest('.btn-success').disabled = true;
                const id = e.target.closest('.taskRow').children[4].textContent;
                e.target.closest('.taskRow').children[2].textContent = 'Выполнена';
                installClass(e.target.closest('.taskRow').children[1], 'text-decoration-line-through');
                installClass(e.target.closest('.taskRow'), 'table-success');
                editStorage(key, id);
            }
    });


}