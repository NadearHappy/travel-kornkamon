import React from 'react'
import MainLayout from '../Templates/MainLayout'

const Contact = () => {
  return (
    <MainLayout>
      <h1 className="text-3xl font-semibold ms-25 p-3">ติดต่อเรา</h1>
      <hr className="p-1 mx-25" />
      <p className="p-1 mx-25">
        <b>Blue Horizon Travel</b>
        <b>ที่อยู่:</b> 123 ถนนท่องเที่ยว กรุงเทพฯ 10110 <br />
        <b>โทรศัพท์:</b> 02-123-4567 <br />
        <b>อีเมล:</b> info@bluehorizontravel.com
      </p>
      <br />
      <img src="/tingting.png" alt="contact" className="mx-auto w-full max-w-2xl" />
    </MainLayout>
  );
};

export default Contact