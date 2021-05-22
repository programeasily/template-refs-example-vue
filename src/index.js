// eslint-disable-next-line
const app = Vue.createApp({});

app.component("input-comp", {
  template: `
    <input ref="input" />
  `,
  methods: {
    updateInput() {
      this.$refs.input.value = "Hello";
    }
  },
  mounted() {
    this.updateInput();
  }
});

app.mount("#app");
