<template>
    <div id="head">
        <p>当前页面不存在</p>
        <span @click="goHome">点击跳转到首页</span>
    </div>
</template>
<script>
export default {
    name:'err',
    data(){
        return {
            msg:''
        }
    },
    methods:{
        goHome(){
            this.$router.push('/home')
        }
    }
}
</script>
<style lang="less" scoped>
@import url("../../style/main.less");
    #head{
        p{
            .fs(20);
        }
        span{
            .fs(20);
            background:@errBg
        }
    }
</style>
