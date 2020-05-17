<template>
    <div class="smallIcon">
        <i :class="iconClass" class="theIcon"></i>
    </div>
</template>

<script>
export default {
    props:{
        iconClass:{
            type:String,
            required:true,
        }
    }
}
</script>
<style lang="scss" scoped>
.smallIcon{
    width: 30px;
    height: 30px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #5271ff;
    &:hover{
        background-color: #e03a3f;
    border: #e03a3f;

      .theIcon{
    color: white;
}  
    }
}
.theIcon{
    color: #5271ff;;
}
</style>