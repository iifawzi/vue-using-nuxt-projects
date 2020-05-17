<template>
  <div
    class="main-navbar_content-DropClick"
    ref="DropClickElement"
    :class="ClassName"
    @click="clickDrop"
  >
    <i :class="dropDown ? 'fas fa-caret-up' : 'fas fa-caret-down'" />
    <div v-if="dropDown" class="sideNav">
     <slot />
    </div>
  </div>
</template>
<script>
import NavItems from "~/components/ar/Navigation/NavItems.vue";
export default {
  components: {
    NavItems
  },
  props: {
    itemsColor: {
      type: String,
      required: false
    },
    boxColor: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      dropDown: false,
      ClassName: ""
    };
  },
  methods: {
    clickDrop() {
      this.dropDown = !this.dropDown;
      if (this.dropDown) {
        this.ClassName = "nav-open";
      } else {
        this.ClassName = "nav-close";
      }
    },
    onResize(event) {
      this.dropDown = false;
      this.ClassName = "nav-close"
    }
  },
  mounted() {
    // Register an event listener when the Vue component is ready
    window.addEventListener("resize", this.onResize);
  },

  beforeDestroy() {
    // Unregister the event listener before destroying this Vue instance
    window.removeEventListener("resize", this.onResize);
  }
};
</script>
<style lang="scss" scoped>
.main-navbar {
  &_content {
    &-DropClick {
      height: 30px;
      width: 30px;
      border-radius: 50%;
      display: none;
      padding: 2px;
      color: white;
      cursor: pointer;
      border: 1px solid #e03a3f;
      background-color: #e03a3f;
    }
  }
}
.nav-close {
  border: 1px solid #e03a3f;
  background-color: #e03a3f;
}
.nav-open {
  border: 1px solid #5271ff;
  background-color: #5271ff;
}
.sideNav {
  position: absolute;
  left: 0;
  margin-top: 10px;
  margin-left: 9%;
  width: 200px;
  height: 300px;
  border-radius: 15px 15px 15px 15px;
  background-color: white;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
}

@media (max-width: 992px) {
  .main-navbar {
    &_content {
      &-DropClick {
        display: block;
      }
    }
  }
}
</style>