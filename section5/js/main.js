const app = Vue.createApp({
  data: () => ({
    message: 'hello vue.js',
    messageHtml: 'hello <span style="color: red;">vue.js</span>',
    number: 100,
    ok: true,
  }),
  methods: {
    clickHandler() {
      // splitはStringを指定した区切り文字列で分割し、配列にする(空文字の場合、1文字ずつ)
      // reverseは配列の要素を反転させる
      // joinは配列の全要素を順に連結した文字列を新たに作成し配列にして返す
      // (デフォルトでは要素との区切りにカンマが使用される。
      // 引数に空文字を入れることで区切り文字のカンマをなくすことができる。)
      this.message = this.message.split('').reverse().join('')
    }
  }
})

app.mount('#app')


/*

# 様々なディレクティブ

v-once 初回だけバインディング
v-pre 要素と全ての子要素のコンパイルをスキップ
v-html プレーンなHTMLを挿入
v-cloak インスタンスの準備が終わると取り除かれる
v-text マスタッシュ構文の代わりに使用する


# JavaScriptをマスタッシュ構文内で記述する
ReactでいうJSXがマスタッシュ構文のようなイメージ
そのため式であれば記述できる。


# v-bindの省略記法
<button :click="onClick">{{ message }}</button>

*/