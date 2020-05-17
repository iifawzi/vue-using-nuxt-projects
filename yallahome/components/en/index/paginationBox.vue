<template>
    <div class="en-paginationBox">
        <div class="en-paginationBox-content" :class="{active:active}">
                <nuxt-link :to="{ path: '', query: { page: pageNumber }}">{{pageNumber}}</nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        pageNumber:{
            type:Number,
            required: true,
        },
        active:{
            type:Boolean,
            default:false,
        }
    }
}
</script>

<style lang="scss" scoped>
.en-paginationBox{
    padding-top: 4px;
    &-content{
        font-size: 14px;
        text-align: center;
        cursor: pointer;
    }
}
.active {
            width: 30px;
    border: 1px solid rgb(235, 12, 60);
    border-radius: 3px;
}
a{
    color: black;
    text-decoration: none;
}
</style>