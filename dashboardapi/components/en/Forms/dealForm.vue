<template>
  <div class="en-dealForm">
      <div class="en-dealForm-part">
    <div class="en-dealForm-title">
      Deal Form:
      <hr />
      </div>
        <div v-if="success != '' " class="en-dealForm-msg">
<notification notfiColor="greenNotfi">
  {{success}}
</notification>
      </div>
         <div v-if="error != '' " class="en-contactPerson-msg">
<notification notfiColor="redNotfi">
  {{error}}
</notification>
      </div>
      <div class="en-dealForm-main">
        <div class="en-dealForm-main-left">
          <div class="en-dealForm-main-left-form">


  <div class="en-dealForm-main-left-form-row">    
 <selectInput @changedSelect="setMerchant" v-model="dealData.merchant">
         <option value="" disabled selected>Merchant</option>
  <option
                  v-for="merchant in merchants"
                  :key="merchant._id"
                  class="en-selectInput-content-option"
                  :value="merchant._id"
                >{{merchant.name}}</option>
      </selectInput>
        <div v-if="$v.dealData.merchant.$dirty">
                  <div class="field-error" v-if="!$v.dealData.merchant.required">Merchant is required</div>
                </div>
            </div>


  <div class="en-dealForm-main-left-form-row">    
 <selectInput @changedSelect="setCategory" v-model="dealData.category">
         <option value="" disabled selected>Category</option>
    <option
                  v-for="category in categories"
                  :key="category._id"
                  class="en-selectInput-content-option"
                  :value="category._id"
                >{{category.name}}</option>
      </selectInput>
        <div v-if="$v.dealData.category.$dirty">
                  <div class="field-error" v-if="!$v.dealData.category.required">Category is required</div>
                </div>
            </div>


  <div class="en-dealForm-main-left-form-row">    
 <selectInput @changedSelect="setBranches" v-model="dealData.branches">
         <option value="" disabled selected>Branch</option>
    <option
                  v-for="branch in branchesToShow"
                  :key="branch._id"
                  class="en-selectInput-content-option"
                  :value=" branch._id"
                >{{branch.name}}</option>
      </selectInput>
        <div v-if="$v.dealData.branches.$dirty">
                  <div class="field-error" v-if="!$v.dealData.branches.required">Branch is required</div>
                </div>
            </div>


 <div class="en-dealForm-main-left-form-row">
              <inputWithIcon2
                iconClass="fas fa-signature"
                placeholder="Deal Name"
                @input="setName"
                v-model="dealData.name"
                type="text"
              >
                <div v-if="$v.dealData.name.$dirty">
                  <div class="field-error" v-if="!$v.dealData.name.required">Deal Name is required</div>
                </div>
              </inputWithIcon2>
            </div>

 <div class="en-dealForm-main-left-form-row">
              <arinputWithIcon2
                iconClass="fas fa-signature"
                placeholder="اسم العرض"
                @input="setArname"
                v-model="dealData.arName"
                type="text"
              >
                <div v-if="$v.dealData.arName.$dirty">
                  <div class="field-error" v-if="!$v.dealData.arName.required">اسم العرض مطلوب</div>
                </div>
              </arinputWithIcon2>
            </div>


<div v-if="!dealData.images" class="en-merchantForm-main-left-form-row">  
            <label for="image-upload" class="custom-file-upload">
    <i class="fa fa-cloud-upload"></i> Image Upload
</label>
<input id="image-upload" ref="imageUpload" type="file" @change="onFileChange"/>
     <div v-if="!dealData.images">
              <div class="optional-title">Image is a must</div>
            </div>
            </div>

  <div v-if="dealData.images" class="en-merchantForm-main-left-form-row">  
           <img :src="dealData.images" class="cover-img" alt="">
          <buttonWithColors class="btn-font upload-img" preventNoEvent @click="removeImage" btnColor="RedBtn" btnLabel="Remove Cover" />
            </div>

 <div class="en-dealForm-main-left-form-row">
              <inputWithIcon2
                iconClass="fas fa-signature"
                placeholder="Video Link"
                @input="setVideo"
                v-model="dealData.video"
                type="text"
              >
                  <div class="optional-title">Video is optional</div>
              </inputWithIcon2>
            </div>


 <div class="en-dealForm-main-left-form-row">    
 <selectInput @changedSelect="setDeal" v-model="dealData.type">
         <option value="" disabled selected>Type</option>
  <option class="en-selectInput-content-option" value="buy_one_get_one_free">Buy one get one free</option>
  <option class="en-selectInput-content-option" value="free_shipping">Free Shipping</option>
  <option class="en-selectInput-content-option" value="free_coupon">Free Coupon</option>
      </selectInput>
        <div v-if="$v.dealData.type.$dirty">
                  <div class="field-error" v-if="!$v.dealData.type.required">type is required</div>
                </div>
            </div>


  <div class="en-dealForm-main-left-form-row">    
 <selectInput @changedSelect="setDealType" v-model="dealData.dealType">
         <option value="" disabled selected>Deal Type</option>
  <option class="en-selectInput-content-option" value="Premium">Premium</option>
  <option class="en-selectInput-content-option" value="Free">Free</option>
      </selectInput>
        <div v-if="$v.dealData.dealType.$dirty">
                  <div class="field-error" v-if="!$v.dealData.dealType.required">Deal type is required</div>
                </div>
            </div>




 <div class="en-dealForm-main-left-form-row">
