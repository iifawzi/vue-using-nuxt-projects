<template>
  <div class="walkkiCard" :class="[withBGonHover=='coloredHover' ? 'BGonHoverd' : '',withBGonHover]">
    <div>
      <i class="iconCW" :class="walkkiCardICON"></i>
      <div class="walkkiCardTitle">
        <h4>
          <slot />
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    walkkiCardICON: {
      type: String,
      required: true
    },
    withBGonHover:{
       type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.walkkiCard {
  width: 100%;
  height: 200px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-bottom: 2px solid white;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
}
  .basic:hover {
    animation: move 0.3s ease;
    animation-fill-mode: forwards;
    .iconCW {
      color: #e03a3f;
    }
  }
   .coloredHover:hover {
    animation: move 0.3s ease;
    animation-fill-mode: forwards;
    .iconCW {
      color: white;
    }
  }
  .BGonHoverd:hover{
    background-color: #5271ff;
    color: white;
  }
  

.walkkiCardTitle {
  margin-top: 20px;
}
.iconCW {
  color: #5271ff;
  font-size: 50px;
}

@keyframes move {
  100% {
    border-bottom: 1px solid #e03a3f;
  }
}
</style>