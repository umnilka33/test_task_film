<template>
<router-link
        :to="{name: 'film', params: { id: film_data.id }}">
    <div 
    class="f-list-item" 
    v-if="!this.$store.state.loader"
    @click="setCurrentFilmInfoInState"
    >
        <div class="f-list-item__image">
           <img :src='film_data.poster' alt="img">
        </div>
        <div v-if="film_data.collapse.duration!=null" class="f-list-item__duration">
            <img class="rectangle-img" src="../assets/time_mark/rectangle.svg">
            <div class="f-list-item__time">
                {{film_data.collapse.duration[0]}}
            </div>
            <img class="cine-film-img" src="../assets/time_mark/cine-film.svg">
        </div>
        <div class="f-list-item-info">
            <div class="f-list-item__title">{{film_data.title}}</div>
            <div class="f-list-item__year_genre">{{film_data.year}}, {{ makeListByItem(film_data.genres)}}</div>
            <div class="f-list-item__directors">РЕЖИССЁР: {{makeListByItem(film_data.directors)}}</div>
            <div class="f-list-item__actors">
                <div class="f-list-item__actors__text">АКТЁРЫ:</div>
                <div class="f-list-item__actors__data">{{makeListByItem(film_data.actors)}}</div>
            </div>
            <div v-if="film_data.description!=null" class="f-list-item__description">{{film_data.description}}</div>
            <div v-else class="f-list-item__nodescription"></div>
        </div>
    </div>
    </router-link>
</template>

<script>
    import { mapActions } from 'vuex';
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
            ...mapActions([
                'GET_FILM_BY_ID_FROM_API'
            ]),
            setCurrentFilmInfoInState() {
                this.GET_FILM_BY_ID_FROM_API(this.film_data.id)
            },
            makeListByItem(data) {
                if(data == null){
                    return '';
                }
                else {
                    let str = data.join(', ');
                    return str;
                }
            }
        }
    }
</script>

<style lang="scss">
    .f-list-item__image{
        max-width: 168px;
        min-width: 168px;
        background-color: $bg-color-poster;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .f-list-item__image img {
        height: 168px;
        display: block;
        margin: 0 auto;
    }
    .f-list-item__duration {
        position: absolute;
        right: 0px;
        top: 32px;
    }
    .cine-film-img {
        position: absolute;
        right: 28px;
        top: 6px;
    }
    .f-list-item__time {
        position: absolute;
        right: 56px;
        top: 9px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 12px;
        /* identical to box height, or 100% */

        text-align: right;
        text-transform: uppercase;
        color: black;
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
        position: relative;
        font-family: 'Roboto';
        font-style: normal;
        margin-top: $margin-btw-items;
        &__title {
            font-weight: 700;
            font-size: $item-title-text-size;
            line-height: $item-title-text-size;
            color: $color-name;
        }
        &__year_genre {
            font-weight: 700;
            font-size: $item-main-text-size;
            line-height: $item-main-text-size;
            text-transform: uppercase;
            color: $color-text;
            margin-top: 12px;
        }
        &__directors {
            font-weight: 700;
            font-size: $item-main-text-size;
            line-height: $item-main-text-size;
            text-transform: uppercase;
            color: $color-text;
            margin-top: 8px;
        }
        &__actors {
            display: flex;
            flex-direction: row;
            &__text{
                font-weight: 700;
                font-size: $item-main-text-size;
                line-height: $item-main-text-size;
                text-transform: uppercase;
                color: $color-text;
                margin-top: 10px;
            }
            &__data {
                font-weight: 400;
                font-size: $item-main-text-size;
                line-height: 16px;
                text-transform: none;
                color: $color-text-actors;
                margin-top: 8px;
                margin-left: 10px;
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
        &__nodescription {
            margin-top: 0px;
            margin-bottom: 32px;
        }
    }
    /* приподнятие карточки */
    .f-list-item:hover {
        box-shadow: $shadow-item-hover;
        -webkit-transform: translateY(-8px);
        transform: translateY(-8px);
        transition: 0.2s;
    }

</style>