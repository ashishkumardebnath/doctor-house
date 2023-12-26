import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Helmet } from "react-helmet-async";

const OurDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div>
      <div className=" md:mt-10 md:mx-28">
        <Helmet>
          <title>Doctor House || Doctors</title>
        </Helmet>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Our Expert Doctors</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa{" "}
            <br /> quae ab illo inve ntore veritatis et quasi architecto beatae
            vitae dicta sunt explicabo.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {doctors.map((doctor) => (
            <div
              className="card bg-base-100 shadow-xl border py-6 "
              key={doctor._id}
            >
              <figure>
                <img src={doctor.img} alt="Shoes" />
              </figure>
              <div className="card-body ">
                <h2 className="card-title font-bold">{doctor.name}</h2>
                <p>{doctor.title}</p>
                <Rating
                  style={{ maxWidth: 100 }}
                  value={doctor.rating}
                  readOnly
                />
                <p className="flex items-center gap-2">
                  <CiLocationOn></CiLocationOn>
                  {doctor.location}
                </p>
                <p className="flex items-center gap-2">
                  <SlCalender />
                  {doctor.timing}
                </p>
                <p className="flex items-center gap-2">
                  <RiMoneyDollarCircleLine />${doctor.amount}
                </p>
                <div>
                  <button className="btn btn-outline hover:bg-[#F7A582] bg-gray-300 border-0 w-full  mt-5">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurDoctors;
