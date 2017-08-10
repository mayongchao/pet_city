<template>
    <div>
        <div class="zindex">

            <pet-header></pet-header>

            <ul class="tab clearfix">
                <li class="tab-item">
                    <router-link to="/home" class="tab-item-list">首页</router-link>
                </li>
                <li class="tab-item">
                    <router-link to="/catFood" class="tab-item-list">猫粮</router-link>
                </li>
                <li class="tab-item">
                    <router-link to="/sale" class="tab-item-list">特卖</router-link>
                </li>
                <li class="tab-item">
                    <router-link to="/canSupermarket" class="tab-item-list">罐头超市</router-link>
                </li>
                <li class="tab-item">
                    <router-link to="/video" class="tab-item-list">潮品视频</router-link>
                </li>
                <li class="tab-item">
                    <router-link to="/catClassRome" class="tab-item-list">猫咪课堂</router-link>
                </li>
            </ul>

        </div>


        <router-view></router-view>

        <footernav></footernav>
    </div>
</template>
<script>
    import header from './components/header/header.vue'
    import footernav from './components/footernav/footernav.vue'
    export default{
        data(){
            return {}
        },
        components: {
            "pet-header": header,
            footernav
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
   /* html,body
        height 100%;
        overflow hidden;*/
 body,html
   line-height: 1.6;
   font-family: 'Microsoft Yahei',-apple-system-font,Helvetica Neue,sans-serif;
   height 100%;
   overflow hidden
   .clearfix:after
       content ""
       display block
       clear both
   .zindex
     position relative
     z-index 1000
     background-color #ffffff
     .tab
        width 120%
        height 36px
       .tab-item
          float left
          line-height 36px
          width 75px
          text-align center
         a
           font-size 14px
           color #666
         a:hover
           color #e73f85
         .tab-item-list:hover:after
          content ""
          display block
          height 2px
          background-color #e73f85
         .active
           color #e73f85
         .active:after
           content ""
           display block
           width 100%
           height 2px
           background-color #e73f85

</style>
