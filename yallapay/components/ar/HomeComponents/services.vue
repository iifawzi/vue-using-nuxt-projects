<template>
  <div class="home-page-services">
    <img class="why-curve" src="~/assets/images/services-curve.svg" />
    <div class="container">
      <div class="row">
        <div class="home-page-services_content col-12 text-center">
          <h1 class="home-page-services_content-main">
           
            <span class="firstWord">Yalla</span><span class="secondWord">Pay</span> الخدمات التي تقدمها
          </h1>
          <span
            class="home-page-services_content-sub"
          >و أخذ دفّة أطراف, أخذ أم تجهيز التّحول. بـ لها إعادة عالمية أوروبا, شمال معاملة عل حتى. انه إذ الأخذ العدّ العاصمة. بقسوة العالمي الحيلولة تم عرض, عدم هو السيء إنطلاق</span>
        </div>
      </div>
      <div class="row mt-6">
        <div class="col-md-3">
          <WalkkiCard withBGonHover="basic" walkkiCardICON="fas fa-assistive-listening-systems">نقل الاموال</WalkkiCard>
        </div>
        <div class="col-md-3">
          <WalkkiCard withBGonHover="basic" walkkiCardICON="fab fa-app-store-ios">ايداع بنكي</WalkkiCard>
        </div>
        <div class="col-md-3">
          <WalkkiCard withBGonHover="basic" walkkiCardICON="fab fa-algolia">التسوق الالكتروني</WalkkiCard>
        </div>
        <div class="col-md-3">
          <WalkkiCard withBGonHover="basic" walkkiCardICON="fab fa-airbnb">الدفع الالكتروني</WalkkiCard>
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
