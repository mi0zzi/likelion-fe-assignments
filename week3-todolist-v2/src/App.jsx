import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import { todos } from "./data/todos";

function App() {

    const [todoList, setTodoList] = useState(todos);
    const [text, setText] = useState("");
    const [priority, setPriority] = useState("LOW");
    const [date, setDate] = useState("");
    const [filter, setFilter] = useState("전체");

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

        if (text === "") {
            return;
        }

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

    let filteredTodos = todoList;

    if (filter === "완료") {

    filteredTodos = todoList.filter((todo) => {
        return todo.done === true;
    });

    }

    if (filter === "미완료") {

    filteredTodos = todoList.filter((todo) => {
        return todo.done === false;
    });

    }

    return (

    <div className="bg-[#F4F6FB] min-h-screen flex justify-center items-center p-8">

        <div className="w-full max-w-2xl bg-white rounded-[36px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

            <TodoHeader title="TODOLIST" count={todoList.length} />

            <div className="bg-[#F7F8FE] rounded-[28px] p-6 mt-6">

                <div className="mb-6">

                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        type="text"
                        placeholder="할 일을 입력하세요"
                        className="w-full bg-white px-5 py-4 rounded-2xl outline-none text-gray-700 shadow-sm mb-3"
                    />

                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="w-full bg-white px-5 py-4 rounded-2xl outline-none text-gray-700 shadow-sm mb-3"
                    >
                        <option>LOW</option>
                        <option>MEDIUM</option>
                        <option>HIGH</option>
                    </select>

                    <input
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        type="date"
                        className="w-full bg-white px-5 py-4 rounded-2xl outline-none text-gray-700 shadow-sm mb-4"
                    />

                    <button onClick={addTodo} className="w-full bg-[#7C86FF] text-white py-4 rounded-2xl font-bold shadow-md">
                        추가하기
                    </button>

                </div>

                <div className="flex gap-3 mb-5">

                    <button onClick={() => setFilter("전체")} className="flex-1 bg-white py-3 rounded-2xl text-gray-600 font-semibold shadow-sm">
                        전체
                    </button>

                    <button onClick={() => setFilter("완료")} className="flex-1 bg-white py-3 rounded-2xl text-gray-600 font-semibold shadow-sm">
                        완료
                    </button>

                    <button onClick={() => setFilter("미완료")} className="flex-1 bg-white py-3 rounded-2xl text-gray-600 font-semibold shadow-sm">
                        미완료
                    </button>

                </div>

                <TodoList sectiontitle="할 일 목록" todos={filteredTodos} deleteTodo={deleteTodo} toggleDone={toggleDone} />

            </div>

        </div>

    </div>

);

  
}

export default App;