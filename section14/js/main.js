const app = Vue.createApp({
  data: () => ({
    show: true
  }),
})

app.mount('#app')


/*

clickイベントで真偽値を反転させるだけであれば
下記のように記述することができる
<button v-on:click="show = !show">button</button>


transitionタグでvueのトランジションアニメーションを使用することができる

*/