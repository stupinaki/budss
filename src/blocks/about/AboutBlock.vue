<template>
  <div class="about-wrapper">
    <TypographyText
      value="About Budss"
      size="header1"
    />
    <div class="about-content-wrapper">
      <TypographyText
        value="Payment as a service, powered seamlessly by our network of shoppers"
        size="header3"
      />
      <div class="about-cards-wrapper">
        <div
          v-for="data in aboutData"
          :key="data.title"
          class="about-card-wrapper"
        >
          <TypographyText
            :value="data.title"
            size="header2"
          />
          <TypographyText
            :value="data.text"
            size="text"
          />
          <!--          <component :is="imageMap[data.imgName]" />-->
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
@media screen and (max-width: 1200px){

}

@media screen and (max-width: 900px){

}

@media screen and (max-width: 600px){
  .about-content-wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
  }

}
</style>