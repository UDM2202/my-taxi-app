import Navbar from './Navbar'
import Analytics from './Analytics'
import FAQs from './FAQs'
import Earnings from './Earnings'
import Payment from './Payment'
import Riders from './Riders'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'
const Dashboard = () => {

   useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "80px",
      duration: 1500,
      reset: false,
    });
    
    sr.reveal(
      `
        .nav,
        .row__one,
        .row__two
      `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);

  return (
    <div className='Dashboard overflow-x-hidden row__one w-full md:ml-[250px] md:w-[calc(100%-250px)] lg:h-screen lg:flex lg:flex-col'>
      <Navbar/>
      <div className='md:flex justify-between items-center w-full  style={{ maxHeight: `calc(100vh - ${navbarHeight}) sm:mt-4'>
        
      <div className="pt-2 px-3 xs:ml-8 ml-8">
        <div>
        <h1 className='text-sm font-bold'>Hi UDM,</h1>
        </div>
        <div className='2xl:flex 2xl:items-end gap-4'>
            <h1 className='text-2xl font-bold'>Welcome to</h1>
        <h1 className=' text-primary font-family-marker gap-4 font-bold tracking-widest sm:pt-2 text-4xl'>MY TAXI DASHBOARD</h1>
        </div>
      </div>
      <div className="search-bar mt-4 xl:mr-4 xl:w-[30%] xl:mt-10">
        <input type="text" className='bg-sidebar mx-[30px] p-4 rounded-2xl text-primary font-family-marker
         focus:outline-none w-[80%] sm:w-[90%] '
        placeholder='Search'
        />
      </div>
      </div>
      <div className="grid p-3 pt-0 mt-8">
      <div className="row__one grid xl:grid-cols-2 mb-2">
        <Analytics />
        <FAQs/>
      </div>
      <div className="row__two grid xl:grid-cols-3">
        <Earnings/>
        <Payment/>
        <Riders/>
      </div>
     </div> 
    </div>
  )
}

export default Dashboard
