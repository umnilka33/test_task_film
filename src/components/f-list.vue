<template>
    <div class="f-list">
        <f-preloader />
        <f-list-item 
            v-for="film in FILMS"
            :key="film.id"
            :film_data="film"
            @openFilmByID="showWhatWeGetFromFilmItem"
        />
    </div>
</template>

<script>
    import fListItem from './f-list-item'
    import FPreloader from './f-preloader'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: 'f-list',
        components: {
            fListItem,
            FPreloader
        },
        props: {},
        data(){
            return {}
        },
        computed: {
            ...mapGetters([
                'FILMS'
            ]),
        },
        methods: {
            ...mapActions([
                'GET_FILM_LIST_FROM_API'
            ]),
            showWhatWeGetFromFilmItem(data) {
                console.log(data)
            }
        },
        mounted(){
            this.GET_FILM_LIST_FROM_API()
            .then((response) => {
                if(response.data) {
                    console.log('Data arrived!');
                }
            })
        }
    }
</script>

<style lang="scss">
    .f-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        &-item {
            background-color: $bg-color-item;
            max-width: 1400px;
            min-width: 1400px;
            box-shadow: $shadow-item;
            display: flex;
            flex-direction: row;
        }
    }
</style>
