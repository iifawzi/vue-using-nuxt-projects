<template>
<div class="login-page">
  <Header/>
</div>
</template>

<script>
import Header from "~/components/LoginComponents/header.vue"
import Navbar from "~/components/Navigation/navbar.vue"
export default {
  layout:"withoutFooter",
  components:{
    Header,
    Navbar,
  }
}
</script>