<template>
    <div class="en-cartPage">
        <div class="en-cartPage-content">
            <div class="en-cartPage-content-title">
                SHOPPING CART
            </div>
                <div class="en-cartPage-content-carts">
<cart imgLink="https://source.unsplash.com/random?sig=29111" class="en-cartPage-content-carts-cart"/>
<cart imgLink="https://source.unsplash.com/random?sig=1"  class="en-cartPage-content-carts-cart"/>
<cart imgLink="https://source.unsplash.com/random?sig=98"  class="en-cartPage-content-carts-cart"/>
                </div>
        </div>
    </div>
</template>

<script>
import cart from  "~/components/en/cart/cart.vue"
export default {
    components:{
        cart,
    }
}
</script>
<style lang="scss" scoped>
.en-cartPage{
    display: flex;
    flex-flow: row;
    justify-content: center;
    &-content{
        margin-top: 200px;
        text-align: center;
        width: 75%;
        &-title{
  font-size: 30px;
  margin-bottom: 30px;
        }
        &-carts{
            &-cart{
                margin-bottom: 20px;
            }
        }
      
    }
}
</style>