<inputWithIcon2 class="en-dealForm-main-left-form-row-two-element"
                iconClass="fas fa-signature"
                placeholder="Start Date"
                @input="setDate"
                v-model="dealData.dealStartDate"
                type="date"
              >
               <div class="optional-title">Start Date</div>
                   <div v-if="$v.dealData.dealStartDate.$dirty">
                  <div class="field-error" v-if="!$v.dealData.dealStartDate.required">Start Date is required</div>
                </div>
              </inputWithIcon2>
            </div>

 <div class="en-dealForm-main-left-form-row">
<inputWithIcon2 class="en-dealForm-main-left-form-row-two-element"
                iconClass="fas fa-signature"
                placeholder="Start Date"
                @input="setEndDate"
                v-model="dealData.dealEndDate"
                type="date"
              >
               <div class="optional-title">End Date</div>
                   <div v-if="$v.dealData.dealEndDate.$dirty">
                  <div class="field-error" v-if="!$v.dealData.dealEndDate.required">End Date is required</div>
                </div>
              </inputWithIcon2>
            </div>


 </div>
          </div>
        </div>
      </div>

 <div class="en-dealForm-title">
      Price Info:
      <hr />
      </div>
 <div class="en-dealForm-part">
  <div class="en-dealForm-main">
        <div class="en-dealForm-main-left">
          <div class="en-dealForm-main-left-form">

 <div class="en-dealForm-main-left-form-row">
<inputWithIcon2 class="en-dealForm-main-left-form-row-two-element"
                iconClass="fas fa-signature"
                placeholder="Original Price"
                @input="setPrice"
                v-model="dealData.prices.originalPrice"
                type="number"
              >
                   <div v-if="$v.dealData.prices.originalPrice.$dirty">
                  <div class="field-error" v-if="!$v.dealData.prices.originalPrice.required">Original Price is required</div>
                  <div class="field-error" v-if="!$v.dealData.prices.originalPrice.integer">Original Price must be a number</div>

                </div>
              </inputWithIcon2>
            </div>


<div class="en-dealForm-main-left-form-row">
<inputWithIcon2 class="en-dealForm-main-left-form-row-two-element"
                iconClass="fas fa-signature"
                placeholder="Final Price"
                @input="setFinalPrice"
                v-model="dealData.prices.finalPrice"
                type="number"
              >
                   <div v-if="$v.dealData.prices.finalPrice.$dirty">
                  <div class="field-error" v-if="!$v.dealData.prices.finalPrice.required">Final Price is required</div>
                  <div class="field-error" v-if="!$v.dealData.prices.finalPrice.integer">Final Price must be a number</div>
                </div>
              </inputWithIcon2>
            </div>


<div class="en-dealForm-main-left-form-row">
<inputWithIcon2 class="en-dealForm-main-left-form-row-two-element"
                iconClass="fas fa-signature"
                placeholder="Percentage"
                @input="setPercentage"
                v-model="dealData.percentage"
                type="number"
              >
                   <div v-if="$v.dealData.percentage.$dirty">
                  <div class="field-error" v-if="!$v.dealData.percentage.required">Percentage is required</div>
                  <div class="field-error" v-if="!$v.dealData.percentage.integer">Percentage must be a number</div>

                </div>
              </inputWithIcon2>
            </div>



<div class="en-dealForm-main-left-form-row">
<inputWithIcon2 class="en-dealForm-main-left-form-row-two-element"
                iconClass="fas fa-signature"
                placeholder="Payout Net"
                @input="setPayoutNet"
                v-model="dealData.payoutNet"
                type="number"
              >
                   <div v-if="$v.dealData.payoutNet.$dirty">
                  <div class="field-error" v-if="!$v.dealData.payoutNet.required">Percentage is required</div>
                  <div class="field-error" v-if="!$v.dealData.payoutNet.integer">Percentage must be a number</div>

                </div>
              </inputWithIcon2>
            </div>


