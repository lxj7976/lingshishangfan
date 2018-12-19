<template>
    <div>
         <Header class="head" title="购物车"></Header>
        这是shopcar页
        <Tabbar></Tabbar>
    </div>
</template>
<script>
import Header from "@/components/common/header"
import Tabbar from '@/components/common/tabbar'
export default {
    name:"shopcar",
    components:{
        Header,Tabbar
    }
}
</script>
<style lang="less" scoped>

</style>

