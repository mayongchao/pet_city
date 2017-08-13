<template>
    <div>
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
    .imgItem
      background-color #F3F4F5
      .imgList
        margin-top 10px
        a
          .imgbanner
            width 100%
</style>
