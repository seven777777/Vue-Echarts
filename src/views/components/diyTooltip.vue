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
    name: 'diyTooltip',
    mixins:[moduleComonMixin],
    data(){
        return {
            opt:{},
            baseCode:''
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

        this.baseCode = `//自定义tooltip
// 具体的展示，根据实际情况设置
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
            let marker = item.marker
                        ? item.marker
                        : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:\${obj.chartData[index].color[0]};"></span>'
            let list = marker+'<span class="fs_12">\${item.seriesName}</span>
                                    <span class="fs_12 fw_b">\${item.value}</span>
                                    <span class="fs_12"">\${chartOpt.chartData[index].unit}</span>'
            data.push(list)
        })
        
        return data.join('<br />')
    }
}`
    }
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
