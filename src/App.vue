<template>
  <v-app>
    <v-main>
      <div class="app">
        <TabsComponent />
        <router-view />
        <!--        <CookiesBlock :class="styles.cookies" />-->
      </div>
    </v-main>
  </v-app>
</template>

<script>
import TabsComponent from "./blocks/tabs/TabsBlock.vue";

export default {
  name: "App",
  components: {
    TabsComponent
  }
}
</script>

<style>
@import "style/variables.css";

.app {
  font-family: Outfit, sans-serif;
  color: var(--main-text-color);
  background-color: var(--main-background);
  height: 100vh;
  overflow-x: hidden;
}
</style>
