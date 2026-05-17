function TodoHeader({ title, count }) {

    return (
        <div className="text-center">

            <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-3">
                {title}
            </h1>

            <p className="text-gray-400 font-medium">
                해야 할 일 {count}개
            </p>

        </div>
    );
}

export default TodoHeader;