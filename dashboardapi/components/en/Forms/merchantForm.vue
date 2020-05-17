<template>
  <div class="en-merchantForm">
    <div class="en-merchantForm-title">
      Merchant Data:
      <hr />
      <div v-if="success != '' " class="en-merchantForm-msg">
        <notification notfiColor="greenNotfi">{{success}}</notification>
      </div>
      <div v-if="error != '' " class="en-contactPerson-msg">
        <notification notfiColor="redNotfi">{{error}}</notification>
      </div>
      <br />
      <br />
      <div class="en-merchantForm-main">
        <div class="en-merchantForm-main-left">
          <div class="en-merchantForm-main-left-form">
            <div class="en-merchantForm-main-left-form-row">
              <inputWithIcon2
                iconClass="fas fa-signature"
                placeholder="Merchant Name"
                @input="setName"
                v-model="Name"
                type="text"
              >
                <div v-if="$v.Name.$dirty">
                  <div class="field-error" v-if="!$v.Name.required">Merchant Name is required</div>
                </div>
              </inputWithIcon2>
            </div>

            <div class="en-merchantForm-main-left-form-row">
              <inputWithIcon2
                iconClass="fas fa-phone-square-alt"
                placeholder="Phone Number"
                @input="setPhone"
                v-model="Phone"
                type="text"
              >
                <div v-if="$v.Phone.$dirty">
                  <div class="field-error" v-if="!$v.Phone.required">Phone is required</div>
                  <div class="field-error" v-if="!$v.Phone.integer">Phone is invalid</div>
                </div>
              </inputWithIcon2>
            </div>
            <div class="en-merchantForm-main-left-form-row">
              <inputWithIcon2
                iconClass="fas fa-envelope-open-text"
                placeholder="Email address"
                @input="setEmail"
                v-model="Email"
                type="text"
              >
                <div v-if="$v.Email.$dirty">
                  <div class="field-error" v-if="!$v.Email.required">Email is required</div>
                  <div class="field-error" v-if="!$v.Email.email">Email is invalid</div>
                </div>
              </inputWithIcon2>
            </div>

            <div class="en-merchantForm-main-left-form-row">
              <inputWithIcon2
                iconClass="fas fa-map-marked-alt"
                placeholder="Address"
                @input="setAddress"
                v-model="Address"
                type="text"
              >
                <div v-if="$v.Address.$dirty">
                  <div class="field-error" v-if="!$v.Address.required">Address is required</div>
                </div>
              </inputWithIcon2>
            </div>

            <div class="en-merchantForm-main-left-form-row">
              <selectInput @changedSelect="setCategory" v-model="Category">
                <option value disabled selected>Category</option>
                <option
                  v-for="category in categories"
                  :key="category._id"
                  class="en-selectInput-content-option"
                  :value="category._id"
                >{{category.name}}</option>
              </selectInput>
              <div v-if="$v.Category.$dirty">
                <div class="field-error" v-if="!$v.Category.required">Category is required</div>
              </div>
            </div>

            <div class="en-merchantForm-main-left-form-row">
              <selectInput @changedSelect="setAccountType" v-model="AccountType">
                <option value disabled selected>Account Type</option>
                <option class="en-selectInput-content-option" value="Premium">Premium</option>
                <option class="en-selectInput-content-option" value="Free">Free</option>
              </selectInput>
              <div v-if="$v.AccountType.$dirty">
                <div class="field-error" v-if="!$v.AccountType.required">Account Type is required</div>
              </div>
            </div>

            <div class="en-merchantForm-main-left-form-row">
              <inputWithIcon2
                iconClass="far fa-user"
                placeholder="Username"
                @input="setUsername"
                v-model="username"
                type="text"
              >
                <div v-if="$v.username.$dirty">
                  <div class="field-error" v-if="!$v.username.required">Username is required</div>
                </div>
              </inputWithIcon2>
            </div>

            <div class="en-merchantForm-main-left-form-row">
              <inputWithIcon2
                iconClass="fas fa-lock"
                placeholder="Password"
                @input="setPassword"
                v-model="password"
                type="password"
              >
                <div v-if="$v.password.$dirty">
                  <div class="field-error" v-if="!$v.password.required">Password is required</div>
                </div>
              </inputWithIcon2>
            </div>

            <form v-if="!image"
              class="en-merchantForm-main-left-form-row"
              enctype="multipart/form-data"
            >
              <label for="file-upload" class="custom-file-upload">
                <i class="fa fa-cloud-upload"></i> Logo Upload
              </label>
              <input id="file-upload" name="image" ref="file" type="file" @change="onFileChange" />
              <div v-if="!image">
                <div class="optional-title">Logo is a must</div>
              </div>
            </form>

            <div v-if="image" class="en-merchantForm-main-left-form-row">
              <img :src="image" class="cover-img" alt />
              <buttonWithColors
                class="btn-font"
                @click="removeImage"
                btnColor="RedBtn"
                btnLabel="Remove Cover"
              />
            </div>

            <div class="en-merchantForm-main-left-form-row">
              <buttonWithColors
                class="btn-font"
                @click="confirmBranch"
                btnColor="PrupleBtn"
                btnLabel="Confirm Merchant Data"
              />
            </div>
          </div>
        </div>
        <div class="en-merchantForm-main-right">
          <inputWithIcon2
            style="width:500px; margin-bottom:10px"
            iconClass="far fa-map"
            placeholder="Search for a place"
            @input="SearchForAplace"
            v-model="place"
            type="text"
          ></inputWithIcon2>
          <div v-if="suggestions !=''" class="maps-suggestions">
            <div v-for="suggest in suggestions" :key="suggest.id" class="map-suggest">
              <div :posTitle="suggest.position" :showTitle="suggest.title" @click="clickForPlace">
                {{suggest.title}}
                <span style="font-size:10px">{{(suggest.vicinity)}}</span>
              </div>
            </div>
          </div>
          <HereMap
            ref="map"
            v-if="showMap"
            appCode="CYmnOOwbxujK7conOFcDvg"
            appID="qXtfJqPZXyhEs63j6gkm"
            lat="30.0001"
            lng="31.2152"
            width="500px"
            height="425px"
            v-model="location"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HereMap from "~/components/en/General/HereMap.vue";
