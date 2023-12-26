import test from "../../../assets/text1-removebg-preview.png";
const AppointmentBanner = () => {
  return (
    <div className="bannerCover  md:flex justify-between mb-28  px-36 rounded-b-lg pb-20 ">
      <div className="flex justify-center items-center pt-20 md:mt-28">
        <div>
          <h3 className="text-4xl font-semibold text-white mb-4">
            Your Best Medical <br /> Help Center
          </h3>
          <h2 className="  text-5xl text-slate-300 mb-6">Appointment Now!</h2>
          {/* <button className="btn btn-secondary font-bold text-white">
            All Service
          </button> */}
        </div>
      </div>
      <div className="mt-24">
        <img src={test} alt="" />
      </div>
    </div>
  );
};

export default AppointmentBanner;
