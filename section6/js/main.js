const app = Vue.createApp({
  data: () => ({
    message: 'hello world',
    basePrice: 100,
  }),
  computed: {
    reversedText() {
      return this.message.split('').reverse().join('')
    },
    taxIncludedPrice: {
      get() {
        return this.basePrice * 1.1
      },
      set(value) {
        return this.basePrice = value / 1.1
      }
    },
    computedNumber() {
      console.log('computed')
      return Math.random()
    }
  },
  methods: {
    reversedTextMethod() {
      return this.message.split('').reverse().join('')
    },
    methodNumber() {
      console.log('method')
      return Math.random()
    }
  }
})

app.mount('#app')


/*

# 算出プロパティとは？
computedのこと。
関数によって算出したデータを返すことができるプロパティ

vue.jsではHTMLにifやforなどを使用して処理を記述している。
しかし、同じ処理を使い回すことができない点や、
コード量が増えると可読性が下がるためcomputedに記述することが推奨されている。


## methodsとcomputedの比較
computed
1. プロパティとなるため、呼び出しに()が不要
2. getter,setterを利用できる
3. キャッシュがある(一度呼び出したら値が保持され、値が変更されない限り実行されない)

methods
1. 関数であるため、呼び出しに()が必要
2. getterのみを利用できる
3. キャッシュがない(呼び出しごとに実行される)


オブジェクトのプロパティにはgetterとsetterを設定することができる。
getterとは値の取得がされた際に実行される処理を記述し、
setterには値の変更がされた際に実行される処理を記述する。



*/