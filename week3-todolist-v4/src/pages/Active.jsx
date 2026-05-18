import TodoList from "../components/TodoList";

import { todos } from "../data/todos";

function Active() {

    const activeTodos = todos.filter((todo) => {

        return todo.done === false;

    });

    return (

        <div className="w-full max-w-2xl mx-auto bg-white rounded-[36px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                미완료 할 일
            </h2>

            <TodoList
                sectiontitle=""
                todos={activeTodos}
                deleteTodo={() => {}}
                toggleDone={() => {}}
            />

        </div>

    );
}

export default Active;