<template>
  <div class="en-loginForm">
    <div class="en-loginForm-errors">
      <div v-for="error in errors" :key="error.message" class="en-loginForm-errors-error">
<notification notfiColor="redNotfi">
  {{error.message}}
</notification>
      </div>
    </div>
    <form @submit.prevent="loginCheck" class="en-loginForm-content">
      <div class="en-loginForm-content-row">
        <div class="en-loginForm-content-row-element">
          <inputWithIcon
            iconClass="fas fa-user-shield"
            placeholder="Your name"
            @input="setUsername"
            v-model="username"
            type="text"
          >
            <div v-if="$v.username.$dirty">
              <div v-if="!$v.username.required">Username is required</div>
            </div>
          </inputWithIcon>
        </div>
      </div>
      <div class="en-loginForm-content-row">
        <div class="en-loginForm-content-row-element">
          <inputWithIcon
            iconClass="fas fa-key"
            placeholder="Your Password"
            @input="setPassword"
            v-model="password"
            type="password"
          >
            <div v-if="$v.password.$dirty">
              <div v-if="!$v.password.required">Password is required</div>
            </div>
          </inputWithIcon>
        </div>
      </div>
      <div class="en-loginForm-content-button">
        <div class="en-loginForm-content-button-TheButton">
          <buttonWithColors btnColor="PrupleBtn" btnLabel="Login" />
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import Cookie from "js-cookie";
import inputWithIcon from "~/components/en/General/inputWithIcon.vue";
import buttonWithColors from "~/components/en/General/buttonWithColors.vue";
import notification from "~/components/en/General/notification.vue";
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      username: "",
      password: "",
      errors: [],
    };
  },
  components: {
    inputWithIcon,
    buttonWithColors,
    notification,
  },

  validations: {
    username: {
      required
    },
    password: {
      required
    }
  },
  methods: {
    setUsername(value) {
      this.username = value;
      this.$v.username.$touch();
    },
    setPassword(value) {
      this.password = value;
      this.$v.password.$touch();
    },
    loginCheck() {

//       let config = {
//   headers: {
//     'Content-Type': 'application/json',
//   }
// }
      // let userData = {
      //   email: this.username,
      //   password: this.password,
      // }
      // this.$v.$touch();
      // if (this.$v.$invalid) {
      //   this.submitStatus = "ERROR";
      // } else {
      //   this.errors = [];
      //   this.$axios
      //     .post("https://yalla-ebdaa.herokuapp.com/api/systemUsers/login", userData)
      //     .then(result => {
      //       console.log(result);
      //       this.$store.commit("setToken", result.data.token);
            this.$router.push("/en/dashboard");
      //       localStorage.setItem("token", result.data.token);
      //       localStorage.setItem(
      //         "tokenExpiration",
      //         new Date().getTime() + 3600 * 1000
      //       );
      //       Cookie.set("jwt", result.data.token);
      //       Cookie.set("expirationDate", new Date().getTime() + 3600 * 1000);
      //     })
      //     .catch(error => {
      //       this.errors.push(error.response.data);
      //     });
      // }
    }
  }
};
</script>

<style lang="scss" scoped>
.en-loginForm {
  &-errors{
    width: 80%;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    &-error{
      width: auto;
      text-align: center;
    }
  }
}
.en-loginForm-content {
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  height: 190px;
  &-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    &-element {
      width: 400px;
    }
  }
  &-button {
    width: 300px;
    &-TheButton {
      width: 100px;
      float: right;
    }
  }
}
@media (max-width: 992px) {
  .en-loginForm-content {
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    height: 190px;
    &-row {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      &-element {
        width: 400px;
      }
    }
    &-button {
      width: 80%;
      display: flex;
      justify-content: flex-end;
      &-TheButton {
        width: 100px;
      }
    }
  }
}
</style>