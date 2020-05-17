<template>
  <div class="en-dashnav">
    <div class="en-dashnav-content">
      <div class="en-dashnav-content-top">
        <div class="en-dashnav-content-top-left">
          <div class="en-dashnav-content-top-left-content">
              <div v-if="!isSideOpen" class="en-dashnav-content-top-left-content-bars" @click="toggleSide">
                  <div class="en-dashnav-content-top-left-content-bars-bar"></div>
                  <div class="en-dashnav-content-top-left-content-bars-bar"></div>
                  <div class="en-dashnav-content-top-left-content-bars-bar"></div>
              </div>
            <div class="en-dashnav-content-top-left-content-logo">
<nuxt-link to="/en/dashboard"><img v-if="isSideOpen"
                class="en-dashnav-content-top-left-content-logo-side"
                src="~/assets/images/logo.png"
              /></nuxt-link>
              <nuxt-link to="/en/dashboard"><img
                class="en-dashnav-content-top-left-content-logo-pic"
                src="~/assets/images/logo.png"
              /></nuxt-link>
            </div>
          </div>
        </div>
        <div class="en-dashnav-content-top-right">
          <div class="en-dashnav-content-top-right-content">
            <div class="en-dashnav-content-top-right-content-icons">
              <div class="en-dashnav-content-top-right-content-icons-icon">
                <i class="far fa-bell"></i>
              </div>
              <div class="en-dashnav-content-top-right-content-icons-icon">
                <i class="fas fa-dot-circle"></i>
              </div>
            </div>
            <div class="en-dashnav-content-top-right-content-user">
              <div class="en-dashnav-content-top-right-content-user-pic">
                <img
                  class="en-dashnav-content-top-right-content-user-pic-image"
                  src="~/assets/images/profile.jpeg"
                />
              </div>
              <div class="en-dashnav-content-top-right-content-user-drop">
                <dropWhenClick marginSet="margin-left:-140px" dropLabel="Hi Fawzi">
                  <verticalList>
                    <listItem to="#" itemLabel="Your Profile"></listItem>
                    <listItem isLink @click="logout" itemLabel="Logout"></listItem>
                    <listItem to="#" itemLabel="Your Points"></listItem>
                  </verticalList>
                </dropWhenClick>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="en-dashnav-content-down">
        <div class="en-dashnav-content-down-content">
          <div class="en-dashnav-content-down-content-item">
            <dropWhenHover iconClass="fas fa-home" dropLabel="Main">
              <verticalList>
                <listItem to="#" itemLabel="Style"></listItem>
                <listItem to="#" itemLabel="Resons"></listItem>
                <listItem to="#" itemLabel="Papel"></listItem>
                <listItem to="#" itemLabel="Yalla"></listItem>
                <listItem to="#" itemLabel="Pay"></listItem>
                <listItem to="#" itemLabel="Dummy"></listItem>
              </verticalList>
            </dropWhenHover>
          </div>
          <div class="en-dashnav-content-down-content-item">
            <dropWhenHover iconClass="fas fa-chart-bar" dropLabel="Charts">
              <verticalList>
                <listItem to="#" itemLabel="Main Charts"></listItem>
                <listItem to="#" itemLabel="Second Charts"></listItem>
                <listItem to="#" itemLabel="Third Charts"></listItem>
                <listItem to="#" itemLabel="Why Charts"></listItem>
                <listItem to="#" itemLabel="Fourh Charts"></listItem>
                <listItem to="#" itemLabel="Fifth Charts"></listItem>
              </verticalList>
            </dropWhenHover>
          </div>
          <div class="en-dashnav-content-down-content-item">
            <dropWhenHover iconClass="fas fa-boxes" dropLabel="Items">
              <verticalList>
                <listItem to="#" itemLabel="First Item"></listItem>
                <listItem to="#" itemLabel="Second Item"></listItem>
                <listItem to="#" itemLabel="Third Item"></listItem>
                <listItem to="#" itemLabel="Fourh Item"></listItem>
                <listItem to="#" itemLabel="Fifth Item"></listItem>
                <listItem to="#" itemLabel="Sixth Item"></listItem>
              </verticalList>
            </dropWhenHover>
          </div>
          <div class="en-dashnav-content-down-content-item">
            <dropWhenHover iconClass="fab fa-wpforms" dropLabel="Forms">
              <verticalList>
                <listItem to="#" itemLabel="Login Form"></listItem>
                <listItem to="#" itemLabel="Register Form"></listItem>
                <listItem to="#" itemLabel="Why Form"></listItem>
                <listItem to="#" itemLabel="Yalla Form"></listItem>
                <listItem to="#" itemLabel="Pay Form"></listItem>
                <listItem to="#" itemLabel="Dummy Form"></listItem>
              </verticalList>
            </dropWhenHover>
          </div>
          <div class="en-dashnav-content-down-content-item">
            <dropWhenHover iconClass="fas fa-file-upload" dropLabel="Files">
              <verticalList>
                <listItem to="#" itemLabel="Main Files"></listItem>
                <listItem to="#" itemLabel="Second Files"></listItem>
                <listItem to="#" itemLabel="Third Files"></listItem>
                <listItem to="#" itemLabel="Yalla Files"></listItem>
                <listItem to="#" itemLabel="Pay Files"></listItem>
                <listItem to="#" itemLabel="Dummy Files"></listItem>
              </verticalList>
            </dropWhenHover>
          </div>
          <div class="en-dashnav-content-down-content-item">
            <dropWhenHover iconClass="fas fa-plus" dropLabel="More">
              <verticalList>
                <listItem to="#" itemLabel="Users"></listItem>
                <listItem to="#" itemLabel="Tables"></listItem>
                <listItem to="#" itemLabel="Persons"></listItem>
                <listItem to="#" itemLabel="Customers"></listItem>
                <listItem to="#" itemLabel="Anlysis"></listItem>
                <listItem to="#" itemLabel="Paddings"></listItem>
              </verticalList>
            </dropWhenHover>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isSideOpen" class="en-dashnav-side">
        <sidenav @clickingOnBackDrop="toggleSide"/>
    </div>
  </div>
