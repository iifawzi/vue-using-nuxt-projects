<template>
    <div class="en-signForm">
            <div class="en-signForm-content">
                <div class="en-signForm-content-inputs">
                    <div class="en-signForm-content-inputs-input">
                        <label class="en-signForm-content-inputs-input-label">Email</label>
                        <input class="en-signForm-content-inputs-input-inp" v-model="email" @input="setEmail($event.target.value)" type="text">
                           <div v-if="$v.email.$dirty">
              <div class="error" v-if="!$v.email.required">Email is required</div>
            </div>
                    </div>
                     <div class="en-signForm-content-inputs-input">
                        <label class="en-signForm-content-inputs-input-label">Password</label>
                        <input class="en-signForm-content-inputs-input-inp" v-model="password" @input="setPassword($event.target.value)" type="text">
                        <div v-if="$v.password.$dirty">
                            <div class="error" v-if="!$v.password.required">Password is required</div>
                        </div>
                    </div>
                </div>
                <div class="en-signForm-content-help">
                    <div class="en-signForm-content-help-forget">
                        <nuxt-link to="/">Forgot Password?</nuxt-link>
                    </div>
                </div>
                <div class="en-signForm-content-signin">
                    <div class="en-signForm-content-signin-button">
                        <button class="en-signForm-content-signin-button-btn" @click.prevent="loginCheck" type="submit">Sign in</button>
                    </div>
                    <span class="en-signForm-content-signin-with">Or sign in with</span>
                    <div class="en-signForm-content-signin-social">
                        <button class="en-signForm-content-signin-social-btn" type="submit">
                            <i class="fab fa-facebook-f en-signForm-content-signin-social-btn-facebook"></i>
                            Facebook
                            </button>
                        <button class="en-signForm-content-signin-social-btn" type="submit">
                            <i class="fab fa-google en-signForm-content-signin-social-btn-google"></i>
                            Google
                            </button>
                    </div>
                </div>
            </div>
    </div>
</template>


<script>
import { required } from "vuelidate/lib/validators";
export default {
    data(){
        return {
email:"",
password:"",
        }
    },
      validations: {
    email: {
      required
    },
    password: {
      required
    }
  },
  methods: {
    setEmail(value) {
        console.log(value);
      this.email = value;
      this.$v.email.$touch();
    },
    setPassword(value) {
      this.password = value;
      this.$v.password.$touch();
    },
    loginCheck() {
//       let config = {
//   headers: {
//     'Content-Type': 'application/json',
//   }
// }
      let userData = {
        email: this.username,
        password: this.password,
      }
      this.$v.$touch();
      if (this.$v.$invalid) {
      } else {
        // this.$axios
        //   .post("https://yalla-ebdaa.herokuapp.com/api/systemUsers/login", userData)
        //   .then(result => {
        //     console.log(result);
        //     this.$store.commit("setToken", result.data.token);
        //     this.$router.push("/en/dashboard");
        //     localStorage.setItem("token", result.data.token);
        //     localStorage.setItem(
        //       "tokenExpiration",
        //       new Date().getTime() + 3600 * 1000
        //     );
        //     Cookie.set("jwt", result.data.token);
        //     Cookie.set("expirationDate", new Date().getTime() + 3600 * 1000);
        //   })
        //   .catch(error => {
        //     this.errors.push(error.response.data);
        //   });
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.en-signForm{
    width: 100%;
    &-content{
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        &-inputs{
            width: 100%;
            &-input:not(:first-child){
                margin-top: 15px;
            }
            &-input{
                display: flex;
                flex-flow: column;
                color: rgb(36, 36, 36);
                width: 100%;
                font-size: 16px;
                align-self: center;
                &-inp{
                    color: rgb(36, 36, 36);
                    &::placeholder{
                    color: rgb(36, 36, 36);
                    }
                    outline: none;
                    border: 1px solid rgba(0, 119, 255, 0.938);
                    width: 250px;
                    padding: 5px;
                    border-radius: 10px;                    
                }
            }
        }
        &-help{
            width: 100%;
            &-forget{
                text-align: right;
                margin-right: 80px;
                font-size: 14px;
            }
        }
        &-signin{
            margin-top: 20px;
            width: 100%;
            display: flex;
            flex-flow: column;
            &-button{
                display: flex;
                flex-flow: row;
                &-btn{
                    width: 250px;
                    color: black;
                    background-color: transparent;
                    border-radius: 10px;
                    border: 1px solid rgba(0, 119, 255, 0.938);
                    font-size: 20px;
                    &:hover{
                        background-color: rgba(0, 119, 255, 0.938);
                        border: 1px solid white;
                        color: white;
                    }
                    &:focus{
                        outline: none;
                    }
                }
            }
            &-with{
                margin-top: 10px;
                margin-left: 80px;
            }
            &-social{
                width: 80%;
                margin-top: 20px;
                display: flex;
                flex-flow: row;
                justify-content: space-between;
                align-items: center;
                &-btn{
                    border: 1px solid rgba(0, 119, 255, 0.938);
                    border-radius: 10px;
                    width: 120px;
                    &:hover{
                        color: white;
                        background-color: rgba(0, 119, 255, 0.938);
                        .en-signForm-content-signin-social-btn-google{
                            color: white;
                        }
                        .en-signForm-content-signin-social-btn-facebook{
                            color: white;
                        }
                    }
                    &-google{
                        margin-right: 10px;
                        color: #F9BB03;
                    }
                    &-facebook{
                        margin-right: 10px;
                        color: rgb(3, 69, 249);
                    }
                }
            }
        }
    }
}
.error {
    color: red;
}
</style>