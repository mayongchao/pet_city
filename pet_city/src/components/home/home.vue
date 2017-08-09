<template>
    <div>
       <div>
           <slideshow></slideshow>
           <div class="activity">
               <div class="register">
                   <a href="javascript:;">
                       <img src="./xinrenzhuanxaing.gif" alt="">
                   </a>
               </div>
               <div class="activApp">
                   <ul class="list">
                       <li class="item">
                           <a href="javascript:;">
                               <img src="./echongtuan.png" alt="">
                           </a>
                       </li>
                       <li class="item">
                           <a href="javascript:;">
                               <img src="./pinpaitemai.png" alt="">
                           </a>
                       </li>
                       <li class="item">
                           <a href="javascript:;">
                               <img src="./tiyanguan.png" alt="">
                           </a>
                       </li>
                       <li class="item">
                           <a href="javascript:;">
                               <img src="./qingcangtejia.png" alt="">
                           </a>
                       </li>
                       <li class="item">
                           <a href="javascript:;">
                               <img src="./remailibao.png" alt="">
                           </a>
                       </li>
                   </ul>
               </div>
           </div>
           <pageLine></pageLine>

           <div class="surprise">
               <ul class="surprise-tit">
                   <li class="rob item" >
                       <img src="./suprice.png" alt="">
                   </li>
                   <li class="item">
                       <p class="timer">距本场结束</p>
                   </li>

                   <li class="more item">
                       <a href="javascript:;">
                           <img class="img-more" src="./more.png" alt="">
                       </a>
                   </li>
               </ul>
               <div class="surprise-pro">
                   <productShow></productShow>
               </div>
           </div>

           <pageLine></pageLine>

            <div class="lanmu">
                <img src="./remenlanmu.jpg" alt="">
            </div>

           <remen></remen>

           <pageLine></pageLine>

           <div class="video">
               <img src="./chaopinshipin.png" alt="">
           </div>

           <div class="videoDog">
               <div class="dogImg">
                   <img  class="dog" src="./dog.jpg" alt="">
                   <img  class="play" src="./play.png" alt="">
               </div>
               <div class="wenben">
                   <p>
                       神奇饮水除口臭
                       <span>#猫咪保健</span>
                       <span class="view">
                           <img src="./view-black.png" alt="">
                           <i>16629</i>
                       </span>
                   </p>
               </div>
           </div>

           <pageLine></pageLine>

           <div class="video">
               <img src="./tiyan.png" alt="">
           </div>

       </div>
    </div>

</template>
<script>
    import BScroll from 'better-scroll'

    import slideshow from '../slideshow/slideshow.vue'
    import pageLine from '../pageLine/pageLine.vue'
    import productShow from '../productShow/productShow.vue'
    import remen from '../remen/remen.vue'
    export default{
        data(){
            return {}
        },
        methods:{
            callback(){
                this.$refs.time._callback
            }
        },
        created(){
//            整个的滑动
            /*this.$nextTick(()=>{
                    let scroll = new BScroll(this.$refs.homeSilde,{
                        click:true
                    })
            })*/
        },
        components:{
            slideshow,
            pageLine,
            productShow,
            remen
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
         .activity
           .register
               img
                   width 100%
             .activApp
              .list
                  overflow hidden
               .item
                   width 20%
                   float left
                img
                    width 100%
         .surprise
          .surprise-tit
              padding 10px
              overflow hidden
           .item
               float left
               width 30%
           .timer
                font-size 13px
                line-height 24px
           .rob
            img
                height 24px
                margin-left -15px
                /*vertical-align middle*/
           .more
                width 30%
                float right
            .img-more
                float right
                width 60%
                margin-top -13px
         .lanmu
           img
             width 100%
         .video
           text-align center
           img
             width 50%
         .videoDog
           .dogImg
             height 150px
             overflow hidden
             position relative
             .dog
               width 100%
             .play
               width 20px
               height 20px
               position absolute
               top 0
               bottom 0
               left 0
               right 0
               margin auto


           .wenben
             position relative
             padding 10px 15px
             font-size 12px
             color #333
             span
               color red
             .view
               position absolute
               right 15px
               img
                 width 10px
                 height 9px
               i
                 color #333
</style>
