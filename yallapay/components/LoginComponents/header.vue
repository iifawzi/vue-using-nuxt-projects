<template>
    <div class="login-header">
        <div class="login-header-overlay">
        <Navbar nologin navType="notSticky" itemsColor="text-whitee" boxColor="box-whitee" />
        <div class="login-header_contents">
  <authForm />
        </div>
        </div>
    </div>
</template>

<script>
import Navbar from "~/components/Navigation/navbar.vue"
import authForm from "~/components/Forms/authForm.vue"

export default {
  components:{
    Navbar,
    authForm,
  }
}
</script>

<style lang="scss" scoped>
.login-header{
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