import React from 'react'
import MainLayout from '../Templates/MainLayout'

const Tips = () => {
    return (
        <MainLayout>
            <h1 className="text-3xl font-bold ms-25 p-3">เคล็ดลับการท่องเที่ยว</h1>
            <hr className="p-1 mx-25" />
            <p className="p-1 mx-25">
                1. วางแผนการชำระเงินล่วงหน้า: จองและจ่ายค่าตั๋วเครื่องบินและที่พักก่อนเดินทาง <br />
                2. วางแผนทริป: มองหาแพ็กเกจที่มาพร้อมส่วนลดสุดพิเศษ <br />
                3. วางแผนการใช้เงิน: เลือกเครื่องมือที่ช่วยให้การใช้จ่าย ‘ง่าย สะดวก รวดเร็ว ปลอดภัย’ <br />
                4. วางแผนความปลอดภัย: ซื้อประกันการเดินทางเสมอ <br />
                5. วางแผนด้านเอกสารและข้อมูล: พกเอกสารที่จำเป็นและเรียนรู้กฎระเบียบของแต่ละประเทศ
            </p>
            <br />
            <img src="/traa.png" alt="contact" className="mx-auto w-full max-w-2xl" />
        </MainLayout>
    )
}

export default Tips