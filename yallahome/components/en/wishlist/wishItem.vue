<template>
    <div class="en-wishItem">
        <div class="en-wishItem-content">
            <div class="en-wishItem-content-top">
                x
            </div>
            <div class="en-wishItem-content-bottom">
             <div class="en-wishItem-content-bottom-left">
                 <div class="en-wishItem-content-bottom-left-img">
                    <img :src="imgLink" class="en-wishItem-content-bottom-left-img-image" />
                 </div>
                 <div class="en-wishItem-content-bottom-left-item">
                     <div class="en-wishItem-content-bottom-left-item-name">
    Canverse
                     </div>
                   <div class="en-wishItem-content-bottom-left-item-desc">
        CHECKRED SHIRT
                     </div>
             
                 </div>
             </div>
            <div class="en-wishItem-content-bottom-right">

                <div class="en-wishItem-content-bottom-right-price">
                    Price: <span class="en-wishItem-content-bottom-right-price-price">180$</span>
                </div>
                <div class="en-wishItem-content-bottom-right-options">
                    <div class="en-wishItem-content-bottom-right-options-btn">
  <button class="en-wishItem-content-bottom-right-options-btn-button">Add to Cart</button>
                    </div>
                
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
.en-wishItem{
    &-content{
        padding-top: 10px;
        border-top: 1px solid #F3F3F3;
        &-top{
text-align: right;
font-size: 20px;
&:hover{
            color: rgb(235, 12, 60);
            cursor: pointer;
}
        }
        &-bottom{
        display: flex;
        flex-flow: row;
        justify-content: space-between;
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
            &-price{
                &-price{
                    font-weight: 800;

                }
            }
            &-options{
                width: 250px;
                justify-content: space-between;
                color: rgb(235, 12, 60);
                &-btn{
                    &-button{
                        background-color: rgb(235, 12, 60);
                        color: white;
                        border: 0px;
                        &:focus{
                            outline: none;
                        }
                        &:hover{
                            background-color:  rgb(197, 14, 54);
                        }
                    }
                }
            }
        }
        }
    }
}
</style>