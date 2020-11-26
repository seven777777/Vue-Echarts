<template>
    <module :title="title">
        <div class="item-box--block desc">
            一些基础说明，我还没有想好写些什么
        </div>
    </module>
</template>

<script>
import moduleComonMixin from '../moduleCommonMixin'
export default {
    name: 'baseDesc',
    mixins:[moduleComonMixin],
    data(){
        return {
            
        }
    },
    mounted(){
        
    }
}
</script>

<style lang="scss" scoped>

</style>
