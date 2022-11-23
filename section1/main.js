// Vueのインスタンスを作成
const app = Vue.createApp({
  // options
  data: () => ({
    message: 'test message',
    count: 0,
    user: {
      lastName: 'Mamiya',
      firstName: 'Soichiro',
      prefecture: 'Kanagawa'
    },
    colors: ['red', 'green', 'blue'],
    toggle: false,
    today: '-',
    bindingData: 'message',
  }),
  methods: {
    alert(arg) {
      alert(arg)
    },

    // この記述方法ではthisが使用できない
    // アロー関数が宣言された時点で、thisが確定するため、
    // thisはvueインスタンスを生成する前のwindowオブジェクトを参照する
    // updateDate: () => {
    //   console.log(this)
    //   this.today = new Date().toLocaleString();
    // },

    // アロー関数は使用せず、短縮記法を使用する
    updateDate() {
      console.log(this)
      this.today = new Date().toLocaleString();
    },
    // toLocaleStringとは？

  }

});

app.component('hello', {
  template:  '<p>hello</p>'
})
// id=appに対してマウントする
app.mount('#app');

// 下記のようにチェーンメソッドも可能
// const app = Vue.createApp({
// }).mount('#app');



/*
[ 学習メモ ]

# データバインディングとは？
dom要素を簡単管理できる


# リアクティブ
要素に対して反応して変化する


# マスタッシュ構文
{{ }}
htmlファイルでvueのdataプロパティで定義した値を参照する方法。
textコンテンツのための記法であるため、属性などには使用できない。

X
<input type="text" value="{{ message }}">


# ディレクティブ
v-で始まる特別な属性。
directive(司令)という名前の通り、Vue.jsになんらかの指示を行う仕組み。

< 例 >
## v-bind valueの参照
<input type="text" v-bind:value="message">


## v-if 条件分岐
表示
<p v-if="true">v-if</p>
非表示
<p v-if="false">v-if</p>


## v-show


## v-for 配列などの繰り返し処理
for...inの使用方法
<ol>
  <li v-for="color in colors">{{ color }}</li>
</ol>

オブジェクトも直感的に記述可能
for (val, key) in obj
で成り立つ。
<p v-for="value, key in user">{{ key }}: {{value}}</p>


## v-on イベントの付与
v-on:イベント名="メソッド名"

methods: {
  alert: (arg) => {
    alert(arg)
  }
}
<button v-on:click="() => alert(message)">Button</button>

methodsでdataの値を参照したい場合は(thisを使用したい場合)アロー関数は使用できない点に注意



## v-model 双方向データバインディング
双方向データバインディングとは？
vueインスタンス内のdataの値の変更を、リアルタイムでテンプレートへ反映させてきた。
ブラウザからの入力データを、vueインスタンス内のdataの値へ反映させる方法を見ていく。
このように双方向でデータのやり取りを行うことを「双方向データバインディング」という。

v-bind:valueでは一方方向のバインディングとなる
<input type="text" v-bind:value="bindingData">
v-modelを使用することで双方向バインディングが可能となる
<input type="text" v-model="bindingData">
<pre>{{ bindingData }}</pre>


# コンポーネントとは？
- 名前つきの再利用可能なインスタンス

- ページを構成するUI部品
- テンプレートとそのロジックから構成
- よく使う機能をコンポーネント化
  - 再利用性が高くなる
  - コードの見通しがよくなる

なお、コンポーネントの定義はmountの前に行う。


JSファイル内
app.component('hello', {
  template:  '<p>hello</p>'
})
app.mount('#app');

HTMLファイル内
<hello></hello>
<hello />
pタグで生成される
コンポーネントのinnerHTMLは機能しない


*/