</template>

<script>
import dropWhenClick from "~/components/en/General/dropWhenClick";
import dropWhenHover from "~/components/en/General/dropWhenHover";
import verticalList from "~/components/en/General/verticalList";
import listItem from "~/components/en/General/listItem";
import sidenav from "~/components/en/Navigation/sidenav";
export default {
    data(){
        return {
            isSideOpen:false,
        }
    },
  components: {
    dropWhenClick,
    dropWhenHover,
    verticalList,
    listItem,
    sidenav
  },
  methods:{
      toggleSide(value){
this.isSideOpen = !this.isSideOpen;
      },
         logout(){
           console.log("clicked");
      this.$store.dispatch('logout');
      this.$router.push('/en/');
    },
     onResize(event) {
      this.isSideOpen = false;
    },

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
.en-dashnav {
  width: 100%;
    // background-color: green;
  height: 80px;
  &-content {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    &-top {
      height: 80px;
      width: 100%;
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
      &-left {
        &-content {
            display: flex;
            
          &-logo {
            &-pic {
              width: 200px;
            }
            &-side {
              width: 200px;
            }
          }
          &-bars{
              display: flex;
                            margin-left: 10px;
                            flex-flow: column;
                            justify-content: space-around;
                            align-items: center;
                            height: 20px;
              &-bar{
              border: 1px solid #191f3a;
              width: 30px;

              }
          }
        }
      }
      &-right {
        &-content {
          width: 300px;
          // background-color: blueviolet;
          display: flex;
          flex-flow: row;
          justify-content: space-between;
          align-items: center;
          &-icons {
            // background-color: blue;
            width: 180px;
            color: #191f3a;
            font-size: 25px;
            display: flex;
            flex-flow: row;
            align-items: center;
            justify-content: flex-end;
            &-icon {
              margin-right: 20px;
            }
          }
          &-user {
            z-index: 1000;
            // background-color: cadetblue;
            width: 120px;
            font-size: 14px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            &-pic {
              width: 40px;
              &-image {
                width: 40px;
                height: 40px;
                border-radius: 20px;
              }
            }
            &-drop {
              width: 80px;
            }
          }
        }
      }
    }
    &-down {
      width: 90%;
      height: 70px;
      background-color: #DC1F29;
      border-radius: 10px;
      &-content {
        padding-left: 8px;
        color: white;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 70px;
        &-item {
          width: 80px;
        }
      }
    }
  }
}

@media (max-width: 992px) { 
.en-dashnav-content-down{
    display: none;
}
.en-dashnav-content-top{
    background-color: #EBEFF7;
    position: fixed;
    margin-top: 30px;
}
.en-dashnav-content-top-left-content-logo-pic{
    display: none;
}
 }
@media (min-width: 992px) { 
.en-dashnav-content-top-left-content-bars{
    display: none;
}
 }
</style>