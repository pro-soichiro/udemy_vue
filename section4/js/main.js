
const app = Vue.createApp({
  data: () => ({
    newTodo: '',
    todos: [],
  }),
  methods: {
    addTodo() {
      // 下記でもいける
      // if(this.newTodo === '') return
      if(this.newTodo !== '') {
        // オブジェクト形式で追加していくことでタスクの完了、未完了を管理していく
        let todoObj = {
          item: this.newTodo,
          isDone: false,
        }
        this.todos.unshift(todoObj)
        this.newTodo = ''
      }
    },
    deleteTodo(index) {
      console.log(index)
      // deleteではなく、spliceメソッドを使用する
      // delete this.todos[index]
      this.todos.splice(index, 1)


      /*
      deleteとspliceの違い

      deleteは配列ではなくプロパティの値を削除するため、indexが残ってしまい、
      意図した挙動となっていなかった
      */
    }

  }
})

app.mount('#app')