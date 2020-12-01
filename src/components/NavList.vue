<template>
    <ul class="navList">
        <li v-if="listData.length == 0" class="listItem nodata">暂无数据</li>
        <li
            v-else
            :class="['listItem',{'active':item.index == activeIndex}]"
            v-for="(item,index) in listData"
            :key="index"
            :title="item.label"
            @click="change(item)">
            {{item.label}}
        </li>
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
            activeIndex: 0
        }
    },
    methods:{
        change(item){
            this.activeIndex = item.index
            this.$emit('change',item)
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
        @include text-ellipsis;
        &.active{
            border-left-color: #0091e6;
            font-weight: bold;
            background-color: #2d2e3e;
        }
        &.nodata{
            text-align: center;
            color: #999;
            margin-top: 10px;
        }
    }
}
</style>
