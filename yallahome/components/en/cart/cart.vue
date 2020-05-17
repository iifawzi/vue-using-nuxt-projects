<template>
    <div class="en-cart">
        <div class="en-cart-content">
             <div class="en-cart-content-left">
                 <div class="en-cart-content-left-img">
                    <img :src="imgLink" class="en-cart-content-left-img-image" />
                 </div>
                 <div class="en-cart-content-left-item">
                     <div class="en-cart-content-left-item-name">
    Canverse
                     </div>
                   <div class="en-cart-content-left-item-desc">
        CHECKRED SHIRT
                     </div>
             
                 </div>
             </div>
            <div class="en-cart-content-right">
                <div class="en-cart-content-right-qty">
                    QTY: <span class="en-cart-content-right-qty-qty">1</span>
                </div>
                <div class="en-cart-content-right-price">
                    Price: <span class="en-cart-content-right-price-price">180$</span>
                </div>
                <div class="en-cart-content-right-options">
                    <div class="en-cart-content-right-options-delete">
                        <i class="fas fa-times"></i>
                    </div>
                    <div class="en-cart-content-right-options-edit">
                        <i class="fas fa-pencil-alt"></i>
                    </div>
                      <div class="en-cart-content-right-options-like">
                        <i class="far fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        imgLink:String,
    }
}
</script>
<style lang="scss" scoped>
.en-cart{
    &-content{
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        padding-top: 20px;
        border-top: 1px solid #F3F3F3;
        &:hover{
              border-top: 1px solid rgb(235, 12, 60);
        }
        &-left{
            display: flex;
            flex-flow: row;
            align-self: center;
            &-img{
                &-image{
                    width: 100px;
                    height: 120px;
                    border-radius: 30px;
                }
            }
            &-item{
                margin-left:100px;
                padding-top:26px;
                text-align: left;
                &-name{
                         font-size: 18px;
                         color: #797979;
                }
                &-desc{
                    font-size: 22px;
                }
            }
        }
        &-right{
            width: 50%;
            display: flex;
            flex-flow: row;
            justify-content: space-around;
            font-size: 18px;
                   align-self: center;
            &-qty{
                &-qty{
                    font-weight: 800;
                }
         
            }
            &-price{
                &-price{
                    font-weight: 800;

                }
            }
            &-options{
                display: flex;
                flex-flow: row;
                width: 100px;
                justify-content: space-between;
                color: rgb(235, 12, 60);
            }
        }
    }
}
</style>