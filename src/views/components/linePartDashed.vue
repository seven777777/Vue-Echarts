<template>
    <module :title="title">
        <p class="item-box--block desc">以“折线图-连接断开空数据”的示例，假设衍生一个需求，就是希望连接部分的线段用虚线表示。</p>
        <div class="item-box--block charts">
            <Echarts :options="opt" />
        </div>
        <p class="item-box--block desc">实现思路大体就是将data拆分成两组数据，分别设置他们的style</p>
        <CodeBlock :curCode="baseCode" class="mt_8"></CodeBlock>
    </module>
</template>

<script>
import moduleComonMixin from '../moduleCommonMixin'
export default {
    name: 'linePartDashed',
    mixins:[moduleComonMixin],
    data(){
        return {
            opt:{},
            baseCode:'',
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
        this.opt = this.echartsSet.baseChartsOpt(chartObj,{
            tooltip:{},
            series:[
                {
                    name:'数据1',
                    data:[6,11,null,null,21,30],
                    type:'line',
                },
                {
                    name:'数据1',
                    data:[null,11,null,null,21,null],
                    type:'line',
                    connectNulls:true,
                    lineStyle: {
                        width: 2,
                        type:'dashed',
                        color:'#d0648a'
                    }
                }
            ]
        })

        this.baseCode = `{
    // ...
    tooltip:{},// 若tooltip.trigger = "axis", 显示会有问题，需特殊处理
    series:[
        {
            name:'数据1',
            data:[6,11,null,null,21,30],
            type:'line',
        },
        // 新增同样name的series，将data中有值的项设为null，但保留需要特殊样式连接的数据前后的值
        {
            name:'数据1',
            data:[null,11,null,null,21,null],
            type:'line',
            connectNulls:true,
            lineStyle: {
                width: 2,
                type:'dashed',
                color:'#d0648a'
            }
        }
    ]
}`
    }
}
</script>

<style lang="scss">

</style>
