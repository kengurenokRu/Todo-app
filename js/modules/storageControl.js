const getStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

const setStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

const removeStorage = (key, id) => {
    const data = getStorage(key);
    data.forEach((el, index) => {
        if (el.id === id) data.splice(index, 1)
    });
    setStorage(key, data);
};

export { 
    getStorage, 
    setStorage, 
    removeStorage 
};