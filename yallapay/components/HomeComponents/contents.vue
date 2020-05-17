<template>
  <div class="home-page-contents">
    <img src="~/assets/images/contents-curve.svg" />

    <div class="container">
      <div class="first-content">
        <div class="row">
          <div class="col-lg-6 first-content-image">
            <img class="contentsIMAGE"  src="~/assets/images/home-contents1.png" />
          </div>
          <div class="col-lg-6 first-content-main">
            <div class="first-content-main_title">
              <h2>Move money for worldwide your startup business</h2>
            </div>
            <div
              class="first-content-main_sub"
            >Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create. Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create. Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create.</div>
            <div class="first-content-main_button">
              <Button btnStyle="red">GET STARTED NOW</Button>
            </div>
          </div>
        </div>
      </div>

      <div class="second-content mt-5">
        <div class="row">
          <div class="col-lg-6 second-content-main">
            <div class="second-content-main_title">
              <h2>Easily grow your business save more money</h2>
            </div>
            <div
              class="second-content-main_sub"
            >Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create. Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create. Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create.</div>
            <div class="second-content-main_button">
              <Button btnStyle="purple">GET STARTED NOW</Button>
            </div>
          </div>
          <div class="col-lg-6 second-content-image">
            <img class="contentsIMAGE"  src="~/assets/images/home-contents2.png" />
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
.contentsIMAGE{
  width: 500px;
}
.home-page-contents {
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
    &-main_button {
      width: 30%;
    }
  }
}

.second-content {
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
    &-main_button {
      width: 30%;
    }
  }
}

@media (max-width: 992px) {
  .contentsIMAGE{
  width: 300px;
}
  .home-page-contents {
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
            &_sub {

      width: 100%;
    }
    }

  }
}
</style>
