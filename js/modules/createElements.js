const createContainer = (classList) => {
    const div = document.createElement('div');
    div.className = classList;
    return div;
};

const createButton = (type, classList, text, disabled) => {
    const button = document.createElement('button');
    button.type = type;
    button.textContent = text;
    button.className = classList;
    button.disabled = disabled;
    return button;
};

const createInput = (type, placeholder, classList) => {
    const label = document.createElement('label');
    label.classList = classList;
    const input = document.createElement('input');
    input.type = type;
    input.name = 'task';
    input.placeholder = placeholder;
    input.classList.add('form-control');
    label.append(input);
    return label;
};

const createForm = (classList) => {
    const form = document.createElement('form');
    form.classList = classList;
    const btnSubmit = createButton('submit', 'btn btn-primary me-3', 'Сохранить', true);   
    btnSubmit.name = 'submitBtn';
    const btnReset = createButton('reset', 'btn btn-warning', 'Очистить', false);  
    btnReset.name = 'resetBtn';  
    const input = createInput('text', 'ввести задачу', 'form-group me-3 mb-0');    
    form.append(
        input,
        btnSubmit,
        btnReset
    );
    return form;
};

const createCaption = (text) => {
    const h3 = document.createElement('h3');
    h3.textContent = text;
    return h3;
};

const createTable = (classList) => {
    const table = document.createElement('table');
    table.classList = classList;

    const thead = document.createElement('thead');
    thead.insertAdjacentHTML('beforeend', `
<tr>
<th>№</th>
<th>Задача</th>
<th>Статус</th>
<th>Действия</th>
</tr>`);
    const tbody = document.createElement('tbody');
    table.append(thead, tbody);
    table.tbody = tbody;

    return table;
}

const installClass = (el, classList) => {
    el.classList = classList;
}

const createRow = (number, task, classListRow, classListText, disabled) => { 
    const row = document.createElement('tr');
    row.classList = classListRow;
    row.classList.add('taskRow');
    let td = document.createElement('td');
    td.textContent = number;
    row.append(td);
    td = document.createElement('td');
    td.textContent = task.task;
    td.classList = classListText;
    row.append(td);
    td = document.createElement('td');
    td.textContent = task.execution;
    row.append(td);
    td = document.createElement('td');
    td.append(createButton('button', 'btn btn-danger me-1', 'Удалить', false), createButton('button', 'btn btn-success', 'Завершить', disabled))
    row.append(td);    
    return row;
}

export {
    createCaption,
    createForm,
    createContainer,
    createTable,
    createRow,
    installClass
}



