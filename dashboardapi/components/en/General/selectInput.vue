<template>
    <div class="en-selectInput">
        <div class="en-selectInput-content">
            <select
          v-bind="$attrs"
          @change="$emit('changedSelect', $event.target.value)"
             class="en-selectInput-content-select">

  <slot/>

</select>
        </div>
        
    </div>
</template>

<style lang="scss">
.en-selectInput{
    width: 100%;
    &-content{
        &-select{
            width: 100%;
            border: 1px solid rgb(45, 105, 233);
           font-size: 18px;
             border-radius: 10px;
          color: rgba(34, 37, 42, 0.87);
        &:focus{
            outline: none;
        }
        }
    }
}
</style>