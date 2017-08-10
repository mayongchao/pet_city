<template>
    <div>
        <scroller>
            <div class="scrollPad">
                <slideCatFood></slideCatFood>

                <div class="catAppIcon">
                    <ul class="catItem clearfix">
                        <li class="catList">
                            <a href="javascript:;">
                                <img src="./jinkouCatFood.png" alt="">
                            </a>
                        </li>
                        <li class="catList">
                            <a href="javascript:;">
                                <img src="./guochanCatFood.png" alt="">
                            </a>
                        </li>
                        <li class="catList">
                            <a href="javascript:;">
                                <img src="./miniaoHuLi.png" alt="">
                            </a>
                        </li>
                        <li class="catList">
                            <a href="javascript:;">
                                <img src="./quqiuCatFood.png" alt="">
                            </a>
                        </li>
                    </ul>
                </div>

                <pageLine></pageLine>

                <div class="foodPro">
                    <ul class="foodList">
                        <li class="foodItem">
                            <p class="text">
                                <span class="bigTest">喜跃VS妙多乐</span>
                                <span class="litTest">1元换罐头</span>
                            </p>
                            <a href="javascript:;">
                                <img src="./slideCatFood03.jpg" alt="">
                            </a>
                        </li>
                        <li class="foodItem"    >
                            <p class="text">
                                <span class="bigTest">安娜玛特</span>
                                <span class="litTest">增强免疫,美毛粮</span>
                            </p>
                            <a href="javascript:;">
                                <img src="./wudigu.jpg" alt="">
                            </a>
                        </li>
                        <li class="foodItem">
                            <p class="text">
                                <span class="bigTest">蓝氏 天然营养</span>
                                <span class="litTest">调理肠胃,呵护被毛</span>
                            </p>
                            <a href="javascript:;">
                                <img src="./chuantianran.jpg" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="navbar">
                    <div class="page-navbar">
                        <!--<div class="page-title">Navbar</div>-->
                        <mt-navbar class="page-part" v-model="selected">
                            <mt-tab-item id="1">进口猫粮</mt-tab-item>
                            <mt-tab-item id="2">国产猫粮</mt-tab-item>
                            <mt-tab-item id="3">拆零试吃</mt-tab-item>
                            <mt-tab-item id="4">处方猫粮</mt-tab-item>
                        </mt-navbar>

                        <div>
                            <!--<mt-cell class="page-part" title="当前选中">{{ selected }}</mt-cell>-->
                        </div>

                        <mt-tab-container v-model="selected" class="container1">

                            <mt-tab-container-item id="1">
                                <!--<mt-cell v-for="n in 10" :title="'内容 ' + n" />-->
                                <ul class="catFoodItem">
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./America.jpg" alt="" class="litImg">
                                                <img src="./importImg.png" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./America.jpg" alt="" class="litImg">
                                                <img src="./importImg.png" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./America.jpg" alt="" class="litImg">
                                                <img src="./importImg.png" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./America.jpg" alt="" class="litImg">
                                                <img src="./importImg.png" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./America.jpg" alt="" class="litImg">
                                                <img src="./importImg.png" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./America.jpg" alt="" class="litImg">
                                                <img src="./importImg.png" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./America.jpg" alt="" class="litImg">
                                                <img src="./importImg.png" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./America.jpg" alt="" class="litImg">
                                                <img src="./importImg.png" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </mt-tab-container-item>

                            <mt-tab-container-item id="2">
                                <!--<mt-cell v-for="n in 4" :title="'测试 ' + n" />-->
                                <ul class="catFoodItem">
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./yingguo.jpg" alt="" class="litImg">
                                                <img src="./food2.jpg" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./yingguo.jpg" alt="" class="litImg">
                                                <img src="./food2.jpg" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./yingguo.jpg" alt="" class="litImg">
                                                <img src="./food2.jpg" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./yingguo.jpg" alt="" class="litImg">
                                                <img src="./food2.jpg" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./yingguo.jpg" alt="" class="litImg">
                                                <img src="./food2.jpg" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./yingguo.jpg" alt="" class="litImg">
                                                <img src="./food2.jpg" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./yingguo.jpg" alt="" class="litImg">
                                                <img src="./food2.jpg" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./yingguo.jpg" alt="" class="litImg">
                                                <img src="./food2.jpg" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./yingguo.jpg" alt="" class="litImg">
                                                <img src="./food2.jpg" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./yingguo.jpg" alt="" class="litImg">
                                                <img src="./food2.jpg" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./yingguo.jpg" alt="" class="litImg">
                                                <img src="./food2.jpg" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./yingguo.jpg" alt="" class="litImg">
                                                <img src="./food2.jpg" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </mt-tab-container-item>

                            <mt-tab-container-item id="3">
                                <!--<mt-cell v-for="n in 6" :title="'选项 ' + n" />-->
                                <ul class="catFoodItem">
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./America.jpg" alt="" class="litImg">
                                                <img src="./importImg.png" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./America.jpg" alt="" class="litImg">
                                                <img src="./importImg.png" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./America.jpg" alt="" class="litImg">
                                                <img src="./importImg.png" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./America.jpg" alt="" class="litImg">
                                                <img src="./importImg.png" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./America.jpg" alt="" class="litImg">
                                                <img src="./importImg.png" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./America.jpg" alt="" class="litImg">
                                                <img src="./importImg.png" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./America.jpg" alt="" class="litImg">
                                                <img src="./importImg.png" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./America.jpg" alt="" class="litImg">
                                                <img src="./importImg.png" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </mt-tab-container-item>

                            <mt-tab-container-item id="4">
                                <!--<mt-cell v-for="n in 6" :title="'选项 ' + n" />-->
                                <ul class="catFoodItem">
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./yingguo.jpg" alt="" class="litImg">
                                                <img src="./food2.jpg" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./yingguo.jpg" alt="" class="litImg">
                                                <img src="./food2.jpg" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./yingguo.jpg" alt="" class="litImg">
                                                <img src="./food2.jpg" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./yingguo.jpg" alt="" class="litImg">
                                                <img src="./food2.jpg" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./yingguo.jpg" alt="" class="litImg">
                                                <img src="./food2.jpg" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./yingguo.jpg" alt="" class="litImg">
                                                <img src="./food2.jpg" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./yingguo.jpg" alt="" class="litImg">
                                                <img src="./food2.jpg" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./yingguo.jpg" alt="" class="litImg">
                                                <img src="./food2.jpg" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./yingguo.jpg" alt="" class="litImg">
                                                <img src="./food2.jpg" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./yingguo.jpg" alt="" class="litImg">
                                                <img src="./food2.jpg" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./yingguo.jpg" alt="" class="litImg">
                                                <img src="./food2.jpg" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                    <li class="catFoodList">
                                        <div class="food clearfix">
                                            <div class="image">
                                                <img src="./yingguo.jpg" alt="" class="litImg">
                                                <img src="./food2.jpg" alt="" class="bigImg">
                                            </div>
                                            <div class="text">
                                                <p class="title">
                                                    美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg
                                                </p>
                                                <p class="price">
                                                    <span class="nowPrice">¥328.00</span>
                                                    <span class="oldPrice">24.29元/斤</span>
                                                </p>
                                                <p class="comment">
                                                    <span class="hudong">
                                                        互动:9676(96%好评)
                                                    </span>
                                                    <span class="sale">
                                                        售出:5928
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="shopcar">
                                                <img src="./addcart.png" alt="">
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </mt-tab-container-item>

                        </mt-tab-container>
                    </div>

                </div>
            </div>
        </scroller>
    </div>
