import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import OurDoctors from "../OurDoctors/OurDoctors";
import OurServices from "../OurServices/OurServices";
import Testimonial from "../Testimonial/Testimonial";
import Timing from "../Timing/Timing";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Doctor House</title>
      </Helmet>
      <Banner></Banner>
      <OurServices></OurServices>
      <Timing></Timing>
      <Testimonial></Testimonial>
      <OurDoctors></OurDoctors>
      <Contact></Contact>
    </div>
  );
};

export default Home;
