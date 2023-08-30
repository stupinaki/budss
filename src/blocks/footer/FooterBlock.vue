<template>
  <div class="footer-wrapper">
    <div class="footer-row1" >
      <div class="footer-logo-wrapper">
        <img
            src="../../assets/logo.svg"
            alt="logo"
        >
        <div class="footer-logo-text">
          budss
        </div>
      </div>

      <div>
        <router-link
            :to="{name: routerNames.business}"
            class="footer-link-wrapper"
        >
          For Business
        </router-link>

        <router-link
            :to="{name: routerNames.customers}"
            class="footer-link-wrapper"
        >
          For Customers
        </router-link>
      </div>

      <ButtonUI/>

      <div>
        <a href="#" class="footer-link">
          <img src="src/assets/appstore.svg" alt="link to appstore">
        </a>

        <a type="#" class="footer-link">
          <img src="src/assets/googleplay.svg" alt="link to google play">
        </a>
      </div>
    </div>

    <div>

    </div>
  </div>
</template>

<script>
import ButtonUI from "../../components/UI/button/ButtonUI.vue";
import {routerNames} from "../../router/routers";

export default {
  name: "FooterBlock",
  data() {
    return {
      routerNames
    }
  },
  components: {
    ButtonUI
  }
}
</script>

<style>
@import "./src/style/variables.css";

.footer-wrapper {
  display: flex;
  flex-direction: column;
  background-color: var(--main-background);
  padding: var(--container-main-padding);
}
.footer-row1 {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  border-bottom: 1px solid var(--primary-border-color);
}
.footer-row1 > *:not(.footer-logo-wrapper) {
  display: flex;
  gap: 20px;
}
.footer-link-wrapper {
  color: var(--main-text-color);
}
.footer-link:hover {
  transform: scale(0.96);
}
.footer-logo-wrapper {
  display: flex;
}
.footer-logo-text {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 38px;
}

@media screen and (max-width: 900px){
  .footer-wrapper {
    padding: var(--container-medium-padding);
  }
  .footer-row1 > *:not(.footer-logo-wrapper) {
    display: flex;
    flex-direction: column;
  }
  .footer-row1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }
}

@media screen and (max-width: 600px){
  .footer-wrapper {
    padding: var(--container-small-padding);
  }
}
</style>