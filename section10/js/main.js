const app = Vue.createApp({
  data: () => ({
    toggle: true,
    color: 'red',
    show: true,
  }),
  methods: {
    onToggle() {
      this.toggle = !this.toggle
    },
    red() {
      this.color = 'red'
    },
    yellow() {
      this.color = 'yellow'
    },
    green() {
      this.color = 'green'
    },
    other() {
      this.color = 'other'
    },
    showToggle() {
      this.show = !this.show
    },
  }
})

app.mount('#app')


/*

条件つきレンダリング

v-showはdisplayプロパティを変更できるディレクティブ

# v-ifとv-showの違い

v-if
- 要素をDOMから削除・追加
- 高い切り替えコスト
- v-else, v-else-ifが使用可能

v-show
- CSS display プロパティ
- 高い初期描画コスト
- v-else, v-else-ifが使えない

*/