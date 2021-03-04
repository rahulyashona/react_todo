import { useState } from "react";

const Create = () => {
    const [task, setTask] = useState('');
    const [body, setBody] = useState('');
    const [date, setDate] = useState('');
    const [creater, setCreater] = useState('');

    return ( 
        <div className="add-blog">
            <h2>Add a New Task</h2>
            <form className='add-blog-form'>
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
                    value={date}
                    onChange = {(e)=> setDate(e.target.value)}
                />
                <label>Creater : </label>
                <input 
                    type="text"
                    required
                    value={creater}
                    onChange = {(e)=> setCreater(e.target.value)}
                />
                <button>Add Task</button>
            </form>
        </div>
     );
}
 
export default Create;