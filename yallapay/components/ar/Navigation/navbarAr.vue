<template>
  <div v-bind:class="navType" class="main-navbarAr">
    <div class="container">
      <div class="main-navbarAr_content">
                 <div class="languagesAr languages-big">
         <nuxt-link :to="path">English</nuxt-link>

       </div>
        <nuxt-link style="color:white; text-decoration:none" to="/ar/login"><div v-if="!nologin" class="main-navbarAr_content-button">دخول</div></nuxt-link>
        <NavItems :itemsColor="itemsColor" :boxColor="boxColor" elementsType="row-elements" />
        <DropDown :itemsColor="itemsColor" :boxColor="boxColor">
          <NavItems :itemsColor="itemsColor" :boxColor="boxColor" elementsType="col-elements" />
        </DropDown>
                  <div class="languagesAr languages-small">
                  <nuxt-link :to="path">English</nuxt-link>
       </div>
        <div class="main-navbarAr_content-logo">
                    <nuxt-link to="/ar"><img class="logo-dimn" src="~/assets/images/logo.png" alt="logo" /></nuxt-link>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavItem from "~/components/ar/Navigation/NavItem.vue";
import NavItems from "~/components/ar/Navigation/NavItems.vue";
import DropDown from "~/components/ar/Navigation/DropDown.vue";
import Button from "~/components/ar/UI/button.vue";


export default {
    data(){
    return {
      path:""
    }
  },
  mounted() {
    const thePath = window.location.pathname.split("/ar");
     if (thePath[1] == ""){
      console.log("hi");
          this.path =  "/";
    }else {
          this.path =  ""+thePath[1];
    }
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
  }
};
</script>
<style lang="scss">
.logo-dimn {
  width: 200px;
}
.main-navbarAr {
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
  .languages-small{
    display: none;
  }
@media (max-width: 992px) {
  .languages-big{
    display: none;
  }
  .languages-small{
    display: block;
  }
  .logo-dimn {
    width: 170px;
  }
  .stickyNav {
    display: none;
  }
  .notSticky {
    background-color: #ffff;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
    color: black;
  }
  .main-navbarAr {
    &_content {
      &-elements {
        display: none;
      }
      &-button {
        display: none;
      }
    }
  }
}
.languagesAr{
   a{
        text-decoration: none;
        color: #e03a3f;
    }
    a.nuxt-link-active {
    color: #e03a3f;
}
}
</style>