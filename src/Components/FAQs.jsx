import React from 'react'

const FAQs = () => {
    const faqs = [
    {
      icon: <i className="bi bi-calendar-check"></i>,
      text: "How to manage time and get good marks for trips",
    },
    {
      icon: <i className="bi bi-clock"></i>,
      text: "How to regulate transactions over time",
    },
    {
      icon: <i className="bi bi-cash-coin"></i>,
      text: "Withdrawing money through an ATM",
    },
  ];
  return (
    <div className='cards '>
      <div className="info p-4 text-primary font-family-marker tracking-widest font-bold 
      text-2xl text-center">
        <h1>INFORMATION FOR DRIVERS</h1>
      </div>
<div >
{faqs.map((item, index) => (
  <div key={index} className='flex faq justify-between items-center'>
    <div className='flex  gap-4 p-2'>
    {item.icon}
<h1 className='text-wrap  '>{item.text}</h1>
  </div>
   <div className='mt-5'><i className="bi bi-chevron-right"></i></div>
  </div>
))}
</div>
    </div>
  )
}

export default FAQs
