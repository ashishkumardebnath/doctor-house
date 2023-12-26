import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home/Home";
import OurServices from "../Home/OurServices/OurServices";
import OurDoctors from "../Home/OurDoctors/OurDoctors";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Contact from "../Home/Contact/Contact";
import Appointment from "../Appointment/Appointment/Appointment";
import PrivateRoutes from "./PrivateRoutes";
import DashboardLayouts from "../../Layout/DashboardLayouts";
import MyAppointment from "../Dashboard/MyAppointment/MyAppointment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "ourservices",
        element: <OurServices></OurServices>,
      },
      {
        path: "ourdoctor",
        element: <OurDoctors></OurDoctors>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "appointment",
        element: (
          <PrivateRoutes>
            <Appointment></Appointment>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayouts></DashboardLayouts>,
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
    ],
  },
]);
