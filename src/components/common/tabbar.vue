<template>
    <div>
        <div id="tabbar">
            <ul>
                <router-link active-class="sel" v-for='(item, index) in tabList' :key='index' tag="li" :to="item.path">
                    {{item.title}}
                </router-link>
            </ul>
        </div>
        <div class="kong"></div>
    </div>
</template>
<script>
export default {
    name:"tabbar",
    data(){
        return {
            tabList:[
                {title:'主页', path:"/home"},
                {title:'分类', path:'/category'},
                {title:'购物车', path:'/shopcar'},
                {title:'我的', path:'/my'}
            ]
        }
    }
}
</script>
<style lang="less" scoped>
@import url("../../style/main.less");

#tabbar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: @tabBg;
    ul{
        display: flex;
        li{
            width: 25%;
            background: @tabBg;
            color:@tabFont;
            .fs(20);
            text-align: center;
            .lh(40)
        }
        .sel{
            color: @tabSelColor;
        }
    }
}
.kong{
    .h(40)
}
</style>

