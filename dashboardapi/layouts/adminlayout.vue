<template>
  <div class="en-layout-margined">
<dashnav/>
    <nuxt />
  </div>
</template>


<script>
import dashnav from "~/components/en/Navigation/dashnav.vue"
export default {
    components:{
        dashnav,
    }
}
</script>


<style lang="scss" scoped>
.en-layout{
&-margined{
    margin-right: 100px;
    margin-left: 100px;
    // background-color: rgba(255, 0, 0, 0.226);
    height: 100vh;
}
}


@media (max-width: 992px) { 
.en-layout{
&-margined{
    margin-right: 0px;
    margin-left: 0px;
}
}
}
</style>