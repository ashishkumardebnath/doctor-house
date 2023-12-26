import bannerImg from "../../../assets/Group 34991.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="bannerCover  md:flex justify-between mb-28  pb-20 md:px-28">
      <div className="flex justify-center items-center ">
        <div className="mt-20">
          <h3 className="text-4xl font-semibold text-center lg:text-start text-white mb-4">
            Your Best Medical <br /> Help Center
          </h3>
          <p className=" text-white text-center lg:text-start mb-6">
            Lorem Ipsum is simply dummy text they are printing typesetting{" "}
            <br /> has been the industry’s stardard.
          </p>
          <div className="text-center lg:text-start">
            <button className="btn btn-secondary  font-bold text-white">
              All Service
            </button>
          </div>
        </div>
      </div>
      <div className="md:mt-24">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
