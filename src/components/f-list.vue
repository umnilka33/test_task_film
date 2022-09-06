<template>
    <div class="f-list">
        <h1>list of films</h1>
        <f-list-item 
            v-for="film in this.$store.state.films"
            :key="film.id"
            :film_data="film"
            @openFilmByID="showWhatWeGetFromFilmItem"
        />
    </div>
</template>

<script>
    import fListItem from './f-list-item'
    import {mapActions} from 'vuex'

    export default {
        name: 'f-list',
        components: {
            fListItem
        },
        props: {},
        data(){
            return {
                
            }
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
        }
    }
</script>

<style lang="sсss">

</style>
