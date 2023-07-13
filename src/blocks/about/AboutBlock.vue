<template>
  <div class="about-wrapper">
    <TypographyText
      value="About Budss"
      size="header1"
    />
    <div class="about-content-wrapper">
      <div class="about-text-img-wrapper">
        <TypographyText
            value="Payment as a service, powered seamlessly by our network of shoppers"
            size="header3"
        />
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
  gap: 40px;
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

@media screen and (max-width: 900px){
  .about-content-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .about-img {
    display: none;
  }
}

@media screen and (max-width: 600px){
.about-cards-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}
}
</style>