<template>
    <module :title="title">
        <div class="item-box--block charts">
            <Echarts :options="opt" />
        </div>
        <CodeBlock :curCode="baseCode" class="mt_8"></CodeBlock>
    </module>
</template>

<script>
import moduleComonMixin from '../moduleCommonMixin'
export default {
    name: 'legendClickDiy',
    mixins:[moduleComonMixin],
    data(){
        return {
            opt:{},
            baseCode:''
        }
    },
    mounted(){
        let chartOpt = this.mockEchartsData.baseChartsObj2
        this.opt = this.echartsSet.baseChartsOpt(chartOpt)

        this.baseCode = `//外部设置legend点击事件
`
    }
}
</script>

<style lang="scss" scoped>
</style>
