import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAppointments } from '../apiService';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const appointmentsData = await getAppointments();
        const currentDate = new Date();

        // Filter to show only upcoming appointments
        const upcomingAppointments = appointmentsData.filter(appointment => 
          new Date(appointment.date) > currentDate
        );

        setAppointments(upcomingAppointments);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-green-700">Dashboard</h2>
      <p className="text-sm md:text-base text-gray-500">Welcome to your dashboard</p>

      {/* Upcoming Schedule Section */}
      <div className="mt-8 bg-green-100 p-6 rounded-md">
        <h3 className="text-lg md:text-xl font-semibold">Upcoming Schedule</h3>

        {appointments.length > 0 ? (
          <ul className="mt-4 space-y-4">
            {appointments.map((appointment) => (
              <li key={appointment.app_id} className="p-4 bg-white shadow-md rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-md font-semibold text-green-700">{appointment.patient_name}</h4>
                    <p className="text-sm text-gray-500">
                      {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
                    </p>
                  </div>
                  <button 
                    onClick={() => navigate(`/appointments/${appointment.app_id}`)} 
                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition-all">
                    View Details
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-sm text-gray-500">No upcoming appointments.</p>
        )}

        {/* Responsive buttons */}
        <div className="flex flex-col md:flex-row justify-center mt-6 gap-5 ">
          <button 
            onClick={() => navigate('/calendar')} 
            className="w-full md:w-44 h-20 md:h-44 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all">
            View Calendar
          </button>
          <button 
            onClick={() => navigate('/request-consultation')} 
            className="w-full md:w-44 h-20 md:h-44 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-all">
            Request Consultation
          </button>
          <button 
            onClick={() => navigate('/request-appointment')} 
            className="w-full md:w-44 h-20 md:h-44 bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition-all">
            Request Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
