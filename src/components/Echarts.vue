<template>
    <div class="echarts">1</div>
</template>

<script>
export default {
    name:'Echarts',
    props:{
        options: Object,
        theme: [String,Object],
        // initOptions: Object,
        // group: String,
        // autoResize: Boolean,
        // watchShallow: Boolean
    },
    data(){
        return {
            chart: null
        }
    },
    computed(){

    }
}
</script>

<style lang="scss" scoped>

</style>
