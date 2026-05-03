function TodoItem({ id, text, priority, createdAt, done, deleteTodo, toggleDone }) {

    let cardStyle = "bg-white p-5 mb-4 rounded-2xl flex justify-between items-center shadow-sm";
    let checkStyle = "w-6 h-6 rounded-full border-2 border-blue-400";
    let textStyle = "text-gray-700 font-medium";
    let check = "";

    if (done) {
        cardStyle = "bg-white p-5 mb-4 rounded-2xl flex justify-between items-center shadow-sm opacity-60";
        checkStyle = "w-6 h-6 rounded-full bg-blue-500 text-white flex justify-center items-center";
        textStyle = "line-through text-gray-400 font-medium";
        check = "✓";
    }

    return (
        <li className={cardStyle}>

            <div className="flex items-center gap-4">

                <button onClick={() => toggleDone(id)} className={checkStyle}>
                    {check}
                </button>

                <div>

                    <div className={textStyle}>
                        {text}
                    </div>

                    <div className="text-sm text-gray-400 mt-1">
                        {priority} · {createdAt}
                    </div>

                </div>

            </div>

            <button onClick={() => deleteTodo(id)} className="text-gray-300 hover:text-red-400 text-lg">
                🗑
            </button>

        </li>
    );
}

export default TodoItem;