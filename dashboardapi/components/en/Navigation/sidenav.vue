<template>
    <div class="en-sidenav">
<div class="en-sidenav-side">
    <backdrop @clickingOnBackDrop="$emit('clickingOnBackDrop')">
    <div class="en-sidenav-side-content" @click.stop="sideClick">
        <div class="en-sidenav-side-content-items">
        <div class="en-sidenav-side-content-items-item">
  <sideNavItem dropLabel="Main" iconClass="fas fa-home">
      <verticalList>
                <listItem to="#" itemLabel="First Item"></listItem>
                <listItem to="#" itemLabel="Second Item"></listItem>
                <listItem to="#" itemLabel="Third Item"></listItem>
                <listItem to="#" itemLabel="Fourh Item"></listItem>
                <listItem to="#" itemLabel="Fifth Item"></listItem>
                <listItem to="#" itemLabel="Sixth Item"></listItem>
              </verticalList>
  </sideNavItem>
        </div>

          <div  class="en-sidenav-side-content-items-item">
  <sideNavItem dropLabel="Charts" iconClass="fas fa-chart-bar">
        <verticalList>
                <listItem to="#" itemLabel="First Item"></listItem>
                <listItem to="#" itemLabel="Second Item"></listItem>
                <listItem to="#" itemLabel="Third Item"></listItem>
                <listItem to="#" itemLabel="Fourh Item"></listItem>
                <listItem to="#" itemLabel="Fifth Item"></listItem>
                <listItem to="#" itemLabel="Sixth Item"></listItem>
              </verticalList>
  </sideNavItem>

        </div>


          <div class="en-sidenav-side-content-items-item">
  <sideNavItem dropLabel="Items" iconClass="fas fa-boxes">
      <verticalList>
                <listItem to="#" itemLabel="First Item"></listItem>
                <listItem to="#" itemLabel="Second Item"></listItem>
                <listItem to="#" itemLabel="Third Item"></listItem>
                <listItem to="#" itemLabel="Fourh Item"></listItem>
                <listItem to="#" itemLabel="Fifth Item"></listItem>
                <listItem to="#" itemLabel="Sixth Item"></listItem>
              </verticalList>
  </sideNavItem>

        </div>


          <div class="en-sidenav-side-content-items-item">
  <sideNavItem dropLabel="forms" iconClass="fab fa-wpforms">
    <verticalList>
                <listItem to="#" itemLabel="First Item"></listItem>
                <listItem to="#" itemLabel="Second Item"></listItem>
                <listItem to="#" itemLabel="Third Item"></listItem>
                <listItem to="#" itemLabel="Fourh Item"></listItem>
                <listItem to="#" itemLabel="Fifth Item"></listItem>
                <listItem to="#" itemLabel="Sixth Item"></listItem>
              </verticalList>
  </sideNavItem>

        </div>
        </div>

 
</div>
 </backdrop>
        </div>
           </div>
</template>

<script>
import dropWhenClick from "~/components/en/General/dropWhenClick";
import sideNavItem from "~/components/en/General/sideNavItem";
import verticalList from "~/components/en/General/verticalList";
import listItem from "~/components/en/General/listItem";
import backdrop from "~/components/en/General/backdrop";
export default {
    components:{
        dropWhenClick,
        sideNavItem,
        backdrop,
          verticalList,
    listItem,
    },
    methods:{
        sideClick(){
            console.log("on side")
        }
    },
}
</script>
<style lang="scss" scoped>
.en-sidenav{
    z-index: 1000;
    &-side{
        &-content{
        width: 250px;
        height: 100vh;
        overflow: scroll;
        background: #ffffff;
        &-items{
            padding-top: 20px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-flow:column;
            justify-content: space-around;
            height: auto;
            overflow: scroll;
            &-item{
                width: 100%;
                margin-bottom: 20px;
            }
        }
    }
}
}
@media (max-width: 992px) {
    .en-sidenav{
          position: fixed;
    margin-top: 65px;
    }
}
</style>