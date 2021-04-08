class TodoModel {
    constructor () {
      this.todos = [
        {
          id:1,
          todos: "파이썬으로 배우는 웹 크롤러",
          check: true
        }, {
          id:2,
          todos: "자바스크립트로 서버와 크라이언트 구축하기",
          check: false
        }, {
          id:3,
          todos: "블록체인 프로젝트",
          check: false
        }
      ]
    }
  
    add (todo) {
        this.todos.push({todos:todo, check:false, id: this.todos.length+1})
    }
    
    remove (idx) {
      let temp = this.todos[idx]
      
      this.todos[idx] = this.todos[this.todos.length-1]
      this.todos[this.todos.length-1] = temp
  
      return this.todos.pop()
    }
  
    onToggle (idx) {
      const index = this.todos.findIndex(todo => todo.id === idx+1)
      const nextTodos = [...this.todos]
        nextTodos[index] = {
          ...this.todos[index],
          check : !this.todos[index].check
        }
        this.todos = nextTodos
      }
    
  
    getAll () {
      return this.todos
    }
  }
  
  export default TodoModel