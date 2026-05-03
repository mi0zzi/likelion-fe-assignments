import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import { todos } from "./data/todos";

function App() {

    const [todoList, setTodoList] = useState(todos);
    const [text, setText] = useState("");
    const [priority, setPriority] = useState("LOW");
    const [date, setDate] = useState("");

    const deleteTodo = (id) => {

        const newTodos = todoList.filter((todo) => {
            return todo.id !== id;
        });

        setTodoList(newTodos);
    };

    const toggleDone = (id) => {

        const newTodos = todoList.map((todo) => {

            if (todo.id === id) {

                return {
                    ...todo,
                    done: !todo.done,
                };

            }

            return todo;

        });

        setTodoList(newTodos);
    };

    const addTodo = () => {

        const newTodo = {
            id: Date.now(),
            text: text,
            priority: priority,
            createdAt: date,
            done: false,
        };

        setTodoList([...todoList, newTodo]);

        setText("");
        setPriority("LOW");
        setDate("");
    };

    return (

        <div className="bg-gray-100 min-h-screen p-10">

            <TodoHeader
                title="TODOLIST"
                count={todoList.length}
            />

            <div className="w-full max-w-6xl flex gap-8 mx-auto mt-8">

                <div className="w-1/3">

                    <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-lg sticky top-10">

                        <div className="text-center mb-6">

                            <div className="text-5xl mb-2">
                                +
                            </div>

                            <h2 className="text-2xl font-bold">
                                할 일 추가
                            </h2>

                        </div>

                        <input
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            type="text"
                            placeholder="할 일을 입력하세요"
                            className="w-full p-3 rounded-xl text-black mb-3"
                        />

                        <select
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            className="w-full p-3 rounded-xl text-black mb-3"
                        >
                            <option>
                                LOW
                            </option>

                            <option>
                                MEDIUM
                            </option>

                            <option>
                                HIGH
                            </option>

                        </select>

                        <input
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            type="date"
                            className="w-full p-3 rounded-xl text-black mb-4"
                        />

                        <button
                            onClick={addTodo}
                            className="w-full bg-white text-blue-600 py-3 rounded-2xl font-bold"
                        >
                            추가하기
                        </button>

                    </div>

                </div>

                <div className="w-2/3">

                    <TodoList
                        sectiontitle="할 일 목록"
                        todos={todoList}
                        deleteTodo={deleteTodo}
                        toggleDone={toggleDone}
                    />

                </div>

            </div>

        </div>

    );
}

export default App;