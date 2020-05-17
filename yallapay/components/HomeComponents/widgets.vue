<template>
  <div class="home-page-widgets pt-10 mb-6">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-9">
          <VerticalCard label="01" title="Create new account" iconV="far fa-user">
            Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit
            amet consectetu. Agencies to define their new business objectives
            and then create
          </VerticalCard>
        </div>
        <div class="col-md-4 get-up mb-5">
          <VerticalCard label="02" title="Attach bank accounts" iconV="fas fa-money-check-alt">
            Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit
            amet consectetu. Agencies to define their new business objectives
            and then create
          </VerticalCard>
        </div>
        <div class="col-md-4">
          <VerticalCard label="03" title="Send money" iconV="fas fa-globe-europe">
            Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit
            amet consectetu. Agencies to define their new business objectives
            and then create
          </VerticalCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/UI/button.vue";
import VerticalCard from "~/components/UI/VerticalCard.vue";
export default {
  components: {
    Button,
    VerticalCard
  }
};
</script>

<style lang="scss" scoped>
.home-page-widgets {
  height: 300px;
}
.get-up {
  margin-top: -70px;
}

@media (max-width: 768px) {
  .home-page-widgets {
    height: 700px;
  }
}
</style>
