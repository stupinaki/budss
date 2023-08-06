<template>
  <div class="header-wrapper">
    <div class="header-logo-wrapper">
      <img
        src="../../assets/logo.svg"
        alt="logo"
      >
      <div class="header-logo-text">
        budss
      </div>
    </div>

    <ButtonUI type="icon">
      <template #default>
        <img
          src="../../assets/burger.svg"
          alt="burger button"
        >
      </template>
    </ButtonUI>
  </div>
</template>

<script>
import ButtonUI from "../../components/UI/button/ButtonUI.vue";


export default {
  name: "HeadersBlock",
  components: {
    ButtonUI,
  }
}
</script>

<style>
@import "../../style/variables.css";

.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 12px;
  padding: var(--container-main-padding);
}
.header-logo-wrapper {
  display: flex;
}
.header-logo-text {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 38px;
}

@media screen and (max-width: 900px){
  .header-wrapper {
    padding: var(--container-medium-padding);
  }
}

@media screen and (max-width: 600px){
  .header-wrapper {
    padding: var(--container-small-padding);
  }
}

</style>