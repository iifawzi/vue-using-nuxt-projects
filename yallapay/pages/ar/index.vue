<template>
  <div class="home-page">
    <Header />
    <navbarAr navType="stickyNav" itemsColor="text-blackk" boxColor="box-blackAr" />
    <Widgets />
    <Why />
    <Services />
    <Contents />
    <Features />
    <ourApp/>
    <banner />




  </div>
</template>

<script>
import Header from "~/components/ar/HomeComponents/Header.vue";
import Widgets from "~/components/ar/HomeComponents/widgets.vue";
import Why from "~/components/ar/HomeComponents/why.vue";
import Services from "~/components/ar/HomeComponents/services.vue";
import Contents from "~/components/ar/HomeComponents/contents.vue";
import navbarAr from "~/components/ar/Navigation/navbarAr.vue";
import Features from "~/components/ar/HomeComponents/Features.vue";
import ourApp from "~/components/ar/HomeComponents/ourApp.vue";
import banner from "~/components/ar/HomeComponents/banner.vue";

export default {
  layout: "arabicLayout",
  components: {
    Header,
    Widgets,
    Why,
    Services,
    Contents,
    navbarAr,
    Features,
    ourApp,
    banner,
  }
};
</script>
