import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const EditTask = () => {
    const {id} = useParams();
    const { data:todo, loading, error } = useFetch('http://localhost:8000/todos/'+ id);
    const [task, setTask] = useState('');
    const [body, setBody] = useState('');
    const [dewDate, setDewDate] = useState('');
    const [author, setAuthor] = useState('');

    const todos = {task, body, dewDate, author};

    return ( 
        
        <div className="edit-task">
            {loading && <div className='loader'></div>}
            {error && <div className = 'error'></div>}
            {todo && (<article>
                <h2>Edit your task here</h2>
                <form className='add-blog-form'>
                    <label>Task Title :</label>
                    <input 
                        type="text"
                        value={ todo.task }
                        // onChange = {(e) => setTask(e.target.value)}
                    />
                    <label>Task Body :</label>
                    <textarea
                        value={ todo.body }
                        // onChange = {(e) => setBody(e.target.value)}
                    >
                    </textarea>
                    <label>Completion Date :</label>
                    <input 
                        type="text"
                        required
                        value={ todo.dewDate }
                        // onChange = {(e)=> setDewDate(e.target.value)}
                    />
                    <label>Creater : </label>
                    <input 
                        type="text"
                        required
                        value={ todo.author }
                        // onChange = {(e)=> setAuthor(e.target.value)}
                    />
                    <button>Update Task</button>
                    {/* {!isPending && <button>Update Task</button>}
                    {isPending && <button>Adding...</button>} */}
                </form>
            </article>
            )}
        </div>
     );
}
 
export default EditTask;