<template>
    <div class="en-mainCards">
        <div class="en-mainCards-content">
        <nuxt-link to="/en/deal"><mainCard  imgLink="https://source.unsplash.com/random?sig=190"/></nuxt-link>
           <nuxt-link to="/en/deal"><mainCard  imgLink="https://source.unsplash.com/random?sig=25"/></nuxt-link>
              <nuxt-link to="/en/deal"><mainCard  imgLink="https://source.unsplash.com/random?sig=2"/></nuxt-link>
                 <nuxt-link to="/en/deal"><mainCard  imgLink="https://source.unsplash.com/random?sig=294"/></nuxt-link>
                    <nuxt-link to="/en/deal"><mainCard  imgLink="https://source.unsplash.com/random?sig=29553"/></nuxt-link>
                       <nuxt-link to="/en/deal"><mainCard  imgLink="https://source.unsplash.com/random?sig=303"/></nuxt-link>
        </div>
  
    </div>
</template>


<script>
import mainCard from "~/components/en/index/mainCard";
export default {
    components:{
        mainCard,
    }
}
</script>

<style lang="scss" scoped>
.en-mainCards{
    width: 100%;
    margin-top: 50px;
    &-content{
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }
}
a{
    color: #22252A;
    text-decoration: none;
}
</style>