<template>
    <div class="baseLayout">
        <header>vue-echarts 实例</header>
        <div class="main">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    name:'BaseLayout',
    data(){
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.baseLayout{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #282936;
    header{
        height: 64px;
        padding: 0 40px;
        flex-shrink: 0;
        background: linear-gradient(105deg,#3e3f55,#2d2e3e);
        box-shadow: 0 0 24px 0 rgba(0,0,0,.35);
        z-index: 100;
        display: flex;
        align-items: center;
        font-size: 16px;
    }
    .main{
        flex: 1;
        height: 100%;
        overflow: hidden;
    }
}
</style>
