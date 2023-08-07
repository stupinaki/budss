<template>
  <div class="animation-wrapper">
    <div class="animation-line">
      <div class="animation-text-wrapper">
        <div class="animation-text-first-color"> How Budss Works </div>
        <div class="animation-text-main" > How Budss Works </div>
      </div>
    </div>

    <div class="animation-line animation-second-line">
      <div class="animation-text-wrapper">
        <div class="animation-text-main"> How Budss Works </div>
        <div class="animation-text-second-color"> How Budss Works </div>
      </div>
    </div>

    <div class="animation-line">
      <div class="animation-text-wrapper">
        <div class="animation-text-third-color"> How Budss Works </div>
        <div class="animation-text-main"> How Budss Works </div>
      </div>
    </div>
  </div>

<!--  <img src="src/assets/phone.png" alt="phone">-->
</template>

<script>
export default {
  name: "PhoneAnimationBlock"
}
</script>

<style>
@import "src/style/variables.css";

.animation-wrapper {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 40px;
}
.animation-text-wrapper {
  display: flex;
  gap: 40px;
  white-space: nowrap;
  font-weight: 700;
  font-size: 128px;
}
.animation-text-first-color {
  color: #2FDBBC;
}
.animation-text-second-color {
  color: #A64CED;
}
.animation-text-third-color {
  color: #FFAA4C;
}
.animation-text-main {
  color: var(--main-background);
  -webkit-text-stroke: 1px #444444;
}
.animation-line {
  position: relative;
  animation-name: moveRight;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-direction: normal;
  animation-iteration-count: infinite;
  animation-play-state: running;
}
.animation-second-line {
  animation-direction: reverse;
}


@keyframes moveRight {
  0% {
    left: 0;
  }
  100% {
    left: 100%;
  }
}

@media screen and (max-width: 900px){
  .animation-text-wrapper {
    font-size: 80px;
  }
}

@media screen and (max-width: 600px){
  .animation-text-wrapper {
    font-size: 48px;
  }
}

</style>