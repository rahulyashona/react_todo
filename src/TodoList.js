import { Link } from "react-router-dom";


    // const TodoList = ({ todos, tasks}) => {
    const TodoList = ({ todos, tasks, handleDetail}) => {


    // const todos = props.todos;
    // const tasks = props.tasks;
    // console.log(props,todos);
    return (
        <div className="todo-list">
            <div className='task-list-head'><h2>{ tasks }</h2></div>
            {todos.map((todo)=> (
                    <Link to={`/task/${ todo.id }`} className= 'link-detail'>

                <div className="todo-preview" key={todo.id}>
                    <h2>{ todo.task }</h2>
                    {/* <Link to={`/task/${ todo.id }`}><button className = "detailButton">View Task</button></Link> */}
                    {/* <h3>{ todo.task }</h3> */}
                    {todo.isComplete && <div className = 'status-button'><h6>Completed</h6></div>}
                    {!todo.isComplete && <div className = 'status-button'><h6>Not Complete</h6></div>}
                    <h5>
                        <p>Dew Date: {todo.dewDate} </p>
                        <p>Task of: {todo.author} </p>
                    </h5>
                    {/* <button className = "deleteButton" onClick={()=>handleDelete(todo.id)}>Delete Task</button> */}
                </div>
                </Link>
            ))}
        </div>
    );
}
 
export default TodoList;