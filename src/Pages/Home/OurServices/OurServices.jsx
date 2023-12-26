import services from "../../../assets/Rectangle 20078.png";
import services1 from "../../../assets/Rectangle 10.png";
import { Helmet } from "react-helmet-async";
const OurServices = () => {
  return (
    <div>
      <Helmet>
        <title>Doctor House || Services</title>
      </Helmet>
      <div className="grid lg:grid-cols-2 justify-center items-center mx-4 lg:mx-28 lg:gap-6 lg:my-28">
        <div>
          <img src={services} alt="" />
        </div>
        <div>
          <div>
            <h2 className="text-2xl font-bold text-black lg:text-left text-center lg:mt-0 mt-10">
              Our Services
            </h2>
            <p className="my-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inve ntore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div>
              <div className="join grid grid-cols-3 gap-4 mb-12 mt-5">
                <button className="join-item bg-pink-400  btn btn-outline">
                  Cavity Protection
                </button>
                <button className="join-item btn  btn-outline">
                  Cosmetic Dentisty
                </button>
                <button className="join-item btn btn-outline">
                  Oral Surgery
                </button>
              </div>
            </div>
            <div>
              <img src={services1} alt="" />
            </div>
            <div>
              <h2 className="text-2xl text-center lg:text-left font-semibold my-4">
                Electro Gastrology Therapy
              </h2>
              <p className="mb-2 text-center lg:text-left">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inve ntore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste
                natus error
              </p>
              <p className=" text-center md:text-left">
                Sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo.
              </p>
              <div className=" text-center md:text-left">
                <button className="btn btn-outline  text-pink-600 mt-5">
                  More Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
