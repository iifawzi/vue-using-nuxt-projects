<template>
  <div class="home-page-headerAr">
    <div class="nav-overlayAr">
      <NavbarAr navType="notSticky" itemsColor="text-whitee" boxColor="box-whiteAr" />
    </div>
    <div class="full-height-wrapper">
      <div class="home-page-headerAr_overlay">
        <div class="container">
          <div class="home-page-headerAr_content text-white">
            <span
              class="home-page-headerAr_content-main_statement display-4"
            >عملية الدفع، بقت اسهل بكتير</span>
            <span class="home-page-headerAr_content-sub_statement mt-4">
              السرعه والسهوله اللي محتاجها عشان تبدا تستقبل وترسل
            </span>
            <div class="home-page-headerAr_content-button">
              <Button class="mt-3" btnStyle="red">ابدا الأن</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/ar/UI/button.vue";
import NavbarAr from "~/components/ar/Navigation/navbarAr.vue";

export default {
  components: {
    Button,
    NavbarAr
  }
};
</script>

<style lang="scss" scoped>
.nav-overlayAr {
  background-color: rgba(19, 22, 37, 0.788);
}
.home-page-headerAr {
  background-image: url("~assets/images/home-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  text-align: right;
  &_overlay {
    background-color: rgba(24, 21, 34, 0.788);
  }
  &_content {
    height: 100vh;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-end;
    &-main_statement {
      width: 50%;
    }
    &-sub_statement {
      width: 40%;
      font-size: 20px;
    }
    &-button {
      width: 15%;
    }
  }
}

@media (max-width: 992px) {
  .home-page-headerAr {
    text-align: center;
    &_content {
      align-items: center;
      &-main_statement {
        width: 100%;
      }
      &-sub_statement {
        width: 100%;
        font-size: 20px;
      }
      &-button {
        width: 20%;
      }
    }
  }
}
@media (max-width: 768px) {
  .home-page-headerAr {
    &_content {
      &-main_statement {
        width: 100%;
      }
      &-sub_statement {
        width: 100%;
        font-size: 25px;
      }
      &-button {
        width: 30%;

      }
    }
  }
}

@media (max-width: 576px) {
  .home-page-headerAr {
    &_content {
      &-main_statement {
        width: 100%;
        font-size: 40px;
      }
      &-sub_statement {
        width: 100%;
        font-size: 25px;
      }
      &-button {
        width: 80%;
      }
    }
  }
}
</style>
