<template>
    <div class="en-mainPage">
       <div class="en-mainPage-content">
           <mainCards/>
           <trending/>
                      <topSelling/>
                      <bestReviews/>
                      <pagination :pagesRequired="pagesRequired" :currentPage="currentP"/>
       </div>
    </div>
</template>

<script>
import mainCards from "~/components/en/index/mainCards";
import topSelling from "~/components/en/index/topSelling";
import bestReviews from "~/components/en/index/bestReviews";
import trending from "~/components/en/index/trending";
import pagination from "~/components/en/index/pagination";
export default {
    data(){
        return {

            pagesRequired:10,
        }
    },
    components:{
        mainCards,
        topSelling,
        trending,
        bestReviews,
        pagination,
    },
    computed:{
        currentP(){
        if(this.$route.query.page == undefined){
          return 1;
        }else {
            return this.$route.query.page;
        }
        }
    }
}
</script>
<style lang="scss" scoped>
.en-mainPage{
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    &-content{
        width:80%;
    }
}
</style>