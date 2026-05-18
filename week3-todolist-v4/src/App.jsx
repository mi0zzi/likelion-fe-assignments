import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Active from "./pages/Active";
import ApiPage from "./pages/ApiPage";

function App() {

    return (

        <div className="bg-[#F4F6FB] min-h-screen p-10">

            <div className="max-w-4xl mx-auto">

                <h1 className="text-4xl font-black text-center mb-8 text-gray-800">
                    TODOLIST
                </h1>

                <nav className="flex justify-center gap-4 mb-8">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>

                            isActive
                            ? "bg-[#7C86FF] text-white px-5 py-3 rounded-2xl font-bold shadow-sm"
                            : "bg-white text-gray-700 px-5 py-3 rounded-2xl font-bold shadow-sm"

                        }
                    >
                        전체
                    </NavLink>

                    <NavLink
                        to="/active"
                        className={({ isActive }) =>

                            isActive
                            ? "bg-[#7C86FF] text-white px-5 py-3 rounded-2xl font-bold shadow-sm"
                            : "bg-white text-gray-700 px-5 py-3 rounded-2xl font-bold shadow-sm"

                        }
                    >
                        미완료
                    </NavLink>

                    <NavLink
                        to="/api"
                        className={({ isActive }) =>

                            isActive
                            ? "bg-[#7C86FF] text-white px-5 py-3 rounded-2xl font-bold shadow-sm"
                            : "bg-white text-gray-700 px-5 py-3 rounded-2xl font-bold shadow-sm"

                        }
                    >
                        API
                    </NavLink>

                </nav>

                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route path="/active" element={<Active />} />

                    <Route path="/api" element={<ApiPage />} />

                </Routes>

            </div>

        </div>

    );
}

export default App;