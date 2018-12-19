<template>
    <div class="theme">
        <Header back=1 :title='title'></Header>
        <div class="imgbox">
            <img :src='src' alt="">
        </div>
        <Product-list :type="type"></Product-list>
    </div>
</template>
<script>
import Header from "../../common/header"
import ProductList from "../../common/productList"
export default {
    name:'theme',
    data(){
        return {
            title:"零食商贩",
            id:'',
            src:'',
            type:''
        }
    },
    components:{
        Header,ProductList
    },
    created(){
        console.log(this)
        this.title = this.$route.params.name;
        this.id = this.$route.params.themeId;
        console.log(this.id);
        this.src = "/static/img/"+this.id+"@theme-head.png";
        this.type = this.$route.params.type;
        console.log(this.type);
    }
}
</script>
<style lang="less" >
@import url("../../../style/main.less");
.theme{
    img{
        .w(375)
    }
}
</style>

