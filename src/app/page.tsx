// pages/page.tsx
import React from 'react';
import Header from './components/Header';

const Page: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="p-5">
                <h1 className="text-4xl font-bold mb-4">Welcome to Loot Monster Games!</h1>
                <p className="text-xl">Embark on epic adventures in our immersive games.</p>
            </div>
        </div>
    );
};

export default Page;