import { required, integer, email } from "vuelidate/lib/validators";
import inputWithIcon2 from "~/components/en/General/inputWithIcon2.vue";
import selectInput from "~/components/en/General/selectInput.vue";
import buttonWithColors from "~/components/en/General/buttonWithColors.vue";
import notification from "~/components/en/General/notification.vue";
import FormData from "form-data";
export default {
  mounted() {
    this.$axios
      .get("https://yalla-ebdaa.herokuapp.com/api/categories")
      .then(data => {
        this.categories = data.data.data;
        console.log(this.categories);
      });
  },
  props: {
    showMap: Boolean
  },
  data() {
    return {
      isMapLoaded1: false,
      isMapLoaded2: false,
      isMapLoaded3: false,
      isMapLoaded4: false,
      categories: "",
      location: {},
      Name: "",
      Phone: "",
      Email: "",
      Address: "",
      Category: "",
      username: "",
      password: "",
      image: "",
      AccountType: "",
      success: "",
      error: "",
      suggestions: "",
      place: "",
      file: ""
    };
  },
  components: {
    HereMap,
    inputWithIcon2,
    selectInput,
    buttonWithColors,
    notification
  },
  validations: {
    Name: {
      required
    },
    Phone: {
      required,
      integer
    },
    Email: {
      required,
      email
    },
    Address: {
      required
    },
    Category: {
      required
    },
    username: {
      required
    },
    password: {
      required
    },
    AccountType: {
      required
    }
  },
  methods: {
    SearchForAplace() {
      this.suggestions = "";
      let getStatment =
        "https://places.ls.hereapi.com/places/v1/autosuggest?apiKey=lfJxURZOAcIIg5nEj-0Ioi72nWpw5iIF9NT3n_NPAKE&at=40.7539,-73.9837&q=" +
        this.place +
        "&pretty";
      this.$axios
        .get(getStatment)
        .then(result => {
          this.suggestions = result.data.results;
          try {
            this.suggestions.map(suggest => {
              suggest.vicinity = suggest.vicinity.replace(
                /<\/?[^>]+(>|$)/g,
                ""
              );
              suggest.id = Math.random() * 1000;
            });
          } catch {}
        })
        .catch(error => {
          console.log(error);
        });
    },
    clickForPlace(e) {
      try {
        this.suggestions = "";
        let myarray = e.target.getAttribute("posTitle").split(",");
        this.place = e.target.getAttribute("showTitle");
        let position = {
          lat: myarray[0],
          lng: myarray[1]
        };
        let map = this.$refs.map;
        map.dropMarker(position);
        this.location = position;
      } catch {}
    },
    setName(value) {
      this.Name = value;
      this.$v.Name.$touch();
    },
    setPhone(value) {
      this.Phone = value;
      this.$v.Phone.$touch();
    },
    setEmail(value) {
      this.Email = value;
      this.$v.Email.$touch();
    },
    setAddress(value) {
      this.Address = value;
      this.$v.Address.$touch();
    },
    setCategory(value) {
      this.Category = value;
      this.$v.Category.$touch();
    },
    setAccountType(value) {
      this.AccountType = value;
      this.$v.AccountType.$touch();
    },
    setUsername(value) {
      this.username = value;
      this.$v.username.$touch();
    },
    setPassword(value) {
      this.password = value;
      this.$v.password.$touch();
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;
      reader.onload = e => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(e) {
      this.image = "";
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
      this.$store.state.merchantData.cover = this.$refs.file.files[0];
    },
    confirmBranch() {
      this.error = "";
      this.success = "";
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$store.state.merchantForms.firstOne = false;
      } else {
        if (
          !(
            Object.keys(this.location).length === 0 &&
            (this.location.constructor === Object) != ""
          )
        ) {
          if (this.image == ""){
            this.error = "You have to upload the logo!";
          }else {
          this.$store.state.merchantData.name = this.Name;
          this.$store.state.merchantData.phone = this.Phone;
          this.$store.state.merchantData.email = this.Email;
          this.$store.state.merchantData.address = this.Address;
          this.$store.state.merchantData.location = this.location;
          this.$store.state.merchantData.category = this.Category;
          this.$store.state.merchantData.username = this.username;
          this.$store.state.merchantData.password = this.password;
          this.$store.state.merchantData.accountType = this.AccountType;
          this.$store.state.merchantForms.firstOne = true;
          this.success = "Confirmed";
          }
        } else {
          this.error = "You have to choose a location";
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.maps-suggestions {
  width: 85%;
  background-color: rgba(204, 204, 204, 0);
  padding: 5px;
  color: rgb(45, 105, 233);
  border-radius: 5px;
  position: float;
  height: 200px;
  overflow-y: scroll;
}
.map-suggest {
  text-align: center;
  font-size: 20px;
  cursor: pointer;
}
.en-merchantForm {
  &-msg {
    margin-bottom: 10px;
  }
  &-title {
    font-size: 24px;
  }
  &-main {
    width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    &-left {
      // background-color: red;
      width: 45%;
      &-form {
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        &-row {
          margin-bottom: 10px;
        }
      }
    }
    &-right {
      width: 45%;
    }
  }
  .field-error {
    font-size: 15px;
    color: red;
  }
}
input[type="file"] {
  display: none;
}
.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  width: 100%;
  text-align: center;
  border: 1px solid rgb(45, 105, 233);
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
}
.optional-title {
  color: #ccc;
  font-size: 15px;
}
.cover-img {
  width: 200px;
  width: 200px;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}
.btn-font {
  font-size: 18px;
}
</style>