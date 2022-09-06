//import Vue from 'vue'
import axios from 'axios';
import Vuex from 'vuex'

//Vue.use(Vuex);

let store = new Vuex.Store( {
    state: {
        films: []
    },
    mutations: {
        SET_FILMS_TO_STATE: (state, films) => {
            state.films = films;
        }
    },
    actions: {
        GET_FILM_LIST_FROM_API({commit}){
            return axios('http://localhost:3000/films', {
                method: "GET"
            })
            .then((filmList)=> {
                console.log(filmList)
                commit('SET_FILMS_TO_STATE', filmList.data);
                return filmList;
            })
            .catch((error)=> {
                console.log(error);
                return error;
            })
        }
    },
    getters: {
        FILMS(state){
            return state.films;
        }
    }
})

export default store;

/*import { createStore } from "vuex";
export default createStore({
    state: {
    },
    mutations: {
    },
    actions: {
    }
})*/