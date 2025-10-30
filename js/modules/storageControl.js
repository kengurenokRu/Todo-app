const getStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

const saveToStarage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

const setStorage = (key, obj) => {
    const data = [];
    const tempData = JSON.parse(localStorage.getItem(key));
    if (tempData !== null) {
        if (!Array.isArray(tempData)) {
            data.push(tempData);
        }
        else {
            data.push(...tempData);
        }
    }
    data.push(obj);
    saveToStarage(key, data);
};

const removeStorage = (key, id) => {
    const data = getStorage(key);
    data.forEach((el, index) => {
        if (el.id === id) data.splice(index, 1)
    });
    saveToStarage(key, data);
};

const editStorage = (key, id, textContent='') => {
    const data = getStorage(key);
    console.log(data);
    data.forEach((el, index) => {
        if (el.id === id) {
            console.log(textContent);
            if (textContent !== '') {
                el.task = textContent;
            }
            else {
                el.execution = 'Выполнена';
            }
            console.log(el.execution);
            console.log(el.task);
        }
    });
    saveToStarage(key, data);
};

export {
    getStorage,
    setStorage,
    removeStorage,
    editStorage,
};