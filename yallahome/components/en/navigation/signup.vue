<template>
    <div class="en-drop-signup">
        <div class="en-drop-signup-content">
            <div class="en-drop-signup-content-right">
                <signupForm/>
            </div>
        </div>
    </div>
</template>

<script>
import signupForm from "~/components/en/navigation/signupForm"
export default {
    components:{
        signupForm,
    },
    data(){
return {
    Locals:true,
    Goods: false,
    Hotels: false,
    Coupons: false,
}
    },
}
</script>
<style lang="scss" scoped>
.en-drop-signup{
    &-content{
           color: #22252A;
        display: flex;
        flex-flow: row;
        &-right{
            display: flex;  
            padding-left: 80px;
            padding-top: 20px;
            width: 100%;
        }
    }

}
.active {
                background-color: rgb(243, 243, 243);
}
</style>