<template>
  <div class="en-contactPerson">
    <div class="en-contactPerson-title">
      Contact Person:
      <hr />
      <div v-if="success != '' " class="en-contactPerson-msg">
        <notification notfiColor="greenNotfi">{{success}}</notification>
      </div>
      <div v-if="error != '' " class="en-contactPerson-msg">
        <notification notfiColor="redNotfi">{{error}}</notification>
      </div>
      <div class="en-contactPerson-main">
        <div class="en-contactPerson-main-left">
          <div class="en-contactPerson-main-left-form">
            <div class="en-contactPerson-main-left-form-row">
              <inputWithIcon2
                iconClass="fas fa-signature"
                placeholder="Person Name"
                @input="setName"
                v-model="contactPerson.name"
                type="text"
              >
                <div v-if="$v.contactPerson.name.$dirty">
                  <div class="field-error" v-if="!$v.contactPerson.name.required">Name is required</div>
                </div>
              </inputWithIcon2>
            </div>

            <div class="en-contactPerson-main-left-form-row">
              <inputWithIcon2
                iconClass="fas fa-phone-square-alt"
                placeholder="Phone Number"
                @input="setPhone"
                v-model="contactPerson.phone"
                type="text"
              >
                <div v-if="$v.contactPerson.phone.$dirty">
                  <div class="field-error" v-if="!$v.contactPerson.phone.required">Phone is required</div>
                  <div class="field-error" v-if="!$v.contactPerson.phone.integer">Phone is invalid</div>
                </div>
              </inputWithIcon2>
            </div>

            <div class="en-contactPerson-main-left-form-row">
              <inputWithIcon2
                iconClass="fas fa-envelope-open-text"
                placeholder="Email"
                @input="setEmail"
                v-model="contactPerson.email"
                type="text"
              >
                <div v-if="$v.contactPerson.email.$dirty">
                  <div class="field-error" v-if="!$v.contactPerson.email.required">Email is required</div>
                  <div class="field-error" v-if="!$v.contactPerson.email.email">Email is invalid</div>
                </div>
              </inputWithIcon2>
            </div>

            <div class="en-contactPerson-main-left-form-row">
              <inputWithIcon2
                iconClass="fas fa-user-md"
                placeholder="Job Title"
                @input="setJobTitle"
                v-model="contactPerson.jobTitle"
                type="text"
              >
                <div v-if="$v.contactPerson.jobTitle.$dirty">
                  <div
                    class="field-error"
                    v-if="!$v.contactPerson.jobTitle.required"
                  >Job Title is required</div>
                </div>
              </inputWithIcon2>
            </div>

            <div class="en-contactPerson-main-left-form-row">
              <selectInput @changedSelect="setPayOutBy" v-model="contactPerson.payOutBy">
                <option value disabled selected>Payout By</option>
                <option class="en-selectInput-content-option" value="cheque">Cheque</option>
                <option class="en-selectInput-content-option" value="cash">Cash</option>
              </selectInput>

              <div v-if="$v.contactPerson.payOutBy.$dirty">
                <div
                  class="field-error"
                  v-if="!$v.contactPerson.payOutBy.required"
                >Payout By is required</div>
              </div>
            </div>

            <div class="en-contactPerson-main-left-form-row">
              <buttonWithColors
                @click="submitContactWithPrevious"
                class="btn-font"
                btnColor="PrupleBtn"
                btnLabel="Confirm Contact Person Data"
              />
            </div>
          </div>
        </div>
        <div class="en-contactPerson-main-right">
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
            v-model="contactPerson.location"
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

export default {
  props: {
    showMap: Boolean
  },
  data() {
    return {
      contactPerson: {
        name: "",
        phone: "",
        email: "",
        jobTitle: "",
        payOutBy: "",
        location: {},
        address: ""
      },
      success: "",
      error: "",
      suggestions: "",
      place: ""
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
    contactPerson: {
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
      jobTitle: {
        required
      },
      payOutBy: {
        required
      },
      location: {}
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
      this.contactPerson.location = position;
      }catch {
        
      }
    },
    setName(value) {
      this.contactPerson.name = value;
      this.$v.contactPerson.name.$touch();
    },
    setPhone(value) {
      this.contactPerson.phone = value;
      this.$v.contactPerson.phone.$touch();
    },
    setEmail(value) {
      this.contactPerson.email = value;
      this.$v.contactPerson.email.$touch();
    },
    setJobTitle(value) {
      this.contactPerson.jobTitle = value;
      this.$v.contactPerson.jobTitle.$touch();
    },
    setPayOutBy(value) {
      this.contactPerson.payOutBy = value;
      this.$v.contactPerson.payOutBy.$touch();
    },
    submitContactWithPrevious() {
      console.log("clicked");
      this.error = "";
      this.success = "";
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$store.state.merchantForms.secondOne = false;
      } else {
        if (
          !(
            Object.keys(this.contactPerson.location).length === 0 &&
            (this.contactPerson.location.constructor === Object) != ""
          )
        ) {
          this.$store.state.merchantData.contactPerson.name = this.contactPerson.name;
          this.$store.state.merchantData.contactPerson.phone = this.contactPerson.phone;
          this.$store.state.merchantData.contactPerson.email = this.contactPerson.email;
          this.$store.state.merchantData.contactPerson.location = this.contactPerson.location;
          this.$store.state.merchantData.contactPerson.jobTitle = this.contactPerson.jobTitle;
          this.$store.state.merchantData.contactPerson.payOutBy = this.contactPerson.payOutBy;
          this.$store.state.merchantForms.secondOne = true
          this.success = "Confirmed";
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
.en-contactPerson {
  &-msg {
    margin-bottom: 30px;
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