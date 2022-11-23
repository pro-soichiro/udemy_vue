// ローカルコンポーネント
const helloComponent = {
  template: '<p>local hello!</p>'
}

// 動的なコンポーネント
const buttonCounter = {
  template: '<div><span>count: </span><button @click="countUp">{{count}}</button></div>',
  data: () => ({
    count: 0,
  }),
  methods: {
    countUp() {
      this.count ++
    }
  }
}



const app = Vue.createApp({
  data: () => ({

  }),
  components: {
    'local-hello-component': helloComponent,
    'button-counter': buttonCounter,
  }
})

// グローバルコンポーネント
app.component('hello-component', {
  template: '<p>hello!</p>'
})



app.mount('#app')


/*

コンポーネントの利用方法


コンポーネント名の定義ルール
- ハイフンを一つ以上含むケバブケースを利用しなければならない。

- キャメルケース、スネークケースは許可されていない。
- 一単語は許可されていない。

理由は、HTMLタグとの衝突を避けるためである。


*/