</template>
<script>
    import slideCatFood from '../slideCatFood/slideCatFood.vue'
    import pageLine from '../pageLine/pageLine.vue'
//    import { Navbar, TabItem } from 'mint-ui';
    export default{
        name: 'page-navbar',
        data() {
            return {
                selected: '1'
            };
        },
        components:{
            slideCatFood,
            pageLine
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .scrollPad
      padding-top 91px
      padding-bottom 46px
      .catAppIcon
        .catItem
          padding 10px 0
          font-size 0
          .catList
            float left
            width 25%
            text-align center
            a
              display block
              img
                width 100%
                display block
                vertical-align middle



      .foodPro
        .foodList
          .foodItem
            .text
              padding 10px
              font-size 16px
              .litTest
                font-size 12px
                color #999
                margin-left 10px
            a
              display block
              img
                width 100%
                display block
                vertical-align middle

      .navbar
        .page-navbar
          .page-part
          .container1
            .catFoodItem
              .catFoodList
                .food
                  position relative
                  padding 10px
                  .image
                    float left
                    width 30%
                    position relative
                    .bigImg
                      width 100px
                      height 100px
                    .litImg
                      width 25px
                      height 25px
                      border-radius 50%
                      position absolute
                      top 0
                      left 0
                  .text
                    width 70%
                    float left
                    .title
                      padding-bottom 30px
                      height 32px
                      font-size 14px
                      line-height 16px
                      overflow hidden
                    .price
                      .nowPrice
                        font-size 14px
                        color red
                      .oldPrice
                        font-size 12px
                        color #999
                        margin-left 10px
                        text-decoration line-through
                    .comment
                      font-size 12px
                      color #999
                  .shopcar
                    position absolute
                    right 15px
                    bottom 0
                    width 30px
                    img
                      width 100%


</style>
