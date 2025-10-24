import Displaypic from "../assets/Displaypic.jpg"

const Payment = () => {
 const transactions = [
    {
      image: Displaypic,
      name: "From Ulokaji Joshua",
      time: "Today, 16:36",
      amount: "+$50",
    },
    {
      image: Displaypic,
      name: "To Eminem",
      time: "Today, 08:49",
      amount: "-$25",
    },
    {
      image: Displaypic,
      name: "From Jadon S.",
      time: "Yesterday, 14:36",
      amount: "+$50",
    },
  ];
  return (
   <div className="cards">
      <div className="title text-center">
     <h1 className=' text-primary font-family-marker gap-4 font-bold tracking-widest p-2 text-2xl'>YOUR TRANSFERS</h1>
      </div>
      <div className="details">
        {transactions.map((item) => (
          <div className="transaction-container relative flex justify-between items-center lg:gap-8 ">
            <div className="top  flex justify-center items-center gap-4">
            <div className="image  w-10 my-4 rounded-full overflow-hidden">
            <img src={item.image} alt="pic"  className="w-full h-full object-cover"/>
            </div>
            <div className="transfer-name font-bold">
              <h1>{item.name}</h1>
              <h1>{item.time}</h1>
            </div>
            </div>
            <div className="fees my-4 right-2">
              <span className="p-2 rounded-full text-primary hover:bg-primary hover:text-black w-[4rem] bg-[#d7e41e1d] 
           transition-all 
  duration-300 
  ease-in-out">{item.amount}</span>
            </div>
          </div>
        ))}
      </div>
       <a className="view w-full flex justify-end align-middle p-4 mb-4 gap-2   hover:[&>i]:translate-x-2 text-[#ffc107] font-bold" href="#">
  View all <i className="bi bi-arrow-right transition-all duration-300 ease-in-out font-bold"></i>
</a>
    </div>
  )
}

export default Payment
