<template>
    <div class="f-list">
        <h1>list of films</h1>
        <f-list-item 
            v-for="film in films"
            :key="film.id"
            :film_data="film"
            @openFilmByID="showWhatWeGetFromFilmItem"
        />
    </div>
</template>

<script>
    import fListItem from './f-list-item'

    export default {
        name: 'f-list',
        components: {
            fListItem
        },
        props: {},
        data(){
            return {
                films: [
                    {
                        id: 0,
                        name: "Один дома",
                        image: "1.jpg",
                        year: 2012,
                        genre: "comedy",
                        actors: "Tati Murelli, Moly Holy, Danny Warm",
                        producer: "Enthony Veber"
                    },
                    {
                        id: 1,
                        name: "Два дома",
                        image: "2.jpg",
                        year: 2009,
                        genre: "triller",
                        actors: "Tati Murelli, Moly Holy, Danny Warm",
                        producer: "Sandra Six"
                    },
                    {
                        id: 2,
                        name: "Святые из бундока",
                        image: "3.jpg",
                        year: 2001,
                        genre: "horror",
                        actors: "Tati Murelli, Moly Holy, Danny Warm",
                        producer: "Anne GolenWagner"
                    },
                ]
            }
        },
        methods: {
            showWhatWeGetFromFilmItem(data) {
                console.log(data)
            }
        }
    }
</script>

<style lang="sсss">

</style>
