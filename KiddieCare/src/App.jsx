import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Patient from "./pages/Patient";
import Dashboard from "./pages/Dashboard";
import Appointments from "./pages/Appointments";
import Calendar from "./pages/Calendar";
import RequestConsultation from "./pages/RequestConsultation";
import RequestAppointment from "./pages/RequestAppointment";
import WelcomePage from "./pages/WelcomePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define WelcomePage as the landing page */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/registrationpage" element={<RegistrationPage />} />
        <Route path="/loginpage" element={<LoginPage />} />

        {/* Main App Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/patients" element={<Patient />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/request-consultation" element={<RequestConsultation />} />
          <Route path="/request-appointment" element={<RequestAppointment />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
