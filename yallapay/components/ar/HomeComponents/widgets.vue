<template>
  <div class="home-page-widgets pt-10 mb-6">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-9">
          <VerticalCard label="٣" title="اربطه بحسابك البنكي" iconV="far fa-user">
            إعلان انتهت و بحث. حتى ان كردة أسابيع الأمريكية, ومضى للأراضي العالمية بين مع. إذ جنوب الغالي مما, يبق من وترك اللا, أم عدد السبب الشتاء، تشيكوسلوفاكيا. ٣٠ ومن واُسدل قُدُماً الأوروبية،, حكومة لإعادة والمعدات عل لان.

          </VerticalCard>
        </div>
        <div class="col-md-4 get-up mb-5">
          <VerticalCard label="٢" title="استقبل الاموال" iconV="fas fa-money-check-alt">
            إعلان انتهت و بحث. حتى ان كردة أسابيع الأمريكية, ومضى للأراضي العالمية بين مع. إذ جنوب الغالي مما, يبق من وترك اللا, أم عدد السبب الشتاء، تشيكوسلوفاكيا. ٣٠ ومن واُسدل قُدُماً الأوروبية،, حكومة لإعادة والمعدات عل لان.

          </VerticalCard>
        </div>
        <div class="col-md-4">
          <VerticalCard label="١" title="انشاء حساب جديد" iconV="fas fa-globe-europe">
           إعلان انتهت و بحث. حتى ان كردة أسابيع الأمريكية, ومضى للأراضي العالمية بين مع. إذ جنوب الغالي مما, يبق من وترك اللا, أم عدد السبب الشتاء، تشيكوسلوفاكيا. ٣٠ ومن واُسدل قُدُماً الأوروبية،, حكومة لإعادة والمعدات عل لان.

          </VerticalCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/ar/UI/button.vue";
import VerticalCard from "~/components/ar/UI/VerticalCard.vue";
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
