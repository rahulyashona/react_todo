import TodoList from './TodoList';
import useFetch from './useFetch';
// e is an event object
const Home = () => {
    
    const {data : todos, loading, error} = useFetch('http://localhost:8000/blogs');
    // const handleDelete = (id) => {
    //     const newTodos = todos.filter(blog => blog.id !== id);
    //     setTodos(newTodos);
    // }

    const handleDetail =(id) => {
        console.log('Detail page link :' );
        console.log(id);
    }

    return ( 
        <div className="Homepage">
            {todos && <TodoList todos= { todos } tasks="To-Do List" handleDetail = {handleDetail} />}
            { error && <div className ='error'>{ error }</div>}
            { loading && <div className='loader'> </div>}
            {/* {todos && <TodoList todos= { todos } tasks="To-Do List" />} */}

        </div>
    );
}
 
export default Home;