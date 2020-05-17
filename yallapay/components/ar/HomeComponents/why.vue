<template>
  <div class="home-page-why">
    <img src="~/assets/images/widgets-curve.svg" />
    <div class="container">
      <div class="row">
        <div class="home-page-why_content col-12 text-center">
          <h1 class="home-page-why_content-main">
             <span class="firstWord">Yalla</span><span class="secondWord">Pay</span> 
            ليه 
          </h1>
          <span
            class="home-page-why_content-sub"
          >و أخذ دفّة أطراف, أخذ أم تجهيز التّحول. بـ لها إعادة عالمية أوروبا, شمال معاملة عل حتى. انه إذ الأخذ العدّ العاصمة. بقسوة العالمي الحيلولة تم عرض, عدم هو السيء إنطلاق</span>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-lg-6 col-md-12 mt-5">
          <div class="col-md-12 mt-3">
            <HorizCard
              iconH="fas fa-globe-europe"
              title="خدمات احترافية"
            >و أخذ دفّة أطراف, أخذ أم تجهيز التّحول. بـ لها إعادة عالمية أوروبا, شمال معاملة عل حتى. انه إذ الأخذ العدّ العاصمة. بقسوة العالمي الحيلولة تم عرض, عدم هو السيء إنطلاق</HorizCard>
          </div>
          <div class="col-md-12 mt-3">
            <HorizCard
              iconH="fas fa-address-card"
              title="تكلفه قليلة"
            >و أخذ دفّة أطراف, أخذ أم تجهيز التّحول. بـ لها إعادة عالمية أوروبا, شمال معاملة عل حتى. انه إذ الأخذ العدّ العاصمة. بقسوة العالمي الحيلولة تم عرض, عدم هو السيء إنطلاق</HorizCard>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 mt-3">
          <div class="col-md-12 mt-3">
            <HorizCard
              iconH="fab fa-accusoft"
              title="
الامن والآمان"
            >و أخذ دفّة أطراف, أخذ أم تجهيز التّحول. بـ لها إعادة عالمية أوروبا, شمال معاملة عل حتى. انه إذ الأخذ العدّ العاصمة. بقسوة العالمي الحيلولة تم عرض, عدم هو السيء إنطلاق</HorizCard>
          </div>
          <div class="col-md-12 mt-3">
            <HorizCard
              iconH="fas fa-archway"
              title="دعم على مدار الساعة"
            >و أخذ دفّة أطراف, أخذ أم تجهيز التّحول. بـ لها إعادة عالمية أوروبا, شمال معاملة عل حتى. انه إذ الأخذ العدّ العاصمة. بقسوة العالمي الحيلولة تم عرض, عدم هو السيء إنطلاق</HorizCard>
          </div>
        </div>
      </div>
      <div class="why-access mt-4">
        <Button class="mt-3 col-4 col-lg-2 mr-4" btnStyle="purple">من نحن</Button>
        <WalkiText class="align-self-center newAcc mt-2">عمل حساب جديد</WalkiText>
      </div>
    </div>
  </div>
</template>

<script>
import HorizCard from "~/components/ar/UI/HorizCard.vue";
import Button from "~/components/ar/UI/button.vue";
import WalkiText from "~/components/ar/UI/walkkiText.vue";
export default {
  components: {
    HorizCard,
    Button,
    WalkiText
  }
};
</script>
<style lang="scss" scoped>
.home-page-why {
  background-color: #fafafa;
}
.home-page-why_content {
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
.secondWord {
  color: #5271ff;
}
.firstWord {
  color: #e03a3f;
}
.why-access {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
}
@media (max-width: 576px) {
  .home-page-why_content {
    margin-top: 150px;
    &-main {
      font-size: 30px;
    }
  }
}
@media (max-width: 768px) {
  .home-page-why {
    margin-top: 50px;
  }
}
</style>
