<template>
    <!--<scroller>-->
        <div class="brand">

            <scroller>
                <div class="brand-head">
                    <div class="brand-wrapper">
                <span class="icon-left" @click="goBack">
                    <img src="./personal-bico1.png" alt="">
                </span>
                        <span class="headTitle">
                    品牌特卖
                </span>
                        <span class="icon-right" @click="switchApp">
                    <img src="./imgtk-new.png" alt="">
                        </span>
                    </div>
                </div>

                <div class="epetApp" v-show="isShow">
                    <ul class="appItem">
                        <li class="appList">
                            <router-link href="javascript:;" to="/epet/cat/home">
                                <img src="./head_icon1.png" alt="">
                                <p class="text">首页</p>
                            </router-link>
                        </li>
                        <li class="appList">
                            <a href="javascript:;">
                                <img src="./head_icon2.png" alt="">
                                <p class="text">商品分类</p>
                            </a>
                        </li>
                        <li class="appList">
                            <a href="javascript:;">
                                <img src="./head_icon4.png" alt="">
                                <p class="text">购物车</p>
                            </a>
                        </li>
                        <li class="appList">
                            <a href="javascript:;">
                                <img src="./head_icon5.png" alt="">
                                <p class="text">我的e宠</p>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="brand-banner">
                    <img src="./banner.jpg" alt="">
                </div>



                <!--<ul class="imgItem">
                    <li class="imgList">
                        <a href="javascript">
                            <img src="./banner1.jpg" alt="" class="imgbanner">
                        </a>
                    </li>
                    <li class="imgList">
                        <a href="javascript">
                            <img src="./banner2.jpg" alt="" class="imgbanner">
                        </a>
                    </li>
                    <li class="imgList">
                        <a href="javascript">
                            <img src="./banner3.jpg" alt="" class="imgbanner">
                        </a>
                    </li>
                    <li class="imgList">
                        <a href="javascript">
                            <img src="./banner4.jpg" alt="" class="imgbanner">
                        </a>
                    </li>
                </ul>-->
               <div class="saleNav">
                    <div class="saleNavbar" ref="saleBar">
                        <ul class="saleItem clearfix" ref="saleItems" @click="switchBtn">
                            <li class="saleList" >

                                <router-link class="routerLink clearfix" to="/epet/cat/sale/arrival">
                                    <span class="saleImg1 saleImg"></span>

                                    <div class="saleText">
                                        <p class="chinese">最新上架</p>
                                        <p class="english">New arrival</p>
                                    </div>
                                </router-link>

                            </li>
                            <li class="saleList" >
                                <router-link class="routerLink clearfix" to="/epet/cat/sale/hottest">
                                <span class="saleImg2 saleImg saleImg2a">
                                </span>
                                <div class="saleText">
                                    <p class="chinese">最热活动</p>
                                    <p class="english">The hottest</p>
                                </div>
                                </router-link>
                            </li>
                            <li class="saleList" >
                                <router-link class="routerLink clearfix" to="/epet/cat/sale/catFood">
                                <span class="saleImg3 saleImg">
                                </span>
                                <div class="saleText">
                                    <p class="chinese">主粮</p>
                                    <p class="english">Cat Food</p>
                                </div>
                                </router-link>
                            </li>
                            <li class="saleList" >
                                <router-link class="routerLink clearfix" to="/epet/cat/sale/CatSnacks">
                                <span class="saleImg4 saleImg">
                                </span>
                                <div class="saleText">
                                    <p class="chinese">零食</p>
                                    <p class="english">Cat Snacks</p>
                                </div>
                                </router-link>
                            </li>
                            <li class="saleList" >
                                <router-link class="routerLink clearfix" to="/epet/cat/sale/Health">
                                <span class="saleImg5 saleImg">
                                </span>
                                <div class="saleText">
                                    <p class="chinese">医疗保健</p>
                                    <p class="english">Health Protection</p>
                                </div>
                                </router-link>
                            </li>
                        </ul>
                        <router-view></router-view>
                    </div>
               </div>



            </scroller>

        </div>
    <!--</scroller>-->

