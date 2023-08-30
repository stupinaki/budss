<template>
  <div class="our-partners-wrapper">

    <div class="our-partners-title-btn-wrapper">
      <TypographyText value="Let Your Business Grow" size="header1" color="black"/>
      <ButtonUI class="our-partners-btn-wrapper" />
    </div>

    <div class="our-partners-brands-wrapper">
     <div class="our-partners-text-wrapper">
        <TypographyText
            value="Your Brand Awareness Maters"
            size="header1"
            color="black"
        />
        <TypographyText
            value="Budss is a husle free solution to put your brand on
             any digital surface including Instagram, Facebook, Twitter and TikTok"
            color="black"
            class="our-partners-text-sub-title"
        />
      </div>

     <div class="our-partners-social-media-wrapper">
       <div class="social-media-row">
         <div>
           <img src="src/assets/facebook.svg" alt="facebook icon">
         </div>
         <div>
           <img src="src/assets/insta.svg" alt="instagram icon">
         </div>
       </div>
       <div class="social-media-row">
         <div class="social-media-img-wrapper">
           <img src="../../assets/twitter.svg" alt="twitter icon">
         </div>
         <div class="social-media-img-wrapper">
           <img src="src/assets/tik-tok.svg" alt="tik tok icon">
         </div>
       </div>
     </div>
    </div>

    <div class="our-partners-list">
      <img src="src/assets/woo.svg" alt="woo">
      <img src="src/assets/shopify.svg" alt="shopify">
      <img src="src/assets/square.svg" alt="square">
      <img src="src/assets/squarespace.svg" alt="squarespace">
      <img src="../../assets/clover.svg" alt="clover">
    </div>
  </div>
</template>

<script>
import TypographyText from "../../components/typography/TypographyText.vue";
import ButtonUI from "../../components/UI/button/ButtonUI.vue";

export default {
  name: "OurPartners",
  components: {
    TypographyText,
    ButtonUI
  }
}
</script>

<style>
@import "./src/style/variables.css";

.our-partners-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}
.social-media-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.social-media-img-wrapper {
  display: flex;
  justify-content: flex-end;
}
.our-partners-text-sub-title {
  max-width: 520px;
}
.our-partners-social-media-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.our-partners-text-wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.our-partners-brands-wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
}
.our-partners-title-btn-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 40px;
  text-align: center;
  border-radius: var(--primary-border-radius);
  border: 1px solid var(--primary-border-color);
}
.our-partners-wrapper {
  display: flex;
  flex-direction: column;
  gap: 80px;
  background-color: var(--primary-card-background);
  padding: var(--container-main-padding);
  padding-top: 80px;
  padding-bottom: 80px;

}
.our-partners-btn-wrapper {
  max-width: max-content;
}

@media screen and (max-width: 900px){
  .our-partners-wrapper {
    padding: var(--container-medium-padding);
    padding-top: 80px;
    padding-bottom: 80px;
    gap: 60px;
  }
  .our-partners-brands-wrapper {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 600px){
  .our-partners-wrapper {
    padding: var(--container-small-padding);
    padding-top: 40px;
    padding-bottom: 40px;
  }
}
</style>