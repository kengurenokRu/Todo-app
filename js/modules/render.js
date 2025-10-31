import { createCaption, createTaskForm, createModalForm, createContainer, createTable, createRow } from './createElements.js'

const defClassListRow = (data) => {
    if (data.importance === 'срочная') return 'table-danger';
    else if (data.importance === 'важная') return 'table-warning';
    return 'table-light';

};

export const renderNewTask = (task, tbody) => {
    const index = tbody.children.length;
    const classListRow = defClassListRow(task);
    const row = createRow(index + 1, task, classListRow, false);
    tbody.append(row);
};



const renderTask = (tbody, data) => {
    if (data !== null) {
        let classListRow;
        if (!Array.isArray(data)) {
            classListRow = defClassListRow(data);
            const row = createRow('1', data, classListRow, false);
            tbody.append(row);
            return [row];
        }
        else {
            const allRow = data.map((el, index) => {
                let classListText;
                let disabled;
                if (el.execution === 'Выполнена') {
                    classListRow = 'table-success';
                    classListText = 'text-decoration-line-through';
                    disabled = true;
                }
                else {
                    classListRow = defClassListRow(el);
                    classListText = 'task';
                    disabled = false;
                }
                return createRow(index + 1, el, classListRow, classListText, disabled);
            });
            tbody.append(...allRow);
            return allRow;
        }
    }
    else return null;
}

export const renderApp = (app, data) => {
    const caption = createCaption('Todo App');
    const form = createTaskForm('d-flex align-items-center mb-3');
    const tableWrapper = createContainer('table-wrapper');
    const table = createTable('table table-hover table-bordered');
    tableWrapper.append(table);
    renderTask(table.tbody, data);
    app.append(caption, form, tableWrapper);
    return {
        form,
        tbody: table.tbody,
        table,
    }
}