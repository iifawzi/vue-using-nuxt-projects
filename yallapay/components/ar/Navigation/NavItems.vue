<template>
  <div class="" :class="elementsType">
    <NavItem to="/ar/contactus" :itemsColor="itemsColor" :boxColor="boxColor">للتواصل</NavItem>
    <NavItem to="/ar/blog" :itemsColor="itemsColor" :boxColor="boxColor">المدونه</NavItem>
    <NavItem to="/ar/pages" :itemsColor="itemsColor" :boxColor="boxColor">الصفحات</NavItem>
    <NavItem to="/ar/features" :itemsColor="itemsColor" :boxColor="boxColor">المميزات</NavItem>
    <NavItem to="/ar/aboutus" :itemsColor="itemsColor" :boxColor="boxColor">من نحن</NavItem>
    <NavItem to="/ar" :itemsColor="itemsColor" :boxColor="boxColor">الرئيسية</NavItem>
    <div class="button-for-col">دخول</div>
  </div>
</template>

<script>
import NavItem from "~/components/ar/Navigation/NavItem.vue";

export default {
  components: {
    NavItem
  },
  props: {
    itemsColor: {
      type: String,
      required: false
    },
    boxColor: {
      type: String,
      required: false
    },
    elementsType: {
      type: String,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
.row-elements {
  width: 50%;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
}
.col-elements {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
}
.button-for-col {
  display: none;
  cursor: pointer;
  width: 80px;
  border-radius: 4px;
  padding: 5px;
  color: white;
  font-size: 14px;
  color: white;
  background-color: #5271ff;
  border: #5271ff;
  text-align: center;
  &:hover {
    border: 1px solid;
    background-color: #e03a3f;
    border: #e03a3f;
    color: white;
  }
  &:focus {
    outline: none;
  }
}

@media (max-width: 992px) {
  .row-elements {
    display: none;
  }
  .button-for-col {
    display: block;
  }
}
</style>


