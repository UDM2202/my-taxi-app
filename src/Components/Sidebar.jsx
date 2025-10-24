import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState, useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

const Sidebar = () => {
  const [currentLink, setCurrentLink] = useState(1)

  const menuItems = [
    { id: 1, icon: 'bi bi-grid-1x2-fill', label: 'Dashboard' },
    { id: 2, icon: 'bi bi-people-fill', label: 'Riders' },
    { id: 3, icon: 'bi bi-credit-card-fill', label: 'Payment Details' },
    { id: 4, icon: 'bi bi-book-half', label: 'Learning Centre' },
    { id: 5, icon: 'bi bi-chat-text-fill', label: 'FAQs' },
    { id: 6, icon: 'bi bi-gear-fill', label: 'Settings' },
  ]

   useEffect(() => {
    const sr = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `
        .brand,
        .links>ul>li:nth-of-type(1),
        .links>ul>li:nth-of-type(2),
        .links>ul>li:nth-of-type(3),
        .links>ul>li:nth-of-type(4),
        .links>ul>li:nth-of-type(5),
        .links>ul>li:nth-of-type(6),
        .logout
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <div className="w-[250px] fixed top-0 left-0 h-screen bg-sidebar flex-col
justify-between px-0 py-[2rem] hidden md:flex z-40">
      <div className="top brand flex text-primary font-family-marker gap-4 font-bold justify-center items-center
      text-2xl">
        <i className="bi bi-taxi-front-fill "></i>
        <h1 className='tracking-widest'>MY TAXI</h1>
      </div>
      <div className="middle absolute top-25">
        <div className="links  flex justify-center px-4">
          <ul className='flex flex-col'>
            {menuItems.map((items) => (
              <li key={items.id} onClick={() => setCurrentLink(items.id)}
              className={`w-full p-4 ${currentLink === items.id ? "active" : ""}`}>
                <a href="#">
                  <i className={items.icon}></i>
                  <span  className='p-4'>{items.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bottom flex justify-center items-center mx-4 mt-8 logout">
        <a href="#" className='flex p-2 gap-2'>
          <i className="bi bi-box-arrow-right"></i>
          <span>Logout</span>
        </a>
      </div>
    </div>
  )
}

export default Sidebar
