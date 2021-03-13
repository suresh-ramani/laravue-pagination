require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('users', require('./components/Users.vue').default);

const app = new Vue({
    el: '#app',
});