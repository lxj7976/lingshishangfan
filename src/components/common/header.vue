<template>
    <div>
        <div id="head">
            <p class="back" @click="goBack" v-if="back">返回</p>
            <div>{{title}}</div>
        </div>
        <div class="kong"></div>
    </div>
</template>
<script>
export default {
    props:['title','back'],
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="less" scoped>
@import url("../../style/main.less");
#head{
    .h(50);
    .lh(50);
    background: #AB956D;
    .fs(20);
    color: aliceblue;
    text-align: center;
    position: fixed;
    top:0;
    right: 0;
    left: 0;
    z-index: 999;
	display: flex;
    justify-content: center;
    .back{
        position: absolute;
        left: 10px;
        .fs(12);
        .lh(50);
    }
}
.kong{
    .h(50)
}
</style>

