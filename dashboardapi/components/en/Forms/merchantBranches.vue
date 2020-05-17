<template>
  <form class="en-merchantBranches">
    <div class="en-merchantBranches-title">Branches:</div>
    <hr />
    <div
      v-for="branchesNumber of branchesNumber"
      :key="branchesNumber"
      class="en-merchantBranches-main"
    >
      <singleBranch :showMap="showMap" :branchesNumber="branchesNumber" />
    </div>
    <div class="en-merchantBranches-options">
      <div class="en-merchantBranches-options-add" @click="addBranch">
        <i class="fas fa-plus"></i>
      </div>
      <div class="en-merchantBranches-options-remove" @click="removeBranch">
        <i class="fas fa-minus"></i>
      </div>
    </div>
  </form>
</template>

<script>
import singleBranch from "~/components/en/Forms/singleBranch";
export default {
  props: {
    showMap: Boolean
  },
  data() {
    return {
      branchesNumber: 0
    };
  },
  components: {
    singleBranch
  },
  methods: {
    removeBranch() {
      if (this.branchesNumber != 0) {
        this.branchesNumber--;
        this.$store.state.merchantData.branches.splice(
          this.$store.state.merchantData.branches.length - 1,
          1
        );
        this.$store.state.merchantForms.branches.splice(
          this.$store.state.merchantForms.branches.length - 1,
          1
        );
      }
    },
    addBranch() {
      this.branchesNumber++;
      this.$store.state.merchantData.branches.push({
        name: "",
        branchId: "" + this.branchesNumber,
        phone: "",
        email: "",
        password: "",
        address: "",
        image: "",
        cover: "",
        addressApi: {
          type: "Point",
          coordinates: "",
          address: "",
          description: ""
        }
      });
      this.$store.state.merchantForms.branches.push({
        branchId: "" + this.branchesNumber,
        status: false
      });
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.en-merchantBranches {
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
  &-options {
    &-add {
      color: green;
      cursor: pointer;
    }
    &-remove {
      color: red;
      cursor: pointer;
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