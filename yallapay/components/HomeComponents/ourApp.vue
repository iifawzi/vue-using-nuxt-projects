<template>
  <div class="home-page-ourApp">
    <img src="~/assets/images/contents-curve.svg" />

    <div class="container">
      <div class="first-content">
        <div class="row">
          <div class="col-lg-6 first-content-image">
            <img class="ourAppIMG" src="~/assets/images/our-application.png" />
          </div>
          <div class="col-lg-6 first-content-main">
            <div class="first-content-main_title">
              <h2>Download our apps of your mobile phone for service</h2>
            </div>
            <div
              class="first-content-main_sub"
            >Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then createReplacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then createReplacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create.</div>
            <div class="first-content-main_buttons" style="width:100%">
              <Button class="buttonsOUR"  btnStyle="blue">App Store</Button>
              <Button  class="buttonsOUR"  btnStyle="green">Play Store</Button>
            </div>
          </div>
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

<style lang="scss" scoped>
.ourAppIMG{
width:500px;
}
.buttonsOUR{
  width: 30%;
}
.home-page-ourApp {
  background-color: #fafafa;
  overflow-x: hidden;
}
.first-content {
  padding: 10px;
  &-image {
    text-align: center;
  }
  &-main {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    &_title {
      color: #1b3861;
      font-size: 20px;
      margin-bottom: 10px;
    }
    &_sub {
      color: rgb(129, 129, 129);
      margin-bottom: 20px;
      width: 80%;
    }
  }
}
@media (max-width: 992px) {
  .ourAppIMG{
width:300px
}
.buttonsOUR{
  width: 40%;
}
  .home-page-ourApp {
    text-align: center;
  }
  .first-content {
    &-main {
      align-items: center;
            &_sub {
      width: 100%;
    }
    }
  }

  .second-content {
    padding: 10px;
    &-image {
      text-align: center;
    }
    &-main {
      align-items: center;
    }
  }
}
</style>
