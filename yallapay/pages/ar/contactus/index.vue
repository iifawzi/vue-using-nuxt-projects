<template>
    <div class="contactus-page">
        <div class="contacus-page-header">
 <headerwithbg title="تواصل معنا"/>
        </div>
        <div class="contactus-page-content">
            <div class="contactus-page-content-cards">
              <div class="contactus-page-content-cards-card">
   <WalkkiCard withBGonHover="basic" walkkiCardICON="far fa-compass" class="">القاهره صلاح سالم</WalkkiCard>
              </div>
               
 <div class="contactus-page-content-cards-card">
   <WalkkiCard withBGonHover="basic" walkkiCardICON="fas fa-envelope" class="">iifawzie@gmail.com</WalkkiCard>
              </div>


               <div class="contactus-page-content-cards-card">
   <WalkkiCard withBGonHover="basic" walkkiCardICON="fas fa-phone-volume" class="">01090243795</WalkkiCard>
              </div>

            </div>
            <div class="contactus-page-content-formmap">
                <div class="contactus-page-content-formmap-map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.8711165190484!2d31.021769684645815!3d30.069228624355784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585b97d6655077%3A0xe5d07dd7b931a729!2z2YXYs9is2K8g2KfZhNmC2LHZitipINin2YTYsNmD2YrYqQ!5e0!3m2!1sar!2seg!4v1586024908486!5m2!1sar!2seg" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                <div class="contactus-page-content-formmap-form">
                    <Contactus />
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import headerwithbg from "~/components/ar/UI/headerwithbg.vue"
import WalkkiCard from "~/components/ar/UI/walkkiCard.vue"
import Contactus from "~/components/ar/Forms/contactus.vue"
export default {
    layout: "arabicLayout",
    components:{
        headerwithbg,
        WalkkiCard,
        Contactus,
    }
}
</script>

<style lang="scss">
.contactus-page{
    &-content{
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    &-cards{
        display: flex;
        flex-flow: row;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 30px;
        &-card {
            width: 300px;
            margin-right: 10px;
        }
    }
    &-formmap {
          display: flex;
        flex-flow: row;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        &-form {
            width: 50%;
        }
    }
}
}
@media (max-width: 940px) {
.contactus-page{
    &-content{
    &-cards{
        display: flex;
        flex-flow: row;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 30px;
        &-card {
            width: 250px;
            margin-right: 10px;
        }
    }
}
}
}
@media (max-width: 780px) {
.contactus-page{
    &-content{
    &-cards{
        display: flex;
        flex-flow: column;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 30px;
        &-card {
            width: 400px;
            margin-right: 10px;
            margin-bottom: 15px;
        }
    }
}
}
.contactus-page{
    &-content{
    &-formmap {
          display: flex;
        flex-flow: column;
        justify-content: space-evenly;
        flex-direction: column-reverse;
        align-items: center;
        width: 100%;
        &-form {
            width: 90%;
            margin-bottom: 10px;
        }
    }
}
}
}
</style>
