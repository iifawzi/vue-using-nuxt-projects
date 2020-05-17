<template>
<div class="div-button">
      <button v-if="!preventClick && !preventNoEvent" @click="$emit('click')" :class="btnColor" class="en-buttonWithColors-button redButton">{{btnLabel}}</button>
       <button v-if="preventClick" @click.prevent="$emit('click',event)" :class="btnColor" class="en-buttonWithColors-button redButton">{{btnLabel}}</button>
       <button v-if="preventNoEvent" @click.prevent="$emit('click')" :class="btnColor" class="en-buttonWithColors-button redButton">{{btnLabel}}</button>
</div>
       

        
</template>

<script>
export default {
    props:{
        btnLabel:String,
        btnColor:String,
        preventClick:{
            default:false,
            type:Boolean,
        },
         preventNoEvent:{
            default:false,
            type:Boolean,
        }
        
    }
}
</script>

<style lang="scss">
.en-buttonWithColors-button{
    border: 0px
}
.PrupleBtn {
    background-color: #5271ff;
    border-radius: 3px;
    width: 100%;
    color: white;
    height: 35px;
    &:hover{
        background-color: #6682ff;
    }
    &:focus{
        outline: none;
    }
}

.RedBtn {
    background-color: #DC1F29;
    border-radius: 3px;
    width: 100%;
    color: white;
    height: 35px;
    &:hover{
        background-color: rgb(224, 61, 69);
    }
    &:focus{
        outline: none;
    }
}
</style>