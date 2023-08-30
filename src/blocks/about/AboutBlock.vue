<template>
  <div class="about-wrapper">
    <TypographyText
      value="About Budss"
      size="header0"
    />

    <div class="about-content-wrapper">
      <div class="about-text-img-wrapper">
        <div>
          <TypographyText
              value="Payment as a service, powered seamlessly by our"
              size="header3"
          />
          <div class="background-line-text-wrapper">
            <TypographyText
                value="network of shoppers"
                size="header3"
                class="background-line-text"
            />
            <div class="about-background-line"></div>
          </div>

        </div>
        <img
            src="src/assets/two_lines.png"
            alt="two lines"
            class="about-img"
        >
      </div>

      <div class="about-cards-wrapper">
        <div
          v-for="data in aboutData"
          :key="data.title"
          class="about-card-wrapper"
        >
          <component :is="imageMap[data.imgName]" />
          <TypographyText
            :value="data.title"
            size="header2"
          />
          <TypographyText
            :value="data.text"
            size="text"
          />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TypographyText from "../../components/typography/TypographyText.vue";
import {aboutData} from "../../data/aboutData";
import imageMap from "./aboutImgs"

export default {
  name: "AboutBlock",
  components: {
    TypographyText,
  },
  data() {
    return {
      aboutData,
      imageMap,
    }
  }
}
</script>

<style>
.about-wrapper {
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding: var(--container-main-padding);
}
.about-content-wrapper {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
}
.about-cards-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}
.about-card-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.about-text-img-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.about-img {
  transform: translate(-80px, 80px);
}
.about-background-line {
  position: absolute;
  top: 0;
  right: -10px;
  left: -10px;
  height: 100%;
  border-radius: 16px;
  z-index: 1;
  transform: rotate(-2deg);
  background: var(--btn-primary-background);
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

@media screen and (max-width: 1200px){
  .about-content-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .about-img {
    display: none;
  }
}

@media screen and (max-width: 900px){
  .about-wrapper {
    padding: var(--container-medium-padding);
  }
}

@media screen and (max-width: 600px){
  .about-wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: var(--container-small-padding);
  }
  .about-cards-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>