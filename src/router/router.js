import * as Router from 'vue-router'
import fScrollField from '../components/f-scroll-field'
import fFilm from '../components/f-film'

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