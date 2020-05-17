<template>
<div class="container mb-3">
    <div class="inpControl" v-if="!thisTextArea">
       <i :class="iconClass"></i>
    <input  class="Cont-Im-input" v-bind="$attrs" 
      :value="value" 
    @input="$emit('input', $event.target.value)"
       :placeholder="placeHolder">
  </div>


     <div v-if="thisTextArea" class="inpControl">
       <textarea class="Cont-Im-input" 
       v-bind="$attrs" 
      :value="value" 
       :placeholder="placeHolder">
       ></textarea>
  </div>
   <div class="indivInput">
            <slot/>
            </div>
  </div>
</template>

<script>
export default {
    props: {
        placeHolder: {
            type: String,
            required: false,
        },
        iconClass: {
             type: String,
            required: true,
        },
        value: {
            type: String,
            required: false,
        },
        isRequired: {
             type: Boolean,
             default: false
        },
        thisTextArea:{
          type: Boolean,
          required: false,
          default: false,
        }
    },
    computed: {
        showError: function(){
            return this.isRequired;
        }
    },
}
</script>

<style class="scoped">
.inpControl {
    width: 100%;
    border: #606597 1px solid;
  border-radius: 5px;
  color: #606597;
}
.indivInput {
     display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.inpControl i{
    padding: 12px;
    color: #606597;
    font-size: 15px;
}
.Cont-Im-input {
    width: 70%;
  padding: 12px 0px;
  display: inline-block;
  box-sizing: border-box;
  border: 0px;
    color: #606597 !important;
    height: 100%;
}
.Cont-Im-input:focus{
    outline: none;
    border-color: #606597;
    color: #606597;
}
.Cont-Im-input:focus::placeholder { 
  color: #606597;
  opacity: 1; 
  text-align: center;

}
.Cont-Im-input::placeholder { 
  color:#606597;
  opacity: 1; 
  text-align: center;
}

/* Change the white to any color ;) */
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
   -webkit-box-shadow: 0 0 0 1000px white inset !important;
}
.error {
     color: #E94135;
}
input:-webkit-text-fill-color {
    color: #606597;
}
</style>