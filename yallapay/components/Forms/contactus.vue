<template>
    <form @submit.prevent="ContactusCheck" class="contactus-form">
 <div class="InputsRow">
 <Controlinput type="text" placeHolder="Name" v-model.trim="personname" @input="setPersonname" iconClass="far fa-user">
            <div class="errors" v-if="$v.personname.$dirty">
 <div class="error" v-if="!$v.personname.required">First Your name is required</div>
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
 
      <Controlinput type="text" placeHolder="Subject" v-model.trim="subject" @input="setSubject" iconClass="fas fa-mail-bulk">
        <div class="errors" v-if="$v.subject.$dirty">
 <div class="error" v-if="!$v.subject.required">Subject is required</div>
    </div>
      </Controlinput>
       
</div>


 <div class="InputsRow">
 
      <Controlinput thisTextArea cols="10" type="text" placeHolder="Content" v-model.trim="content" @input="setContent" iconClass="fas fa-key">
        <div class="errors" v-if="$v.content.$dirty">
 <div class="error" v-if="!$v.content.required">Content is required</div>
    </div>
      </Controlinput>
       
</div>
 
     <div class="ConactusForm">
           <button class="ConactusForm-button">Send Us</button>
    </div>
    
    </form>
</template>


<script>
import Controlinput from "~/components/UI/Controlinput"
import ButtonInput from "~/components/UI/ButtonInput"
import Notification from "~/components/UI/Notification";

import { required,email, 	 } from 'vuelidate/lib/validators'
export default {
    data(){
        return {
            personname:"",
            email:"",
            subject: "",
            submitStatus: null,
        }
    },
    components : {
        Controlinput,
        Notification,
    },
      validations: {
    personname: {
      required,
    },
    subject: {
      required,
    },
    content: {
      required,
    },
        email: {
    required,
    email
    },

  },
    methods: {
    setPersonname(value) {
      this.personanme = value
      this.$v.personanme.$touch()
    },
     setSubject(value) {
      this.subject = value
      this.$v.subject.$touch()
    },
       setEmail(value) {
      this.email = value;
      this.$v.email.$touch();
   },
     setContent(value) {
      this.content = value;
      this.$v.content.$touch();
   },
   ContactusCheck() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
         this.$emit("submit",{
           personname : this.perosnname,
           subject : this.subject,
           email : this.email,
           content: this.content,
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

.ConactusForm{
display: flex;
justify-content: center;
align-items: center;
}
.ConactusForm-button {
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