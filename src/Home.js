import { useState, useEffect} from 'react';
import TodoList from './TodoList';
// e is an event object
const Home = () => {
    // let name = 'Rahul';
    // i should be unique
    const [todos, setTodos] = useState([
        {task: 'Learn react', body: 'lorem-ipsum...', dewDate: '5-March 2021', author: 'Rahul', id: 1},
        {task: 'Google register', body: 'lorem-ipsum...', dewDate: '15-March 2021', author: 'Rajdeep', id: 2},
        {task: 'Task', body: 'lorem-ipsum...', dewDate: '28-Feb 2021', author: 'Rahul', id: 3}
    ]);
    const [name, setName] = useState('Rahul');

    const handleDelete = (id) => {
        const newTodos = todos.filter(blog => blog.id !== id);
        setTodos(newTodos);
    }
    useEffect(()=>{
        console.log("useEffect ran!!");
        console.log(name);
    }, [name]); // Only run when name change (not run if delete a task)

    
    return ( 
        <div className="Homepage">
            <TodoList todos= { todos } tasks="To-Do List" handleDelete = {handleDelete} />
            {/* <TodoList todos= { todos.filter((todo) => todo.author === 'Rahul') } tasks="Rahul's Task" /> */}
            <button onClick = {() => setName('Rajdeep')}>change name</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default Home;