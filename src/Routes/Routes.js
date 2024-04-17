import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BookingPage from "../pages/BookingPage";
import About from "../pages/About";
import Order from "../pages/Order";
import Login from "../pages/Login";
import Confirmation from "../pages/Confirmation";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reservations" element={<BookingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
};

export default Routing;
