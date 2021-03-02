// const TodoList = (props) => {
    const TodoList = ({ todos, tasks}) => {
        // const TodoList = ({ todos, tasks, handleDelete}) => {
    // const todos = props.todos;
    // const tasks = props.tasks;
    // console.log(props,todos);
    return (
        <div className="todo-list">
            <h2>{ tasks }</h2>
            {todos.map((todo)=> (
                <div className="todo-preview" key={todo.id}>
                    <h2>{ todo.task }</h2>
                    {/* <h3>{ todo.task }</h3> */}
                    <h5>
                    <p>Dew Date: {todo.dewDate} </p>
                    <p>Task of: {todo.author} </p></h5>
                    {/* <button className = "deleteButton" onClick={()=>handleDelete(todo.id)}>Delete Task</button> */}
                </div>
            ))}
        </div>
    );
}
 
export default TodoList;