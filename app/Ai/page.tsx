'use client';
import { useState } from 'react';
import axios from 'axios';

export default function Page() {
    const [prompt, setPrompt] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.post('http://localhost:3000/api/ai', {
                prompt: prompt,
            });
            localStorage.setItem('aiResponse', response.data.response);
            console.log('Response:', response.data.response);
        } catch (error) {
            console.error('Error submitting prompt:', error);
            setError('Error submitting prompt. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <header className="text-center mb-10">
                <h1 className="sm:text-4xl text-3xl font-bold text-gray-800 dark:text-gray-200">
                    <span className="font-bold text-red-400">
                        UÍ
                        <span className="text-gray-800 dark:text-[#E7E9EC]">-Unify</span>
                    </span>{' '}
                    AI Components
                </h1>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-4">
                    Create, customize, and integrate components effortlessly with our
                    AI-powered tools.
                </p>
            </header>
            <div className="flex justify-center align">
                <div>
                    <h1 className="text-4xl mt-10 font-semibold">
                        What do you want to build?
                    </h1>
                    <p className="flex justify-center mt-2 text-gray-400">
                        Prompt, run, edit, and deploy full-stack web apps.
                    </p>
                    <div className="mt-10 flex justify-center w-full">
                        <textarea
                            className="rounded-md w-full h-32 p-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
                            placeholder="Enter your prompt here..."
                            style={{ width: '100%' }}
                            onChange={(e) => setPrompt(e.target.value)}
                        />
                    </div>
                    {error && (
                        <div className="mt-2 text-red-500 text-center">{error}</div>
                    )}
                    <div className="mt-2 flex justify-center">
                        <button
                            className="bg-red-400 dark:bg-red-600 text-white h-10 w-32 rounded-lg transition-colors duration-300 hover:bg-red-500 dark:hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 dark:focus:ring-red-600"
                            onClick={handleSubmit}
                            disabled={loading}
                        >
                            {loading ? 'Loading...' : 'Submit Prompt'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
