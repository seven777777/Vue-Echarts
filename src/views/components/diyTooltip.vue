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
            tooltip: (chartOpt) => {
                return {
                    trigger: "axis",
                confine: true,
                formatter: function (params) {
                    console.log(params);
                    let titleText = '';
                    let htmlStr = `<div class="jc_echarts_tooltip_box"><div class="tool_axisLabel">${params[0].axisValueLabel}${titleText}</div>`;

                    params.forEach((ser, ind) => {
                        let { seriesName, value, color, axisIndex, dataIndex } = ser;
                        // console.log(ser,seriesName, value, color.colorStops,color ,axisIndex,dataIndex,ind,aUnit,666)


                        // let unit = '';
                        // if (ind >= aUnit.length) {
                        //     unit = aUnit[aUnit.length - 1] || '';
                        // } else {
                        //     unit = aUnit[ind];
                        // }

                        // if (value == 0 || value == null) {
                        //     unit = '';
                        //     value = '-';
                        // }
                        // if (typeof color == 'object' && color.colorStops) {
                        //     color = color.colorStops[color.colorStops.length - 1].color;
                        // }

                        htmlStr += `<div class="flex_b flex_align line_tootip_box" style="min-width: 177px;">
                        <div class="flex_align"><span class="seriy_icon" style="display:inline-block;
                        background-color:${color};"></span> ${seriesName}：</div>
                        <span class="value">${value}${unit}</span>
                        </div>`
                    })
                    htmlStr += `</div>`
                    return htmlStr
                },
                // backgroundColor: 'transparent',
                // textStyle: {
                //     color: '#8998AC',
                //     fontSize: 10,
                // },
                // position: function (point, params, dom, rect, size) {
                //     // 固定在顶部
                //     // return [point[0], '10%'];
                //     var obj = { top: '10%' };
                //     let pst = (point[0] < size.viewSize[0] / 2) ? 'right' : 'left'
                //     if (pst == 'left') {
                //         obj.right = size.viewSize[0] - point[0] + 15
                //     } else {
                //         obj.left = point[0] + 15
                //     }
                //     return obj

                // }
                }
            }
        })

        this.baseCode = `//自定义tooltip
baseChartsObj:{
    xAxisData:["分类1", "分类2", "分类2", "分类4", "分类5", "分类6"],
    chartData: [
        {
            name: '数据1',
            value:[12,18,34,26,67,10],
            type: 'line'
            unit: '%',
        },
        {
            name: '数据2',
            value:[16,11,14,36,57,20],
            type: 'bar',
            unit: '个',
        },
        {
            name: '数据3',
            value:[6,11,24,16,11,30],
            type: 'line'
            unit: '个',
        }
    ]
}`
    }
}
</script>

<style lang="scss" scoped>
</style>
