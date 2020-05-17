<template>
    <div class="en-bestReviews">
        <div class="en-bestReviews-header">
            Best Reviews On Yalla Dealz
        </div>
        <div class="en-bestReviews-content">
      <bestReviewsCard discount="discount-green"  imgLink="https://source.unsplash.com/random?sig=2029"/>
        <bestReviewsCard  discount="discount-red" imgLink="https://source.unsplash.com/random?sig=239310"/>
        <bestReviewsCard  discount="discount-green" imgLink="https://source.unsplash.com/random?sig=2958753303"/>
         <bestReviewsCard discount="discount-green" imgLink="https://source.unsplash.com/random?sig=267587587594"/>
          <bestReviewsCard discount="discount-red" imgLink="https://source.unsplash.com/random?sig=218587594"/>
        <bestReviewsCard  discount="discount-red" imgLink="https://source.unsplash.com/random?sig=29587323"/>
        <bestReviewsCard  discount="discount-green" imgLink="https://source.unsplash.com/random?sig=25879221"/>
         <bestReviewsCard discount="discount-red" imgLink="https://source.unsplash.com/random?sig=2912131"/>
            <bestReviewsCard discount="discount-red" imgLink="https://source.unsplash.com/random?sig=2939823"/>
        <bestReviewsCard  discount="discount-red" imgLink="https://source.unsplash.com/random?sig=2956543892"/>
        <bestReviewsCard  discount="discount-green" imgLink="https://source.unsplash.com/random?sig=221133921"/>
         <bestReviewsCard discount="discount-red" imgLink="https://source.unsplash.com/random?sig=29115624"/>
        </div>
  
    </div>
</template>


<script>
import bestReviewsCard from "~/components/en/index/bestReviewsCard";
export default {
    components:{
        bestReviewsCard,
    }
}
</script>

<style lang="scss" scoped>
.en-bestReviews{
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