<template>
  <div>
    <nuxt />
        <Homefooter />
    <copyRights/>
  </div>
</template>

<script>
import Homefooter from "~/components/ar/HomeComponents/footer.vue";
import copyRights from "~/components/ar/UI/copyRights.vue";
export default {
  layout: "arabicLayout",
  components: {
    Homefooter,
    copyRights,
  }
}
</script>