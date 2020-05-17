<template>
    <div class="en-mainboxes">
        <div class="en-mainboxes-box">
 <box to="/en/dashboard/categories" title="Categories Section" iconClass="fas fa-puzzle-piece"/>
        </div>
         <div class="en-mainboxes-box">
 <box to="/en/dashboard/merchants" title="Merchants Section" iconClass="fas fa-file-invoice"/>
        </div>
         <div class="en-mainboxes-box">
 <box to="/en/dashboard/deals" title="Deals Section" iconClass="fas fa-check-circle"/>
        </div>
        

    </div>
</template>

<script>
import box from "~/components/en/General/box.vue"

export default {
    components:{
        box,
    }
}
</script>
<style lang="scss" scoped>
    .en-mainboxes{
display: flex;
flex-flow: row;
justify-content: space-around;
align-items: center;
margin-top: 15%;
    }
@media (max-width: 992px) {
      .en-mainboxes{
display: flex;
flex-flow: column;
justify-content: space-around;
align-items: center;
margin-top: 5%;
    }
}
</style>