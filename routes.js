const routes = require('next-routes');
module.exports =
    routes()
        .add({name: 'Index', pattern: '/', page: 'index'})