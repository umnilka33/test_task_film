<template>
    <div class="f-main-wrapper">
        <div class="f-main-wrapper__head">
            <div>{{title}}</div>
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: 'f-main-wrapper',
        components: {},
        props: {},
        data() {
            return {
                title: '#movienow'
            }
        },
        computed: {},
        methods: {},
        watch: {},
        mounted() {}
    }
</script>

<style lang="scss">
    body {
        background-color: #363232;
    }
    a {
        text-decoration: none;
    }
    .f-main-wrapper {
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        &__head {
            position: absolute;
            width: 100%;
            height: 100px;
            left: 0px;
            top: 0px;
            background: $bg-color-head;
            box-shadow: $shadow-head;
        }
        &__head div {
            position: absolute;
            width: 100%;
            top: 36px;
            text-align: center;
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