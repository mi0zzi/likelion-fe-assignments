function TodoHeader({ title, count }) {

    return (
        <div className="mb-6">

            <h1 className="text-4xl font-bold text-gray-800 mb-2">
                {title}
            </h1>

            <p className="text-gray-400">
                해야 할 일 {count}개
            </p>

        </div>
    );
}

export default TodoHeader;