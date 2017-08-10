<template>
    <div class="box swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="./lixiaomizi.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./nuanzai.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./youhouhou.jpg" alt=""></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="demo2 swiper-pagination"></div>

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
                var mySwiper = new Swiper ('.box', {
                    direction: 'horizontal',
                    loop: true,

                    // 如果需要分页器
                    pagination: '.demo2',
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



</style>
