import React,{useState} from 'react';

function TodoView (props) {
    let todos = props.viewModel.getAll()
    const [inputs, setInput] = useState('')
    const [toggleState, setToggleState] = useState(true)

    const remove = idx => {
        props.viewModel.remove(idx)
        setToggleState(!toggleState)
    }
    const onToggle = idx => {
        props.viewModel.onToggle(idx)
        setToggleState(!toggleState)
    }
    const add = () => {
        props.viewModel.add(inputs)
        setInput('')
        setToggleState(!toggleState)
    }

    return (
      <>
        <div className="form">
          <input type="text" placeholder="등록" value={inputs} onChange={(e) => setInput(e.target.value)}/>
          <button className="create" onClick={add}>등록</button>
        </div>
        <div className="list">
          <ul>
            {todos.map( (todo, idx) => (
              <li key={idx} >
                <span onClick={() => onToggle(idx)}>
                {todo.check === true ? <span style={{color:'gray'}}>{todo.todos}</span> : <span>{todo.todos}</span>}
                </span>
                <button 
                  onClick={() => remove(idx)}
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