<template>
  <div class="home-page-why">
    <img src="~/assets/images/widgets-curve.svg" />
    <div class="container">
      <div class="row">
        <div class="home-page-why_content col-12 text-center">
          <h1 class="home-page-why_content-main">
            Why choose
            <span class="firstWord">Yalla</span><span class="secondWord">Pay</span> online plateform
          </h1>
          <span
            class="home-page-why_content-sub"
          >Help agencies to define their new business objectives and then create professional software.</span>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-lg-6 col-md-12 mt-5">
          <div class="col-md-12 mt-3">
            <HorizCard
              iconH="fas fa-globe-europe"
              title="Professional Services"
            >Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create</HorizCard>
          </div>
          <div class="col-md-12 mt-3">
            <HorizCard
              iconH="fas fa-address-card"
              title="Low Costing"
            >Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create</HorizCard>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 mt-3">
          <div class="col-md-12 mt-3">
            <HorizCard
              iconH="fab fa-accusoft"
              title="
Safe & Security"
            >Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create</HorizCard>
          </div>
          <div class="col-md-12 mt-3">
            <HorizCard
              iconH="fas fa-archway"
              title="Live Support"
            >Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create</HorizCard>
          </div>
        </div>
      </div>
      <div class="why-access mt-4">
        <Button class="mt-3 col-4 col-lg-2 mr-4" btnStyle="purple">About us</Button>
        <WalkiText class="align-self-center newAcc mt-2">Create new account</WalkiText>
      </div>
    </div>
  </div>
</template>

<script>
import HorizCard from "~/components/UI/HorizCard.vue";
import Button from "~/components/UI/button.vue";
import WalkiText from "~/components/UI/walkkiText.vue";
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
