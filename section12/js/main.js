const app = Vue.createApp({
  data: () => ({
    message: 'hello vue.js',
    checked: false,
    colors: [],
    radioColor: '',
    selected: '',
    items: ['red', 'green', 'blue', 'yellow', 'pink'],
    multiple: [],
    text: '',
  }),
})

app.mount('#app')


/*

フォーム入力バインディング

# v-modelディレクティブ
1. データバインディングで、要素のvalue属性を更新する。
2. イベントハンドリングで、受け取った値をデータに代入する。

v-model使用時はvalue, checked, selectedといった属性は無視される。

textareaタグ内ではマスタッシュ構文が双方向バインディングに対応していないため、
inputタグなどと同じようにv-modelディレクティブを使用すること


フォーム部品を扱うときはデフォルトのデータの型が何かを意識することが大切。
radio string
checkbox boolean
checkboxes array
select string


v-model修飾子

修飾子の種類
.lazy   バインドのタイミングを遅延させる
.trim   入力力前後の空白を削除してからデータに代入
.number  入力値を数値型に型変換してからデータに代入


*/