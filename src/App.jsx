// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Homepage from "./pages/Homepage.jsx";
import Trade from "./pages/Admin/Trade.jsx";
import Event from "./pages/Admin/Event.jsx";
import Login from "./pages/Login.jsx";
import ProductTable from "./pages/Admin/ProductTable.jsx";
import TradeGallery from "./pages/Trade.tsx";
import EventsGallery from "./pages/Events.tsx";

const AppLayout = () => {
  const location = useLocation();

  // Check if the current route requires a sidebar
  const showSidebar =
    location.pathname === "/admin/trade" ||
    location.pathname === "/admin/event" ||
    location.pathname === "/admin/producttable";

  // Check if the current route is one of the admin routes
  const isAdminRoute =
    location.pathname === "/admin/trade" ||
    location.pathname === "/admin/event";

  return (
    <div style={{ display: "flex" }}>
      {showSidebar && <Sidebar />}
      <main
        style={{
          backgroundColor: "#fff0d1",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: showSidebar ? 0 : 0,
          width: "100%",
          // Apply height and paddingTop only for admin routes
          height: isAdminRoute ? "100vh" : "auto",
          paddingTop: isAdminRoute ? "15%" : "0",
        }}
      >
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/gallery/trade" element={<TradeGallery />} />
          <Route path="/gallery/events" element={<EventsGallery />} />

          <Route path="/admin" element={<Login />} />
          <Route path="/admin/producttable" element={<ProductTable />} />
          <Route path="/admin/trade" element={<Trade />} />
          <Route path="/admin/event" element={<Event />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
