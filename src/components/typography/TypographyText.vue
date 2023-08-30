<template>
  <div :class="className">
    {{ value }}
    <slot />
  </div>
</template>

<script>

export default {
  name: "TypographyText",
  props: {
    value: {
      type: String,
      required: true,
      default: ""
    },
    size: {
      type: String,
      default: "text",
      validator(size) {
        return [
          "text",
          "header3",
          "header2",
          "header1",
          "header0",
        ].includes(size);
      },
    },
    color: {
      type: String,
      default: "white",
      validator(type) {
        return ["black", "white"].includes(type);
      },
    },
  },
  computed: {
    className() {
      const { size, color } = this.$props;
      return  size + ` color-${color}`;
    },
  },
};
</script>

<style>
@import "./src/style/variables.css";

/* FONT COLOR */
.color-black {
  color: var(--main-background);
}

.color-white {
  color: var(--main-text-color);
}

/* FONT SIZE */
.text {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
}

.header3 {
  font-weight: 600;
  font-size: 36px;
  line-height: 46px;
}

.header2 {
  font-weight: 700;
  font-size: 48px;
  line-height: 50px;
}

.header1 {
  font-weight: 700;
  font-size: 64px;
  line-height: 68px;
}

.header0 {
  font-weight: 700;
  font-size: 96px;
  line-height: 102px;
}

@media screen and (max-width: 1200px){
  .header1 {
    font-size: 50px;
    line-height: 58px;
  }
}

@media screen and (max-width: 900px) {
  .header0 {
    font-size: 70px;
    line-height: 80px;
  }

  .header1 {
    font-size: 44px;
    line-height: 48px;
  }

  .header2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
  }

  .header3 {
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;
  }
}

@media screen and (max-width: 600px) {
  .header0 {
    font-size: 46px;
    line-height: 50px;
  }

  .header1 {
    font-size: 40px;
    line-height: 48px;
  }

  .header2 {
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;
  }

  .header3 {
    font-weight: 600;
    font-size: 26px;
    line-height: 36px;
  }
}

</style>