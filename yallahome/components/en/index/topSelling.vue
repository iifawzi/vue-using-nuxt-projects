<template>
    <div class="en-topSelling">
        <div class="en-topSelling-header">
            Top Selling On Yalla Dealz
        </div>
        <div class="en-topSelling-content">
      <topSellingCard discount="discount-green"  imgLink="https://source.unsplash.com/random?sig=29531111"/>
        <topSellingCard  discount="discount-red" imgLink="https://source.unsplash.com/random?sig=291303"/>
        <topSellingCard  discount="discount-green" imgLink="https://source.unsplash.com/random?sig=23303"/>
         <topSellingCard discount="discount-green" imgLink="https://source.unsplash.com/random?sig=233303"/>
          <topSellingCard discount="discount-red" imgLink="https://source.unsplash.com/random?sig=295870334"/>
        <topSellingCard  discount="discount-red" imgLink="https://source.unsplash.com/random?sig=29253303"/>
        <topSellingCard  discount="discount-green" imgLink="https://source.unsplash.com/random?sig=23403"/>
         <topSellingCard discount="discount-red" imgLink="https://source.unsplash.com/random?sig=2958754203"/>
            <topSellingCard discount="discount-red" imgLink="https://source.unsplash.com/random?sig=2303222"/>
        <topSellingCard  discount="discount-red" imgLink="https://source.unsplash.com/random?sig=2958389403"/>
        <topSellingCard  discount="discount-green" imgLink="https://source.unsplash.com/random?sig=29582753303"/>
         <topSellingCard discount="discount-red" imgLink="https://source.unsplash.com/random?sig=29233873"/>
        </div>
  
    </div>
</template>


<script>
import topSellingCard from "~/components/en/index/topSellingCard";
export default {
    components:{
        topSellingCard,
    }
}
</script>

<style lang="scss" scoped>
.en-topSelling{
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
        justify-content: space-between;
        flex-wrap: wrap;
    }
}
</style>