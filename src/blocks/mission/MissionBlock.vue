<template>
  <div class="influencer-wrapper">
    <div class="influencer-text-wrapper">
      <TypographyText
        value="Everyone is an Influencer"
        size="header1"
      />
      <TypographyText
        value="Budss is a payments as a service and WOM engine
        dedicated to acquisition and retention of customers to your business."
        size="text"
        class="influencer-sub-title"
      />
      <ButtonUI class="influencer-btn-wrapper" />
    </div>

    <div class="influencer-img-wrapper">
      <img
        src="../../assets/main_girl.png"
        alt="girl"
        class="girl-img"
      >
    </div>
  </div>
</template>

<script>
import ButtonUI from "../../components/UI/button/ButtonUI.vue";
import TypographyText from "../../components/typography/TypographyText.vue";

export default {
  name: "MissionBlock",
  components: {
    ButtonUI,
    TypographyText
  }
}
</script>

<style>

.influencer-wrapper {
  display: grid;
  grid-template-columns: 60% 40%;
  padding: var(--container-main-padding);
}
.influencer-text-wrapper {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.influencer-sub-title {
  max-width: 540px;
}
.influencer-btn-wrapper {
  max-width: max-content;
}
.influencer-img-wrapper {
  transform: translateX(80px);
}
.girl-img {
  width: 100%;
}

@media screen and (max-width: 900px){
  .influencer-wrapper {
    padding: var(--container-medium-padding);
    grid-template-columns: 1fr;
    gap: 80px;
  }
  .influencer-img-wrapper {
    transform: translateX(40px);
  }
}

@media screen and (max-width: 600px){
  .influencer-wrapper {
    padding: var(--container-small-padding);
  }
  .influencer-btn-wrapper {
    max-width: 100%;
  }
  .influencer-img-wrapper {
    transform: translateX(20px);
  }
}


</style>