<template>
  <div class="en-mainCard">
    <div class="en-mainCard-content">
      <div class="en-mainCard-content-header">
        <img class="en-mainCard-content-header-img" :src="imgLink" alt />
        <div class="en-mainCard-content-header-name">
          ABCmouse.com
          <div class="en-mainCard-content-header-name-stars">
            <i class="fas fa-star colored-star"></i>
            <i class="fas fa-star colored-star"></i>
            <i class="fas fa-star colored-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
                     <div class="en-mainCard-content-header-price">
                 <div class="en-mainCard-content-header-price-strike">
                     <span class="en-mainCard-content-header-price-strike-old">
             $20.00
                     </span>
                     </div>
                     <div class="en-mainCard-content-header-price-new">
                         10$
                     </div>
          </div>
            <div class="en-mainCard-content-header-company">
               Fawzi's international Company
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imgLink: String
  }
};
</script>


<style lang="scss" scoped>
.en-mainCard {
  display: inline-block;
  margin-bottom: 60px;
  &-content {
    width: 400px;
    &-header {
      &-img {
        width: 400px;
        height: 250px;
        border-radius: 20px;
      }
      &-name {
          display: flex;
          flex-flow: row;
          justify-content: space-between;
          width: 400px;
          font-weight:900;
      }
      &-price{
          display: flex;
          flex-flow: row;
          font-size: 25px;
          &-strike{
              color: #CD0C4B;
               text-decoration: line-through;
               &-old{
       color: rgb(207, 207, 207);
          }
          }
          &-new{
              margin-left: 15px;
              color: rgb(16, 185, 16) ;
          }
         
      }
      &-company{
        margin-top: -5px;
        font-size: 14px;
          color: #22252A;
      }
    }
  }
}
.colored-star{
    color: rgb(216, 11, 79);
}
</style>