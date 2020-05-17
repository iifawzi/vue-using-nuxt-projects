<template>
  <div class="home-page">
    <Header />
    <Navbar navType="stickyNav" itemsColor="text-blackk" boxColor="box-blackAr" />
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
import Header from "~/components/HomeComponents/header.vue";
import Widgets from "~/components/HomeComponents/widgets.vue";
import Why from "~/components/HomeComponents/why.vue";
import Services from "~/components/HomeComponents/services.vue";
import Contents from "~/components/HomeComponents/contents.vue";
import Navbar from "~/components/Navigation/navbar.vue";
import Features from "~/components/HomeComponents/Features.vue";
import ourApp from "~/components/HomeComponents/ourApp.vue";
import banner from "~/components/HomeComponents/banner.vue";

export default {
  middleware: ['check-auth'],
  components: {
    Header,
    Widgets,
    Why,
    Services,
    Contents,
    Navbar,
    Features,
    ourApp,
    banner,
  }
};
</script>
