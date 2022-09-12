<template>
    <div class="f-film">
        <router-link :to="{name: 'film list'}">
            <div class="back-to-list">
                <img
                class="back-to-list__image"
                src="../assets/arrow2.svg"
                alt="arrow_img">
                <div class="back-to-list__text">Назад к списку</div>
            </div>
        </router-link>
        <hr>
        <div 
            v-if="!CURRENT_FILM.id"
            class="not-found-text">
            К сожалению, по вашему запросу ничего не найдено...
        </div>
        <div v-else class="f-list-item">
            <div class="f-list-item__image">
                <img :src='CURRENT_FILM.poster' alt="img">
            </div>
            <div class="f-list-item-info">
                <div class="f-list-item__title">{{CURRENT_FILM.title}}</div>
                <div class="f-list-item__year_genre">{{CURRENT_FILM.year}}, {{makeListByItem(CURRENT_FILM.genres)}}</div>
                <div class="f-list-item__directors">РЕЖИССЁР: {{makeListByItem(CURRENT_FILM.directors)}}</div>
                <div class="f-list-item__actors">
                    <div class="f-list-item__actors__text">АКТЁРЫ:</div>
                    <div class="f-list-item__actors__data">{{makeListByItem(CURRENT_FILM.actors)}}</div>
                </div>
                <div v-if="CURRENT_FILM.description!=null" class="f-list-item__description">{{CURRENT_FILM.description}}</div>
                <div v-else class="f-list-item__nodescription"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
    //import fListItem from './f-list-item'
    export default {
        name: 'f-film',
        components: {
            //fListItem
        },
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
        computed: {
            ...mapGetters([
                'CURRENT_FILM'
            ]),
        },
        methods: {
            ...mapActions([
                'GET_FILM_BY_ID_FROM_API'
            ]),
            makeListByItem(data) {
                if(data == null){
                    return '';
                }
                else {
                    let str = data.join(', ');
                    return str;
                }
            }
        },
        mounted() {
            if (!this.$store.state.current_film.id) {
                console.log('информации о фильме нет, запрашиваю из апи')
                this.GET_FILM_BY_ID_FROM_API(this.$router.currentRoute.value.params.id);
            }
            else{
                console.log('у меня уже есть информация об этом фильме')
            }
        }
    }
</script>

<style lang="scss">
    .back-to-list {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        &__image {
            width: 11.67px;
            height: 19.8px;
            margin-right: 20.33px;
            margin-left: 0px;
        }
        &__text {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 20px;
            text-decoration-line: underline;
            color: $color-text-back;
        }
    }
    .f-film {
        position: absolute;
        top: 140px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 1400px;
        min-width: 1400px;
    }
    .f-film hr {
        width: 100%;
        border: none;
        background-color: $bg-color-poster;
        color: $bg-color-poster;
        height: 1px; 
        margin-top: 18px;
    }
    .not-found-text {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 32px;
        color: white;
    }
</style>