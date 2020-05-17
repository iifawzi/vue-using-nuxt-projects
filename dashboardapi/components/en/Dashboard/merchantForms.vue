<template>
  <div class="en-merchantForms">
    <div v-if="error != ''" class="en-merchantForms-errors">
      <notification notfiColor="redNotfi">{{error}}</notification>
    </div>
     <div v-if="success != ''" class="en-merchantForms-errors">
      <notification notfiColor="greenNotfi">{{success}}</notification>
    </div>
    <div class="en-merchantForms-content">
      <div class="en-merchantForms-content-firstSection">
        <merchantForm :showMap="showMap" />
      </div>
      <div class="en-merchantForms-content-SecondSection">
        <contactPerson :showMap="showMap" />
      </div>
      <hr />

    <div v-if="loading" class="spinner">
  <div class="double-bounce1"></div>
  <div class="double-bounce2"></div>
</div>

      <div v-if="!loading" class="en-merchantForms-content-ThirdSection">
        <buttonWithColors
          v-if="!branches.exist"
          class="en-merchantForms-content-ThirdSection-submitForm"
          @click="sendDataWithoutBranches"
          btnColor="PrupleBtn"
          btnLabel="Submit The Form without Branches"
        />
        <br />
        <buttonWithColors
          class="en-merchantForms-content-ThirdSection-addBranches"
          @click="toggleBranches"
          btnColor="RedBtn"
          :btnLabel="branches.exist ? 'Hide Branches' : 'Add Branches'"
        />
      </div>
      <div v-if="branches.exist" class="en-merchantForms-content-FourthSection">
        <merchantBranches :showMap="showMap" />
      </div>
      <div v-if="error != ''" style="margin-bottom:10px" class="en-merchantForms-errors">
        <notification notfiColor="redNotfi">{{error}}</notification>
      </div>
      <div v-if="success != ''" class="en-merchantForms-errors">
      <notification notfiColor="greenNotfi">{{success}}</notification>
    </div>

    <div v-if="loading" class="spinner">
  <div class="double-bounce1"></div>
  <div class="double-bounce2"></div>
</div>

      <div v-if="!loading" class="en-merchantForms-content-ThirdSection">
        <buttonWithColors
          v-if="branches.exist"
          @click="submitMerchant"
          class="en-merchantForms-content-ThirdSection-submitForm"
          btnColor="PrupleBtn"
          btnLabel="Submit"
        />
      </div>
      <div class="horiz-line"></div>
    </div>
  </div>
</template>

<script>
import merchantForm from "~/components/en/Forms/merchantForm";
import contactPerson from "~/components/en/Forms/contactPerson";
import merchantBranches from "~/components/en/Forms/merchantBranches";
import buttonWithColors from "~/components/en/General/buttonWithColors.vue";
import notification from "~/components/en/General/notification.vue";

