<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
           
            <div class="swiper-slide"  v-for="(item,index) in list" :key="index">
                <img :src="root+item.imgPath" alt="">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        
        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
    </div>
</template>
<script>
import Vue from 'vue'
import Swiper from 'swiper'
export default {
    data(){
        return {
            list:[],
            root:'http://127.0.0.1:3000'
        }
    },
    methods:{
        initswiper(){
            this.$axios.get('/hehe/admin/getbanner')
            .then((res)=>{
                console.log(res);
                if(res.err==0){
                    this.list=res.data;
                    console.log(this.list)
                }
                Vue.nextTick(()=>{
                    var mySwiper = new Swiper ('.swiper-container', {
                        loop: true, // 循环模式选项
                        // 如果需要分页器
                        pagination: {
                        el: '.swiper-pagination',
                        },
                        
                        // 如果需要前进后退按钮
                        navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        },
                        
                        // 如果需要滚动条
                        scrollbar: {
                        el: '.swiper-scrollbar',
                        },
                    })       
                })
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    },
    mounted(){
        this.initswiper();
    }
}
</script>
<style lang="less" >
@import url("../../style/main.less");
@import url('../../../node_modules/swiper/dist/css/swiper.css');
.swiper-container {
    .w(375);
    .swiper-slide{
        img{
           .w(375);
        }
    }
} 
</style>

