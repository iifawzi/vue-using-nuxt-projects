<template>
  <div class="walkkiText">
    <span class="mainTEXT">
      <slot />
    </span>
    <div class="walkkiBOX">
      <div class="colorBOX"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.walkkiText {
  font-size: 20px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.walkkiBOX {
  width: 130px;
  height: 2px;
  background-color: #1b3861;
}
.mainTEXT {
  color: #1b3861;
}
.colorBOX {
  width: 0%;
  height: 100%;
  background-color: #e03a3f;
}
.walkkiText:hover {
  .mainTEXT {
    color: #e03a3f;
  }
  .colorBOX {
    animation: move 0.5s ease;
    animation-fill-mode: forwards;
  }
}

@keyframes move {
  100% {
    width: 100%;
  }
}
</style>