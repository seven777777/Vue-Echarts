<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <Echarts class="chart-box-wrap" :options="opt" />
        <Echarts :options="opt" />
    </div>
</template>

<script>
import Echarts from '@/components/Echarts.vue'

export default {
    name: 'Home',
    components: {
        Echarts
    },
    data(){
        return {
            opt:{
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
            }
        }
    },
    mounted(){
        
    }
}
</script>

<style lang="scss" scoped>
.chart-box-wrap{
    width: 50%;
    height: 400px;
}
</style>
