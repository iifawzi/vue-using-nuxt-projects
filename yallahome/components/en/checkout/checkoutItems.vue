<template>
  <div class="en-checkItems">
    <div class="en-checkItems-content">
      <div class="en-checkItems-content-top">
        <table class="en-checkItems-content-top-table" style="width:100%">
          <tr class="en-checkItems-content-top-table-row">
            <th class="en-checkItems-content-top-table-header">ITEM</th>
            <th class="en-checkItems-content-top-table-header">QTY</th>
            <th class="en-checkItems-content-top-table-header">PRICE</th>
          </tr>
          <tr class="en-checkItems-content-top-table-row">
            <td class="en-checkItems-content-top-table-row-data">
              <div class="en-checkItems-content-top-table-row-data-item">
                <div class="en-checkItems-content-top-table-row-data-item-img">
                  <!-- img -->
                </div>
                <div class="en-checkItems-content-top-table-row-data-item-name">CHECKERED SHIRT</div>
              </div>
            </td>
            <td class="en-checkItems-content-top-table-row-data">1</td>
            <td class="en-checkItems-content-top-table-row-data">$ 75.00</td>
          </tr>
        </table>
      </div>
      <div class="en-checkItems-content-bottom">
        <div class="en-checkItems-content-bottom-title">APPLY PROMOCODE</div>
        <div class="en-checkItems-content-bottom-input">
          <div class="en-checkItems-content-bottom-input-inp">
            <generalInput />
          </div>
          <div class="en-checkItems-content-bottom-input-btn">
            <button class="en-checkItems-content-bottom-input-btn-button">APPLY</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import generalInput from "~/components/en/general/generalInput.vue";

export default {
  components: {
    generalInput
  }
};
</script>
<style lang="scss" scoped>
.en-checkItems {
  &-content {
    display: flex;
    flex-flow: column;
    &-top {
      background-color: #fbfbfb;
      border-radius: 5px;
      padding: 10px;
      margin-bottom: 30px;
      text-align: center;
      &-table {
        &-header {
            color:rgb(235, 12, 60);
        }
        &-row {
          &-data {
              font-size: 16px;
              font-weight: 500;
            &-item {
              &-img {
              }
            }
          }
        }
      }
    }
    &-bottom {
      display: flex;
      flex-flow: column;
      background-color: #fbfbfb;
      border-radius: 5px;
      padding: 10px;
      &-title {
        font-size: 20px;
        font-weight: 500;
      }
      &-input {
        margin-top: 20px;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        &-inp {
          width: 250px;
        }
        &-btn {
          align-self: center;
          margin-top: 9px;
          &-button {
            background-color: rgb(235, 12, 60);
            color: white;
            width: 150px;
            border-radius: 15px;
            border: 0px;
          }
        }
      }
    }
  }
}
</style>