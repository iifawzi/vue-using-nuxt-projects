<template>
  <div class="en-dropWhenClick">
    <div class="en-dropWhenClick-content">
      <div class="en-dropWhenClick-content-click" @click="toggleDrop">
        <span class="en-dropWhenClick-content-click-word">
          <slot />
        </span>
        <i class="fas fa-angle-down en-dropWhenClick-content-click-arrow"></i>
      </div>
      <div v-show="categories" @mouseleave="mouseLeave" class="en-dropWhenClick-content-category">
        <div class="en-dropWhenClick-content-category-content">
         <categories/>
        </div>
      </div>
       <div v-show="signin"   @mouseleave="mouseLeave" class="en-dropWhenClick-content-signin">
        <div class="en-dropWhenClick-content-signin-content">
         <signin/>
        </div>
      </div>
       <div v-show="signup"   @mouseleave="mouseLeave" class="en-dropWhenClick-content-signup">
        <div class="en-dropWhenClick-content-signup-content">
         <signup/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import categories from "~/components/en/navigation/categories"
import signin from "~/components/en/navigation/signin"
import signup from "~/components/en/navigation/signup"
export default {
    components:{
        categories,
        signin,
        signup,
    },
    props:{
         signin:{
             Boolean,
             default:false,
             },
              categories:{
             Boolean,
             default:false,
             },
                signup:{
             Boolean,
             default:false,
             },
    },
    methods:{
        toggleDrop(){
          this.$emit("click")
        },
        mouseLeave(){
          this.$emit('mouseLeave');
        }
    }
}
</script>

<style lang="scss" scoped>
.en-dropWhenClick {
  &-content {
      position: relative;
    &-click {
      padding: 5px;
      text-align: center;
      cursor: pointer;
      border: 1px solid rgb(179, 179, 179);
      border-radius: 5px;
      &-arrow {
        font-size: 12px;
        margin-left: 10px;
      }
      &:hover {
        border: 1px solid rgb(235, 12, 60);
      }
    }
    &-category {
      position: absolute;
      top: 45px;
      right: auto;
      box-shadow: 0 5px 25px rgba(0, 0, 0, 0.281);
      background-color: white;
      border: solid 1px rgb(255, 255, 255);
      border-radius: 15px;
      &-content {
        width:auto;
        height: 350px;
      }
    }
      &-signin {
      position: absolute;
      top: 45px;
      left: -350px;
      right: auto;
      box-shadow: 0 5px 25px rgba(0, 0, 0, 0.281);
      background-color: white;
      border: solid 1px rgb(255, 255, 255);
      border-radius: 15px;
      &-content {
        width:600px;
        height: 400px;
      }
    }
       &-signup {
      position: absolute;
      top: 45px;
      left: -250px;
      right: auto;
      box-shadow: 0 5px 25px rgba(0, 0, 0, 0.281);
      background-color: white;
      border: solid 1px rgb(255, 255, 255);
      border-radius: 15px;
      &-content {
        width:400px;
        min-height: 560px;
      }
    }
  }
}
</style>