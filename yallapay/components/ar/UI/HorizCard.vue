<template>
  <div class="HorizCard">   
    <div class="card-content">
        <h4 class="card-content_main">{{title}}</h4>
        <span class="card-content_sub">
            <slot/>
            </span>
    </div>
          <div class="HorizCardICON">
           <i class=" mb-3" :class="iconH"></i>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        iconH: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
    }
};
</script>
<style lang="scss" scoped>
.HorizCard {
  width: 100%;
  height: 150px;
  display: flex;
  flex-flow: row;
justify-content: space-around;
  background-color: #ffffff ;
  border-radius: 12px;
  padding: 10px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);

  &:hover {
        background:#5271ff;
        color: white;
        .HorizCardICON {
          color: white;
        }
        .card-content {
          color: white;
          &_sub {
      color:white;
    }
        }
    }
}
.card-content {
  width: 80%;
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    align-self: center;
    color: #1b3861;
    &_sub {
      color: rgb(129, 129, 129);
      text-align: right;
    }
}
.HorizCardICON{
  font-size: 40px;
  display: flex;
    flex-flow: column;
    padding-top: 14px;
    color: #e03a3f;
}
@media (max-width: 576px) { 
.HorizCard {
  width: 100%;
  height: 220px;
  display: flex;
  flex-flow: column;
align-items:center;
  padding: 10px;
  font-size: 15px;
}
.card-content {
    align-items:center;
}
.card-content_sub{
    text-align: center;
    padding-bottom: 5px;
}
 }
</style>
