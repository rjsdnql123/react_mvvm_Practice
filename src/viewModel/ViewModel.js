class TodosViewModel {
    constructor (model) {
      this.model = model
    }
    add (todo) {
       return this.model.add(todo)
      }
    getAll () {
      return this.model.getAll()
    }
    onToggle (idx) {
      console.log(idx)
        return this.model.onToggle(idx)
    }
    remove (idx) {
      return this.model.remove(idx)
    }
  }
  
  export default TodosViewModel