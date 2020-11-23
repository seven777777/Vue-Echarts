<template>
    <ul class="navList">
        <li class="listItem" v-for="(item,index) in 30" :key="index">折线图</li>
        <li class="listItem active">柱状图</li>
    </ul>
</template>

<script>
export default {
    name:'NavList',
    props:{
        listData:{
            type: Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
.navList{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    @include scroll-style-inner(rgba(144,147,153,.5));
    .listItem{
        color: #c5c7cc;
        border-left: 3px solid transparent;
        padding: 0 14px;
        cursor: pointer;
        white-space: nowrap;
        line-height: 36px;
        &.active{
            border-left-color: #0091e6;
            font-weight: bold;
            background-color: #2d2e3e;
        }
    }
}
</style>
