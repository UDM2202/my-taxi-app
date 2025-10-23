import avatar from "../assets/Gemini_Generated_Image_ugsx49ugsx49ugsx-removebg-preview.png"

const Riders = () => {
  
  return (
    <div className="cards w-full flex items-center flex-col gap-4">
<div className="image flex justify-center hover:scale-[1.1] transition duration-300 ease-in-out">
  <img src={avatar} alt="Display Picture" className="w-[10rem]" />
</div>
<div className="name">
  <h1 className=" text-primary font-family-marker font-bold tracking-widest p-2 text-2xl">ULOKAJI DANIEL</h1>
</div>
<div className="location  text-primary font-family-marker font-bold tracking-widest p-1 -translate-y-4">
  <i className="bi bi-geo-alt"></i> New York, USA
</div>
   <div className="info flex gap-4 font-bold mb-4 -translate-y-4">
        <div className="w-full text-nowrap text-center">
          <h5>Days at work</h5>
          <h3>28</h3>
        </div>
        <div className="text-center">
          <h5>Rides</h5>
          <h3>427</h3>
        </div>
        <div className="text-center">
          <h5>Hours</h5>
          <h3>76</h3>
        </div>
      </div>
    </div>
  )
}


export default Riders
