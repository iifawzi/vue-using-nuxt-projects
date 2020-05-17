<template>
  <div class="en-mainForms">
    <div class="en-mainForms-content">
        <div v-if="error != '' " class="en-contactPerson-msg">
      <notfication notfiColor="redNotfi">{{error}}</notfication>
    </div>
      <div class="en-mainForms-content-sections">
        <div @click="tabIndex = 1" class="en-mainForms-content-sections-section" :class="{activeTab:tabIndex >= 1, activeColor:tabIndex == 1}">
          <div class="en-mainForms-content-sections-section-number">01.</div>
          <div class="en-mainForms-content-sections-section-title">
            SHIPPING
            <br />ADDRESS
          </div>
        </div>
        <div  @click="tabIndex = 2" class="en-mainForms-content-sections-section" :class="{activeTab:tabIndex >= 2, activeColor:tabIndex == 2}" >
          <div class="en-mainForms-content-sections-section-number">02.</div>
          <div class="en-mainForms-content-sections-section-title">
            BILLING
            <br />ADDRESS
          </div>
        </div>
        <div  @click="tabIndex = 3" class="en-mainForms-content-sections-section" :class="{activeTab:tabIndex >= 3, activeColor:tabIndex == 3}">
          <div class="en-mainForms-content-sections-section-number">03.</div>
          <div class="en-mainForms-content-sections-section-title">
            DILIVERY
            <br />METHOD
          </div>
        </div>
        <div  @click="tabIndex = 4" class="en-mainForms-content-sections-section" :class="{activeTab:tabIndex >= 4, activeColor:tabIndex == 4}">
          <div class="en-mainForms-content-sections-section-number">04.</div>
          <div class="en-mainForms-content-sections-section-title">
            SHIPPING
            <br />ADDRESS
          </div>
        </div>
      </div>
      <div class="en-mainForms-content-forms">
        <div class="en-mainForms-content-forms-content">
          <!-- ADDRESS FORM :  -->
          <div v-show="tabIndex == 1" class="en-mainForms-content-forms-content-address">
            <div class="inputs-row">
              <div class="inputs-row-input">
                <generalInput label="FIRST NAME:" @input="setFirstname" v-model="firstname" />
                <div v-if="$v.firstname.$dirty">
                  <div class="error" v-if="!$v.firstname.required">First name is required</div>
                </div>
              </div>
               <div class="inputs-row-input">
                <generalInput label="LAST NAME:" @input="setLastname" v-model="lastname" />
                <div v-if="$v.lastname.$dirty">
                  <div class="error" v-if="!$v.lastname.required">Last name is required</div>
                </div>
              </div>
            </div>

              <div class="inputs-row">
              <div class="inputs-row-fullInput">
                <selectInput label="COUNTRY:" @input="setCountry" v-model="country">
    <option value disabled selected>Country</option>
                <option value="Premium">Egypt</option>
                <option  value="Free">UAE</option>
                <option  value="Free">KSA</option>
                <option  value="Free">USA</option>
                </selectInput>
                <div v-if="$v.country.$dirty">
                  <div class="error" v-if="!$v.country.required">Country is required</div>
                </div>
              </div>
            </div>

             <div class="inputs-row">
              <div class="inputs-row-input">
                <generalInput label="STATE:" @input="setState" v-model="state" />
                <div v-if="$v.state.$dirty">
                  <div class="error" v-if="!$v.state.required">State is required</div>
                </div>
              </div>
               <div class="inputs-row-input">
                <generalInput label="ZIP/POSTAL CODE:" @input="setPostal" v-model="postal" />
                <div v-if="$v.postal.$dirty">
                  <div class="error" v-if="!$v.postal.required">Postal Code is required</div>
                  <div class="error" v-if="!$v.postal.integer">Postal Code is invalid</div>
                </div>
              </div>
            </div>

     <div class="inputs-row">
              <div class="inputs-row-fullInput">
                 <generalInput label="ADDRESS 1:" @input="setAddress1" v-model="address1" />
                <div v-if="$v.address1.$dirty">
                  <div class="error" v-if="!$v.address1.required">Address is required</div>
                </div>
              </div>
            </div>

   <div class="inputs-row">
              <div class="inputs-row-fullInput">
                 <generalInput label="ADDRESS 2:" @input="setAddress1" v-model="address2" />
              </div>
            </div>


   <div class="inputs-row">
              <div class="inputs-row-fullInput inputs-row-button">
                <button @click="goNext" class="inputs-row-button-btn">CONTINUE</button>
              </div>
            </div>
          </div>
          <!-- END ADDRESS FORM  -->
          <!-- START BILLING ADDRESS -->
              <div v-show="tabIndex == 2" class="en-mainForms-content-forms-content-method">

              <div class="inputs-row">
              <div class="inputs-row-fullInput">
                <selectInput label="COUNTRY:" @input="setCountryBilling" v-model="countrybilling">
    <option value disabled selected>Country</option>
                <option value="Premium">Egypt</option>
                <option  value="Free">UAE</option>
                <option  value="Free">KSA</option>
                <option  value="Free">USA</option>
                </selectInput>
                <div v-if="$v.countrybilling.$dirty">
                  <div class="error" v-if="!$v.countrybilling.required">Country is required</div>
                </div>
              </div>
            </div>

             <div class="inputs-row">
              <div class="inputs-row-input">
                <generalInput label="STATE:" @input="setStateBilling" v-model="statebilling" />
                <div v-if="$v.statebilling.$dirty">
                  <div class="error" v-if="!$v.statebilling.required">State is required</div>
                </div>
              </div>
               <div class="inputs-row-input">
                <generalInput label="ZIP/POSTAL CODE:" @input="setPostalBilling" v-model="postalbilling" />
                <div v-if="$v.postalbilling.$dirty">
                  <div class="error" v-if="!$v.postalbilling.required">Postal Code is required</div>
                  <div class="error" v-if="!$v.postalbilling.integer">Postal Code is invalid</div>
                </div>
              </div>
            </div>

     <div class="inputs-row">
              <div class="inputs-row-fullInput">
                 <generalInput label="ADDRESS 1:" @input="setAddress1Billing" v-model="address1billing" />
                <div v-if="$v.address1billing.$dirty">
                  <div class="error" v-if="!$v.address1billing.required">Address is required</div>
                </div>
              </div>
            </div>

   <div class="inputs-row">
              <div class="inputs-row-fullInput inputs-row-button">
                <button @click="goNext" class="inputs-row-button-btn">CONTINUE</button>
              </div>
            </div>
          </div>
          <!-- END BILLING ADDRESS -->
           <!-- START DELIVERY METHOD -->
              <div v-show="tabIndex == 3" class="en-mainForms-content-forms-content-delivery">
     <div class="inputs-row inputs-row-radio">
       <label class="radio-container">STANDARD DELIVERY $2.99 (3-5 DAYS)
  <input value="STANDARD DELIVERY $2.99 (3-5 DAYS)" type="radio" checked="checked"  v-model="deliveryMethod"  @change="setDeliveryMethod,$event.target.value" name="radio">
  <span class="checkmark"></span>
