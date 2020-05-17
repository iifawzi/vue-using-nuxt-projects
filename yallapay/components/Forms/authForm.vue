<template>
        <div class="main-login-section">
          <div class="errors">
            <Notification
              v-for="error in errors"
              notfiType="failed"
              :key="error.msg "
              :message="error.msg "
            />
            <Notification
              v-if="success != null"
              notfiType="success"
              :key="success"
              :message="success"
            />
          </div>
          <LoginForm v-if="toggleForm" @submit="onSubmitted" v-on:toggle="toggleTheForm" />
          <RegisterForm v-if="!toggleForm" @submit="onRegister" @toggle="toggleTheForm" />
        </div>
 
</template>

<script>
import LoginForm from "~/components/Forms/LoginForm";
import RegisterForm from "~/components/Forms/RegisterForm";
import Notification from "~/components/UI/Notification";
import Cookie from "js-cookie";
export default {
  data() {
    return {
      errors: [],
      success: null,
      toggleForm: true
    };
  },
  components: {
    LoginForm,
    RegisterForm,
    Notification
  },
  methods: {
     onSubmitted(userData){
            this.errors = [];
            this.$axios.post("https://yalla-ebdaa.herokuapp.com/api/user/login",userData).then(result=>{
                 this.$store.commit("setToken",result.data.token);
                 this.$store.dispatch("setLogoutTimer",3600*1000);
                  this.$router.push("/");
                localStorage.setItem("token",result.data.token);
                localStorage.setItem("tokenExpiration",new Date().getTime() + 3600*1000);
                Cookie.set("jwt",result.data.token);
                Cookie.set("expirationDate",new Date().getTime() + 3600*1000)
            }).catch(error=>{
              console.log(error);
                 this.errors.push(error.response.data);
            })
        },
        onRegister(registerinfo){
        this.errors = [];
        this.$axios.post("https://yalla-ebdaa.herokuapp.com/api/user/signup",registerinfo).then(result=>{
          console.log(result);
        this.success = result.data.msg;
        }).catch(error=>{
         this.errors.push(...error.response.data.data);
        })
    },
    toggleTheForm() {
      this.toggleForm = !this.toggleForm;
      this.errors = [];
      this.success = null;
    }
  }
};
</script>

<style class="scoped" lang="scss">
.main-login-section {
    margin-top: -35px;
  border-radius: 30px;
  width: 500px;
  min-height: 500px;
  height: auto;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .main-login-section {
     margin-top: 100px;
  }
}
</style>