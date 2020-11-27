<template>
    <module :title="title">
        <div class="item-box--block charts">
            <Echarts :options="opt" />
        </div>
        <div class="item-box--block charts">
            <Echarts :options="opt2" />
        </div>
        <div class="item-box--block charts">
            <Echarts :options="pieOpt" />
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
            opt:{},
            opt2:{},
            pieOpt:{}
        }
    },
    mounted(){
        let chartOpt = this.mockEchartsData.baseChartsObj
        this.opt = this.echartsSet.baseChartsOpt(chartOpt)
        let chartOpt2 = this.mockEchartsData.baseChartsObj2
        this.opt2 = this.echartsSet.baseChartsOpt(chartOpt2)
        let chartOptPie = this.mockEchartsData.pieChartsObj
        this.pieOpt = this.echartsSet.pieChartsOpt(chartOptPie)
    }
}
</script>

<style lang="scss" scoped>
</style>
