import { createCaption, createForm, createContainer, createTable, createRow } from './createElements.js'

export const renderNewTask = (task, tbody) => {
    const row = createRow('1', task,'table-light');
    tbody.append(row);
};

const renderTask = (tbody, data) => {    
    if (data !== null) {
        if (!Array.isArray(data)) {
            const row = createRow('1', data, 'table-light');
            tbody.append(row);
            return [row];
        }
        else {
            const allRow = data.map((el, index) => {                
                const classList = el.execution === 'Выполнена' ? 'table-success' : 'table-light';
                return createRow(index+1, el, classList);
            });            
            tbody.append(...allRow);
            return allRow;
        }
    }
    else return null;
}

export const renderApp = (app, data) => {
    const caption = createCaption('Todo App');
    const form = createForm('d-flex align-items-center mb-3');
    const tableWrapper = createContainer('table-wrapper');
    const { table, tbody } = createTable('table table-hover table-bordered');
    tableWrapper.append(table);
    renderTask(tbody, data);
    app.append(caption, form, tableWrapper);
    return {
        form,
        tbody,
    }
}