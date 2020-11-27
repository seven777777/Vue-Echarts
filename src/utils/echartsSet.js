const baseTxtColor = '#C5D0DE';
const baseColor = ['#60B5EA','#6992D5','#7671B8','#81E2CF','#6BC7C6','#29D9EB','#1990F1','#1F53F2','#32b16c','#d0648a']
const baseBarColor = ['#81E2CF','#1F53F2','#32b16c','#d0648a']

export default {
    baseChartsOpt(baseOpt={},otherOpt={}){
        let { xAxisData = [], chartData = [],title=''} = baseOpt
        // console.log(xAxisData,chartData);

        let aSeries = chartData.map((item,index)=>{
            // console.log(item);
            return {
                name:item.name,
                type:item.type,
                // yAxisIndex: index,
                data:item.value
            }
        })
        return {
            color:baseBarColor||[],
            title: {
                text: title,
                left: 'center',
                textStyle:{
                    color: baseTxtColor
                }
            },
            xAxis: {
                type: 'category',
                axisLabel:{
                    color:baseTxtColor
                },
                axisLine:{
                    show: true,
                    lineStyle: {
                        color: baseTxtColor
                    },
                },
                axisTick:{
                    show: false,
                },
                splitLine:{
                    show:false,
                    lineStyle:{
                        color: baseTxtColor,
                        opacity:0.3
                    }
                },
                data: xAxisData
            },
            yAxis: {
                type: 'value',
                axisLabel:{
                    color:baseTxtColor
                },
                axisLine:{
                    show: true,
                    lineStyle: {
                        color: baseTxtColor
                    },
                },
                axisTick:{
                    show: false,
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: baseTxtColor,
                        opacity:0.3
                    }
                }
            },
            series: aSeries,
            ...otherOpt
        }
    },
    pieChartsOpt(baseOpt={},otherOpt={}){
        let { unit = '',title='', chartData = []} = baseOpt
        return {
            color: baseColor||[],
            title: {
                text: title,
                left: 'center',
                textStyle:{
                    color: baseTxtColor
                }
            },
            series: [
                {
                    name:chartData.name||'',
                    type:'pie',
                    radius: chartData.radius||['0', '70%'],
                    center: chartData.center||['50%', '50%'],
                    avoidLabelOverlap: false,
                    data:chartData,
                }
            ],
            ...otherOpt
        }
    }
}