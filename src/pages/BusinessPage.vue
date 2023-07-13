<template>
  <div class="business-page-wrapper">
    <HeadersBlock />
    <MissionBlock />
    <AboutBlock />
  </div>
</template>

<script>
import HeadersBlock from "../blocks/headers/HeaderBlock.vue";
import MissionBlock from "../blocks/mission/MissionBlock.vue";
import AboutBlock from "../blocks/about/AboutBlock.vue";

export default {
  name: "BusinessPage",
  components: {
    HeadersBlock,
    MissionBlock,
    AboutBlock
  }
}
</script>

<style>
@import "src/style/variables.css";

.business-page-wrapper {
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding: var(--container-main-padding);
}

@media screen and (max-width: 900px){
  .business-page-wrapper {
    padding: var(--container-medium-padding);
  }
}

@media screen and (max-width: 600px){
  .business-page-wrapper {
    gap: 40px;
    padding: var(--container-small-padding);
  }
}
</style>