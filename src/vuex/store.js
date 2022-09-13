import axios from 'axios';
import Vuex from 'vuex'

let store = new Vuex.Store( {
    state: {
        films: [],
        current_film: {},
        loader: false
    },
    mutations: {
        SET_FILMS_TO_STATE: (state, films) => {
            state.films = films;
        },
        SET_CURRENT_FILM_TO_STATE: (state, film) => {
            state.current_film = film;
        },
        SET_LOADER_STATUS: (state, status) => {
            state.loader = status;
        }
    },
    actions: {
        GET_FILM_LIST_FROM_API({commit}){
            commit('SET_LOADER_STATUS', true);
            return axios('http://localhost:3000/films', {
                method: "GET"
            })
            .then((filmList)=> {
                commit('SET_FILMS_TO_STATE', filmList.data);
                commit('SET_LOADER_STATUS', false);
                return filmList;
            })
            .catch((error)=> {
                console.log(error);
                commit('SET_LOADER_STATUS', false);
                return error;
            })
        },
        GET_FILM_BY_ID_FROM_API({commit}, id){
            commit('SET_LOADER_STATUS', true);
            return axios('http://localhost:3000/films/' + id, {
                method: "GET"
            })
            .then((film)=> {
                commit('SET_CURRENT_FILM_TO_STATE', film.data);
                commit('SET_LOADER_STATUS', false);
                return film;
            })
            .catch((error)=> {
                console.log(error);
                commit('SET_LOADER_STATUS', false);
                return false;
            })
        },
        SORT_FILMS_BY_NAME({commit}, data) {
            commit('SET_LOADER_STATUS', true);
            let sortedFilms = data.films.sort(function(a, b){
                var nameA = a.title.toLowerCase(), nameB=b.title.toLowerCase()
                if (nameA < nameB){ 
                    return -1;
                }
                if (nameA > nameB){
                    return 1
                }
                return 0 
            })
            commit('SET_LOADER_STATUS', false);
            commit('SET_FILMS_TO_STATE', sortedFilms);
        },
        SORT_FILMS_BY_YEAR({commit}, data) {
            commit('SET_LOADER_STATUS', true);
            let sortedFilms = data.films.sort(function(a, b){
                return a.year-b.year
            })
            commit('SET_LOADER_STATUS', false);
            commit('SET_FILMS_TO_STATE', sortedFilms);
        }
    },
    getters: {
        FILMS(state){
            return state.films;
        },
        CURRENT_FILM(state){
            return state.current_film;
        }
    }
})

/*function preloader(isStart) {
    if(isStart){
        //выключаем отображение списка
        //включаем отображение прелоадера
    }
    else{
        //вылючаем отображение прелоадера
        //включаем отображение списка
    }
}*/

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