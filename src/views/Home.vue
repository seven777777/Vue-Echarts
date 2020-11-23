<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <VueEcharts />
    </div>
</template>

<script>
import VueEcharts from '@/components/VueEcharts.vue'

export default {
    name: 'Home',
    components: {
        VueEcharts
    }
}
</script>
