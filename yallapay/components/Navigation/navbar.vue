<template>
  <div v-bind:class="navType" class="main-navbar">
    <div class="container">
      <div class="main-navbar_content">
        <div class="main-navbar_content-logo">
          <nuxt-link to="/"><img class="logo-dimn" src="~/assets/images/logo.png" alt="logo" /></nuxt-link>
        </div>
        <NavItems   :itemsColor="itemsColor" :boxColor="boxColor" elementsType="row-elements" />
        <nuxt-link v-if="this.$store.state.token == null" style="color:white; text-decoration:none" to="/login"><div v-if="!nologin" class="main-navbar_content-button">Login</div></nuxt-link>
        <div v-if="this.$store.state.token!=null"  style="color:white; text-decoration:none"  @click="logout"><div v-if="!nologin" class="main-navbar_content-button">Logout</div></div>
      <div class="languages">
         <nuxt-link :to="path">العربية</nuxt-link>
       </div>
        <DropDown   :itemsColor="itemsColor" :boxColor="boxColor">
           <NavItems nologin :itemsColor="itemsColor" :boxColor="boxColor" elementsType="col-elements" />
        </DropDown>
      </div>
    </div>
  </div>
</template>

<script>
import NavItem from "~/components/Navigation/NavItem.vue";
import NavItems from "~/components/Navigation/NavItems.vue";
import DropDown from "~/components/Navigation/DropDown.vue";
import Button from "~/components/UI/button.vue";
export default {
  data(){
    return {
      path:""
    }
  },
  mounted() {
    this.path =  "ar"+window.location.pathname;
  },

  components: {
    NavItem,
    NavItems,
    Button,
    DropDown,
  },
  props: {
    navType: {
      type: String,
      required: false
    },
    itemsColor: {
      type: String,
      required: false
    },
    boxColor: {
      type: String,
      required: false
    },
    nologin: {
      type: Boolean,
    }
  },
  methods: {
    logout(){
      this.$store.dispatch('logout');
      this.$router.push('/login');
    }
  }
};
</script>
<style lang="scss">
.logo-dimn {
  width: 200px;
}
.main-navbar {
  color: white;
  height: 80px;
  &_content {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    padding: 25px;
      width: 100%;
    &-button {
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
  }
}
.stickyNav {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #ffff;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  color: black;
}
.notSticky {
  position: relative;
}
.languages{
   a{
        text-decoration: none;
        color: #e03a3f;
    }
    a.nuxt-link-active {
    color: #e03a3f;
}
}


@media (max-width: 576px) {
  .main-navbar_content-button{
    display: none;
  }
  
}
</style>