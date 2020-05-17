<template>
    <div class="en-trending">
        <div class="en-trending-header">
            Trending On Yalla Dealz
        </div>
        <div class="en-trending-content">
      <trendingCard discount="discount-green"  imgLink="https://source.unsplash.com/random?sig=299931"/>
        <trendingCard  discount="discount-red" imgLink="https://source.unsplash.com/random?sig=2958753222303"/>
        <trendingCard  discount="discount-green" imgLink="https://source.unsplash.com/random?sig=29587533033333"/>
         <trendingCard discount="discount-green" imgLink="https://source.unsplash.com/random?sig=29587533031239883893"/>
          <trendingCard discount="discount-red" imgLink="https://source.unsplash.com/random?sig=29587533038478"/>
        <trendingCard  discount="discount-red" imgLink="https://source.unsplash.com/random?sig=2958753303874874"/>
        <trendingCard  discount="discount-green" imgLink="https://source.unsplash.com/random?sig=295875330378487"/>
         <trendingCard discount="discount-red" imgLink="https://source.unsplash.com/random?sig=2958753303874874"/>
            <trendingCard discount="discount-red" imgLink="https://source.unsplash.com/random?sig=2958753303874784"/>
        <trendingCard  discount="discount-red" imgLink="https://source.unsplash.com/random?sig=295875330387474"/>
        <trendingCard  discount="discount-green" imgLink="https://source.unsplash.com/random?sig=2958753303784784"/>
         <trendingCard discount="discount-red" imgLink="https://source.unsplash.com/random?sig=295875330387487411"/>
        </div>
  
    </div>
</template>


<script>
import trendingCard from "~/components/en/index/trendingCard";
export default {
    components:{
        trendingCard,
    }
}
</script>

<style lang="scss" scoped>
.en-trending{
    width: 100%;
    margin-top: 50px;
    &-header{
        font-size: 24px;
        font-weight: 900;
        margin-bottom: 30px;
    }
    &-content{
        display: flex;
        flex-flow: row;
        justify-content: space-around;
        flex-wrap: wrap;
    }
}
</style>