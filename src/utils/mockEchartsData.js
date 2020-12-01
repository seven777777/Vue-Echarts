const blueGradientBarColor = ['#24C1E8','#5DACF6']//蓝色渐变柱图
const greenGradientBarColor = ["#1DC9B6","#3DC9E2"]//绿色渐变柱图
const orangeGradientBarColor = ["#FFC837","#FF8008"]//橙色渐变柱图
const blueGradientLineColor = ["rgba(93, 172, 246, 0.4)","rgba(36, 193, 232, 0.4)"]//蓝色渐变线图
const greenGradientLineColor = ["rgba(61, 201, 226, 0.3)","rgba(29, 201, 182, 0.3)"]//绿色渐变线图

export default {
    baseChartsObj:{
        title:'基础直角坐标系图',
        xAxisData:["分类1", "分类2", "分类2", "分类4", "分类5", "分类6"],
        chartData: [
            {
                name: '数据1',
                unit: '%',
                value:[12,18,34,26,67,10],
                color: blueGradientBarColor,
                type: 'line'
            }
        ]
    },
    baseChartsObj2:{
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
    },
    pieChartsObj:{
        title:'基础饼图',
        unit:'%',
        chartData:[
            {value:26, name: '分类1'},
            {value:23, name: '分类2'},
            {value:12, name: '分类3'},
            {value:12, name: '分类4'},
            {value:12, name: '分类5'}
        ]
    }
}