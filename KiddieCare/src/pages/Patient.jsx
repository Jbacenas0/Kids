import React, { useEffect, useState } from 'react';
import { getPatients } from '../apiService';

const Patient = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const data = await getPatients();
        setPatients(data);
      } catch (error) {
        console.error('Failed to fetch patients:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="p-6 bg-white h-screen flex flex-col">
      <h2 className="text-xl font-bold text-green-700">Patients Information</h2>
      <p className="text-sm text-gray-500">List of all registered patients</p>

      {/* Scrollable Table Container */}
      <div className="mt-8 flex-grow overflow-y-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-100">Patient ID</th>
              <th className="py-2 px-4 bg-gray-100">Name</th>
              <th className="py-2 px-4 bg-gray-100">Age</th>
              <th className="py-2 px-4 bg-gray-100">Contact Number</th>
              <th className="py-2 px-4 bg-gray-100">Email</th>
              <th className="py-2 px-4 bg-gray-100">Address</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td className="py-2 px-4 text-center">{patient.id}</td>
                <td className="py-2 px-4 text-center">{patient.name}</td>
                <td className="py-2 px-4 text-center">{patient.age}</td>
                <td className="py-2 px-4 text-center">{patient.contact_number}</td>
                <td className="py-2 px-4 text-center">{patient.email}</td>
                <td className="py-2 px-4 text-center">{patient.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patient;
