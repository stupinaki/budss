<template>
  <button
    :disabled="isDisabled"
    :class="btnStyle"
    type="button"
    @click="$emit('click')"
  >
    <slot>
      {{ text }}
    </slot>
  </button>
</template>

<script>
export default {
  name: "ButtonUI",
  props: {
    text: {
      type: String,
      default: "Contact sales"
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "primary",
      validator(style) {
        return ["primary", "secondary", "icon"].includes(style);
      },
    }
  },
  emits: ["click"],
  computed: {
    btnStyle() {
      const { isDisabled, type } = this.$props;
      if(isDisabled) {
        return "btn-default btn_disabled";
      }
      if(type === "primary") {
        return "btn-default btn-primary";
      }
      if(type === "secondary") {
        return "btn-default btn-secondary";
      }
      if(type === "icon") {
        return "btn-icon"
      }
      return "btn-default"
    }
  }
}
</script>

<style>
@import "../../../style/variables.css";

.btn-default {
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  padding: 16px 30px;
  width: max-content;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: var(--primary-border-radius);
}
.btn-primary {
  border: none;
  color: var(--main-text-color);
  background-color: var(--btn-primary-background);
}
.btn-primary:hover,
.btn-secondary:hover,
.btn-icon:hover {
  transform: scale(0.96);
}
.btn-secondary {
  border: 2px solid var(--btn-primary-background);
  color: var(--main-background);
  background-color: var(--main-text-color);
}
.btn-icon {
  cursor: pointer;
  border: none;
  width: 40px;
  box-sizing: border-box;
  background-color: transparent;
}
.btn_disabled {
  cursor: pointer;
  border: none;
  background-color: var(--btn-disabled-background);
}
</style>