<div class="en-dealForm-main-left-form-row">
<inputWithIcon2 class="en-dealForm-main-left-form-row-two-element"
                iconClass="fas fa-signature"
                placeholder="Yalla Dealz Commission"
                @input="setYDcommission"
                v-model="dealData.yallaDealzCommission"
                type="number"
              >
                   <div v-if="$v.dealData.yallaDealzCommission.$dirty">
                  <div class="field-error" v-if="!$v.dealData.yallaDealzCommission.required">Yalla Dealz Commission is required</div>
                  <div class="field-error" v-if="!$v.dealData.yallaDealzCommission.integer">Yalla Dealz Commission must be a number</div>

                </div>
              </inputWithIcon2>
            </div>
     </div>
        </div>
  </div>
 </div>


 <div class="en-dealForm-title">
      Voucher Info:
      <hr />
      </div>
 <div class="en-dealForm-part">
  <div class="en-dealForm-main">
        <div class="en-dealForm-main-left">
          <div class="en-dealForm-main-left-form">

 <div class="en-dealForm-main-left-form-row">
<inputWithIcon2 class="en-dealForm-main-left-form-row-two-element"
                iconClass="fas fa-signature"
                placeholder="Final Price"
                @input="setVfinalprice"
                v-model="dealData.voucher.finalPrice"
                type="number"
              >
                   <div v-if="$v.dealData.voucher.finalPrice.$dirty">
                  <div class="field-error" v-if="!$v.dealData.voucher.finalPrice.required">Final Price is required</div>
                  <div class="field-error" v-if="!$v.dealData.voucher.finalPrice.integer">Final Price must be a number</div>

                </div>
              </inputWithIcon2>
            </div>

<div class="en-dealForm-main-left-form-row">
<inputWithIcon2 class="en-dealForm-main-left-form-row-two-element"
                iconClass="fas fa-signature"
                placeholder="Valid Untill"
                @input="setVvaliduntill"
                v-model="dealData.voucher.validUntil"
                type="date"
              >
              <div class="optional-title">Valid Untill</div>
                   <div v-if="$v.dealData.voucher.validUntil.$dirty">
                  <div class="field-error" v-if="!$v.dealData.voucher.validUntil.required">Valid Untill is required</div>

                </div>
              </inputWithIcon2>
            </div>

 <div class="en-dealForm-main-left-form-row">
<inputWithIcon2 class="en-dealForm-main-left-form-row-two-element"
                iconClass="fas fa-signature"
                placeholder="Minimum Quantity Allowed"
                @input="setVmqa"
                v-model="dealData.voucher.minimumQuantityAllowed"
                type="number"
              >
                   <div v-if="$v.dealData.voucher.minimumQuantityAllowed.$dirty">
                  <div class="field-error" v-if="!$v.dealData.voucher.minimumQuantityAllowed.required">Minimum Quantity Allowed is required</div>
                  <div class="field-error" v-if="!$v.dealData.voucher.minimumQuantityAllowed.integer">Minimum Quantity Allowed must be a number</div>

                </div>
              </inputWithIcon2>
            </div>

 <div class="en-dealForm-main-left-form-row">
<inputWithIcon2 class="en-dealForm-main-left-form-row-two-element"
                iconClass="fas fa-signature"
                placeholder="Minimum Quantity Allowed"
                @input="setVmxqa"
                v-model="dealData.voucher.maximumQuantityAllowed"
                type="number"
              >
                   <div v-if="$v.dealData.voucher.maximumQuantityAllowed.$dirty">
                  <div class="field-error" v-if="!$v.dealData.voucher.maximumQuantityAllowed.required">Maximum Quantity Allowed is required</div>
                  <div class="field-error" v-if="!$v.dealData.voucher.maximumQuantityAllowed.integer">Maximum Quantity Allowed must be a number</div>

                </div>
              </inputWithIcon2>
            </div>



 <div class="en-dealForm-main-left-form-row">
<inputWithIcon2 class="en-dealForm-main-left-form-row-two-element"
                iconClass="fas fa-signature"
                placeholder="User Allowed From"
                @input="setVuserallowedfrom"
                v-model="dealData.voucher.userAllowedFrom"
                type="number"
              >
                   <div v-if="$v.dealData.voucher.userAllowedFrom.$dirty">
                  <div class="field-error" v-if="!$v.dealData.voucher.userAllowedFrom.required">User Allowed From is required</div>
                  <div class="field-error" v-if="!$v.dealData.voucher.userAllowedFrom.integer">User Allowed From must be a number</div>

                </div>
              </inputWithIcon2>
            </div>

 <div class="en-dealForm-main-left-form-row">
