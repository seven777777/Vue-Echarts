<template>
    <module :title="title">
        <div class="item-box--block charts">
            <Echarts :options="opt" />
        </div>
        <div class="item-box--block desc">
<pre>
    <code>
baseChartsObj:{
    xAxisData:["分类1", "分类2", "分类2", "分类4", "分类5", "分类6"],
    chartData: [
        {
            name: '数据1',
            unit: '%',
            value:[12,18,34,26,67,10],
            color: blueGradientBarColor,
            type: 'line'
        }
    ]
}
    </code>
</pre>
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
            opt:{}
        }
    },
    mounted(){
        let chartOpt = this.mockEchartsData.baseChartsObj
        this.opt = this.echartsSet.baseChartsOpt(chartOpt)
    }
}
</script>

<style lang="scss" scoped>

</style>