</label>
   <label class="radio-container">EXPRESS DELIVERY $10.99 (1-2 DAYS)
  <input value="EXPRESS DELIVERY $10.99 (1-2 DAYS)" type="radio" checked="checked"  v-model="deliveryMethod"  @change="setDeliveryMethod,$event.target.value" name="radio">
  <span class="checkmark"></span>
</label>
   <label class="radio-container">SAME-DAY $20.00 (EVENING DELIVERY)
  <input value="SAME-DAY $20.00 (EVENING DELIVERY)" type="radio" v-model="deliveryMethod" @change="setDeliveryMethod,$event.target.value" checked="checked" name="radio">
  <span class="checkmark"></span>
</label>
            </div>

   <div class="inputs-row">
              <div class="inputs-row-fullInput inputs-row-button">
                <button @click="goNext" class="inputs-row-button-btn">CONTINUE</button>
              </div>
            </div>
          </div>
          <!-- END DELIVERY METHOD -->

              <!-- START PAYMENT METHOD -->
              <div v-show="tabIndex == 4" class="en-mainForms-content-forms-content-delivery">
     <div class="inputs-row inputs-row-radio">
       <label class="radio-container">CREDIT CARD
  <input value="CREDIT CARD" type="radio" checked="checked"  v-model="paymentMethod"  @change="setPaymentMethod,$event.target.value" name="radio">
  <span class="checkmark"></span>
</label>

   <label class="radio-container">PAYPAL
  <input value="PAYPAL" type="radio" checked="checked"  v-model="paymentMethod"  @change="setPaymentMethod,$event.target.value" name="radio">
  <span class="checkmark"></span>
</label>
            </div>

   <div class="inputs-row">
              <div class="inputs-row-fullInput">
                <generalInput label="CARD NUMBER:" @input="setCardNumber" v-model="cardnumber" />
                <div v-if="$v.cardnumber.$dirty">
                  <div class="error" v-if="!$v.cardnumber.required">Card Number is required</div>
                </div>
              </div>
            </div>

   <div class="inputs-row">
              <div class="inputs-row-input">
            
<selectInput label="MONTH:" @input="setMonth" v-model="month">
    <option value disabled selected>Month</option>
                <option value="3">3</option>
                <option  value="4">4</option>
                <option  value="5">5</option>
                <option  value="6">6</option>
                </selectInput>

                <div v-if="$v.month.$dirty">
                  <div class="error" v-if="!$v.month.required">Month is required</div>
                </div>
              </div>
               <div class="inputs-row-input">
                 <selectInput label="YEAR:" @input="setYear" v-model="year">
    <option value disabled selected>Year</option>
                <option value="1990">1990</option>
                <option  value="2000">2000</option>
                <option  value="2001">2001</option>
                <option  value="2002">2002</option>
                </selectInput>

                <div v-if="$v.year.$dirty">
                  <div class="error" v-if="!$v.year.required">Year is required</div>
                </div>
              </div>
            </div>

  <div class="inputs-row">
              <div class="inputs-row-fullInput">
                <generalInput label="CVV:" @input="setCvv" v-model="cvv" />
                <div v-if="$v.cvv.$dirty">
                  <div class="error" v-if="!$v.cvv.required">CVV is required</div>
                </div>
              </div>
            </div>

   <div class="inputs-row">
              <div class="inputs-row-fullInput inputs-row-button">
                <button @click="submitData" class="inputs-row-button-btn">SUBMIT</button>
              </div>
            </div>
          </div>
          <!-- END PAYMENT METHOD -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import generalInput from "~/components/en/general/generalInput.vue";
