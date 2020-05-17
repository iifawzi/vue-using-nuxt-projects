<template>
    <div class="en-box">
        <nuxt-link :to="to" class="en-box-content">
            <div class="en-box-content-icon">
<i :class="iconClass"></i>
            </div>
            <div class="en-box-content-name">
{{title}}
            </div>
        </nuxt-link>
    </div>
</template>
<script>
export default {
    props:{
        title:String,
        iconClass:String,
        to:String,
    }
}
</script>

<style lang="scss">
.en-box{
    cursor: pointer;
    &-content{
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        width: auto;
        height: 300px;
        width: 300px;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.103);
          border-radius: 50px;
            text-decoration: none;
       color: black;
        &-icon{
            width: 100%;
            text-align: center;
            color: #DC1F29;
            font-size: 150px;
        }
        &-name{
            font-size: 25px;
        }
    }
    &:hover{
      .en-box-content{
       box-shadow: 0px;
       background-color: #DC1F29;
       text-decoration: none;
       color: white;
      }
      .en-box-content-icon{
color: white;
      }
       .en-box-content-name{
color: white;

      }
    }
}

 @media (max-width: 1150px) {
        .en-box{
    &-content{
    
        height: 250px;
        width: 250px;
          
        &-icon{
            font-size: 100px;
        }
        &-name{
            font-size: 20px;
        }
    }
}
    }

    @media (max-width: 992px) {
      .en-box{
margin-bottom: 25px;
    }
}
</style>