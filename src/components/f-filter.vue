<template>
    <div class="f-filter">
        <div class="f-filter__title">Фильмы</div>
        <div class="f-filter__sort">
            <div 
            class="f-filter__sort-by-name"
            @change="sortFilmsByName"
            >
                <input type="checkbox" class="custom-checkbox" id="sortByName" name="sortByName" value="">
                <label for="sortByName">Отсортировать по названию</label>
            </div>
            <div 
            class="f-filter__sort-by-year"
            @change="sortFilmsByYear"
            >
                <input type="checkbox" class="custom-checkbox" id="sortByYear" name="sortByYear" value="">
                <label for="sortByYear">Отсортировать по году</label>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
    export default {
        name: 'f-filter',
        components: {},
        data() {
            return {};
        },
        methods: {
            ...mapActions([
                'SORT_FILMS_BY_NAME',
                'SORT_FILMS_BY_YEAR',
                'GET_FILM_LIST_FROM_API'
            ]),
            sortFilmsByName() {
                if(document.getElementById('sortByName').checked){
                    this.SORT_FILMS_BY_NAME(this.$store.state);
                    document.getElementById('sortByYear').checked = false;
                }
                else{
                    this.GET_FILM_LIST_FROM_API();
                }
            },
            sortFilmsByYear() {
                if(document.getElementById('sortByYear').checked){
                    this.SORT_FILMS_BY_YEAR(this.$store.state);
                    document.getElementById('sortByName').checked = false;
                }
                else {
                    this.GET_FILM_LIST_FROM_API();
                }
            }
        }
    }
</script>

<style lang="scss">
    .f-filter {
        max-width: 1400px;
        min-width: 1400px;
        height: 100px;
        &__title {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 32px;
            line-height: 32px;
            color: $color-name;
            text-align: start;
        }
        &__sort{
            display: flex;
            flex-direction: row;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
            color: $bg-color-poster;
            margin-top: 18px;
        }
        &__sort-by-year {
            margin-left: 34.5px;
        }
    }
    .f-filter hr {
        border: none;
        background-color: $bg-color-poster;
        color: $bg-color-poster;
        height: 1px; 
        margin-top: 18px;
    }
    //checkbox style
    .custom-checkbox {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
    .custom-checkbox+label {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }
    .custom-checkbox+label::before {
        content: '';
        display: inline-block;
        width: 1em;
        height: 1em;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid $checkbox-border-color;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }
    //checked
    .custom-checkbox:checked+label::before {
        border-color: $checkbox-checked-color;
        background-color: $checkbox-checked-color;
        background-image: url("../assets/arrow.svg");
         background-size: 90%;
    }
    /* стили при наведении курсора на checkbox */
    .custom-checkbox:not(:disabled):not(:checked)+label:hover::before {
        border-color: white;
    }
    /* стили для активного состояния чекбокса (при нажатии на него) */
    .custom-checkbox:not(:disabled):active+label::before {
        background-color: $checkbox-active-color;
        border-color: $checkbox-active-color;
    }
    /* стили для чекбокса, находящегося в фокусе */
    .custom-checkbox:focus+label::before {
        box-shadow: 0 0 0 0.2rem $checkbox-focus-color;
    }
    /* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
    .custom-checkbox:focus:not(:checked)+label::before {
        border-color: $checkbox-border-color;
    }
</style>