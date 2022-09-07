<template>
    <div class="f-main-wrapper">
        <div class="f-main-wrapper__head">
            <div>{{title}}</div>
        </div>
        <f-filter />
        <f-list />
    </div>
</template>

<script>
    import fFilter from './f-filter'
    import fList from './f-list'
    
    export default {
        name: 'f-main-wrapper',
        components: {
            fFilter,
            fList
        },
        props: {},
        data() {
            return {
                title: '#movienow'
            }
        },
        computed: {},
        methods: {},
        watch: {},
        mounted() {
            console.log('Please, help me');
        }
    }
</script>

<style lang="scss">
    body {
        background-color: #363232;
    }
    .f-main-wrapper {
        display: flex;
        flex-direction: column;
        align-content: center;
        &__head {
            position: absolute;
            width: 1920px;
            height: 100px;
            left: 0px;
            top: 0px;
            background: $bg-color-head;
            box-shadow: $shadow-head;
        }
        &__head div {
            position: absolute;
            left: 777px;
            top: 36px;
            font-family: 'Roboto'; 
            color: $color-head;
            font-style: normal;
            font-weight: 700;
            font-size: 48px;
            line-height: 48px;
            text-align: center;
            letter-spacing: 0.21em;
            text-transform: uppercase;
        }
    }
</style>