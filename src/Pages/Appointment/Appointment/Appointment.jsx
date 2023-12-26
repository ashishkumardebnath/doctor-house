import { useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AppointmentBanner2 from "../AppointmentBanner2/AppointmentBanner2";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";
import { Helmet } from "react-helmet-async";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <Helmet>
        <title>Doctor House || Appointment</title>
      </Helmet>
      <AppointmentBanner></AppointmentBanner>
      <AppointmentBanner2
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppointmentBanner2>
      <AvailableAppointments
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AvailableAppointments>
    </div>
  );
};

export default Appointment;