<inputWithIcon2 class="en-dealForm-main-left-form-row-two-element"
                iconClass="fas fa-signature"
                placeholder="User Allowed Upto"
                @input="setVuserallowedfupto"
                v-model="dealData.voucher.userAllowedUpto"
                type="number"
              >
                   <div v-if="$v.dealData.voucher.userAllowedUpto.$dirty">
                  <div class="field-error" v-if="!$v.dealData.voucher.userAllowedUpto.required">User Allowed Upto is required</div>
                  <div class="field-error" v-if="!$v.dealData.voucher.userAllowedUpto.integer">User Allowed Upto must be a number</div>

                </div>
              </inputWithIcon2>
            </div>

 <div class="en-dealForm-main-left-form-row">
<inputWithIcon2 class="en-dealForm-main-left-form-row-two-element"
                iconClass="fas fa-signature"
                placeholder="User Allowed Quantity"
                @input="setVallowedquanitity"
                v-model="dealData.voucher.allowedQuantity"
                type="number"
              >
                   <div v-if="$v.dealData.voucher.allowedQuantity.$dirty">
                  <div class="field-error" v-if="!$v.dealData.voucher.allowedQuantity.required">Allowed Quanitity is required</div>
                  <div class="field-error" v-if="!$v.dealData.voucher.allowedQuantity.integer">Allowed Quanitity must be a number</div>

                </div>
              </inputWithIcon2>
            </div>

     </div>
        </div>
  </div>
 </div>



 <div class="en-dealForm-title">
      Voucher Validation:
      <hr />
      </div>
 <div class="en-dealForm-part">
  <div class="en-dealForm-main">
        <div class="en-dealForm-main-left">
          <div class="en-dealForm-main-left-form">



<div class="en-dealForm-main-left-form-row">    
 <inputWithIcon2 class="en-dealForm-main-left-form-row-two-element"
                iconClass="fas fa-signature"
                placeholder="Voucher Falid For"
                @input="setValidFor"
                v-model="dealData.voucher.validFor"
                type="text"
              ></inputWithIcon2>
               <div class="optional-title">( Men,Women,Teens,Kids ) Choose, seperated with comma, Ex. Men,Women,...</div>

        <div v-if="$v.dealData.voucher.validFor.$dirty">
                  <div class="field-error" v-if="!$v.dealData.voucher.validFor.required">Valid For is required</div>
                </div>
            </div>

<div class="en-dealForm-main-left-form-row">    
 <inputWithIcon2 class="en-dealForm-main-left-form-row-two-element"
                iconClass="fas fa-signature"
                placeholder="Minimum Age"
                @input="setMinimumage"
                v-model="dealData.voucher.minimumAge"
                type="number"
              ></inputWithIcon2>
        <div v-if="$v.dealData.voucher.minimumAge.$dirty">
                  <div class="field-error" v-if="!$v.dealData.voucher.minimumAge.required">Minimum Age is required</div>
                  <div class="field-error" v-if="!$v.dealData.voucher.minimumAge.integer">Minimum Age is required</div>
                </div>
            </div>


  <div class="en-dealForm-main-left-form-row">    
 <selectInput @changedSelect="setVouchervalidon" v-model="dealData.voucher.validOn">
         <option value="" disabled selected>Voucher Valid On</option>
  <option class="en-selectInput-content-option" value="Weekends">Weekends</option>
  <option class="en-selectInput-content-option" value="Public_Holidays">Public Holydays</option>
      </selectInput>
        <div v-if="$v.dealData.voucher.validOn.$dirty">
                  <div class="field-error" v-if="!$v.dealData.voucher.validOn.required">Valid On is required</div>
                </div>
            </div>



<div class="en-dealForm-main-left-form-row">    
 <inputWithIcon2 isTextArea cols="7" class="en-dealForm-main-left-form-row-two-element"
                iconClass="fas fa-signature"
                placeholder="Description"
                @input="setDesc"
                v-model="dealData.prices.description"
                type="textarea"
              ></inputWithIcon2>
        <div v-if="$v.dealData.prices.description.$dirty">
                  <div class="field-error" v-if="!$v.dealData.prices.description.required">Description is required</div>
                </div>
            </div>


<div class="en-dealForm-main-left-form-row">    
 <arinputWithIcon2 isTextArea cols="7" class="en-dealForm-main-left-form-row-two-element"
                iconClass="fas fa-signature"
                placeholder="الوصف"
                @input="setArDesc"
                v-model="dealData.prices.arDescription"
                type="textarea"
              ></arinputWithIcon2>
        <div v-if="$v.dealData.prices.arDescription.$dirty">
                  <div class="field-error" v-if="!$v.dealData.prices.arDescription.required">الوصف مطلوب</div>
                </div>
            </div>

