<template>
  <div class="business-page-wrapper">
    <HeadersBlock />
    <MissionBlock />
    <AboutBlock />
    <PhoneAnimationBlock />
    <BenefitPercent />
  </div>
</template>

<script>
import HeadersBlock from "../blocks/headers/HeaderBlock.vue";
import MissionBlock from "../blocks/mission/MissionBlock.vue";
import AboutBlock from "../blocks/about/AboutBlock.vue";
import PhoneAnimationBlock from "../blocks/phoneAnimation/PhoneAnimationBlock.vue";
import BenefitPercent from "../blocks/benefitPercent/BenefitPercent.vue";

export default {
  name: "BusinessPage",
  components: {
    HeadersBlock,
    MissionBlock,
    AboutBlock,
    PhoneAnimationBlock,
    BenefitPercent
  }
}
</script>

<style>
@import "src/style/variables.css";

.business-page-wrapper {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

@media screen and (max-width: 600px){
  .business-page-wrapper {
    gap: 40px;
  }
}
</style>