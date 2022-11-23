const app = Vue.createApp({
  data: () => ({
    items: null,
    keyword: "",
    message: "",
  }),
  watch: {
    keyword(val) {
      this.message = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  methods: {
    getAnswer() {
      if (this.keyword === "") {
        this.items = null;
        return;
      }

      this.message = "Loading...";
      const vm = this;
      const params = { page: 1, per_page: 20, query: this.keyword };
      axios
        .get("https://qiita.com/api/v2/items", { params })
        .then((res) => {
          vm.items = res.data
        })
        .catch((e) => {
          vm.message = 'Error!' + e
        })
        .finally(() => {
          vm.message = ''
        });
    },
  },
  mounted() {
    this.keyword = 'JavaSctipt'
    this.getAnswer()
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
  },
});

app.mount("#app");

/*

APIを用いたリアルタイムサーチの実装で監視プロパティの理解を深める

*/
