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
import { mapActions } from "vuex";
import {throttle} from "./helpers/throttle";

export default {
  name: "App",
  components: {
    TabsComponent
  },
  computed: {
    getNewResizeThrottle() {
      return throttle(this.getNewResize, 1000);
    },
  },
  beforeMount() {
    const initialWidth = window.innerWidth;
    this.initViewportWidth(initialWidth);
    window.addEventListener('resize',this.getNewResizeThrottle);
  },
  unmounted() {
    window.removeEventListener('resize', this.getNewResizeThrottle);
  },
  methods: {
    ...mapActions("viewport", ["initViewportWidth"]),
    getNewResize(e) {
      const width = e.target.innerWidth;
      this.initViewportWidth(width);
    },
  },
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
