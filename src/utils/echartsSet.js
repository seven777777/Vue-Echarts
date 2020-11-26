const baseTxtColor = '#C5D0DE';
const baseColor = ['#60B5EA','#6992D5','#7671B8','#81E2CF','#6BC7C6','#29D9EB','#1990F1','#1F53F2','#32b16c','#d0648a']

export default {
    baseChartsOpt(baseOpt={},otherOpt={}){
        let { xAxisData = [], chartData = []} = baseOpt
        console.log(xAxisData,chartData);

        let aSeries = chartData.map((item,index)=>{
            console.log(item);
            return {
                name:item.name,
                type:item.type,
                yAxisIndex: index,
                data:item.value
            }
        })
        return {
            color:baseColor||[],
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
            series: aSeries
        }
    }
}