<div class="en-dealForm-main-left-form-row">    
 <inputWithIcon2 isTextArea cols="7" class="en-dealForm-main-left-form-row-two-element"
                iconClass="fas fa-signature"
                placeholder="HighLights"
                @input="setHighlight"
                v-model="dealData.highlightes"
                type="textarea"
              ></inputWithIcon2>
        <div v-if="$v.dealData.highlightes.$dirty">
                  <div class="field-error" v-if="!$v.dealData.highlightes.required">HighLights is required</div>
                </div>
            </div>

<div class="en-dealForm-main-left-form-row">    
 <arinputWithIcon2 isTextArea cols="7" class="en-dealForm-main-left-form-row-two-element"
                iconClass="fas fa-signature"
                placeholder="ابرز المعلومات"
                @input="setArhighlight"
                v-model="dealData.arHighlightes"
                type="textarea"
              ></arinputWithIcon2>
        <div v-if="$v.dealData.arHighlightes.$dirty">
                  <div class="field-error" v-if="!$v.dealData.arHighlightes.required">ابرز المعلومات مطلوبه</div>
                </div>
            </div>

     </div>
        </div>
  </div>
 </div>

 <div class="en-dealForm-part">
     <hr>
  <div class="en-dealForm-main">
        <div class="en-dealForm-main-left">
          <div class="en-dealForm-main-left-form">


  <div class="en-dealForm-main-left-form-row">    
 <selectInput @changedSelect="setPrior" v-model="dealData.priorBooking.status">
         <option value="" disabled selected>Prior Booking/Canellation Required</option>
  <option class="en-selectInput-content-option" value=true>Yes</option>
  <option class="en-selectInput-content-option" value=no>No</option>
      </selectInput>
        <div v-if="$v.dealData.priorBooking.status.$dirty">
                  <div class="field-error" v-if="!$v.dealData.priorBooking.status.required">Valid On is required</div>
                </div>
            </div>


<div class="en-dealForm-main-left-form-row">    
 <inputWithIcon2 class="en-dealForm-main-left-form-row-two-element"
                iconClass="fas fa-signature"
                placeholder="Contact Number"
                @input="setContactnumber"
                v-model="dealData.priorBooking.contactNumber"
                type="number"
              ></inputWithIcon2>
        <div v-if="$v.dealData.priorBooking.contactNumber.$dirty">
                  <div class="field-error" v-if="!$v.dealData.priorBooking.contactNumber.required">Contact number  is required</div>
                  <div class="field-error" v-if="!$v.dealData.priorBooking.contactNumber.integer">Contact number  is required</div>
                </div>
            </div>



<div class="en-dealForm-main-left-form-row">    
 <inputWithIcon2 cols="7" class="en-dealForm-main-left-form-row-two-element"
                iconClass="fas fa-signature"
                placeholder="Email"
                @input="setEmail"
                v-model="dealData.priorBooking.email"
                type="text"
              ></inputWithIcon2>
        <div v-if="$v.dealData.priorBooking.email.$dirty">
                  <div class="field-error" v-if="!$v.dealData.priorBooking.email.required">Email is required</div>
                  <div class="field-error" v-if="!$v.dealData.priorBooking.email.email">Email is invalid</div>
                </div>
            </div>


  <div class="en-dealForm-main-left-form-row">    
 <selectInput @changedSelect="setWhen" v-model="dealData.priorBooking.dineIn">
         <option value="" disabled selected>Dine in</option>
  <option class="en-selectInput-content-option" value=false>Dine in</option>
  <option class="en-selectInput-content-option" value=true>Delivery</option>
      </selectInput>
        <div v-if="$v.dealData.priorBooking.dineIn.$dirty">
                  <div class="field-error" v-if="!$v.dealData.priorBooking.dineIn.required">dineIn On is required</div>
                </div>
            </div>


  <div class="en-dealForm-main-left-form-row">    
 <selectInput @changedSelect="setDelivery" v-model="dealData.priorBooking.delivery">
         <option value="" disabled selected>Delivery</option>
  <option class="en-selectInput-content-option" value=true>Yes</option>
  <option class="en-selectInput-content-option" value=false>No</option>
      </selectInput>
        <div v-if="$v.dealData.priorBooking.delivery.$dirty">
                  <div class="field-error" v-if="!$v.dealData.priorBooking.delivery.required">delivery On is required</div>
                </div>
            </div>



