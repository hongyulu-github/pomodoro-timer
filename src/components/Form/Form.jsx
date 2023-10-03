import React, {useEffect} from 'react'
import {v4 as uuidU4} from 'uuid'
import styles from './Form.module.css'

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
  const onInputChange =(event) =>{
    setInput(event.target.value)
  }
  const updateTodo =(title,id,completed) =>{
    const newTodo = todos.map(todo => 
        todo.id === id ? {title,id,completed} : todo
    )
    setTodos(newTodo);
    setEditTodo('')
  }
  useEffect(()=> {
    if (editTodo){
        setInput(editTodo.title)
    } else{
        setInput('')
    }
  }, [setInput,editTodo])
  const onFormSubmit =(event)=>{
    event.preventDefault();
    if(!editTodo){
    setTodos([...todos, {id: uuidU4(), title: input, completed: false}]);
    setInput('')
    } else {
        updateTodo(input, editTodo.id,editTodo.completed)
    }
  

  }

  return (
    <form onSubmit={onFormSubmit} className='flex-center-col'>
        <h2>To-do List</h2>
        <div className='flex-center flex-bottom'>
          <div>
              <input type='text' 
                  placeholder='Enter a task to do...' 
                  className={styles.taskInput} 
                  value={input} 
                  required
                  onChange={onInputChange}/>
                  <span className={styles.inputBorder}></span>
          </div>
       
        <button className={styles.buttonAdd} type='submit' >
            {editTodo? 'Save' : 'Add'}
        </button>
        </div>
     


    </form>
  )
}

export default Form