export default {
  data() {
    return {
      isMapLoaded1: false,
      isMapLoaded2: false,
      isMapLoaded3: false,
      isMapLoaded4: false,
      branches: {
        exist: false,
        number: 0
      },
      error: "",
      loading: false,
      success:"",
    };
  },
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://js.hereapi.cn/v3/3.0/mapsjs-ui.css"
        }
      ],
      script: [
        {
          hid: "maps1",
          src: "https://js.api.here.com/v3/3.0/mapsjs-core.js",
          defer: true,
          callback: () => {
            this.isMapLoaded1 = true;
          }
        },
        {
          hid: "maps2",
          src: "https://js.api.here.com/v3/3.0/mapsjs-service.js",
          defer: true,
          callback: () => {
            this.isMapLoaded2 = true;
          }
        },
        {
          hid: "maps3",
          src: "https://js.api.here.com/v3/3.0/mapsjs-ui.js",
          defer: true,
          callback: () => {
            this.isMapLoaded3 = true;
          }
        },
        {
          hid: "maps4",
          src: "https://js.api.here.com/v3/3.0/mapsjs-mapevents.js",
          defer: true,
          callback: () => {
            this.isMapLoaded4 = true;
          }
        }
      ]
    };
  },
  components: {
    merchantForm,
    contactPerson,
    merchantBranches,
    buttonWithColors,
    notification
  },
  computed: {
    showMap() {
      if (
        this.isMapLoaded1 &&
        this.isMapLoaded2 &&
        this.isMapLoaded3 &&
        this.isMapLoaded4
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    checkValidtiyOfBranches() {
      const branches = this.$store.state.merchantForms.branches;
      const branchesStatus = branches.every(branch => {
        return branch.status === true;
      });
      if (branchesStatus === true) {
        return true;
      } else {
        this.error = "Some Data, is missing, please re-confirm all the forms";
        console.log(branches);
        return false;
      }
    },
     async uploadImage(payload){
          const formDataa = new FormData();
          formDataa.append("image", payload.fileToUpload);
          let config = {
            headers: {
              authorization: localStorage.getItem("token"),
              "Content-Type": `application/json'; boundary=${formDataa._boundary}`
            }
          };
          await this.$axios
            .post("http://localhost:3005/api/upload/image", formDataa, config)
            .then(data => {
              if (payload.forWhat == "main") {
                this.$store.commit("setImages", {
                  forWhat: "main",
                  propName: "cover",
                  link: data.data.imageUrl
                });
              } else if (payload.forWhat == "branch") {
                this.$store.commit("setImages", {
                  forWhat: "branch",
                  propName: payload.propName,
                  branch: payload.branch,
                  link: data.data.imageUrl
                });
              }
            });
        },
    submitMerchant() {
      this.loading = true;
      const branchesStatus = this.checkValidtiyOfBranches();
      if (
        this.$store.state.merchantForms.firstOne &&
        this.$store.state.merchantForms.secondOne &&
        branchesStatus
      ) {
        let merchantData = this.$store.state.merchantData;
        let config = {
          headers: {
            authorization: localStorage.getItem("token"),
            "Content-Type": "application/json"
          }
        };
        const asyncSubmitting = async () => {
          await this.uploadImage({
            forWhat: "main",
            fileToUpload: merchantData.cover
          });
          merchantData.branches.map(async branch => {
            await this.uploadImage({
              forWhat: "branch",
              branch: branch.branchId - 1,
              fileToUpload: branch.cover,
              propName: "cover"
            });
            await this.uploadImage({
              forWhat: "branch",
              branch: branch.branchId - 1,
              fileToUpload: branch.image,
              propName: "image"
            });
            await this.$axios
              .post("http://localhost:3005/api/merchants", merchantData, config)
              .then(result => {
                console.log(result);
                this.success = "Added Successfully!"
                this.loading = false;
              })
              .catch(error => {
                this.error = "Sorry, something happened!"
                console.log(error);
                this.loading = false;

              });
          });
        };
        asyncSubmitting();
      } else {
        this.error = "Some Data, is missing, please re-confirm all the forms";
        this.loading = false;
      }
    },
    toggleBranches() {
      this.branches.exist = !this.branches.exist;
    },
    sendDataWithoutBranches() {
      this.loading = true;
      if (
        this.$store.state.merchantForms.firstOne &&
        this.$store.state.merchantForms.secondOne &&
        !this.branches.exist
      ) {
               let merchantData = this.$store.state.merchantData;
        let config = {
          headers: {
            authorization: localStorage.getItem("token"),
            "Content-Type": "application/json"
          }
        };
        const asyncSubmitting = async () => {
          await this.uploadImage({
            forWhat: "main",
            fileToUpload: merchantData.cover
          });
            await this.$axios
              .post("http://localhost:3005/api/merchants", merchantData, config)
              .then(result => {
                console.log(result);
                this.success = "Added Successfully!"
                this.loading = false;
              })
              .catch(error => {
                console.log(error);
                this.error = "Sorry, something happened!"
                this.loading = false;
              });
        };
        asyncSubmitting();
      } else {
        this.loading = false;
        console.log("errorrr");
        this.error = "Some Data is missing, please re-confirm the forms";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.en-merchantForms {
  width: 90%;
  &-content {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    // background-color: green;
    &-firstSection {
      // background-color: red;
      width: 100%;
      height: auto;
    }
    &-SecondSection {
      // background-color: blue;
      width: 100%;
      height: auto;
    }
    &-ThirdSection {
      display: flex;
      flex-flow: row;
      justify-content: space-around;
      width: 100%;
      height: auto;
      margin-bottom: 20px;
      &-submitForm {
        width: 45%;
      }
      &-addBranches {
        width: 45%;
      }
    }
    &-FourthSection {
      // background-color: aqua;
      width: 100%;
      height: auto;
    }
  }
}



// Loading 

.spinner {
  width: 40px;
  height: 40px;

  position: relative;
  margin: 100px auto;
}

.double-bounce1, .double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #333;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  
  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
  animation: sk-bounce 2.0s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

@-webkit-keyframes sk-bounce {
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bounce {
  0%, 100% { 
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% { 
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
</style>