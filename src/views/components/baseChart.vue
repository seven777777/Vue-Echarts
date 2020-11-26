<template>
    <module :title="title">
        <div class="item-box--block charts">
            <Echarts :options="opt" />
        </div>
        <div class="item-box--block desc">
            123
        </div>
    </module>
</template>

<script>
import moduleComonMixin from '../moduleCommonMixin'
export default {
    name: 'baseChart',
    mixins:[moduleComonMixin],
    data(){
        return {
            opt:{
                xAxis: {
                    type: 'category',
                    axisLabel:{
                        color:'white'
                    },
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value',
                    axisLabel:{
                        color:'white'
                    },
                    axisLine:{
                        show: true,
                        lineStyle: {
                            color: '#E7E9ED'
                        },
                    },
                    axisTick:{
                        show: false,
                    },
                    splitLine:{
                        show:false,
                        lineStyle:{
                            color: ['#C5D0DE'],
                            opacity:0.3
                        }
                    }
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

</style>
