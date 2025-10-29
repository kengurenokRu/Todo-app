import {getStorage, setStorage, removeStorage} from './modules/storageControl.js'
import {renderApp} from './modules/render.js'
import {formControl, taskControl} from './modules/control.js'

{

const init = (selectorApp) => {
const app = document.querySelector(selectorApp);
app.classList = 'app-container vh-100 w-100 d-flex align-items-center justify-content-center flex-column';
//const key = prompt('Введите ваше имя');
const key = 'Анастасия-to-do';
const data = getStorage(key);
const {form, tbody, table} = renderApp(app, data);
formControl(form, tbody, key);
taskControl (table, key);
}

window.todo = init;
};