<template>
  <div class="en-CategoryForm">
    
    <div v-if="success != ''" class="en-CategoryForm-errors-error">
      <notification notfiColor="greenNotfi">{{success}}</notification>
    </div>

    <div class="en-CategoryForm-errors">
      <div v-for="error in errors" :key="error.msg" class="en-CategoryForm-errors-error">
        <notification notfiColor="redNotfi">{{error.msg}}</notification>
      </div>
    </div>

        <div v-if="loading" class="sk-folding-cube">
  <div class="sk-cube1 sk-cube"></div>
  <div class="sk-cube2 sk-cube"></div>
  <div class="sk-cube4 sk-cube"></div>
  <div class="sk-cube3 sk-cube"></div>
</div>

    <form v-if="!loading" @submit.prevent="addCategeroy" class="en-CategoryForm-content">
      <div class="en-CategoryForm-content-row">
        <div class="en-CategoryForm-content-row-element">
          <inputWithIcon2
            iconClass="fas fa-signature"
            placeholder="Category Name"
            @input="setCategoryName"
            v-model="CategoryName"
            type="text"
          >
            <div v-if="$v.CategoryName.$dirty">
              <div v-if="!$v.CategoryName.required">Category Name is required</div>
            </div>
          </inputWithIcon2>
        </div>
      </div>

      <div class="en-CategoryForm-content-row">
        <div class="en-CategoryForm-content-row-element">
          <arinputWithIcon2
            iconClass="fas fa-signature"
            placeholder="اسم القسم"
            @input="setArCategoryName"
            v-model="ArCategoryName"
            type="text"
          >
            <div v-if="$v.ArCategoryName.$dirty">
              <div v-if="!$v.ArCategoryName.required">اسم القسم مطلوب</div>
            </div>
          </arinputWithIcon2>
        </div>
      </div>

      <div class="en-CategoryForm-content-row">
        <div class="en-CategoryForm-content-row-element">
          <selectInput @changedSelect="setParentCategory" v-model="ParentCategory">
            <option value disabled selected>Parent Category</option>
            <option
              v-for="category in categories"
              :key="category._id"
              :value="category._id"
              class="en-selectInput-content-option"
            >{{category.name}}</option>
          </selectInput>
          <div v-if="$v.ParentCategory.$dirty">
            <div style="color:red" v-if="!$v.ParentCategory.required">Parent Category is required</div>
          </div>
        </div>
      </div>

      <div class="en-CategoryForm-content-row">
        <div class="en-CategoryForm-content-row-element">
          <inputWithIcon2
            isTextArea
            cols="7"
            iconClass="fas fa-palette"
            placeholder="Category Description"
            @input="setCategoryDesc"
            v-model="CategoryDesc"
            type="text"
          >
            <div v-if="$v.CategoryDesc.$dirty">
              <div v-if="!$v.CategoryDesc.required">Description is required</div>
            </div>
          </inputWithIcon2>
        </div>
      </div>

      <div class="en-CategoryForm-content-row">
        <div class="en-CategoryForm-content-row-element">
          <arinputWithIcon2
            isTextArea
            cols="7"
            iconClass="fas fa-palette"
            placeholder="وصف القسم"
            @input="setArCategoryDesc"
            v-model="ArCategoryDesc"
            type="text"
          >
            <div v-if="$v.ArCategoryDesc.$dirty">
              <div v-if="!$v.ArCategoryDesc.required">وصف القسم مطلوب</div>
            </div>
          </arinputWithIcon2>
        </div>
      </div>

      <div class="en-CategoryForm-content-row">
        <div class="en-CategoryForm-content-row-element">
          <inputWithIcon2
            iconClass="fas fa-info-circle"
            placeholder="Tags seperated with comma"
            @input="setTags"
            v-model="Tags"
            type="text"
          >
            <div v-if="$v.Tags.$dirty">
              <div v-if="!$v.Tags.required">Tags are required</div>
            </div>
          </inputWithIcon2>
        </div>
      </div>

      <div class="en-CategoryForm-content-row">
        <div v-if="!image" class="en-CategoryForm-content-row-element">
          <label for="category-upload" class="custom-file-upload">
            <i class="fa fa-cloud-upload"></i> Icon Upload
          </label>
          <input
            id="category-upload"
            name="image"
            ref="CategoryIcon"
            type="file"
            @change="onFileChange"
          />

          <div v-if="!image">
            <div class="image-error">image is a must</div>
          </div>
        </div>
        <div v-else class="en-CategoryForm-content-row-element">
          <img :src="image" class="en-CategoryForm-content-row-element-img" alt />
          <buttonWithColors
            preventClick
            @click="removeImage"
            btnColor="RedBtn"
            btnLabel="Remove Icon"
          />
        </div>
      </div>

      <div class="en-categoryForm-content-button">
        <div class="en-CategoryForm-content-button-TheButton">
          <buttonWithColors btnColor="PrupleBtn" btnLabel="Add Category" />
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import Cookie from "js-cookie";
import inputWithIcon2 from "~/components/en/General/inputWithIcon2.vue";
import arinputWithIcon2 from "~/components/ar/General/arinputWithIcon2.vue";
import selectInput from "~/components/en/General/selectInput.vue";
import buttonWithColors from "~/components/en/General/buttonWithColors.vue";
import notification from "~/components/en/General/notification.vue";
import { required } from "vuelidate/lib/validators";


