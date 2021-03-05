import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [task, setTask] = useState('');
    const [body, setBody] = useState('');
    const [dewDate, setDewDate] = useState('');
    const [author, setAuthor] = useState('');

    const history = useHistory();

    const [isPending, setIsPending] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    const todo = {task, body, dewDate, author};

    const handleSubmit =(e) =>{
        e.preventDefault();
        setIsPending(true);
        fetch(' http://localhost:8000/todos', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(todo)
        }).then(() =>{
            console.log("Task Added Successfully!");
            setIsPending(false);
            setIsAdded(true);
            setTimeout(() => {
                setIsAdded(false);
                // history.go(-1)   //One step backward
                // history.go(1)    //One step forward
                history.push('/');  //redirect to desired network
            }, 2000);
        })

    }

    return ( 
        <div className="add-blog">
            <h2>Add a New Task</h2>
            {isAdded && <div class="alert-added">Task added successfully.</div>}
            <form className='add-blog-form' onSubmit={handleSubmit}>
                <label>Task Title :</label>
                <input 
                    type="text"
                    required
                    value={ task }
                    onChange = {(e) => setTask(e.target.value)}
                />
                <label>Task Body :</label>
                <textarea
                    required
                    value={ body }
                    onChange = {(e) => setBody(e.target.value)}
                >
                </textarea>
                <label>Completion Date :</label>
                <input 
                    type="text"
                    required
                    value={dewDate}
                    onChange = {(e)=> setDewDate(e.target.value)}
                />
                <label>Creater : </label>
                <input 
                    type="text"
                    required
                    value={author}
                    onChange = {(e)=> setAuthor(e.target.value)}
                />
                {!isPending && <button>Add Task</button>}
                {isPending && <button>Adding...</button>}
            </form>
        </div>
     );
}
 
export default Create;