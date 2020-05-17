<template>
    <div class="header-with-bg">
        <div class="header-with-bg-header">
   <div class="header-with-bg-header-overlay">
             <Navbar navType="notSticky" itemsColor="text-whitee" boxColor="box-black" />
             <h1 class="header-with-bg-header-title">{{title}}</h1>
        </div>
        </div>
    </div>
</template>

<script>
import Navbar from "~/components/Navigation/navbar.vue";
export default {
    props:{
        title:String,
    },
    components:{
        Navbar,
    }
}
</script>

<style lang="scss">
.header-with-bg-header{
     background-image: url('~assets/images/home-bg.jpg');
        height: 400px;
    &-overlay{
           background-color: rgba(24, 21, 34, 0.788);
        height: 400px;
    }
    &-title{
        color: white;
        text-align: center;
        margin: 5%;
    }
}
@media (max-width: 780px)  {
    .header-with-bg-header-title{
        margin-top: 80px;
    }
}
</style>