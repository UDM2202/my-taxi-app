import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react';
const Navbar = () => {
   const [currentLink, setCurrentLink] = useState(1);
   const [openMenu, setOpenMenu] = useState(false);

   const handleMenu = () => {
setOpenMenu(!openMenu);
   }

   const menuItems = [
    { id: 1, icon: 'bi bi-grid-1x2-fill', label: 'Dashboard' },
    { id: 2, icon: 'bi bi-people-fill', label: 'Riders' },
    { id: 3, icon: 'bi bi-credit-card-fill', label: 'Payment Details' },
    { id: 4, icon: 'bi bi-book-half', label: 'Learning Centre' },
    { id: 5, icon: 'bi bi-chat-text-fill', label: 'FAQs' },
    { id: 6, icon: 'bi bi-gear-fill', label: 'Settings' },,
  ]
  return (
    <div className='lg:hidden'>
<div className="header flex p-6 text-primary font-family-marker gap-4 font-bold 
      text-2xl bg-sidebar justify-between">
        <div className='flex gap-4'>
   <i className="bi bi-taxi-front-fill "></i>
        <h1 className='tracking-widest text-3xl'>MY TAXI</h1>
        </div>
        <button 
        onClick={handleMenu}
        className=' text-white text-2xl cursor-pointer z-100 '
        >
        <i className={`bi ${openMenu ? "bi-x" : "bi-border-width" } text-2xl`}></i>
          </button>
</div>

<div className={`menu bg-black transition-all duration-700 ease-in-out
  ${openMenu ? "max-h-screen opacity-100 translate-x-0 " : "max-h-0 opacity-0 overflow-hidden translate-x-full"} cursor-pointer z-50 absolute w-[70%] right-0 h-full flex flex-col justify-between top-0 fixed`}
>
<div className="links p-8">
  <ul className='translate-y-15'>
    {menuItems.map((item) => (
    <li key={item.id}
    onClick={() => {setCurrentLink(item.id);
      setOpenMenu(false);
    }}
    className={`w-full  p-4 ${currentLink === item.id ? "active" : ""}`}
    >
       <a href="#">
                  <i className={item.icon}></i>
                  <span  className='px-2'>{item.label}</span>
                </a>
    </li>
    ))}
  </ul>
</div>
 <div className="bottom flex justify-center items-center mx-4">
        <a href="#" className='flex p-4 gap-2'>
          <i className="bi bi-box-arrow-right"></i>
          <span>Logout</span>
        </a>
      </div>
</div>
    </div>
  )
}

export default Navbar
