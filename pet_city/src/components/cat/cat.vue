<template>
    <div>
        <div class="zindex">
            <ad></ad>
            <pet-header></pet-header>


            <div class="navbarScroll" ref="navbar">
                <ul class="tab clearfix" ref="tabs">
                    <li class="tab-item" ref="tabItem">
                        <router-link to="/epet/cat/home" class="tab-item-list ">首页</router-link>
                    </li>
                    <li class="tab-item">
                        <router-link to="/epet/cat/catFood" class="tab-item-list">猫粮</router-link>
                    </li>
                    <li class="tab-item">
                        <router-link to="/epet/cat/sale" class="tab-item-list">特卖</router-link>
                    </li>
                    <li class="tab-item">
                        <router-link to="/epet/cat/canSupermarket" class="tab-item-list">罐头超市</router-link>
                    </li>
                    <li class="tab-item">
                        <router-link to="/epet/cat/video" class="tab-item-list">潮品视频</router-link>
                    </li>
                    <li class="tab-item">
                        <router-link to="/epet/cat/catClassRome" class="tab-item-list">猫咪课堂</router-link>
                    </li>
                </ul>
            </div>


        </div>


        <router-view></router-view>

        <footernav></footernav>
    </div>




</template>
<script>
    import BScroll from 'better-scroll'
    import header from '../header/header.vue'
    import footernav from '../footernav/footernav.vue'
    import ad from '../ad/ad.vue'

    export default{
        data(){
            return {}
        },
        created(){

            this.$nextTick(()=>{
                let tabchild = this.$refs.tabs.childElementCount
                console.log(tabchild)
                let itemLength = this.$refs.tabItem.clientWidth
                console.log(itemLength)
                this.$refs.tabs.style.width=itemLength * tabchild +'px'
                console.log(this.$refs.tabs.style.width)

                if(!this.navScroll){
                    this.navScroll = new BScroll(this.$refs.navbar,{
                        click:true,
                        scrollX: 'true'
                    })
                }else {
                    this.navScroll.refresh()
                }

            })
        },
        components: {
            "pet-header": header,
            footernav,
            ad
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
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
            .navbarScroll
                .tab
                    /*width 120%*/
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
                    margin-top -5px
</style>
