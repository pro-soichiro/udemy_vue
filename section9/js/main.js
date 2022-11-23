const app = Vue.createApp({
  data: () => ({
    isLarge: true,
    hasError: false,
    classObj: {
      large: true,
      error: true,
    }
  }),
  methods: {
    toggle() {
      this.isLarge = !this.isLarge
    },
    errorBtn() {
      this.hasError = !this.hasError
    },
    toggleObj() {
      this.classObj.large = !this.classObj.large
    },
    errorBtnObj() {
      this.classObj.error = !this.classObj.error
    }
  }
})

app.mount('#app')


/*

クラスとスタイルのバインディング


# インラインスタイル
classと同じように扱える。
オブジェクトで渡すことも可能。

*/