<template>
  <div class="phone-animation-container">
    <div class="row-container">
      <div class="text-wrapper animation-row">
        <div class="text-first-color"> How Budss Works&nbsp; </div>
        <div class="text-main" > How Budss Works&nbsp; </div>
        <div class="text-first-color"> How Budss Works&nbsp; </div>
        <div class="text-main" > How Budss Works&nbsp; </div>
      </div>

      <div class="text-wrapper animation-row-reverse">
        <div class="text-main"> How Budss Works&nbsp; </div>
        <div class="text-second-color"> How Budss Works&nbsp; </div>
        <div class="text-main"> How Budss Works&nbsp; </div>
        <div class="text-second-color"> How Budss Works&nbsp; </div>
      </div>

      <div class="text-wrapper animation-row">
        <div class="text-third-color"> How Budss Works&nbsp; </div>
        <div class="text-main"> How Budss Works&nbsp; </div>
        <div class="text-third-color"> How Budss Works&nbsp; </div>
        <div class="text-main"> How Budss Works&nbsp; </div>
      </div>
    </div>

    <img src="src/assets/phone.png" alt="phone" class="animation-phone">
  </div>
</template>

<script>
export default {
  name: "PhoneAnimationBlock"
}
</script>

<style>
@import "src/style/variables.css";

.phone-animation-container {
  position: relative;
  padding: 40px 0;
}
.animation-phone {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 100%;
  max-width: 100%;
}

.row-container {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 40px;
  align-items: center;
  overflow: hidden;
}
.text-wrapper {
  display: flex;
  white-space: nowrap;
  font-weight: 700;
  font-size: 128px;
}

.animation-row {
  animation: row 12s linear infinite;
}
.animation-row-reverse {
  animation: row 12s linear reverse infinite;
}

.text-first-color {
  color: #2FDBBC;
}
.text-second-color {
  color: #A64CED;
}
.text-third-color {
  color: #FFAA4C;
}
.text-main {
  color: var(--main-background);
  -webkit-text-stroke: 1px #444444;
}

@keyframes row {
  0% {
    transform: translateX(0)
  }
  100% {
    transform: translateX(-50%)
  }
}

@media screen and (max-width: 900px){
  .text-wrapper {
    font-size: 80px;
  }
}

@media screen and (max-width: 600px){
  .text-wrapper {
    font-size: 48px;
  }
}

</style>