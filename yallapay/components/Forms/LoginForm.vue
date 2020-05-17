<template>
    <form @submit.prevent="loginCheck" class="login-form">
     
               
    <h1 class="welcome">Welcome Back!</h1>
    <Controlinput name="email" type="text" v-model.trim="email" @input="setemail" placeHolder="email" iconClass="far fa-envelope">
 <div v-if="$v.email.$dirty">
              <div class="error" v-if="!$v.email.required">Email is required</div>
    </div>
    </Controlinput>
     <Controlinput name="password"  type="password" v-model.trim="password" @input="setPassword" placeHolder="Password" iconClass="fas fa-key">
           <div v-if="$v.password.$dirty">
              <div class="error" v-if="!$v.password.required">Password is required</div>
    </div>
     </Controlinput>
    <div class="loginFormBtn">
                    <button class="LoginForm-button">Login</button>
    </div>
    <span class="no-account">Don't have an account? <strong  v-on:click="$emit('toggle')" class="singup"  >Signup Now!</strong></span>
    </form>
</template>


<script>
import { required} from 'vuelidate/lib/validators'
import Controlinput from "~/components/UI/Controlinput"
import Button from "~/components/UI/button"
import Notification from "~/components/UI/Notification";

export default {
    components : {
        Controlinput,
        Button,
        Notification,
    },
   data() {
    return {
      email: '',
      password: '',
    }
  },
  validations: {
    email: {
      required,
    },
    password: {
    required,
    },
  },
   methods: {
    setemail(value) {
      this.email = value
      this.$v.email.$touch()
    },
    setPassword(value) {
      this.password = value;
      this.$v.password.$touch();
   },
   loginCheck(){
       this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
     this.$emit("submit",{
       loginField: this.email,
       password: this.password,
     })
      }

   }
},
}
</script>

<style lang="scss" scoped>
.login-form{
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.welcome{
    color:#044FAF;
}
.no-account {
    display: inline-block;
    margin-top: 10px;
}
.singup {
    color: #E94135;
    cursor: pointer;
}
.form-group--error {
   background-color: red;
}

.LoginForm-button {
      cursor: pointer;
      width: 120px;
      border-radius: 4px;
      padding: 5px;
      color: white;
      font-size: 14px;
      background-color: #044FAF;
      border: #044FAF;
      text-align: center;
      &:hover {
        border: 1px solid;
        background-color: rgb(5, 90, 201);
        border:rgb(5, 90, 201);
        color: white;
      }
      &:focus {
        outline: none;
      }
    }
      .error {
    color: #E94135;
    text-align: center;
  }
</style>