<template>
    <!--<scroller>-->
        <div class="brand">

            <scroller>
                <div class="brand-head">
                    <div class="brand-wrapper">
                <span class="icon-left">
                    <img src="./personal-bico1.png" alt="">
                </span>
                        <span class="headTitle">
                    品牌特卖
                </span>
                        <span class="icon-right">
                    <img src="./imgtk-new.png" alt="">
                </span>
                    </div>
                </div>

                <div class="epetApp">
                    <ul class="appItem">
                        <li class="appList">
                            <a href="javascript">
                                <img src="./head_icon1.png" alt="">
                                <p class="text">首页</p>
                            </a>
                        </li>
                        <li class="appList">
                            <a href="javascript">
                                <img src="./head_icon2.png" alt="">
                                <p class="text">商品分类</p>
                            </a>
                        </li>
                        <li class="appList">
                            <a href="javascript">
                                <img src="./head_icon4.png" alt="">
                                <p class="text">购物车</p>
                            </a>
                        </li>
                        <li class="appList">
                            <a href="javascript">
                                <img src="./head_icon5.png" alt="">
                                <p class="text">我的e宠</p>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="brand-banner">
                    <img src="./banner.jpg" alt="">
                </div>

                <div class="page-navbar">
                    <!--<div class="page-title">Navbar</div>-->
                    <mt-navbar class="page-part" v-model="selected">
                        <mt-tab-item id="1">选项一</mt-tab-item>
                        <mt-tab-item id="2">选项二</mt-tab-item>
                        <mt-tab-item id="3">选项三</mt-tab-item>
                        <mt-tab-item id="4">选项四</mt-tab-item>
                    </mt-navbar>

                    <div>
                        <!--<mt-cell class="page-part" title="当前选中">{{ selected }}</mt-cell>-->
                    </div>

                    <mt-tab-container v-model="selected" class="page-navlist">

                        <mt-tab-container-item id="1" class="page-item">
                            <ul class="imgItem">
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
                            </ul>
                        </mt-tab-container-item>

                        <mt-tab-container-item id="2">
                            <ul class="imgItem">
                                <li class="imgList">
                                    <a href="javascript">
                                        <img src="./1.jpg" alt="" class="imgbanner">
                                    </a>
                                </li>
                                <li class="imgList">
                                    <a href="javascript">
                                        <img src="./2.jpg" alt="" class="imgbanner">
                                    </a>
                                </li>
                                <li class="imgList">
                                    <a href="javascript">
                                        <img src="./3.jpg" alt="" class="imgbanner">
                                    </a>
                                </li>
                                <li class="imgList">
                                    <a href="javascript">
                                        <img src="./4.jpg" alt="" class="imgbanner">
                                    </a>
                                </li>
                            </ul>
                        </mt-tab-container-item>

                        <mt-tab-container-item id="3">
                            <ul class="imgItem">
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
                            </ul>
                        </mt-tab-container-item>

                        <mt-tab-container-item id="4">
                            <ul class="imgItem">
                                <li class="imgList">
                                    <a href="javascript">
                                        <img src="./1.jpg" alt="" class="imgbanner">
                                    </a>
                                </li>
                                <li class="imgList">
                                    <a href="javascript">
                                        <img src="./2.jpg" alt="" class="imgbanner">
                                    </a>
                                </li>
                                <li class="imgList">
                                    <a href="javascript">
                                        <img src="./3.jpg" alt="" class="imgbanner">
                                    </a>
                                </li>
                                <li class="imgList">
                                    <a href="javascript">
                                        <img src="./4.jpg" alt="" class="imgbanner">
                                    </a>
                                </li>
                            </ul>
                        </mt-tab-container-item>

                    </mt-tab-container>
                </div>

            </scroller>

        </div>
    <!--</scroller>-->

</template>
<script>
    export default{
        name: 'page-navbar',
        data() {
            return {
                selected: '1'
            };
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
      img
        width 100%
    .page-navbar
      .imgItem
        background-color #F3F4F5
        .imgList
          margin-top 10px
          a
            display block
            width 100%
            font-size 0
            img
              width 100%
</style>
