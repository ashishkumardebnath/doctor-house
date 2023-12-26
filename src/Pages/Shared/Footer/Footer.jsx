import img from "../../../assets/Group 36.png";
const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="footer p-10  text-black  bg-zinc-200 ">
        <nav className="justify-center">
          <img src={img} alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the <br /> printing and
            typesetting industry. has been <br /> since the printer took.
          </p>
          <button className="btn btn-outline hover:bg-pink-600  text-pink-600 mt-5">
            Appointment
          </button>
        </nav>
        <nav>
          <header className=" text-xl font-bold">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className=" text-xl font-bold">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className=" text-xl font-bold">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2023 - All right reserved by Doctor House</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
