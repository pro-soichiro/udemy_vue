const app = Vue.createApp({
  data: () => ({
    message: "hello, vue.js",
    km: 0,
    m: 0,
  }),
  watch: {
    message(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
    km(newVal) {
      this.m = newVal * 1000;
    },
    m(newVal) {
      this.km = newVal / 1000;
    },
  },
});

app.mount("#app");

/*

# 監視プロパティ(ウォッチャ)とは？
useStateやuseEffectの第二引数のようなイメージ？

特定のデータまたは、算出プロパティの状態を監視して、
変化があった時に登録した処理を自動的に実行できるもの。

事例）
検索フォームの値が変わったタイミングで自動的にAjaxを行なって結果を一覧表示。


# computed（算出プロパティ）とwatch（監視プロパティ）

どちらでも実装できる場合、基本的に算出プロパティの利用を推奨。
シンプルに記述できることが理由に挙げられる。


*/

const app2 = Vue.createApp({
  data: () => ({
    // 算出プロパティ
    lastName: "",
    firstName: "",

    // 監視プロパティ
    lastNameW: "",
    firstNameW: "",
    fullNameW: "",
  }),

  // 算出プロパティ
  // 関数プロパティでも記述できるが、キャッシュされるためcomputedを使用する。
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
  },

  // 監視プロパティ
  watch: {
    lastNameW(val) {
      this.fullNameW = this.firstNameW + " " + val;
    },
    firstNameW(val) {
      this.fullNameW = val + " " + this.lastNameW;
    },
  },
});

app2.mount("#app2");

const app3 = Vue.createApp({
  data: () => ({
    colors: [
      { name: 'red' },
      { name: 'green' },
      { name: 'blue' },
    ],
  }),
  watch: {
    colors: {
      handler() {
        console.log('update')
      },
      // ネストしたdataの値の変更を察知させたい場合はdeepオプションをtrueにする
      deep: true
    },
  },
  methods: {
    onClick() {
      this.colors[1].name = 'white'
    }
  }
});

app3.mount("#app3");
