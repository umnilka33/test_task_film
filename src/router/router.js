import Router from 'vue-router'

import fList from '../components/f-list'
//import fFilm from '../components/f-film'
Vue.use(Router);

let router = new Router( {
    routes: [
        {
            path: '/',
            name: 'film list',
            component: fList
        }//,
        // {
        //     path: '/film/:id',
        //     name: 'film',
        //     component: fFilm
        // }
    ]
})

export default router;