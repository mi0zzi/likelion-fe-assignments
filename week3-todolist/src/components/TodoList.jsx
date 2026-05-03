import TodoItem from "./TodoItem";

function TodoList({ sectiontitle, todos, deleteTodo, toggleDone }) {

    return (
        <section>

            <h2 className="text-sm text-gray-400 font-bold mb-4">
                {sectiontitle}
            </h2>

            <ul>

                {todos.map((todo) => {

                    return (
                        <TodoItem key={todo.id} id={todo.id} text={todo.text} priority={todo.priority} createdAt={todo.createdAt} done={todo.done} deleteTodo={deleteTodo} toggleDone={toggleDone} />
                    );

                })}

            </ul>

        </section>
    );
}

export default TodoList;