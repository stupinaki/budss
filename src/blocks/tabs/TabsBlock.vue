<template>
  <div class="tab-wrapper">
    <router-link
      :to="{name: routerNames.business}"
      :class="businessLinkStyle"
    >
      For Business
    </router-link>

    <router-link
      :to="{name: routerNames.customers}"
      :class="customerLinkStyle"
    >
      For Customers
    </router-link>
  </div>
</template>

<script>
import { routerNames } from "../../router/routers";

export default {
  name: "TabsBlock",
  data() {
    return {
      routerNames,
    }
  },
  computed: {
    businessLinkStyle() {
      return this.$route.name === routerNames.business ? "tab-link-wrapper_active" : "tab-link-wrapper";
    },
    customerLinkStyle() {
      return this.$route.name === routerNames.customers ? "tab-link-wrapper_active" : "tab-link-wrapper";
    }
  }
}
</script>

<style>
@import "../../style/variables.css";

.tab-wrapper {
  display: flex;
  gap: 10px;
  padding: var(--container-main-padding);
  background-color: var(--tab-background);
}
.tab-link-wrapper {
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  padding: 9px 40px;
  color: var(--second-text-color);
}
.tab-link-wrapper_active {
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  padding: 9px 40px;
  border-radius: 20px 20px 0 0;
  color: var(--main-text-color);
  background-color: var(--main-background);
}

@media screen and (max-width: 900px){
  .tab-wrapper {
    padding: var(--container-medium-padding);
  }
}

@media screen and (max-width: 600px){
  .tab-wrapper {
    padding: var(--container-small-padding);
  }
}
</style>