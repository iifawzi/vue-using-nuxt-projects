<template>
    <div class="en-dashboard">
            
<mainboxes/>      
    </div>
</template>

<script>
import dropWhenClick from "~/components/en/General/dropWhenClick.vue"
import dashnav from "~/components/en/Navigation/dashnav.vue"
import mainboxes from "~/components/en/Dashboard/mainboxes.vue"
export default {
    layout:"adminlayout",
middleware: ['check-auth','auth'],
components:{
    dropWhenClick,
    dashnav,
    mainboxes
}
}
</script>

<style lang="scss" scoped>
.en-dashboard{
height: 100vh;
&-margined{
    margin-right: 100px;
    margin-left: 100px;
    // background-color: rgba(255, 0, 0, 0.226);
    height: 100vh;
}
}


@media (max-width: 992px) { 
.en-dashboard{
    height: 100vh;
&-margined{
    margin-right: 0px;
    margin-left: 0px;
}
}
}
</style>