<div class="en-dealForm-main-left-form-row">    
 <inputWithIcon2 isTextArea cols="7" class="en-dealForm-main-left-form-row-two-element"
                iconClass="fas fa-signature"
                placeholder="Delivery Area"
                @input="setDeliveryarea"
                v-model="dealData.priorBooking.deliveryArea"
                type="textarea"
              ></inputWithIcon2>
        <div v-if="$v.dealData.priorBooking.deliveryArea.$dirty">
                  <div class="field-error" v-if="!$v.dealData.priorBooking.deliveryArea.required">Delivery area is required</div>
                </div>
            </div>

  <div class="en-dealForm-main-left-form-row">    
 <selectInput @changedSelect="setPaymethod" v-model="dealData.paymentMethod">
         <option value="" disabled selected>Pay Method</option>
  <option class="en-selectInput-content-option" value="Visa">Visa</option>
  <option class="en-selectInput-content-option" value="cash">Cash On Delivery</option>
  <option class="en-selectInput-content-option" value="wallet">Wallet</option>
  <option class="en-selectInput-content-option" value="fawry">Fawry</option>
  <option class="en-selectInput-content-option" value="points">Points</option>
      </selectInput>
        <div v-if="$v.dealData.paymentMethod.$dirty">
                  <div class="field-error" v-if="!$v.dealData.paymentMethod.required">Pay Method area is required</div>
                </div>
            </div>


     <div v-if="success != '' " class="en-dealForm-msg">
<notification notfiColor="greenNotfi">
  {{success}}
</notification>
      </div>
         <div v-if="error != '' " class="en-contactPerson-msg">
<notification notfiColor="redNotfi">
  {{error}}
</notification>
      </div>

<div v-if="loading" class="spinner"></div>

 <div v-if="!loading" class="en-dealForm-main-left-form-row">
              <buttonWithColors class="btn-font" btnColor="PrupleBtn" @click="confirmDeal" btnLabel="Confirm Deal" />
            </div>
     </div>
        </div>
  </div>
 </div>

    </div>
</template>

