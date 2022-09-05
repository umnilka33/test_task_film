<template>
    <div 
    class="f-list-item" 
    @click="openFilmInfo"
    >
        <img src="" alt="img" class="f-list-item__image">
        <p class="f-list-item__name">{{film_data.name}}</p>
        <p class="f-list-item__year">Год: {{film_data.year}}</p>
        <p class="f-list-item__genre">Жанр: {{film_data.genre}}</p>
        <p class="f-list-item__producer">Режиссер: {{film_data.producer}}</p>
        <p class="f-list-item__actors">Актеры: {{film_data.actors}}</p>
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