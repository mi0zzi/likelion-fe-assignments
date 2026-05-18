import { useEffect, useState } from "react";

import axios from "axios";

function ApiPage() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        const getPosts = async () => {

            try {
                await new Promise((resolve) => {

                    setTimeout(resolve, 3000);

                });

                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts?_limit=5"
                );

                setPosts(response.data);

            } catch (error) {

                setError(true);

            } finally {

                setLoading(false);

            }

        };

        getPosts();

    }, []);

    if (loading) {

        return (

            <div className="w-full max-w-2xl mx-auto bg-white rounded-[36px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

                <div className="flex flex-col items-center justify-center py-20">

                    <div className="w-14 h-14 border-4 border-[#7C86FF] border-t-transparent rounded-full animate-spin mb-6"></div>

                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        데이터를 불러오는 중
                    </h2>

                    <p className="text-gray-400">
                        잠시만 기다려주세요
                    </p>

                </div>

            </div>

        );

    }

    if (error) {

        return (

            <div className="w-full max-w-2xl mx-auto bg-white rounded-[36px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

                <div className="flex flex-col items-center justify-center py-20">

                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-4xl mb-6">
                        ⚠️
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        API 요청 실패
                    </h2>

                    <p className="text-gray-400 text-center">
                        데이터를 불러오지 못했습니다.
                        <br />
                        잠시 후 다시 시도해주세요.
                    </p>

                </div>

            </div>

        );

    }

    return (

        <div className="w-full max-w-2xl mx-auto bg-white rounded-[36px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

            <div className="mb-8 text-center">

                <h2 className="text-3xl font-black text-gray-800 mb-2">
                    API 데이터
                </h2>

                <p className="text-gray-400">
                    외부 데이터를 성공적으로 불러왔어요
                </p>

            </div>

            <div className="space-y-4">

                {posts.map((post) => {

                    return (

                        <div
                            key={post.id}
                            className="bg-[#F7F8FE] rounded-3xl p-5 shadow-sm"
                        >

                            <div className="flex items-start justify-between mb-3">

                                <div className="w-10 h-10 bg-[#7C86FF] rounded-2xl flex items-center justify-center text-white font-bold">
                                    {post.id}
                                </div>

                            </div>

                            <h3 className="text-lg font-bold text-gray-800 mb-2 leading-relaxed">
                                {post.title}
                            </h3>

                            <p className="text-sm text-gray-500 leading-relaxed">
                                {post.body}
                            </p>

                        </div>

                    );

                })}

            </div>

        </div>

    );
}

export default ApiPage;