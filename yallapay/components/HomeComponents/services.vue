<template>
  <div class="home-page-services">
    <img class="why-curve" src="~/assets/images/services-curve.svg" />
    <div class="container">
      <div class="row">
        <div class="home-page-services_content col-12 text-center">
          <h1 class="home-page-services_content-main">
            <span class="firstWord">Yalla</span><span class="secondWord">Pay</span> online plateform
            services worldwide
          </h1>
          <span
            class="home-page-services_content-sub"
          >Help agencies to define their new business objectives and then create professional software.</span>
        </div>
      </div>
      <div class="row mt-6">
        <div class="col-md-3">
          <WalkkiCard withBGonHover="basic" walkkiCardICON="fas fa-assistive-listening-systems">Money Transfer</WalkkiCard>
        </div>
        <div class="col-md-3">
          <WalkkiCard withBGonHover="basic" walkkiCardICON="fab fa-app-store-ios">Bank deposit</WalkkiCard>
        </div>
        <div class="col-md-3">
          <WalkkiCard withBGonHover="basic" walkkiCardICON="fab fa-algolia">Online Shopping</WalkkiCard>
        </div>
        <div class="col-md-3">
          <WalkkiCard withBGonHover="basic" walkkiCardICON="fab fa-airbnb">Online payment</WalkkiCard>
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
.home-page-services_content {
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
@media (max-width: 576px) {
  .home-page-services_content {
    &-sub {
      font-size: 18px;
      display: inline-block;
      color: rgb(129, 129, 129);
    }
    &-main {
      font-size: 30px;
    }
  }
}
</style>
