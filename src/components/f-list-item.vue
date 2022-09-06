<template>
    <div 
    class="f-list-item" 
    @click="openFilmInfo"
    >
        <img src="" alt="img" class="f-list-item__image">
        <p class="f-list-item__title">{{film_data.title}}</p>
        <p class="f-list-item__year">Год: {{film_data.year}}</p>
        <p class="f-list-item__genre">Жанр: {{film_data.genres}}</p>
        <p class="f-list-item__directors">Режиссеры: {{film_data.directors}}</p>
        <p class="f-list-item__actors">Актеры: {{film_data.actors}}</p>
        <p class="f-list-item__description">Описание: {{film_data.description}}</p>
    </div>
</template>

<script>
    export default {
        name: 'f-list-item',
        components: {},
        props: {
            film_data: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
        data(){
            return {}
        },
        methods: {
            openFilmInfo() {
                this.$emit('openFilmByID', this.film_data.id)
            }
        }
    }
</script>

<style lang="scss">
    .f-list-item {
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        //padding: $padding*2;
        //margin-bottom: $margin*2;
    }
</style>