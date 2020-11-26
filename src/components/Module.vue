<template>
    <div class="block-item-box">
        <div class="item-box--title">{{title}}</div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'NavList',
    props:{
        title:{
            default:'默认标题'
        }
    }
}
</script>
