<template>
    <div>
        <ul class="imgItem">
            <li class="imgList">
                <a href="javascript">
                    <img src="./1.jpg" alt="" class="imgbanner">
                </a>
            </li>
            <li class="imgList">
                <a href="javascript">
                    <img src="./2.jpg" alt="" class="imgbanner">
                </a>
            </li>
            <li class="imgList">
                <a href="javascript">
                    <img src="./3.jpg" alt="" class="imgbanner">
                </a>
            </li>
            <li class="imgList">
                <a href="javascript">
                    <img src="./4.jpg" alt="" class="imgbanner">
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
