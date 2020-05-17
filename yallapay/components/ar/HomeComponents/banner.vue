<template>
  <div class="main-banner mt-5">
    <div class="main-banner-overlay pt-7">
        <div class="main-banner-content">
 <h1 class="main-banner-content_text">نفتخر بشركائنا حول العالم اجمع</h1>
 <div class="main-banner-content_button">
 <Button btnStyle="green">فتح حساب جديد</Button>
 </div>

        </div>
    </div>
  </div>
</template>
<script>
import Button from "~/components/UI/button.vue";
export default {
  components: {
    Button
  }
};
</script>

<style lang="scss">
.main-banner {
  background-image: url("~assets/images/home-banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% 50%;
  min-height: 400px;
  &-overlay {
    background-color: rgba(24, 21, 34, 0.788);
    z-index: 500;
    min-height: 400px;

  }
  &-content{
      color: white;
      text-align: center;
      padding-bottom: 50px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
        &_text{
width: 70%;
  }
  }

}
</style>