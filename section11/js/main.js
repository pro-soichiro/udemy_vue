const app = Vue.createApp({
  data: () => ({
    count: 0,
    date: '00:00:00',
    dateOnce: '00:00:00',
  }),
  methods: {
    countUp() {
      this.count ++
    },
    countEvent(e) {
      this.count ++
      e.target.innerHTML = this.count
    },
    countUpArg(arg) {
      this.count += arg
    },
    eventAndArg($event, arg) {
      this.count += arg
      $event.target.innerHTML = $event.target.id
    },
    printDate() {
      this.date = new Date().toLocaleTimeString()
    },
    printDateOnce() {
      this.dateOnce = new Date().toLocaleTimeString()
    },
  }
})

app.mount('#app')


/*

イベントハンドラ

省略記法


バインドはコロン
v-bind:class
:class


イベントはアットマーク
v-on:click
@click

*/