<script>
import HereMap from "~/components/en/General/HereMap.vue";
import { required, integer, email } from "vuelidate/lib/validators";
import inputWithIcon2 from "~/components/en/General/inputWithIcon2.vue";
import arinputWithIcon2 from "~/components/ar/General/arinputWithIcon2.vue";
import selectInput from "~/components/en/General/selectInput.vue";
import buttonWithColors from "~/components/en/General/buttonWithColors.vue";
import notification from "~/components/en/General/notification.vue";
import FormData from "form-data";
export default {
    mounted() {
         let config = {
            headers: {
              authorization: localStorage.getItem("token"),
            }
          };
    this.$axios
      .get("https://yalla-ebdaa.herokuapp.com/api/categories")
      .then(data => {
        this.categories = data.data.data;
      });
       this.$axios
      .get("http://localhost:3005/api/merchants",config)
      .then(data => {
        console.log(data);
        this.merchants = data.data.merchants;
      }).catch(error=>{
        console.log(error);
      });
  },
  data() {
    return {
      categories:"",
      merchants:"",
      branchesToShow:"",
            success: '',
      error: "",
      loading: false,
      dealData: {
      branches:"",
      merchant:"",
      category:"",
      name:"",
      arName:"",
      images:"",
      video:"",
      dealType:"",
      type:"",
      dealStartDate:"",
      dealEndDate:"",
      prices:{
originalPrice:"",
      finalPrice:"",
            description:"",
      arDescription:"",
      },
      percentage:"",
      payoutNet:"",
      yallaDealzCommission:"",
      voucher:{
          finalPrice:"",
          validUntil:"",
          minimumQuantityAllowed:"",
          maximumQuantityAllowed:"",
          userAllowedFrom:"",
          userAllowedUpto:"",
          allowedQuantity:"",
            validFor:"",
      minimumAge:"",
      validOn:"",
      },
      priorBooking:{
      status:"",
      email:"",
      contactNumber:"",
      deliveryArea:"",
      dineIn:"",
      delivery:"",
      },
      highlightes:"",
      arHighlightes:"",
      paymentMethod:"",
      },
      file:"",
    };
  },
  components: {
    HereMap,
    inputWithIcon2,
    selectInput,
    buttonWithColors,
    notification,
    arinputWithIcon2,
  },
  validations: {
    dealData:{
    merchant: {
      required
    },
    category: {
      required,
    },
     branches: {
      required,
    },
    name: {
      required,
    },
    arName: {
      required,
    },
    type:{
required,
    },
     dealType: {
      required,
    },
    dealStartDate:{
        required,
    },
    dealEndDate:{
        required,
    },
    prices:{
    originalPrice:{
        required,
        integer,
    },
    finalPrice:{
        required,
        integer,
    },
        description:{
            required,
    },
     arDescription:{
            required,
    },
    },
    percentage:{
        required,
        integer,
    },
    payoutNet:{
       required,
        integer, 
    },
    yallaDealzCommission:{
          required,
        integer, 
    },
    voucher:{
        finalPrice:{
              required,
        integer, 
        },
        validUntil:{
             required,
        },
        minimumQuantityAllowed:{
             required,
             integer,
        },
        maximumQuantityAllowed:{
            required,
             integer,
        },
        userAllowedFrom:{
            required,
             integer,
        },
        userAllowedUpto:{
            required,
             integer,
        },
        allowedQuantity:{
            required,
             integer,
        },
            validFor:{
            required,
    },
    minimumAge:{
required,
             integer,
    },
    validOn:{
            required,
    },
    },
     highlightes:{
            required,
    },
     arHighlightes:{
            required,
    },

   
    priorBooking:{
    status:{
        required,
    },
    deliveryArea:{
        required,
    },
    dineIn:{
        required,
    },
    delivery:{
      required,
    },
     email:{
        required,
        email,
    },
        contactNumber:{
            required,
            integer
    },
    },

    paymentMethod:{
        required,
    }
    }
  },
  methods: {
        confirmDeal() {
        console.log("start function");
           this.$v.$touch();
      this.loading = true;
      if (this.$v.$invalid) {
        console.log(this.$v);
        console.log(this.$v.$invalid);
        this.loading = false;
      } else {
        console.log("hala");
        const uploadImage = async payload => {
        console.log("start upload");
          const formDataa = new FormData();
          formDataa.append("image", this.file);
          let config = {
            headers: {
              authorization: localStorage.getItem("token"),
              "Content-Type": `application/json'; boundary=${formDataa._boundary}`
            }
          };
          await this.$axios
            .post("http://localhost:3005/api/upload/image", formDataa, config)
            .then(data => {
              this.dealData.images = [data.data.imageUrl];
            }).catch(error=>{
              console.log(error);
              this.loading = false;
            });
        };
        const submitDeal = async () => {
        console.log("start submit");

          await uploadImage();
        console.log("done upload submit");
          console.log("start submit");
          let config = {
            headers: {
              authorization: localStorage.getItem("token")
            }
          };
       
          let deepData = JSON.parse(JSON.stringify(this.dealData));
           deepData.branches = [deepData.branches];
           const myValidString = deepData.voucher.validFor;
           deepData.voucher.validFor = myValidString.split(",");
          await this.$axios
            .post("http://localhost:3005/api/deals", deepData, config)
            .then(result => {
              console.log(result);
              this.success = "Added to Deals";
              this.loading = false;
            })
            .catch(error => {
              console.log(error);
              this.error = "Something wrong happened";
              this.loading = false;
            });
        };
        console.log("end function");
        submitDeal();
      }
    },
    // 
    setMerchant(value) {
      this.dealData.merchant = value;
      this.$v.dealData.merchant.$touch();
               let config = {
            headers: {
              authorization: localStorage.getItem("token"),
            }
          };
        this.$axios
      .get("http://localhost:3005/api/merchants/"+this.dealData.merchant+"/branches",config)
      .then(data => {
        this.branchesToShow = data.data.branches;
        console.log(data.data.branches);
      });
    },
    setCategory(value) {
      this.dealData.category = value;
      this.$v.dealData.category.$touch();
    },
    setBranches(value) {
      this.dealData.branches = value;
      this.$v.dealData.branches.$touch();
    },
      setName(value) {
      this.dealData.name = value;
      this.$v.dealData.name.$touch();
    },
     setArname(value) {
      this.dealData.arName = value;
      this.$v.dealData.arName.$touch();
    },
     setVideo(value) {
      this.dealData.video = value;
    },
      setDeal(value){
      this.dealData.type = value;
      this.$v.dealData.type.$touch();
    },
    setDealType(value){
      this.dealData.dealType = value;
      this.$v.dealData.dealType.$touch();
    },
    setDate(value){
        this.dealData.dealStartDate = value;
      this.$v.dealData.dealStartDate.$touch();
    },
    setEndDate(value){
        this.dealData.dealEndDate = value;
      this.$v.dealData.dealEndDate.$touch();  
    },
    setPrice(value){
        this.dealData.prices.originalPrice = value;
        this.$v.dealData.prices.originalPrice.$touch();
    },
    setFinalPrice(value){
        this.dealData.prices.finalPrice = value;
        this.$v.dealData.prices.finalPrice.$touch();
    },
         setDesc(value){
         this.dealData.prices.description = value;
        this.$v.dealData.prices.description.$touch();
    },
      setArDesc(value){
         this.dealData.prices.arDescription = value;
        this.$v.dealData.prices.arDescription.$touch();
    },
    setPercentage(value){
         this.dealData.percentage = value;
        this.$v.dealData.percentage.$touch();
    },
    setPayoutNet(value){
 this.dealData.payoutNet = value;
        this.$v.dealData.payoutNet.$touch();
    },
    setYDcommission(value){
 this.dealData.yallaDealzCommission = value;
        this.$v.dealData.yallaDealzCommission.$touch();
    },
     setVfinalprice(value){
 this.dealData.voucher.finalPrice = value;
        this.$v.dealData.voucher.finalPrice.$touch();
    },
    setVvaliduntill(value){
 this.dealData.voucher.validUntil = value;
        this.$v.dealData.voucher.validUntil.$touch();
    },
    setVmqa(value){
        this.dealData.voucher.minimumQuantityAllowed = value;
        this.$v.dealData.voucher.minimumQuantityAllowed.$touch();
    },
    setVmxqa(value){
        this.dealData.voucher.maximumQuantityAllowed = value;
        this.$v.dealData.voucher.maximumQuantityAllowed.$touch();
    },
    setVuserallowedfrom(value){
 this.dealData.voucher.userAllowedFrom = value;
        this.$v.dealData.voucher.userAllowedFrom.$touch();
    },
    setVuserallowedfupto(value){
         this.dealData.voucher.userAllowedUpto = value;
        this.$v.dealData.voucher.userAllowedUpto.$touch();
    },
     setVallowedquanitity(value){
         this.dealData.voucher.allowedQuantity = value;
        this.$v.dealData.voucher.allowedQuantity.$touch();
    },
    setValidFor(value){
           this.dealData.voucher.validFor = value;
        this.$v.dealData.voucher.validFor.$touch();
    },
    setMinimumage(value){
         this.dealData.voucher.minimumAge = value;
        this.$v.dealData.voucher.minimumAge.$touch();
    },
    setVouchervalidon(value){
         this.dealData.voucher.validOn = value;
        this.$v.dealData.voucher.validOn.$touch();
    },

      setHighlight(value){
         this.dealData.highlightes = value;
        this.$v.dealData.highlightes.$touch();
    },
       setArhighlight(value){
         this.dealData.arHighlightes = value;
        this.$v.dealData.arHighlightes.$touch();
    },
    setContactnumber(value){
        this.dealData.priorBooking.contactNumber = value;
        this.$v.dealData.priorBooking.contactNumber.$touch();
    },
    setEmail(value){
        this.dealData.priorBooking.email = value;
        this.$v.dealData.priorBooking.email.$touch();
    },
    setPrior(value){
        this.dealData.priorBooking.status = value;
        this.$v.dealData.priorBooking.status.$touch();

    },
    setDeliveryarea(value){
        this.dealData.priorBooking.deliveryArea = value;
        this.$v.dealData.priorBooking.deliveryArea.$touch();

    },
    setWhen(value){
        this.dealData.priorBooking.dineIn = value;
        this.$v.dealData.priorBooking.dineIn.$touch();
    },
    setDelivery(value){
 this.dealData.priorBooking.delivery = value;
        this.$v.dealData.priorBooking.delivery.$touch();
    },
     setPaymethod(value){
        this.dealData.paymentMethod = value;
        this.$v.dealData.paymentMethod.$touch();
    },
      onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
      this.file = this.$refs.imageUpload.files[0];
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;
      reader.onload = (e) => {
        vm.dealData.images = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.dealData.images = '';
    },
  }
};
</script>

