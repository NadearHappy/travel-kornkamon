import React from 'react'
import MainLayout from '../Templates/MainLayout'
import Component from '../Templates/component';

const Course = () => {
  const courses = [
    { id: 1, title: "Basic React Native", duration: 5, price: 7500 },
    { id: 2, title: "Power BI Dashboard", duration: 4, price: 5500 },
    { id: 3, title: "UI Design with Figma", duration: 3, price: 5000 },
    { id: 4, title: "Cross Platform with Flutter", duration: 5, price: 6500 },
  ];
  return (
    <MainLayout>
      <h1 className="text-3xl font-semibold ms-25 p-3">หลักสูตรที่เปิดสอน</h1>
      <hr className="p-1 mx-25" />
      <br />
      <div>
        {courses.map((c) => (
          <Component
            key={c.id}
            {...c}
          // title={c.title}
          // duration={c.duration}
          // price={c.price}
          />
        ))}
      </div>
    </MainLayout>
  );
};

export default Course