<template>
    <div class="en-wishPage">
        <div class="en-wishPage-content">
            <div class="en-wishPage-content-title">
                Wishlist
            </div>
                <div class="en-wishPage-content-carts">
<wishItem imgLink="https://source.unsplash.com/random?sig=29111" class="en-wishPage-content-carts-cart"/>
<wishItem imgLink="https://source.unsplash.com/random?sig=1"  class="en-wishPage-content-carts-cart"/>
                </div>
        </div>
    </div>
</template>

<script>
import wishItem from  "~/components/en/wishlist/wishItem.vue"
export default {
    components:{
        wishItem,
    }
}
</script>
<style lang="scss" scoped>
.en-wishPage{
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