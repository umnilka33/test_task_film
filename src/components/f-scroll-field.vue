<template>
    <div class="f-scroll-field">
        <f-filter />
        <f-list />
    </div>
</template>

<script>
     import fFilter from './f-filter'
     import fList from './f-list'
    
    export default {
        name: 'f-scroll-field',
        components: {
             fFilter,
             fList
        },
        props: {},
        data() {
            return {}
        },
        computed: {},
        methods: {},
        watch: {},
        mounted() {
        }
    }
</script>

<style lang="scss">
    .f-scroll-field {
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