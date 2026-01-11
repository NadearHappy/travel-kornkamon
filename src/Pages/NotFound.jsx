import React from 'react'
import MainLayout from '../Templates/MainLayout'

const NotFound = () => {
    return (
        <MainLayout>
            <div className="m-20">
                <h1 className="text-3xl">ไม่พบหน้าที่ต้องการ</h1>
                <br />
                <p>
                    กรุณาตรวจสอบ URL อีกครั้ง หรือกลับไปที่หน้าหลัก
                </p>
                <br />
                <img src="/error.png" alt="error" className="mx-auto w-full max-w-2xl" />
            </div>
        </MainLayout>
    );
};

export default NotFound