<template>
    <div class="en-signupForm">
            <div class="en-signupForm-content">
                <div class="en-signupForm-content-inputs">
                       <div class="en-signupForm-content-inputs-input">
                        <label class="en-signupForm-content-inputs-input-label">Username</label>
                        <input class="en-signupForm-content-inputs-input-inp" v-model="username" @input="setUsername($event.target.value)" type="text">
                           <div v-if="$v.username.$dirty">
              <div class="error" v-if="!$v.username.required">Username is required</div>
            </div>
                    </div>
                                <div class="en-signupForm-content-inputs-input">
                        <label class="en-signupForm-content-inputs-input-label">Email</label>
                        <input class="en-signupForm-content-inputs-input-inp" v-model="email" @input="setEmail($event.target.value)" type="text">
                           <div v-if="$v.email.$dirty">
              <div class="error" v-if="!$v.email.required">Email is required</div>
            </div>
                    </div>
                     <div class="en-signupForm-content-inputs-input">
                        <label class="en-signupForm-content-inputs-input-label">Password</label>
                        <input class="en-signupForm-content-inputs-input-inp" v-model="password" @input="setPassword($event.target.value)" type="text">
                        <div v-if="$v.password.$dirty">
                            <div class="error" v-if="!$v.password.required">Password is required</div>
                        </div>
                    </div>
                            
                                        <div class="en-signupForm-content-inputs-input">
                        <label class="en-signupForm-content-inputs-input-label">Phone</label>
                        <input class="en-signupForm-content-inputs-input-inp" v-model="phone" @input="setPhone($event.target.value)" type="text">
                           <div v-if="$v.phone.$dirty">
              <div class="error" v-if="!$v.phone.required">Phone is required</div>
              <div class="error" v-if="!$v.phone.integer">Phone is invalid</div>
            </div>
                    </div>
                </div>
                <div class="en-signupForm-content-signin">
                    <div class="en-signupForm-content-signin-button">
                        <button class="en-signupForm-content-signin-button-btn" @click.prevent="signupCheck" type="submit">Sign Up</button>
                    </div>
                    <span class="en-signupForm-content-signin-with">Or sign up with</span>
                    <div class="en-signupForm-content-signin-social">
                        <button class="en-signupForm-content-signin-social-btn" type="submit">
                            <i class="fab fa-facebook-f en-signupForm-content-signin-social-btn-facebook"></i>
                            Facebook
                            </button>
                        <button class="en-signupForm-content-signin-social-btn" type="submit">
                            <i class="fab fa-google en-signupForm-content-signin-social-btn-google"></i>
                            Google
                            </button>
                    </div>
                </div>
            </div>
    </div>
</template>


<script>
import { required,integer } from "vuelidate/lib/validators";
export default {
    data(){
        return {
email:"",
password:"",
username:"",
phone:"",
        }
    },
      validations: {
    email: {
      required
    },
    password: {
      required
    },
     username: {
      required
    },
      phone: {
      required,
      integer,
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
     setUsername(value) {
      this.username = value;
      this.$v.username.$touch();
    },
     setPhone(value) {
      this.phone = value;
      this.$v.phone.$touch();
    },
    signupCheck() {
//       let config = {
//   headers: {
//     'Content-Type': 'application/json',
//   }
// }
    //   let userData = {
    //     email: this.username,
    //     password: this.password,
    //   }
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
.en-signupForm{
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
                        .en-signupForm-content-signin-social-btn-google{
                            color: white;
                        }
                        .en-signupForm-content-signin-social-btn-facebook{
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