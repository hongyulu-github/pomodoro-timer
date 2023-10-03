import React from 'react'
import styles from './TodoList.module.css'

const TodoList = ({todos, setTodos, setEditTodo}) => {
    const handleDelete =({id}) =>{
        setTodos(todos.filter(todo => todo.id !== id))
    }
    
    const handleComplete =(todo)=>{
        setTodos(
            todos.map(item => {
                if(item.id === todo.id){
                    return {...item, completed: !item.completed}
                }
                return item
            })
        )
        }

    const handleEdit =({id})=>{
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo)
    }
  return (
    <div className={styles.todoListContainer}>
      {todos.map((todo) => 
        <li className={styles.listItem} key={todo.id}>
            <input 
                   type='text' 
                   value={todo.title} 
                   className={todo.completed ? styles.completed : ''}
                   onChange={(event) => event.preventDefault()} />
            <div className={styles.btns}>
                <button className='button-complete task-button' onClick={()=> handleComplete(todo)}>
                    <i className='fa-regular fa-circle-check' />
                </button>
                <button className='button-edit task-button' onClick={()=> handleEdit(todo)}>
                    <i className='fa-regular fa-pen-to-square' />
                </button>
                <button className='button-delete task-button' onClick={()=> handleDelete(todo)}>
                    <i className='fa-regular fa-trash-can' />
                </button>
            </div>
        </li>
        
      )}
       

    </div>
  )
}

export default TodoList