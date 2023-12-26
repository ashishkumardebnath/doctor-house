import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/bookings?email=${user?.email}`).then((res) =>
        res.json()
      ),
  });

  console.log(bookings);

  return (
    <div className="px-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4">My Appointment</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-base-200">
              <th>#</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Service</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <tr key={booking._Id}>
                <th>{i + 1}</th>
                <td>{booking.patientName}</td>
                <td>{booking.appointmentDate}</td>
                <td>{booking.slot}</td>
                <td>{booking.treatment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
