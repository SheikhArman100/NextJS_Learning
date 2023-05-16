

const getAllTodos=async()=>{
  const data=await fetch("http://localhost:3200/todos")

  const todos= await data.json()
  return todos

}


const SSG =async () => {
  const todos=await getAllTodos() 

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <h1>SSR - ServerSide</h1>
      <div className="mt-10">
        <form className="flex items-center justify-center gap-x-10">
          <div className="px-2 py-3 border border-black rounded-md">
            <input placeholder="add a task" className="bg-transparent outline-none " />
          </div>
          <button type="submit" className="px-6 py-3 bg-black text-white rounded-md">ADD</button>
        </form>
        <ul className="mt-10 flex flex-col gap-y-2 ">
          {todos.map((todo)=>(
            <li key={todo.id} className="border border-black p-4 rounded-md flex items-center justify-between">
              <p className="text-[1rem] font-[500]">{todo.title}</p>
              <input type="checkbox" className="h-6 aspect-square rounded-md b"/>
            </li>
          ))}
            
        </ul>
      </div>
    </div>
  );
};

export default SSG;
