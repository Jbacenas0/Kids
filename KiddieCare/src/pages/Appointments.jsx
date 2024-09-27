import React, { useEffect, useState } from 'react';
import { getAppointments } from '../apiService';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await getAppointments();
        setAppointments(data);
      } catch (error) {
        console.error('Failed to fetch appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="p-6 bg-white h-screen flex flex-col">
      <h2 className="text-xl font-bold text-green-700">Appointments & Consultations</h2>
      <p className="text-sm text-gray-500">Appointments & Consultations</p>

      {/* Scrollable Table Container */}
      <div className="mt-8 flex-grow overflow-y-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-100">Appt. ID</th>
              <th className="py-2 px-4 bg-gray-100">Patient Name</th>
              <th className="py-2 px-4 bg-gray-100">Date</th>
              <th className="py-2 px-4 bg-gray-100">Time</th>
              <th className="py-2 px-4 bg-gray-100">Description</th>
              <th className="py-2 px-4 bg-gray-100">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.app_id}>
                <td className="py-2 px-4 text-center">{appointment.app_id}</td>
                <td className="py-2 px-4 text-center">{appointment.patient_name}</td>
                <td className="py-2 px-4 text-center">{appointment.date}</td>
                <td className="py-2 px-4 text-center">{appointment.time}</td>
                <td className="py-2 px-4 text-center">{appointment.description}</td>
                <td className="py-2 px-4 flex space-x-2 justify-center">
                  <button className="bg-green-500 text-white px-3 py-1 rounded-md">View</button>
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded-md">Edit</button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded-md">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
