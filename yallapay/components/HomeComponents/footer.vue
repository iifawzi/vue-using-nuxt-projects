<template>
  <div class="footer-main">
    <div class="container">
      <div class="footer-main-content">
        <div class="left-footer-side">
          <div class="left-logo">
            <img width="250px" src="~/assets/images/logo.png" />
          </div>
          <div class="left-info">
            <span
              class="main-footer-contents_info-content_text mt-4"
            >Are you looking for professional advice for your new business. Are you looking for professional advice for your new business. Are you looking for professional advice for your new business.</span>
          </div>
          <div class="left-icons">
  <IconsSmall iconClass="fab fa-facebook-f"/>
                       <IconsSmall iconClass="fab fa-pinterest"/>
                       <IconsSmall iconClass="fab fa-instagram"/>
                       <IconsSmall iconClass="fab fa-twitter"/>
                       <IconsSmall iconClass="fab fa-google"/>
          </div>
          <div class="left-subscribe">
                <inputButton style="width:300px;" placeHolder="Your email"/>
          </div>
        </div>
        <div class="right-footer-side">
            <ColList title="Products">
             <ColListItem to="#">Home</ColListItem>
        <ColListItem to="#">Pages</ColListItem>
        <ColListItem to="#">Features</ColListItem>
        <ColListItem to="#">Blog</ColListItem>
        <ColListItem to="#">Contacts</ColListItem>
            </ColList>
               <ColList title="Payments">
             <ColListItem to="#">Send Money</ColListItem>
        <ColListItem to="#">Reviceive Money</ColListItem>
        <ColListItem to="#">Shopping</ColListItem>
        <ColListItem to="#">pay a friend</ColListItem>
        <ColListItem to="#">pay a bill</ColListItem>
            </ColList>

             <ColList title="Company">
             <ColListItem to="#">About us</ColListItem>
        <ColListItem to="#">Services</ColListItem>
        <ColListItem to="#">Events</ColListItem>
        <ColListItem to="#">Promotion</ColListItem>
        <ColListItem to="#">Transation</ColListItem>
            </ColList>

             <ColList title="Support">
             <ColListItem to="#">Customr care</ColListItem>
        <ColListItem to="#">Live Chat</ColListItem>
        <ColListItem to="#">Notifications</ColListItem>
        <ColListItem to="#">Terms & Condations </ColListItem>
        <ColListItem to="#">Contact us</ColListItem>
            </ColList>
            
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconsSmall from "~/components/UI/IconsSmall.vue";
import inputButton from "~/components/UI/inputButton.vue";
import ColList from "~/components/Navigation/ColList.vue";
import ColListItem from "~/components/Navigation/ColListItem.vue";

export default {
  components: {
    IconsSmall,
    inputButton,
    ColList,
    ColListItem
  }
};
</script>

<style lang="scss">
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
  width: 40%;
}
.left-info {
width: 100%;
margin-top:20px ;
color: #1b3861;
}
.left-icons{
     display: flex;
  flex-flow: row;
  justify-content: space-between;
  width:40%;
  margin-top: 20px;
}
.left-subscribe{
    margin-top: 20px;
}
.right-footer-side{
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 60%;
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