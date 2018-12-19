<template>
    <div>
        <Header class="head" title="我的"></Header>
        这是my页
        <tabbar></tabbar>
    </div>
</template>
<script>
import Header from "@/components/common/header"
import Tabbar from '@/components/common/tabbar'
export default {
    name:"my",
    components:{
        Header,Tabbar
    }
}
</script>
<style lang="less" scoped>

</style>

