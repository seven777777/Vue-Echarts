<template>
    <div class="home">
        <div class="navBar">
            <div class="searchBar">
                <input type="text" placeholder="搜索" class="search-ipt" v-model="searchKey" />
            </div>
            <div class="listCon">
                <NavList />
            </div>
        </div>
        <div class="main-content">
            <div class="block-item-box">
                <div class="item-box--title">12344</div>
                <div class="item-box--block charts">
                    <Echarts :options="opt" />
                </div>
                <div class="item-box--block desc">
                    123
                </div>
            </div>
            <div class="block-item-box">
                <div class="item-box--title">12344</div>
                <div class="item-box--block charts">
                    <Echarts :options="opt" />
                </div>
                <div class="item-box--block desc">
                    123
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavList from '@/components/NavList'
import Echarts from '@/components/Echarts.vue'

export default {
    name: 'Home',
    components: {
        NavList,
        Echarts
    },
    data(){
        return {
            searchKey:'',
            opt:{
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
            }
        }
    },
    mounted(){
        
    }
}
</script>

<style lang="scss" scoped>
.home{
    height: 100%;
    display: flex;
    .navBar{
        width: 194px;
        height: 100%;
        background: linear-gradient(0deg,#2f3041,#36394d);
        box-shadow: 6px 0 6px 0 rgba(0,0,0,.25);
        padding: 12px 0;
        overflow: hidden;
        .searchBar{
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            .search-ipt{
                background-color: rgba(45,46,62,.8);
                border: 1px solid #2d2e3e;
                border-radius: 4px;
                height: 30px;
                line-height: 30px;
                font-size: 13px;
                padding-left: 10px;
                color: #edf0f1;
                outline: none;
                &:focus{
                    border-color: #0091e6;
                }
            }
        }
        .listCon{
            height: calc(100% - 40px);
        }
    }
    .main-content{
        flex: 1;
        height: 100%;
        overflow-y: auto;
        @include scroll-style-inner(rgba(144,147,153,.5));
    }
}
</style>
