const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, image, slots } = appointmentOption;

  return (
    <div className="card  shadow-xl mt-10">
      <figure className="px-10 pt-10">
        <img src={image} alt="" className="rounded-full bg-pink-50 p-4" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-bold ">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <div className="card-actions">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(appointmentOption)}
            htmlFor="booking-modal"
            className="btn btn-primary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
