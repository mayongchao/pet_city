<template>
    <div class="footernav">
        <ul class="item clearfix">
            <li class="list">
                <a href="javascript:;">
                    <img src="./main_cattab_1_sel.png" alt="">
                </a>
            </li>
            <li class="list">
                <a href="javascript:;">
                    <img src="./main_tab_2.png" alt="">
                </a>
            </li>
            <li class="list">
                <a href="javascript:;">
                    <img src="./main_tab_3.png" alt="">
                </a>
            </li>
            <li class="list">
                <a href="javascript:;">
                    <img src="./main_tab_4.png" alt="">
                </a>
            </li>
        </ul>
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
    .footernav
      position fixed
      bottom -1px
      left 0
      z-index 500
      border-top 1px solid #e7e7e7
      line-height 45px
      height 45px
      width 100%
      background #ffffff
      .item
        margin-top 2pxme
        .list
          width 25%
          height 55px
          float left
          text-align center
          a
            display block
            img
              height 40px
</style>
