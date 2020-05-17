<template>
  <div class="en-dashCategories">
    <div class="en-dashCategories-content">
      <table class="en-dashCategories-content-table">
        <tr class="en-dashCategories-content-table-tr">
          <th class="en-dashCategories-content-table-th">Category Name</th>
          <th class="en-dashCategories-content-table-th">Parent Category</th>
          <th class="en-dashCategories-content-table-th">Category Description</th>
          <th class="en-dashCategories-content-table-th">Category Tags</th>
          <th class="en-dashCategories-content-table-th">Options</th>
        </tr>
        <tr v-for="category in categories" :key="category._id" class="en-dashCategories-content-table-tr">
          <td>{{category.name}}</td>
          <td>{{category.parent}}</td>
          <td>{{category.description}}</td>
          <td>{{category.tags.toString()}}</td>
          <td>
              <div class="en-dashCategories-content-table-tr-options">
 <i class="fas fa-times"></i>
              <i class="fas fa-edit en-dashCategories-content-table-tr-options-edit "></i>
              </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
 data(){
   return {
     categories:"",
   }
 },
   mounted() {
    this.$axios
      .get("https://yalla-ebdaa.herokuapp.com/api/categories")
      .then(data => {
        this.categories = data.data.data;
      });
  },
}
</script>

<style lang="scss" scoped>
.en-dashCategories {
  width: 100%;
  &-content {
      margin-top: 15px;
    width: 100%;
    height: 600px;
    overflow: scroll;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.281);
    padding: 20px;
    border-radius: 20px;
    &-table {
      width: 100%;
      text-align: center;
      
      &-th{
color: #DC1F29;
      }
      &-tr{
          height: 50px;
          &-options{
              color: #DC1F29;
              cursor: pointer;
              &-edit{
                  color: rgb(32, 182, 32);
                  margin-left: 20px;
              }
          }
          &:hover{
              background-color: #e6e3e3;
          }
      }
    }
  }
}
</style>