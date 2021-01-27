<template>
    <module :title="title">
        <div class="item-box--block desc">
            目前封装的基础图表比较简单，其他一些常用的配置可以直接查询<a target="_bank" href="https://echarts.apache.org/zh/index.html">Echarts官网</a>，
            以下的一些例子多是基于官方配置的一些扩展和稍复杂的场景进行记录。
        </div>
        <p class="item-box--block desc">示例中的一些布局使用了ElementUI前端组件库</p>
        <p class="item-box--block desc">
            为了方便使用，该项目封装了一个全局公共的Echarts组件。封装的组件中暴露了一下方法，可供调用组建时使用，如鼠标事件和action事件等。<br/>
            具体可以直接通过页面左下角的入口查看源码了解。<br/>
            或者直接点击<a target="_bank" href="https://github.com/seven777777/vue-echarts/blob/main/src/components/Echarts.vue">传送门</a><br/>
            使用方法如下：
        </p>
        <CodeBlock :curCode="useCode" class="mt_8"></CodeBlock>
        <p class="item-box--block desc">
            基于大量的项目经验，对于页面中大量出现图表的情况，以下这些数据结构更便于封装<br/>
            so~该项目的图表封装，如无特殊说明，均采用下方的数据结构
        </p>
        <CodeBlock :curCode="optCode" class="mt_8"></CodeBlock>
        
        
    </module>
</template>

<script>
import moduleComonMixin from '../moduleCommonMixin'
export default {
    name: 'baseDesc',
    mixins:[moduleComonMixin],
    data(){
        return {
            useCode:'',
            optCode:''
        }
    },
    mounted(){
        this.useCode = `//Echarts组件
// 需要注册一下组件，然后使用
<Echarts ref="myChart" :options="opt" />
`
        this.optCode = `//数据结构-直角坐标系
baseChartsObj:{
    xAxisData:["分类1", "分类2", "分类2", "分类4", "分类5", "分类6"],
    chartData: [
        {
            name: '数据1',
            value:[12,18,34,26,67,10],
            type: 'line'
        },
        {
            name: '数据2',
            value:[16,11,14,36,57,20],
            type: 'bar'
        },
        // 基本配置的基础上，之后的一些示例会增加一些其他配置，如：单位，色值
        {
            name: '数据3',
            value:[6,11,24,16,11,30],
            type: 'line'
            // unit: '个',
            // color: somecolor,
        }
    ]
}

//数据结构-饼图
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
`
    }
}
</script>

<style lang="scss" scoped>

</style>
