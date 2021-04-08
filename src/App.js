import React from 'react';

import TodoViewModel from './viewModel/ViewModel'
import TodoModel from './model/Model'
import TodoView from './view/TodoView'


function App() {
  const bookModel = new TodoModel()
  const bookViewModel = new TodoViewModel(bookModel)

  return (
    <>
      <TodoView 
        viewModel={bookViewModel}
      />
    </>
  )
}

export default App;