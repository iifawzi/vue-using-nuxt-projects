<template>
    <div class="en-drop-signin">
        <div class="en-drop-signin-content">
               <div class="en-drop-signin-content-left">
                    <div class="en-drop-signin-content-left-item">
                         <i class="fas fa-user-friends en-drop-signin-content-left-item-icon"></i>
                    My Groupons
                </div>
                <div class="en-drop-signin-content-left-item">
                     <i class="fas fa-gifts en-drop-signin-content-left-item-icon"></i>
                   My Groupon+ Deals
                </div>
                <div class="en-drop-signin-content-left-item">
                    <i class="far fa-heart en-drop-signin-content-left-item-icon"></i>
                   My Wishlist
                </div>
                       <hr class="en-drop-signin-content-left-line">
                       <div class="en-drop-signin-content-left-item">
                  Account
                </div>
                  <div class="en-drop-signin-content-left-item">
                  Profile
                </div>
                <div class="en-drop-signin-content-left-item">
                  Redeem Gift Card
                </div>
                <div class="en-drop-signin-content-left-item">
                  Refer Friends, Get $10
                </div>
                <div class="en-drop-signin-content-left-item">
                  Not a member? Sign Up
                </div>
            </div>
            <div class="en-drop-signin-content-line">
            </div>
            <div class="en-drop-signin-content-right">
                <signForm/>
            </div>
        </div>
    </div>
</template>

<script>
import signForm from "~/components/en/navigation/signForm"
export default {
    components:{
        signForm,
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
.en-drop-signin{
    &-content{
           color: #22252A;
        display: flex;
        flex-flow: row;
&-left{
            width: 50%;
            padding-top: 20px;
            &-item{
                padding-left: 10px;
                padding-right: 10px;
                height: 40px;
                display: flex;
                flex-flow: row;
                align-items: center;
                font-size: 16px;
                &-icon{
                    padding-right: 5px;
                }
            }
            &-line{
                width: 150px;
                margin-left: 20px;
            }
        }
        &-line{
            border-right: 1px solid rgb(218, 218, 218);
            min-height: 400px;
        }
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