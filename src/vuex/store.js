import axios from 'axios';
import Vuex from 'vuex'

let store = new Vuex.Store( {
    state: {
        films: [],
        current_film: {}
    },
    mutations: {
        SET_FILMS_TO_STATE: (state, films) => {
            state.films = films;
        },
        SET_CURRENT_FILM_TO_STATE: (state, film) => {
            state.current_film = film;
        }
    },
    actions: {
        GET_FILM_LIST_FROM_API({commit}){

            return axios('http://localhost:3000/films', {
                method: "GET"
            })
            .then((filmList)=> {
                commit('SET_FILMS_TO_STATE', filmList.data);
                return filmList;
            })
            .catch((error)=> {
                console.log(error);
                return error;
            })
        },
        GET_FILM_BY_ID_FROM_API({commit}, id){

            return axios('http://localhost:3000/films/' + id, {
                method: "GET"
            })
            .then((film)=> {
                commit('SET_CURRENT_FILM_TO_STATE', film.data);
                return film;
            })
            .catch((error)=> {
                console.log(error);
                return false;
            })
        },
        SORT_FILMS_BY_NAME({commit}, data) {
            let sortedFilms = data.films.sort(function(a, b){
                var nameA = a.title.toLowerCase(), nameB=b.title.toLowerCase()
                if (nameA < nameB) 
                    return -1 
                if (nameA > nameB)
                    return 1
                return 0 
            })
            commit('SET_FILMS_TO_STATE', sortedFilms);
        },
        SORT_FILMS_BY_YEAR({commit}, data) {
            let sortedFilms = data.films.sort(function(a, b){
                return a.year-b.year
            })
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