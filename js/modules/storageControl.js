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

const removeStorage = (key, task) => {    
    const data = getStorage(key);
    data.forEach((el, index) => {
        if (el.task === task) data.splice(index, 1)
    });
    saveToStarage(key, data);
};

export {
    getStorage,
    setStorage,
    removeStorage
};