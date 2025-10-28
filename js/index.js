import {getStorage, setStorage, removeStorage} from './modules/storageControl.js'

console.log(getStorage);
console.log(setStorage);
console.log(removeStorage);

{

const init = (selectorApp) => {
const app = document.querySelector(selectorApp);
}

window.todo = init;
};