import notfication from "~/components/en/general/notfication.vue";
import selectInput from "~/components/en/general/selectInput.vue";
import { required,integer } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      tabIndex:1,  
      error:"",
      firstname: "",
      lastname:"",
      country:"",
      postal:"",
      state:"",
      address1:"",
      address2:"",
      countrybilling:"",
      statebilling:"",
      address1billing:"",
      postalbilling:"",
      deliveryMethod:"",
      paymentMethod:"",
      cardnumber:"",
      year:"",
      month:"",


    };
  },
  validations: {
    firstname: {
      required
    },
    lastname: {
      required
    },
      country: {
      required
    },
        postal: {
      required,
      integer,
    },
       state: {
      required
    },
       address1: {
      required,
    },
      countrybilling: {
      required
    },
       statebilling: {
      required
    },
         postalbilling: {
      required
    },
        address1billing: {
      required
    },
       cardnumber: {
      required
    },
       month: {
      required
    },
    year: {
      required
    },
     cvv: {
      required
    },
  },
  methods: {
      goNext(){
        this.tabIndex++;
      },
    setFirstname(value) {
      this.firstname = value;
      this.$v.firstname.$touch();
    },
       setLastname(value) {
      this.lastname = value;
      this.$v.lastname.$touch();
    },
          setCountry(value) {
      this.country = value;
      this.$v.country.$touch();
    },
            setPostal(value) {
      this.postal = value;
      this.$v.postal.$touch();
    },
             setState(value) {
      this.state = value;
      this.$v.state.$touch();
    },
              setAddress1(value) {
      this.address1 = value;
      this.$v.address1.$touch();
    },
        setAddress2(value) {
      this.address2 = value;
    },
          setCountryBilling(value) {
      this.countrybilling = value;
      this.$v.countrybilling.$touch();
    },
           setStateBilling(value) {
      this.statebilling = value;
      this.$v.statebilling.$touch();
    },
      setAddress1Billing(value) {
      this.address1billing = value;
      this.$v.address1billing.$touch();
    },
     setPostalBilling(value) {
      this.postalbilling = value;
      this.$v.postalbilling.$touch();
    },
    setDeliveryMethod(value){
        this.deliveryMethod = value;
    },
     setPaymentMethod(value){
        this.paymentMethod = value;
    },
      setCardNumber(value){
        this.cardnumber = value;
    },
      setMonth(value){
        this.month = value;
    },
      setYear(value){
        this.year = value;
    },
      setCvv(value){
        this.cvv = value;
    },
    submitData(){
        this.$v.$touch()
      if (this.$v.$invalid) {
        this.error = "Some data is missing!";
      } else {
       console.log("done");
      }
    }
  },
  components: {
    generalInput,
    selectInput,
    notfication,
  }
};
</script>
<style lang="scss" scoped>
.en-mainForms {
    margin-bottom: 20px; // test
  &-content {
    &-sections {
      display: flex;
      flex-flow: row;
      &-section {
        display: flex;
        flex-flow: row;
        border-bottom: 4px solid rgb(224, 224, 224);
        padding-bottom: 10px;
        width: 180px;
        color: #E0E0E0;
        &:hover{
            color: #22252A;
        }
        cursor: pointer;
        &-number {
          font-size: 35px;
        }
        &-title {
          align-self: flex-end;
          margin-left: 10px;
          font-size: 14px;
          font-weight: 400;
        }
      }
    }
  }
}
.inputs-row {
  display: flex;
  flex-flow: row;
  margin-top: 20px;
  &-input {
      margin-right: 20px;
       width: 300px;
  }
  &-fullInput{
     width: 620px; 
  }
  &-button{
      text-align: right;
      &-btn{
          width: 150px;
          background-color: rgb(235, 12, 60);
          border-radius: 10px;
          color: white;
          border: 0px;
          &:focus{
              outline: none;
          }
          &:hover{
              background-color: rgb(221, 14, 59);
          }
      }
  }
  &-radio{
    display: flex;
    flex-flow: column;
  }
}
// for radio 
.radio-container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.radio-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.radio-container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a red background */
.radio-container input:checked ~ .checkmark {
  background-color: rgb(221, 14, 59);
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.radio-container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.radio-container .checkmark:after {
 	top: 9px;
	left: 9px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: white;
}

// 
.activeTab {
  border-bottom: 4px solid rgb(235, 12, 60);

}
.activeColor {
  color: #22252A;
}
.error {
  color: rgb(235, 12, 60);
}
</style>
