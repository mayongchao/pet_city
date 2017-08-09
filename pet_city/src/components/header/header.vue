<template>
   <div class="wrapper">
       <div class="wrapper-two">
          <div class="location">
              <span class="catstation">猫站</span>

              <span class="line">|</span>

              <a href="javascript:;">
                   <span class="my-position">
                       重庆
                   </span>
                    <i class="up"></i>
              </a>
          </div>

           <a href="javascript" class="search">

               <input type="text" placeholder="搜索商品和品牌">
               <span class="icon"></span>
           </a>




           <a href="javascript" class="category">
               <img src="./mydope.png" alt="">
           </a>
       </div>

   </div>
</template>
<script>
    export default{
        data(){
            return {}
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .wrapper
        /*background-color red*/
        width 100%
        height 45px
        padding 5px 10px
     .wrapper-two
         padding 8px 0
      .location
          display inline-block
          margin-right 15px
          font-size 0px
          position relative
       .catstation
          color #333
          font-size 14px
       .my-position
           color #333
           font-size 14px
       .up
            border-style solid
            border-width 4px
            border-color transparent transparent #666 transparent
            display inline-block
            position absolute
            right -10px
            top -2px
       .line
           color #333
           font-size 14px
    .search
        position relative
       input
         width 65%
         border none
         height 24px
         background #f6f6f6
         border-radius 4px
         color #9e9e9e
         text-indent 10px
         font-size 13px
         outline none
      .category
        img
            width 25px
            vertical-align middle
            margin-left 5px
      .icon
            position absolute
            /*display inline-block*/
            width 11px
            height 11px
            background url("./search.png") no-repeat
            background-size 11px auto
            top 6px
            right 8px


</style>
