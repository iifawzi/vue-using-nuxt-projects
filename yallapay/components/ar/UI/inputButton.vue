<template>
    <div class="controllWithInput">
     
       <div class="btnAreaFooter">
    <Button btnStyle="red" class="btnSubs">{{title}}</Button>
       </div>
          <div class="inputAreaFooter">
            <input class="inpSubs" type="text" :placeholder="placeHolder">
        </div>
    </div>
</template>
<script>
import Button from "~/components/ar/UI/button.vue"
export default {
    components:{
        Button,
    },
        props: {
        placeHolder: {
            type: String,
            required: true,
        },
        title:String,
    },
}
</script>
<style lang="scss" scoped>
.controllWithInput{
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
}
.inputAreaFooter{
    width: 60%;
}
.inpSubs{
    height: 100%;
    width: 100%;
    outline: none;
    border:0px;
    color:#1b3861 ;
    padding-right: 5px;
    direction: rtl;
}
.inpSubs:focus{
    outline: none;
  padding-right: 5px;

}
.inpSubs:focus::placeholder { 
  color:#1b3861;
    direction: rtl;

}
.inpSubs::placeholder { 
  color: #1b3861;
  opacity: 1; 
  text-align: right;
  padding-right: 5px;
    direction: rtl;

}
.btnAreaFooter{
    width: 40%;
}
.btnSubs{
    font-size: 14px;
    border-radius: 0px;
}
</style>