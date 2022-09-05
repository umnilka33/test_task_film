<template>
    <div class="f-main-wrapper">
        <p>{{title}}</p>
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
                title: 'Main wrapper'
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

<style>
    .f-main-wrapper {
        max-width: 900px;
        margin: 0 auto;
        color: blue;
    }
</style>