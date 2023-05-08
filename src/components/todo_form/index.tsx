import './todo_form.css';

const TodoForm = () => {
    return (
        <form>
            <div className="input">
                <input type="text" placeholder='+ Add task...'/>
            </div>
            <div className="btn">
                <button>Add +</button>
            </div>
        </form>
    );
};

export default TodoForm;