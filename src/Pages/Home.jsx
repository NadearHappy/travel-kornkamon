import React from 'react'
import MainLayout from '../Templates/MainLayout'

const Home = () => {
    return (
        <MainLayout>
            <h1 className="text-3xl font-bold ms-25 p-3">หน้าหลัก</h1>
            <hr className="p-1 mx-25" />
            <img src="/blue-horizon.png" alt="รูปหน้าหลัก" className="mx-auto w-full max-w-2xl" />
        </MainLayout>
    );
};

export default Home