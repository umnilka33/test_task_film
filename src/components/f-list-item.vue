<template>
    <div 
    class="f-list-item" 
    @click="openFilmInfo"
    >
        <div class="f-list-item__image">
            <img src="" alt="img">
        </div>
        <div class="f-list-item-info">
            <div class="f-list-item__title">{{film_data.title}}</div>
            <div class="f-list-item__year_genre">{{film_data.year}}, {{film_data.genres.join(', ')}}</div>
            <div class="f-list-item__directors">РЕЖИССЁР: {{film_data.directors==null?console.log('help'):film_data.directors.length>1?film_data.directors.join(', '):film_data.directors.length==1?film_data.directors[0]:''}}</div>
            <div class="f-list-item__actors">
                <div class="f-list-item__actors__text">АКТЁРЫ: </div>
                <div class="f-list-item__actors__data">{{ film_data.actors.join(', ')}}</div>
            </div>
            <div class="f-list-item__description">{{film_data.description}}</div>
        </div>
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
    .f-list-item__image{
        max-width: 168px;
        min-width: 168px;
        background-color: $bg-color-poster;
    }
    .f-list-item-info {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: start;
        margin-left: 24px;
        margin-top: 32px;
        margin-right: 32px;
    }
    .f-list-item {
        font-family: 'Roboto';
        font-style: normal;
        margin-top: $margin-btw-items;
        &__title {
            font-weight: 700;
            font-size: 36px;
            line-height: 36px;
            color: $color-name;
        }
        &__year_genre {
            font-weight: 700;
            font-size: 12px;
            line-height: 12px;
            text-transform: uppercase;
            color: $color-text;
            margin-top: 12px;
        }
        &__directors {
            font-weight: 700;
            font-size: 12px;
            line-height: 12px;
            text-transform: uppercase;
            color: $color-text;
            margin-top: 8px;
        }
        &__actors {
            display: flex;
            flex-direction: row;
            &__text{
                font-weight: 700;
                font-size: 12px;
                line-height: 12px;
                text-transform: uppercase;
                color: $color-text;
                margin-top: 8px;
            }
            &__data {
                font-weight: 400;
                font-size: 12px;
                line-height: 12px;
                text-transform: none;
                color: $color-text-actors;
                margin-top: 8px;
            }
        }
        &__description {
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: white;
            margin-top: 16px;
            margin-bottom: 32px;
        }
    }

</style>