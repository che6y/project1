
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
window.VueRouter = require('vue-router').default;

Vue.use(VueRouter);

const App             = require('./components/App').default;
const Purchases       = require('./components/PurchasesIndex').default;
const PurchasesEdit   = require('./components/PurchasesEdit').default;
const PurchasesForm   = require('./components/PurchasesForm').default;
const CategoriesIndex = require('./components/CategoriesIndex').default;
const CategoriesList  = require('./components/CategoriesList').default;
const ProgressBar     = require('./components/ProgressBar').default;
const ReportsIndex    = require('./components/ReportsIndex').default;
const SettingsList    = require('./components/SettingsList').default;
const ScheduledIndex  = require('./components/ScheduledIndex').default;


// const SettingsList    = require('./components/SettingsList').default;

Vue.component( 'purchases-form', PurchasesForm );
Vue.component( 'purchase-edit', PurchasesEdit );
Vue.component( 'categories-list', CategoriesList );
Vue.component( 'progress-bar', ProgressBar );


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'purchases.index',
            component: Purchases
        },
        {
            path: '/scheduled-purchases',
            name: 'spurchases.index',
            component: ScheduledIndex
        },
        {
            path: '/categories',
            name: 'categories.index',
            component: CategoriesIndex
        },
        {
            path: '/reports',
            name: 'reports.index',
            component: ReportsIndex
        },
        {
            path: '/settings',
            name: 'settings.index',
            component: SettingsList
        },
    ]
});

const app = new Vue({
    el: '#app',
    components: { App },
    router
});
