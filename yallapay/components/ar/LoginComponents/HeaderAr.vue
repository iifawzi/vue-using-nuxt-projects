<template>
    <div class="login-header-ar">
        <div class="login-header-ar-overlay">
        <navbarAr nologin navType="notSticky" itemsColor="text-whitee" boxColor="box-whiteAr" />
        <div class="login-header-ar_contents">
  <authForm />
        </div>
        </div>
    </div>
</template>

<script>
import NavbarAr from "~/components/ar/Navigation/navbarAr.vue"
import authForm from "~/components/ar/Forms/authForm.vue"

export default {
  components:{
    NavbarAr,
    authForm,
  }
}
</script>

<style lang="scss" scoped>
.login-header-ar{
  background-image: url("~assets/images/login-header.jpg");
background-repeat: no-repeat;
  background-size: cover;
    width: 100%;
    height: 100vh;
    &-overlay{
        background-color: rgba(24, 21, 34, 0.788);
        height: 100vh;
    }
    &_contents{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 5%;
    }
}
</style>