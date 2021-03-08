import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import useFetch from './useFetch';

const TaskDetail = () => {
    const { id } = useParams();
    const { data: todo, loading, error} = useFetch('  http://localhost:8000/todos/'+ id);

    const history = useHistory();
    const [isDeleted, setIsDeleted] = useState(false);

    const handleClick = ()=>{
        console.log("Button pressed");
        fetch(' http://localhost:8000/todos/'+ id, { 
            method: 'DELETE'
        }).then(() => {
            setIsDeleted(true);
            setTimeout(() => {
                setIsDeleted(false);
                // history.go(-1)   //One step backward
                // history.go(1)    //One step forward
                history.push('/');  //redirect to desired network
            }, 2000);
        })
    }
    
    return ( 
        <div className="task-detail">
            {loading && <div className='loader'></div>}
            {error && <div className = 'error'></div>}
            {todo && (<article>
                <div className="task-head">
                    {isDeleted && <div class="alert-deleted">Task Deleted Successfully.</div>}
                    <h2>{ todo.task }</h2>
                    <p><h5 className='task-author'>Created By: {todo.author}	</h5> <h5 className='task-date'>Dew Date: {todo.dewDate}</h5></p>
                </div>
                    
                    <div className='task-body'>{ todo.body }</div>
                    {/* <button className = "complete-button" onClick={handleDone}>Mark as Done</button> */}
                    <button className = "complete-button" onClick={handleClick}>Delete Task</button>
                    {/* <Link to={`/edit/${ id }`}><button className = "detailButton">Edit Task</button></Link> */}

                </article>    
                )}
        </div>
     );
}
 
export default TaskDetail;