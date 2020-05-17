<template>
  <div class="en-pagination">
    <div class="en-pagination-content">
     <nuxt-link  v-if="currentPage != 1"  :to="{ path: '', query: { page: prevP }}"> <button class="en-pagination-content-buttons en-pagination-content-buttons-before">
        <i class="fas fa-arrow-left arrow arrow-left"></i> Previous
      </button></nuxt-link>
     
      <paginationBox v-if="currentPage != 1"  :pageNumber="parseInt(1)" class="en-pagination-content-box" />

      <div class="en-pagination-content-space"  v-if="currentPage-3 > 1">
        ...
      </div>
     
      <paginationBox v-if="currentPage >=4"  :pageNumber="parseInt(currentPage-2)" class="en-pagination-content-box" />
      <paginationBox v-if="currentPage >=3"  :pageNumber="parseInt(currentPage-1)" class="en-pagination-content-box" />

       <paginationBox active :pageNumber="parseInt(currentPage)" class="en-pagination-content-box" />


  <paginationBox v-if="currentPage+1 < pagesRequired"  :pageNumber="parseInt(currentPage+1)" class="en-pagination-content-box" />
      <paginationBox v-if="currentPage+2 < pagesRequired"  :pageNumber="parseInt(currentPage+2)" class="en-pagination-content-box" />

  <div class="en-pagination-content-space" v-if="currentPage+3 < pagesRequired">
        ...
      </div>

      <paginationBox v-if="currentPage != pagesRequired" :pageNumber=" parseInt(pagesRequired)" class="en-pagination-content-box" />
       

      <nuxt-link v-if="currentPage != pagesRequired" :to="{ path: '', query: { page: nextP }}"><button class="en-pagination-content-buttons en-pagination-content-buttons-next">Next
 <i class="fas fa-arrow-right arrow arrow-right"></i>
      </button></nuxt-link>
    </div>
  </div>
</template>

<script>
import paginationBox from "~/components/en/index/paginationBox";
export default {
  components: {
    paginationBox
  },
  props:{
      currentPage:{
          type:Number,
      },
       pagesRequired:{
          type:Number,
      }
  },
      computed:{
        nextP(){
            return this.currentPage+1;
        },
        prevP(){
            return this.currentPage-1;
        }
    }
};
</script>

<style lang="scss" scoped>
.en-pagination {
  margin-bottom: 20px;
  &-content {
    display: flex;
    flex-flow: row;
    justify-content: center;
    &-box {
      margin-right: 20px;
    }
    &-box:nth-of-type(1) {
      margin-left: 20px;
    }
    &-buttons {
      background-color: rgb(235, 12, 60);
      color: white;
      width: 120px;
      border-radius: 10px;
      &:focus{
          outline:none;
      }
    }
    &-space{
margin-right: 20px;
    }
  }
}
.arrow {
  font-size: 14px;
  &-left {
      margin-right: 10px;
      }
      &-right{
          margin-left: 10px;
      }
}
</style>