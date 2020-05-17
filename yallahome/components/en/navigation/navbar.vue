<template>
  <div class="en-navbar">
    <div class="en-navbar-content">
      <div class="en-navbar-content-toplinks">
        <div class="en-navbar-content-toplinks-links">
          <nuxt-link
            to="/en/wishlist"
            class="en-navbar-content-toplinks-links-link en-navbar-content-toplinks-links-link-wishlist"
          >
            <i class="far fa-heart"></i> My Wishlist
          </nuxt-link>
          <nuxt-link to="signin" class="en-navbar-content-toplinks-links-link">Sell</nuxt-link>
          <nuxt-link to="signin" class="en-navbar-content-toplinks-links-link">Help</nuxt-link>
          <nuxt-link to="signin" class="en-navbar-content-toplinks-links-link">Sign Up</nuxt-link>
        </div>
      </div>
      <div class="en-navbar-content-mainbar">
        <div class="en-navbar-content-mainbar-content">
          <nuxt-link to="/en">
            <img src="~/assets/images/logo.png" class="en-navbar-content-mainbar-content-logo" />
          </nuxt-link>
          <div class="en-navbar-content-mainbar-content-categories">
            <dropWhenClick
              @mouseLeave="mouseLeave('categories')"
              @click="toggleTabs('categories')"
              :categories="categories"
            >Categories</dropWhenClick>
          </div>
          <div class="en-navbar-content-mainbar-content-searchBar">
            <searchBar />
          </div>
          <nuxt-link to="/en/cart">
            <div
              class="en-navbar-content-mainbar-content-icon "
            >
              <dropWhenHover>
                <i class="fas fa-cart-plus en-navbar-content-mainbar-content-icon-cart"></i>
              </dropWhenHover>
            </div>
          </nuxt-link>
          <div class="en-navbar-content-mainbar-content-icon">
            <dropWhenHover>
              <i class="fas fa-bell"></i>
            </dropWhenHover>
          </div>
          <div class="en-navbar-content-mainbar-content-signin">
            <dropWhenClick
              @mouseLeave="mouseLeave('signin')"
              @click="toggleTabs('signin')"
              :signin="signin"
            >Sign in</dropWhenClick>
          </div>
          <div class="en-navbar-content-mainbar-content-signup">
            <dropWhenClick
              @mouseLeave="mouseLeave('signup')"
              @click="toggleTabs('signup')"
              :signup="signup"
            >Sign up</dropWhenClick>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import dropWhenClick from "~/components/en/navigation/dropWhenClick.vue";
import searchBar from "~/components/en/navigation/searchBar.vue";
import dropWhenHover from "~/components/en/navigation/dropWhenHover.vue";
export default {
  data() {
    return {
      categories: false,
      signin: false,
      signup: false
    };
  },
  components: {
    dropWhenClick,
    searchBar,
    dropWhenHover
  },
  methods: {
    toggleTabs(value) {
      if (value == "categories") {
        this.categories = true;
        this.signin = false;
        this.signup = false;
      } else if (value == "signin") {
        this.signin = true;
        this.categories = false;
        this.signup = false;
      } else if (value == "signup") {
        this.signup = true;
        this.signin = false;
        this.categories = false;
      }
    },
    mouseLeave(value) {
      if (value == "categories") {
        this.categories = false;
      } else if (value == "signin") {
        this.signin = false;
      } else if (value == "signup") {
        this.signup = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.en-navbar {
  width: 100%;
  height: 100px;
  border-bottom: 2px solid #d6d8db;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  &-content {
    height: 100%;
    margin-top: 10px;
    &-toplinks {
      height: 30px;
      &-links {
        text-align: right;
        font-size: 14px;
        &-link {
          color: #22252a;
          margin-left: 20px;
          &-wishlist {
            &:hover {
              color: rgb(235, 12, 60);
            }
          }
        }
      }
    }
    &-mainbar {
      &-content {
        display: flex;
        flex-flow: row;
        align-items: center;
        &-logo {
          width: 150px;
          margin-right: 20px;
        }
        &-categories {
          width: 120px;
          margin-right: 20px;
        }
        &-searchBar {
          margin-right: 20px;
        }
        &-icon {
          margin-right: 20px;
          &-cart {
            &:hover {
              color: rgb(235, 12, 60);
            }
          }
        }
        &-signin {
          width: 100px;
          margin-right: 20px;
        }
        &-signup {
          width: 100px;
        }
      }
    }
  }
}
@media (max-width: 992px) {
  .en-navbar {
    width: 100%;
    height: 100px;
    border-bottom: 2px solid #d6d8db;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    &-content {
      height: 100%;
      margin-top: 10px;
      &-toplinks {
        height: 30px;
        &-links {
          text-align: left;
        }
      }
      &-mainbar {
        &-content {
          &-logo {
            display: none;
          }
          &-categories {
            display: none;
          }
          &-searchBar {
            margin-right: 0px;
          }
          &-icon {
            display: none;
          }
          &-signin {
            display: none;
          }
          &-signup {
            display: none;
          }
        }
      }
    }
  }
}
a {
  text-decoration: none;
}
</style>

