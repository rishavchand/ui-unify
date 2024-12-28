'use client';

import { CodeBlockDemo } from '@/components/ui/Codeblock';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PreviewPage() {
    const [componentCode, setComponentCode] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    useEffect(() => {
        try {
            const storedCode = localStorage.getItem('aiResponse');
            if (!storedCode) {
                setError('No component code found. Please generate a component first.');
                return;
            }

            // Basic sanitization to remove potentially harmful tags or attributes
            const sanitizedCode = storedCode
                .replace(/<script[^>]*?>.*?<\/script>/gi, '') // Remove script tags
                .replace(/on\w+=".*?"/gi, '') // Remove inline event handlers like onclick
                .replace(/javascript:/gi, '') // Remove javascript: in links or attributes
                .replace(/<style[^>]*?>.*?<\/style>/gi, '') // Remove style tags
                .replace(/<iframe[^>]*?>.*?<\/iframe>/gi, '') // Remove iframe tags
                .replace(/\\n/g, '\n') // Replace escaped newlines with actual newlines
                .replace(/```jsx/g, '') // Remove ```jsx markers
                .replace(/```/g, '') // Remove ``` markers
                .replace(/"/g, ''); // Remove double quotes
            setComponentCode(sanitizedCode);
        } catch (err) {
            console.error('Error retrieving component code:', err);
            setError('Failed to load component code. Please try again.');
        }
    }, []);

    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <header className="text-center mb-10">
                <h1 className="sm:text-4xl text-3xl font-bold text-gray-800 dark:text-gray-200">
                    <span>
                        <span className="text-red-400">UÍ</span>
                        -Unify
                    </span>{' '}
                    Component Source Code
                </h1>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-4">
                    Below is the raw code for the component you generated.
                </p>
            </header>
            <div className="p-4 rounded-md ">
                {error ? (
                    <p className="text-red-500 dark:text-red-400">{error}</p>
                ) : (
                    <pre className="text-sm overflow-auto text-gray-800 dark:text-gray-200">
                        <CodeBlockDemo code={componentCode} filename="code.tsx" />
                    </pre>
                )}
            </div>
            <button
                onClick={() => router.push('/Ai')}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
            >
                Back
            </button>
        </div>
    );
}
