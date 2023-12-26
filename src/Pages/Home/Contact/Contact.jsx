import { Helmet } from "react-helmet-async";
import "./Contact.css";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
  return (
    <div>
      <div className="appointment  grid lg:grid-cols-2 justify-center items-center md:mx-28 mx-4  py-6 md:mt-28 rounded-md">
        <Helmet>
          <title>Doctor House || Contact</title>
        </Helmet>
        <div className=" text-white md:p-20 mx-4">
          <h3 className="text-3xl text-center md:text-left font-bold mb-3">
            Contact With Us
          </h3>
          <small>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi.
          </small>
          <p className=" flex items-center gap-2 my-3">
            <BsTelephoneInboundFill />
            +88 01750 14 14 14
          </p>
          <p className="flex items-center gap-2">
            <CiLocationOn />
            Dhanmondi, Dhaka, Bangladesh
          </p>
        </div>
        <div className=" lg:justify-between mx-4 mt-5">
          <div>
            <span className="grid lg:grid-cols-2  gap-4 lg:pr-12">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered 	 "
              />
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered "
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered"
              />
              <input
                type="text"
                placeholder="Doctor Name"
                className="input input-bordered "
              />
              <input
                type="text"
                placeholder="Date"
                className="input input-bordered"
              />
              <input
                type="text"
                placeholder="Time"
                className="input input-bordered 	"
              />
            </span>
            <input
              className="btn  bg-[#F7A582] text-white w-full lg:w-[450px] mt-4"
              type="button"
              value="Book Now!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
