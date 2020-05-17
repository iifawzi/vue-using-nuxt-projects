<template>
  <div class="footer-main">
    <div class="container">
      <div class="footer-main-content">
        <div class="right-footer-side">
            <ColList title="الاقسام">
             <ColListItem to="#">الرئيسية</ColListItem>
        <ColListItem to="#">الصفحات</ColListItem>
        <ColListItem to="#">المميزات</ColListItem>
        <ColListItem to="#">المدونه</ColListItem>
        <ColListItem to="#">للتواصل معنا</ColListItem>
            </ColList>
               <ColList title="الخدمات">
             <ColListItem to="#">ارسال اموال</ColListItem>
        <ColListItem to="#">استقبال اموال</ColListItem>
        <ColListItem to="#">التسوق</ColListItem>
        <ColListItem to="#">الدفع لصديق</ColListItem>
        <ColListItem to="#">دفع الفواتير</ColListItem>
            </ColList>

             <ColList title="الشركات">
             <ColListItem to="#">من نحن</ColListItem>
        <ColListItem to="#">خدماتنا</ColListItem>
        <ColListItem to="#">الاحداث</ColListItem>
        <ColListItem to="#">العروض</ColListItem>
        <ColListItem to="#">الشروط والخدمات</ColListItem>
            </ColList>

             <ColList title="الدعم">
             <ColListItem to="#">خدمة العملاء</ColListItem>
        <ColListItem to="#">دعم مباشر</ColListItem>
        <ColListItem to="#">التنبيهات</ColListItem>
        <ColListItem to="#">الشروط والأحكام </ColListItem>
        <ColListItem to="#">تواصل معنا</ColListItem>
            </ColList>
            
            </div>
              <div class="left-footer-side">
          <div class="left-logo">
            <img width="250px" src="~/assets/images/logo.png" />
          </div>
          <div class="left-info">
            <span
              class="main-footer-contents_info-content_text mt-4"
            >إعلان انتهت و بحث. حتى ان كردة أسابيع الأمريكية, ومضى للأراضي العالمية بين مع. إذ جنوب الغالي مما, يبق من وترك اللا, أم عدد السبب الشتاء، تشيكوسلوفاكيا. ٣٠ ومن واُسدل قُدُماً الأوروبية،, حكومة لإعادة والمعدات عل لان.</span>
          </div>
          <div class="left-icons">
  <IconsSmall iconClass="fab fa-facebook-f"/>
                       <IconsSmall iconClass="fab fa-pinterest"/>
                       <IconsSmall iconClass="fab fa-instagram"/>
                       <IconsSmall iconClass="fab fa-twitter"/>
                       <IconsSmall iconClass="fab fa-google"/>
          </div>
          <div class="left-subscribe">
                <inputButton title="اشترك الأن" style="width:300px;" placeHolder="البريد الالكتروني"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconsSmall from "~/components/ar/UI/IconsSmall.vue";
import inputButton from "~/components/ar/UI/inputButton.vue";
import ColList from "~/components/ar/Navigation/ColList.vue";
import ColListItem from "~/components/ar/Navigation/ColListItem.vue";

export default {
  components: {
    IconsSmall,
    inputButton,
    ColList,
    ColListItem
  }
};
</script>

<style lang="scss" scoped>
.footer-main-content {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  min-height: 400px;
  align-items: center;
  box-sizing: border-box;
}
.left-footer-side {
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  width: 40%;
}
.left-info {
width: 90%;
margin-top:20px ;
color: #1b3861;
text-align: right;
direction: rtl;
}

.left-subscribe{
    margin-top: 20px;

}
.right-footer-side{
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: flex-end;
    direction: rtl;
    text-align: right;
    width: 60%;
    background-image: red;
}
@media (max-width: 992px) {
    .right-footer-side{
        display: none;
    }
    .left-footer-side{
        width: 100%;
        text-align: center;
        align-items: center;
    }

}
</style>