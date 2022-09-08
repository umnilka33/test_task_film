<template>
    <div class="f-main-wrapper">
        <div class="f-main-wrapper__head">
            <div>{{title}}</div>
        </div>
        <div class="scroll-field">
            <f-filter />
            <f-list />
        </div>
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
    //scrollbar style
    .scroll-field {
        position: absolute;
        top: 140px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: auto;
        overflow-x: hidden;
        height: -webkit-calc(100% - 150px);
        margin-right: 16px;
    }
    ::-webkit-scrollbar {
        width: 8px;
    }
    // Handle 
    ::-webkit-scrollbar-thumb {
        width: 8px;
        background: black;
        border-radius: 4px;
    }
</style>