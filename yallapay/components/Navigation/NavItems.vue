<template>
  <div class="main-navbar_content-elements" :class="elementsType">
    <NavItem to="/" :itemsColor="itemsColor" :boxColor="boxColor">HOME</NavItem>
    <NavItem to="/aboutus" :itemsColor="itemsColor" :boxColor="boxColor">ABOUS US</NavItem>
    <NavItem to="/pages" :itemsColor="itemsColor" :boxColor="boxColor">PAGES</NavItem>
    <NavItem to="/features" :itemsColor="itemsColor" :boxColor="boxColor">FEATURES</NavItem>
    <NavItem to="/blog" :itemsColor="itemsColor" :boxColor="boxColor">BLOG</NavItem>
    <NavItem to="/contactus" :itemsColor="itemsColor" :boxColor="boxColor">CONTACTS</NavItem>
    <div v-if="!nologin" class="button-for-col">LOGIN</div>
  </div>
</template>

<script>
import NavItem from "~/components/Navigation/NavItem.vue";

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
    },
    nologin : Boolean
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


