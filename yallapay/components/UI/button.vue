<template>
  <button
    class="Mybutton"
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
<style scoped>
.Mybutton {
     width: 100%;
  border-radius: 5px;
    padding: 10px;
    color: white;
    font-size: 20px;
}
.Mybutton:focus {
    outline: none;
}
.purple {
 background-color:#5271ff;
     border: #5271ff;
}
.purple:hover {
 /* color: #5271ff;
  background-color: white;
 border: white; */
   color: white;
  background-color: #E03A3F;
 border: #E03A3F;
}
.red {
  background-color : #E03A3F;
  border: #E03A3F;
}
.red:hover {
 /* color: #E03A3F;
 background-color: white; */
 /* border: #E03A3F; */
  color: white;
  background-color: #5271ff;
 border: #5271ff;
}
.green {
  background-color : rgb(58, 224, 113);
 border: 1px solid rgb(58, 224, 113);
}
.green:hover {
  color: rgb(58, 224, 113);
  background-color: transparent;
 border: 1px solid rgb(58, 224, 113);
}
.blue {
  background-color : white;
  border: 1px solid rgb(4, 78, 175);
  color: rgb(4, 78, 175);
}
.blue:hover {
 /* color: #E03A3F;
 background-color: white; */
 /* border: #E03A3F; */
  color: white;
  background-color:rgb(4, 78, 175);
 border: 1px solid white
}
</style>