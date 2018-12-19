<template>
    <div id="home">
        <Header class="head" title="零食商贩"></Header>
        <Banner class="banner"></Banner>
        <div class="theme_contain">
            <div class='title'>精选主题</div>
            <div class="box">
                <div 
                    :class="index==2?'big':'small'" 
                    v-for="(item,index) in theme" 
                    :key="index"
                    @click="goTheme(item)">
                    <img :src="item.img" alt="">
                </div>
            </div>
        </div>
        <div class="title">最近新品</div>
        <Product-list></Product-list>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Header from "@/components/common/header"
import Banner from "@/components/common/Banner"
import ProductList from "@/components/common/productList"
import Tabbar from '@/components/common/tabbar'
export default {
    name:"Home",
    data(){
        return {
            tltle:'零食商铺',
            theme:[
                {name:'美味水果世界',img:'/static/img/1@theme.png',themeId:1,type:'dryfruit'},
                {name:'新味首发 ',img:'/static/img/2@theme.png',themeId:2,type:'rice'},
                {name:'做个“干物”女',img:'/static/img/3@theme.png',themeId:3,type:'fry'}
            ]
        }
    },
    methods:{
        goTheme(item){
            this.$router.push({name:'theme',params:{themeId:item.themeId,name:item.name,type:item.type}})
        }
    },
    components:{
       Header,Banner,ProductList,Tabbar
    }
}
</script>
<style lang="less" scoped>
@import url("../../../style/main.less");
#home{
    .theme_contain{
        .title{
            .fs(18);
            color: @tabSelColor;
            text-align:center;
            .lh(25);
            .h(25);
            padding: 5px 0px;
        }
        .box{
            width: 100%;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
			.small{
                width: 49.5%;
                .p_b(3)
			}
			.big{width: 100%;

			}
			img{
				width: 100%;
			}
        }
    }
    .title{
        .fs(18);
        color: @tabSelColor;
        text-align:center;
        .lh(25);
        .h(25);
        padding: 5px 0px;
    }
}
</style>

