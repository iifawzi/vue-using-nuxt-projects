<template>
  <div class="en-singleBranch">
    <div v-if="success != '' " class="en-merchantForm-msg">
      <notification notfiColor="greenNotfi">{{success}}</notification>
    </div>
    <div v-if="error != '' " class="en-contactPerson-msg">
      <notification notfiColor="redNotfi">{{error}}</notification>
    </div>
    <div class="en-singleBranch-title">{{branchesNumber}}</div>
    <div class="en-singleBranch-main">
      <div class="en-singleBranch-title"></div>
      <div class="en-singleBranch-main-left">
        <div class="en-singleBranch-main-left-form">
          <div class="en-singleBranch-main-left-form-row">
            <inputWithIcon2
              iconClass="fas fa-signature"
              placeholder="Branch Name"
              @input="setName"
              v-model="branchData.name"
              type="text"
            >
              <div v-if="$v.branchData.name.$dirty">
                <div class="field-error" v-if="!$v.branchData.name.required">Name is required</div>
              </div>
            </inputWithIcon2>
          </div>

          <div class="en-singleBranch-main-left-form-row">
            <inputWithIcon2
              iconClass="fas fa-phone-square-alt"
              placeholder="Phone Number"
              @input="setPhone"
              v-model="branchData.phone"
              type="text"
            >
              <div v-if="$v.branchData.phone.$dirty">
                <div class="field-error" v-if="!$v.branchData.phone.required">Phone is required</div>
                <div class="field-error" v-if="!$v.branchData.phone.integer">Phone is invalid</div>
              </div>
            </inputWithIcon2>
          </div>

          <div class="en-singleBranch-main-left-form-row">
            <inputWithIcon2
              iconClass="fas fa-envelope-open-text"
              placeholder="Email address"
              @input="setEmail"
              v-model="branchData.email"
              type="text"
            >
              <div v-if="$v.branchData.email.$dirty">
                <div class="field-error" v-if="!$v.branchData.email.required">Email is required</div>
                <div class="field-error" v-if="!$v.branchData.email.email">Email is invalid</div>
              </div>
            </inputWithIcon2>
          </div>

          <div class="en-singleBranch-main-left-form-row">
            <inputWithIcon2
              iconClass="fas fa-lock"
              placeholder="Password"
              @input="setPassword"
              v-model="branchData.password"
              type="password"
            >
              <div v-if="$v.branchData.password.$dirty">
                <div
                  class="field-error"
                  v-if="!$v.branchData.password.required"
                >Password is required</div>
              </div>
            </inputWithIcon2>
          </div>

          <div class="en-merchantForm-main-left-form-row">
            <inputWithIcon2
              iconClass="fas fa-map-marked-alt"
              placeholder="Address"
              @input="setAddress"
              v-model="branchData.address"
              type="text"
            >
              <div v-if="$v.branchData.address.$dirty">
                <div class="field-error" v-if="!$v.branchData.address.required">Address is required</div>
              </div>
            </inputWithIcon2>
          </div>


            <div  v-if="!SingleImage" style="margin-top:10px;"
              class="en-singleBranch-main-left-form-row"
              enctype="multipart/form-data"
            >
              <label for="Single-upload" class="custom-file-upload">
                <i class="fa fa-cloud-upload"></i> Logo Upload
              </label>
              <input id="Single-upload" name="singleImage" ref="singleFile" type="file" @change="onSingleChange" />
              <div v-if="!SingleImage">
                <div class="optional-title">Logo is a must</div>
              </div>
            </div>

          <div v-if="SingleImage" style="margin-top:10px;" class="en-singleBranch-main-left-form-row">
              <img :src="SingleImage" class="cover-img" alt />
              <buttonWithColors
                class="btn-font"
                @click="removeSingle"
                btnColor="RedBtn"
                btnLabel="Remove Cover"
              />
            </div>


 <div  v-if="!SingleCover" style="margin-top:10px;"
              class="en-singleBranch-main-left-form-row"
              enctype="multipart/form-data"
            >
              <label for="Cover-upload" class="custom-file-upload">
                <i class="fa fa-cloud-upload"></i> Cover Upload
              </label>
              <input id="Cover-upload" name="singleImage" ref="singleCover" type="file" @change="onSingleCoverChange" />
              <div v-if="!SingleCover">
                <div class="optional-title">Cover is a must</div>
              </div>
            </div>
          <div v-if="SingleCover" style="margin-top:10px;" class="en-singleBranch-main-left-form-row">
              <img :src="SingleCover" class="cover-img" alt />
              <buttonWithColors
                class="btn-font"
                @click="removeSingleCover"
                btnColor="RedBtn"
                btnLabel="Remove Cover"
              />
            </div>


          <div class="en-singleBranch-main-left-form-row">
            <buttonWithColors
            preventNoEvent
              @click="confirmSingleBranch"
              btnColor="PrupleBtn"
              btnLabel="Confirm Branch Data"
            />
          </div>
        </div>
      </div>
      <div class="en-singleBranch-main-right">
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
          v-if="showMap"
           ref="map"
          appCode="CYmnOOwbxujK7conOFcDvg"
          appID="qXtfJqPZXyhEs63j6gkm"
          lat="30.0001"
          lng="31.2152"
          width="500px"
          height="425px"
          v-model="branchData.location"
        />
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import HereMap from "~/components/en/General/HereMap.vue";
import { required, integer, email } from "vuelidate/lib/validators";
import inputWithIcon2 from "~/components/en/General/inputWithIcon2.vue";
import selectInput from "~/components/en/General/selectInput.vue";
import buttonWithColors from "~/components/en/General/buttonWithColors.vue";
import notification from "~/components/en/General/notification.vue";

