import { useParams } from "react-router-dom";
import useFetch from './useFetch';

const TaskDetail = () => {
    const { id } = useParams();
    const { data: todo, loading, error} = useFetch('  http://localhost:8000/todos/'+ id);
    return ( 
        <div className="task-detail">
            {loading && <div className='loader'></div>}
            {error && <div className = 'error'></div>}
            {todo && (<article>
                <div className="task-head">
                    <h2>{ todo.task }</h2>
                    <p><h5 className='task-author'>Created By: {todo.author}	</h5> <h5 className='task-date'>Dew Date: {todo.dewDate}</h5></p>
                </div>
                    
                    <div className='task-body'>{ todo.body }</div>
                    <button className = "complete-button">Mark as Done</button>
                </article>    
                )}
        </div>
     );
}
 
export default TaskDetail;