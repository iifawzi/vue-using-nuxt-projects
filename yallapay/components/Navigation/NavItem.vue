<template>
    <div class="NavItem" >
        <span class="NavMainLabel" >
             <nuxt-link exact  :class="itemsColor" :to="to"><slot/></nuxt-link>
        </span>
        <div :class="boxColor" class="NavItemBox">
        <div class="NavColorBOX"></div>
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
.NavItem{
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
}
.NavItemBox{
    width: 50px;
    height: 2px;
    visibility: hidden;
}
.box-white{
    background-color: white;
}
.box-black{
    background-color: black;
}
.NavMainLabel{
    font-size: 16px;
    a{
        text-decoration: none;
    }
    a.nuxt-link-active {
    color: #5271FF;
}
}
.NavColorBOX{
    width: 0%;
    height: 100%;
    background-color:#ff2a31;
}
.NavItem:hover {
      .text-whitee{
          color: #ff2a31;
      }
      .NavItemBox{
              visibility:visible;
      }
    .NavColorBOX{
     animation: move 0.5s ease;
      animation-fill-mode: forwards;

}
}


@keyframes move {
   100% { width: 100%; }
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