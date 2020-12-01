<template>
    <module :title="title">
        <div class="item-box--block charts">
            <Echarts ref="myChart" :options="opt" />
            <div class="legendDiy">
                <el-checkbox
                    v-for="(item,index) in legendList"
                    :key="index"
                    v-model="item.select"
                    @change="val=>legendChange(val,item.name)">
                    {{item.name}}
                </el-checkbox>
            </div>
        </div>
        <CodeBlock :curCode="baseCode" class="mt_8"></CodeBlock>
        <p class="item-box--block desc">Tip：除了使用这种方法，还有一个别的思路，就是通过直接过滤数据达到勾选legend同样的效果</p>
    </module>
</template>

<script>
import moduleComonMixin from '../moduleCommonMixin'
export default {
    name: 'defaultShowTooltip',
    mixins:[moduleComonMixin],
    data(){
        return {
            opt:{},
            baseCode:'',
            legendList:[]
        }
    },
    mounted(){
        let chartOpt = this.mockEchartsData.baseChartsObj2
        this.opt = this.echartsSet.baseChartsOpt(chartOpt,{
            legend:{
                show:false
            }
        })
        this.legendList = this.opt.series.map(item=>{
            return {
                name:item.name,
                select: true
            }
        })

        this.baseCode = `//外部设置legend点击事件
// 核心代码：
// dom
<Echarts ref="myChart" :options="opt" />
<div class="legendDiy">
    <el-checkbox
        v-for="(item,index) in legendList"
        :key="index"
        v-model="item.select"
        @change="val=>legendChange(val,item.name)">
        {{item.name}}
    </el-checkbox>
</div>

// legendList数据结构：
legendList:[
    {
        name:legendName,//此处为：数据1，数据2，数据3
        select:true
    },
    // ...
]

legendChange(val,name){
    let changeType = val ? 'legendSelect' : 'legendUnSelect'
    // 通过组件ref拿到Echarts实例：this.$refs.myChart.chart
    this.$refs.myChart.chart.dispatchAction({
        type: changeType,
        // 图例名称
        name: name
    })
}

//另外值得注意的是，需要设置图表的option的legend，否则以上操作无效。
opt = {
    // ...
    legend:{
        show:false,//隐藏原生的图例，从而使用自己自定义的图例dom
    },
    // ...
}

`
    },
    methods:{
        legendChange(val,name){
            let changeType = val ? 'legendSelect' : 'legendUnSelect'
            this.$refs.myChart.chart.dispatchAction({
                type: changeType,
                // 图例名称
                name: name
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.legendDiy{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);
}
</style>
