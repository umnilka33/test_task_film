import * as Router from 'vue-router'
//import * as Vue from 'vue'
import fScrollField from '../components/f-scroll-field'
import fFilm from '../components/f-film'
//Vue.use(Router);

let router = Router.createRouter( {
    history: Router.createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'film list',
            component: fScrollField,
            props: true
        },
        {
            //path: '/film/',
            path: '/film/:id',
            name: 'film',
            component: fFilm,
            props: true
        }
    ]
})

export default router;