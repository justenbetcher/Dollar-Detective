const data = require('../data/users.json');

function getAll() {
    return data.users;
}
 
function getById(id) {
    return data.users.find(user => user.id === id);
}

function add(item) {
    const date = new Date().valueOf();
    item.id = item.name.replace(/\s/g, '').toLowerCase() + date;
    data.users.push(item);
}

function deleteItem(item) {
    const index = data.users.findIndex(user => user.id === item.id);
    data.users.splice(index, 1);
}

module.exports = {
    getAll,
    getById,
    add,
    deleteItem
}