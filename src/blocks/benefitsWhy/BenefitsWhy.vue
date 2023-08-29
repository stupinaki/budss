<template>
  <div class="benefits-wrapper">
    <div class="benefit-title-wrapper">
      <TypographyText value="Why Budss" size="header2"/>

      <div class="benefit-sub-title-wrapper">
        <TypographyText value="We Provide Advanced Payment Solutions" size="header3"/>
        <div class="background-line-text-wrapper">
          <TypographyText
              value="To Grow Your Business"
              size="header3"
              class="background-line-text"
          />
          <div class="about-background-line"></div>
        </div>
      </div>
    </div>

    <div class="benefits-cards-wrapper">
      <div class="benefits-cards-row1">
        <div class="benefit-card">
          <TypographyText
              value="Turn your customers into loyal influencers"
              size="header2"
              color="black"
          />
          <TypographyText
              value="Budss helps businesses harness the exponential power of loyal customers for acquisition and retention."
              color="black"
          />
        </div>

        <div class="benefit-card">
          <TypographyText
              value="Harness the power of buying in bulk"
              size="header2"
              color="black"
          />
          <TypographyText
              value="Get at least 2X more sales with Budss Buying Groups. Your customer base will grow exponentially as your customers add their friends & family to your personalized group."
              color="black"
          />
        </div>
      </div>

      <div class="benefits-cards-row2">
        <div class="benefit-card">
          <TypographyText
              value="Supercharge Loyalty With Instant Cash Back"
              size="header2"
              color="black"
          />
          <TypographyText
              value="Budss allows for shoppers to earn immediate cash back at their favorite stores."
              color="black"
          />
        </div>

        <div class="benefit-card">
          <TypographyText
              value="Seasoned with AI and Gamification"
              size="header2"
              color="black"
          />
          <TypographyText
              value="AI programming creates a personalized customer journey, offering recommendations for their next purchase and optimizing rewards for after purchase."
              color="black"
          />
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import TypographyText from "../../components/typography/TypographyText.vue";

export default {
  name: "BenefitsWhy",
  components: {
    TypographyText
  }
}
</script>

<style>
@import "./src/style/variables.css";

.benefit-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--primary-card-background);
  border-radius: var(--primary-border-radius);
  padding: 40px;
}
.benefits-wrapper {
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding: var(--container-main-padding);
}
.benefits-cards-wrapper {
  display: grid;
  gap: 40px;
}
.benefits-cards-row1 {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
}
.benefits-cards-row2 {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
}
.benefit-title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.benefit-sub-title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
}
.background-line-text-wrapper {
  position: relative;
  max-width: max-content;
}
.background-line-text {
  position: relative;
  width: max-content;
  z-index: 10;
}

@media screen and (max-width: 900px){
  .benefits-wrapper {
    padding: var(--container-medium-padding);
  }
  .benefits-cards-row1 {
    display: grid;
    grid-template-columns: 1fr;
  }
  .benefits-cards-row2 {
    display: grid;
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 600px){
  .benefits-wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: var(--container-small-padding);
  }
}

</style>