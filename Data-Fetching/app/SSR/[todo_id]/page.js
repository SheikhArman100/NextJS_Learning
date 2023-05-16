
const getTodo=async(id)=>{
    const data=await fetch(`http://localhost:3200/todos/${id}`)
    const todo=await data.json()
    return todo
}

const TodoPage = async({params}) => {
    console.log(params.todo_id)
    const todo=await getTodo(params.todo_id)


  return (
    <div className='text-black text-center text-6xl font-bold'>{todo.title}</div>
  )
}

export default TodoPage