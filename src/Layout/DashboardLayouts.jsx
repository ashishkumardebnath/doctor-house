import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open ">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content pt-20">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="dashboard-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content pt-20">
            {/* Sidebar content here */}
            <li>
              <Link className="/dashboard">My Appointment</Link>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayouts;
