import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import About from "./pages/About";
import Error from "./pages/Error";
import Logout from "./pages/Logout";
import AdminLayout from "./components/Layout/AdminLayout";
import AdminUsers from "./pages/Admin-Users";
import AdminContacts from "./pages/Admin-Contacts";
import AdminUpdate from "./pages/Admin-Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route exact path="users/:id/edit" element={<AdminUpdate />} />
            <Route path="contacts" element={<AdminContacts />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
