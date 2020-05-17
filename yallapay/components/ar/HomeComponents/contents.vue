<template>
  <div class="home-page-contents">
    <img src="~/assets/images/contents-curve.svg" />

    <div class="container">
      <div class="first-content">
        <div class="row">
          <div class="col-lg-6 first-content-image">
            <img class="contentsIMAGE"  src="~/assets/images/home-contents1.png" />
          </div>
          <div class="col-lg-6 first-content-main">
            <div class="first-content-main_title">
              <h2>نقل الاموال حوالين العالم لتسهيل عمل مؤسستك</h2>
            </div>
            <div
              class="first-content-main_sub"
            >إعلان انتهت و بحث. حتى ان كردة أسابيع الأمريكية, ومضى للأراضي العالمية بين مع. إذ جنوب الغالي مما, يبق من وترك اللا, أم عدد السبب الشتاء، تشيكوسلوفاكيا. ٣٠ ومن واُسدل قُدُماً الأوروبية،, حكومة لإعادة والمعدات عل لان.

كما إجلاء أصقاع المدن هو, كل فصل وحتّى الأوروبية. فكانت وحرمان تغييرات عل به،, أي خطّة وحتّى الواقعة بين. قد لها إختار الأمور عالمية. ان تلك واتّجه الثقيلة اليابانية, على كل دخول وأكثرها, فرنسية الإيطالية الى أي. ومضى وبغطاء و لمّ.

و أخذ دفّة أطراف, أخذ أم تجهيز التّحول. بـ لها إعادة عالمية أوروبا, شمال معاملة عل حتى. انه إذ الأخذ العدّ العاصمة. بقسوة العالمي الحيلولة تم عرض, عدم هو السيء إنطلاق.

ان بحشد إختار استرجاع دول. تمهيد الصفحات والروسية بعض مع. مايو الطريق بالمطالبة ما ذلك. التي التقليدية بـ حول, خلاف وبعدما إيطاليا بحث من.</div>
            <div class="first-content-main_button">
              <Button btnStyle="red"> قم بالبدأ الأن</Button>
            </div>
          </div>
        </div>
      </div>

      <div class="second-content mt-5">
        <div class="row">
          <div class="col-lg-6 second-content-main">
            <div class="second-content-main_title">
              <h2>وفر فلوسك واكبر بشركتك</h2>
            </div>
            <div
              class="second-content-main_sub"
            >إعلان انتهت و بحث. حتى ان كردة أسابيع الأمريكية, ومضى للأراضي العالمية بين مع. إذ جنوب الغالي مما, يبق من وترك اللا, أم عدد السبب الشتاء، تشيكوسلوفاكيا. ٣٠ ومن واُسدل قُدُماً الأوروبية،, حكومة لإعادة والمعدات عل لان.

كما إجلاء أصقاع المدن هو, كل فصل وحتّى الأوروبية. فكانت وحرمان تغييرات عل به،, أي خطّة وحتّى الواقعة بين. قد لها إختار الأمور عالمية. ان تلك واتّجه الثقيلة اليابانية, على كل دخول وأكثرها, فرنسية الإيطالية الى أي. ومضى وبغطاء و لمّ.

و أخذ دفّة أطراف, أخذ أم تجهيز التّحول. بـ لها إعادة عالمية أوروبا, شمال معاملة عل حتى. انه إذ الأخذ العدّ العاصمة. بقسوة العالمي الحيلولة تم عرض, عدم هو السيء إنطلاق.

ان بحشد إختار استرجاع دول. تمهيد الصفحات والروسية بعض مع. مايو الطريق بالمطالبة ما ذلك. التي التقليدية بـ حول, خلاف وبعدما إيطاليا بحث من.</div>
            <div class="second-content-main_button">
              <Button btnStyle="purple"> قم بالبدأ الأن</Button>
            </div>
          </div>
          <div class="col-lg-6 second-content-image">
            <img class="contentsIMAGE"  src="~/assets/images/home-contents2.png" />
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
.contentsIMAGE{
  width: 500px;
}
.home-page-contents {
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
      width:100%;
      text-align: right;
      direction: rtl;
    }
    &-main_button {
      width: 30%;
    }
  }
}

.second-content {
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
    &-main_button {
      width: 30%;
    }
  }
}

@media (max-width: 992px) {
  .contentsIMAGE{
  width: 300px;
}
  .home-page-contents {
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
            &_sub {

      width: 100%;
    }
    }

  }
}
</style>
