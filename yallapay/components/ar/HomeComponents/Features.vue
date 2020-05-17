<template>
  <div class="home-page-features pt-5">
    <div class="container">
      <div class="row">
        <div class="home-page-features_content col-12 text-center">
          <h1 class="home-page-features_content-main">
            <span class="firstWord">Yalla</span><span class="secondWord">Pay</span> مميزات
          </h1>
          <span
            class="home-page-features_content-sub"
          >و أخذ دفّة أطراف, أخذ أم تجهيز التّحول. بـ لها إعادة عالمية أوروبا, شمال معاملة عل حتى. انه إذ الأخذ العدّ العاصمة. بقسوة العالمي الحيلولة تم عرض, عدم هو السيء إنطلاق
</span>
        </div>
      </div>
      <div class="row mt-6">
        <div class="col-md-3">
          <WalkkiCard withBGonHover="coloredHover" walkkiCardICON="fas fa-assistive-listening-systems">كاشف تزوير</WalkkiCard>
        </div>
        <div class="col-md-3">
          <WalkkiCard  withBGonHover="coloredHover" walkkiCardICON="fab fa-app-store-ios">مسؤول دعم</WalkkiCard>
        </div>
        <div class="col-md-3">
          <WalkkiCard  withBGonHover="coloredHover" walkkiCardICON="fab fa-algolia">محدث بيانات</WalkkiCard>
        </div>
        <div class="col-md-3">
          <WalkkiCard  withBGonHover="coloredHover" walkkiCardICON="fab fa-airbnb">فواتير الدفع</WalkkiCard>
        </div>      
      </div>
            <div class="row second-feat">
        <div class="offset-md-3 col-md-3">
          <WalkkiCard  withBGonHover="coloredHover" walkkiCardICON="fab fa-500px">انواع الدفع</WalkkiCard>
        </div>
        <div class="  col-md-3">
          <WalkkiCard  withBGonHover="coloredHover" walkkiCardICON="fab fa-affiliatetheme">الدفع بسهوله</WalkkiCard>
        </div>      
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/ar/UI/button.vue";
import VerticalCard from "~/components/ar/UI/VerticalCard.vue";
import WalkkiCard from "~/components/ar/UI/walkkiCard.vue";
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
