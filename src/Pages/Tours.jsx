import React from 'react'
import MainLayout from '../Templates/MainLayout';
import Component from '../Templates/component';


const Tours = () => {
  const tourses = [
    { id: 1, title: "ทะเลกระบี่-หมู่เกาะพีพี", duration: 3, price: 4900, image: <img src="/01.png" alt="" />, type: "ในประเทศ" },
    { id: 2, title: "ดอยอินทนนท์-เชียงใหม", duration: 4, price: 6500, image: <img src="/02.png" alt="" />, type: "ในประเทศ" },
    { id: 3, title: "โตเกียว-ฟูจิ", duration: 5, price: 32900, image: <img src="/03.png" alt="" />, type: "ต่างประเทศ" },
    { id: 4, title: "เที่ยวโซลตามรอยซีรีส์ดัง", duration: 4, price: 21500, image: <img src="/04.png" alt="" />, type: "ต่างประเทศ" },
  ];
  return (
    <MainLayout>
      <h1 className="text-3xl font-semibold ms-25 p-3">แพคเกจทัวร์</h1>
      <hr className="p-1 mx-25" />
      <br />
      <div>
        {tourses.map((t) => (
          <Component
            key={t.id}
            {...t}
          />
        ))}
      </div>
    </MainLayout>
  )
}

export default Tours