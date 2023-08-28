<template>
  <div class="benefit-percent-container">
    <div class="benefit-percent-wrapper">

      <div>
        <TypographyText value="15%" size="header2" />
        <TypographyText value="Increase in Purchase Amount"/>
      </div>

      <div>
        <TypographyText value="30%" size="header2" />
        <TypographyText value=" Growth in Annual Sales"/>
      </div>

      <div>
        <TypographyText value="10%" size="header2"/>
        <TypographyText value="Growth in New  Customers" />
      </div>

    </div>
  </div>
</template>

<script>
import TypographyText from "../../components/typography/TypographyText.vue";

export default {
  name: "BenefitPercent",
  components: {
    TypographyText,
  }
}
</script>

<style>
@import "src/style/variables.css";

.benefit-percent-container {
  padding: 40px 0;
  background-color: var(--btn-primary-background);
}
.benefit-percent-wrapper {
  display: flex;
  gap: 100px;
  justify-content: center;
  max-width: 60%;
  margin: 0 auto;
}

@media screen and (max-width: 900px){
  .benefit-percent-wrapper {
    gap: 80px;
  }
}

@media screen and (max-width: 600px){
  .benefit-percent-wrapper {
    gap: 40px;
  }
}

@media screen and (max-width: 450px){
  .benefit-percent-wrapper {
    flex-direction: column;
  }
}

</style>