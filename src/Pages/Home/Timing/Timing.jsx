import time from "../../../assets/Frame.png";
import location from "../../../assets/Vector (1).png";
import contact from "../../../assets/Vector (2).png";
const Timing = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-6 mx-4 md:mx-28 my-28 text-white">
      <div className="flex  bg-green-950 p-10 text-center gap-2 rounded-md">
        <img className="w-12 h-12" src={time} alt="" />
        <div className=" text-start">
          <h2 className="text-2xl">Opening Hours</h2>
          <p>
            Open 9.00 am to 5.00pm <br /> Everyday
          </p>
        </div>
      </div>
      <div className="flex bg-pink-400 p-10 text-center gap-2 rounded-md">
        <img className="w-12 h-12" src={location} alt="" />
        <div className=" text-start">
          <h2 className="text-2xl">Our Locations</h2>
          <p>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
        </div>
      </div>
      <div className="flex bg-green-950 p-10 text-center gap-2 rounded-md">
        <img className="w-12 h-12" src={contact} alt="" />
        <div>
          <h2 className="text-2xl">Contact Us</h2>
          <p>
            +88 01750 00 00 00 <br /> +88 01750 00 00 00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timing;
