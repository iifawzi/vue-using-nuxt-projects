<template>
  <div class="home-page-ourApp">
    <img src="~/assets/images/contents-curve.svg" />

    <div class="container">
      <div class="first-content">
        <div class="row">
          <div class="col-lg-6 first-content-image">
            <img class="ourAppIMG" src="~/assets/images/our-application.png" />
          </div>
          <div class="col-lg-6 first-content-main">
            <div class="first-content-main_title">
              <h2>حمل تطبيقنا على الموبايل وكن على قرب</h2>
            </div>
            <div
              class="first-content-main_sub"
            >إعلان انتهت و بحث. حتى ان كردة أسابيع الأمريكية, ومضى للأراضي العالمية بين مع. إذ جنوب الغالي مما, يبق من وترك اللا, أم عدد السبب الشتاء، تشيكوسلوفاكيا. ٣٠ ومن واُسدل قُدُماً الأوروبية،, حكومة لإعادة والمعدات عل لان.

كما إجلاء أصقاع المدن هو, كل فصل وحتّى الأوروبية. فكانت وحرمان تغييرات عل به،, أي خطّة وحتّى الواقعة بين. قد لها إختار الأمور عالمية. ان تلك واتّجه الثقيلة اليابانية, على كل دخول وأكثرها, فرنسية الإيطالية الى أي. ومضى وبغطاء و لمّ.

و أخذ دفّة أطراف, أخذ أم تجهيز التّحول. بـ لها إعادة عالمية أوروبا, شمال معاملة عل حتى. انه إذ الأخذ العدّ العاصمة. بقسوة العالمي الحيلولة تم عرض, عدم هو السيء إنطلاق.
</div>
            <div class="first-content-main_buttons" style="width:100%">
              <Button class="buttonsOUR"  btnStyle="blue">اجهزة ابل</Button>
              <Button  class="buttonsOUR"  btnStyle="green">اجهزة اندرويد</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "~/components/ar/UI/button.vue";
export default {
  components: {
    Button
  }
};
</script>

<style lang="scss" scoped>
.ourAppIMG{
width:500px;
}
.buttonsOUR{
  width: 30%;
}
.home-page-ourApp {
  background-color: #fafafa;
  overflow-x: hidden;
}
.first-content {
  padding: 10px;
  &-image {
    text-align: center;
  }
  &-main {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-end;
    &_title {
      color: #1b3861;
      font-size: 20px;
      margin-bottom: 10px;
    }
    &_sub {
      color: rgb(129, 129, 129);
      margin-bottom: 20px;
      width: 100%;
      text-align: right;
      direction: rtl;
    }
    &_buttons{
      text-align: right;
    }
  }
}
@media (max-width: 992px) {
  .ourAppIMG{
width:300px
}
.buttonsOUR{
  width: 40%;
}
  .home-page-ourApp {
    text-align: center;
  }
  .first-content {
    &-main {
      align-items: center;
            &_sub {
      width: 100%;
    }
    }
  }

  .second-content {
    padding: 10px;
    &-image {
      text-align: center;
    }
    &-main {
      align-items: center;
    }
  }
}
</style>
