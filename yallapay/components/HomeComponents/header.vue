<template>
  <div class="home-page-header">
    <div class="nav-overlay">
      <Navbar navType="notSticky" itemsColor="text-whitee" boxColor="box-white" />
    </div>
    <div class="full-height-wrapper">
      <div class="home-page-header_overlay">
        <div class="container">
          <div class="home-page-header_content text-white">
            <span
              class="home-page-header_content-main_statement display-4"
            >Move money in easy secure steps</span>
            <span class="home-page-header_content-sub_statement mt-4">
              Fast and easy you want to be more secure send and recives money
              sort time
            </span>
            <div class="home-page-header_content-button">
              <Button class="mt-3" btnStyle="red">Get started</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/UI/button.vue";
import Navbar from "~/components/Navigation/navbar.vue";

export default {
  components: {
    Button,
    Navbar
  },
};
</script>

<style lang="scss" scoped>
.nav-overlay {
  background-color: rgba(19, 22, 37, 0.788);
}
.home-page-header {
  background-image: url("~assets/images/home-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  &_overlay {
    background-color: rgba(24, 21, 34, 0.788);
  }
  &_content {
    height: 100vh;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
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
  .home-page-header {
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
  .home-page-header {
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
  .home-page-header {
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