<style lang="scss" scoped>
.en-dealForm {
  &-msg {
    margin-bottom:10px;
  }
  &-title {
    font-size: 24px;
  }
  &-main {
    width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: center;
    &-left {
      // background-color: red;
      width: 60%;
      &-form {
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        &-row {
          margin-bottom: 10px;
        }
      }
    }
  }
  .field-error {
    font-size: 15px;
    color:red;
  }
  .btn-font{
      font-size: 18px;
  }
    input[type="file"] {
    display: none;
}
.custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    width: 100%;
    text-align: center;
border: 1px solid rgb(45, 105, 233);
 border-radius: 10px;
    cursor: pointer;
    font-size: 18px;
}
.optional-title{
  color: #ccc;
  font-size: 15px;
}
.cover-img{
    width: 200px;
         width: 200px;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}
.upload-img{
    margin-bottom:15px;
}
}



// Spinner

.spinner {
  width: 40px;
  height: 40px;
  background-color: #333;

  margin: 100px auto;
  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
  animation: sk-rotateplane 1.2s infinite ease-in-out;
}

@-webkit-keyframes sk-rotateplane {
  0% { -webkit-transform: perspective(120px) }
  50% { -webkit-transform: perspective(120px) rotateY(180deg) }
  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
}

@keyframes sk-rotateplane {
  0% { 
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) 
  } 50% { 
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) 
  } 100% { 
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
</style>