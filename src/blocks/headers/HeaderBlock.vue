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
  padding-top: 12px;
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

</style>