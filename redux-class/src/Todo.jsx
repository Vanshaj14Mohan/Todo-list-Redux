import { useSelector } from "react-redux";

function Todo(){
    const todos = useSelector((state)=> state.todos);
    console.log(todos);
    return (
        <>
        <h2>Todo List App</h2>
        <ul>
           {todos.map((todo) =>(<li key={todo.id}>{todo.task}</li>))}
        </ul>
        </>
    );

}

export default Todo;