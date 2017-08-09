<template>
    <div ref="proWrapper">
        <ul class="proList" ref="product">
            <li class="proItem">
                <a href="javacript:;">
                    <img src="./2566c58cdd7c2b7979778cc2fd0ef4bd.jpg" alt="">
                    <p class="newPrice">¥105.00</p>
                    <p>省¥68.00</p>
                </a>
            </li>
            <li class="proItem">
                <a href="javacript:;">
                    <img src="./2e8f112d1a5be7af476a9960347ae7ab.jpg" alt="">
                    <p class="newPrice">¥105.00</p>
                    <p>省¥68.00</p>
                </a>
            </li>
            <li class="proItem">
                <a href="javacript:;">
                    <img src="./080e859d9190392547d18213f2522dff.jpg" alt="">
                    <p class="newPrice">¥105.00</p>
                    <p>省¥68.00</p>
                </a>
            </li>
            <li class="proItem">
                <a href="javacript:;">
                    <img src="./a79844fd57499ca7033706b03bf5c905.jpg" alt="">
                    <p class="newPrice">¥105.00</p>
                    <p>省¥68.00</p>
                </a>
            </li>
            <li class="proItem">
                <a href="javacript:;">
                    <img src="./585d5aa19e6a9f8c836e0c8bd19556b8.png" alt="">
                    <p class="newPrice">¥105.00</p>
                    <p>省¥68.00</p>
                </a>
            </li>
            <li class="proItem">
                <a href="javacript:;">
                    <img src="./1054f592f7704154e29723cea65a687c.jpg" alt="">
                    <p class="newPrice">¥105.00</p>
                    <p>省¥68.00</p>
                </a>
            </li>
            <li class="proItem">
                <a href="javacript:;">
                    <img src="./141fd95df382df48f32d2be9b7bcf5bb.jpg" alt="">
                    <p class="newPrice">¥105.00</p>
                    <p>省¥68.00</p>
                </a>
            </li>
            <li class="proItem">
                <a href="javacript:;">
                    <img src="./495d4b3a9eb276c5095a449fca3de1e2.jpg" alt="">
                    <p class="newPrice">¥105.00</p>
                    <p>省¥68.00</p>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    import BScroll from 'better-scroll'
    export default{
        data(){
            return {}
        },
        created(){
            this.$nextTick(()=>{
                this.$refs.product.style.width = 83*8 + 'px';
                this.$refs.product.style.height = 133 + 'px';
                new BScroll(this.$refs.proWrapper,{
                    click:true,
                    scrollX: 'true'
                })
            })
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .proList
     .proItem
        float left
     a
         display inline-block
         text-align center
      img
        width 83px
        height 83px
      .newPrice
        color red
        margin-top 5px


</style>
