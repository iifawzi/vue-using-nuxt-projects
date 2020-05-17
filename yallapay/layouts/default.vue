<template>
  <div>
    <nuxt />
        <Homefooter />
    <copyRights/>
  </div>
</template>

<script>
import Homefooter from "~/components/HomeComponents/footer.vue";
import copyRights from "~/components/UI/copyRights.vue";
export default {
  components: {
    Homefooter,
    copyRights,
  }
}
</script>