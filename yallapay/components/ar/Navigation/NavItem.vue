<template>
    <div class="NavItemAr" >
        <span class="NavMainLabelAr" >
             <nuxt-link exact :class="itemsColor" :to="to"><slot/></nuxt-link>
        </span>
        <div :class="boxColor" class="NavItemBoxAr">
        <div class="NavColorBOXAr"></div>
        </div>
        </div>
</template>
<script>
export default {
    props:{
        itemsColor:{
            type: String,
            required:false,
        },
         boxColor:{
            type: String,
            required:false,
        },
        to:{
            type:String,
            required:false,
        }
    }
}
</script>
<style lang="scss" scoped>
.text-whitee{
    color: white;
}
.text-blackk{
    color: black;
}
.NavItemAr{
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
}
.NavItemBoxAr{
    width: 50px;
    height: 2px;
    visibility: hidden;
}
.box-whiteAr{
    background-color: #ff2a31;
}
.box-blackAr{
    background-color: #ff2a31;
}
.NavMainLabelAr{
    font-size: 16px;
    a{
        text-decoration: none;
    }
    a.nuxt-link-active {
    color: #5271FF;
}
}
.NavColorBOXAr{
    width: 0%;
    height: 100%;
    background-color:white;
}
.NavItemAr:hover {
      .text-whitee{
          color: #ff2a31;
      }
      .NavItemBoxAr{
              visibility:visible;
      }
    .NavColorBOXAr{
     animation: move 0.5s ease;
      animation-fill-mode: forwards;

}
}


@keyframes move {
   100% { width: 0%; }
   0% { width: 100%; }
}

@media (max-width: 992px) {
    .box-whitee{
    background-color: black;
}
.text-whitee{
    color:black;
}
}
</style>