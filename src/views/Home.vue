<template>
    <div class="home">
        <div class="navBar">
            <div class="searchBar">
                <input type="text" placeholder="搜索" class="search-ipt" v-model="searchKey" />
            </div>
            <div class="listCon">
                <NavList ref="navList" :listData="showList" @change="scroll" />
            </div>
        </div>
        <div class="main-content">
            <component
                :id="'comp-' +  index"
                v-for="(comp,index) in dataList"
                :key="index"
                :title="comp.label"
                :is="allComps[comp.component]">
            </component>
        </div>
    </div>
</template>

<script>
import dataList from './listData'
import allComps from './components/componentsSet'

export default {
    name: 'Home',
    data(){
        return {
            allComps,
            dataList:dataList.map((e,i)=>{
                return {
                    ...e,
                    index: i
                }
            }),
            searchKey:'',
        }
    },
    computed:{
        showList(){
            return this.dataList.filter(item=>item.label.indexOf(this.searchKey) != -1)
        }
    },
    mounted(){
        // 因为滚动区域不是全部视口，所以需要在offsetTop的基础上减去头部导航的高度
        this.dataList.forEach((item,index)=>{
            item.offsetTop = $("#comp-" + index).offset().top - $('header').outerHeight(true)
        })

        // 监听滚动事件
        $(".main-content").on('scroll',e=>{
            let toTop = $(".main-content").scrollTop()
            let n = this.dataList.length
            for(var i=0;i<n;i++){
                const item = this.dataList[i]
                const bottomVal = item.offsetTop + $("#comp-" + i).outerHeight(true)
                if(toTop>=item.offsetTop && toTop < bottomVal){
                    this.$refs.navList.activeIndex = i
                    break
                }
            }
        })
    },
    methods:{
        scroll(item){
            $(".main-content").animate({scrollTop:item.offsetTop}, 500) 
        }
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
