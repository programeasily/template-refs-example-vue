// eslint-disable-next-line
const app = Vue.createApp({});

app.component("input-comp", {
  template: `
    <input ref="input" />
  `,
  methods: {
    focusInput() {
      this.$refs.input.focus();
      this.$refs.input.value = "Hello";
    }
  },
  mounted() {
    this.focusInput();
  }
});

app.mount("#app");
