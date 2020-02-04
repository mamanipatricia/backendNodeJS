const nanoid = require('nanoid');
const TABLA = 'post'; // crear la tabla en la DB EN LA 7;16 - del video de 17 post y likes
// id, text, user (TABLE columns)
module.exports = function (injectedStored) {
    let store = injectedStored;
    if (!store) { // aca ya no ingresa por q ya existe una conexion a mysql
        console.log('---------')
        store = require('../../../store/dummy');
    }
    function list() {
        return store.list(TABLA);
    }

    function createPost(body) {
        console.log('llegue hasta aca.. CON BODY');
        console.table(body);

        const textPost = {
            id: nanoid(),
            text: body.text,
            user_id: body.user_id,
        }
        return store.insert(TABLA, textPost);
    }

    return {
        list,
        createPost,
    }
}