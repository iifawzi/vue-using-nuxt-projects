<template>
  <div class="verticalCard">
    <i class="verticalCardICON mb-3" :class="iconV"></i>
    <h4 class="verticalCard-title">
      <span class="verticalCardLabel">{{ label }}&nbsp;&nbsp;</span>{{ title }}
    </h4>
    <div class="content"><slot /></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false
    },
    iconV: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss">
.verticalCard {
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  &:hover {
  .verticalCardICON {
    font-size: 68px;
    color: #e03a3f;
  }
  .verticalCardLabel {
    color: #e03a3f;;
  }
}
}
.verticalCardICON {
  font-size: 70px;
  color: #5271ff;
}
.verticalCard-title{
  color: #1b3861;;

}
.verticalCardLabel {
  color: #5271ff;
}
.content {
    color:rgb(129, 129, 129);
}

</style>
