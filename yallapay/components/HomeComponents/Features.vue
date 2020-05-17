<template>
  <div class="home-page-features pt-5">
    <div class="container">
      <div class="row">
        <div class="home-page-features_content col-12 text-center">
          <h1 class="home-page-features_content-main">
            <span class="firstWord">Yalla</span><span class="secondWord">Pay</span> Core features
          </h1>
          <span
            class="home-page-features_content-sub"
          >Help agencies to define their new business objectives and then create professional software.</span>
        </div>
      </div>
      <div class="row mt-6">
        <div class="col-md-3">
          <WalkkiCard withBGonHover="coloredHover" walkkiCardICON="fas fa-assistive-listening-systems">Fraud detection</WalkkiCard>
        </div>
        <div class="col-md-3">
          <WalkkiCard  withBGonHover="coloredHover" walkkiCardICON="fab fa-app-store-ios">Support manager</WalkkiCard>
        </div>
        <div class="col-md-3">
          <WalkkiCard  withBGonHover="coloredHover" walkkiCardICON="fab fa-algolia">Account updater</WalkkiCard>
        </div>
        <div class="col-md-3">
          <WalkkiCard  withBGonHover="coloredHover" walkkiCardICON="fab fa-airbnb">Payment invoice</WalkkiCard>
        </div>      
      </div>
            <div class="row second-feat">
        <div class="offset-md-3 col-md-3">
          <WalkkiCard  withBGonHover="coloredHover" walkkiCardICON="fab fa-500px">Payments types</WalkkiCard>
        </div>
        <div class="  col-md-3">
          <WalkkiCard  withBGonHover="coloredHover" walkkiCardICON="fab fa-affiliatetheme">Simple checkout</WalkkiCard>
        </div>      
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/UI/button.vue";
import VerticalCard from "~/components/UI/VerticalCard.vue";
import WalkkiCard from "~/components/UI/walkkiCard.vue";
export default {
  components: {
    Button,
    VerticalCard,
    WalkkiCard
  }
};
</script>

<style lang="scss" scoped>
.home-page-features_content {
  color: #1b3861;
  &-sub {
    font-size: 18px;
    display: inline-block;
    color: rgb(129, 129, 129);
  }
  &-main {
    font-size: 50px;
  }
}
.second-feat{
  margin-top: 25px;
}
@media (max-width: 576px) {
  .home-page-features_content {
    &-sub {
      font-size: 18px;
      display: inline-block;
      color: rgb(129, 129, 129);
    }
    &-main {
      font-size: 30px;
    }
  }
  .second-feat{
  margin-top: 0px;
}
}
</style>
