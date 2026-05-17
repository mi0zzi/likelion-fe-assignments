function TodoItem({ id, text, priority, createdAt, done, deleteTodo, toggleDone }) {

    let cardStyle = "bg-white p-4 mb-3 rounded-2xl flex justify-between items-center shadow-sm";
    let checkStyle = "w-7 h-7 rounded-xl border-2 border-[#7C86FF] text-[#7C86FF] flex justify-center items-center";
    let textStyle = "text-gray-800 font-bold";
    let check = "";

    let priorityStyle = "bg-green-100 text-green-700";

    if (priority === "HIGH") {
        priorityStyle = "bg-red-100 text-red-700";
    }

    if (priority === "MEDIUM") {
        priorityStyle = "bg-yellow-100 text-yellow-700";
    }

    if (done) {
    cardStyle = "bg-white p-4 mb-3 rounded-2xl flex justify-between items-center shadow-sm opacity-60";
    checkStyle = "w-7 h-7 rounded-xl bg-[#7C86FF] text-white flex justify-center items-center";
    textStyle = "line-through text-gray-400 font-bold";
    check = "✓";
    }

    return (
        <li className={cardStyle}>

            <div className="flex items-center gap-4">

                <button onClick={() => toggleDone(id)} className={checkStyle}>
                    {check}
                </button>

                <div className="flex flex-col items-start">

                    <div className={textStyle}>
                        {text}
                    </div>

                    <div className="flex gap-2 mt-2">

                    <div className={`text-xs px-2 py-1 rounded-full ${priorityStyle}`}>
                        {priority}
                    </div>

                    <div className="text-sm text-gray-400">
                        {createdAt}
                    </div>

                    </div>


                </div>

            </div>

            <button onClick={() => deleteTodo(id)} className="bg-[#F1F2FF] text-[#7C86FF] px-3 py-2 rounded-xl text-sm font-bold">
                🗑
            </button>

        </li>
    );
}

export default TodoItem;