export default {
  data(){
    return {
  loading: false,
    }
  },
  mounted() {
    this.$axios
      .get("https://yalla-ebdaa.herokuapp.com/api/categories")
      .then(data => {
        this.categories = data.data.data;
        console.log(this.categories);
      });
  },
  data() {
    return {
      CategoryName: "",
      ArCategoryName: "",
      ParentCategory: "",
      CategoryDesc: "",
      ArCategoryDesc: "",
      Tags: "",
      image: "",
      categories: "",
      errors: [],
      file: "",
      success: "",
      loading:false,
    };
  },
  components: {
    inputWithIcon2,
    arinputWithIcon2,
    buttonWithColors,
    notification,
    selectInput
  },

  validations: {
    CategoryName: {
      required
    },
    ArCategoryName: {
      required
    },
    ParentCategory: {
      required
    },
    CategoryDesc: {
      required
    },
    ArCategoryDesc: {
      required
    },
    Tags: {
      required
    }
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
      this.file = this.$refs.CategoryIcon.files[0];
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
    setCategoryName(value) {
      this.CategoryName = value;
      this.$v.CategoryName.$touch();
    },
    setArCategoryName(value) {
      this.ArCategoryName = value;
      this.$v.ArCategoryName.$touch();
    },
    setParentCategory(value) {
      this.ParentCategory = value;
      this.$v.ParentCategory.$touch();
    },
    setCategoryDesc(value) {
      this.CategoryDesc = value;
      this.$v.CategoryDesc.$touch();
    },
    setArCategoryDesc(value) {
      this.ArCategoryDesc = value;
      this.$v.ArCategoryDesc.$touch();
    },
    setTags(value) {
      this.Tags = value;
      this.$v.Tags.$touch();
    },
    addCategeroy() {
      this.loading = true;
      let caregoryData = {
        name: this.CategoryName,
        arName: this.ArCategoryName,
        parent: this.ParentCategory,
        description: this.CategoryDesc,
        arDescription: this.ArCategoryDesc,
        tags: this.Tags.split(",")
      };
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
        this.loading = false;
      } else {
        let config = {
          headers: {
            authorization: this.$store.state.token
          }
        };
        this.errors = [];
        const uploadImage = async payload => {
          const formDataa = new FormData();
          formDataa.append("image", this.file);
          let config = {
            headers: {
              authorization: localStorage.getItem("token"),
              "Content-Type": `application/json'; boundary=${formDataa._boundary}`
            }
          };
          await this.$axios
            .post("http://localhost:3005/api/upload/image", formDataa, config)
            .then(data => {
              caregoryData.icon = data.data.imageUrl;
            });
        };
        const submitCategory = async () => {
          await uploadImage();
          console.log("start submit");
          let config = {
            headers: {
              authorization: localStorage.getItem("token")
            }
          };
          await this.$axios
            .post("http://localhost:3005/api/categories", caregoryData, config)
            .then(result => {
              this.success = "Added to Categories";
              this.$emit("updated")
              this.loading = false;
            })
            .catch(error => {
              this.errors.push(error.response.data);
              this.loading = false;

            });
        };
        submitCategory();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.en-CategoryForm {
  &-errors {
    width: 80%;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    &-error {
      width: auto;
      text-align: center;
    }
  }
}
.en-CategoryForm-content {
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  height: auto;
  &-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    &-element {
      width: 100%;
      &-img {
        width: 30%;
        margin: auto;
        display: block;
        margin-bottom: 10px;
      }
    }
  }
  &-button {
    width: 100%;
    &-TheButton {
      width: 350px;
    }
  }
}
input[type="file"] {
  display: none;
}
.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  width: 350px;
  text-align: center;
  border: 1px solid rgb(45, 105, 233);
  border-radius: 10px;
  cursor: pointer;
}
.image-error {
  color: red;
  text-align: left;
  margin-top: -3px;
}
@media (max-width: 992px) {
  .en-CategoryForm-content {
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
        width: auto;
      }
    }
  }
}





// loading :

.sk-folding-cube {
  margin: 200px 100px;
  width: 40px;
  height: 40px;
  position: relative;
  -webkit-transform: rotateZ(45deg);
          transform: rotateZ(45deg);
}

.sk-folding-cube .sk-cube {
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
          transform: scale(1.1); 
}
.sk-folding-cube .sk-cube:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333;
  -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
          animation: sk-foldCubeAngle 2.4s infinite linear both;
  -webkit-transform-origin: 100% 100%;
      -ms-transform-origin: 100% 100%;
          transform-origin: 100% 100%;
}
.sk-folding-cube .sk-cube2 {
  -webkit-transform: scale(1.1) rotateZ(90deg);
          transform: scale(1.1) rotateZ(90deg);
}
.sk-folding-cube .sk-cube3 {
  -webkit-transform: scale(1.1) rotateZ(180deg);
          transform: scale(1.1) rotateZ(180deg);
}
.sk-folding-cube .sk-cube4 {
  -webkit-transform: scale(1.1) rotateZ(270deg);
          transform: scale(1.1) rotateZ(270deg);
}
.sk-folding-cube .sk-cube2:before {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}
.sk-folding-cube .sk-cube3:before {
  -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s; 
}
.sk-folding-cube .sk-cube4:before {
  -webkit-animation-delay: 0.9s;
          animation-delay: 0.9s;
}
@-webkit-keyframes sk-foldCubeAngle {
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
    opacity: 0; 
  } 25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
    opacity: 1; 
  } 90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
    opacity: 0; 
  } 
}

@keyframes sk-foldCubeAngle {
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
    opacity: 0; 
  } 25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
    opacity: 1; 
  } 90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
    opacity: 0; 
  }
}
</style>