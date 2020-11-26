const txtColor = '#fff';// 字体颜色
const lineColorList = [];//线条颜色组

export default {
    baseChartsOpt(){
        return {
            xAxis: {
                type: 'category',
                axisLabel:{
                    color:'white'
                },
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value',
                axisLabel:{
                    color:'white'
                },
                axisLine:{
                    show: true,
                    lineStyle: {
                        color: '#E7E9ED'
                    },
                },
                axisTick:{
                    show: false,
                },
                splitLine:{
                    show:false,
                    lineStyle:{
                        color: ['#C5D0DE'],
                        opacity:0.3
                    }
                }
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        }
    }
}