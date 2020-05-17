<template>
    <div class="colList">
        <h4 class="colListTitle">{{title}}</h4>
        <div class="colListList">
       <slot/>
        </div>
    </div>
</template>

<script>
import ColListItem from "~/components/Navigation/ColListItem.vue"
export default {
    props:{
        title:String,
    },
    components:{
        ColListItem,
    }
}
</script>
<style lang="scss">
.colList{
    display: flex;
    flex-flow: column;
}
.colListList{
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 200px;
}
.colListTitle{
    color: #1b3861;
    font-size: 20px;
}
</style>