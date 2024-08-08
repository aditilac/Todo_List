import React from 'react'
// import Toodo from './TodoItem'
import TodoItem from './TodoItem'
// import Toodo from './Toodo'

const Toods = (props) => {
     
  return (
    <>
<h3>
        Todos-List
     </h3>

    <TodoItem todo={props.todos[0]} />
    </>
  )
}

export default Toods
