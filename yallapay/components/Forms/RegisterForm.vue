<template>
    <form @submit.prevent="RegisterCheck" class="register-form">
 <h3 class="welcome text-center">Let's Start the journey</h3>

 <div class="InputsRow">
 <Controlinput type="text" placeHolder="First Name" v-model.trim="firstname" @input="setFirstname" iconClass="far fa-user">
            <div class="errors" v-if="$v.firstname.$dirty">
 <div class="error" v-if="!$v.firstname.required">First Name is required</div>
   </div>
 </Controlinput>

   <Controlinput type="text" placeHolder="Last Name" v-model.trim="lastname" @input="setLastname" iconClass="far fa-user">
      <div class="errors" v-if="$v.lastname.$dirty">
 <div class="error" v-if="!$v.lastname.required">Last Name is required</div>
    </div>
   </Controlinput>
   
</div>


<div class="InputsRow">
 <Controlinput type="text" placeHolder="Phone Number" v-model.trim="phone" @input="setPhone" iconClass="fas fa-phone-square-alt">
            <div class="errors" v-if="$v.phone.$dirty">
 <div class="error" v-if="!$v.phone.required">Phone is required</div>
   </div>
 </Controlinput>

   <Controlinput type="text" placeHolder="Email" v-model.trim="email" @input="setEmail" iconClass="fas fa-envelope">
      <div class="errors" v-if="$v.email.$dirty">
 <div class="error" v-if="!$v.email.required">Email is required</div>
 <div class="error" v-if="!$v.email.email">Email is invalid</div>
    </div>
   </Controlinput>
   
</div>


 <div class="InputsRow">
 
      <Controlinput type="password" placeHolder="Password" v-model.trim="password" @input="setPassword" iconClass="fas fa-key">
        <div class="errors" v-if="$v.password.$dirty">
 <div class="error" v-if="!$v.password.required">Password is required</div>
 <div class="error" v-if="!$v.password.minLength">Password Must be at least 6 digits</div>
    </div>
      </Controlinput>
    
     <Controlinput type="password" placeHolder="Confirm Password" v-model.trim="confirm" @input="setConfirm" iconClass="fas fa-key">
          <div class="errors" v-if="$v.confirm.$dirty">
 <div class="error" v-if="!$v.confirm.sameAsPassword">Passwords must be equal</div>
    </div>
      </Controlinput>
   
</div>
 
   
 <div class="InputsRow">
          
    <Controlinput type="text" placeHolder="Company / startup " v-model.trim="company" @input="setCompany" iconClass="fas fa-building">
    <div class="errors" v-if="$v.company.$dirty">
 <div class="error" v-if="!$v.company.required">Company is required</div>
    </div>
    </Controlinput>
     <Controlinput type="date" v-model.trim="birthday" @input="setBirthday" iconClass="fas fa-building">
    <div class="errors" v-if="$v.birthday.$dirty">
 <div class="error" v-if="!$v.birthday.required">Birthday is required</div>
    </div>
    </Controlinput>
   
</div>
 

     <div class="RegisterForm">
                    <button class="RegisterForm-button">Register</button>
    </div>
      <!-- <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
  <p class="error" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
  <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p> -->
  <div class="anAccont">
 <span class="got-account ">Already got an account?  <strong  v-on:click="$emit('toggle')" class="singin"  >Login!</strong></span>
  </div>
   
    </form>
</template>


<script>
import Controlinput from "~/components/UI/Controlinput"
import ButtonInput from "~/components/UI/ButtonInput"
import Notification from "~/components/UI/Notification";

import { required, minLength, email, sameAs,numeric	 } from 'vuelidate/lib/validators'
export default {
    data(){
        return {
            firstname:"",
            lastname:"",
            email: "",
            password: "",
            confirm: "",
            submitStatus: null,
            phone: "",
            company: "",
            birthday: "",
        }
    },
    components : {
        Controlinput,
        Notification,
    },
      validations: {
    firstname: {
      required,
    },
    lastname: {
      required,
    },
        email: {
    required,
    email
    },
    password: {
    required,
    minLength: minLength(6)
    },
    confirm: {
    sameAsPassword: sameAs('password')
    },
    company: {
    required,
    },
    phone: {
    required,
    numeric,
    },
     birthday: {
    required,
    },

  },
    methods: {
    setFirstname(value) {
      this.firstname = value
      this.$v.firstname.$touch()
    },
     setLastname(value) {
      this.lastname = value
      this.$v.lastname.$touch()
    },
    setPassword(value) {
      this.password = value;
      this.$v.password.$touch();
   },
       setEmail(value) {
      this.email = value;
      this.$v.email.$touch();
   },
       setConfirm(value) {
      this.confirm = value;
      this.$v.confirm.$touch();
   },
       setCompany(value) {
      this.company = value;
      this.$v.company.$touch();
   },
       setPhone(value) {
      this.phone = value;
      this.$v.phone.$touch();
   },
       setBirthday(value) {
         this.birthday = value;
      this.$v.birthday.$touch();
       },
   RegisterCheck() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
         this.$emit("submit",{
           firstname : this.firstname,
           lastname : this.lastname,
           email : this.email,
           password : this.password,
           confirmPassword : this.confirm,
           company : this.company,
           phone : this.phone,
           birthday : this.birthday,
         })
      }
    }
},
}
</script>


<style lang="scss" scoped>
.InputsRow{
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
}
.errors{
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  .error {
    color: #E94135;
    text-align: center;
  }
}
.welcome{
     color:#044FAF;
     margin-bottom: 10px;
}
.anAccont{
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
}
.got-account {
    display: inline-block;
    margin-top: 10px;
    text-align: center;
}
.singin {
    color: rgb(15, 177, 69);
    cursor: pointer;
}
.RegisterForm{
display: flex;
justify-content: center;
align-items: center;
}
.RegisterForm-button {
      cursor: pointer;
      width: 160px;
      border-radius: 4px;
      padding: 5px;
      color: white;
      font-size: 14px;
      background-color:rgb(202, 6, 72);
      border: rgb(202, 6, 72);
      text-align: center;
      font-size: 16px;
      &:hover {
        border: 1px solid;
        background-color: rgb(221, 7, 78);
        border:rgb(221, 7, 78);
        color: white;
      }
      &:focus {
        outline: none;
      }
    }
</style>