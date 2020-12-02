<template>
    <module :title="title">
        <p class="item-box--block desc">如果想要实现折线图断开没有数据的点，方法很简单，就是在数据层面控制需要断开的点传值为‘null’即可，如下图，只要设置数据如下：</p>
        <CodeBlock :curCode="baseCode" class="mt_8"></CodeBlock>
        <div class="item-box--block charts">
            <Echarts :options="opt" />
        </div>
        <p class="item-box--block desc">如果要连接断点，操作也很简单</p>
        <CodeBlock :curCode="connectCode" class="mt_8"></CodeBlock>
        <div class="item-box--block charts">
            <Echarts :options="optConnect" />
        </div>
        
    </module>
</template>

<script>
import moduleComonMixin from '../moduleCommonMixin'
export default {
    name: 'connectNulls',
    mixins:[moduleComonMixin],
    data(){
        return {
            opt:{},
            baseCode:'',
            optConnect:{},
            connectCode:''
        }
    },
    mounted(){
        let chartObj = {
            xAxisData:["分类1", "分类2", "分类2", "分类4", "分类5", "分类6"],
            chartData: [
                {
                    name: '数据1',
                    unit: '%',
                    value:[6,11,null,null,21,30],
                    type: 'line'
                }
            ]
        }
        this.opt = this.echartsSet.baseChartsOpt(chartObj)

        this.baseCode = `//断开折线图
let chartObj = {
    xAxisData:["分类1", "分类2", "分类2", "分类4", "分类5", "分类6"],
    chartData: [
        {
            name: '数据1',
            unit: '%',
            value:[6,11,null,null,21,30],//主要是这一行
            type: 'line'
        }
    ]
}
this.opt = this.echartsSet.baseChartsOpt(chartObj)`

        this.optConnect = this.echartsSet.baseChartsOpt(chartObj)
        this.optConnect.series[0].connectNulls = true

        this.connectCode = `//连接断点
series:[
    {
        type:'line',
        connectNulls: true, //增加这个配置即可
        // ...
    }
]`
    }
}
</script>

<style lang="scss">

</style>
