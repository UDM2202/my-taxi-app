import 'bootstrap-icons/font/bootstrap-icons.css'

const Analytics = () => {
  return (
      <div className='grid grid-cols-1 xs:grid-cols-2'>
        <div className=" card flex justify-evenly items-center gap-4 rounded-2xl">
          <div className='font-bold'>
            <h1>Spent this month</h1>
            <h1 className='text-xl'>$682.5</h1>
          </div>
          <div className='bg-black rounded-full flex justify-center items-center w-[75px] h-[75px] p-6'>
            <i className="bi bi-calendar2-week-fill   bg-black rounded-full p- text-2xl text-white"></i>
          </div>
        </div>
        <div className="card flex justify-evenly gap-4 items-center rounded-2xl">
          <div className='bg-black rounded-full flex justify-center items-center w-[75px] h-[75px] p-6'>
            <i className="bi bi-graph-up-arrow  bg-black rounded-full p- text-2xl text-white"></i>
          </div>
          <div className='font-bold'>
            <h1>Earnings</h1>
            <h1 className='text-xl'>$350.45</h1>
          </div>
        </div>
        <div className="card flex justify-evenly gap-4 items-center rounded-2xl">
          <div className='bg-black rounded-full flex justify-center items-center w-[75px] h-[75px] p-6'>
            <i className="bi bi-people-fill    bg-black rounded-full p- text-2xl text-white"></i>
          </div>
          <div className='font-bold'>
            <h1 className='text-nowrap'>New Clients</h1>
            <h1 className='text-xl'>321</h1>
          </div>
        </div>
        <div className="card flex justify-evenly gap-4 items-center rounded-2xl">
          <div className='font-bold'>
            <h1>Activity</h1>
            <h1 className='text-xl'>$540.50</h1>
          </div>
          <div className='bg-black rounded-full flex justify-center items-center w-[75px] h-[75px] p-6'>
            <i className="bi bi-activity    bg-black rounded-full p- text-2xl text-white"></i>
          </div>
        </div>
      </div>
  )
}

export default Analytics
