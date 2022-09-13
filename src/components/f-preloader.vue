<template>
    <div v-if="this.$store.state.loader" class="f-preloader">
        <img class="f-preloader__red" src="../assets/pre_load/Subtract_red.svg">
        <img class="f-preloader__black" src="../assets/pre_load/Subtract_black.svg">
    </div>
</template>

<script>
    export default {
        name: 'f-preloader',
        components: {},
        props: {},
        data() {
            return {
                show: true
            }
        },
        methods: {}
    }
</script>

<style lang="scss">
    .f-preloader{
        position: absolute;
        top: calc(50% - (136px/2));
        left: calc(50% - (136px/2));
        width: 136px;
        height: 136px;
        &__red{
            z-index: 999;
            position: absolute;
            top: 25px;
            left: 18px;
            width: 81.88px;
            height: 40.29px;
        }
        &__black {
            z-index: 999;
            position: absolute;
            top: 0px;
            left: 26px;
            width: 97.28px;
            height: 47.91px;
        }
    }
</style>