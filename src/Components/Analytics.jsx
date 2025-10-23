import 'bootstrap-icons/font/bootstrap-icons.css'

const Analytics = () => {
  return (
    <div>
      <div className='grid grid-cols-1   xs:grid xs:grid-cols-2'>
        <div className="card flex justify-between">
          <div className='content mt-4 font-bold '>
          <h1>Spent this month</h1>
          <h1 className="text-2xl">$682.9</h1>
          </div>
          <div className='flex '>
            <i className="bi bi-calendar2-week-fill  p-5 bg-black rounded-full m-2 text-4xl text-white"></i>
          </div>
        </div>
        <div className="card flex justify-between">
           <div className='flex '>
            <i className="bi bi-graph-up-arrow p-5 bg-black rounded-full m-2 text-4xl text-white"></i>
          </div>
          <div className='content mt-4 font-bold pl-4'>
          <h1>Earnings</h1>
          <h1 className="text-2xl">$350.45</h1>
          </div>
         
        </div>
        <div className="card flex justify-between">
          <div className='content mt-4 font-bold pl-4'>
          <h1>New Clients</h1>
          <h1 className="text-2xl">321</h1>
          </div>
          <div className='flex '>
            <i className="bi bi-people-fill p-5 bg-black rounded-full m-2 text-4xl text-white"></i>
          </div>
        </div>
        <div className="card flex justify-between">
          <div className='flex '>
            <i className="bi bi-activity p-5 bg-black rounded-full m-2 text-4xl text-white"></i>
          </div>
          <div className='content mt-4 font-bold pl-4'>
          <h1>Activity</h1>
          <h1 className="text-2xl">$540.50</h1>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Analytics
