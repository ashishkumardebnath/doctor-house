import chair from "../../../assets/chair 1.png";

import { DayPicker } from "react-day-picker";

const AppointmentBanner2 = ({ selectedDate, setSelectedDate }) => {
  return (
    <header>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className="max-w-sm rounded-xl shadow-md" src={chair} alt="" />
          <div>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner2;
