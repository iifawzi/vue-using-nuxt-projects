<template>
    <div class="en-drop-categories">
        <div class="en-drop-categories-content">
               <div class="en-drop-categories-content-left">
                <div @mouseover="Locals = true;Goods=false;Hotels=false;Coupons=false " :class='{active: Locals}' class="en-drop-categories-content-left-item">
                    Locals
                    <i class="fas fa-chevron-right en-drop-categories-content-left-item-icon"></i>
                </div>
                <div @mouseover="Goods = true; Locals = false;Coupons=false;Hotels=false;" :class='{active: Goods}'  class="en-drop-categories-content-left-item">
                    Goods
                     <i class="fas fa-chevron-right en-drop-categories-content-left-item-icon"></i>
                </div>
                <div @mouseover="Hotels = true; Locals = false;Coupons=false;Goods=false " :class='{active: Hotels}'  class="en-drop-categories-content-left-item">
                    Hotels & travel
                     <i class="fas fa-chevron-right en-drop-categories-content-left-item-icon"></i>
                </div>
                <div @mouseover="Coupons = true; Locals = false; Hotels=false;Goods=false; "  :class='{active: Coupons}' class="en-drop-categories-content-left-item">
                    Coupons
                     <i class="fas fa-chevron-right en-drop-categories-content-left-item-icon"></i>
                </div>
                    <hr class="en-drop-categories-content-left-line">
                    <div class="en-drop-categories-content-left-item">
                    Deals of the day
                </div>
                <div class="en-drop-categories-content-left-item">
                    Movies
                </div>
            </div>
            <div class="en-drop-categories-content-line">
            </div>
            <div class="en-drop-categories-content-right">
                <div class="en-drop-categories-content-right-content">

                <div v-if="Locals" class="en-drop-categories-content-right-content-item">
<div class="en-drop-categories-content-right-content-item-header">
                        Locals
                        <nuxt-link class="en-drop-categories-content-right-content-item-header-link" to="/">Shop All</nuxt-link>
                    </div>
                    <div class="en-drop-categories-content-right-content-item-subLinks">
                        <div class="en-drop-categories-content-right-content-item-subLinks-section">
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Automotive</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Beauty & Spas</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Food & Drink</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Health & Fitness</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Home Services</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Meals & Juices dilevry</nuxt-link>
                        </div>
                        <div class="en-drop-categories-content-right-content-item-subLinks-section">
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Automotive</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Beauty & Spas</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Food & Drink</nuxt-link>
                        </div>
                    </div>
                </div>
                    
                      <div v-if="Goods" class="en-drop-categories-content-right-content-item">
<div class="en-drop-categories-content-right-content-item-header">
                        Goods
                        <nuxt-link class="en-drop-categories-content-right-content-item-header-link" to="/">Shop All</nuxt-link>
                    </div>
                    <div class="en-drop-categories-content-right-content-item-subLinks">
                        <div class="en-drop-categories-content-right-content-item-subLinks-section">
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Automotive</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Beauty & Spas</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Food & Drink</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Health & Fitness</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Home Services</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Meals & Juices dilevry</nuxt-link>
                        </div>
                        <div class="en-drop-categories-content-right-content-item-subLinks-section">
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Automotive</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Beauty & Spas</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Food & Drink</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Health & Fitness</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Home Services</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Meals & Juices dilevry</nuxt-link>
                        </div>
                        <div class="en-drop-categories-content-right-content-item-subLinks-section">
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Automotive</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Beauty & Spas</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Food & Drink</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Health & Fitness</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Home Services</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Meals & Juices dilevry</nuxt-link>
                        </div>
                        <div class="en-drop-categories-content-right-content-item-subLinks-section">
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Automotive</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Beauty & Spas</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Food & Drink</nuxt-link>
                        </div>
                    </div>
                </div>

                    <div v-if="Hotels" class="en-drop-categories-content-right-content-item">
<div class="en-drop-categories-content-right-content-item-header">
                        Hotels & Travel
                        <nuxt-link class="en-drop-categories-content-right-content-item-header-link" to="/">Shop All</nuxt-link>
                    </div>
                    <div class="en-drop-categories-content-right-content-item-subLinks">
                        <div class="en-drop-categories-content-right-content-item-subLinks-section">
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Automotive</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Beauty & Spas</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Food & Drink</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Health & Fitness</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Home Services</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Meals & Juices dilevry</nuxt-link>
                        </div>
                         <div class="en-drop-categories-content-right-content-item-subLinks-section">
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Automotive</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Beauty & Spas</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Food & Drink</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Health & Fitness</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Home Services</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Meals & Juices dilevry</nuxt-link>
                        </div>
                        <div class="en-drop-categories-content-right-content-item-subLinks-section">
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Automotive</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Beauty & Spas</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Food & Drink</nuxt-link>
                        </div>
                    </div>
                </div>


                   <div v-if="Coupons" class="en-drop-categories-content-right-content-item">
<div class="en-drop-categories-content-right-content-item-header">
                        Coupons
                        <nuxt-link class="en-drop-categories-content-right-content-item-header-link" to="/">Shop All</nuxt-link>
                    </div>
                    <div class="en-drop-categories-content-right-content-item-subLinks">
                        <div class="en-drop-categories-content-right-content-item-subLinks-section">
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Automotive</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Beauty & Spas</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Food & Drink</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Health & Fitness</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Home Services</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Meals & Juices dilevry</nuxt-link>
                        </div>
                        <div class="en-drop-categories-content-right-content-item-subLinks-section">
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Automotive</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Beauty & Spas</nuxt-link>
                            <nuxt-link class="en-drop-categories-content-right-content-item-subLinks-section-item" to="/">Food & Drink</nuxt-link>
                        </div>
                    </div>
                </div>

                

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
.en-drop-categories{
    &-content{
         color: #22252A;
        display: flex;
        flex-flow: row;
&-left{
            width: 40%;
            padding-top: 20px;
            &-item{
                padding-left: 10px;
                padding-right: 10px;
                height: 40px;
                margin-bottom: 10px;
                display: flex;
                flex-flow: row;
                align-items: center;
                font-size: 16px;
                &-icon{
                    margin-left: auto;
                    padding-right: 10px;
                    font-size: 18px;
                }
            }
            &-line{
                width: 200px;
                margin-left: 40px;
            }
        }
        &-line{
            border-right: 1px solid rgb(218, 218, 218);
            min-height: 350px;
        }
        &-right{
            display: flex;
            flex-flow: column;
            align-items: center;
            padding-left: 20px;
            padding-top: 20px;
            &-content{
 &-item{
                &-header{
                    font-size: 20px;
                    color: rgb(41, 41, 41);
                    &-link{
                        margin-left:5px;
                        font-size: 12px;
                    }
                }
                &-subLinks{
                    display: flex;
                    flex-flow: row;
                    margin-top: 20px;
                    height: 250px;
                    &-section {
                        display: flex;
                        flex-flow: column;
                        &:not(:first-child){
                            margin-left: 60px;
                        }
                        &-item{
                        margin-bottom: 20px;
                        width: auto;
                        min-width: 150px;
                  
                    }
                    }
                    
                }
            }
            }
           
        }
    }

}
.active {
                background-color: rgb(243, 243, 243);
}
</style>