export default {
  props: {
    showMap: Boolean,
    branchesNumber: Number
  },
  data() {
    return {
      branchData: {
        name: "",
        phone: "",
        email: "",
        address: "",
        password: "",
        location: {}
      },
      success: "",
      error: "",
      suggestions: "",
      place: "",
      SingleImage: "",
      Singlefile: "",
      SingleCover: "",
      Coverfile: "",
      
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
    branchData: {
      name: {
        required
      },
      phone: {
        required,
        integer
      },
      email: {
        required,
        email
      },
      password: {
        required
      },
      address: {
        required
      },
      error: "",
      success: ""
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
      this.branchData.location = position;
      }catch {
        
      }
    },
    createSingleImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;
      reader.onload = e => {
        vm.SingleImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeSingle: function(e) {
      this.SingleImage = "";
    },
    onSingleChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createSingleImage(files[0]);
      this.$store.state.merchantData.branches[this.branchesNumber - 1].image = this.$refs.singleFile.files[0];
    },

createSingleCover(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;
      reader.onload = e => {
        vm.SingleCover = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeSingleCover: function(e) {
      this.SingleCover = "";
    },
    onSingleCoverChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createSingleCover(files[0]);
      this.$store.state.merchantData.branches[this.branchesNumber - 1].cover = this.$refs.singleCover.files[0];
    },

    setName(value) {
      this.branchData.name = value;
      this.$v.branchData.name.$touch();
    },
    setPhone(value) {
      this.branchData.phone = value;
      this.$v.branchData.phone.$touch();
    },
    setEmail(value) {
      this.branchData.email = value;
      this.$v.branchData.email.$touch();
    },
    setPassword(value) {
      this.branchData.password = value;
      this.$v.branchData.password.$touch();
    },
    setAddress(value) {
      this.branchData.address = value;
      this.$v.branchData.address.$touch();
    },
    confirmSingleBranch() {
      this.error = "";
      this.success = "";
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$store.state.merchantForms.branches[
          this.branchesNumber - 1
        ].status = false;
      } else {
        if (
          !(
            Object.keys(this.branchData.location).length === 0 &&
            (this.branchData.location.constructor === Object) != ""
          )
        ) {
          if (this.SingleCover == "" || this.SingleImage == "" ){
            this.error = "Please Upload the required Images"; 
          }else {
this.$store.state.merchantData.branches[
            this.branchesNumber - 1
          ].name = this.branchData.name;
          this.$store.state.merchantData.branches[
            this.branchesNumber - 1
          ].phone = this.branchData.phone;
          this.$store.state.merchantData.branches[
            this.branchesNumber - 1
          ].email = this.branchData.email;
          this.$store.state.merchantData.branches[
            this.branchesNumber - 1
          ].password = this.branchData.password;
          this.$store.state.merchantData.branches[
            this.branchesNumber - 1
          ].address = this.branchData.address;
          this.$store.state.merchantData.branches[
            this.branchesNumber - 1
          ].addressApi.coordinates = [this.branchData.location.lat,this.branchData.location.lng];
            this.$store.state.merchantData.branches[
            this.branchesNumber - 1
          ].addressApi.address = this.branchData.address;
          this.$store.state.merchantData.branches[
            this.branchesNumber - 1
          ].addressApi.description = this.branchData.address;
          this.$store.state.merchantForms.branches[
            this.branchesNumber - 1
          ].status = true;
          this.success = "Confirmed";
          }
          
        } else {
          this.error = "You have to choose a location";
        }
      }
    }
  },
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
.en-singleBranch {
  width: 100%;
  &-title {
    font-size: 24px;
  }
  &-main {
    margin-bottom: 30px;
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
</style>