<template>
    <div class="ad" v-show="adisShow">
        <a href="javascript:;">
            <img src="./xiazaiapp.png" alt="" class="appDown">
            <img src="./closebtn_03.png" alt="" class="btnClose" @click="close">
        </a>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                adisShow:true
            }
        },
        methods:{
            close(){
                this.adisShow = false
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .ad
      position relative
      width 100%
      a
        display block
        font-size 0
        .appDown
          width 100%
        .btnClose
          width 5%
          position absolute
          top 30%
          left 2%
</style>