</template>
<script>
    import BScroll from 'better-scroll'
    export default{
        name: 'page-navbar',
        data() {
            return {
                selected: '1',
                isFirst:true,
                isShow:false
            }
        },
        created(){
            this.$nextTick(()=>{
                if(!this.scroll){
                    this.scroll = new BScroll(this.$refs.saleBar,{
                        click:true,
                        scrollX: 'true',
                        bounce: false
                    })
                }else {
                    this.scroll.refresh()
                }

            })
        },
        methods:{
            goBack(){
                console.log(this.$router.go(-1))
            },
            switchBtn(event){
//                console.log(event.target)
                if(event.target.nodeName == "P"){
//                    console.log(event.target.parentNode.parentNode.parentNode)
                    this.liNode = event.target.parentNode.parentNode.parentNode
                }else if(event.target.nodeName == "A"){
//                    console.log(event.target.parentNode)
                    this.liNode = event.target.parentNode
                }else if(event.target.nodeName == "SPAN"){
//                    console.log(event.target.parentNode.parentNode)
                    this.liNode = event.target.parentNode.parentNode
                }
//                console.log(this.liNode)
//                console.log(this.scroll)
//                document.getElementsByTagName()
//                console.log(this.liNode.getElementsByTagName('span')[0])
                this.spanNode = this.liNode.getElementsByTagName('span')[0]
                this.aNode = this.liNode.getElementsByTagName('a')[0]
                console.log(this.aNode)
//                console.log(this.spanNode)
//                console.log(this.spanNode.style)
//                console.log(getComputedStyle(this.spanNode).backgroundPositionX);
                this.cssPos = getComputedStyle(this.spanNode).backgroundPositionX;
//                console.log(parseInt(this.cssPos))

                if(this.isFirst){
                    this.spanNode.style.backgroundPositionX = (parseInt(this.cssPos)+25)+'px'
                    this.isFirst = false
                }else{
                    this.spanNode.style.backgroundPositionX = (parseInt(this.cssPos)-25)+'px'
                }
//                console.log(this.liNode.attributes)
//                console.log(parseInt(this.cssPos))
                this.scroll.scrollToElement(this.liNode,500)
            },
            switchApp(){
                this.isShow = !this.isShow
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  .brand
    width 100%
    height 100%
    background-color #ffffff
    position fixed
    top 0
    left 0
    z-index 1000
    .brand-head
      .brand-wrapper
        height 50px
        padding 0 15px
        line-height 50px
        text-align center
        vertical-align middle
          /*此处可能涉及到1px像素的问题*/
        border-bottom 1px solid #d7d7d7
        .icon-left
          float left
          img
            vertical-align middle
            width 10px
        .headTitle
          font-size 18px
        .icon-right
          float right
          width 20px
          height 20px
          img
            width 100%
            vertical-align middle
    .epetApp
      .appItem
        .appList
          padding 10px 0
          width 25%
          text-align center
          float left
          a
            display block
            text-align center
            font-size 0
            img
              height 30px

            .text
              font-size 14px
              color #666
              text-align center

    .brand-banner
      font-size 0px
      img
        width 100%
    .saleNav
      .saleNavbar
        .saleItem
          width 200%
          background-color #6a1e9f
          /*color #ffffff*/
          .active
            color #fef842 !important
            border-bottom 2px solid #fef842
          .saleList
            float left
            width 125px
            height 35px
            padding-left 3%
            padding-top 1%
            color #ffffff

            .routerLink
              color #ffffff
              display block
              .saleImg
                float left
                display inline-block
                margin-right 14%
                width 25px
                height 28.2px
                vertical-align middle
                background url("./icons.png")  no-repeat
                background-size 200.4px
                &.saleImg1
                  background-position -175px 0px

                &.saleImg2
                  background-position -125px 0px

                &.saleImg3
                  background-position -25px 0px
                &.saleImg4
                  background-position -25px 0px
                &.saleImg5
                  background-position -25px 0px
              .saleText
                float left
                text-align center
                /*color #ffffff*/
                .chinese
                  font-size 12px
                  /*color #ffffff*/
                .english
                  /*color #ffffff*/
                  margin-top -2px
                  font-size 8px
</style>
