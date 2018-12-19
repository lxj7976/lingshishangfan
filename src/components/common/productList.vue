<template>
    <div class="productList">
        <div v-for="index in 10" :key="index" class="item">
            <img src="/static/img/product-cake@1.png" alt="">
            <h5>锈色瓜子 100克</h5>
            <p>￥0.01</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'productlist'
}
</script>
<style lang="less" scoped>
@import url("../../style/main.less");
.productList{
    display: flex;
    flex-wrap: wrap;
    // flex-direction: column;
    // text-align: center;
    justify-content: space-between;
    width: 96%;
    margin: 0 auto;
    .item{
        background:@newBg;
        .m_b(5);
        border-radius: 10px;
        text-align: center;
        .fs(18);
        .w(178);
        .h(178);
        h5{
            
            font-weight:normal;
        }
        img{
            width: 70%;
            margin: 0 auto;
        }
    }
}
</style>
