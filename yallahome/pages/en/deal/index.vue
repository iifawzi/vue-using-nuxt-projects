<template>
  <div class="en-dealPage">
    <div class="en-dealPage-content">
      <div class="en-dealPage-content-top">
        <div class="en-dealPage-content-top-left">
            <dealInfo/>
        </div>
        <div class="en-dealPage-content-top-right">
            <dealoptions/>
            </div>
      </div>
      <div class="en-dealPage-content-bottom">
          <recently/>
      </div>
    </div>
  </div>
</template>

<script>
import dealInfo from "~/components/en/deal/dealInfo"
import dealoptions from "~/components/en/deal/dealoptions"
import recently from "~/components/en/deal/recently"
export default {
    components:{
        dealInfo,
        recently,
        dealoptions,
    }
}
</script>
<style lang="scss" scoped>
.en-dealPage {
  display: flex;
  justify-content: center;
  &-content {
    width: 70%;
    margin-top: 100px;
    &-top {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      width: 100%;
      &-left {
        width: 60%;
        border-right: 1px solid #E6E7E8;
        padding-right: 20px;
      }
      &-right {
        width: 40%;
        height: 800px;
        position: sticky;
        position: -webkit-sticky;
        align-self: flex-start;
        top: 0px; /* required */
        padding-left: 20px;
      }
    }
    &-bottom{
        margin-top: 150px;
    }
  }
}
</style>