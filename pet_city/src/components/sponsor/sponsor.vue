<template>
    <div class="sponsor swiper-container">
        <div class="swiper-wrapper">
            <!--<div class="swiper-slide"><img src="./haiyang.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./golden.jpg" alt=""></div>-->
            <div class="swiper-slide">
                <div class="demo">
                    <img  class="swiperImg" src="./annamate.jpg" alt="">
                    <p>已捐助¥213408.68</p>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="demo">
                    <img  class="swiperImg" src="./annamate.jpg" alt="">
                    <p>已捐助¥213408.68</p>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="demo">
                    <img  class="swiperImg" src="./annamate.jpg" alt="">
                    <p>已捐助¥213408.68</p>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="demo">
                    <img  class="swiperImg" src="./annamate.jpg" alt="">
                    <p>已捐助¥213408.68</p>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="demo">
                    <img  class="swiperImg" src="./annamate.jpg" alt="">
                    <p>已捐助¥213408.68</p>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="demo">
                    <img  class="swiperImg" src="./annamate.jpg" alt="">
                    <p>已捐助¥213408.68</p>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="demo">
                    <img  class="swiperImg" src="./annamate.jpg" alt="">
                    <p>已捐助¥213408.68</p>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="demo">
                    <img  class="swiperImg" src="./annamate.jpg" alt="">
                    <p>已捐助¥213408.68</p>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="demo">
                    <img  class="swiperImg" src="./annamate.jpg" alt="">
                    <p>已捐助¥213408.68</p>
                </div>
            </div>


        </div>
        <!-- 如果需要分页器 -->
        <!--<div class="swiper-pagination"></div>-->

        <!-- 如果需要导航按钮 -->
        <!--<div class="swiper-button-prev"></div>-->
        <!--<div class="swiper-button-next"></div>-->

        <!-- 如果需要滚动条 -->
        <!--<div class="swiper-scrollbar"></div>-->
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        },
        created(){
            this.$nextTick(()=>{
                var mySwiper = new Swiper ('.sponsor', {
//                    pagination: '.swiper-pagination',
                    slidesPerView: 3,
//                    paginationClickable: true,
                    spaceBetween: 0,
//                    freeMode : true,
//                    direction: 'horizontal',
//                    loop: true,
                    /*freeMode : true,
                    freeModeMomentum : false,
                    watchSlidesProgress : true,
                    watchSlidesVisibility : true,*/
                    // 如果需要分页器
//                    pagination: '.swiper-pagination',
//                    autoplay:2000,
//                    autoplayDisableOnInteraction:false
                    // 如果需要前进后退按钮
//                    nextButton: '.swiper-button-next',
//                    prevButton: '.swiper-button-prev',

                    // 如果需要滚动条
//        scrollbar: '.swiper-scrollbar',
                })
            })
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          /*width 10%*/
          font-size 12px
          .demo
            display inline-block
            width 110px
            height 100%
          .swiperImg
            width 100%
            height 50px
          p
            border-top 1px solid #e7e7e7
            padding-top 3px
            margin-top 5px

</style>
