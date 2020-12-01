<template>
    <module :title="title">
        <div class="item-box--block charts">
            <Echarts ref="myChart" :options="opt" @mouseover="mouseover" />
        </div>
        <CodeBlock :curCode="baseCode" class="mt_8"></CodeBlock>
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
            timer:null
        }
    },
    mounted(){
        let chartOpt = this.mockEchartsData.baseChartsObj2
        this.opt = this.echartsSet.baseChartsOpt(chartOpt,{
            tooltip:{
                trigger: "axis",
                confine: true,
                backgroundColor:'#fff',
                textStyle:{
                    color: '#303030'
                },
                formatter(param){
                    let data=[param[0].axisValue]
                    param.forEach((item,index)=>{
                        let marker = item.marker ? item.marker : `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${obj.chartData[index].color[0]};"></span>`
                        let list = marker+`<span class="fs_12 c_fff">${item.seriesName}</span>
                                                <span class="fs_12 fw_b c_fff">${item.value}</span>
                                                <span class="fs_12 c_fff"">${chartOpt.chartData[index].unit}</span>`
                        data.push(list)
                    })
                    
                    return data.join('<br />')
                }
            }
        })

        this.$nextTick(()=>{
            let n = chartOpt.xAxisData.length
            let i = 0
            this.showTooltip(i)
            this.timer = setInterval(()=>{
                if(i < n -1){
                    i ++
                }else{
                    i = 0
                }
                this.showTooltip(i)
            },2000)
        })

        this.baseCode = `//默认显示并轮播显示
// dom
<Echarts ref="myChart" :options="opt" @mouseover="mouseover" />

// vue
// ...
data(){
    return {
        opt:{},
        timer:null
    }
},
mounted(){
    let chartOpt = {
        xAxisData:["分类1", "分类2", "分类2", "分类4", "分类5", "分类6"],
        chartData: [
            {
                name: '数据1',
                unit: '个',
                value:[12,18,34,26,67,10],
                color: blueGradientBarColor,
                type: 'bar'
            },
            {
                name: '数据2',
                unit: '个',
                value:[16,11,14,36,57,20],
                color: greenGradientBarColor,
                type: 'bar'
            },
            {
                name: '数据3',
                unit: '%',
                value:[6,11,24,16,11,30],
                color: greenGradientBarColor,
                type: 'line'
            }
        ]
    }

    // 通过封装的函数，获得图表的参数
    this.opt = this.echartsSet.baseChartsOpt(chartOpt)

    // 通过定时函数，让tooltip实现轮播效果
    this.$nextTick(()=>{
        let n = chartOpt.xAxisData.length
        let i = 0
        this.showTooltip(i)
        this.timer = setInterval(()=>{
            if(i < n -1){
                i ++
            }else{
                i = 0
            }
            this.showTooltip(i)
        },2000)
    })
},
methods:{
    // 封装一个显示tooltip的函数
    showTooltip(index){
        // 获取Echarts实例：this.$refs.myChart.chart
        this.$refs.myChart.chart.dispatchAction({
            type: 'showTip',
            // 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
            seriesIndex: 0,
            // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
            dataIndex: index,
        })
    },
    // 为了使交互更合理，增加一个鼠标经过图表去自主触发tooltip时清除定时器
    mouseover(){
        clearInterval(this.timer);
    }
},
// 页面销毁时，记得清除定时器
beforeDestroy() {
    clearInterval(this.timer);
}
`
    },
    methods:{
        showTooltip(index){
            this.$refs.myChart.chart.dispatchAction({
                type: 'showTip',
                // 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
                seriesIndex: 0,
                // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
                dataIndex: index,
            })
        },
        // 为了使交互更合理，增加一个鼠标经过图表去自主触发tooltip时清除定时器
        mouseover(){
            clearInterval(this.timer);
        }
    },
    beforeDestroy() {
        clearInterval(this.timer);
    },
}
</script>

<style lang="scss">
.tooltip_box{
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 5px 7px -3px rgba(0, 0, 0, 0.13);
    border: 1px solid rgba(102, 107, 127, 0.1);
    padding: 15px 10px 10px 10px;
    border-radius: 4px;
    .tool_axisLabel {
        color: #666b7f;
        font-size: 12px;
        font-weight: bold;
        padding-bottom: 5px;
        display: block;
        text-align: left;
    }
    .line_tootip_box {
        line-height: 20px;
        color: #666b7f;
        .seriy_icon {
            width: 5px;
            height: 5px;
            border-radius: 100%;
            margin-right: 5px;
        }
        .value {
            color: #000000;
            font-size: 10px;
            font-weight: bold;
            &.emit_value {
                float: right;
                text-align: right;
            }
        }
    }
}
</style>
