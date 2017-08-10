<template>
    <div class="slideshow swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="./zhunbei.png" alt=""></div>
            <div class="swiper-slide"><img src="./chaopinshipin.png" alt=""></div>
            <div class="swiper-slide"><img src="./jiarirexiao.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./maomibushui.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./maosha.jpg" alt=""></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="demo swiper-pagination"></div>

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
                var mySwiper = new Swiper ('.slideshow', {
                    direction: 'horizontal',
                    loop: true,

                    // 如果需要分页器
                    pagination: '.demo',
                    autoplay:2000,
                    autoplayDisableOnInteraction:false
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
    .swiper-slide img
        width 100%

</style>
