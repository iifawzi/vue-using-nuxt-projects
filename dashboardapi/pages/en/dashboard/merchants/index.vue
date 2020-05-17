<template>
    <div class="en-merchants">
        <div :class="MainSide" class="en-merchants-content">
         
<merchantForms/>
            
        </div>
    </div>
</template>
<script>
import merchantForms from "~/components/en/Dashboard/merchantForms.vue"

export default {
    props:{
        MainSide:String,
        default:"",
    },
    layout:"adminlayout",
    components:{
        merchantForms,
    }
}
</script>

<style lang="scss" scoped>
.en-merchants{
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    &-content{
        margin-top: 5%;
        width: 100%;
        display: flex;
        flex-flow: row;
        justify-content: center;
    }
}
</style>