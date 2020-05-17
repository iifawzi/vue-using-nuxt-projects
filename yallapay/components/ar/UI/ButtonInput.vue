<template>
  <button
    class="button"
    :class="btnStyle"
    ><slot /></button>
</template>

<script>
export default {
  props:{
    btnStyle:{
      type: String,
      required: false,
      default: "",
    },
  }
}
</script>
<style>
.button {
     width: 100%;
    border: rgba(253, 253, 253, 0.712)  1px solid;
  border-radius: 15px 0px 15px 0px;
    padding: 12px;
    color: white;
    font-size: 15px;
}
.green {
 background-color:rgba(61, 194, 61, 0.712);
}
.green:hover {
 color: rgba(61, 194, 61, 0.712);
}
.btn-error {
 background-color: #afa016;
  color: white ;
}
.btn-error:hover {
 background-color: #afa016 !important;
  color: white ;
cursor:not-allowed;
}
.red {
 background-color:rgba(224, 24, 51, 0.712);
}
.red:hover {
 color: rgba(224, 24, 51, 0.712);
}
.button:hover {
    border: 1px solid;
    background-color: #ffffff;
}
.button:focus {
    outline: none;
}
</style>