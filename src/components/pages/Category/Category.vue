<template>
    <div>
        <Header class="head" title="分类"></Header>
        这是category页
        <Tabbar></Tabbar>
    </div>
</template>
<script>
import Header from "@/components/common/header";
import Tabbar from '@/components/common/tabbar';
export default {
    name:"Home",
    components:{
        Header, Tabbar
    }
}
</script>
<style lang="less" scoped>

</style>

