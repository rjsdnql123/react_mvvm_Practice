import React,{useState} from 'react';

function TodoView (props) {
    let todos = props.viewModel.getAll()
    const [inputs, setInput] = useState('')
    return (
      <>
        <div className="form">
          <input type="text" placeholder="등록" onChange={(e) => setInput(e.target.value)}/>
          <button className="create" onClick={(e) => props.viewModel.add(inputs)}>등록</button>
        </div>
        <div className="list">
          <ul>
            {todos.map( (todo, idx) => (
              <li key={idx} >
                <span onClick={() => props.viewModel.onToggle(idx)}>
                {todo.check === true ? <span style={{color:'gray'}}>{todo.todos}</span> : <span>{todo.todos}</span>}
                </span>
                <button 
                  onClick={() => props.viewModel.remove(idx)}
                  style={{color: 'red'}}
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>
      </>    
    );
  
  }

  export default TodoView